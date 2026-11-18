import asyncio
import hmac
import logging
import os
from contextlib import suppress
from datetime import datetime, timezone
from pathlib import Path
from typing import Annotated, List, Optional

from bson import ObjectId
from dotenv import load_dotenv
from fastapi import FastAPI, APIRouter, Header, HTTPException, Query, status
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, BeforeValidator, ConfigDict, Field
from pymongo import ASCENDING, DESCENDING, IndexModel

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
ADMIN_PASSCODE = os.environ['ADMIN_PASSCODE']


def _coerce_oid(v):
    return str(v) if isinstance(v, ObjectId) else v


PyObjectId = Annotated[str, BeforeValidator(_coerce_oid)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(extra="ignore", populate_by_name=True)

    id: PyObjectId = Field(default=None, alias="_id")

    def to_mongo(self):
        doc = self.model_dump(by_alias=True, exclude_none=True)
        if not doc.get("_id"):
            doc.pop("_id", None)
        return doc

    @classmethod
    def from_mongo(cls, doc):
        return cls(**doc)


INDEXES: dict[str, list[IndexModel]] = {
    "quote_requests": [
        IndexModel([("created_at", DESCENDING)], name="created_at_desc"),
    ],
}


async def ensure_indexes() -> None:
    for collection, models in INDEXES.items():
        for model in models:
            try:
                await db[collection].create_indexes([model])
            except Exception as exc:
                logging.getLogger(__name__).error("ensure_indexes(%s.%s): %s", collection, model.document["name"], exc)


app = FastAPI()
api_router = APIRouter(prefix="/api")


class QuoteRequestCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    phone: str = Field(min_length=5, max_length=30)
    email: Optional[str] = Field(default=None, max_length=160)
    service: Optional[str] = Field(default=None, max_length=80)
    message: str = Field(min_length=1, max_length=5000)


class QuoteRequest(BaseDocument):
    name: str
    phone: str
    email: Optional[str] = None
    service: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class QuoteRequestOut(BaseModel):
    id: str
    name: str
    phone: str
    email: Optional[str] = None
    service: Optional[str] = None
    message: str
    created_at: str


def require_admin(x_admin_passcode: Annotated[Optional[str], Header()] = None):
    if not x_admin_passcode or not hmac.compare_digest(x_admin_passcode, ADMIN_PASSCODE):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid admin passcode")
    return True


@api_router.get("/")
async def root():
    return {"message": "BuildRight Construction API"}


@api_router.post("/quote-requests", status_code=201)
async def create_quote_request(payload: QuoteRequestCreate):
    doc = QuoteRequest(
        name=payload.name.strip(),
        phone=payload.phone.strip(),
        email=(payload.email or "").strip() or None,
        service=(payload.service or "").strip() or None,
        message=payload.message.strip(),
        created_at=datetime.now(timezone.utc),
    ).to_mongo()
    result = await db.quote_requests.insert_one(doc)
    return {"id": str(result.inserted_id), "ok": True}


@api_router.get("/admin/quote-requests", response_model=List[QuoteRequestOut])
async def list_quote_requests(limit: int = Query(100, ge=1, le=100), x_admin_passcode: Annotated[Optional[str], Header()] = None):
    require_admin(x_admin_passcode)
    rows = []
    cursor = db.quote_requests.find({}).sort("created_at", DESCENDING).limit(limit)
    async for doc in cursor:
        item = QuoteRequest.from_mongo(doc)
        rows.append(QuoteRequestOut(
            id=item.id,
            name=item.name,
            phone=item.phone,
            email=item.email,
            service=item.service,
            message=item.message,
            created_at=item.created_at.isoformat() if isinstance(item.created_at, datetime) else str(item.created_at),
        ))
    return rows


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def start_index_build():
    app.state.index_task = asyncio.create_task(ensure_indexes())


@app.on_event("shutdown")
async def shutdown_db_client():
    app.state.index_task.cancel()
    with suppress(asyncio.CancelledError):
        await app.state.index_task
    client.close()
