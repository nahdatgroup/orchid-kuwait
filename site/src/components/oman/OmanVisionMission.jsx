import { motion } from "framer-motion";
import { Compass, Target } from "lucide-react";
import { omanVideo } from "../../data/omanContent";
import { useLanguage } from "../../i18n/LanguageContext";

export default function OmanVisionMission() {
  const { t } = useLanguage();
  const vision = t("oman.vision.vision");
  const mission = t("oman.vision.mission");

  return (
    <section id="vision" className="relative py-28 sm:py-36 overflow-hidden bg-onyx">
      <video
        src={omanVideo.visionLoop.src}
        poster={omanVideo.visionLoop.poster}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/80 to-onyx" />
      <div className="grain-overlay" />

      <div className="relative container-x">
        <div className="max-w-xl mb-14 sm:mb-16">
          <p className="font-display italic text-bronze-bright text-sm sm:text-base mb-4">
            {t("oman.vision.kicker")}
          </p>
          <h2 className="font-display text-ivory text-4xl sm:text-5xl font-medium">
            {t("oman.vision.heading")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass rounded-sm p-8 sm:p-10"
          >
            <span className="inline-flex w-11 h-11 rounded-full items-center justify-center border border-bronze-bright/40 text-bronze-bright mb-6">
              <Compass size={18} />
            </span>
            <h3 className="font-display text-ivory text-2xl sm:text-3xl font-medium mb-4">
              {vision.title}
            </h3>
            <p className="text-sand/75 leading-relaxed text-[15px] sm:text-base">{vision.text}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="glass rounded-sm p-8 sm:p-10"
          >
            <span className="inline-flex w-11 h-11 rounded-full items-center justify-center border border-bronze-bright/40 text-bronze-bright mb-6">
              <Target size={18} />
            </span>
            <h3 className="font-display text-ivory text-2xl sm:text-3xl font-medium mb-4">
              {mission.title}
            </h3>
            <p className="text-sand/75 leading-relaxed text-[15px] sm:text-base">{mission.text}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
