import { Link } from "../../lib/router";
import Logo from "../Logo";
import { omanCompany } from "../../data/omanContent";
import { useLanguage } from "../../i18n/LanguageContext";

export default function OmanFooter() {
  const { t } = useLanguage();
  const links = t("oman.navbar.links");
  const navItems = ["home", "about", "vision", "services", "projects", "gallery", "contact"];

  return (
    <footer className="bg-onyx text-white pt-20 pb-8">
      <div className="container-x">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          <div className="lg:col-span-2">
            <Logo variant="light" brand="oman" />
            <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-xs">
              {t("oman.footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm text-white/90 mb-4">{t("oman.footer.quickLinks")}</h4>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-white/50 hover:text-bronze-bright transition-colors">
                    {links[id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm text-white/90 mb-4">{t("oman.footer.contactTitle")}</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              {omanCompany.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s+/g, "")}`} className="hover:text-bronze-bright transition-colors">
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${omanCompany.email}`} className="hover:text-bronze-bright transition-colors">
                  {omanCompany.email}
                </a>
              </li>
              {omanCompany.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            {t("oman.footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <Link to="/" className="text-xs text-white/35 hover:text-bronze-bright transition-colors">
            {t("logo.internationalName")} {t("logo.groupTagline")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
