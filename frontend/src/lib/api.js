const API_BASE = `${process.env.REACT_APP_BACKEND_URL}/api`;

export async function submitQuoteRequest(data) {
  const res = await fetch(`${API_BASE}/quote-requests`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || "Could not submit your request");
  }
  return res.json();
}

export async function fetchQuoteRequests(passcode) {
  const res = await fetch(`${API_BASE}/admin/quote-requests`, {
    headers: { "X-Admin-Passcode": passcode },
  });
  if (res.status === 401) throw new Error("Invalid passcode");
  if (!res.ok) throw new Error("Could not load submissions");
  return res.json();
}
