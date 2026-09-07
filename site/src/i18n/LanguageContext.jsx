import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translate } from "./translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "orchid-language";
const SUPPORTED = ["en", "ar"];

function getInitialLanguage() {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch {
    // localStorage may be unavailable (privacy mode, etc.) — fall back silently.
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLanguage);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    // Per-page <title>/meta description is now set by usePageMeta() in each
    // page component — the group now has three distinct pages (Landing,
    // Kuwait, Oman) that each need their own SEO metadata, rather than one
    // fixed title for the whole app.
  }, [lang, dir]);

  const setLang = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore write failures — language still applies for this session.
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "ar" : "en");
  }, [lang, setLang]);

  const t = useCallback((key, vars) => translate(lang, key, vars), [lang]);

  const value = useMemo(
    () => ({ lang, dir, isRtl: dir === "rtl", setLang, toggleLang, t }),
    [lang, dir, setLang, toggleLang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
