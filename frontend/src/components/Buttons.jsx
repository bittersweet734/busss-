import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/content/site";

export const CallNowButton = ({ testid = "call-now-button", className = "" }) => (
  <a
    data-testid={testid}
    href={COMPANY.phoneHref}
    className={`inline-flex items-center justify-center gap-2.5 bg-ember px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-emberdark ${className}`}
  >
    <Phone className="h-4 w-4" />
    Call {COMPANY.phoneDisplay}
  </a>
);

export const QuoteButton = ({ testid = "request-quote-button", to = "/contact", className = "" }) => (
  <Link
    data-testid={testid}
    to={to}
    className={`inline-flex items-center justify-center gap-2.5 border border-bone/30 bg-white/5 px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-bone backdrop-blur-sm transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-bone hover:bg-bone hover:text-ink ${className}`}
  >
    Request a Quote
    <ArrowRight className="h-4 w-4" />
  </Link>
);
