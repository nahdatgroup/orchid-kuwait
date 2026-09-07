import { useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import VisionValues from "../components/VisionValues";
import WhyChooseUs from "../components/WhyChooseUs";
import Activities from "../components/Activities";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Lightbox from "../components/Lightbox";
import { getContent } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import { usePageMeta } from "../i18n/usePageMeta";

export default function Kuwait() {
  const { lang } = useLanguage();
  const { galleryImages } = getContent(lang);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  usePageMeta({
    en: {
      title: "Orchid Landscaping | Design. Build. Maintain.",
      description:
        "Orchid Company for Landscaping and Maintenance of Garden LLC — premium landscape design, installation and garden maintenance.",
    },
    ar: {
      title: "أوركيد لتنسيق الحدائق | تصميم. تنفيذ. صيانة.",
      description:
        "شركة أوركيد لتنسيق وصيانة الحدائق ذ.م.م — تصميم مساحات خضراء متميز، وتنفيذ وصيانة للحدائق.",
    },
  });

  const handleNav = useCallback(
    (dir) => {
      setLightboxIndex((i) => {
        if (i === null) return i;
        const next = (i + dir + galleryImages.length) % galleryImages.length;
        return next;
      });
    },
    [galleryImages.length]
  );

  return (
    <div className="bg-offwhite">
      <Navbar />
      <Hero />
      <About />
      <VisionValues />
      <WhyChooseUs />
      <Activities />
      <Stats />
      <Projects />
      <Gallery onOpen={(i) => setLightboxIndex(i)} />
      <CTA />
      <Contact />
      <Footer />

      <Lightbox index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNav={handleNav} />
    </div>
  );
}
