import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronDown, Flower2, Leaf as LeafIcon, Sprout, Sun, TreePalm } from "lucide-react";
import { getPlants } from "../data/plants";
import { useLanguage } from "../i18n/LanguageContext";
import { useTilt, Leaf, AmbientLeaves, OrganicWave } from "./Activities";
import AnimatedCounter from "./oman/AnimatedCounter";

const CATEGORY_ICONS = { trees: TreePalm, shrubs: Flower2, desert: Sun, lawns: Sprout };
const CARD_VARIANTS = ["white", "gradient"];
const INITIAL_VISIBLE = 8;

/* ============================================================
   OUR PLANT COLLECTION — mirrors the Activities layout:
   dark gradient intro panel → organic wave → light card grid
   ============================================================ */
export default function Plants() {
  const { lang, t } = useLanguage();
  const { plants, plantCategories } = getPlants(lang);

  const [active, setActive] = useState("all");
  const [expanded, setExpanded] = useState(false);

  // reset filters when the language switches
  useEffect(() => {
    setActive("all");
    setExpanded(false);
  }, [lang]);

  const counts = useMemo(() => {
    const c = { all: plants.length };
    plants.forEach((p) => (c[p.category] = (c[p.category] || 0) + 1));
    return c;
  }, [plants]);

  const filtered = active === "all" ? plants : plants.filter((p) => p.category === active);
  const canCollapse = active === "all" && filtered.length > INITIAL_VISIBLE;
  const visible = canCollapse && !expanded ? filtered.slice(0, INITIAL_VISIBLE) : filtered;

  const filters = [
    { key: "all", label: t("plants.allCategory") },
    ...Object.keys(plantCategories).map((key) => ({ key, label: plantCategories[key] })),
  ];

  return (
    <section id="plants" className="relative scroll-mt-24 overflow-hidden">
      {/* ============ DARK INTRO PANEL ============ */}
      <div className="relative bg-gradient-to-br from-forest via-deep to-primary pt-28 pb-44 sm:pt-32 sm:pb-52 lg:pt-36 lg:pb-64 overflow-hidden">
        <AmbientLeaves theme="dark" />

        {/* soft glow */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/3 w-[28rem] h-[28rem] rounded-full bg-bright/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-8 items-end"
          >
            <div>
              <p className="eyebrow mb-4 !text-bright">{t("plants.eyebrow")}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {t("plants.headingLine1")}
                <br /> <span className="text-bright">{t("plants.headingLine2")}</span>
              </h2>
            </div>
            <p className="text-white/65 leading-relaxed lg:max-w-md lg:justify-self-end">{t("plants.paragraph")}</p>
          </motion.div>

          {/* category stat chips */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {[{ key: "all", label: t("plants.statSpecies"), Icon: LeafIcon }, ...Object.keys(plantCategories).map((key) => ({
              key,
              label: plantCategories[key],
              Icon: CATEGORY_ICONS[key],
            }))].map(({ key, label, Icon }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm px-4 py-3.5"
              >
                <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-white/10 text-bright">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">
                    <AnimatedCounter value={counts[key] || 0} />
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs text-white/60 leading-snug">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* scrolling plant-name ticker */}
        <PlantMarquee names={plants.map((p) => p.name)} />

        <OrganicWave />
      </div>

      {/* ============ LIGHT CARD GRID ============ */}
      <div className="relative bg-offwhite pt-16 sm:pt-20 lg:pt-24 pb-24 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute top-[6%] -left-24 w-80 h-80 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-light to-bright/20 blur-3xl opacity-70" />
          <div className="absolute top-[48%] -right-28 w-96 h-96 rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-gradient-to-br from-primary/15 to-bright/25 blur-3xl opacity-60" />
          <div className="absolute bottom-[4%] left-[8%] w-72 h-72 rounded-[50%_50%_45%_55%/55%_45%_55%_45%] bg-gradient-to-br from-light to-primary/10 blur-3xl opacity-60" />
        </div>

        <AmbientLeaves theme="light" />

        <div className="container-x relative">
          {/* filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {filters.map((f) => {
              const isActive = active === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => {
                    setActive(f.key);
                    setExpanded(false);
                  }}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-colors duration-300 ${
                    isActive
                      ? "text-white border-transparent"
                      : "bg-light/60 text-ink/60 border-primary/10 hover:bg-light hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="plant-filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-bright shadow-[0_10px_26px_-10px_rgba(112,184,42,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative inline-flex items-center gap-2">
                    {f.label}
                    <span
                      className={`inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full text-[10px] ${
                        isActive ? "bg-white/25 text-white" : "bg-white text-primary"
                      }`}
                    >
                      {counts[f.key]}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* grid */}
          <div className="relative mt-10">
            <GridLeaves />
            <LayoutGroup>
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
                <AnimatePresence mode="popLayout">
                  {visible.map((plant, i) => (
                    <PlantCard
                      key={plant.id}
                      plant={plant}
                      number={plants.indexOf(plant) + 1}
                      categoryLabel={plantCategories[plant.category]}
                      variant={CARD_VARIANTS[i % CARD_VARIANTS.length]}
                      index={i}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </LayoutGroup>
          </div>

          {/* show more / less */}
          {canCollapse && (
            <div className="mt-12 flex justify-center">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-forest text-white px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wide shadow-card transition-colors"
              >
                {expanded ? t("plants.showLess") : t("plants.showAll", { count: filtered.length })}
                <ChevronDown size={16} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PLANT CARD — same white/gradient alternating style and 3D
   tilt as the Activity cards, with a photo on top
   ============================================================ */
function PlantCard({ plant, number, categoryLabel, variant, index }) {
  const { t, isRtl } = useLanguage();
  const ExploreIcon = isRtl ? ArrowLeft : ArrowRight;
  const isWhite = variant === "white";
  const { rotateX, rotateY, glowX, glowY, handlers, enabled } = useTilt();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 900 }}
      className="h-full"
    >
      <motion.div
        {...handlers}
        style={enabled ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl shadow-card hover:shadow-soft transition-shadow duration-300 ${
          isWhite ? "bg-white text-ink ring-1 ring-primary/10" : "bg-gradient-to-br from-primary via-primary to-forest text-white"
        }`}
      >
        {enabled && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(220px circle at ${glowX} ${glowY}, rgba(255,255,255,0.16), transparent 65%)`,
            }}
          />
        )}

        {/* photo */}
        <div className="relative m-2.5 mb-0 aspect-[4/3] overflow-hidden rounded-xl">
          <img
            src={plant.image}
            alt={plant.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
          <span className="absolute top-2.5 start-2.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">
            {categoryLabel}
          </span>
          <span className="absolute bottom-2 end-3 text-2xl font-extrabold text-white/90 drop-shadow-sm">
            {String(number).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-1 flex-col px-5 sm:px-6 pt-5 pb-5 sm:pb-6">
          <span aria-hidden="true" className={`block w-8 h-[3px] rounded-full mb-3 transition-all duration-500 group-hover:w-14 ${isWhite ? "bg-primary" : "bg-bright"}`} />

          <h3 className={`font-bold text-sm sm:text-base leading-snug ${isWhite ? "text-ink" : "text-white"}`}>{plant.name}</h3>
          <p dir="ltr" className={`mt-0.5 text-xs italic ${isWhite ? "text-primary" : "text-bright"} rtl:text-right`}>
            {plant.botanical}
          </p>

          <p className={`mt-2.5 text-xs sm:text-sm leading-relaxed ${isWhite ? "text-ink/60" : "text-white/75"}`}>
            {plant.description}
          </p>

          <a
            href="#contact"
            aria-label={t("plants.enquireAria", { title: plant.name })}
            className={`mt-auto pt-5 inline-flex w-fit`}
          >
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wide transition-colors ${
                isWhite ? "bg-primary text-white hover:bg-forest" : "bg-white text-forest hover:bg-bright"
              }`}
            >
              {t("plants.enquire")}
              <ExploreIcon size={11} />
            </span>
          </a>
        </div>
      </motion.div>
    </motion.article>
  );
}

/* ============================================================
   DECORATIVE — scrolling name ticker + grid leaves
   ============================================================ */
function PlantMarquee({ names }) {
  const row = [...names, ...names];
  return (
    <div className="relative mt-14 sm:mt-16 overflow-hidden" dir="ltr" aria-hidden="true">
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-forest to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-primary/60 to-transparent" />
      <div className="plant-marquee flex w-max items-center">
        {row.map((name, i) => (
          <span key={i} className="flex items-center gap-8 pe-8 text-lg sm:text-2xl font-extrabold tracking-tight text-white/15 whitespace-nowrap">
            {name}
            <LeafIcon size={18} className="text-bright/50" />
          </span>
        ))}
      </div>
    </div>
  );
}

function GridLeaves() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <Leaf size={30} duration={7} delay={0.2} className="top-[2%] left-[22%] hidden lg:block" />
      <Leaf size={26} duration={8} delay={1} flip blur faint className="top-[30%] right-[4%] hidden sm:block" />
      <Leaf size={34} duration={6.5} delay={0.5} className="top-[56%] left-[3%] hidden lg:block" />
      <Leaf size={24} duration={7.5} delay={1.4} flip className="bottom-[8%] right-[24%] hidden sm:block" />
    </div>
  );
}
