import { useState } from "react";
import { Link } from "../lib/router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Logo from "./Logo";
import { getContent } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

const SocialIcon = ({ path }) => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
    <path d={path} />
  </svg>
);

const socialLinks = [
  { name: "Facebook", path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12" },
  { name: "Instagram", path: "M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.5 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.5a5 5 0 0 1-1.2 1.8 5 5 0 0 1-1.8 1.2c-.7.3-1.4.5-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5a5 5 0 0 1-1.8-1.2 5 5 0 0 1-1.2-1.8c-.3-.7-.5-1.4-.5-2.5-.1-1-.1-1.4-.1-4.1s0-3.1.1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.5-.5C8.9 2 9.3 2 12 2m0 1.8c-2.6 0-3 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .7-.3.3-.5.6-.7 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.4-.1 4s0 3 .1 4c0 .9.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.8.3 1.7.3 1 .1 1.4.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.8.3-1.7.1-1 .1-1.4.1-4s0-3-.1-4c0-.9-.2-1.4-.3-1.7a2.7 2.7 0 0 0-.7-1 2.7 2.7 0 0 0-1-.7c-.3-.1-.8-.3-1.7-.3-1-.1-1.4-.1-4-.1M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4m5.2-3.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4" },
  { name: "LinkedIn", path: "M6.9 8.4H3.3V21h3.6zM5.1 3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2M21 21v-6.9c0-3.4-1.8-5-4.2-5-1.9 0-2.8 1.1-3.3 1.8v-1.5H10V21h3.5v-6.4c0-.6 0-1.2.4-1.6.3-.5.9-1 1.8-1 1.3 0 1.8 1 1.8 2.4V21z" },
];

export default function Footer() {
  const { lang, t } = useLanguage();
  const { navLinks, footerServices, contactInfo } = getContent(lang);

  return (
    <footer className="bg-forest text-white pt-20 pb-8">
      <div className="container-x">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          <div className="lg:col-span-2 sm:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <SocialIcon path={s.path} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title={t("footer.quickLinks")}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/55 hover:text-bright transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title={t("footer.ourActivities")}>
            {footerServices.map((s) => (
              <li key={s} className="text-white/55">{s}</li>
            ))}
          </FooterCol>

          <NewsletterForm />
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <Link to="/" className="text-xs text-white/40 hover:text-bright transition-colors">
            Part of Orchid International
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="font-bold text-sm uppercase tracking-wide text-white/90 mb-4">{title}</h4>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function NewsletterForm() {
  const { lang, t } = useLanguage();
  const { contactInfo } = getContent(lang);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div>
      <h4 className="font-bold text-sm uppercase tracking-wide text-white/90 mb-4">{t("footer.newsletter")}</h4>
      <p className="text-sm text-white/55 leading-relaxed">{t("footer.newsletterParagraph")}</p>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 flex items-center gap-2 text-sm font-semibold text-bright"
          >
            <CheckCircle2 size={16} />
            {t("footer.subscribedMessage")}
          </motion.p>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-4 flex items-center gap-2"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("footer.emailPlaceholder")}
              aria-label={t("footer.emailPlaceholder")}
              className="min-w-0 flex-1 rounded-full bg-white/10 placeholder:text-white/40 text-sm px-4 py-2.5 outline-none focus:bg-white/15 transition-colors"
            />
            <button
              type="submit"
              aria-label={t("footer.subscribeAria")}
              className="shrink-0 w-9 h-9 rounded-full bg-primary hover:bg-bright hover:text-forest flex items-center justify-center transition-colors"
            >
              <ArrowRight size={15} className="rtl:-scale-x-100" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <p className="mt-4 text-xs text-white/40">{contactInfo.phone}</p>
      <p className="text-xs text-white/40">{contactInfo.email}</p>
    </div>
  );
}
