export const LogoMark = ({ className = "h-9 w-9" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <rect width="64" height="64" rx="12" fill="#0D0E10" stroke="rgba(244,244,242,0.15)" />
    <path d="M17 45 32 25l15 20" fill="none" stroke="#EA580C" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" />
    <path d="M15 51h34" stroke="#F4F4F2" strokeWidth="6" strokeLinecap="square" />
  </svg>
);

export const Logo = ({ className = "" }) => (
  <span className={`inline-flex items-center gap-3 ${className}`} data-testid="nav-brand-logo">
    <LogoMark className="h-9 w-9" />
    <span className="leading-none">
      <span className="block font-display text-lg font-extrabold tracking-tight text-bone">BUILDRIGHT</span>
      <span className="block text-[10px] font-semibold tracking-[0.35em] text-muted-foreground">CONSTRUCTION</span>
    </span>
  </span>
);
