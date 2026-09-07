import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Leaf as LeafIcon, ShieldCheck, Users } from "lucide-react";
import { heroFeatureImage } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import FloatingLeaf from "./FloatingLeaf";
import ParticleBackground from "./ParticleBackground";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const microFeatureIcons = [LeafIcon, ShieldCheck, Users];

export default function Hero() {
  const { t, isRtl } = useLanguage();
  const microFeatures = t("hero.microFeatures").map((label, i) => ({ label, icon: microFeatureIcons[i] }));
  const CtaIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-br from-forest via-deep to-primary/80 min-h-[760px] sm:min-h-[820px] lg:min-h-[840px]"
    >
      {/* Organic atmosphere — soft green/lime glow blobs behind everything */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-[30rem] h-[30rem] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-bright/25 to-transparent blur-3xl" />
        <div className="absolute top-[30%] -right-32 w-[26rem] h-[26rem] rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-gradient-to-br from-primary/30 to-bright/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] w-[22rem] h-[22rem] rounded-[50%_50%_45%_55%/55%_45%_55%_45%] bg-gradient-to-br from-bright/15 to-transparent blur-3xl" />
      </div>

      {/* Dynamic glowing dust particles */}
      <ParticleBackground count={28} color="bright" seed={1} />

      {/* Premium realistic floating leaves — kept minimal so they stay a subtle accent */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <FloatingLeaf size={54} duration={9} delay={0.2} blur opacity={0.5} className="top-[10%] right-[6%] hidden sm:block" />
        <FloatingLeaf size={40} duration={8} delay={1.3} flip opacity={0.55} className="bottom-[14%] left-[6%] hidden lg:block" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 container-x grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-10 items-center pt-32 pb-20 lg:pt-40 lg:pb-24">
        {/* LEFT — heading, copy, CTA, micro features */}
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">
          <motion.p variants={item} className="eyebrow mb-5 !text-bright">
            <span className="w-8 h-px bg-bright" />
            {t("hero.eyebrow")}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-white font-extrabold leading-[1.1] text-[2.35rem] sm:text-5xl lg:text-[3.2rem] xl:text-[3.5rem] tracking-tight"
          >
            {t("hero.headingLine1")}
            <br />
            {t("hero.headingLine2")}
            <br />
            <span className="text-bright">{t("hero.headingLine3")}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-white/80 text-base sm:text-lg leading-relaxed max-w-lg"
          >
            {t("hero.paragraph")}
          </motion.p>

          <motion.div variants={item} className="mt-9">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary to-bright text-white font-bold text-sm sm:text-base px-7 sm:px-8 py-4 shadow-[0_16px_40px_-14px_rgba(112,184,42,0.7)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_50px_-10px_rgba(112,184,42,0.85)]"
            >
              {t("hero.cta")}
              <CtaIcon size={18} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
            {microFeatures.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-white/70">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/15 text-bright shrink-0">
                  <f.icon size={14} />
                </span>
                <span className="text-xs sm:text-[13px] font-semibold">{f.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — tall oval glass image frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]"
        >
          {/* ambient glow behind the frame */}
          <div className="absolute -inset-8 rounded-[999px] bg-gradient-to-b from-bright/35 via-primary/25 to-transparent blur-3xl" aria-hidden="true" />

          {/* a single leaf tucked around the frame */}
          <FloatingLeaf size={38} duration={7} delay={0.5} flip opacity={0.85} className="-top-6 -left-6 hidden sm:block" />

          {/* glass outer frame */}
          <div className="relative rounded-[999px] p-2.5 bg-white/10 backdrop-blur-xl border border-white/25 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <div className="group relative rounded-[999px] overflow-hidden aspect-[9/16]">
              <img
                src={heroFeatureImage}
                alt={t("hero.imageAlt")}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-forest/10" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Organic bottom transition — layered flowing curves into the white
          About Us section, echoing the reference's soft wave shape. */}
      <div className="absolute inset-x-0 bottom-0 translate-y-px leading-none z-[5]" aria-hidden="true">
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="w-full h-[64px] sm:h-[96px] lg:h-[130px] block"
        >
          <path
            d="M0,120 C220,40 420,10 640,60 C860,110 960,190 1180,160 C1320,142 1400,90 1440,70 L1440,220 L0,220 Z"
            fill="#70B82A"
            opacity="0.18"
          />
          <path
            d="M0,140 C220,60 400,30 620,76 C840,122 940,196 1160,176 C1300,162 1380,110 1440,90 L1440,220 L0,220 Z"
            fill="#DCEED8"
            opacity="0.6"
          />
          <path
            d="M0,160 C220,84 400,56 620,100 C840,144 940,206 1160,190 C1300,178 1380,130 1440,112 L1440,220 L0,220 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
