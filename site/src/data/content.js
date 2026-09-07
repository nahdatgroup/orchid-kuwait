import pergola from "../assets/about/pergola-entrance.jpg";
import aboutLeavesBranch from "../assets/about/about-leaves-branch.jpg";
import aboutLeavesAutumn from "../assets/about/about-leaves-autumn.jpg";
import aboutLeavesCutout from "../assets/about/about-leaves-cutout.jpg";
import hedges from "../assets/hero/hedges-modern.jpg";
import heroBanner from "../assets/hero/modern-backyard.jpg";
import rosesRow from "../assets/gallery/roses-row.jpg";
import rosesRow2 from "../assets/gallery/roses-row-2.jpg";
import bougainvillea1 from "../assets/gallery/bougainvillea-1.jpg";
import bougainvillea2 from "../assets/gallery/bougainvillea-2.jpg";
import videoPoster from "../assets/videos/poster.jpg";
import showcaseVideo from "../assets/videos/showcase.mp4";
import heroVideo1 from "../assets/videos/hero-video-1.mp4";
import heroVideo1Poster from "../assets/videos/hero-video-1-poster.jpg";
import heroVideo2 from "../assets/videos/hero-video-2.mp4";
import heroVideo2Poster from "../assets/videos/hero-video-2-poster.jpg";
import heroFeatureImageSrc from "../assets/hero/orchid-living-wall.jpg";
import womanWithPlant from "../assets/activities/woman-with-plant.png";
import manGardening from "../assets/activities/man-gardening.png";
import leavesGround from "../assets/activities/leaves-ground.png";
import pergolaLoungeLighting from "../assets/projects/pergola-lounge-lighting.jpg";
import gardenPathwayWalkway from "../assets/projects/garden-pathway-walkway.jpg";
import palmLinedDriveway from "../assets/projects/palm-lined-driveway.jpg";
import geometricLawnOliveGarden from "../assets/projects/geometric-lawn-olive-garden.jpg";
import poolsidePalmGarden from "../assets/projects/poolside-palm-garden.jpg";
import galleryPoolAerialVideo from "../assets/videos/gallery-pool-aerial.mp4";
import galleryPoolAerialPoster from "../assets/videos/gallery-video-poster.jpg";

export const images = {
  hero: pergola,
  heroBanner: heroBanner,
  aboutLarge: hedges,
  aboutSmall1: bougainvillea1,
  aboutSmall2: rosesRow,
  aboutLeavesBranch: aboutLeavesBranch,
  aboutLeavesAutumn: aboutLeavesAutumn,
  aboutLeavesCutout: aboutLeavesCutout,
  whyChooseUs: videoPoster,
  cta: pergola,
};

export const video = {
  src: showcaseVideo,
  poster: videoPoster,
};

// Hero background videos — kept for reuse elsewhere if needed (e.g. a
// future full-bleed crossfade treatment). The Hero's oval frame now shows
// a static image instead (see `heroFeatureImage` below).
const heroVideoCaptions = {
  en: ["Immersive Outdoor Living Spaces", "Crafted With Care, Built To Last"],
  ar: ["مساحات معيشة خارجية غامرة", "صُنعت بعناية، وبُنيت لتدوم"],
};

export function getHeroVideos(lang = "en") {
  const captions = heroVideoCaptions[lang] || heroVideoCaptions.en;
  return [
    { src: heroVideo1, poster: heroVideo1Poster, caption: captions[0] },
    { src: heroVideo2, poster: heroVideo2Poster, caption: captions[1] },
  ];
}

// Featured image shown inside the Hero's tall oval frame.
export const heroFeatureImage = heroFeatureImageSrc;

// ============================================================
// LOCALIZED TEXT CONTENT — every data-driven list below shares the
// same media/icons/ids across languages; only the text fields differ.
// ============================================================

const navLinksText = {
  en: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Vision", href: "#vision" },
    { label: "Services", href: "#activities" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ],
  ar: [
    { label: "الرئيسية", href: "#home" },
    { label: "من نحن", href: "#about" },
    { label: "رؤيتنا", href: "#vision" },
    { label: "خدماتنا", href: "#activities" },
    { label: "مشاريعنا", href: "#projects" },
    { label: "معرض الصور", href: "#gallery" },
    { label: "اتصل بنا", href: "#contact" },
  ],
};

