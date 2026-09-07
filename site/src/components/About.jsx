import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Scissors,
  Droplets,
  Sprout,
  Lightbulb,
  CalendarCheck,
} from "lucide-react";
import { getContent } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import FloatingLeaf from "./FloatingLeaf";
import ParticleBackground from "./ParticleBackground";
import ServiceCard from "./ServiceCard";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// Icons for the six existing Orchid services, in the same order as
// `aboutFeatures` in data/content.js.
const serviceIcons = [Sparkles, Scissors, Droplets, Sprout, Lightbulb, CalendarCheck];

export default function About() {
  const { lang, t, isRtl } = useLanguage();
  const { aboutFeatures } = getContent(lang);
  const CtaIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="about" className="relative bg-white pt-16 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* soft ambient background — keeps the white section visually
          connected to the Hero without feeling empty */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[8%] -right-24 w-80 h-80 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-light to-bright/20 blur-3xl opacity-70" />
        <div className="absolute bottom-[8%] -left-24 w-72 h-72 rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-gradient-to-br from-primary/10 to-bright/20 blur-3xl opacity-60" />
      </div>

      <ParticleBackground count={14} color="bright" seed={2} className="opacity-70" />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <FloatingLeaf size={38} duration={8} delay={0.3} opacity={0.8} className="top-[6%] left-[5%] hidden sm:block" />
        <FloatingLeaf size={30} duration={9} delay={1} flip blur opacity={0.5} className="bottom-[10%] left-[3%] hidden lg:block" />
        <FloatingLeaf size={34} duration={7.5} delay={0.7} flip opacity={0.7} className="top-[10%] right-[6%] hidden lg:block" />
      </div>

      <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-16 items-center relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="eyebrow mb-4">{t("about.eyebrow")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-ink leading-tight">
            {t("about.headingPrefix")} <span className="text-bright">{t("about.headingHighlight")}</span>
          </h2>
          <p className="mt-5 text-ink/65 leading-relaxed max-w-lg">
            {t("about.paragraph1")}
          </p>
          <p className="mt-4 text-ink/65 leading-relaxed max-w-lg">
            {t("about.paragraph2")}
          </p>

          <a
            href="#activities"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-bright hover:brightness-110 transition-all text-white font-bold px-7 py-3.5 shadow-[0_14px_34px_-14px_rgba(47,125,50,0.55)]"
          >
            {t("about.cta")}
            <CtaIcon size={17} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {aboutFeatures.map((title, i) => (
            <ServiceCard key={title} title={title} icon={serviceIcons[i]} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
