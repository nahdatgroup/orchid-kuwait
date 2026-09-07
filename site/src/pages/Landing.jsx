import { motion } from "framer-motion";
import CompanyCard from "../components/landing/CompanyCard";
import { usePageMeta } from "../i18n/usePageMeta";
import { useLanguage } from "../i18n/LanguageContext";
import kuwaitCardImage from "../assets/hero/premium-garden.jpg";
import omanCardImage from "../assets/oman/hero-estate.jpg";
import iconMarkLight from "../assets/logo/orchid-icon-light.png";

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

  return (
    <div className="bg-onyx">
      {/* Opening / intro screen */}
      <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute -inset-[10%] bg-[radial-gradient(circle_at_center,rgba(176,141,87,0.16),transparent_60%)] animate-drift-glow" />
        </div>
        <div className="grain-overlay" />

        <button
          type="button"
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="absolute top-6 sm:top-8 end-6 sm:end-8 z-10 inline-flex items-center rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-colors text-xs font-bold px-3.5 py-2"
        >
          {lang === "en" ? "العربية" : "English"}
        </button>

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.img
            src={iconMarkLight}
            alt=""
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="h-16 sm:h-20 w-auto mb-7 select-none"
            draggable="false"
          />
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
            className="font-display text-ivory text-[12vw] sm:text-6xl lg:text-7xl font-medium tracking-tight leading-none"
          >
            {t("landing.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="font-display italic text-sand/70 text-base sm:text-lg mt-5 max-w-md"
          >
            {t("landing.subtitle")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35"
        >
          <span className="w-px h-10 bg-white/25" />
        </motion.div>
      </section>

      {/* Company selection */}
      <section className="relative bg-onyx pb-20 sm:pb-28">
        <div className="container-x grid lg:grid-cols-2 gap-5 sm:gap-6">
          <CompanyCard
            to="/kuwait"
            image={kuwaitCardImage}
            name={t("landing.kuwaitCard.name")}
            location={t("landing.kuwaitCard.location")}
            cta={t("landing.kuwaitCard.cta")}
            delay={0}
          />
          <CompanyCard
            to="/oman"
            image={omanCardImage}
            name={t("landing.omanCard.name")}
            location={t("landing.omanCard.location")}
            cta={t("landing.omanCard.cta")}
            delay={0.15}
          />
        </div>
      </section>
    </div>
  );
}
