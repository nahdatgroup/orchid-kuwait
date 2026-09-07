import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { CalendarCheck, Sparkles, Heart, Users } from "lucide-react";
import { getContent } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import FloatingLeaf from "./FloatingLeaf";
import ParticleBackground from "./ParticleBackground";

const icons = { CalendarCheck, Sparkles, Heart, Users };

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { lang } = useLanguage();
  const { stats } = getContent(lang);
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest via-deep to-primary/70 py-16 lg:py-20">
      {/* organic ambient glow, consistent with the Hero atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-[10%] w-72 h-72 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-bright/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 right-[8%] w-80 h-80 rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-gradient-to-br from-primary/25 to-bright/10 blur-3xl" />
      </div>

      <ParticleBackground count={16} color="bright" seed={3} />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <FloatingLeaf size={40} duration={9} delay={0.2} blur opacity={0.4} className="top-[10%] left-[4%] hidden sm:block" />
        <FloatingLeaf size={34} duration={7.5} delay={1.1} flip opacity={0.5} className="bottom-[12%] right-[6%] hidden lg:block" />
      </div>

      <div className="container-x relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="group relative rounded-[2rem] bg-white/8 backdrop-blur-md border border-white/12 px-5 py-7 sm:px-6 sm:py-8 text-center shadow-[0_20px_50px_-24px_rgba(0,0,0,0.5)] hover:border-bright/30 hover:bg-white/12 transition-colors duration-300"
              >
                {Icon && (
                  <span className="mx-auto mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-primary to-bright text-white shadow-[0_10px_24px_-8px_rgba(112,184,42,0.65)] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={18} />
                  </span>
                )}
                <p className="text-3xl sm:text-4xl font-extrabold text-bright">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-xs sm:text-sm font-semibold text-white/60 tracking-wide">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