const aboutFeaturesText = {
  en: [
    "Landscape Design",
    "Garden Maintenance",
    "Irrigation Systems",
    "Garden Installation",
    "Outdoor Lighting",
    "Seasonal Maintenance",
  ],
  ar: [
    "تصميم المساحات الخضراء",
    "صيانة الحدائق",
    "أنظمة الري",
    "تنفيذ الحدائق",
    "الإضاءة الخارجية",
    "الصيانة الموسمية",
  ],
};

// "Why Choose Us" feature cards used in the About Us grid composition.
const aboutWhyChooseText = {
  en: [
    { title: "Sustainable Practices", description: "Eco-friendly landscaping solutions that protect nature and create greener environments." },
    { title: "Experienced Team", description: "Skilled professionals delivering quality landscaping and garden maintenance services." },
    { title: "Reliable Service", description: "Consistent, professional and dependable service delivered on time, every time." },
    { title: "Customized Solutions", description: "Landscaping solutions tailored around each client's space, needs and vision." },
    { title: "Customer Satisfaction", description: "Quality, attention to detail and long-term relationships across Kuwait." },
  ],
  ar: [
    { title: "ممارسات مستدامة", description: "حلول تنسيق حدائق صديقة للبيئة تحافظ على الطبيعة وتخلق بيئات أكثر خضرة." },
    { title: "فريق عمل خبير", description: "محترفون مهرة يقدمون خدمات متميزة في تنسيق الحدائق وصيانتها." },
    { title: "خدمة موثوقة", description: "خدمة احترافية ومتسقة يمكن الاعتماد عليها، في الوقت المحدد دائماً." },
    { title: "حلول مخصصة", description: "حلول تنسيق حدائق مصممة خصيصاً وفق مساحة كل عميل واحتياجاته ورؤيته." },
    { title: "رضا العملاء", description: "جودة واهتمام بالتفاصيل وعلاقات طويلة الأمد في جميع أنحاء الكويت." },
  ],
};

const aboutWhyChooseMeta = [
  { id: "sustainable", icon: "Leaf", variant: "gradient" },
  { id: "experienced", icon: "Users", variant: "white" },
  { id: "reliable", icon: "ShieldCheck", variant: "gradient" },
  { id: "customized", icon: "Sparkles", variant: "gradient" },
  { id: "satisfaction", icon: "Heart", variant: "gradient" },
];

const whyChooseFeaturesText = {
  en: [
    "Personalized Landscape Designs",
    "High Quality Materials",
    "Experienced & Skilled Team",
    "On-Time & On-Budget",
  ],
  ar: [
    "تصاميم مساحات خضراء مخصصة",
    "مواد عالية الجودة",
    "فريق عمل خبير ومحترف",
    "الالتزام بالوقت والميزانية",
  ],
};

const servicesText = {
  en: [
    { title: "Landscape Design", description: "Creative landscape concepts tailored to your property and lifestyle.", image: pergola },
    { title: "Garden Landscaping", description: "Beautiful and functional garden spaces designed with attention to detail.", image: rosesRow },
    { title: "Irrigation & Drainage", description: "Efficient irrigation and drainage solutions for healthy landscapes.", image: bougainvillea2 },
    { title: "Garden Maintenance", description: "Professional maintenance to keep your garden clean and vibrant.", image: hedges },
    { title: "Hardscape & Outdoor Spaces", description: "Paths, patios and outdoor features built to last.", image: pergola, imagePosition: "50% 70%" },
    { title: "Outdoor Lighting", description: "Beautiful lighting solutions that enhance your landscape day and night.", image: rosesRow2 },
  ],
  ar: [
    { title: "تصميم المساحات الخضراء", description: "أفكار إبداعية للمساحات الخضراء مصممة خصيصاً لعقارك وأسلوب حياتك.", image: pergola },
    { title: "تنسيق الحدائق", description: "مساحات حدائق جميلة وعملية مصممة باهتمام دقيق بالتفاصيل.", image: rosesRow },
    { title: "الري والصرف", description: "حلول ري وصرف فعّالة للحفاظ على مساحات خضراء صحية.", image: bougainvillea2 },
    { title: "صيانة الحدائق", description: "صيانة احترافية للحفاظ على حديقتك نظيفة ونابضة بالحياة.", image: hedges },
    { title: "الأعمال الصلبة والمساحات الخارجية", description: "ممرات وباحات وعناصر خارجية مصممة لتدوم طويلاً.", image: pergola, imagePosition: "50% 70%" },
    { title: "الإضاءة الخارجية", description: "حلول إضاءة جميلة تُبرز مساحتك الخضراء نهاراً وليلاً.", image: rosesRow2 },
  ],
};

