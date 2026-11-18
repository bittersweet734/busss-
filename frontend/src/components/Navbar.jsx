import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY } from "@/content/site";

const LINKS = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        scrolled || open ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link to="/" aria-label="BuildRight Construction home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" data-testid="nav-desktop-links">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.to.slice(1)}`}
              className={`text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                pathname.startsWith(l.to) ? "text-ember" : "text-zinc-300 hover:text-bone"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            data-testid="nav-call-now-button"
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-brass transition-colors duration-300 hover:text-bone"
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phoneDisplay}
          </a>
          <Link
            data-testid="nav-request-quote-button"
            to="/contact"
            className="bg-ember px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-emberdark"
          >
            Request a Quote
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a data-testid="nav-call-now-mobile" href={COMPANY.phoneHref} aria-label="Call now" className="flex h-11 w-11 items-center justify-center border border-white/15 text-ember">
            <Phone className="h-5 w-5" />
          </a>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center border border-white/15 text-bone"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="nav-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col px-5 pb-8 pt-2">
              {LINKS.map((l, i) => (
                <motion.div key={l.to} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.05 }}>
                  <Link
                    to={l.to}
                    data-testid={`nav-mobile-link-${l.to.slice(1)}`}
                    className={`block border-b border-white/5 py-4 font-display text-2xl font-extrabold tracking-tight ${pathname.startsWith(l.to) ? "text-ember" : "text-bone"}`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact" data-testid="nav-mobile-quote-button" className="mt-6 bg-ember px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-white">
                Request a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
