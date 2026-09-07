import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { omanCompany } from "../../data/omanContent";
import { useLanguage } from "../../i18n/LanguageContext";

export default function OmanContact() {
  const { t, isRtl } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-charcoal py-24 sm:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <p className="font-display italic text-bronze-bright text-sm sm:text-base mb-4">
            {t("oman.contact.kicker")}
          </p>
          <h2 className="font-display text-ivory text-4xl sm:text-5xl leading-[1.05] font-medium mb-6 max-w-sm">
            {t("oman.contact.heading")}
          </h2>
          <p className="text-sand/75 leading-relaxed max-w-sm mb-10">{t("oman.contact.paragraph")}</p>

          <div className="space-y-5">
            <InfoRow icon={MapPin} label={t("oman.contact.addressLabel")}>
              {omanCompany.addressLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </InfoRow>
            <InfoRow icon={Phone} label={t("oman.contact.phoneLabel")}>
              {omanCompany.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s+/g, "")}`} className="block hover:text-bronze-bright transition-colors">
                  {p}
                </a>
              ))}
            </InfoRow>
            <InfoRow icon={Mail} label={t("oman.contact.emailLabel")}>
              <a href={`mailto:${omanCompany.email}`} className="hover:text-bronze-bright transition-colors">
                {omanCompany.email}
              </a>
            </InfoRow>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <div className="bg-ivory rounded-sm p-7 sm:p-10 shadow-elevated">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center"
                >
                  <CheckCircle2 size={40} className="mx-auto text-bronze mb-4" />
                  <h3 className="font-display text-2xl text-charcoal font-medium mb-2">
                    {t("oman.contact.thankYouTitle")}
                  </h3>
                  <p className="text-stone mb-6 max-w-xs mx-auto">{t("oman.contact.thankYouParagraph")}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-semibold text-bronze hover:text-charcoal transition-colors"
                  >
                    {t("oman.contact.sendAnother")}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <Field label={t("oman.contact.formNameLabel")} type="text" required />
                  <Field label={t("oman.contact.formEmailLabel")} type="email" required />
                  <div>
                    <label className="block text-xs font-semibold text-stone mb-2">
                      {t("oman.contact.formMessageLabel")}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t("oman.contact.formMessagePlaceholder")}
                      className="w-full rounded-sm border border-charcoal/15 bg-transparent px-4 py-3 text-charcoal placeholder:text-stone/60 outline-none focus:border-bronze transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-charcoal hover:bg-onyx transition-colors text-ivory text-sm font-bold px-7 py-3.5"
                  >
                    {t("oman.contact.submit")}
                    <ArrowRight size={15} className={isRtl ? "rotate-180" : ""} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 w-9 h-9 shrink-0 rounded-full border border-white/15 flex items-center justify-center text-bronze-bright">
        <Icon size={15} />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-1">{label}</div>
        <div className="text-sand/90 text-[15px] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, type, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-stone mb-2">{label}</label>
      <input
        type={type}
        required={required}
        className="w-full rounded-sm border border-charcoal/15 bg-transparent px-4 py-3 text-charcoal placeholder:text-stone/60 outline-none focus:border-bronze transition-colors"
      />
    </div>
  );
}