const servicesMeta = [
  { id: "design", icon: "PenTool" },
  { id: "landscaping", icon: "Flower2" },
  { id: "irrigation", icon: "Droplets" },
  { id: "maintenance", icon: "Scissors" },
  { id: "hardscape", icon: "Building2" },
  { id: "lighting", icon: "Lightbulb" },
];

const activitiesText = {
  en: [
    { title: "Green & Environment Friendly Solutions", description: "Promoting eco-friendly practices that protect natural resources and support a sustainable future.", image: womanWithPlant },
    { title: "Public Facilities Management", description: "Efficient management of public facilities to ensure safety, functionality and cleanliness.", image: hedges, imagePosition: "50% 30%" },
    { title: "Care & Maintenance of Plants Protecting Against Noise, Wind and Desertification", description: "Plant care and green barriers that reduce noise, block wind and combat desertification.", image: rosesRow2 },
    { title: "Landscape Care & Maintenance", description: "Complete landscape maintenance services to keep outdoor spaces beautiful and healthy.", image: manGardening },
    { title: "General Cleaning Contracting of Buildings, Cities & Roads", description: "Professional cleaning services for buildings, streets, cities and public areas.", image: hedges, imagePosition: "50% 70%" },
    { title: "Care & Maintenance of Sports Fields & Golf Courses", description: "Specialized care for sports fields and golf courses for optimal performance and appearance.", image: rosesRow },
    { title: "Swimming Pool Cleaning & Maintenance", description: "Reliable cleaning and maintenance services for safe, clean and hygienic pools.", image: leavesGround },
    { title: "Exterior Building Cleaning", description: "Expert exterior cleaning services that restore and maintain the beauty of buildings.", image: rosesRow2, imagePosition: "50% 70%" },
  ],
  ar: [
    { title: "حلول خضراء وصديقة للبيئة", description: "تعزيز الممارسات الصديقة للبيئة التي تحافظ على الموارد الطبيعية وتدعم مستقبلاً مستداماً.", image: womanWithPlant },
    { title: "إدارة المرافق العامة", description: "إدارة فعّالة للمرافق العامة لضمان السلامة والكفاءة والنظافة.", image: hedges, imagePosition: "50% 30%" },
    { title: "العناية بالنباتات وحمايتها من الضوضاء والرياح والتصحر", description: "العناية بالنباتات وإقامة حواجز خضراء تحد من الضوضاء وتصد الرياح وتكافح التصحر.", image: rosesRow2 },
    { title: "العناية بالمساحات الخضراء وصيانتها", description: "خدمات صيانة شاملة للمساحات الخضراء للحفاظ على جمالها وصحتها.", image: manGardening },
    { title: "مقاولات التنظيف العام للمباني والمدن والطرق", description: "خدمات تنظيف احترافية للمباني والشوارع والمدن والمناطق العامة.", image: hedges, imagePosition: "50% 70%" },
    { title: "العناية بالملاعب الرياضية وملاعب الغولف وصيانتها", description: "عناية متخصصة بالملاعب الرياضية وملاعب الغولف لأفضل أداء ومظهر.", image: rosesRow },
    { title: "تنظيف وصيانة حمامات السباحة", description: "خدمات تنظيف وصيانة موثوقة لحمامات سباحة آمنة ونظيفة وصحية.", image: leavesGround },
    { title: "تنظيف واجهات المباني الخارجية", description: "خدمات تنظيف خارجي متخصصة تُعيد جمال المباني وتحافظ عليه.", image: rosesRow2, imagePosition: "50% 70%" },
  ],
};

