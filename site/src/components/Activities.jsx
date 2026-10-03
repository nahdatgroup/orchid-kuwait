import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Leaf as LeafIcon,
  Building2,
  ShieldCheck,
  Scissors,
  Sparkles,
  Trophy,
  Waves,
  Building,
} from "lucide-react";
import { getContent } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

const icons = {
  Leaf: LeafIcon,
  Building2,
  ShieldCheck,
  Scissors,
  Sparkles,
  Trophy,
  Waves,
  Building,
};

export default function Activities() {
  const { lang, t } = useLanguage();
  const { activities } = getContent(lang);
  const a = activities;

  return (
    <section id="activities" className="relative scroll-mt-24 overflow-hidden">
      {/* ============ DARK INTRO PANEL ============ */}
      <div className="relative bg-gradient-to-br from-forest via-deep to-primary pt-28 pb-44 sm:pt-32 sm:pb-52 lg:pt-36 lg:pb-64 overflow-hidden">
        <AmbientLeaves theme="dark" />

        <div className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-8 items-end"
          >
            <div>
              <p className="eyebrow mb-4 !text-bright">{t("activities.eyebrow")}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {t("activities.headingLine1")}
                <br /> <span className="text-bright">{t("activities.headingLine2")}</span>
              </h2>
            </div>
            <p className="text-white/65 leading-relaxed lg:max-w-md lg:justify-self-end">
              {t("activities.paragraph")}
            </p>
          </motion.div>
        </div>

        <OrganicWave />
      </div>

      {/* ============ WHITE LAYERED COMPOSITION ============ */}
      <div className="relative bg-offwhite pt-16 sm:pt-20 lg:pt-24 pb-24 lg:pb-28">
        {/* soft ambient background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute top-[6%] -left-24 w-80 h-80 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-light to-bright/20 blur-3xl opacity-70" />
          <div className="absolute top-[48%] -right-28 w-96 h-96 rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-gradient-to-br from-primary/15 to-bright/25 blur-3xl opacity-60" />
          <div className="absolute bottom-[4%] left-[8%] w-72 h-72 rounded-[50%_50%_45%_55%/55%_45%_55%_45%] bg-gradient-to-br from-light to-primary/10 blur-3xl opacity-60" />
        </div>

        <AmbientLeaves theme="light" />

        <div className="container-x relative">
          {/* Activity cards — structured rectangular grid with full titles and 3D tilt */}
          <ActivityGrid activities={a} />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ACTIVITY GRID — structured rectangular cards in a clean grid,
   with soft floating leaves scattered between them
   ============================================================ */
const CARD_VARIANTS = ["white", "gradient"];

function ActivityGrid({ activities }) {
  return (
    <div className="relative">
      <GridLeaves />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative items-stretch">
        {activities.map((act, i) => {
          const variant = CARD_VARIANTS[i % CARD_VARIANTS.length];
          return <ActivityCard key={act.id} activity={act} variant={variant} index={i} />;
        })}
      </div>
    </div>
  );
}

/* ============================================================
   3D TILT — subtle premium pointer-driven tilt, restrained and
   automatically disabled on touch/coarse-pointer devices
   ============================================================ */
function getFinePointerSupport() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function useTilt() {
  const [enabled, setEnabled] = useState(getFinePointerSupport);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = (e) => setEnabled(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springCfg = { stiffness: 260, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), springCfg);
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), springCfg);
  const glowX = useTransform(px, [0, 1], ["20%", "80%"]);
  const glowY = useTransform(py, [0, 1], ["20%", "80%"]);

  const handlers = enabled
    ? {
        onMouseMove: (e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          px.set((e.clientX - rect.left) / rect.width);
          py.set((e.clientY - rect.top) / rect.height);
        },
        onMouseLeave: () => {
          px.set(0.5);
          py.set(0.5);
        },
      }
    : {};

  return { rotateX, rotateY, glowX, glowY, handlers, enabled };
}

function GridLeaves() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <Leaf size={30} duration={7} delay={0.2} className="top-[2%] left-[22%] hidden lg:block" />
      <Leaf size={26} duration={8} delay={1} flip blur faint className="top-[30%] right-[4%] hidden sm:block" />
      <Leaf size={34} duration={6.5} delay={0.5} className="top-[46%] left-[3%] hidden lg:block" />
      <Leaf size={24} duration={7.5} delay={1.4} flip className="bottom-[8%] right-[24%] hidden sm:block" />
      <Leaf size={28} duration={9} delay={0.8} blur faint className="bottom-[2%] left-[45%] hidden lg:block" />
    </div>
  );
}

/* ============================================================
   ACTIVITY CARD — structured rectangular card with a subtle
   pointer-driven 3D tilt. Full title always shown, never clipped.
   ============================================================ */
