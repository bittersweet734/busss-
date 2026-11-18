import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Eyebrow, Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { GALLERY, GALLERY_CATEGORIES } from "@/content/site";

const slug = (c) => c.toLowerCase().replace(/\s+/g, "-");

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null);

  const items = filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  const step = (dir) => setOpen((open + dir + items.length) % items.length);

  return (
    <div data-testid="gallery-page">
      <SEO
        title="Project Gallery | BuildRight Construction Portfolio"
        description="Browse BuildRight Construction projects: custom home builds, renovations, commercial fit-outs and general contracting work across New York."
      />

      <section className="grain relative overflow-hidden border-b border-white/10 bg-charcoal">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
          <Reveal>
            <Eyebrow>Project gallery</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
              The work, <span className="text-outline">unretouched.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Real sites, real handovers. Tap any project to view it full-size.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
        <Reveal className="flex flex-wrap gap-3" data-testid="gallery-filters">
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c}
              data-testid={`gallery-filter-${c === "All" ? "all" : slug(c)}`}
              onClick={() => { setFilter(c); setOpen(null); }}
              className={`border px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-[background-color,color,border-color] duration-300 ${
                filter === c ? "border-ember bg-ember text-white" : "border-white/15 text-zinc-300 hover:border-bone hover:text-bone"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3" data-testid="gallery-grid">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.button
                key={p.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setOpen(i)}
                data-testid={`gallery-item-${i}`}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden border border-white/10 text-left"
              >
                <img src={p.url} alt={p.title} loading="lazy" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 block p-5">
                  <span className="block font-display text-lg font-extrabold tracking-tight text-bone">{p.title}</span>
                  <span className="mt-1 block text-xs text-zinc-400">{p.location} · {p.meta}</span>
                </span>
                <span className="absolute right-4 top-4 border border-white/20 bg-ink/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-bone backdrop-blur-sm">{p.category}</span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            data-testid="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-5 backdrop-blur-md"
            onClick={() => setOpen(null)}
          >
            <button data-testid="gallery-lightbox-close" onClick={() => setOpen(null)} aria-label="Close" className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-white/20 text-bone transition-colors duration-300 hover:bg-ember hover:border-ember">
              <X className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous project" className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 text-bone transition-colors duration-300 hover:bg-ember hover:border-ember sm:left-8">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next project" className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 text-bone transition-colors duration-300 hover:bg-ember hover:border-ember sm:right-8">
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.figure
              key={items[open].title}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={items[open].url} alt={items[open].title} className="max-h-[75vh] w-full border border-white/10 object-contain" />
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-display text-xl font-extrabold tracking-tight">{items[open].title}</p>
                  <p className="mt-1 inline-flex items-center gap-2 text-xs text-zinc-400"><MapPin className="h-3.5 w-3.5 text-ember" /> {items[open].location} · {items[open].meta}</p>
                </div>
                <span className="border border-white/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-bone">{items[open].category}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABand />
    </div>
  );
};

export default Gallery;