const activitiesMeta = [
  { id: "green-solutions", icon: "Leaf" },
  { id: "facilities", icon: "Building2" },
  { id: "plant-protection", icon: "ShieldCheck" },
  { id: "landscape-care", icon: "Scissors" },
  { id: "general-cleaning", icon: "Sparkles" },
  { id: "sports-fields", icon: "Trophy" },
  { id: "pool-cleaning", icon: "Waves" },
  { id: "exterior-cleaning", icon: "Building" },
];

const valuesText = {
  en: [
    "Credibility with clients",
    "Fairness in pricing offers",
    "Earning client satisfaction and flexibility in dealings",
    "Leaving a positive impression in our dealings and in the hearts of our clients",
    "Keeping up with everything new in our field",
    "Working according to the highest global standards, speed of execution, and precision in work",
  ],
  ar: [
    "المصداقية مع العملاء",
    "العدالة في عروض الأسعار",
    "كسب رضا العملاء والمرونة في التعامل",
    "ترك انطباع إيجابي في تعاملاتنا وفي قلوب عملائنا",
    "مواكبة كل ما هو جديد في مجالنا",
    "العمل وفق أعلى المعايير العالمية، مع سرعة التنفيذ ودقة العمل",
  ],
};

const valuesIcons = ["Handshake", "HandCoins", "HeartHandshake", "Sparkles", "Trophy", "Gauge"];

const whyChooseOrchidText = {
  en: [
    { title: "Eco-Friendly Approach", description: "We use sustainable methods and materials." },
    { title: "Experienced Team", description: "Skilled professionals committed to excellence." },
    { title: "Quality Assurance", description: "High standards in every service we deliver." },
    { title: "Community Focused", description: "Creating better environments for communities." },
  ],
  ar: [
    { title: "نهج صديق للبيئة", description: "نستخدم أساليب ومواد مستدامة." },
    { title: "فريق عمل خبير", description: "محترفون مهرة ملتزمون بالتميز." },
    { title: "ضمان الجودة", description: "معايير عالية في كل خدمة نقدمها." },
    { title: "التركيز على المجتمع", description: "نخلق بيئات أفضل للمجتمعات." },
  ],
};

const whyChooseOrchidIcons = ["Leaf", "Users", "ShieldCheck", "Heart"];

const projectsText = {
  en: [
    { title: "Pergola Lounge & Ambient Lighting", category: "Outdoor Living Spaces" },
    { title: "Contemporary Garden Walkway", category: "Landscape Design" },
    { title: "Palm-Lined Entrance Landscape", category: "Residential Landscaping" },
    { title: "Geometric Lawn & Olive Garden", category: "Garden Design" },
    { title: "Poolside Palm Garden", category: "Pool Landscaping" },
  ],
  ar: [
    { title: "ركن استراحة بالبرغولا وإضاءة أجواء", category: "مساحات المعيشة الخارجية" },
    { title: "ممر حديقة عصري", category: "تصميم المساحات الخضراء" },
    { title: "مدخل مصفوف بالنخيل", category: "تنسيق حدائق سكنية" },
    { title: "مسطح عشبي هندسي وحديقة زيتون", category: "تصميم الحدائق" },
    { title: "حديقة نخيل بجانب المسبح", category: "تنسيق حدائق المسابح" },
  ],
};

const projectsMeta = [
  { id: 1, image: pergolaLoungeLighting, position: "50% 55%" },
  { id: 2, image: gardenPathwayWalkway },
  { id: 3, image: palmLinedDriveway, position: "50% 35%" },
  { id: 4, image: geometricLawnOliveGarden },
  { id: 5, image: poolsidePalmGarden, position: "50% 45%" },
];

const galleryAltText = {
  en: [
    "Modern pergola entrance with lush landscaping",
    "Trimmed hedge border along a modern facade",
    "Rows of flowering rose standards",
    "Bougainvillea in full bloom",
    "Aerial view of a curved swimming pool and spa surrounded by palms",
  ],
  ar: [
    "مدخل عصري بالبرغولا مع تنسيق حدائق فاخر",
    "حدود شجيرات مشذّبة بمحاذاة واجهة عصرية",
    "صفوف من أشجار الورد المزهرة",
    "زهور الجهنمية في إزهار كامل",
    "منظر جوي لمسبح منحني وسبا محاطين بأشجار النخيل",
  ],
};

