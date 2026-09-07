// ============================================================
// ORCHID INTERNATIONAL (OMAN) — content & image manifest
// ============================================================
// To replace a photo or video: drop a new file into src/assets/oman/ (or
// src/assets/oman/video/) and change only the import path below — nothing
// else in the app needs to change. Add a new hero slide, gallery item or
// project by adding another entry to the arrays below; every other
// section reads from these single sources of truth.
// ============================================================
import { translate } from "../i18n/translations";

import heroConstruction from "../assets/oman/hero-construction.jpg";
import heroEstate from "../assets/oman/hero-estate.jpg";
import houseModernPool from "../assets/oman/house-modern-pool.jpg";
import houseBrickSuburban from "../assets/oman/house-brick-suburban.jpg";
import houseBrickEstate from "../assets/oman/house-brick-estate.jpg";
import aboutBuilding from "../assets/oman/about-building.jpg";

import visionLoopVideo from "../assets/oman/video/vision-loop.mp4";
import visionLoopPoster from "../assets/oman/video/vision-loop-poster.jpg";
import galleryVideo from "../assets/oman/video/gallery-aerial.mp4";
import galleryVideoPoster from "../assets/oman/video/gallery-aerial-poster.jpg";

// ---- Hero slider ----
// Order here drives slide order; per-slide kicker/heading/paragraph copy
// lives in translations.js under oman.hero.slides (matched by index), so
// the caption changes with the slide instead of staying static. Trimmed
// to the two supplied house photos that best represent the two core
// services (real estate development, then construction).
const heroSlideImages = [
  { src: houseModernPool, alt: "Contemporary villa with a landscaped lawn and reflecting pool" },
  { src: houseBrickSuburban, alt: "Brick residential home in a planned suburban development" },
];

export function getOmanHeroSlides(lang = "en") {
  const captions = translate(lang, "oman.hero.slides") || [];
  return heroSlideImages.map((img, i) => ({ ...img, ...(captions[i] || {}) }));
}

export const omanImages = {
  about: aboutBuilding,
  services: {
    construction: heroConstruction,
    realEstate: houseModernPool,
  },
};

export const omanVideo = {
  visionLoop: { src: visionLoopVideo, poster: visionLoopPoster },
};

// ---- Projects ----
const projectsText = {
  en: [
    { name: "Dhofar Residence", location: "Salalah, Dhofar", category: "residential", image: houseBrickSuburban },
    { name: "Salalah Commercial Block", location: "Salalah, Dhofar", category: "commercial", image: heroConstruction },
    { name: "Governorate Heritage Estate", location: "Dhofar Governorate", category: "development", image: houseBrickEstate },
  ],
  ar: [
    { name: "مسكن ظفار", location: "صلالة، ظفار", category: "residential", image: houseBrickSuburban },
    { name: "المجمع التجاري بصلالة", location: "صلالة، ظفار", category: "commercial", image: heroConstruction },
    { name: "عقار تراثي بالمحافظة", location: "محافظة ظفار", category: "development", image: houseBrickEstate },
  ],
};

export function getOmanProjects(lang = "en") {
  return projectsText[lang] || projectsText.en;
}

// ---- Gallery ----
// A mix of photography and the two supplied drone clips. `type: "video"`
// items open in the lightbox as a playable video; everything else opens
// as a still image.
const galleryText = {
  en: [
    { type: "image", src: heroEstate, title: "Aerial view of a residential villa" },
    { type: "video", src: galleryVideo, poster: galleryVideoPoster, title: "Aerial tour of a residential district" },
    { type: "image", src: houseModernPool, title: "Contemporary villa with landscaped lawn" },
    { type: "image", src: aboutBuilding, title: "Grand stone-built residence" },
    { type: "image", src: houseBrickSuburban, title: "Planned suburban residential development" },
    { type: "image", src: heroConstruction, title: "Structural steel frame under construction" },
    { type: "image", src: houseBrickEstate, title: "Brick estate home with landscaped gardens" },
  ],
  ar: [
    { type: "image", src: heroEstate, title: "منظر جوي لفيلا سكنية" },
    { type: "video", src: galleryVideo, poster: galleryVideoPoster, title: "جولة جوية في حي سكني" },
    { type: "image", src: houseModernPool, title: "فيلا عصرية بحديقة منسّقة" },
    { type: "image", src: aboutBuilding, title: "مسكن حجري فخم" },
    { type: "image", src: houseBrickSuburban, title: "تطوير سكني مخطط له في الضواحي" },
    { type: "image", src: heroConstruction, title: "هيكل فولاذي إنشائي قيد التنفيذ" },
    { type: "image", src: houseBrickEstate, title: "عقار من الطوب بحدائق منسّقة" },
  ],
};

export function getOmanGallery(lang = "en") {
  return galleryText[lang] || galleryText.en;
}

export const omanCompany = {
  name: "Orchid International Trading and Contracting Company LLC",
  addressLines: ["P.O. Box 211, PC 211", "Salalah, Dhofar Governorate, Oman"],
  phones: ["+968 97300477", "+968 72201676"],
  email: "info@orchidkuwait.com",
};

export const kuwaitCompany = {
  name: "Orchid Company for Landscaping and Garden Maintenance",
  addressLines: ["11th Floor, Awtad Tower", "Egaila, Kuwait"],
};
