import { Link } from "../../lib/router";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useTilt } from "../Activities";

export default function CompanyCard({ to, image, name, tag, country, location, cta, delay = 0 }) {
  const { rotateX, rotateY, glowX, glowY, handlers, enabled } = useTilt();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        {...handlers}
        style={enabled ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-full rounded-[1.75rem] p-[1.5px] bg-gradient-to-br from-white/25 via-white/5 to-bright/40 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] hover:shadow-[0_35px_70px_-20px_rgba(112,184,42,0.45)] transition-shadow duration-500"
      >
        <Link to={to} className="relative flex h-full flex-col overflow-hidden rounded-[1.7rem] bg-deep">
          {/* image */}
          <div className="relative h-56 lg:h-60 shrink-0 overflow-hidden">
            <motion.img
              src={image}
              alt={name}
              animate={{ scale: [1.04, 1.12, 1.04] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/20 to-transparent" />
            {/* light sweep */}
            <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[120%] transition-all duration-1000 ease-out" />

            <span className="absolute top-3.5 start-3.5 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-bold text-white">
              <MapPin size={11} className="text-bright" />
              {country}
            </span>

            <span className="absolute top-3.5 end-3.5 flex items-center justify-center w-10 h-10 rounded-full bg-white text-forest shadow-lg transition-all duration-500 group-hover:bg-bright group-hover:rotate-45">
              <ArrowUpRight size={18} className="rtl:-scale-x-100" />
            </span>
          </div>

          {/* text */}
          <div className="relative flex flex-1 flex-col px-5 pt-1 pb-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-bright">{tag}</p>
            <h3 className="mt-1.5 text-white font-bold text-base leading-snug line-clamp-3 min-h-[4.125rem]">{name}</h3>
            <p className="mt-2 text-white/50 text-xs leading-relaxed line-clamp-2">{location}</p>

            <div className="mt-auto pt-4 flex items-center justify-between">
              <span className="relative text-sm font-semibold text-white">
                {cta}
                <span className="absolute start-0 -bottom-0.5 h-[2px] w-full rounded-full bg-gradient-to-r from-primary to-bright scale-x-0 origin-left rtl:origin-right group-hover:scale-x-100 transition-transform duration-500" />
              </span>
              <span className="h-[3px] w-8 rounded-full bg-gradient-to-r from-primary to-bright transition-all duration-500 group-hover:w-14" />
            </div>
          </div>

          {enabled && (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: `radial-gradient(260px circle at ${glowX} ${glowY}, rgba(255,255,255,0.14), transparent 65%)` }}
            />
          )}
        </Link>
      </motion.div>
    </motion.div>
  );
}
