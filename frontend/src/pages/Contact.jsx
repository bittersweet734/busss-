import { Clock, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Eyebrow, Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { COMPANY } from "@/content/site";

const Contact = () => (
  <div data-testid="contact-page">
    <SEO
      title="Contact BuildRight Construction | Call Now or Request a Free Quote"
      description="Call BuildRight Construction at +1 (800) 555-0199 or send a quote request. Free site visits and itemized written estimates within 3–5 business days."
    />

    <section className="grain relative overflow-hidden border-b border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
            Tell us what <span className="text-outline">you're building.</span>
          </h1>
        </Reveal>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <Reveal>
            <div data-testid="contact-call-card" className="grain relative border border-ember/40 bg-charcoal p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">Fastest answer: the phone</p>
              <a
                data-testid="contact-call-now-button"
                href={COMPANY.phoneHref}
                className="mt-5 inline-flex items-center gap-3 font-display text-3xl font-extrabold tracking-tight text-bone transition-colors duration-300 hover:text-ember lg:text-4xl"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-ember text-white">
                  <Phone className="h-5 w-5" />
                </span>
                {COMPANY.phoneDisplay}
              </a>
              <p className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-400">
                <Clock className="h-4 w-4 text-brass" /> {COMPANY.hours}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <a data-testid="contact-email-card" href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 border border-white/10 bg-charcoal p-8 transition-[border-color] duration-300 hover:border-ember/50">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-ember">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Email us</span>
                <span className="mt-1 block break-all text-sm font-bold text-bone">{COMPANY.email}</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.16}>
            <div data-testid="contact-address-card" className="flex items-start gap-4 border border-white/10 bg-charcoal p-8">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-ember">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Office</span>
                <span className="mt-1 block text-sm font-bold text-bone">{COMPANY.address}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <a data-testid="contact-facebook-link" href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 border border-white/10 bg-charcoal p-8 transition-[border-color,background-color] duration-300 hover:border-ember/50 hover:bg-charcoal2">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-ember">
                <Facebook className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Follow us</span>
                <span className="mt-1 block text-sm font-bold text-bone">BuildRight Construction on Facebook</span>
                <span className="mt-1 block text-xs text-zinc-500">Recent projects, site updates and behind-the-scenes — opens in a new tab.</span>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="border border-white/10 bg-charcoal p-8 lg:p-10" data-testid="contact-quote-panel">
            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">Request a quote</h2>
            <p className="mt-2 text-sm text-zinc-400">Written itemized estimate within 3–5 business days. Free, no obligation.</p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Contact;
