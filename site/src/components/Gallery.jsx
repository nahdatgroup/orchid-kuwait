import { motion } from "framer-motion";
import { Expand, Images, Play } from "lucide-react";
import { getContent } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import FloatingLeaf from "./FloatingLeaf";
import ParticleBackground from "./ParticleBackground";

export default function Gallery({ onOpen }) {
  const { lang, t } = useLanguage();
  const { galleryImages } = getContent(lang);

  return (
    <section id="gallery" className="relative bg-offwhite py-24 lg:py-28 overflow-hidden">
      {/* soft ambient background — keeps parity with About / Why Choose Us */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[6%] -left-24 w-80 h-80 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-light to-bright/20 blur-3xl opacity-70" />
        <div className="absolute bottom-[4%] -right-24 w-72 h-72 rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-gradient-to-br from-primary/10 to-bright/20 blur-3xl opacity-60" />
      </div>

      <ParticleBackground count={14} color="bright" seed={9} className="opacity-60" />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <FloatingLeaf size={36} duration={8} delay={0.2} opacity={0.6} className="top-[8%] right-[5%] hidden sm:block" />
        <FloatingLeaf size={28} duration={9} delay={1} flip blur opacity={0.45} className="bottom-[10%] left-[4%] hidden lg:block" />
      </div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="eyebrow justify-center mb-4">
            <Images size={13} />
            {t("gallery.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink leading-tight">
            {t("gallery.heading")}
          </h2>
          <p className="mt-4 text-ink/60 leading-relaxed">
            {t("gallery.paragraph")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[150px] sm:auto-rows-[190px]"
        >
          {galleryImages.map((g, i) => (
            <motion.button
              key={g.id}
              onClick={() => onOpen(i)}
              variants={{
                hidden: { opacity: 0, y: 28, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden text-left rtl:text-right shadow-card hover:shadow-soft transition-shadow duration-300 ring-1 ring-black/5 ${
                g.size === "large" ? "col-span-2 row-span-2" : ""
              }`}
              aria-label={g.type === "video" ? t("gallery.playVideoAria", { alt: g.alt }) : t("gallery.openImageAria", { alt: g.alt })}
            >
              <img
                src={g.image}
                alt={g.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {g.type === "video" ? (
                <>
                  <div className="absolute inset-0 bg-forest/25 group-hover:bg-forest/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 flex items-center justify-center shadow-soft transition-transform duration-300 group-hover:scale-110">
                      <Play size={20} className="text-forest ms-0.5" fill="currentColor" />
                    </span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                    <Expand size={16} className="text-forest" />
                  </span>
                </div>
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
