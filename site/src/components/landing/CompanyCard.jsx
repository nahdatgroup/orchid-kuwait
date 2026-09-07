import { Link } from "../../lib/router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CompanyCard({ to, image, name, location, cta, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
      className="relative"
    >
      <Link
        to={to}
        className="group relative block overflow-hidden rounded-sm h-[70vh] min-h-[420px] sm:h-[78vh] sm:min-h-[520px]"
      >
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/45 to-onyx/10 transition-colors duration-500 group-hover:from-onyx/95" />

        <div className="relative h-full flex flex-col justify-end p-7 sm:p-10">
          <h3 className="font-display text-ivory text-2xl sm:text-3xl lg:text-[2.15rem] leading-[1.15] font-medium max-w-sm">
            {name}
          </h3>
          <p className="text-sand/75 text-sm mt-3 max-w-xs leading-relaxed">{location}</p>

          <div className="mt-7 inline-flex items-center gap-2 text-ivory text-sm font-semibold w-fit">
            <span className="relative overflow-hidden">
              {cta}
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-bronze-bright scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            </span>
            <ArrowUpRight
              size={16}
              className="text-bronze-bright transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:group-hover:-translate-x-1"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
