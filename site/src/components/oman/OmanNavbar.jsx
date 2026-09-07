import { useEffect, useState } from "react";
import { Link } from "../../lib/router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LayoutGrid } from "lucide-react";
import Logo from "../Logo";
import { useLanguage } from "../../i18n/LanguageContext";

const LINK_IDS = ["home", "about", "vision", "services", "projects", "gallery", "contact"];

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = LINK_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return active;
}

function LanguageSwitcher({ className = "" }) {
  const { lang, setLang, t } = useLanguage();
  return (
    <div
      className={`inline-flex items-center rounded-full bg-white/10 border border-white/15 p-0.5 text-xs font-bold ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2.5 py-1.5 rounded-full transition-colors duration-200 ${
          lang === "en" ? "bg-bronze-bright text-onyx" : "text-white/70 hover:text-white"
        }`}
      >
        {t("languageSwitcher.en")}
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        className={`px-2.5 py-1.5 rounded-full transition-colors duration-200 ${
          lang === "ar" ? "bg-bronze-bright text-onyx" : "text-white/70 hover:text-white"
        }`}
      >
        {t("languageSwitcher.ar")}
      </button>
    </div>
  );
}

export default function OmanNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const active = useActiveSection();

  const links = t("oman.navbar.links");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navItems = LINK_IDS.map((id) => ({ id, label: links[id] }));

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`transition-colors duration-500 ${
          scrolled ? "glass border-b-0" : "bg-transparent"
        }`}
      >
        <div className="container-x">
          <div className="flex items-center justify-between gap-4 py-4 sm:py-5">
            <a href="#home" aria-label={t("oman.navbar.homeAria")}>
              <Logo variant="light" brand="oman" />
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    active === item.id ? "text-bronze-bright" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute start-0 -bottom-1.5 h-px bg-bronze-bright transition-all duration-300 ${
                      active === item.id ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                to="/"
                aria-label={t("oman.navbar.groupAria")}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/20 text-white/75 hover:text-white hover:border-white/40 transition-colors text-xs font-semibold px-3.5 py-2"
              >
                <LayoutGrid size={13} />
                {t("logo.internationalName")}
              </Link>
              <LanguageSwitcher className="hidden sm:inline-flex" />
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-bronze hover:bg-bronze-bright transition-colors text-onyx text-sm font-bold px-5 py-2.5"
              >
                {t("oman.navbar.cta")}
              </a>
              <button
                aria-label={t("oman.navbar.toggleMenu")}
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-colors"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden container-x"
          >
            <div className="mt-2 rounded-3xl glass shadow-elevated p-5 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`py-3 px-2 font-semibold border-b border-white/10 last:border-0 transition-colors ${
                    active === item.id ? "text-bronze-bright" : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 text-white text-sm font-semibold px-5 py-3"
              >
                <LayoutGrid size={14} />
                {t("logo.internationalName")}
              </Link>
              <LanguageSwitcher className="sm:hidden mt-3 self-center" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
