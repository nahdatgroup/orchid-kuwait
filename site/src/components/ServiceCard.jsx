import { motion } from "framer-motion";
import { useTilt } from "./Activities";

/**
 * Premium glassmorphism service card used in the About Us 3x2 grid.
 * Subtle green tint, soft backdrop blur, no heavy border/shadow, with a
 * pointer-driven 3D tilt and icon micro-animation on hover.
 */
export default function ServiceCard({ icon: Icon, title, index = 0 }) {
  const { rotateX, rotateY, glowX, glowY, handlers, enabled } = useTilt();

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 800 }}
      className="h-full"
    >
      <motion.div
        {...handlers}
        style={enabled ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-full overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md ring-1 ring-primary/10 shadow-[0_10px_30px_-18px_rgba(11,31,20,0.25)] hover:shadow-[0_18px_40px_-16px_rgba(47,125,50,0.35)] transition-shadow duration-300 px-5 py-6 sm:px-6 sm:py-7"
      >
        {enabled && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(180px circle at ${glowX} ${glowY}, rgba(112,184,42,0.18), transparent 65%)`,
            }}
          />
        )}

        <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-light to-white text-primary mb-4 shadow-inner transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6">
          {Icon && <Icon size={20} />}
        </span>

        <h3 className="relative font-bold text-sm sm:text-[15px] text-ink leading-snug">{title}</h3>
      </motion.div>
    </motion.div>
  );
}
