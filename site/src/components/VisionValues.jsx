import { motion } from "framer-motion";
import {
  HandCoins,
  Handshake,
  HeartHandshake,
  Sparkles,
  Trophy,
  Gauge,
  Sprout,
} from "lucide-react";
import { getContent } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import FloatingLeaf from "./FloatingLeaf";
import ParticleBackground from "./ParticleBackground";
import { useTilt } from "./Activities";

const valueIcons = {
  Handshake,
  HandCoins,
  HeartHandshake,
  Sparkles,
  Trophy,
  Gauge,
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardIn = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function VisionValues() {
  const { lang, t } = useLanguage();
  const { values } = getContent(lang);

  return (
    <section id="vision" className="relative overflow-hidden bg-gradient-to-br from-forest via-deep to-primary/70 py-24 lg:py-28">
      {/* organic ambient glow — same atmosphere as Activities / Projects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-bright/20 to-transparent blur-3xl" />
        <div className="absolute bottom-[-8%] -right-24 w-80 h-80 rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-gradient-to-br from-primary/25 to-bright/10 blur-3xl" />
      </div>

      <ParticleBackground count={16} color="white" seed={7} />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <FloatingLeaf size={42} duration={8.5} delay={0.2} opacity={0.35} className="top-[8%] right-[6%] hidden sm:block" />
        <FloatingLeaf size={32} duration={7} delay={1} flip blur opacity={0.3} className="bottom-[12%] left-[5%] hidden lg:block" />
      </div>

      <div className="container-x relative">
        {/* ============ WHO WE ARE ============ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="eyebrow !text-bright justify-center mb-4">
            <Sprout size={13} />
            {t("visionValues.whoWeAreEyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-white leading-tight">
            {t("visionValues.whoWeAreHeadingLine1")}
            <br className="hidden sm:block" /> {t("visionValues.whoWeAreHeadingLine2")}
          </h2>
          <p className="mt-5 text-white/65 leading-relaxed max-w-2xl mx-auto">
            {t("visionValues.whoWeAreParagraph")}
          </p>

          <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-white/8 border border-white/10 backdrop-blur-md px-6 py-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-bright" />
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-bright">
              {t("visionValues.badge")}
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-bright" />
          </div>
        </motion.div>

        {/* ============ VISION ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 lg:mt-16 relative rounded-[2.5rem] bg-white/6 border border-white/10 backdrop-blur-md px-7 py-10 sm:px-12 sm:py-12 max-w-4xl mx-auto text-center"
        >
          <span
            aria-hidden="true"
            className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-primary to-bright shadow-[0_10px_28px_-8px_rgba(112,184,42,0.7)]"
          >
            <Sprout size={18} className="text-white" />
          </span>
          <p className="eyebrow !text-bright justify-center mb-3">{t("visionValues.visionEyebrow")}</p>
          <p className="text-white/75 leading-relaxed sm:text-lg">
            {t("visionValues.visionParagraph")}
          </p>
          <p className="mt-4 text-bright font-bold">
            {t("visionValues.visionQuote1")}
          </p>
          <p className="mt-1 text-white/75">
            {t("visionValues.visionQuote2")}
          </p>
        </motion.div>

        {/* ============ VALUES ============ */}
        <div className="mt-16 lg:mt-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-xl mx-auto text-center"
          >
            <p className="eyebrow !text-bright justify-center mb-3">{t("visionValues.valuesEyebrow")}</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              {t("visionValues.valuesHeadingPrefix")} <span className="text-bright">{t("visionValues.valuesHeadingHighlight")}</span>
            </h3>
          </motion.div>

          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={cardIn}>
                <ValueCard value={v} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value }) {
  const Icon = valueIcons[value.icon] || Sparkles;
  const { rotateX, rotateY, glowX, glowY, handlers, enabled } = useTilt();

  return (
    <div style={{ perspective: 900 }} className="h-full">
      <motion.div
        {...handlers}
        style={enabled ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-full flex items-start gap-4 rounded-[1.75rem] bg-white/7 border border-white/10 backdrop-blur-md px-6 py-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)] hover:bg-white/10 transition-colors duration-300 overflow-hidden"
      >
        {enabled && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(180px circle at ${glowX} ${glowY}, rgba(112,184,42,0.25), transparent 65%)`,
            }}
          />
        )}
        <span className="relative z-[1] flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-primary to-bright text-white shrink-0">
          <Icon size={18} />
        </span>
        <p className="relative z-[1] text-sm sm:text-[0.95rem] text-white/85 leading-relaxed pt-1.5">
          {value.title}
        </p>
      </motion.div>
    </div>
  );
}
