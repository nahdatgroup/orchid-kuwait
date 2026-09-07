import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { images } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

export default function CTA() {
  const { t, isRtl } = useLanguage();
  const Icon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="bg-offwhite py-4">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden isolate"
        >
          <img
            src={images.cta}
            alt={t("cta.imageAlt")}
            style={{ objectPosition: "50% 65%" }}
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-forest/80 -z-10" />
          <div className="px-6 sm:px-14 py-16 sm:py-20 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t("cta.headingLine1")}
              <br /> {t("cta.headingLine2")}
            </h2>
            <p className="mt-4 text-white/75">{t("cta.paragraph")}</p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-bright text-forest font-bold px-8 py-3.5 hover:bg-white transition-colors"
            >
              {t("cta.button")}
              <Icon size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
