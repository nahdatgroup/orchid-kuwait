import { useMemo } from "react";
import { motion } from "framer-motion";

function makeParticles(count, seedOffset) {
  return Array.from({ length: count }).map((_, i) => {
    // Deterministic-ish pseudo-random spread using index + a seed offset,
    // so particles don't all move in perfect unison.
    const rand = (n) => {
      const x = Math.sin((i + 1) * 999 + n * 57 + seedOffset) * 10000;
      return x - Math.floor(x);
    };
    return {
      id: i,
      size: 2 + rand(1) * 4,
      left: rand(2) * 100,
      top: 10 + rand(3) * 80,
      duration: 9 + rand(4) * 12,
      delay: rand(5) * 8,
      drift: (rand(6) - 0.5) * 70,
      rise: 50 + rand(7) * 110,
      peakOpacity: 0.25 + rand(8) * 0.45,
    };
  });
}

/**
 * Soft glowing dust / pollen particles for the Hero (and, more sparsely,
 * the About Us section). Pure CSS-transform + opacity animation via
 * Framer Motion — no canvas, so it stays lightweight and GPU-friendly.
 */
export default function ParticleBackground({ count = 26, color = "bright", seed = 0, className = "" }) {
  const particles = useMemo(() => makeParticles(count, seed), [count, seed]);
  const glow = color === "white" ? "rgba(255,255,255,0.65)" : "rgba(112,184,42,0.6)";
  const dot = color === "white" ? "#ffffff" : "#70B82A";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: dot,
            boxShadow: `0 0 6px 2px ${glow}`,
          }}
          animate={{
            y: [0, -p.rise, 0],
            x: [0, p.drift, 0],
            opacity: [0, p.peakOpacity, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
