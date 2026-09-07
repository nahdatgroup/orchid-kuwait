import OmanNavbar from "../components/oman/OmanNavbar";
import OmanHero from "../components/oman/OmanHero";
import OmanAbout from "../components/oman/OmanAbout";
import OmanVisionMission from "../components/oman/OmanVisionMission";
import OmanServices from "../components/oman/OmanServices";
import OmanProjects from "../components/oman/OmanProjects";
import OmanGallery from "../components/oman/OmanGallery";
import OmanContact from "../components/oman/OmanContact";
import OmanFooter from "../components/oman/OmanFooter";
import { usePageMeta } from "../i18n/usePageMeta";

export default function Oman() {
  usePageMeta({
    en: {
      title: "Orchid International Trading and Contracting Company LLC | Salalah, Oman",
      description:
        "Orchid International Trading and Contracting Company LLC — construction of buildings and real estate development across Salalah, Dhofar Governorate, Oman.",
    },
    ar: {
      title: "شركة أوركيد إنترناشونال للتجارة والمقاولات ذ.م.م | صلالة، عُمان",
      description:
        "شركة أوركيد إنترناشونال للتجارة والمقاولات ذ.م.م — إنشاء المباني والتطوير العقاري في صلالة، محافظة ظفار، عُمان.",
    },
  });

  return (
    <div className="bg-ivory">
      <OmanNavbar />
      <OmanHero />
      <OmanAbout />
      <OmanVisionMission />
      <OmanServices />
      <OmanProjects />
      <OmanGallery />
      <OmanContact />
      <OmanFooter />
    </div>
  );
}
