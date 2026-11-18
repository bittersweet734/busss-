import { Reveal, Eyebrow } from "./Reveal";
import { CallNowButton, QuoteButton } from "./Buttons";

export const CTABand = () => (
  <section data-testid="cta-band" className="grain relative border-t border-white/10 bg-charcoal2">
    <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <Eyebrow>Start your project</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">
          Ready to break ground?
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
          Call now for a free consultation, or request a written itemized quote — we reply within 3–5 business days.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <CallNowButton testid="cta-band-call-button" />
          <QuoteButton testid="cta-band-quote-button" />
        </div>
      </Reveal>
    </div>
  </section>
);
