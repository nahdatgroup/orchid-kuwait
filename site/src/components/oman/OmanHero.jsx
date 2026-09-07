import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { getOmanHeroSlides } from "../../data/omanContent";
import { useLanguage } from "../../i18n/LanguageContext";

export default function OmanHero() {
  const { t, lang } = useLanguage();
  const [slide, setSlide] = useState(0);
  const slides = useMemo(() => getOmanHeroSlides(lang), [lang]);

  useEffect(() => {
    setSlide(0);
  }, [lang]);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, [slides.length]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 160]);

  const current = slides[slide];

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-onyx">
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={slide}
            src={current.src}
            alt={current.alt}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/55 to-onyx/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-onyx/70 via-transparent to-transparent" />
      <div className="grain-overlay" />

      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="container-x pb-16 sm:pb-20 lg:pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="font-display italic text-bronze-bright text-sm sm:text-base mb-5">
                {current.kicker}
              </p>

              <div className="max-w-3xl">
                <h1 className="font-display text-ivory text-[13vw] leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium">
                  {current.headingLine1}
                  <br />
                  {current.headingLine2}
                  <br />
                  <span className="text-sand">{current.headingLine3}</span>
                </h1>
              </div>

              <p className="mt-7 max-w-md text-sand/85 text-[15px] sm:text-base leading-relaxed">
                {current.paragraph}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.a
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="#services"
            className="mt-9 inline-flex items-center gap-2.5 text-ivory text-sm font-semibold group"
          >
            <span className="glass w-11 h-11 rounded-full flex items-center justify-center group-hover:border-bronze-bright/60 transition-colors">
              <ArrowDown size={16} />
            </span>
            {t("oman.hero.cta")}
          </motion.a>
        </div>

        <div className="hidden sm:flex container-x pb-8 items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setSlide(i)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === slide ? "w-10 bg-bronze-bright" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
