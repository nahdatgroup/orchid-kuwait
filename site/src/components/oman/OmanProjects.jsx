import { motion } from "framer-motion";
import { getOmanProjects } from "../../data/omanContent";
import { useLanguage } from "../../i18n/LanguageContext";

const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-12"];
const ASPECTS = ["aspect-[4/3]", "aspect-[4/3]", "aspect-[21/9]"];

export default function OmanProjects() {
  const { t, lang } = useLanguage();
  const projects = getOmanProjects(lang);
  const categories = t("oman.projects.categories");

  return (
    <section id="projects" className="relative bg-ivory py-24 sm:py-32">
      <div className="container-x">
        <div className="mb-12 sm:mb-16 max-w-xl">
          <p className="font-display italic text-bronze text-sm sm:text-base mb-4">
            {t("oman.projects.kicker")}
          </p>
          <h2 className="font-display text-charcoal text-4xl sm:text-5xl font-medium">
            {t("oman.projects.heading")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden rounded-sm ${SPANS[i % 3]} ${ASPECTS[i % 3]}`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/25 transition-colors duration-500" />
              <div className="glass absolute inset-x-0 bottom-0 sm:inset-x-3 sm:bottom-3 sm:rounded-sm flex flex-col justify-end p-5 sm:p-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-bronze-bright text-xs font-semibold uppercase tracking-wide mb-1.5">
                  {categories[project.category]}
                </span>
                <h3 className="font-display text-ivory text-xl sm:text-2xl font-medium">{project.name}</h3>
                <p className="text-sand/70 text-sm mt-1">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
