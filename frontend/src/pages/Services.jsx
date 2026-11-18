import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Eyebrow, Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { ArrowRight } from "lucide-react";
import { COMPANY, SERVICES } from "@/content/site";

const Services = () => (
  <div data-testid="services-page">
    <SEO
      title="Services | General Contracting, Renovations, New Builds & Fit-Outs"
      description="Explore BuildRight Construction services: general contracting, renovations and remodeling, custom new home builds, and commercial fit-outs. Free itemized quotes."
    />

    <section className="grain relative overflow-hidden border-b border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
        <Reveal>
          <Eyebrow>Our services</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
            Every trade, <span className="text-outline">under one roof.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Four disciplines, one accountable contract. Each service below includes a free site visit and a written itemized estimate.
          </p>
        </Reveal>
      </div>
    </section>

    {SERVICES.map((s, i) => (
      <section key={s.id} id={s.id} data-testid={`service-section-${s.id}`} className="scroll-mt-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <div className={`grid items-center gap-12 lg:grid-cols-12 ${i % 2 === 1 ? "" : ""}`}>
            <Reveal className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative">
                <img src={s.image} alt={`${s.title} — BuildRight Construction`} className="h-80 w-full border border-white/10 object-cover lg:h-[480px]" />
                <span className="absolute -top-5 left-6 bg-ember px-4 py-2 font-editorial text-lg text-white">{s.number}</span>
              </div>
            </Reveal>
            <Reveal delay={0.1} className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{s.title}</h2>
              <p className="mt-4 text-base font-semibold text-brass sm:text-lg">{s.short}</p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">{s.description}</p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {s.scope.map((item) => (
                  <li key={item} className="border border-white/10 bg-charcoal px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  data-testid={`service-cta-${s.id}`}
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-ember px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-emberdark"
                >
                  Discuss this project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 border border-bone/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-bone transition-[background-color,color] duration-300 hover:bg-bone hover:text-ink"
                >
                  <Phone className="h-4 w-4" />
                  {COMPANY.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    ))}

    <CTABand />
  </div>
);

export default Services;
