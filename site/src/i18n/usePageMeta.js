import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

/**
 * Sets document.title and the description/og meta tags for the current
 * page, in the active language. Each page (Landing, Kuwait, Oman) calls
 * this with its own copy so switching routes — or switching language on
 * a given route — always keeps the tab title and SEO tags in sync.
 *
 * @param {{ en: {title: string, description: string}, ar: {title: string, description: string} }} meta
 */
export function usePageMeta(meta) {
  const { lang } = useLanguage();

  useEffect(() => {
    const copy = meta[lang] || meta.en;
    if (!copy) return;

    document.title = copy.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", copy.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", copy.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", copy.description);
  }, [lang, meta]);
}