function ActivityCard({ activity, variant, index = 0 }) {
  const { t, isRtl } = useLanguage();
  const ExploreIcon = isRtl ? ArrowLeft : ArrowRight;
  const isWhite = variant === "white";
  const { rotateX, rotateY, glowX, glowY, handlers, enabled } = useTilt();
  const Icon = icons[activity.icon];

  const bgClasses = isWhite
    ? "bg-white text-ink ring-1 ring-primary/10"
    : "bg-gradient-to-br from-primary via-primary to-forest text-white";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 900 }}
      className="h-full"
    >
      <motion.div
        {...handlers}
        style={enabled ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl shadow-card hover:shadow-soft transition-shadow duration-300 ${bgClasses}`}
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

        <div className="flex flex-1 flex-col px-5 sm:px-6 pt-6 pb-5 sm:pt-7 sm:pb-6">
          {Icon && (
            <span
              aria-hidden="true"
              className={`flex items-center justify-center w-11 h-11 rounded-xl mb-4 shrink-0 ${
                isWhite ? "bg-light text-primary" : "bg-white/15 text-bright"
              }`}
            >
              <Icon size={19} />
            </span>
          )}

          <span aria-hidden="true" className={`block w-8 h-[3px] rounded-full mb-3 ${isWhite ? "bg-primary" : "bg-bright"}`} />

          <h3 className={`font-bold text-sm sm:text-base leading-snug ${isWhite ? "text-ink" : "text-white"}`}>
            {activity.title}
          </h3>

          <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${isWhite ? "text-ink/60" : "text-white/75"}`}>
            {activity.description}
          </p>

          <a
            href="#contact"
            aria-label={t("activities.exploreAria", { title: activity.title })}
            className={`mt-5 inline-flex items-center gap-1.5 w-fit rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wide transition-colors ${
              isWhite ? "bg-primary text-white hover:bg-forest" : "bg-white text-forest hover:bg-bright"
            }`}
          >
            {t("activities.explore")}
            <ExploreIcon size={11} />
          </a>
        </div>
      </motion.div>
    </motion.article>
  );
}

/* ============================================================
   DECORATIVE — floating leaves & organic wave transition
   ============================================================ */
export function Leaf({ size = 48, delay = 0, duration = 6, flip = false, blur = false, faint = false, className = "" }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${blur ? "blur-[1.5px]" : ""} ${
        faint ? "opacity-30" : "opacity-90"
      } ${className}`}
      style={{
        filter: blur ? "none" : "drop-shadow(0 10px 16px rgba(11,31,20,0.25))",
        transform: flip ? "scaleX(-1)" : undefined,
      }}
      animate={{
        y: [0, -30, 0],
        x: flip ? [0, -10, 0] : [0, 10, 0],
        rotate: flip ? [0, -16, 0] : [0, 16, 0],
        scale: [1, 1.12, 1],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <path fill="#2F7D32" d="M50 8C30 20 18 40 22 62c14 6 34 2 44-14 10-16 8-32-16-40z" />
      <path fill="#70B82A" d="M50 8c8 26-2 46-24 54C18 40 30 20 50 8z" />
    </motion.svg>
  );
}

export function AmbientLeaves({ theme = "light" }) {
  // theme only affects which corners feel natural against the dark vs. light backdrop
  if (theme === "dark") {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Leaf size={60} duration={7} delay={0} faint className="top-[14%] right-[8%] hidden sm:block" />
        <Leaf size={40} duration={6} delay={1.2} blur className="top-[38%] right-[22%] hidden lg:block" />
        <Leaf size={46} duration={8} delay={0.4} flip faint className="bottom-[26%] left-[6%] hidden sm:block" />
      </div>
    );
  }
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Leaf size={50} duration={7} delay={0.2} flip className="top-[2%] left-[4%] hidden sm:block" />
      <Leaf size={36} duration={6.5} delay={1} blur faint className="top-[30%] right-[3%] hidden lg:block" />
      <Leaf size={42} duration={7.5} delay={0.7} className="bottom-[18%] left-[2%] hidden lg:block" />
      <Leaf size={32} duration={6} delay={1.4} flip blur faint className="bottom-[4%] right-[10%] hidden sm:block" />
    </div>
  );
}

export function OrganicWave() {
  return (
    <div className="absolute inset-x-0 bottom-0 translate-y-px leading-none" aria-hidden="true">
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="w-full h-[90px] sm:h-[130px] lg:h-[170px] block"
      >
        <path
          d="M0,140 C180,40 340,10 520,55 C700,100 760,190 940,165 C1120,140 1240,55 1440,95 L1440,220 L0,220 Z"
          fill="#FFFFFF"
          opacity="0.5"
        />
        <path
          d="M0,160 C200,70 360,40 540,80 C720,120 780,200 960,180 C1140,160 1260,80 1440,120 L1440,220 L0,220 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
}
