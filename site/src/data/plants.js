// Plant & tree collection shown in the "Our Plant Collection" section.
// Same pattern as content.js: media/ids/categories are shared, only the
// text fields swap between languages.

import datePalm from "../assets/plants/date-palm.jpg";
import neemTree from "../assets/plants/neem-tree.jpg";
import acacia from "../assets/plants/acacia.jpg";
import prosopis from "../assets/plants/prosopis-mesquite.jpg";
import frangipani from "../assets/plants/frangipani.jpg";
import bottleBrush from "../assets/plants/bottle-brush.jpg";
import moringa from "../assets/plants/moringa.jpg";
import oleander from "../assets/plants/oleander.jpg";
import lantana from "../assets/plants/lantana.jpg";
import ixora from "../assets/plants/ixora.jpg";
import duranta from "../assets/plants/duranta.jpg";
import plumbago from "../assets/plants/plumbago.jpg";
import arabianJasmine from "../assets/plants/arabian-jasmine.jpg";
import aloeVera from "../assets/plants/aloe-vera.jpg";
import agave from "../assets/plants/agave.jpg";
import yucca from "../assets/plants/yucca.jpg";
import cactus from "../assets/plants/cactus.jpg";
import sansevieria from "../assets/plants/sansevieria.jpg";
import desertRose from "../assets/plants/desert-rose.jpg";
import portulaca from "../assets/plants/portulaca.jpg";
import bermudaGrass from "../assets/plants/bermuda-grass.jpg";
import zoysiaGrass from "../assets/plants/zoysia-grass.jpg";
import paspalum from "../assets/plants/paspalum.jpg";
import liriope from "../assets/plants/liriope.jpg";
import wedelia from "../assets/plants/wedelia.jpg";
import gazania from "../assets/plants/gazania.jpg";
import alternanthera from "../assets/plants/alternanthera.jpg";

// category keys: "trees" | "shrubs" | "desert" | "lawns"
const plantsMeta = [
  { id: "date-palm", image: datePalm, botanical: "Phoenix dactylifera", category: "trees" },
  { id: "neem", image: neemTree, botanical: "Azadirachta indica", category: "trees" },
  { id: "acacia", image: acacia, botanical: "Acacia spp.", category: "trees" },
  { id: "prosopis", image: prosopis, botanical: "Prosopis juliflora", category: "trees" },
  { id: "frangipani", image: frangipani, botanical: "Plumeria spp.", category: "trees" },
  { id: "bottle-brush", image: bottleBrush, botanical: "Callistemon citrinus", category: "trees" },
  { id: "moringa", image: moringa, botanical: "Moringa oleifera", category: "trees" },
  { id: "oleander", image: oleander, botanical: "Nerium oleander", category: "shrubs" },
  { id: "lantana", image: lantana, botanical: "Lantana camara", category: "shrubs" },
  { id: "ixora", image: ixora, botanical: "Ixora coccinea", category: "shrubs" },
  { id: "duranta", image: duranta, botanical: "Duranta erecta", category: "shrubs" },
  { id: "plumbago", image: plumbago, botanical: "Plumbago auriculata", category: "shrubs" },
  { id: "arabian-jasmine", image: arabianJasmine, botanical: "Jasminum sambac", category: "shrubs" },
  { id: "aloe-vera", image: aloeVera, botanical: "Aloe barbadensis", category: "desert" },
  { id: "agave", image: agave, botanical: "Agave americana", category: "desert" },
  { id: "yucca", image: yucca, botanical: "Yucca elephantipes", category: "desert" },
  { id: "cactus", image: cactus, botanical: "Cactaceae", category: "desert" },
  { id: "sansevieria", image: sansevieria, botanical: "Dracaena trifasciata", category: "desert" },
  { id: "desert-rose", image: desertRose, botanical: "Adenium obesum", category: "desert" },
  { id: "bermuda-grass", image: bermudaGrass, botanical: "Cynodon dactylon", category: "lawns" },
  { id: "zoysia-grass", image: zoysiaGrass, botanical: "Zoysia japonica", category: "lawns" },
  { id: "paspalum", image: paspalum, botanical: "Paspalum vaginatum", category: "lawns" },
  { id: "portulaca", image: portulaca, botanical: "Portulaca grandiflora", category: "lawns" },
  { id: "gazania", image: gazania, botanical: "Gazania rigens", category: "lawns" },
  { id: "wedelia", image: wedelia, botanical: "Sphagneticola trilobata", category: "lawns" },
  { id: "alternanthera", image: alternanthera, botanical: "Alternanthera ficoidea", category: "lawns" },
  { id: "liriope", image: liriope, botanical: "Liriope muscari", category: "lawns" },
];

