const ITEMS = [
  "On-time handovers",
  "Itemized pricing",
  "Licensed & insured",
  "2-year workmanship warranty",
  "150+ projects delivered",
  "Weekly progress reports",
];

const Ribbon = ({ hidden = false }) => (
  <div aria-hidden={hidden} className="flex shrink-0 items-center">
    {ITEMS.map((item) => (
      <span key={item} className="flex items-center">
        <span className="whitespace-nowrap px-6 font-display text-xl font-extrabold uppercase tracking-tight text-ink sm:text-2xl lg:px-10">{item}</span>
        <span className="h-2.5 w-2.5 rotate-45 bg-ember" />
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <section data-testid="editorial-marquee" className="overflow-hidden border-y border-ink/20 bg-bone py-5">
    <div className="marquee-track">
      <Ribbon />
      <Ribbon hidden />
    </div>
  </section>
);
