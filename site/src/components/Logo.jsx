import iconMarkDark from "../assets/logo/orchid-icon.png";
import iconMarkLight from "../assets/logo/orchid-icon-light.png";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Shared wordmark used across all three sites (group landing, Kuwait,
 * Oman). `brand` picks which name/tagline/accent color renders next to the
 * same icon mark, so the two companies read as one family without
 * duplicating this component.
 *
 *  - "kuwait" (default): "ORCHID COMPANY" — landscaping tagline, green accent
 *  - "oman": "ORCHID INTERNATIONAL" — contracting tagline, bronze accent
 *  - "group": "ORCHID INTERNATIONAL" — group tagline, bronze accent
 */
export default function Logo({ variant = "dark", brand = "kuwait", className = "" }) {
  const { t } = useLanguage();
  const textColor = variant === "dark" ? "text-ink" : "text-white";
  const subColor = variant === "dark" ? "text-ink/60" : "text-white/65";
  const iconMark = variant === "dark" ? iconMarkDark : iconMarkLight;
  const accentClass = brand === "kuwait" ? "text-primary" : "text-bronze-bright";

  const name = brand === "kuwait" ? t("logo.kuwaitName") : t("logo.internationalName");
  const nameAccent = brand === "kuwait" ? t("logo.kuwaitNameAccent") : t("logo.internationalNameAccent");
  const tagline = brand === "kuwait" ? t("logo.tagline") : brand === "oman" ? t("logo.omanTagline") : t("logo.groupTagline");

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={iconMark}
        alt={t("logo.homeLogoAlt")}
        className="h-9 w-auto sm:h-10 shrink-0 select-none"
        draggable="false"
      />
      <div className="leading-tight">
        <div className={`font-extrabold tracking-tight text-[15px] sm:text-base ${textColor}`}>
          {name} <span className={accentClass}>{nameAccent}</span>
        </div>
        <div className={`text-[8.5px] sm:text-[9px] font-semibold tracking-[0.08em] uppercase ${subColor}`}>
          {tagline}
        </div>
      </div>
    </div>
  );
}
