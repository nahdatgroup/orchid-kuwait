import { useEffect, useState } from "react";
import { Link } from "../../lib/router";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
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
  const [hidden, setHidden] = useState(false);
  const { t } = useLanguage();
  const active = useActiveSection();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });

  const links = t("oman.navbar.links");

  // solid floating bar once scrolled; hides while scrolling down, returns on scroll up
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 320);
        lastY = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // anchor jumps land below the bar instead of underneath it
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollPaddingTop;
    html.style.scrollPaddingTop = "96px";
    return () => {
      html.style.scrollPaddingTop = prev;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navItems = LINK_IDS.map((id) => ({ id, label: links[id] }));

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50"
      animate={{ y: hidden && !open ? "-120%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`transition-all duration-500 ${scrolled ? "pt-3 px-3 sm:px-4" : "pt-0 px-0"}`}>
        <div
          className={`relative mx-auto transition-all duration-500 ${
            scrolled
              ? "max-w-[1240px] rounded-2xl bg-onyx/90 backdrop-blur-xl border border-white/10 shadow-elevated"
              : "max-w-full rounded-none bg-gradient-to-b from-onyx/70 to-transparent border border-transparent"
          }`}
        >
          <div className={scrolled ? "px-4 sm:px-6" : "container-x"}>
            <div className={`flex items-center justify-between gap-4 transition-all duration-500 ${scrolled ? "py-2.5" : "py-4 sm:py-5"}`}>
              <a href="#home" aria-label={t("oman.navbar.homeAria")}>
                <Logo variant="light" brand="oman" />
              </a>

              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      active === item.id ? "text-onyx" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {active === item.id && (
                      <motion.span
                        layoutId="oman-nav-active"
                        className="absolute inset-0 rounded-full bg-bronze-bright"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <Link
                  to="/"
                  aria-label={t("oman.navbar.groupAria")}
                  title={t("logo.internationalName")}
                  className="hidden sm:inline-flex xl:hidden items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/75 hover:text-white hover:border-white/40 transition-colors"
                >
                  <LayoutGrid size={14} />
                </Link>
                <Link
                  to="/"
                  aria-label={t("oman.navbar.groupAria")}
                  className="hidden xl:inline-flex items-center gap-1.5 rounded-full border border-white/20 text-white/75 hover:text-white hover:border-white/40 transition-colors text-xs font-semibold px-3.5 py-2"
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

          {/* scroll progress */}
          <motion.span
            aria-hidden="true"
            style={{ scaleX: progress }}
            className={`absolute bottom-0 inset-x-4 h-[2px] origin-left rtl:origin-right rounded-full bg-gradient-to-r from-bronze to-bronze-bright transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
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
            <div className="mt-2 rounded-3xl bg-onyx/95 backdrop-blur-xl border border-white/10 shadow-elevated p-5 flex flex-col gap-1">
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
    </motion.header>
  );
}