const galleryMeta = [
  { id: 1, image: pergola, size: "large" },
  { id: 2, image: hedges },
  { id: 3, image: rosesRow },
  { id: 4, image: bougainvillea1 },
  { id: 5, type: "video", image: galleryPoolAerialPoster, video: galleryPoolAerialVideo },
];

const statsLabelsText = {
  en: ["Years of Experience", "Projects Completed", "Happy Clients", "Skilled Team Members"],
  ar: ["سنوات من الخبرة", "مشروعاً منجزاً", "عميلاً سعيداً", "عضواً في فريق العمل الخبير"],
};

const statsMeta = [
  { id: "years", value: 12, suffix: "+", icon: "CalendarCheck" },
  { id: "projects", value: 340, suffix: "+", icon: "Sparkles" },
  { id: "clients", value: 180, suffix: "+", icon: "Heart" },
  { id: "team", value: 45, suffix: "+", icon: "Users" },
];

const contactInfoText = {
  en: {
    companyName: "ORCHID COMPANY FOR LANDSCAPING AND MAINTENANCE OF GARDEN LLC",
    address: "11th Floor, Awtad Tower, Egaila, Kuwait",
    hours: "Saturday – Thursday, 7:00 AM – 3:00 PM",
  },
  ar: {
    companyName: "شركة أوركيد لتنسيق وصيانة الحدائق ذ.م.م",
    address: "الطابق الحادي عشر، برج أوتاد، العقيلة، الكويت",
    hours: "السبت – الخميس، 7:00 صباحاً – 3:00 مساءً",
  },
};

const contactInfoShared = {
  phone: "+965 2383 6927",
  email: "info@orchidkuwait.com",
};

const footerServicesText = {
  en: [
    "Green & Environment Friendly Solutions",
    "Public Facilities Management",
    "Care & Maintenance of Plants",
    "Landscape Care & Maintenance",
    "General Cleaning Contracting",
    "Sports Fields & Golf Course Care",
    "Swimming Pool Maintenance",
    "Exterior Building Cleaning",
  ],
  ar: [
    "حلول خضراء وصديقة للبيئة",
    "إدارة المرافق العامة",
    "العناية بالنباتات وصيانتها",
    "العناية بالمساحات الخضراء وصيانتها",
    "مقاولات التنظيف العام",
    "العناية بالملاعب الرياضية وملاعب الغولف",
    "صيانة حمامات السباحة",
    "تنظيف واجهات المباني الخارجية",
  ],
};

function merge(textArr, metaArr) {
  return textArr.map((text, i) => ({ ...text, ...metaArr[i] }));
}

// getContent(lang) is the single entry point components use to read every
// localized, data-driven collection on the site. Media, icons and ids stay
// identical across languages — only the text fields swap.
export function getContent(lang = "en") {
  const L = lang === "ar" ? "ar" : "en";

  return {
    navLinks: navLinksText[L],
    aboutFeatures: aboutFeaturesText[L],
    aboutWhyChoose: aboutWhyChooseText[L].map((text, i) => ({ ...text, ...aboutWhyChooseMeta[i] })),
    whyChooseFeatures: whyChooseFeaturesText[L],
    services: servicesText[L].map((text, i) => ({ ...text, ...servicesMeta[i] })),
    activities: activitiesText[L].map((text, i) => ({ ...text, ...activitiesMeta[i] })),
    values: valuesText[L].map((title, i) => ({ title, icon: valuesIcons[i] })),
    whyChooseOrchid: whyChooseOrchidText[L].map((text, i) => ({ ...text, icon: whyChooseOrchidIcons[i] })),
    projects: merge(projectsText[L], projectsMeta),
    galleryImages: galleryAltText[L].map((alt, i) => ({ ...galleryMeta[i], alt })),
    stats: statsLabelsText[L].map((label, i) => ({ ...statsMeta[i], label })),
    contactInfo: { ...contactInfoShared, ...contactInfoText[L] },
    footerServices: footerServicesText[L],
  };
}
