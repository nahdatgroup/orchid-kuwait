import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Phone, Mail, MapPin, Clock, CheckCircle2, MessageCircle } from "lucide-react";
import { getContent } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import FloatingLeaf from "./FloatingLeaf";
import ParticleBackground from "./ParticleBackground";

const initialForm = { name: "", phone: "", email: "", service: "", message: "" };

export default function Contact() {
  const { lang, t, isRtl } = useLanguage();
  const { contactInfo } = getContent(lang);
  const SubmitIcon = isRtl ? ArrowLeft : ArrowRight;
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="relative bg-offwhite py-24 lg:py-28 overflow-hidden">
      {/* ambient background — consistent with the rest of the site */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[4%] -right-24 w-80 h-80 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-light to-bright/20 blur-3xl opacity-70" />
        <div className="absolute bottom-[6%] -left-24 w-72 h-72 rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-gradient-to-br from-primary/10 to-bright/20 blur-3xl opacity-60" />
      </div>

      <ParticleBackground count={12} color="bright" seed={11} className="opacity-50" />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <FloatingLeaf size={34} duration={8.5} delay={0.3} opacity={0.55} className="top-[10%] left-[5%] hidden sm:block" />
        <FloatingLeaf size={26} duration={7.5} delay={1.1} flip blur opacity={0.4} className="bottom-[8%] right-[5%] hidden lg:block" />
      </div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="eyebrow justify-center mb-4">
            <MessageCircle size={13} />
            {t("contact.eyebrow")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink leading-tight">
            {t("contact.heading")}
          </h2>
          <p className="mt-4 text-ink/60 leading-relaxed">
            {t("contact.paragraph")}
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] p-8 sm:p-10 text-white bg-gradient-to-br from-forest via-deep to-primary/70 shadow-soft"
          >
            {/* organic glow accents, matching the dark sections elsewhere */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-bright/25 to-transparent blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-14 -left-10 w-48 h-48 rounded-[55%_45%_40%_60%/45%_55%_50%_50%] bg-gradient-to-br from-primary/30 to-bright/10 blur-3xl" aria-hidden="true" />

            <div className="relative">
              <h3 className="font-bold text-lg leading-snug">{contactInfo.companyName}</h3>
              <div className="mt-8 space-y-6">
                <InfoRow icon={Phone} label={t("contact.phoneLabel")} value={contactInfo.phone} />
                <InfoRow icon={Mail} label={t("contact.emailLabel")} value={contactInfo.email} />
                <InfoRow icon={MapPin} label={t("contact.addressLabel")} value={contactInfo.address} />
                <InfoRow icon={Clock} label={t("contact.hoursLabel")} value={contactInfo.hours} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRtl ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-card ring-1 ring-black/5"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full min-h-[320px] flex flex-col items-center justify-center text-center"
              >
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-light">
                  <CheckCircle2 size={30} className="text-primary" />
                </span>
                <h3 className="mt-4 font-bold text-lg text-ink">{t("contact.thankYouTitle")}</h3>
                <p className="mt-2 text-sm text-ink/60 max-w-xs">
                  {t("contact.thankYouParagraph")}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-bold text-primary hover:text-forest transition-colors"
                >
                  {t("contact.sendAnother")}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Field label={t("contact.formNameLabel")} name="name" value={form.name} onChange={handleChange} required />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={t("contact.formPhoneLabel")} name="phone" type="tel" value={form.phone} onChange={handleChange} required />
                  <Field label={t("contact.formEmailLabel")} name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>
                <Field label={t("contact.formServiceLabel")} name="service" value={form.service} onChange={handleChange} />
                <div>
                  <label className="text-xs font-bold uppercase tracking-wide text-ink/50">{t("contact.formMessageLabel")}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-ink/10 focus:border-primary outline-none px-4 py-3 text-sm resize-none transition-colors"
                    placeholder={t("contact.formMessagePlaceholder")}
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-bright hover:brightness-110 transition-all text-white font-bold px-7 py-3.5 shadow-[0_14px_34px_-14px_rgba(47,125,50,0.55)]"
                >
                  {t("contact.submit")}
                  <SubmitIcon size={17} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 shrink-0">
        <Icon size={16} className="text-bright" />
      </span>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-wide text-white/45">{label}</p>
        <p className="text-sm font-semibold text-white/90 mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text", required }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-wide text-ink/50">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-xl border border-ink/10 focus:border-primary outline-none px-4 py-3 text-sm transition-colors"
      />
    </div>
  );
}
