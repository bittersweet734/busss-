import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY, SERVICES } from "@/content/site";

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-white/10 bg-ink">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 lg:px-10 lg:py-20">
      <div className="md:col-span-5">
        <Logo />
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">
          {COMPANY.tagline} General contracting, renovations, custom homes and commercial fit-outs across New York.
        </p>
      </div>

      <div className="md:col-span-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">Services</p>
        <ul className="mt-5 space-y-3">
          {SERVICES.map((s) => (
            <li key={s.id}>
              <Link data-testid={`footer-link-${s.id}`} to={`/services#${s.id}`} className="text-sm text-zinc-300 transition-colors duration-300 hover:text-ember">
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">Company</p>
        <ul className="mt-5 space-y-3">
          {[
            { to: "/about", label: "About" },
            { to: "/gallery", label: "Gallery" },
            { to: "/testimonials", label: "Testimonials" },
            { to: "/faq", label: "FAQ" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <li key={l.to}>
              <Link data-testid={`footer-link-${l.label.toLowerCase()}`} to={l.to} className="text-sm text-zinc-300 transition-colors duration-300 hover:text-ember">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">Talk to us</p>
        <ul className="mt-5 space-y-4 text-sm text-zinc-300">
          <li className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
            <a data-testid="footer-phone-link" href={COMPANY.phoneHref} className="transition-colors duration-300 hover:text-ember">{COMPANY.phoneDisplay}</a>
          </li>
          <li className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
            <a href={`mailto:${COMPANY.email}`} className="break-all transition-colors duration-300 hover:text-ember">{COMPANY.email}</a>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
            <span>{COMPANY.address}</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <p className="uppercase tracking-[0.2em]">Licensed · Bonded · Insured</p>
      </div>
    </div>
  </footer>
);
