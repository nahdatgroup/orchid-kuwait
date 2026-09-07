import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Play, Expand } from "lucide-react";
import { getOmanGallery } from "../../data/omanContent";
import { useLanguage } from "../../i18n/LanguageContext";
import OmanLightbox from "./OmanLightbox";

// Varied row spans give the grid an editorial, non-uniform rhythm instead
// of a flat wall of identical tiles.
const SPANS = [
  "sm:row-span-2",
  "sm:row-span-1",
  "sm:row-span-1",
  "sm:row-span-2",
  "sm:row-span-1",
  "sm:row-span-1",
  "sm:row-span-1",
];

export default function OmanGallery() {
  const { t, lang } = useLanguage();
  const items = getOmanGallery(lang);
  const [index, setIndex] = useState(null);

  const handleNav = useCallback(
    (dir) => {
      setIndex((i) => {
        if (i === null) return i;
        return (i + dir + items.length) % items.length;
      });
    },
    [items.length]
  );

  return (
    <section id="gallery" className="relative bg-charcoal py-24 sm:py-32">
      <div className="container-x">
        <div className="max-w-xl mb-12 sm:mb-16">
          <p className="font-display italic text-bronze-bright text-sm sm:text-base mb-4">
            {t("oman.gallery.kicker")}
          </p>
          <h2 className="font-display text-ivory text-4xl sm:text-5xl font-medium mb-4">
            {t("oman.gallery.heading")}
          </h2>
          <p className="text-sand/70 leading-relaxed">{t("oman.gallery.paragraph")}</p>
        </div>

        <div className="grid sm:grid-cols-3 auto-rows-[160px] sm:auto-rows-[180px] gap-4 sm:gap-5">
          {items.map((item, i) => (
            <motion.button
              key={item.title + i}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: (i % 6) * 0.06 }}
              onClick={() => setIndex(i)}
              aria-label={
                item.type === "video"
                  ? t("oman.gallery.playAria", { title: item.title })
                  : t("oman.gallery.openAria", { title: item.title })
              }
              className={`group relative overflow-hidden rounded-sm text-start ${SPANS[i % SPANS.length]}`}
            >
              <img
                src={item.type === "video" ? item.poster : item.src}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-onyx/10 group-hover:bg-onyx/45 transition-colors duration-500" />

              {item.type === "video" && (
                <span className="glass absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-ivory">
                  <Play size={16} className="ms-0.5" fill="currentColor" />
                </span>
              )}

              <span className="glass absolute top-3 end-3 w-8 h-8 rounded-full flex items-center justify-center text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Expand size={13} />
              </span>

              <span className="glass absolute bottom-0 inset-x-0 px-4 py-2.5 text-ivory text-xs sm:text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {item.title}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <OmanLightbox items={items} index={index} onClose={() => setIndex(null)} onNav={handleNav} />
    </section>
  );
}
