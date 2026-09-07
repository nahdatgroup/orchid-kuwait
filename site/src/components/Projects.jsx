import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Leaf } from "lucide-react";
import { getContent } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import { useTilt } from "./Activities";
import FloatingLeaf from "./FloatingLeaf";
import ParticleBackground from "./ParticleBackground";

export default function Projects() {
  const { lang, t } = useLanguage();
  const { projects } = getContent(lang);
  const allLabel = t("projects.allCategory");
  const categories = useMemo(
    () => [allLabel, ...new Set(projects.map((p) => p.category))],
    [allLabel, projects]
  );
  const [active, setActive] = useState(allLabel);

  // Category labels are localized, so reset the active filter whenever the
  // language changes to avoid filtering against a stale-language label.
  useEffect(() => {
    setActive(allLabel);
  }, [allLabel]);

  const filtered = active === allLabel ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* soft ambient background — same organic language as About / Gallery,
          just re-tinted for the white backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-light to-bright/20 blur-3xl opacity-80" />
        <div className="absolute bottom-[-8%] -left-24 w-80 h-80 rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-gradient-to-br from-primary/10 to-bright/15 blur-3xl opacity-70" />
      </div>

      <ParticleBackground count={18} color="bright" seed={4} className="opacity-70" />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <FloatingLeaf size={44} duration={9} delay={0.3} blur opacity={0.55} className="top-[6%] left-[4%] hidden sm:block" />
        <FloatingLeaf size={34} duration={7.5} delay={1.2} flip opacity={0.6} className="bottom-[8%] right-[6%] hidden lg:block" />
      </div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="eyebrow justify-center mb-4">
            <Leaf size={13} />
            {t("projects.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink leading-tight">
            {t("projects.heading")}
          </h2>
          <p className="mt-4 text-ink/60 leading-relaxed">
            {t("projects.paragraph")}
          </p>
        </motion.div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold backdrop-blur-md border transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-to-r from-primary to-bright text-white border-transparent shadow-[0_10px_26px_-10px_rgba(112,184,42,0.6)]"
                  : "bg-light/60 text-ink/60 border-primary/10 hover:bg-light hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <LayoutGroup>
          <motion.div layout className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }) {
  const { rotateX, rotateY, glowX, glowY, handlers, enabled } = useTilt();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.05 }}
      style={{ perspective: 900 }}
    >
      <motion.div
        {...handlers}
        style={enabled ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        className="group relative rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-square shadow-card hover:shadow-soft transition-shadow duration-300 ring-1 ring-black/5"
      >
        {enabled && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(220px circle at ${glowX} ${glowY}, rgba(255,255,255,0.16), transparent 65%)`,
            }}
          />
        )}
        <img
          src={p.image}
          alt={p.title}
          style={{ objectPosition: p.position || "center" }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-bright">
            {p.category}
          </p>
          <h3 className="text-white font-bold text-sm sm:text-base mt-1 leading-snug">{p.title}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
}
