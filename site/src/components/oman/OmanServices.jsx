import OmanServiceCard from "./OmanServiceCard";
import { omanImages } from "../../data/omanContent";
import { useLanguage } from "../../i18n/LanguageContext";

export default function OmanServices() {
  const { t } = useLanguage();
  const items = t("oman.services.items");
  const images = [omanImages.services.construction, omanImages.services.realEstate];

  return (
    <section id="services" className="relative bg-onyx py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <p className="font-display italic text-bronze-bright text-sm sm:text-base mb-4">
              {t("oman.services.kicker")}
            </p>
            <h2 className="font-display text-ivory text-4xl sm:text-5xl font-medium">
              {t("oman.services.heading")}
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {items.map((item, i) => (
            <OmanServiceCard key={item.title} index={i} title={item.title} description={item.description} image={images[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
