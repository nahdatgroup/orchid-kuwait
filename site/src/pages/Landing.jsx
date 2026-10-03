import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Globe2 } from "lucide-react";
import CompanyCard from "../components/landing/CompanyCard";
import ParticleBackground from "../components/ParticleBackground";
import FloatingLeaf from "../components/FloatingLeaf";
import { usePageMeta } from "../i18n/usePageMeta";
import { useLanguage } from "../i18n/LanguageContext";
import kuwaitCardImage from "../assets/landing/kuwait-landscaping.jpg";
import omanCardImage from "../assets/landing/oman-villa.jpg";
import iconMarkLight from "../assets/logo/orchid-icon-light.png";

const ease = [0.22, 1, 0.36, 1];

export default function Landing() {
  const { t, lang, setLang } = useLanguage();

  usePageMeta({
    en: {
      title: "Orchid International | Landscaping, Trading & Contracting",
      description:
        "Orchid International — a group of companies spanning landscaping and garden maintenance in Kuwait, and trading and contracting in Oman.",
    },
    ar: {
      title: "أوركيد إنترناشونال | تنسيق الحدائق والتجارة والمقاولات",
      description:
        "أوركيد إنترناشونال — مجموعة شركات تشمل تنسيق وصيانة الحدائق في الكويت، والتجارة والمقاولات في عُمان.",
    },
  });

  // cursor-following spotlight
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${sx}% ${sy}%, rgba(112,184,42,0.18), transparent 60%)`;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  const titleWords = t("landing.title").split(" ");

  return (
    <section
      onMouseMove={onMove}
      className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-br from-forest via-deep to-primary text-white flex flex-col"
    >
      {/* ===== animated background ===== */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
        <motion.div
          className="absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-bright/20 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0], rotate: [0, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -right-32 w-[40rem] h-[40rem] rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-primary/40 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <ParticleBackground count={26} color="bright" seed={7} />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <FloatingLeaf size={64} duration={10} delay={0.2} opacity={0.55} className="top-[14%] left-[6%] hidden md:block" />
        <FloatingLeaf size={44} duration={8.5} delay={1.2} flip blur opacity={0.45} className="top-[22%] right-[8%] hidden md:block" />
        <FloatingLeaf size={38} duration={9} delay={0.6} opacity={0.4} className="bottom-[10%] left-[48%] hidden lg:block" />
      </div>

      {/* ===== top bar ===== */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="relative z-20 container-x flex items-center justify-between py-5 sm:py-6"
      >
        <div className="flex items-center gap-2.5">
          <img src={iconMarkLight} alt="" className="h-9 w-auto select-none" draggable="false" />
          <span className="font-extrabold tracking-tight text-sm sm:text-base">
            ORCHID <span className="text-bright">INTERNATIONAL</span>
          </span>
        </div>
        <button
          type="button"
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-white/80 hover:text-white hover:bg-white/20 transition-colors text-xs font-bold px-3.5 py-2"
        >
          <Globe2 size={13} />
          {lang === "en" ? "العربية" : "English"}
        </button>
      </motion.header>

      {/* ===== content ===== */}
      <div className="relative z-10 container-x flex-1 flex flex-col justify-center pb-10 sm:pb-12">
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-14 items-center">
          {/* text */}
          <div className="text-center lg:text-start">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-bright"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-bright opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-bright" />
              </span>
              {t("landing.eyebrow")}
            </motion.p>

            <h1 className="mt-6 text-[13vw] sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[0.95]">
              {titleWords.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom pb-1">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.35 + i * 0.12, ease }}
                    className={`inline-block ${
                      i === titleWords.length - 1
                        ? "bg-gradient-to-r from-bright via-light to-bright bg-clip-text text-transparent landing-shimmer"
                        : ""
                    }`}
                  >
                    {w}
                    {i < titleWords.length - 1 && "\u00A0"}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="mt-5 text-white/65 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              {t("landing.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="mt-8 hidden lg:flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/50"
            >
              <motion.span
                className="h-px bg-bright/70"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.9, delay: 1.1, ease }}
              />
              {t("landing.chooseLabel")}
            </motion.div>
          </div>

          {/* company cards */}
          <div className="grid sm:grid-cols-2 gap-5 items-stretch">
            <CompanyCard
              to="/kuwait"
              image={kuwaitCardImage}
              name={t("landing.kuwaitCard.name")}
              tag={t("landing.kuwaitCard.tag")}
              country={t("landing.kuwaitCard.country")}
              location={t("landing.kuwaitCard.location")}
              cta={t("landing.kuwaitCard.cta")}
              delay={0.55}
            />
            <CompanyCard
              to="/oman"
              image={omanCardImage}
              name={t("landing.omanCard.name")}
              tag={t("landing.omanCard.tag")}
              country={t("landing.omanCard.country")}
              location={t("landing.omanCard.location")}
              cta={t("landing.omanCard.cta")}
              delay={0.7}
            />
          </div>
        </div>
      </div>

      {/* bottom line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 container-x pb-6 flex items-center justify-center lg:justify-between text-[11px] text-white/40"
      >
        <span>© {new Date().getFullYear()} Orchid International</span>
        <span className="hidden lg:inline">{t("landing.footerNote")}</span>
      </motion.div>
    </section>
  );
}
