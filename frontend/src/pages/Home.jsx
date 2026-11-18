import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, BadgeCheck, ChevronDown, Star } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Eyebrow, Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { CTABand } from "@/components/CTABand";
import { CallNowButton, QuoteButton } from "@/components/Buttons";
import { GALLERY, HERO_IMAGE, PROCESS, SERVICES, STATS, TESTIMONIALS } from "@/content/site";

const HERO_LINES = [
  { text: "WE BUILD" },
  { text: "STRUCTURES", outline: true },
  { text: "THAT ENDURE." },
];

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

const SectionHead = ({ eyebrow, title, link, linkLabel, testid }) => (
  <Reveal className="flex flex-wrap items-end justify-between gap-6">
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
    </div>
    {link && (
      <Link data-testid={testid} to={link} className="group inline-flex items-center gap-2 border-b border-ember pb-1 text-xs font-bold uppercase tracking-[0.2em] text-ember transition-colors duration-300 hover:text-bone hover:border-bone">
        {linkLabel}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    )}
  </Reveal>
);

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.2]);

  return (
    <div data-testid="home-page">
      <SEO
        title="BuildRight Construction | General Contractor — Renovations, New Builds & Commercial Fit-Outs"
        description="General contracting, renovations, custom home builds and commercial fit-outs. Call +1 (800) 555-0199 or request a free itemized quote."
      />

      <section ref={heroRef} data-testid="home-hero" className="grain relative flex min-h-screen flex-col overflow-hidden">
        <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Modern custom home built by BuildRight Construction" className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-16 pt-36 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-brass"
          >
            General Contractor — San Ildefonso
          </motion.p>

          <h1 className="mt-6 font-display text-[13.5vw] font-black leading-[0.93] tracking-tight sm:text-7xl lg:text-8xl xl:text-[7.25rem]">
            {HERO_LINES.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${line.outline ? "text-outline" : ""}`}
                  initial={{ y: "112%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.2 + i * 0.13, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line.text === "THAT ENDURE." ? (
                    <>THAT <span className="text-ember">ENDURE.</span></>
                  ) : (
                    line.text
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg"
          >
            General contracting, renovations, custom homes and commercial fit-outs — delivered on time, on budget, and built to outlast the contract.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <CallNowButton testid="hero-call-now-button" />
            <QuoteButton testid="hero-request-quote-button" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative z-10 border-t border-white/10 bg-ink/50 backdrop-blur-sm"
          data-testid="home-stats-strip"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-4 px-5 py-6 sm:grid-cols-4 lg:px-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-extrabold text-bone sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="absolute bottom-28 right-8 z-10 hidden text-zinc-400 lg:block"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </section>

      <Marquee />

      <section data-testid="home-services" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <SectionHead eyebrow="What we do" title="Four trades. One contract." link="/services" linkLabel="All services" testid="home-all-services-link" />
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08} className={spans[i]}>
              <Link
                data-testid={`service-card-${s.id}`}
                to={`/services#${s.id}`}
                className="group relative block h-72 overflow-hidden border border-white/10 bg-charcoal lg:h-[420px]"
              >
                <img src={s.image} alt={`${s.title} project by BuildRight Construction`} className="absolute inset-0 h-full w-full object-cover opacity-60 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="font-editorial text-sm text-ember">{s.number}</p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">{s.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-300">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ember transition-colors duration-300 group-hover:text-bone">
                    Explore
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section data-testid="home-featured" className="border-t border-white/10 bg-charcoal/40">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <SectionHead eyebrow="Selected work" title="Proof, not promises." link="/gallery" linkLabel="View gallery" testid="home-gallery-link" />
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {GALLERY.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className={i === 0 ? "lg:col-span-2" : ""}>
                <Link to="/gallery" data-testid={`home-featured-${i}`} className="group relative block overflow-hidden border border-white/10">
                  <img src={p.url} alt={p.title} className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? "h-72 lg:h-[480px]" : "h-72 lg:h-96"}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-6 lg:p-8">
                    <div>
                      <p className="font-display text-xl font-extrabold tracking-tight lg:text-2xl">{p.title}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-400">{p.location} · {p.meta}</p>
                    </div>
                    <span className="border border-white/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-bone">{p.category}</span>
                  </figcaption>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="home-process" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            From first call to final walkthrough.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.07} className="bg-ink">
              <div className="h-full p-8" data-testid={`process-step-${step.number}`}>
                <p className="font-editorial text-3xl text-ember">{step.number}</p>
                <h3 className="mt-6 font-display text-lg font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section data-testid="home-testimonials" className="border-t border-white/10 bg-charcoal/40">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <SectionHead eyebrow="Client words" title="Verified, on the record." link="/testimonials" linkLabel="All reviews" testid="home-testimonials-link" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure data-testid={`home-testimonial-${i}`} className="flex h-full flex-col border border-white/10 bg-charcoal p-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, s) => <Star key={s} className="h-4 w-4 fill-ember text-ember" />)}
                  </div>
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-zinc-300">"{t.quote}"</blockquote>
                  <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-sm font-bold">{t.name}</p>
                      <p className="mt-0.5 text-xs text-zinc-500">{t.role} · {t.location}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-ember">
                      <BadgeCheck className="h-4 w-4" /> Verified
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
};

export default Home;
