import { motion } from "framer-motion";

export default function OmanServiceCard({ index, title, description, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-sm aspect-[4/5] sm:aspect-[3/4]"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/20 to-transparent transition-opacity duration-500 group-hover:from-onyx/95" />

      <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
        <span className="font-display text-white/40 text-5xl sm:text-6xl font-medium transition-colors duration-500 group-hover:text-bronze-bright/70">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-display text-white text-2xl sm:text-3xl font-medium mb-2.5 max-w-[16ch]">
            {title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed max-w-[32ch] opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
