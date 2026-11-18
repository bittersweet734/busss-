import { BadgeCheck, MapPin, Star } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Eyebrow, Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { TESTIMONIALS } from "@/content/site";

const Testimonials = () => (
  <div data-testid="testimonials-page">
    <SEO
      title="Client Testimonials | Verified Reviews — BuildRight Construction"
      description="Read verified reviews from BuildRight Construction clients — custom home builds, renovations and commercial fit-outs delivered on time and on budget."
    />

    <section className="grain relative overflow-hidden border-b border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
        <Reveal>
          <Eyebrow>Testimonials</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
            On the record.
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-8" data-testid="testimonials-summary">
            <p className="font-editorial text-6xl text-ember lg:text-7xl">5.0</p>
            <div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-ember text-ember" />)}
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-400">From verified project reviews</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.06}>
            <figure data-testid={`testimonial-card-${i}`} className="flex h-full flex-col border border-white/10 bg-charcoal p-8 transition-[border-color] duration-300 hover:border-ember/50">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => <Star key={s} className="h-4 w-4 fill-ember text-ember" />)}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-ember">
                  <BadgeCheck className="h-4 w-4" /> Verified
                </span>
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-zinc-300">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-bold">{t.name}</p>
                <p className="mt-1 text-xs text-zinc-500">{t.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 border border-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-300">
                    <MapPin className="h-3 w-3 text-ember" /> {t.location}
                  </span>
                  <span className="border border-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-300">{t.projectType}</span>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>

    <CTABand />
  </div>
);

export default Testimonials;
