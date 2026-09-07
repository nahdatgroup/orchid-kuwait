import { motion } from "framer-motion";

/**
 * A premium, gradient-shaded botanical leaf used in the Hero and About Us
 * redesign. Distinct from the flatter two-tone <Leaf> used elsewhere in the
 * site (Activities/WhyChooseUs/etc.) — this one leans more realistic, with
 * a soft gradient body, glossy sheen and fine vein detail, so it reads as
 * premium rather than cartoon-like.
 */
export default function FloatingLeaf({
  size = 64,
  delay = 0,
  duration = 10,
  flip = false,
  blur = false,
  opacity = 0.9,
  className = "",
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
      style={{ opacity }}
      animate={{
        y: [0, -32, 0],
        x: flip ? [0, -16, 0] : [0, 16, 0],
        rotate: flip ? [-6, -22, -6] : [6, 22, 6],
        scale: [1, 1.06, 1],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg
        width={size}
        height={size * 1.25}
        viewBox="0 0 100 125"
        style={{
          filter: blur ? "blur(2.5px)" : "drop-shadow(0 16px 22px rgba(6,20,12,0.35))",
          transform: flip ? "scaleX(-1)" : undefined,
        }}
      >
        <defs>
          <linearGradient id="premiumLeafBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C3EA8E" />
            <stop offset="45%" stopColor="#6FAE2E" />
            <stop offset="100%" stopColor="#1F5424" />
          </linearGradient>
          <linearGradient id="premiumLeafSheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M50 6C22 22 8 52 14 84c4 20 20 33 36 35 18-2 34-15 38-35 6-32-8-62-38-78z"
          fill="url(#premiumLeafBody)"
        />
        <path
          d="M50 6C22 22 8 52 14 84c4 20 20 33 36 35 18-2 34-15 38-35 6-32-8-62-38-78z"
          fill="url(#premiumLeafSheen)"
          opacity="0.55"
        />
        <path d="M50 14 C46 46 46 84 50 114" stroke="#0B1F14" strokeOpacity="0.35" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M50 34 C40 40 32 48 26 56" stroke="#0B1F14" strokeOpacity="0.22" strokeWidth="1.1" fill="none" strokeLinecap="round" />
        <path d="M50 34 C60 40 68 48 74 56" stroke="#0B1F14" strokeOpacity="0.22" strokeWidth="1.1" fill="none" strokeLinecap="round" />
        <path d="M50 58 C42 64 34 70 30 78" stroke="#0B1F14" strokeOpacity="0.18" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M50 58 C58 64 66 70 70 78" stroke="#0B1F14" strokeOpacity="0.18" strokeWidth="1" fill="none" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}
