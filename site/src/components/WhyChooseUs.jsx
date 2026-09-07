import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Leaf as LeafIcon,
  Users,
  Sparkles,
  Heart,
} from "lucide-react";
import { getContent, images } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import { Leaf, useTilt } from "./Activities";

const cardIcons = { Leaf: LeafIcon, Users, ShieldCheck, Sparkles, Heart };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const cardIn = {
  hidden: { opacity: 0, y: 34, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const imageIn = {
  hidden: { opacity: 0, scale: 1.08 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyChooseUs() {
  const { lang, t, isRtl } = useLanguage();
  const { aboutFeatures, aboutWhyChoose } = getContent(lang);
  const CtaIcon = isRtl ? ArrowLeft : ArrowRight;
  const heroImgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroImgRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="why-choose-us" className="relative bg-offwhite pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
      {/* ============ ORGANIC AMBIENT BACKGROUND ============ */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 -right-32 w-[26rem] h-[26rem] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-light via-bright/15 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-[38%] -left-32 w-96 h-96 rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-gradient-to-br from-primary/10 to-bright/20 blur-3xl opacity-60" />
        <div className="absolute bottom-[-4%] right-[8%] w-80 h-80 rounded-[50%_50%_45%_55%/55%_45%_55%_45%] bg-gradient-to-br from-light to-primary/10 blur-3xl opacity-60" />
        {/* soft curved wave shape, echoing the reference's flowing forms */}
        <svg
          className="absolute top-0 left-0 w-full h-[420px] opacity-40"
          viewBox="0 0 1440 420"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C220,10 420,140 700,90 C980,40 1180,150 1440,60 L1440,0 L0,0 Z"
            fill="url(#whyChooseWaveGrad)"
          />
          <defs>
            <linearGradient id="whyChooseWaveGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#DCEED8" />
              <stop offset="100%" stopColor="#70B82A" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* floating leaves scattered across the whole section — larger and more energetic */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Leaf size={60} duration={5.5} delay={0.2} className="top-[4%] left-[6%] hidden sm:block" />
        <Leaf size={40} duration={6.5} delay={1} flip blur faint className="top-[14%] right-[8%] hidden lg:block" />
        <Leaf size={48} duration={5} delay={0.6} flip className="top-[46%] right-[3%] hidden sm:block" />
        <Leaf size={34} duration={7} delay={1.4} blur faint className="bottom-[30%] left-[4%] hidden lg:block" />
        <Leaf size={54} duration={5.8} delay={0.4} className="bottom-[6%] right-[16%] hidden sm:block" />
        <Leaf size={38} duration={4.5} delay={1.1} flip blur faint className="bottom-[10%] left-[38%] hidden lg:block" />
      </div>

      <div className="container-x relative">
        {/* ============ TOP HEADING — flanked by large leaves that fill the
            wide empty gutters beside the centered heading on desktop ============ */}
        <div className="relative">
          <Leaf size={92} duration={6} delay={0.2} className="hidden xl:block top-1/2 -translate-y-1/2 left-[-1rem]" />
          <Leaf size={70} duration={5.2} delay={0.9} flip blur className="hidden xl:block top-[8%] left-[6%]" />
          <Leaf size={92} duration={6.4} delay={0.5} flip className="hidden xl:block top-1/2 -translate-y-1/2 right-[-1rem]" />
          <Leaf size={70} duration={5.6} delay={1.2} blur className="hidden xl:block top-[8%] right-[6%]" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-3xl mx-auto text-center relative"
          >
            <p className="eyebrow justify-center">{t("whyChooseUs.eyebrow")}</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-ink leading-[1.15]">
              {t("whyChooseUs.headingLine1")}
              <br />
              {t("whyChooseUs.headingLine2Prefix")} <span className="text-bright">{t("whyChooseUs.headingLine2Highlight")}</span>
            </h2>
            <p className="mt-5 text-ink/65 leading-relaxed max-w-2xl mx-auto">
              {t("whyChooseUs.paragraph")}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
              {aboutFeatures.map((f) => (
                <span
                  key={f}
                  className="rounded-full bg-light/70 border border-primary/10 text-ink/70 text-xs font-semibold px-4 py-1.5"
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ============ ASYMMETRIC IMAGE + CARD GRID ============ */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr_1fr_1.05fr] gap-5 sm:gap-6 lg:grid-rows-[1fr_1fr] lg:min-h-[600px]"
        >
          {/* Large hero image — vertical, spans both rows on desktop */}
          <motion.div
            ref={heroImgRef}
            variants={imageIn}
            className="sm:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:row-span-2 relative"
          >
            <ImageCard
              src={images.aboutLeavesBranch}
              alt={t("whyChooseUs.imageAlt1")}
              className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-full"
              parallaxY={parallaxY}
            />
            <div className="absolute -bottom-5 end-[-0.75rem] sm:end-[-1.25rem]">
              <BadgeSeal />
            </div>
          </motion.div>

          {/* Sustainable Practices — gradient */}
          <motion.div variants={cardIn} className="lg:col-start-2 lg:row-start-1">
            <FeatureCard item={aboutWhyChoose[0]} />
          </motion.div>

          {/* Experienced Team — white */}
          <motion.div variants={cardIn} className="lg:col-start-3 lg:row-start-1">
            <FeatureCard item={aboutWhyChoose[1]} />
          </motion.div>

          {/* Reliable Service — gradient */}
          <motion.div variants={cardIn} className="lg:col-start-4 lg:row-start-1">
            <FeatureCard item={aboutWhyChoose[2]} />
          </motion.div>

          {/* Right tall image — vertical, spans both rows on desktop */}
          <motion.div
            variants={imageIn}
            className="sm:col-span-2 lg:col-span-1 lg:col-start-5 lg:row-start-1 lg:row-span-2"
          >
            <ImageCard
              src={images.aboutLeavesAutumn}
              alt={t("whyChooseUs.imageAlt2")}
              className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-full"
            />
          </motion.div>

          {/* Customized Solutions — gradient */}
          <motion.div variants={cardIn} className="lg:col-start-2 lg:row-start-2">
            <FeatureCard item={aboutWhyChoose[3]} />
          </motion.div>

          {/* Decorative leaf image accent — white card, image not cropped */}
          <motion.div variants={imageIn} className="lg:col-start-3 lg:row-start-2">
            <div className="group relative h-full min-h-[180px] rounded-[2.5rem] bg-white ring-1 ring-light overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300 flex items-center justify-center p-4">
              <img
                src={images.aboutLeavesCutout}
                alt={t("whyChooseUs.imageAlt3")}
                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2"
              />
            </div>
          </motion.div>

          {/* Customer Satisfaction — gradient */}
          <motion.div variants={cardIn} className="lg:col-start-4 lg:row-start-2">
            <FeatureCard item={aboutWhyChoose[4]} />
          </motion.div>
        </motion.div>

        {/* ============ CTA ============ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 lg:mt-16 flex justify-center"
        >
          <a
            href="#activities"
            className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-forest transition-colors text-white font-bold px-7 py-3.5"
          >
            {t("whyChooseUs.cta")}
            <CtaIcon size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   IMAGE CARD — large rounded organic frame with clean crop,
   soft shadow and a smooth hover zoom (optional scroll parallax)
   ============================================================ */
function ImageCard({ src, alt, className = "", parallaxY }) {
  return (
    <div className={`group relative rounded-[2.5rem] overflow-hidden shadow-soft ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={
          parallaxY
            ? { y: parallaxY, position: "absolute", inset: 0, width: "100%", height: "116%", top: "-8%", objectFit: "cover" }
            : { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent" />
    </div>
  );
}

/* ============================================================
   FEATURE CARD — organic "why choose us" card with a subtle
   pointer-driven 3D tilt, gradient or white variant
   ============================================================ */
function FeatureCard({ item }) {
  const Icon = cardIcons[item.icon];
  const isGradient = item.variant === "gradient";
  const { rotateX, rotateY, glowX, glowY, handlers, enabled } = useTilt();

  return (
    <div style={{ perspective: 900 }} className="h-full">
      <motion.div
        {...handlers}
        style={enabled ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative h-full min-h-[180px] flex flex-col justify-center rounded-[2.5rem] px-6 py-7 sm:px-7 sm:py-8 shadow-card hover:shadow-soft transition-shadow duration-300 overflow-hidden ${
          isGradient ? "bg-gradient-to-br from-primary via-primary to-forest text-white" : "bg-white text-ink ring-1 ring-light"
        }`}
      >
        {enabled && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(220px circle at ${glowX} ${glowY}, rgba(255,255,255,0.18), transparent 65%)`,
            }}
          />
        )}

        {isGradient && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage: "radial-gradient(120% 120% at 100% 0%, rgba(112,184,42,0.45), transparent 55%)",
              backgroundSize: "200% 200%",
            }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <div className="relative">
          {Icon && (
            <span
              aria-hidden="true"
              className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 shrink-0 ${
                isGradient ? "bg-white/15 text-bright" : "bg-light text-primary"
              }`}
            >
              <Icon size={20} />
            </span>
          )}

          <span aria-hidden="true" className={`block w-8 h-[3px] rounded-full mb-3 ${isGradient ? "bg-bright" : "bg-primary"}`} />

          <h3 className={`font-bold text-base sm:text-lg leading-snug ${isGradient ? "text-white" : "text-ink"}`}>
            {item.title}
          </h3>

          <p className={`mt-2 text-sm leading-relaxed ${isGradient ? "text-white/80" : "text-ink/60"}`}>
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function BadgeSeal() {
  const { t } = useLanguage();
  return (
    <div className="w-20 h-20 rounded-full bg-white shadow-card flex flex-col items-center justify-center text-center border border-light">
      <ShieldCheck size={20} className="text-primary" />
      <span className="text-[7px] font-extrabold uppercase tracking-wide text-ink/70 mt-0.5 leading-tight">
        {t("whyChooseUs.badgeLine1")}<br />{t("whyChooseUs.badgeLine2")}
      </span>
    </div>
  );
}
