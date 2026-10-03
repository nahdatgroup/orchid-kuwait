import { useState } from "react";
import { Link } from "../lib/router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUp, CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Logo from "./Logo";
import { Leaf } from "./Activities";
import ParticleBackground from "./ParticleBackground";
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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Footer() {
  const { lang, t } = useLanguage();
  const { navLinks, footerServices, contactInfo } = getContent(lang);

  // add the new Plants section to quick links, right after Projects
  const quickLinks = navLinks.flatMap((l) =>
    l.href === "#projects" ? [l, { label: t("footer.plantsLink"), href: "#plants" }] : [l]
  );

  const contactRows = [
    { Icon: Phone, label: t("contact.phoneLabel"), value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}`, ltr: true },
    { Icon: Mail, label: t("contact.emailLabel"), value: contactInfo.email, href: `mailto:${contactInfo.email}`, ltr: true },
    { Icon: MapPin, label: t("contact.addressLabel"), value: contactInfo.address },
    { Icon: Clock, label: t("contact.hoursLabel"), value: contactInfo.hours },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-forest via-forest to-deep text-white">
      {/* organic wave from the light Contact section */}
      <div className="relative leading-none bg-offwhite" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[90px]">
          <path d="M0,60 C220,120 420,0 720,40 C1020,80 1200,10 1440,50 L1440,120 L0,120 Z" fill="#10291A" opacity="0.35" />
          <path d="M0,80 C240,130 460,20 740,60 C1020,100 1220,30 1440,70 L1440,120 L0,120 Z" fill="#0B1F14" />
        </svg>
      </div>

      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[12%] -right-32 w-[30rem] h-[30rem] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-primary/30 to-bright/10 blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] -left-32 w-[26rem] h-[26rem] rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-gradient-to-br from-bright/15 to-primary/20 blur-3xl opacity-60" />
        <Leaf size={46} duration={8} delay={0.2} faint className="top-[18%] left-[46%] hidden lg:block" />
        <Leaf size={34} duration={7} delay={1.1} flip blur faint className="top-[52%] right-[5%] hidden sm:block" />
        <Leaf size={28} duration={9} delay={0.6} faint className="bottom-[16%] left-[4%] hidden lg:block" />
      </div>
      <ParticleBackground count={14} color="bright" seed={11} className="opacity-50" />

      {/* giant watermark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-14 flex justify-center select-none" aria-hidden="true">
        <span
          className="text-[22vw] lg:text-[16rem] font-extrabold leading-none tracking-tighter text-transparent"
          style={{ WebkitTextStroke: "1px rgba(112,184,42,0.10)" }}
        >
          ORCHID
        </span>
      </div>

      <div className="container-x relative pt-10 sm:pt-14 pb-8">
        {/* ============ TOP BAND: tagline + newsletter ============ */}
        <motion.div
          {...fadeUp()}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 sm:p-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center"
        >
          <div className="pointer-events-none absolute -top-20 -left-16 w-64 h-64 rounded-full bg-bright/20 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <p className="eyebrow mb-3 !text-bright">{t("footer.newsletter")}</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              {t("footer.bandHeadingLine1")} <span className="text-bright">{t("footer.bandHeadingLine2")}</span>
            </h3>
            <p className="mt-3 text-sm text-white/60 max-w-md">{t("footer.newsletterParagraph")}</p>
          </div>
          <NewsletterForm />
        </motion.div>

        {/* ============ MAIN COLUMNS ============ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-14 pb-14">
          <motion.div {...fadeUp(0.05)} className="sm:col-span-2 lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-sm">{t("footer.description")}</p>

            <p className="mt-7 mb-3 text-xs font-bold uppercase tracking-wide text-white/80">{t("footer.followUs")}</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  whileHover={{ y: -4, rotate: -6 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 hover:bg-gradient-to-br hover:from-primary hover:to-bright hover:border-transparent flex items-center justify-center transition-colors"
                >
                  <SocialIcon path={s.path} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="lg:col-span-2">
            <FooterTitle>{t("footer.quickLinks")}</FooterTitle>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="group inline-flex items-center gap-2 text-white/55 hover:text-bright transition-colors">
                    <span className="h-px w-0 bg-bright transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="lg:col-span-3">
            <FooterTitle>{t("footer.ourActivities")}</FooterTitle>
            <ul className="space-y-2.5 text-sm">
              {footerServices.map((s) => (
                <li key={s} className="flex items-start gap-2 text-white/55">
                  <span className="mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full bg-bright/70" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="lg:col-span-3">
            <FooterTitle>{t("footer.contactTitle")}</FooterTitle>
            <ul className="space-y-4 text-sm">
              {contactRows.map(({ Icon, label, value, href, ltr }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-xl bg-primary/25 text-bright">
                    <Icon size={15} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wide text-white/40">{label}</p>
                    {href ? (
                      <a href={href} dir={ltr ? "ltr" : undefined} className="text-white/75 hover:text-bright transition-colors break-words">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white/75 leading-relaxed">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ============ BOTTOM BAR ============ */}
        <div className="relative pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-start">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-5">
            <Link to="/" className="text-xs text-white/40 hover:text-bright transition-colors">
              Part of Orchid International
            </Link>
            <motion.a
              href="#home"
              aria-label={t("footer.backToTop")}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.92 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-bright text-white flex items-center justify-center shadow-[0_10px_26px_-10px_rgba(112,184,42,0.7)]"
            >
              <ArrowUp size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }) {
  return (
    <h4 className="relative mb-5 pb-3 font-bold text-sm uppercase tracking-wide text-white/90">
      {children}
      <span className="absolute bottom-0 start-0 h-[3px] w-8 rounded-full bg-gradient-to-r from-primary to-bright" />
    </h4>
  );
}

function NewsletterForm() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-sm font-semibold text-bright"
          >
            <CheckCircle2 size={18} />
            {t("footer.subscribedMessage")}
          </motion.p>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex items-center gap-2 rounded-full bg-white/10 border border-white/10 p-1.5 focus-within:border-bright/50 focus-within:bg-white/[0.14] transition-colors"
          >
            <Send size={15} className="ms-3 shrink-0 text-white/40 rtl:-scale-x-100" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("footer.emailPlaceholder")}
              aria-label={t("footer.emailPlaceholder")}
              className="min-w-0 flex-1 bg-transparent placeholder:text-white/40 text-sm px-2 py-2 outline-none"
            />
            <button
              type="submit"
              aria-label={t("footer.subscribeAria")}
              className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-bright hover:from-bright hover:to-bright hover:text-forest px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors"
            >
              <span className="hidden sm:inline">{t("footer.subscribeAria")}</span>
              <ArrowRight size={14} className="rtl:-scale-x-100" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
