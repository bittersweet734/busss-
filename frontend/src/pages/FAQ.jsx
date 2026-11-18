import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { Eyebrow, Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { FAQS } from "@/content/site";

const FAQ = () => (
  <div data-testid="faq-page">
    <SEO
      title="FAQ | Quotes, Timelines & Process — BuildRight Construction"
      description="How BuildRight Construction quotes and runs projects: free itemized estimates, permits handled, milestone payments, and a 2-year workmanship warranty."
    />

    <section className="grain relative overflow-hidden border-b border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
        <Reveal>
          <Eyebrow>Questions & answers</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
            Straight <span className="text-outline">answers.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            How our quotes, schedules and payments work — before you pick up the phone.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="mx-auto max-w-4xl px-5 py-20 lg:px-10 lg:py-28">
      <Accordion type="single" collapsible className="w-full">
        {FAQS.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-white/10" data-testid={`faq-accordion-item-${i + 1}`}>
            <AccordionTrigger className="py-6 text-left font-display text-lg font-bold tracking-tight hover:text-ember hover:no-underline [&[data-state=open]>svg]:text-ember">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>

    <CTABand />
  </div>
);

export default FAQ;
