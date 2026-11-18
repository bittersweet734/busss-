import { BadgeCheck } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Eyebrow, Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { ABOUT_IMAGES, APPROACH, COMPANY, CREDENTIALS } from "@/content/site";

const About = () => (
  <div data-testid="about-page">
    <SEO
      title="About BuildRight Construction | Our Story & Approach"
      description="22 years of construction experience, one accountable team per build. Learn how BuildRight runs projects — pricing you can audit and schedules we keep."
    />

    <section className="grain relative overflow-hidden border-b border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
        <Reveal>
          <Eyebrow>About BuildRight</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
            The crew behind <span className="text-outline">the contract.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            {COMPANY.name} was founded on a simple premise: a construction project should be the most predictable part of your week.
          </p>
        </Reveal>
      </div>
    </section>

    <section data-testid="about-story" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid items-start gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img src={ABOUT_IMAGES.team} alt="BuildRight site supervisors reviewing blueprint specifications" className="h-[420px] w-full border border-white/10 object-cover lg:h-[560px]" />
            <div className="absolute -bottom-6 -right-4 hidden border border-white/10 bg-ink p-6 sm:block lg:-right-6">
              <p className="font-editorial text-4xl text-ember">22</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-400">Years in the trade</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:pt-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Built on the boring stuff done right.</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-400">
            <p>
              We started as a two-person framing crew and grew by doing the unglamorous things properly: answering the phone, showing up when we said we would, and writing down exactly what a project costs before anyone swings a hammer.
            </p>
            <p>
              Today we run general contracting, renovations, custom home builds and commercial fit-outs — each with one accountable project manager, a published build calendar, and weekly written reports. Most of our work still comes from clients who hired us twice.
            </p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {CREDENTIALS.map((c) => (
              <li key={c} className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-300">
                <BadgeCheck className="h-4 w-4 text-ember" /> {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>

    <section data-testid="about-approach" className="border-t border-white/10 bg-charcoal/40">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Four rules we don't bend.</h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {APPROACH.map((a, i) => (
            <Reveal key={a.number} delay={i * 0.07} className="bg-ink">
              <div className="h-full p-8 lg:p-10" data-testid={`approach-${a.number}`}>
                <p className="font-editorial text-3xl text-ember">{a.number}</p>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section data-testid="about-craft" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <figure>
            <img src={ABOUT_IMAGES.craft} alt="BuildRight carpenter on site" className="h-80 w-full border border-white/10 object-cover lg:h-[440px]" />
            <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">In-house crews, no day-labor roulette</figcaption>
          </figure>
        </Reveal>
        <Reveal delay={0.1}>
          <figure>
            <img src={ABOUT_IMAGES.office} alt="BuildRight project managers planning a build" className="h-80 w-full border border-white/10 object-cover lg:h-[440px]" />
            <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">Every build planned on paper before it starts</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>

    <CTABand />
  </div>
);

export default About;