const plantsText = {
  en: [
    { name: "Date Palm", description: "The iconic tree of the Gulf — majestic, heat-loving and fruit-bearing, perfect for driveways, courtyards and grand entrances." },
    { name: "Neem Tree", description: "A fast-growing evergreen shade tree that handles extreme heat and poor soil while keeping streets and gardens cool." },
    { name: "Acacia", description: "Feathery foliage and fragrant blossoms on a hardy, drought-tolerant frame — ideal for natural screening and shade." },
    { name: "Prosopis / Mesquite", description: "A tough desert native with a wide canopy, excellent for windbreaks, parks and low-water landscapes." },
    { name: "Frangipani", description: "Elegant, perfumed blooms in white and yellow that add a tropical, resort-style touch to any garden." },
    { name: "Bottle Brush", description: "Striking crimson bottle-shaped flowers that attract birds and bring a bold splash of colour year-round." },
    { name: "Moringa", description: "A light, airy and fast-growing tree with delicate leaves, valued for its resilience and natural benefits." },
    { name: "Oleander", description: "A dense, evergreen flowering shrub with pink blooms — a Kuwaiti favourite for hedges and road medians." },
    { name: "Lantana", description: "Clusters of vibrant multi-coloured flowers that bloom nonstop in full sun and attract butterflies." },
    { name: "Ixora", description: "Rich red flower heads on glossy foliage, perfect for colourful borders, hedges and feature beds." },
    { name: "Duranta", description: "Cascading violet blooms and lush green leaves, widely used for clipped hedges and ornamental shapes." },
    { name: "Plumbago", description: "Soft sky-blue flowers that create a cool, calming effect along walls, fences and garden edges." },
    { name: "Arabian Jasmine", description: "Beloved for its pure white, intensely fragrant flowers — a timeless choice for entrances and patios." },
    { name: "Aloe Vera", description: "A low-maintenance succulent with thick, healing leaves that thrives in pots, rockeries and dry gardens." },
    { name: "Agave", description: "Sculptural blue-green rosettes that make a bold architectural statement in modern desert landscapes." },
    { name: "Yucca", description: "Spiky, upright foliage on a sturdy trunk that brings structure and height to xeriscape designs." },
    { name: "Cactus", description: "Striking forms and textures that need minimal water — ideal for contemporary, eco-friendly gardens." },
    { name: "Sansevieria", description: "The hardy snake plant — upright, striped leaves that tolerate heat, shade and neglect, indoors or out." },
    { name: "Desert Rose", description: "A sculptural succulent with a swollen trunk and vivid pink trumpet flowers that love full Kuwaiti sun." },
    { name: "Bermuda Grass", description: "Kuwait's go-to lawn grass — fast-spreading, heat-loving and tough enough for parks and sports fields." },
    { name: "Zoysia Grass", description: "A dense, carpet-like turf with a soft feel underfoot, prized for premium villa lawns and low upkeep." },
    { name: "Paspalum", description: "A lush, salt-tolerant turf that stays green with brackish irrigation — ideal for coastal and resort lawns." },
    { name: "Portulaca", description: "A low-growing moss rose with bright, ruffled blooms that thrive in sun-baked beds and planters." },
    { name: "Gazania", description: "Cheerful daisy-like flowers in gold and orange that open in the sun and cope with drought and heat." },
    { name: "Wedelia", description: "A fast-spreading groundcover with glossy leaves and sunny yellow flowers, great for slopes and borders." },
    { name: "Alternanthera", description: "Colourful red and lime-green foliage used for crisp edging, patterns and vibrant low hedges." },
    { name: "Liriope", description: "Grass-like clumps topped with purple flower spikes — a tidy, shade-tolerant choice for borders." },
  ],
  ar: [
    { name: "نخيل التمر", description: "شجرة الخليج الأيقونية — مهيبة ومحبة للحرارة ومثمرة، مثالية للممرات والساحات والمداخل الفخمة." },
    { name: "شجرة النيم", description: "شجرة ظل دائمة الخضرة سريعة النمو تتحمل الحرارة الشديدة والتربة الفقيرة وتمنح الشوارع والحدائق برودة." },
    { name: "الأكاسيا", description: "أوراق ريشية وأزهار عطرية على هيكل قوي يتحمل الجفاف — مثالية للتظليل والأسوار الطبيعية." },
    { name: "البروسوبس / المسكيت", description: "شجرة صحراوية قوية ذات مظلة واسعة، ممتازة لمصدات الرياح والحدائق العامة والمساحات قليلة الري." },
    { name: "الفرانجيباني", description: "أزهار أنيقة عطرة باللونين الأبيض والأصفر تضفي لمسة استوائية فاخرة على أي حديقة." },
    { name: "فرشاة الزجاجة", description: "أزهار قرمزية لافتة على شكل فرشاة تجذب الطيور وتمنح الحديقة لوناً جريئاً طوال العام." },
    { name: "المورينغا", description: "شجرة خفيفة سريعة النمو ذات أوراق رقيقة، تتميز بقدرتها العالية على التحمل وفوائدها الطبيعية." },
    { name: "الدفلة", description: "شجيرة مزهرة كثيفة دائمة الخضرة بأزهار وردية — خيار مفضل في الكويت للأسوار النباتية والجزر الوسطية." },
    { name: "اللانتانا", description: "عناقيد من الأزهار متعددة الألوان تزهر باستمرار تحت أشعة الشمس وتجذب الفراشات." },
    { name: "الإكسورا", description: "رؤوس زهرية حمراء غنية على أوراق لامعة، مثالية للحواف الملونة والأسوار والأحواض المميزة." },
    { name: "الدورانتا", description: "أزهار بنفسجية متدلية وأوراق خضراء كثيفة، تُستخدم على نطاق واسع للأسوار المشذبة والأشكال الزخرفية." },
    { name: "البلومباجو", description: "أزهار زرقاء ناعمة بلون السماء تمنح إحساساً بالهدوء والانتعاش على الجدران والأسوار وأطراف الحديقة." },
    { name: "الفل العربي", description: "محبوب بأزهاره البيضاء النقية ذات العطر الفواح — خيار خالد للمداخل والجلسات الخارجية." },
    { name: "الألوفيرا (الصبر)", description: "نبات عصاري قليل العناية بأوراق سميكة مفيدة، ينمو بشكل ممتاز في الأصص والحدائق الصخرية والجافة." },
    { name: "الأغاف", description: "وريدات نحتية بلون أخضر مائل للزرقة تضفي طابعاً معمارياً جريئاً على الحدائق الصحراوية الحديثة." },
    { name: "اليوكا", description: "أوراق شوكية منتصبة على جذع متين تمنح التصاميم الموفّرة للمياه بنية وارتفاعاً." },
    { name: "الصبّار", description: "أشكال وملامس لافتة تحتاج إلى القليل من الماء — مثالية للحدائق العصرية الصديقة للبيئة." },
    { name: "السانسيفيريا (جلد النمر)", description: "نبات قوي بأوراق منتصبة مخططة يتحمل الحرارة والظل وقلة العناية، داخل المنزل وخارجه." },
    { name: "وردة الصحراء", description: "نبات عصاري نحتي بجذع منتفخ وأزهار وردية زاهية على شكل بوق، يعشق شمس الكويت الساطعة." },
    { name: "عشب البرمودا", description: "العشب الأكثر استخداماً في الكويت — سريع الانتشار ومحب للحرارة وقوي بما يكفي للحدائق والملاعب." },
    { name: "عشب الزويسيا", description: "عشب كثيف يشبه السجاد وناعم الملمس، مثالي لمسطحات الفلل الفاخرة وقليل العناية." },
    { name: "عشب الباسبالوم", description: "عشب كثيف يتحمل الملوحة ويبقى أخضر مع مياه الري المالحة — مثالي للمسطحات الساحلية والمنتجعات." },
    { name: "البورتولاكا (الرجلة المزهرة)", description: "نبات زاحف منخفض بأزهار زاهية متموجة يزدهر في الأحواض والأصص المشمسة." },
    { name: "الجازانيا", description: "أزهار مبهجة تشبه الأقحوان بألوان ذهبية وبرتقالية تتفتح في الشمس وتتحمل الجفاف والحرارة." },
    { name: "الويديليا", description: "غطاء أرضي سريع الانتشار بأوراق لامعة وأزهار صفراء مشرقة، رائع للمنحدرات والحواف." },
    { name: "الألترنانثيرا", description: "أوراق ملونة بالأحمر والأخضر الليموني تُستخدم للحواف الدقيقة والأشكال والأسوار المنخفضة النابضة بالحياة." },
    { name: "الليريوبي", description: "كتل تشبه العشب تعلوها سنابل زهرية بنفسجية — خيار أنيق يتحمل الظل لحواف الحديقة." },
  ],
};

const plantCategoriesText = {
  en: { trees: "Trees & Palms", shrubs: "Flowering Shrubs", desert: "Desert & Succulents", lawns: "Lawns & Groundcovers" },
  ar: { trees: "الأشجار والنخيل", shrubs: "الشجيرات المزهرة", desert: "النباتات الصحراوية والعصارية", lawns: "المسطحات الخضراء والأغطية الأرضية" },
};

export function getPlants(lang = "en") {
  const L = lang === "ar" ? "ar" : "en";
  return {
    plants: plantsMeta.map((meta, i) => ({ ...meta, ...plantsText[L][i] })),
    plantCategories: plantCategoriesText[L],
  };
}
