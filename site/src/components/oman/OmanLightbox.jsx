import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

export default function OmanLightbox({ items, index, onClose, onNav }) {
  const { t, isRtl } = useLanguage();
  const open = index !== null;
  const item = open ? items[index] : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(isRtl ? -1 : 1);
      if (e.key === "ArrowLeft") onNav(isRtl ? 1 : -1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, onNav, isRtl]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-onyx/95 flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <button
            aria-label={t("oman.gallery.closeAria")}
            onClick={onClose}
            className="glass absolute top-4 end-4 sm:top-6 sm:end-6 w-11 h-11 rounded-full flex items-center justify-center text-ivory z-10"
          >
            <X size={18} />
          </button>

          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              onNav(-1);
            }}
            className="glass hidden sm:flex absolute start-4 sm:start-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full items-center justify-center text-ivory z-10"
          >
            {isRtl ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              onNav(1);
            }}
            className="glass hidden sm:flex absolute end-4 sm:end-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full items-center justify-center text-ivory z-10"
          >
            {isRtl ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] rounded-sm overflow-hidden"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                poster={item.poster}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[85vh] rounded-sm"
              />
            ) : (
              <img src={item.src} alt={item.title} className="w-full max-h-[85vh] object-contain rounded-sm" />
            )}
            <div className="glass absolute bottom-0 inset-x-0 px-5 py-3.5 text-ivory text-sm font-medium">
              {item.title}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
