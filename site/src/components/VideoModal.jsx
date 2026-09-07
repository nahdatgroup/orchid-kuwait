import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { video as defaultVideo } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

export default function VideoModal({ open, onClose, src, poster }) {
  const { t } = useLanguage();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const videoSrc = src || defaultVideo.src;
  const videoPoster = poster || defaultVideo.poster;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-forest/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label={t("videoModal.closeAria")}
            className="absolute top-5 end-5 sm:top-8 sm:end-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md sm:max-w-lg rounded-2xl overflow-hidden shadow-soft"
          >
            <video
              src={videoSrc}
              poster={videoPoster}
              controls
              autoPlay
              playsInline
              className="w-full h-full max-h-[85vh] bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
