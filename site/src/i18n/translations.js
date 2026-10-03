// Central dictionary of every static (non-data-driven) UI string on the
// site. Data-driven collections (nav links, services, activities, values,
// projects, gallery captions, stats, contact info, footer services) are
// localized separately in `src/data/content.js` via `getContent(lang)`,
// since their shape (images, icons, ids) is shared between languages.

export const translations = {
  en: {
    navbar: {
      homeAria: "Orchid Company home",
      getQuote: "Get a Quote",
      toggleMenu: "Toggle menu",
    },
    languageSwitcher: {
      en: "EN",
      ar: "AR",
    },
    hero: {
      eyebrow: "Green Spaces. Better Places.",
      headingLine1: "Creating Beautiful",
      headingLine2: "Landscapes,",
      headingLine3: "Nurturing Nature",
      paragraph:
        "Orchid Company for Landscaping and Maintenance of Garden LLC delivers professional landscaping, garden maintenance and facility management solutions that transform outdoor spaces into beautiful, healthy and functional environments.",
      cta: "Get in Touch",
      microFeatures: ["Eco-Friendly Solutions", "Reliable & Professional", "Expert Team"],
      imageAlt: "Lush living wall of tropical foliage and orchids",
    },
    about: {
      eyebrow: "About Us",
      headingPrefix: "About",
      headingHighlight: "Orchid",
      paragraph1:
        "Orchid Company for Landscaping and Maintenance of Garden LLC delivers professional landscaping, garden maintenance and facility management solutions that transform outdoor spaces into beautiful, healthy and functional environments.",
      paragraph2:
        "Guided by an eco-friendly approach, our team keeps public and private facilities clean, safe and attractive, building long-term relationships with clients across Kuwait through dependable, professional service.",
      cta: "Learn More",
    },
    visionValues: {
      whoWeAreEyebrow: "Who We Are",
      whoWeAreHeadingLine1: "Orchids Company For Landscape",
      whoWeAreHeadingLine2: "Design & Garden Maintenance",
      whoWeAreParagraph:
        "A specialized company in the design and coordination of indoor and outdoor gardens, and their maintenance — with distinctive designs and innovative, modern ideas that suit the nature of Kuwait and the desires of clients seeking excellence and sophistication.",
      badge: "Ready  Steady  Grow",
      visionEyebrow: "Our Vision",
      visionParagraph:
        "We view every client as part of the company's success, and we always strive to keep pace with everything new in the world of landscape engineering. We aim to contribute to building our homeland Kuwait, surrounding it with the beauty of greenery and the splendor of scenery in every place — whether homes, farms, chalets, facilities, or government bodies and their affiliated departments.",
      visionQuote1: "Our ambition never stops, and our ideas are never exhausted.",
      visionQuote2: "Client satisfaction is our goal… and a good reputation is our gain.",
      valuesEyebrow: "Our Values",
      valuesHeadingPrefix: "Solid, Unwavering",
      valuesHeadingHighlight: "Values",
    },
    whyChooseUs: {
      eyebrow: "Why Choose Us",
      headingLine1: "Rooted In Care,",
      headingLine2Prefix: "Committed To",
      headingLine2Highlight: "Excellence",
      paragraph:
        "Orchid Company for Landscaping and Maintenance of Garden LLC delivers professional landscaping, garden maintenance and facility management solutions that transform outdoor spaces into beautiful, healthy and functional environments — building lasting relationships through reliability, sustainability and exceptional service across Kuwait.",
      cta: "Learn More",
      badgeLine1: "Quality",
      badgeLine2: "Guaranteed",
      imageAlt1: "Rain-kissed green foliage on a garden branch",
      imageAlt2: "Close-up texture of fallen autumn leaves on a garden path",
      imageAlt3: "Fresh green leaves, a symbol of natural growth",
    },
    activities: {
      eyebrow: "Our Activities",
      headingLine1: "A Complete Range of",
      headingLine2: "Environmental Services",
      paragraph:
        "We provide a wide range of eco-friendly activities and facility management services that contribute to cleaner, greener and healthier communities.",
      explore: "Explore",
      exploreAria: "Explore {title}",
    },
    projects: {
      eyebrow: "Our Projects",
      heading: "Explore Our Recent Work",
      paragraph:
        "Take a look at some of our completed landscaping projects showcasing our creativity, quality and attention to detail.",
      allCategory: "All",
    },
    plants: {
      eyebrow: "Our Plant Collection",
      headingLine1: "Trees & Plants That",
      headingLine2: "Thrive in Kuwait",
      paragraph:
        "From majestic date palms to fragrant flowering shrubs and water-wise desert succulents, we source, plant and care for species hand-picked to flourish in the Gulf climate.",
      statSpecies: "Plant Species",
      allCategory: "All Plants",
      showAll: "View All {count} Plants",
      showLess: "Show Less",
      enquire: "Enquire",
      enquireAria: "Enquire about {title}",
    },
    gallery: {
      eyebrow: "Gallery",
      heading: "Moments From Our Gardens",
      paragraph: "A closer look at the textures, colour and craft behind every Orchid landscape.",
      playVideoAria: "Play video: {alt}",
      openImageAria: "Open {alt} in gallery viewer",
    },
    cta: {
      headingLine1: "Ready to Transform",
      headingLine2: "Your Outdoor Space?",
      paragraph: "Let's create a landscape you'll love.",
      button: "Get a Free Quote",
      imageAlt: "Landscaped garden pathway",
    },
    contact: {
      eyebrow: "Contact Us",
      heading: "Let's Create Something Beautiful Together",
      paragraph: "Tell us about your space and we'll get back to you with next steps.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      hoursLabel: "Working Hours",
      formNameLabel: "Name",
      formPhoneLabel: "Phone",
      formEmailLabel: "Email",
      formServiceLabel: "Service Required",
      formMessageLabel: "Message",
      formMessagePlaceholder: "Tell us about your project...",
      submit: "Request a Quote",
      thankYouTitle: "Thank you",
      thankYouParagraph: "Your request has been noted. Our team will reach out to you shortly.",
      sendAnother: "Send another request",
    },
    footer: {
      description:
        "Creating beautiful, functional and sustainable outdoor spaces through professional landscaping and maintenance.",
      quickLinks: "Quick Links",
      ourActivities: "Our Activities",
      newsletter: "Newsletter",
      newsletterParagraph: "Subscribe for tips, updates and offers.",
      emailPlaceholder: "Your email address",
      subscribeAria: "Subscribe",
      subscribedMessage: "You're subscribed — thank you!",
      bandHeadingLine1: "Let's Grow Something",
      bandHeadingLine2: "Beautiful Together",
      followUs: "Follow Us",
      contactTitle: "Get in Touch",
      plantsLink: "Our Plants",
      backToTop: "Back to top",
      copyright: "© {year} Orchid Company for Landscaping and Maintenance of Garden LLC. All Rights Reserved.",
    },
    lightbox: {
      closeAria: "Close gallery viewer",
      prevAria: "Previous image",
      nextAria: "Next image",
    },
    videoModal: {
      closeAria: "Close video",
    },
    logo: {
      kuwaitName: "ORCHID",
      kuwaitNameAccent: "COMPANY",
      internationalName: "ORCHID",
      internationalNameAccent: "INTERNATIONAL",
      tagline: "Landscaping & Garden Maintenance",
      omanTagline: "Trading & Contracting",
      groupTagline: "International Group",
      homeLogoAlt: "Orchid logo mark",
    },
    landing: {
      title: "Orchid International",
      subtitle: "A group of companies in landscaping, trading and contracting",
      eyebrow: "Group of Companies",
      chooseLabel: "Choose a company to explore",
      footerNote: "Kuwait · Oman",
      kuwaitCard: {
        name: "Orchid Company for Landscaping and Garden Maintenance",
        tag: "Landscaping & Garden Maintenance",
        country: "Kuwait",
        location: "11th Floor, Awtad Tower, Egaila, Kuwait",
        cta: "Visit company",
      },
      omanCard: {
        name: "Orchid International Trading and Contracting Company LLC",
        tag: "Trading & Contracting",
        country: "Oman",
        location: "P.O. Box 211, PC 211, Salalah, Dhofar Governorate, Oman",
        cta: "Visit company",
      },
    },
    oman: {
      navbar: {
        homeAria: "Orchid International home",
        links: {
          home: "Home",
          about: "About",
          vision: "Vision",
          services: "Services",
          projects: "Projects",
          gallery: "Gallery",
          contact: "Contact",
        },
        groupAria: "Back to Orchid International group",
        cta: "Get in touch",
        toggleMenu: "Toggle menu",
      },
      hero: {
        slides: [
          {
            kicker: "Real estate development",
            headingLine1: "Real estate,",
            headingLine2: "built to",
            headingLine3: "hold its value.",
            paragraph:
              "Master-planned residential and commercial developments across the Dhofar Governorate, designed with a long-term view rather than a quick handover.",
          },
          {
            kicker: "Construction of buildings",
            headingLine1: "Construction.",
            headingLine2: "Development.",
            headingLine3: "Enduring spaces.",
            paragraph:
              "Orchid International Trading and Contracting Company LLC delivers general construction of residential and non-residential buildings, built on quality, professionalism and trust.",
          },
        ],
        cta: "Explore our work",
      },
      about: {
        kicker: "About the company",
        heading: "Building the future of Oman",
        paragraph1:
          "Orchid International Trading and Contracting Company LLC is a professional trading and contracting company operating from Salalah, Dhofar Governorate — delivering construction and real estate development with a long-term view.",
        paragraph2:
          "Every project we take on is measured against the same standard: quality that holds up, relationships built on trust, and work that serves the communities we build in for decades to come.",
        badge: "Years of excellence",
        stats: [
          { value: 10, suffix: "+", label: "Years of experience" },
          { value: 2, suffix: "", label: "Core divisions" },
          { value: 100, suffix: "%", label: "Dhofar-based team" },
        ],
      },
      vision: {
        kicker: "What drives us",
        heading: "Vision & mission",
        vision: {
          title: "Our vision",
          text: "To be the Dhofar Governorate's most trusted name in construction and real estate — recognized for quality that lasts and communities that thrive.",
        },
        mission: {
          title: "Our mission",
          text: "To deliver every building and development on the same three commitments: sound construction, honest partnership, and long-term value for the people who live and work in what we build.",
        },
      },
      services: {
        kicker: "What we do",
        heading: "Our services",
        items: [
          {
            title: "Construction of buildings",
            description: "General construction of residential and non-residential buildings, from groundwork to handover.",
          },
          {
            title: "Real estate development",
            description: "Master-planned residential and commercial developments designed for lasting value.",
          },
        ],
      },
      projects: {
        kicker: "Our work",
        heading: "Our projects",
        categories: { residential: "Residential", commercial: "Commercial", development: "Development" },
        viewProject: "View project",
      },
      gallery: {
        kicker: "A closer look",
        heading: "Gallery",
        paragraph: "A closer look at the sites, homes and developments behind our work.",
        playAria: "Play video: {title}",
        openAria: "Open {title}",
        closeAria: "Close",
      },
      contact: {
        kicker: "Get in touch",
        heading: "Let's build something lasting.",
        paragraph: "Tell us about your project and our team in Salalah will get back to you.",
        addressLabel: "Address",
        phoneLabel: "Phone",
        emailLabel: "Email",
        formNameLabel: "Name",
        formEmailLabel: "Email",
        formMessageLabel: "Message",
        formMessagePlaceholder: "Tell us about your project...",
        submit: "Send message",
        thankYouTitle: "Thank you",
        thankYouParagraph: "Your message has been received. Our team will be in touch shortly.",
        sendAnother: "Send another message",
      },
      footer: {
        description: "A trading and contracting company building lasting construction and real estate developments across Dhofar Governorate.",
        quickLinks: "Navigation",
        contactTitle: "Contact",
        copyright: "© {year} Orchid International Trading and Contracting Company LLC. All rights reserved.",
      },
    },
  },

  ar: {
    navbar: {
      homeAria: "الصفحة الرئيسية لشركة أوركيد",
      getQuote: "اطلب عرض سعر",
      toggleMenu: "فتح القائمة",
    },
    languageSwitcher: {
      en: "EN",
      ar: "AR",
    },
    hero: {
      eyebrow: "مساحات خضراء. أماكن أفضل.",
      headingLine1: "نُبدع في تصميم",
      headingLine2: "المساحات الخضراء،",
      headingLine3: "ونرعى الطبيعة",
      paragraph:
        "تقدم شركة أوركيد لتنسيق وصيانة الحدائق ذ.م.م حلولاً احترافية في تنسيق الحدائق وصيانتها وإدارة المرافق، تُحوّل المساحات الخارجية إلى بيئات جميلة وصحية وعملية.",
      cta: "تواصل معنا",
      microFeatures: ["حلول صديقة للبيئة", "موثوقية واحترافية", "فريق عمل خبير"],
      imageAlt: "جدار أخضر نابض بالحياة من نباتات استوائية وزهور الأوركيد",
    },
    about: {
      eyebrow: "من نحن",
      headingPrefix: "نبذة عن",
      headingHighlight: "أوركيد",
      paragraph1:
        "تقدم شركة أوركيد لتنسيق وصيانة الحدائق ذ.م.م حلولاً احترافية في تنسيق الحدائق وصيانتها وإدارة المرافق، تُحوّل المساحات الخارجية إلى بيئات جميلة وصحية وعملية.",
      paragraph2:
        "انطلاقاً من نهجنا الصديق للبيئة، يحافظ فريقنا على نظافة المرافق العامة والخاصة وسلامتها وجاذبيتها، ونبني علاقات طويلة الأمد مع عملائنا في مختلف أنحاء الكويت من خلال خدمة موثوقة واحترافية.",
      cta: "اعرف المزيد",
    },
    visionValues: {
      whoWeAreEyebrow: "من نحن",
      whoWeAreHeadingLine1: "شركة أوركيد لتصميم المساحات الخضراء",
      whoWeAreHeadingLine2: "وصيانة الحدائق",
      whoWeAreParagraph:
        "شركة متخصصة في تصميم وتنسيق الحدائق الداخلية والخارجية وصيانتها، بتصاميم مميزة وأفكار عصرية مبتكرة تلائم طبيعة الكويت وتطلعات العملاء الباحثين عن التميز والرقي.",
      badge: "استعد  ثبّت  انطلق",
      visionEyebrow: "رؤيتنا",
      visionParagraph:
        "ننظر إلى كل عميل باعتباره جزءاً من نجاح الشركة، ونسعى دائماً لمواكبة كل ما هو جديد في عالم هندسة المساحات الخضراء. نطمح للمساهمة في تعمير وطننا الكويت، وإحاطته بجمال الخضرة وروعة المناظر في كل مكان، سواء في المنازل أو المزارع أو الشاليهات أو المرافق أو الجهات الحكومية وإداراتها التابعة.",
      visionQuote1: "طموحنا لا يتوقف، وأفكارنا لا تنضب.",
      visionQuote2: "رضا العميل هدفنا... والسمعة الطيبة مكسبنا.",
      valuesEyebrow: "قيمنا",
      valuesHeadingPrefix: "قيم راسخة",
      valuesHeadingHighlight: "لا تتزعزع",
    },
    whyChooseUs: {
      eyebrow: "لماذا تختارنا",
      headingLine1: "متجذّرون في العناية،",
      headingLine2Prefix: "ملتزمون",
      headingLine2Highlight: "بالتميز",
      paragraph:
        "تقدم شركة أوركيد لتنسيق وصيانة الحدائق ذ.م.م حلولاً احترافية في تنسيق الحدائق وصيانتها وإدارة المرافق، تُحوّل المساحات الخارجية إلى بيئات جميلة وصحية وعملية، ونبني علاقات دائمة قائمة على الموثوقية والاستدامة والخدمة المتميزة في جميع أنحاء الكويت.",
      cta: "اعرف المزيد",
      badgeLine1: "جودة",
      badgeLine2: "مضمونة",
      imageAlt1: "أوراق خضراء ندية على غصن في الحديقة",
      imageAlt2: "لقطة مقرّبة لأوراق الخريف المتساقطة على ممر الحديقة",
      imageAlt3: "أوراق خضراء طازجة، رمز للنمو الطبيعي",
    },
    activities: {
      eyebrow: "أنشطتنا",
      headingLine1: "مجموعة متكاملة من",
      headingLine2: "الخدمات البيئية",
      paragraph:
        "نقدم مجموعة واسعة من الأنشطة الصديقة للبيئة وخدمات إدارة المرافق التي تسهم في مجتمعات أنظف وأكثر خضرة وصحة.",
      explore: "اكتشف",
      exploreAria: "اكتشف {title}",
    },
    projects: {
      eyebrow: "مشاريعنا",
      heading: "استكشف أحدث أعمالنا",
      paragraph:
        "اطّلع على بعض مشاريع تنسيق الحدائق التي أنجزناها والتي تعكس إبداعنا وجودة عملنا واهتمامنا بأدق التفاصيل.",
      allCategory: "الكل",
    },
    plants: {
      eyebrow: "مجموعتنا النباتية",
      headingLine1: "أشجار ونباتات",
      headingLine2: "تزدهر في الكويت",
      paragraph:
        "من نخيل التمر المهيب إلى الشجيرات المزهرة العطرة والنباتات الصحراوية الموفّرة للمياه، نختار ونزرع ونعتني بأنواع منتقاة بعناية لتزدهر في مناخ الخليج.",
      statSpecies: "نوعاً نباتياً",
      allCategory: "جميع النباتات",
      showAll: "عرض جميع النباتات ({count})",
      showLess: "عرض أقل",
      enquire: "استفسر",
      enquireAria: "استفسر عن {title}",
    },
    gallery: {
      eyebrow: "معرض الصور",
      heading: "لحظات من حدائقنا",
      paragraph: "نظرة أقرب على الملمس والألوان والحرفية وراء كل مشهد طبيعي من تصميم أوركيد.",
      playVideoAria: "تشغيل الفيديو: {alt}",
      openImageAria: "فتح {alt} في عارض الصور",
    },
    cta: {
      headingLine1: "هل أنت مستعد لتحويل",
      headingLine2: "مساحتك الخارجية؟",
      paragraph: "لنصمم معاً حديقة ستحبها.",
      button: "احصل على عرض سعر مجاني",
      imageAlt: "ممر حديقة منسّق",
    },
    contact: {
      eyebrow: "اتصل بنا",
      heading: "لنصنع معاً شيئاً جميلاً",
      paragraph: "أخبرنا عن مساحتك وسنتواصل معك بالخطوات التالية.",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      addressLabel: "العنوان",
      hoursLabel: "ساعات العمل",
      formNameLabel: "الاسم",
      formPhoneLabel: "الهاتف",
      formEmailLabel: "البريد الإلكتروني",
      formServiceLabel: "الخدمة المطلوبة",
      formMessageLabel: "الرسالة",
      formMessagePlaceholder: "أخبرنا عن مشروعك...",
      submit: "اطلب عرض سعر",
      thankYouTitle: "شكراً لك",
      thankYouParagraph: "تم استلام طلبك بنجاح. سيتواصل معك فريقنا في أقرب وقت ممكن.",
      sendAnother: "إرسال طلب آخر",
    },
    footer: {
      description: "نصمم مساحات خارجية جميلة وعملية ومستدامة من خلال خدمات احترافية في تنسيق الحدائق وصيانتها.",
      quickLinks: "روابط سريعة",
      ourActivities: "أنشطتنا",
      newsletter: "النشرة الإخبارية",
      newsletterParagraph: "اشترك للحصول على النصائح والتحديثات والعروض.",
      emailPlaceholder: "بريدك الإلكتروني",
      subscribeAria: "اشترك",
      subscribedMessage: "تم اشتراكك بنجاح — شكراً لك!",
      bandHeadingLine1: "لنزرع معاً",
      bandHeadingLine2: "مساحات أجمل",
      followUs: "تابعنا",
      contactTitle: "تواصل معنا",
      plantsLink: "نباتاتنا",
      backToTop: "العودة للأعلى",
      copyright: "© {year} شركة أوركيد لتنسيق وصيانة الحدائق ذ.م.م. جميع الحقوق محفوظة.",
    },
    lightbox: {
      closeAria: "إغلاق عارض الصور",
      prevAria: "الصورة السابقة",
      nextAria: "الصورة التالية",
    },
    videoModal: {
      closeAria: "إغلاق الفيديو",
    },
    logo: {
      kuwaitName: "أوركيد",
      kuwaitNameAccent: "للتنسيق",
      internationalName: "أوركيد",
      internationalNameAccent: "إنترناشونال",
      tagline: "تنسيق وصيانة الحدائق",
      omanTagline: "التجارة والمقاولات",
      groupTagline: "المجموعة الدولية",
      homeLogoAlt: "شعار أوركيد",
    },
    landing: {
      title: "أوركيد إنترناشونال",
      subtitle: "مجموعة شركات في تنسيق الحدائق والتجارة والمقاولات",
      eyebrow: "مجموعة شركات",
      chooseLabel: "اختر شركة لاستكشافها",
      footerNote: "الكويت · عُمان",
      kuwaitCard: {
        name: "شركة أوركيد لتنسيق وصيانة الحدائق",
        tag: "تنسيق وصيانة الحدائق",
        country: "الكويت",
        location: "الطابق الحادي عشر، برج أوتاد، العقيلة، الكويت",
        cta: "زيارة الشركة",
      },
      omanCard: {
        name: "شركة أوركيد إنترناشونال للتجارة والمقاولات ذ.م.م",
        tag: "التجارة والمقاولات",
        country: "عُمان",
        location: "ص.ب 211، ر.ب 211، صلالة، محافظة ظفار، عُمان",
        cta: "زيارة الشركة",
      },
    },
    oman: {
      navbar: {
        homeAria: "الصفحة الرئيسية لأوركيد إنترناشونال",
        links: {
          home: "الرئيسية",
          about: "من نحن",
          vision: "رؤيتنا",
          services: "خدماتنا",
          projects: "مشاريعنا",
          gallery: "معرض الصور",
          contact: "اتصل بنا",
        },
        groupAria: "العودة إلى مجموعة أوركيد إنترناشونال",
        cta: "تواصل معنا",
        toggleMenu: "فتح القائمة",
      },
      hero: {
        slides: [
          {
            kicker: "التطوير العقاري",
            headingLine1: "عقارات",
            headingLine2: "تحافظ على",
            headingLine3: "قيمتها.",
            paragraph:
              "تطويرات سكنية وتجارية مخطط لها بعناية في محافظة ظفار، برؤية طويلة الأمد لا تقتصر على التسليم السريع.",
          },
          {
            kicker: "إنشاء المباني",
            headingLine1: "إنشاءات.",
            headingLine2: "تطوير.",
            headingLine3: "مساحات تدوم.",
            paragraph:
              "تقدّم شركة أوركيد إنترناشونال للتجارة والمقاولات ذ.م.م إنشاءات عامة للمباني السكنية وغير السكنية، قائمة على الجودة والاحترافية والثقة.",
          },
        ],
        cta: "استكشف أعمالنا",
      },
      about: {
        kicker: "عن الشركة",
        heading: "نبني مستقبل عُمان",
        paragraph1:
          "شركة أوركيد إنترناشونال للتجارة والمقاولات ذ.م.م شركة تجارة ومقاولات محترفة تعمل من صلالة، محافظة ظفار، وتقدّم خدمات الإنشاء والتطوير العقاري برؤية طويلة الأمد.",
        paragraph2:
          "كل مشروع نتولاه يُقاس بنفس المعيار: جودة تدوم، وعلاقات قائمة على الثقة، وعمل يخدم المجتمعات التي نبني فيها لعقود قادمة.",
        badge: "سنوات من التميز",
        stats: [
          { value: 10, suffix: "+", label: "سنوات من الخبرة" },
          { value: 2, suffix: "", label: "قطاعان رئيسيان" },
          { value: 100, suffix: "%", label: "فريق من ظفار" },
        ],
      },
      vision: {
        kicker: "ما يحرّكنا",
        heading: "رؤيتنا ورسالتنا",
        vision: {
          title: "رؤيتنا",
          text: "أن نكون الاسم الأكثر ثقة في مجال الإنشاءات والعقارات في محافظة ظفار — معروفين بجودة تدوم ومجتمعات مزدهرة.",
        },
        mission: {
          title: "رسالتنا",
          text: "أن ننفّذ كل مبنى وتطوير وفق ثلاثة التزامات: إنشاء متين، وشراكة صادقة، وقيمة طويلة الأمد لمن يعيشون ويعملون فيما نبنيه.",
        },
      },
      services: {
        kicker: "ماذا نقدّم",
        heading: "خدماتنا",
        items: [
          {
            title: "إنشاء المباني",
            description: "إنشاءات عامة للمباني السكنية وغير السكنية، من الأساسات وحتى التسليم.",
          },
          {
            title: "التطوير العقاري",
            description: "تطويرات سكنية وتجارية مخطط لها بعناية، مصمّمة لتحقيق قيمة دائمة.",
          },
        ],
      },
      gallery: {
        kicker: "نظرة أقرب",
        heading: "معرض الصور",
        paragraph: "نظرة أقرب على المواقع والمنازل والتطويرات وراء أعمالنا.",
        playAria: "تشغيل الفيديو: {title}",
        openAria: "فتح {title}",
        closeAria: "إغلاق",
      },
      projects: {
        kicker: "أعمالنا",
        heading: "مشاريعنا",
        categories: { residential: "سكني", commercial: "تجاري", development: "تطوير" },
        viewProject: "عرض المشروع",
      },
      contact: {
        kicker: "تواصل معنا",
        heading: "لنبنِ معاً شيئاً يدوم.",
        paragraph: "أخبرنا عن مشروعك وسيتواصل معك فريقنا في صلالة.",
        addressLabel: "العنوان",
        phoneLabel: "الهاتف",
        emailLabel: "البريد الإلكتروني",
        formNameLabel: "الاسم",
        formEmailLabel: "البريد الإلكتروني",
        formMessageLabel: "الرسالة",
        formMessagePlaceholder: "أخبرنا عن مشروعك...",
        submit: "إرسال الرسالة",
        thankYouTitle: "شكراً لك",
        thankYouParagraph: "تم استلام رسالتك بنجاح. سيتواصل معك فريقنا في أقرب وقت ممكن.",
        sendAnother: "إرسال رسالة أخرى",
      },
      footer: {
        description: "شركة تجارة ومقاولات تبني إنشاءات وتطويرات عقارية دائمة في جميع أنحاء محافظة ظفار.",
        quickLinks: "روابط سريعة",
        contactTitle: "اتصل بنا",
        copyright: "© {year} شركة أوركيد إنترناشونال للتجارة والمقاولات ذ.م.م. جميع الحقوق محفوظة.",
      },
    },
  },
};

export function translate(lang, key, vars) {
  const dict = translations[lang] || translations.en;
  const parts = key.split(".");
  let value = dict;
  for (const p of parts) {
    value = value?.[p];
  }
  if (value === undefined) {
    // Fall back to English so a missing key never renders blank.
    value = parts.reduce((acc, p) => acc?.[p], translations.en);
  }
  if (typeof value === "string" && vars) {
    return Object.keys(vars).reduce((str, k) => str.replaceAll(`{${k}}`, vars[k]), value);
  }
  return value;
}
