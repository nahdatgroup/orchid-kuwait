import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { getContent } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

export default function Lightbox({ index, onClose, onNav }) {
  const { lang, t, isRtl } = useLanguage();
  const { galleryImages } = getContent(lang);
  const isOpen = index !== null;
  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  const handleKey = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    },
    [isOpen, onClose, onNav]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-forest/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label={t("lightbox.closeAria")}
            className="absolute top-5 end-5 sm:top-8 sm:end-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNav(-1); }}
            aria-label={t("lightbox.prevAria")}
            className="absolute start-3 sm:start-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <PrevIcon size={22} />
          </button>

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[80vh] w-full"
          >
            {galleryImages[index].type === "video" ? (
              <video
                key={galleryImages[index].video}
                src={galleryImages[index].video}
                poster={galleryImages[index].image}
                controls
                autoPlay
                playsInline
                className="w-full h-full max-h-[80vh] object-contain rounded-2xl bg-black"
              />
            ) : (
              <img
                src={galleryImages[index].image}
                alt={galleryImages[index].alt}
                className="w-full h-full max-h-[80vh] object-contain rounded-2xl"
              />
            )}
            <p className="text-center text-white/60 text-sm mt-4">{galleryImages[index].alt}</p>
          </motion.div>

          <button
            onClick={(e) => { e.stopPropagation(); onNav(1); }}
            aria-label={t("lightbox.nextAria")}
            className="absolute end-3 sm:end-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <NextIcon size={22} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
