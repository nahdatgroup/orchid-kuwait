import { useEffect, useState } from "react";
import { Link } from "../lib/router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ChevronLeft, LayoutGrid } from "lucide-react";
import Logo from "./Logo";
import { getContent } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

// Tracks which section is currently in view so the matching nav link can
// be highlighted in lime, using a single IntersectionObserver for all
// section ids referenced by navLinks.
function useActiveSection(navLinks) {
  const [active, setActive] = useState(navLinks[0]?.href ?? "");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [navLinks]);

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
          lang === "en" ? "bg-bright text-forest" : "text-white/70 hover:text-white"
        }`}
      >
        {t("languageSwitcher.en")}
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        className={`px-2.5 py-1.5 rounded-full transition-colors duration-200 ${
          lang === "ar" ? "bg-bright text-forest" : "text-white/70 hover:text-white"
        }`}
      >
        {t("languageSwitcher.ar")}
      </button>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, isRtl, t } = useLanguage();
  const { navLinks } = getContent(lang);
  const active = useActiveSection(navLinks);
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-forest/35 backdrop-blur-md border-b border-white/10">
        <div className="container-x">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-between gap-4 py-3.5 sm:py-4"
          >
            <a href="#home" aria-label={t("navbar.homeAria")}>
              <Logo variant="light" />
            </a>

            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-semibold transition-colors duration-200 ${
                      isActive ? "text-bright" : "text-white/85 hover:text-bright"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute start-0 -bottom-1.5 h-[2px] rounded-full bg-bright transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                to="/"
                aria-label="Orchid International group"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/20 text-white/75 hover:text-white hover:border-white/40 transition-colors text-xs font-semibold px-3.5 py-2"
              >
                <LayoutGrid size={13} />
                Orchid International
              </Link>
              <LanguageSwitcher className="hidden sm:inline-flex" />
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-bright hover:brightness-110 transition-all text-white text-sm font-bold px-5 py-2.5 shadow-[0_10px_26px_-10px_rgba(112,184,42,0.6)]"
              >
                {t("navbar.getQuote")}
              </a>
              <button
                aria-label={t("navbar.toggleMenu")}
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white transition-colors"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </motion.div>
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
            <div className="mt-2 rounded-3xl bg-forest/90 backdrop-blur-xl border border-white/10 shadow-soft p-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-3 px-2 font-semibold border-b border-white/10 last:border-0 transition-colors ${
                    active === link.href ? "text-bright" : "text-white"
                  }`}
                >
                  {link.label}
                  <ChevronIcon size={16} className="text-bright" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-bright text-white text-sm font-bold px-5 py-3"
              >
                {t("navbar.getQuote")}
              </a>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 text-white text-sm font-semibold px-5 py-3"
              >
                <LayoutGrid size={14} />
                Orchid International
              </Link>
              <LanguageSwitcher className="sm:hidden mt-3 self-center" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
