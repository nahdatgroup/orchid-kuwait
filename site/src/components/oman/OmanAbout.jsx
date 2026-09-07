import { motion } from "framer-motion";
import { omanImages } from "../../data/omanContent";
import { useLanguage } from "../../i18n/LanguageContext";
import AnimatedCounter from "./AnimatedCounter";

export default function OmanAbout() {
  const { t } = useLanguage();
  const stats = t("oman.about.stats");

  return (
    <section id="about" className="relative bg-ivory py-24 sm:py-32 overflow-hidden">
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-7 relative"
        >
          <div className="relative rounded-sm overflow-hidden shadow-elevated aspect-[4/3] lg:aspect-[16/11]">
            <img
              src={omanImages.about}
              alt="Editorial view of a grand stone-built residence"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-8 -start-8 w-40 h-40 border border-bronze/40 rounded-sm -z-10" />

          {/* Glassmorphism badge floating on the hero image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass absolute -bottom-6 end-4 sm:end-8 rounded-sm px-6 py-5 sm:px-8 sm:py-6 text-center shadow-elevated"
          >
            <div className="font-display text-4xl sm:text-5xl text-ivory font-medium leading-none">
              <AnimatedCounter value={stats[0].value} suffix={stats[0].suffix} />
            </div>
            <div className="text-sand/80 text-xs sm:text-sm mt-2 max-w-[10ch]">{t("oman.about.badge")}</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-5 lg:ps-6"
        >
          <p className="font-display italic text-bronze text-sm sm:text-base mb-4">
            {t("oman.about.kicker")}
          </p>
          <h2 className="font-display text-charcoal text-4xl sm:text-5xl leading-[1.05] font-medium mb-6">
            {t("oman.about.heading")}
          </h2>
          <p className="text-stone leading-relaxed text-[15px] sm:text-base mb-4 max-w-md">
            {t("oman.about.paragraph1")}
          </p>
          <p className="text-stone leading-relaxed text-[15px] sm:text-base mb-10 max-w-md">
            {t("oman.about.paragraph2")}
          </p>

          <div className="flex items-center gap-8 sm:gap-10 border-t border-charcoal/10 pt-8 flex-wrap">
            {stats.slice(1).map((stat, i, arr) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-10">
                <div>
                  <div className="font-display text-3xl sm:text-4xl text-charcoal font-medium">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-stone text-sm mt-1">{stat.label}</div>
                </div>
                {i < arr.length - 1 && <div className="w-px h-10 bg-charcoal/10 hidden sm:block" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
