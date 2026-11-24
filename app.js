// ================= 1. HAR 7 SEKUNDDA O'ZGARUVCHI ORQA FON RANGLARI =================
const AMBIENT_PALETTES = [
  ['#7000ff', '#0ea5e9', '#ec4899'],
  ['#10b981', '#3b82f6', '#8b5cf6'],
  ['#f43f5e', '#f59e0b', '#7c3aed'],
  ['#06b6d4', '#6366f1', '#d946ef'],
  ['#8b5cf6', '#14b8a6', '#f97316']
];

let paletteIndex = 0;
function rotateAmbientColors() {
  paletteIndex = (paletteIndex + 1) % AMBIENT_PALETTES.length;
  const [c1, c2, c3] = AMBIENT_PALETTES[paletteIndex];
  const a = document.getElementById('orbA');
  const b = document.getElementById('orbB');
  const c = document.getElementById('orbC');
  if (a) a.style.background = c1;
  if (b) b.style.background = c2;
  if (c) c.style.background = c3;
}
setInterval(rotateAmbientColors, 7000);

// ================= 2. QORONG'I / YORUG' FON REJIMI =================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
let currentTheme = localStorage.getItem('aura_theme') || 'dark';

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('aura_theme', theme);
  updateThemeButtonLabel();
}

function updateThemeButtonLabel() {
  const dict = I18N[currentLang];
  if (currentTheme === 'dark') {
    themeIcon.textContent = '☀️';
    themeText.textContent = dict.themeLight;
  } else {
    themeIcon.textContent = '🌙';
    themeText.textContent = dict.themeDark;
  }
}

themeToggle.addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// ================= 3. 3 TA TIL (UZB / RUS / ENG) LUG'ATI =================
const I18N = {
  uz: {
    topDelivery: '📍 Toshkent va O‘zbekiston bo‘ylab 1 kunda bepul yetkazib berish',
    themeLight: 'Yorug‘ fon',
    themeDark: 'Qorong‘i fon',
    searchPlaceholder: 'Kiyim, oyoq kiyim, uslub yoki brend qidiring...',
    searchBtn: 'Qidirish',
    loginBtn: 'Kirish',
    cartBtn: 'Savat',
    navCatalog: '🛍️ Katalog',
    navVirtual: '✨ Virtual Olam',
    navVisual: '📸 Rasmdan do‘kon topish',
    navBranches: '📍 Filiallar & Yetkazish',
    navCheckout: '💳 Rasmiylashtirish',
    navHistory: '🧾 To‘lov tarixi & Cheklar',
    heroBadge: 'Yangi avlod AI marketpleysi',
    heroTitle: 'Rasmingizni yuklang — AI sizga mos kiyim, oyoq kiyim va rangni tanlaydi',
    heroDesc: 'O‘lcham, tana tuzilishi, tadbir turi va mayda detallargacha hisobga oluvchi virtual kiyinish xonasi va smart katalog.',
    heroBtnVirtual: 'Virtual olamga kirish',
    heroBtnVisual: 'Rasm orqali do‘kon topish',
    promoChip: '0% Muddatli to‘lov',
    promoTitle: 'Smart Fit Texnologiyasi',
    promoDesc: 'Bo‘y, vazn va teri rangiga mos tavsiya aniqligi 98%',
    statProducts: 'Tovarlar',
    statBranches: 'Filiallar',
    statReceipt: 'Rasmiy chek',
    catalogHeading: 'Kengaytirilgan kiyim va oyoq kiyimlar katalogi',
    catAll: 'Barchasi',
    catOffice: 'Ofis & Klassik',
    catCasual: 'Kundalik & Street',
    catEvent: 'Tadbir & Oqshom',
    catSport: 'Sport & Aktiv',
    catFootwear: '👟 Oyoq kiyimlar',
    virtualHeading: 'Virtual Olam — Shaxsiy Stilist va Kiyib Ko‘rish',
    virtualSub: 'O‘z rasmingizni yuklang va qayerga, qanday uslubda kiyinmoqchi ekaningizni yozing.',
    vStep1: '1. O‘zingiz haqingizda ma’lumot',
    uploadTitle: '📷 O‘zingizning rasmingizni yuklang',
    uploadDesc: 'Tizim teri ohangini tahlil qilib mos ranglarni tanlaydi va kiyimni ustingizda ko‘rsatadi',
    choosePhotoBtn: 'Rasm tanlash',
    lblHeight: 'Bo‘yingiz (sm)',
    lblWeight: 'Vazningiz (kg)',
    lblSize: 'O‘lchamingiz',
    lblOccasion: 'Qayerga kiymoqchisiz?',
    lblFit: 'Qanday o‘tirishini xohlaysiz?',
    lblDetails: 'Mayda detallarga talabingiz:',
    lblNotes: 'O‘zingiz haqingizda va xohishingiz haqida yozing',
    analyzeBtn: '✨ AI tahlil qilish va kiyimlarni chiqarish',
    vStep2: '2. Virtual kiyib ko‘rish oynasi',
    scaleLabel: 'Kiyim o‘lchamini ekranda moslash:',
    paletteLabel: 'Mos rang palitrasi:',
    aiConclusionTitle: 'AI Stilist xulosasi:',
    vStep3: '3. Sizga eng mos kelgan kiyimlar',
    visualHeading: 'Kiyimni rasmga oling — qaysi do‘konda borligini toping',
    visualSub: 'Kiyim rasmini yuklang — aynan shu turdagi kiyimlar qaysi do‘kon va filiallarda borligi chiqadi.',
    uploadClothTitle: 'Kiyim rasmini yuklang',
    uploadClothDesc: 'Ko‘chada yoki internetda ko‘rgan kiyimingiz rasmini yuklang',
    uploadClothBtn: 'Rasm yuklash',
    quickTestText: 'Tezkor test uchun tayyor kiyim yoki oyoq kiyim turini tanlang:',
    foundStoresTitle: 'Topilgan do‘konlar va filiallar',
    branchesHeading: 'Filiallarimiz va Yetkazib berish xizmati',
    branchesSub: 'Buyurtmani kuryer orqali eshigingizgacha yoki o‘zingizga yaqin filialdan kiyib ko‘rib olib keting.',
    checkoutHeading: 'Buyurtmani rasmiylashtirish va To‘lov',
    checkoutSub: 'Mijoz ma’lumotlarini to‘ldiring, yetkazib berish va to‘lov usulini tanlang.',
    selectedItemsTitle: 'Tanlangan mahsulotlar',
    itemsCountLbl: 'Mahsulotlar soni:',
    deliveryLbl: 'Yetkazib berish:',
    totalPayLbl: 'Jami to‘lov:',
    customerFormTitle: 'Mijoz va Yetkazib berish ma’lumotlari',
    lblFullName: 'F.I.Sh *',
    lblPhone: 'Telefon raqamingiz *',
    lblRegion: 'Shahar / Viloyat *',
    lblDeliveryType: 'Yetkazib berish usuli *',
    lblPickupBranch: 'Filialni tanlang',
    lblAddress: 'To‘liq manzil',
    lblPayMethod: 'To‘lov turini tanlang *',
    payCardTitle: '💳 Karta orqali',
    payCashTitle: '💵 Naqd pul',
    payCashSub: 'Qabul qilganda to‘lash',
    confirmOrderBtn: 'Buyurtmani tasdiqlash va Chek olish',
    historyHeading: 'To‘lovlar tarixi va Rasmiy elektron cheklar',
    historySub: 'Har bir xaridingiz uchun fiskal chek raqami va holati saqlanadi.',
    authTitle: 'Ro‘yxatdan o‘tish / Kirish',
    saveLoginBtn: 'Saqlash va Kirish',
    receiptModalTitle: 'Elektron Fiskal Chek',
    printBtn: '🖨️ Chekni chop etish / PDF',
    footerTagline: 'AI Virtual Olam & Smart Shopping ekotizimi.',
    tryBtn: '✨ Kiyib ko‘rish',
    addCartBtn: 'Savatga',
    infoBtn: 'ℹ️ Ma’lumot'
  },
  ru: {
    topDelivery: '📍 Бесплатная доставка за 1 день по Ташкенту и всему Узбекистану',
    themeLight: 'Светлый фон',
    themeDark: 'Тёмный фон',
    searchPlaceholder: 'Поиск одежды, обуви, стиля или бренда...',
    searchBtn: 'Найти',
    loginBtn: 'Войти',
    cartBtn: 'Корзина',
    navCatalog: '🛍️ Каталог',
    navVirtual: '✨ Виртуальный мир',
    navVisual: '📸 Поиск по фото',
    navBranches: '📍 Филиалы и Доставка',
    navCheckout: '💳 Оформление',
    navHistory: '🧾 История и Чеки',
    heroBadge: 'AI маркетплейс нового поколения',
    heroTitle: 'Загрузите фото — AI подберёт идеальную одежду, обувь и цвет',
    heroDesc: 'Виртуальная примерочная, учитывающая рост, вес, повод и мелкие детали.',
    heroBtnVirtual: 'Войти в виртуальный мир',
    heroBtnVisual: 'Найти магазин по фото',
    promoChip: 'Рассрочка 0%',
    promoTitle: 'Технология Smart Fit',
    promoDesc: 'Точность подбора по параметрам и тону кожи — 98%',
    statProducts: 'Товаров',
    statBranches: 'Филиалов',
    statReceipt: 'Офиц. чек',
    catalogHeading: 'Расширенный каталог одежды и обуви',
    catAll: 'Все',
    catOffice: 'Офис и Классика',
    catCasual: 'Повседневная',
    catEvent: 'Вечерняя',
    catSport: 'Спорт',
    catFootwear: '👟 Обувь',
    virtualHeading: 'Виртуальный мир — AI Стилист и Примерка',
    virtualSub: 'Загрузите своё фото и опишите, куда и в каком стиле хотите одеться.',
    vStep1: '1. Информация о вас',
    uploadTitle: '📷 Загрузите ваше фото',
    uploadDesc: 'Система определит оттенок кожи, подберёт цвета и примерит одежду на фото',
    choosePhotoBtn: 'Выбрать фото',
    lblHeight: 'Ваш рост (см)',
    lblWeight: 'Ваш вес (кг)',
    lblSize: 'Ваш размер',
    lblOccasion: 'Куда планируете надеть?',
    lblFit: 'Предпочитаемая посадка?',
    lblDetails: 'Требования к деталям:',
    lblNotes: 'Опишите себя и ваши пожелания к образу',
    analyzeBtn: '✨ Запустить AI подбор одежды',
    vStep2: '2. Окно виртуальной примерки',
    scaleLabel: 'Масштаб одежды на экране:',
    paletteLabel: 'Подходящая палитра цветов:',
    aiConclusionTitle: 'Заключение AI Стилиста:',
    vStep3: '3. Наиболее подходящая одежда',
    visualHeading: 'Сфотографируйте вещь — узнайте, в каком магазине она есть',
    visualSub: 'Загрузите фото вещи — покажем наличие и адреса филиалов.',
    uploadClothTitle: 'Загрузите фото одежды',
    uploadClothDesc: 'Сделайте фото или выберите изображение из галереи',
    uploadClothBtn: 'Загрузить фото',
    quickTestText: 'Или выберите готовый тип для быстрого теста:',
    foundStoresTitle: 'Найденные магазины и филиалы',
    branchesHeading: 'Наши филиалы и служба доставки',
    branchesSub: 'Доставка курьером до двери или самовывоз с примеркой из ближайшего пункта.',
    checkoutHeading: 'Оформление заказа и Оплата',
    checkoutSub: 'Заполните данные покупателя, выберите доставку и способ оплаты.',
    selectedItemsTitle: 'Выбранные товары',
    itemsCountLbl: 'Количество товаров:',
    deliveryLbl: 'Доставка:',
    totalPayLbl: 'Итого к оплате:',
    customerFormTitle: 'Данные покупателя и доставки',
    lblFullName: 'Ф.И.О. *',
    lblPhone: 'Номер телефона *',
    lblRegion: 'Город / Область *',
    lblDeliveryType: 'Способ доставки *',
    lblPickupBranch: 'Выберите филиал',
    lblAddress: 'Полный адрес доставки',
    lblPayMethod: 'Выберите способ оплаты *',
    payCardTitle: '💳 Оплата картой',
    payCashTitle: '💵 Наличными',
    payCashSub: 'Оплата при получении',
    confirmOrderBtn: 'Подтвердить заказ и получить чек',
    historyHeading: 'История платежей и Электронные чеки',
    historySub: 'Для каждой покупки сохраняется фискальный чек и статус оплаты.',
    authTitle: 'Регистрация / Вход',
    saveLoginBtn: 'Сохранить и войти',
    receiptModalTitle: 'Электронный фискальный чек',
    printBtn: '🖨️ Распечатать / PDF',
    footerTagline: 'Экосистема AI Виртуальной примерки и шопинга.',
    tryBtn: '✨ Примерить',
    addCartBtn: 'В корзину',
    infoBtn: 'ℹ️ Инфо'
  },
  en: {
    topDelivery: '📍 Free 1-day delivery across Tashkent and Uzbekistan',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
    searchPlaceholder: 'Search clothes, shoes, style, or brand...',
    searchBtn: 'Search',
    loginBtn: 'Sign in',
    cartBtn: 'Cart',
    navCatalog: '🛍️ Catalog',
    navVirtual: '✨ Virtual World',
    navVisual: '📸 Visual Store Search',
    navBranches: '📍 Branches & Delivery',
    navCheckout: '💳 Checkout',
    navHistory: '🧾 Payment History & Receipts',
    heroBadge: 'Next-Gen AI Marketplace',
    heroTitle: 'Upload your photo — AI selects the best clothes, shoes & colors for you',
    heroDesc: 'Virtual dressing room tailored to your height, weight, occasion, and fine details.',
    heroBtnVirtual: 'Enter Virtual World',
    heroBtnVisual: 'Find Store by Photo',
    promoChip: '0% Installments',
    promoTitle: 'Smart Fit Technology',
    promoDesc: '98% accuracy matching your body measurements and skin tone',
    statProducts: 'Products',
    statBranches: 'Branches',
    statReceipt: 'Official receipt',
    catalogHeading: 'Expanded Clothing & Footwear Catalog',
    catAll: 'All',
    catOffice: 'Office & Classic',
    catCasual: 'Casual & Street',
    catEvent: 'Events & Evening',
    catSport: 'Sport & Active',
    catFootwear: '👟 Footwear',
    virtualHeading: 'Virtual World — AI Stylist & Try-On',
    virtualSub: 'Upload your photo and describe where and how you want to dress.',
    vStep1: '1. About You & Preferences',
    uploadTitle: '📷 Upload Your Photo',
    uploadDesc: 'AI analyzes your tone to suggest matching colors and overlays outfits on your photo',
    choosePhotoBtn: 'Choose Photo',
    lblHeight: 'Height (cm)',
    lblWeight: 'Weight (kg)',
    lblSize: 'Your Size',
    lblOccasion: 'Where will you wear it?',
    lblFit: 'Preferred Fit?',
    lblDetails: 'Fine Detail Preferences:',
    lblNotes: 'Describe yourself and your style preferences',
    analyzeBtn: '✨ Run AI Analysis & Match Outfits',
    vStep2: '2. Virtual Try-On Viewport',
    scaleLabel: 'Adjust outfit size on screen:',
    paletteLabel: 'Recommended Color Palette:',
    aiConclusionTitle: 'AI Stylist Summary:',
    vStep3: '3. Best Matched Outfits for You',
    visualHeading: 'Snap or Upload a Garment — Find Which Store Has It',
    visualSub: 'Upload an outfit photo to see matching stores, prices, and branch availability.',
    uploadClothTitle: 'Upload Garment Photo',
    uploadClothDesc: 'Take a photo or choose an image from your gallery',
    uploadClothBtn: 'Upload Photo',
    quickTestText: 'Or pick a preset style for a quick test:',
    foundStoresTitle: 'Available Stores & Branches',
    branchesHeading: 'Our Branches & Delivery Service',
    branchesSub: 'Doorstep courier delivery or free pickup with fitting rooms at any branch.',
    checkoutHeading: 'Order Checkout & Payment',
    checkoutSub: 'Fill in customer details, select delivery and payment method.',
    selectedItemsTitle: 'Selected Items',
    itemsCountLbl: 'Items count:',
    deliveryLbl: 'Delivery:',
    totalPayLbl: 'Total payment:',
    customerFormTitle: 'Customer & Delivery Information',
    lblFullName: 'Full Name *',
    lblPhone: 'Phone Number *',
    lblRegion: 'City / Region *',
    lblDeliveryType: 'Delivery Method *',
    lblPickupBranch: 'Select Branch',
    lblAddress: 'Full Street Address',
    lblPayMethod: 'Select Payment Method *',
    payCardTitle: '💳 Card Payment',
    payCashTitle: '💵 Cash on Delivery',
    payCashSub: 'Pay after trying on',
    confirmOrderBtn: 'Confirm Order & Get Receipt',
    historyHeading: 'Payment History & Digital Receipts',
    historySub: 'Every purchase includes a fiscal receipt ID and status.',
    authTitle: 'Register / Sign In',
    saveLoginBtn: 'Save & Sign In',
    receiptModalTitle: 'Digital Fiscal Receipt',
    printBtn: '🖨️ Print / Save PDF',
    footerTagline: 'AI Virtual Try-On & Smart Shopping Ecosystem.',
    tryBtn: '✨ Try On',
    addCartBtn: 'Add to Cart',
    infoBtn: 'ℹ️ Info'
  }
};

let currentLang = localStorage.getItem('aura_lang') || 'uz';
let activeCategoryFilter = 'all';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('aura_lang', lang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });

  if (currentUser) {
    document.getElementById('userLabel').textContent = currentUser.name.split(' ')[0];
  }

  updateThemeButtonLabel();
  renderCatalog(activeCategoryFilter, document.getElementById('globalSearch').value);
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// ================= 4. OFFLINE OCHILADIGAN RASM GENERATORI (SVG DATA URI) =================
function makeGarmentSvgDataUrl(label, sublabel, colorHex, kind = 'cloth') {
  const safeTitle = String(label).slice(0, 22).replace(/[<>&"]/g, '');
  const safeSub = String(sublabel).slice(0, 28).replace(/[<>&"]/g, '');

  const shapeSvg =
    kind === 'shoe'
      ? `<path d="M95 155 Q135 155 165 128 Q185 110 215 126 Q265 148 310 152 Q325 154 325 168 L90 168 Q85 158 95 155 Z" fill="#ffffff" fill-opacity="0.92"/>
         <path d="M105 168 L325 168 L322 178 L100 178 Z" fill="#0f172a" fill-opacity="0.55"/>
         <path d="M178 124 L192 142 M194 126 L208 144 M210 130 L224 146" stroke="${colorHex}" stroke-width="4" stroke-linecap="round"/>`
      : `<path d="M155 72 L185 60 Q210 74 235 60 L265 72 L302 112 L278 134 L256 112 L256 184 L164 184 L164 112 L142 134 L118 112 Z" fill="#ffffff" fill-opacity="0.9"/>
         <line x1="210" y1="74" x2="210" y2="184" stroke="${colorHex}" stroke-width="3" stroke-dasharray="5 4" opacity="0.55"/>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="240" viewBox="0 0 420 240">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${colorHex}"/>
        <stop offset="100%" stop-color="#1e1b4b"/>
      </linearGradient>
    </defs>
    <rect width="420" height="240" rx="22" fill="url(#g)"/>
    <circle cx="350" cy="48" r="70" fill="#ffffff" fill-opacity="0.08"/>
    <circle cx="65" cy="205" r="85" fill="#ffffff" fill-opacity="0.07"/>
    ${shapeSvg}
    <rect x="18" y="192" width="384" height="34" rx="10" fill="#090d1a" fill-opacity="0.52"/>
    <text x="210" y="214" text-anchor="middle" fill="#ffffff" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="700">${safeTitle} • ${safeSub}</text>
  </svg>`;

  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

// ================= 5. KENGAYTIRILGAN KIYIM VA OYOQ KIYIMLAR KATALOGI =================
const DEFAULT_PRODUCTS = [
  {
    id: 101,
    name: 'Executive Smart Blazer',
    category: 'office',
    occasion: 'office',
    fit: 'slim',
    kind: 'cloth',
    price: 480000,
    oldPrice: 620000,
    discount: '-23%',
    color: '#3b82f6',
    sizes: 'S, M, L, XL',
    material: '68% Viskoza, 28% Poliester, 4% Elastan',
    brand: 'AURA Tailored',
    toneGroup: ['cool', 'neutral', 'warm'],
    details: ['buttons', 'pockets', 'breathable'],
    stores: ['Toshkent — Amir Temur PVZ', 'Toshkent — Chilonzor Flagman', 'Samarqand — Registon Markaz'],
    desc: 'Ofis, muzokara va rasmiy uchrashuvlar uchun yengil, ajin tushmaydigan zamonaviy pijak.'
  },
  {
    id: 102,
    name: 'AeroTech Oversized Hoodie',
    category: 'casual',
    occasion: 'casual',
    fit: 'oversized',
    kind: 'cloth',
    price: 290000,
    oldPrice: 380000,
    discount: '-24%',
    color: '#8b5cf6',
    sizes: 'S, M, L, XL, XXL',
    material: '100% Yuqori sifatli paxta (360 gr/m²)',
    brand: 'AeroTech Street',
    toneGroup: ['cool', 'neutral'],
    details: ['hood', 'pockets', 'breathable'],
    stores: ['Toshkent — Yunusobod Mega', 'Toshkent — Sergeli PVZ', 'Farg‘ona — Markaziy Filial'],
    desc: 'Kundalik sayr va erkin harakat uchun yumshoq kapishonli va cho‘ntakli hoodie.'
  },
  {
    id: 103,
    name: 'Royal Velvet Evening Coat',
    category: 'event',
    occasion: 'event',
    fit: 'regular',
    kind: 'cloth',
    price: 750000,
    oldPrice: 920000,
    discount: '-18%',
    color: '#be185d',
    sizes: 'S, M, L, XL',
    material: 'Premium baxmal (Velvet) + shoyi astar',
    brand: 'Royal Atelier',
    toneGroup: ['warm', 'neutral'],
    details: ['buttons', 'pockets'],
    stores: ['Toshkent — Tashkent City Mall PVZ', 'Buxoro — Ark Plaza'],
    desc: 'To‘y, tantana va kechki tadbirlar uchun hashamatli bichimdagi ustki libos.'
  },
  {
    id: 104,
    name: 'StormShield Windbreaker',
    category: 'sport',
    occasion: 'sport',
    fit: 'regular',
    kind: 'cloth',
    price: 360000,
    oldPrice: 450000,
    discount: '-20%',
    color: '#0d9488',
    sizes: 'M, L, XL, XXL',
    material: 'Suv o‘tkazmas membrana + nafas oluvchi to‘r',
    brand: 'StormShield Active',
    toneGroup: ['warm', 'cool', 'neutral'],
    details: ['hood', 'zipper', 'pockets', 'waterproof'],
    stores: ['Toshkent — Chilonzor Flagman', 'Andijon — Bobur Shoh', 'Namangan — Chorsu PVZ'],
    desc: 'Shamol va yomg‘irdan himoyalovchi zamokli, yengil sport kurtkasi.'
  },
  {
    id: 105,
    name: 'Milan Linen Casual Shirt',
    category: 'office',
    occasion: 'office',
    fit: 'regular',
    kind: 'cloth',
    price: 245000,
    oldPrice: 310000,
    discount: '-21%',
    color: '#0284c7',
    sizes: 'S, M, L, XL',
    material: '80% Tabiiy zig‘ir (Linen), 20% Paxta',
    brand: 'Milano Classic',
    toneGroup: ['cool', 'neutral'],
    details: ['buttons', 'breathable'],
    stores: ['Toshkent — Amir Temur PVZ', 'Samarqand — Registon Markaz'],
    desc: 'Issiq va mo‘tadil ob-havoda terlatmaydigan, havo o‘tkazuvchi klassik ko‘ylak.'
  },
  {
    id: 106,
    name: 'Urban Cargo Zip Jacket',
    category: 'casual',
    occasion: 'casual',
    fit: 'oversized',
    kind: 'cloth',
    price: 410000,
    oldPrice: 510000,
    discount: '-20%',
    color: '#65a30d',
    sizes: 'M, L, XL, XXL',
    material: 'Mustahkam ripstop mato + suvga chidamli qoplama',
    brand: 'Urban Cargo Lab',
    toneGroup: ['warm', 'neutral'],
    details: ['zipper', 'pockets', 'waterproof'],
    stores: ['Toshkent — Yunusobod Mega', 'Xorazm — Urganch Markaz'],
    desc: 'Ko‘p cho‘ntakli, zamokli va yomg‘irga chidamli shahar uslubidagi kurtka.'
  },
  {
    id: 107,
    name: 'Nordic Wool Trench Coat',
    category: 'office',
    occasion: 'office',
    fit: 'regular',
    kind: 'cloth',
    price: 690000,
    oldPrice: 860000,
    discount: '-20%',
    color: '#4f46e5',
    sizes: 'S, M, L, XL',
    material: '70% Tabiiy jun, 30% Poliester',
    brand: 'Nordic Line',
    toneGroup: ['cool', 'neutral'],
    details: ['buttons', 'pockets'],
    stores: ['Toshkent — Tashkent City Mall Punkt', 'Toshkent — Amir Temur Markaz'],
    desc: 'Salqin kuz va bahor kunlari uchun uzunroq, nafis va issiq tutuvchi plash-palto.'
  },
  {
    id: 108,
    name: 'StreetPulse Graphic Bomber',
    category: 'casual',
    occasion: 'casual',
    fit: 'oversized',
    kind: 'cloth',
    price: 345000,
    oldPrice: 430000,
    discount: '-20%',
    color: '#e11d48',
    sizes: 'S, M, L, XL',
    material: 'Satin-neyon mato + yumshoq elastik manjetlar',
    brand: 'StreetPulse',
    toneGroup: ['warm', 'neutral'],
    details: ['zipper', 'pockets', 'breathable'],
    stores: ['Toshkent — Chilonzor Flagman PVZ', 'Farg‘ona — Markaziy Filial'],
    desc: 'Yorqin zamokli va qulay cho‘ntakli zamonaviy shahar bomberi.'
  },
  {
    id: 109,
    name: 'Gala Silk Evening Blazer',
    category: 'event',
    occasion: 'event',
    fit: 'slim',
    kind: 'cloth',
    price: 640000,
    oldPrice: 790000,
    discount: '-19%',
    color: '#9333ea',
    sizes: 'S, M, L, XL',
    material: 'Mikro-atlas va ipak aralashmasi',
    brand: 'Gala Couture',
    toneGroup: ['cool', 'warm', 'neutral'],
    details: ['buttons', 'pockets'],
    stores: ['Toshkent — Tashkent City Mall Punkt', 'Samarqand — Registon Markaz PVZ'],
    desc: 'Marosim, fotosessiya va kechki ziyofatlar uchun yarqiraydigan rasmiy kostyum-pijak.'
  },
  {
    id: 110,
    name: 'ProRun Thermal Zip Hoodie',
    category: 'sport',
    occasion: 'sport',
    fit: 'slim',
    kind: 'cloth',
    price: 275000,
    oldPrice: 340000,
    discount: '-19%',
    color: '#0284c7',
    sizes: 'S, M, L, XL',
    material: 'Elastan + tez quriydigan mikrofiber',
    brand: 'ProRun Athletics',
    toneGroup: ['cool', 'neutral'],
    details: ['zipper', 'pockets', 'breathable'],
    stores: ['Toshkent — Amir Temur Markaz', 'Buxoro — Ark Plaza Filiali'],
    desc: 'Yugurish va zal mashg‘ulotlari uchun namlikni tez chiqaruvchi zamokli sport kiyimi.'
  },
  {
    id: 201,
    name: 'Aura Cloud Runner Sneakers',
    category: 'footwear',
    occasion: 'sport',
    fit: 'regular',
    kind: 'shoe',
    price: 420000,
    oldPrice: 540000,
    discount: '-22%',
    color: '#2563eb',
    sizes: '39, 40, 41, 42, 43, 44',
    material: 'Nafas oluvchi mesh to‘r + EVA yumshoq taglik',
    brand: 'Aura Footwear',
    toneGroup: ['cool', 'neutral', 'warm'],
    details: ['breathable'],
    stores: ['Toshkent — Chilonzor Flagman PVZ', 'Toshkent — Tashkent City Mall Punkt', 'Samarqand — Registon Markaz PVZ'],
    desc: 'Yugurish va uzoq yurishda oyoqni charchatmaydigan amortizatsiyali sport krossovkasi.'
  },
  {
    id: 202,
    name: 'Monte Carlo Leather Oxford',
    category: 'footwear',
    occasion: 'office',
    fit: 'slim',
    kind: 'shoe',
    price: 560000,
    oldPrice: 690000,
    discount: '-19%',
    color: '#78350f',
    sizes: '40, 41, 42, 43, 44, 45',
    material: '100% Tabiiy charm + rezina sirpanmas taglik',
    brand: 'Monte Carlo Shoes',
    toneGroup: ['warm', 'neutral'],
    details: ['buttons'],
    stores: ['Toshkent — Amir Temur Markaz', 'Buxoro — Ark Plaza Filiali'],
    desc: 'Ofis, kostyum va rasmiy uchrashuvlar uchun klassik tabiiy charmli tufli.'
  },
  {
    id: 203,
    name: 'Metro Chunky Street Sneaker',
    category: 'footwear',
    occasion: 'casual',
    fit: 'oversized',
    kind: 'shoe',
    price: 395000,
    oldPrice: 495000,
    discount: '-20%',
    color: '#db2777',
    sizes: '37, 38, 39, 40, 41, 42, 43',
    material: 'Eko-charm + zamsh qo‘shimchalar + qalin taglik',
    brand: 'Metro Kicks',
    toneGroup: ['warm', 'cool', 'neutral'],
    details: ['breathable', 'pockets'],
    stores: ['Toshkent — Tashkent City Mall Punkt', 'Farg‘ona — Markaziy Filial'],
    desc: 'Hoodie va cargo shimlar bilan ajoyib uyg‘unlashuvchi zamonaviy shahar krossovkasi.'
  },
  {
    id: 204,
    name: 'Alpine Trek Waterproof Boot',
    category: 'footwear',
    occasion: 'sport',
    fit: 'regular',
    kind: 'shoe',
    price: 590000,
    oldPrice: 730000,
    discount: '-19%',
    color: '#0f766e',
    sizes: '40, 41, 42, 43, 44, 45',
    material: 'Suv o‘tkazmas nubuk + chuqur protektorli taglik',
    brand: 'Alpine Gear',
    toneGroup: ['warm', 'cool', 'neutral'],
    details: ['waterproof', 'zipper'],
    stores: ['Toshkent — Chilonzor Flagman PVZ', 'Samarqand — Registon Markaz PVZ'],
    desc: 'Tog‘, sayohat va yomg‘irli kunlar uchun suv o‘tkazmaydigan mustahkam botinka.'
  },
  {
    id: 205,
    name: 'Velour Grace Loafer',
    category: 'footwear',
    occasion: 'event',
    fit: 'slim',
    kind: 'shoe',
    price: 450000,
    oldPrice: 570000,
    discount: '-21%',
    color: '#9d174d',
    sizes: '36, 37, 38, 39, 40, 41, 42',
    material: 'Yumshoq zamsh/velur + ortopedik ichki taglik',
    brand: 'Grace Walk',
    toneGroup: ['warm', 'neutral'],
    details: ['breathable'],
    stores: ['Toshkent — Tashkent City Mall Punkt', 'Buxoro — Ark Plaza Filiali'],
    desc: 'Tadbir, bayram va ofis uchun bog‘ichsiz, juda qulay va nafis lofer oyoq kiyim.'
  },
  {
    id: 206,
    name: 'FlexKnit Slip-On Trainer',
    category: 'footwear',
    occasion: 'casual',
    fit: 'regular',
    kind: 'shoe',
    price: 330000,
    oldPrice: 410000,
    discount: '-20%',
    color: '#4338ca',
    sizes: '38, 39, 40, 41, 42, 43, 44',
    material: 'Triko paypoq-to‘r + yengil phylon taglik',
    brand: 'FlexKnit',
    toneGroup: ['cool', 'neutral'],
    details: ['breathable'],
    stores: ['Toshkent — Amir Temur Markaz', 'Farg‘ona — Markaziy Filial'],
    desc: 'Bog‘ichsiz, bir harakatda kiyiladigan yengil va havo o‘tkazuvchi slip-on.'
  }
];

function hydrateProducts(rawList) {
  return rawList.map((item) => {
    const kind = item.kind || (item.category === 'footwear' ? 'shoe' : 'cloth');
    const image =
      item.image && item.image.startsWith('data:image/')
        ? item.image
        : makeGarmentSvgDataUrl(item.name, item.brand || item.category, item.color || '#8b5cf6', kind);
    return {
      sizes: 'S, M, L, XL',
      material: 'Yuqori sifatli mato',
      brand: 'AURA Market',
      kind,
      ...item,
      image
    };
  });
}

let PRODUCTS = hydrateProducts(JSON.parse(localStorage.getItem('aura_products_v4') || 'null') || DEFAULT_PRODUCTS);
localStorage.setItem('aura_products_v4', JSON.stringify(PRODUCTS));

const BRANCHES = [
  { city: 'Toshkent', name: 'Chilonzor Flagman PVZ', address: 'Chilonzor 9-kvartal, 12-uy', hours: '09:00 – 22:00', fittingRooms: 6 },
  { city: 'Toshkent', name: 'Amir Temur Markaz', address: 'Yunusobod tumani, Amir Temur shoh ko‘chasi, 45', hours: '09:00 – 22:00', fittingRooms: 5 },
  { city: 'Toshkent', name: 'Tashkent City Mall Punkt', address: 'Shayxontohur, 2-qavat', hours: '10:00 – 22:00', fittingRooms: 8 },
  { city: 'Samarqand', name: 'Registon Markaz PVZ', address: 'Universitet xiyoboni, 18', hours: '09:00 – 21:00', fittingRooms: 4 },
  { city: 'Buxoro', name: 'Ark Plaza Filiali', address: 'B. Naqshband ko‘chasi, 74', hours: '09:00 – 21:00', fittingRooms: 3 },
  { city: 'Farg‘ona', name: 'Markaziy Filial', address: 'Mustaqillik ko‘chasi, 29', hours: '09:00 – 21:00', fittingRooms: 4 }
];

const TONE_PALETTES = {
  warm: ['#be185d', '#d97706', '#65a30d', '#0d9488', '#92400e'],
  cool: ['#3b82f6', '#8b5cf6', '#0284c7', '#4f46e5', '#db2777'],
  neutral: ['#3b82f6', '#8b5cf6', '#0d9488', '#be185d', '#475569']
};

let cart = JSON.parse(localStorage.getItem('aura_cart') || '[]');
let receipts = JSON.parse(localStorage.getItem('aura_receipts') || '[]');
let registeredUsers = JSON.parse(localStorage.getItem('aura_users') || '[]');
let currentUser = JSON.parse(localStorage.getItem('aura_user') || 'null');
let detectedTone = 'neutral';
let adminUnlocked = false;

const formatSum = (num) => Number(num || 0).toLocaleString('uz-UZ') + ' so‘m';

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[ch]));
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ================= 6. SAHIFALARARO O'TISH =================
function switchPage(pageName) {
  if (pageName === 'admin' && !adminUnlocked) {
    openAdminAuthModal();
    return;
  }

  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  const target = document.getElementById(`page-${pageName}`);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.page === pageName);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (pageName === 'checkout') renderCheckout();
  if (pageName === 'history') renderReceipts();
  if (pageName === 'admin') renderAdminUsers();
  if (pageName === 'orders') renderOrdersMonitor();
}

document.querySelectorAll('[data-page]').forEach((el) => {
  el.addEventListener('click', () => switchPage(el.dataset.page));
});

// ================= 7. KATALOG VA BATAFSIL MA'LUMOT =================
function getCategoryLabel(cat) {
  const map = {
    office: 'Ofis & Klassik',
    casual: 'Kundalik & Street',
    event: 'Tadbir & Oqshom',
    sport: 'Sport & Aktiv',
    footwear: 'Oyoq kiyim'
  };
  return map[cat] || cat;
}

function renderCatalog(category = 'all', query = '') {
  const grid = document.getElementById('catalogGrid');
  const dict = I18N[currentLang];
  const statEl = document.getElementById('heroProductStat');
  if (statEl) statEl.textContent = PRODUCTS.length + '+';

  const q = query.trim().toLowerCase();
  const list = PRODUCTS.filter((p) => {
    const okCat = category === 'all' || p.category === category;
    const okQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      (p.material && p.material.toLowerCase().includes(q)) ||
      (p.brand && p.brand.toLowerCase().includes(q));
    return okCat && okQuery;
  });

  if (!list.length) {
    grid.innerHTML = `<div class="panel-card"><p style="color:var(--muted);">Mos tovar topilmadi.</p></div>`;
    return;
  }

  grid.innerHTML = list
    .map(
      (p) => `
      <article class="product-card">
        <div>
          <div class="product-art" onclick="openProductDetail(${p.id})">
            <span class="discount-tag">${escapeHTML(p.discount || 'Yangi')}</span>
            <span class="cat-chip-mini">${escapeHTML(getCategoryLabel(p.category))}</span>
            <img class="product-img" src="${p.image}" alt="${escapeHTML(p.name)}" />
          </div>
          <span class="installment-badge">${formatSum(Math.round(p.price / 12))} / 12m</span>
          <h3 style="margin-top: 8px; font-size: 1.05rem;">${escapeHTML(p.name)}</h3>
          <p style="font-size: 0.84rem; color: var(--muted); margin-top: 4px;">${escapeHTML(p.desc)}</p>
          <div class="product-meta-line">📏 O‘lcham: ${escapeHTML(p.sizes || 'S–XL')} • 🏷️ ${escapeHTML(p.brand || 'AURA')}</div>
          <div class="price-row">
            <strong>${formatSum(p.price)}</strong>
            <small>${formatSum(p.oldPrice)}</small>
          </div>
          <button type="button" class="detail-link-btn" onclick="openProductDetail(${p.id})">${dict.infoBtn}: Material, o‘lcham &amp; filiallar</button>
        </div>
        <div class="card-btns">
          <button type="button" class="btn btn-outline" onclick="openInVirtual(${p.id})">${dict.tryBtn}</button>
          <button type="button" class="btn btn-primary" onclick="addToCart(${p.id}, '${p.category === 'footwear' ? '42' : 'L'}')">${dict.addCartBtn}</button>
        </div>
      </article>
    `
    )
    .join('');
}

window.openProductDetail = function (productId) {
  const p = PRODUCTS.find((item) => item.id === productId);
  if (!p) return;
  const defaultSize = p.category === 'footwear' ? '42' : 'L';
  document.getElementById('productDetailTitle').textContent = p.name;
  document.getElementById('productDetailBody').innerHTML = `
    <img class="detail-hero-img" src="${p.image}" alt="${escapeHTML(p.name)}" />
    <div style="font-size:0.9rem; line-height:1.7;">
      <p><strong>Brend:</strong> ${escapeHTML(p.brand || 'AURA Market')}</p>
      <p><strong>Kategoriya:</strong> ${escapeHTML(getCategoryLabel(p.category))}</p>
      <p><strong>Mavjud o‘lchamlar:</strong> ${escapeHTML(p.sizes || 'S, M, L, XL')}</p>
      <p><strong>Material / Tarkibi:</strong> ${escapeHTML(p.material || 'Sifatli mato')}</p>
      <p><strong>Tavsif:</strong> ${escapeHTML(p.desc)}</p>
      <p><strong>Filiallarda borligi:</strong> ${(p.stores || BRANCHES.map((b) => b.name)).join(' • ')}</p>
      <div style="margin-top:12px; font-size:1.12rem; color:var(--brand);">
        <strong>Narxi: ${formatSum(p.price)}</strong>
      </div>
      <div style="display:flex; gap:10px; margin-top:14px;">
        <button type="button" class="btn btn-outline full-btn" onclick="closeProductDetailModal(); openInVirtual(${p.id});">✨ Virtual ko‘rish</button>
        <button type="button" class="btn btn-primary full-btn" onclick="addToCart(${p.id}, '${defaultSize}'); closeProductDetailModal();">🛒 Savatga qo‘shish</button>
      </div>
    </div>
  `;
  document.getElementById('productDetailBackdrop').classList.add('open');
  document.getElementById('productDetailModal').classList.add('open');
};

function closeProductDetailModal() {
  document.getElementById('productDetailBackdrop').classList.remove('open');
  document.getElementById('productDetailModal').classList.remove('open');
}

document.getElementById('closeProductDetailBtn').addEventListener('click', closeProductDetailModal);
document.getElementById('productDetailBackdrop').addEventListener('click', closeProductDetailModal);

document.querySelectorAll('.cat-pill').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-pill').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategoryFilter = btn.dataset.cat;
    renderCatalog(activeCategoryFilter, document.getElementById('globalSearch').value);
  });
});

document.getElementById('globalSearchBtn').addEventListener('click', () => {
  switchPage('home');
  renderCatalog(activeCategoryFilter, document.getElementById('globalSearch').value);
});

document.getElementById('globalSearch').addEventListener('input', (e) => {
  renderCatalog(activeCategoryFilter, e.target.value);
});

// ================= 8. VIRTUAL OLAM & AI-STILIST =================
const userPhotoInput = document.getElementById('userPhotoInput');
document.getElementById('triggerUserPhoto').addEventListener('click', () => userPhotoInput.click());

userPhotoInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const src = ev.target.result;
    const prev = document.getElementById('userPhotoPreview');
    const stageBg = document.getElementById('stageUserBg');
    prev.src = src;
    prev.hidden = false;
    stageBg.src = src;
    stageBg.hidden = false;
    analyzeImageTone(src);
  };
  reader.readAsDataURL(file);
});

function analyzeImageTone(imgSrc) {
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 40;
    canvas.height = 40;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, 40, 40);
    const data = ctx.getImageData(10, 10, 20, 20).data;

    let r = 0, g = 0, b = 0, count = 0;
    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }
    r /= count;
    b /= count;

    if (r - b > 18) detectedTone = 'warm';
    else if (b - r > 10) detectedTone = 'cool';
    else detectedTone = 'neutral';

    document.getElementById('detectedToneBadge').textContent = `Tone: ${detectedTone.toUpperCase()}`;
    renderToneSwatches();
    showToast('AI rasm rangini tahlil qildi!');
  };
  img.src = imgSrc;
}

function renderToneSwatches() {
  const box = document.getElementById('recommendedSwatches');
  const colors = TONE_PALETTES[detectedTone] || TONE_PALETTES.neutral;
  box.innerHTML = colors
    .map((c) => `<button type="button" class="rec-swatch" style="background:${c};" onclick="applyOverlayColor('${c}')"></button>`)
    .join('');
}

window.applyOverlayColor = function (hex) {
  document.getElementById('garmentShape').style.background = hex + 'dd';
};

window.openInVirtual = function (productId) {
  const found = PRODUCTS.find((p) => p.id === productId);
  if (!found) return;
  document.getElementById('garmentShape').style.background = (found.color || '#8b5cf6') + 'dd';
  document.getElementById('garmentOverlayTitle').textContent = found.name;
  document.getElementById('garmentOverlayMeta').textContent = `${document.getElementById('userSize').value} • ${(found.fit || 'regular').toUpperCase()}`;
  const overlayImg = document.getElementById('garmentOverlayImg');
  if (overlayImg && found.image) overlayImg.src = found.image;
  switchPage('virtual');
};

document.getElementById('overlayScaleRange').addEventListener('input', (e) => {
  document.getElementById('virtualGarmentOverlay').style.transform = `scale(${e.target.value / 100})`;
});

// --- AI KONFIGURATSIYA VA AQLLI TAHLILCHI ---
const AI_CONFIG = {
  apiKey: '',
  model: 'gemini-2.5-flash'
};

function parseUserStyleIntent(notesText = '') {
  const text = notesText.toLowerCase();
  return {
    wantsWideShoulders: /yelka|plech|shoulder|keng yelka|широк/i.test(text),
    wantsLongCut: /uzun|длин|long|tizzagacha|pastga/i.test(text),
    wantsShortCut: /kalta|qisqa|корот|crop|short/i.test(text),
    wantsWarmth: /sovuq|issiq tut|qish|kuz|холод|тепл|warm|winter/i.test(text),
    wantsBreathable: /issiq|yoz|nafas|terlat|жар|лет|breath|cool/i.test(text)
  };
}

function evaluateSizeFit(height, weight, selectedSize, fitPref, intent) {
  const heightM = height / 100;
  const bmi = Number((weight / (heightM * heightM)).toFixed(1));

  let recommendedSize = 'M';
  if (height < 165 && weight < 62) recommendedSize = 'S';
  else if (height <= 176 && weight <= 74) recommendedSize = 'M';
  else if (height <= 185 && weight <= 90) recommendedSize = 'L';
  else recommendedSize = 'XL';

  const order = { S: 1, M: 2, L: 3, XL: 4, XXL: 5 };
  const diff = (order[selectedSize] || 3) - (order[recommendedSize] || 2);

  let fitVerdict = 'Optimal o‘tirish';
  if (fitPref === 'oversized') {
    fitVerdict = diff >= 1
      ? `Erkin Oversized (${selectedSize} o‘lcham keng va uzunroq ko‘rinadi)`
      : `Yengil Oversized (yanada kengroq effekt uchun bir pog‘ona yuqori o‘lchamni ko‘ring)`;
  } else if (diff >= 2) {
    fitVerdict = `Juda keng (${selectedSize} o‘lcham ${height} sm / ${weight} kg uchun katta)`;
  } else if (diff <= -1) {
    fitVerdict = `Biroz torroq (${selectedSize} o‘lcham ixcham o‘tiradi)`;
  }

  if (intent.wantsLongCut && height < 175) {
    fitVerdict += ` • ${height} sm bo‘yda uzun bichim vizual bo‘yni biroz qisqartirishi mumkin`;
  }

  return { bmi, recommendedSize, fitVerdict };
}

function rankProductsWithAI(profile) {
  const { height, weight, size, occasion, fitPref, details, notes } = profile;
  const intent = parseUserStyleIntent(notes);
  const fitInfo = evaluateSizeFit(height, weight, size, fitPref, intent);

  const ranked = PRODUCTS.map((product) => {
    let score = 55;
    const reasons = [];

    if (product.occasion === occasion) {
      score += 20;
      reasons.push('tanlangan tadbirga mos');
    }

    if (product.fit === fitPref || (fitPref === 'oversized' && intent.wantsWideShoulders && product.fit !== 'slim')) {
      score += 14;
      reasons.push(`${fitPref} bichim va yelka talabiga yaqin`);
    }

    if ((product.toneGroup || []).includes(detectedTone)) {
      score += 8;
      reasons.push(`teri ohangi (${detectedTone}) bilan uyg‘un`);
    }

    const matchedDetails = details.filter((d) => (product.details || []).includes(d));
    if (matchedDetails.length) {
      score += matchedDetails.length * 5;
      reasons.push(`detallar mos (${matchedDetails.join(', ')})`);
    }

    if (intent.wantsLongCut && /coat|hoodie|parka|jacket|trench/i.test(product.name)) {
      score += 5;
      reasons.push('uzunroq siluetga mos');
    }

    if (intent.wantsBreathable && (product.details || []).includes('breathable')) {
      score += 5;
      reasons.push('havo o‘tkazuvchi mato');
    }

    return {
      ...product,
      score: Math.min(99, score),
      reasonText: reasons.length ? reasons.join(' • ') : 'universal mos model'
    };
  }).sort((a, b) => b.score - a.score);

  return { ranked, fitInfo };
}

async function askExternalAIIfConfigured(profile, topThree) {
  if (!AI_CONFIG.apiKey) return null;

  const prompt = [
    'Sen moda va virtual kiyim tanlash bo‘yicha AI stilistsan.',
    `Mijoz: bo‘yi ${profile.height} sm, vazni ${profile.weight} kg, o‘lchami ${profile.size},`,
    `maqsadi: ${profile.occasion}, bichim: ${profile.fitPref}, detallar: ${profile.details.join(', ') || 'yo‘q'}.`,
    `Izoh: "${profile.notes || 'ko‘rsatilmagan'}".`,
    `Top modellar: ${topThree.map((item) => `${item.name} (${item.score}%)`).join(', ')}.`,
    'Qisqa (2-3 gap), aniq va foydali tavsiya yoz.'
  ].join(' ');

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${AI_CONFIG.model}:generateContent?key=${encodeURIComponent(AI_CONFIG.apiKey)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;
  } catch {
    return null;
  }
}

document.getElementById('virtualForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const profile = {
    height: Number(document.getElementById('userHeight').value),
    weight: Number(document.getElementById('userWeight').value),
    size: document.getElementById('userSize').value,
    occasion: document.getElementById('occasionSelect').value,
    fitPref: document.getElementById('fitPreference').value,
    details: Array.from(document.querySelectorAll('#detailChecks input:checked')).map((i) => i.value),
    notes: document.getElementById('styleNotes').value.trim()
  };

  const { ranked, fitInfo } = rankProductsWithAI(profile);
  const top = ranked[0];
  if (top) openInVirtual(top.id);

  const explanationEl = document.getElementById('aiExplanationText');
  const localSummary =
    `${profile.height} sm / ${profile.weight} kg (BMI ${fitInfo.bmi}, baza o‘lcham: ${fitInfo.recommendedSize}) — ` +
    `${fitInfo.fitVerdict}. Eng mos model: "${top?.name}" (${top?.score}%).` +
    (profile.notes ? ` Izoh tahlili: "${profile.notes}".` : '');

  explanationEl.textContent = localSummary;

  const aiRemoteText = await askExternalAIIfConfigured(profile, ranked.slice(0, 3));
  if (aiRemoteText) {
    explanationEl.textContent = aiRemoteText;
  }

  document.getElementById('matchedClothesList').innerHTML = ranked
    .slice(0, 3)
    .map(
      (item) => `
      <div class="matched-item">
        <div>
          <strong>${escapeHTML(item.name)}</strong>
          <div style="font-size:0.82rem; color:var(--brand); font-weight:700;">${item.score}% • ${formatSum(item.price)}</div>
          <small style="display:block; color:var(--muted); font-size:0.78rem;">${escapeHTML(item.reasonText)}</small>
        </div>
        <div style="display:flex; gap:6px;">
          <button type="button" class="btn btn-outline" onclick="openInVirtual(${item.id})">Try</button>
          <button type="button" class="btn btn-primary" onclick="addToCart(${item.id}, '${profile.size}')">+</button>
        </div>
      </div>
    `
    )
    .join('');

  showToast('AI tahlil yakunlandi!');
});

// ================= 9. VISUAL SEARCH & BRANCHES =================
const clothSearchInput = document.getElementById('clothSearchInput');
document.getElementById('triggerClothSearch').addEventListener('click', () => clothSearchInput.click());

clothSearchInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const prev = document.getElementById('clothSearchPreview');
    prev.src = ev.target.result;
    prev.hidden = false;
    runVisualStoreSearch('casual', file.name);
  };
  reader.readAsDataURL(file);
});

document.querySelectorAll('.sample-cloth-btn').forEach((btn) => {
  btn.addEventListener('click', () => runVisualStoreSearch(btn.dataset.type, btn.textContent));
});

function runVisualStoreSearch(type, label) {
  const matched = PRODUCTS.filter((p) => p.category === type || p.occasion === type);
  document.getElementById('visualSearchSummary').textContent = `${label} (${matched.length} ta model topildi):`;
  document.getElementById('storeResultsList').innerHTML = matched
    .map(
      (p) => `
      <div class="store-card">
        <div style="display:flex; justify-content:space-between; gap:8px;">
          <strong>${escapeHTML(p.name)}</strong>
          <span style="color:var(--brand); font-weight:800;">${formatSum(p.price)}</span>
        </div>
        <p style="font-size:0.84rem; color:var(--muted); margin:6px 0;">${(p.stores || BRANCHES.map((b) => b.name)).join(' • ')}</p>
        <div style="display:flex; gap:8px;">
          <button type="button" class="btn btn-outline" onclick="openInVirtual(${p.id})">Virtual</button>
          <button type="button" class="btn btn-primary" onclick="addToCart(${p.id}, '${p.category === 'footwear' ? '42' : 'L'}')">Savatga</button>
        </div>
      </div>
    `
    )
    .join('');
}

function renderBranches() {
  document.getElementById('branchesGrid').innerHTML = BRANCHES.map(
    (b) => `
    <div class="branch-card">
      <span class="branch-status">${b.hours}</span>
      <h3>${escapeHTML(b.city)} — ${escapeHTML(b.name)}</h3>
      <p style="color:var(--muted); font-size:0.9rem; margin:6px 0;">📍 ${escapeHTML(b.address)}</p>
      <p style="font-size:0.85rem;">🚪 Kiyinish xonalari: <strong>${b.fittingRooms}</strong></p>
    </div>
  `
  ).join('');

  document.getElementById('pickupBranchSelect').innerHTML = BRANCHES.map(
    (b) => `<option value="${escapeHTML(b.city)} — ${escapeHTML(b.name)}">${escapeHTML(b.city)} — ${escapeHTML(b.name)}</option>`
  ).join('');
}

// ================= 10. CART, CHECKOUT & RECEIPTS =================
window.addToCart = function (productId, size = 'L') {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;
  cart.push({ uid: Date.now() + Math.random(), id: product.id, name: product.name, price: product.price, size });
  localStorage.setItem('aura_cart', JSON.stringify(cart));
  updateCartBadge();
  showToast(`${product.name} (${size}) savatga qo‘shildi!`);
};

function updateCartBadge() {
  document.getElementById('headerCartCount').textContent = String(cart.length);
}

function renderCheckout() {
  const listEl = document.getElementById('checkoutCartList');
  const deliveryType = document.getElementById('deliveryType').value;
  const deliveryFee = deliveryType === 'courier' && cart.length ? 25000 : 0;

  if (!cart.length) {
    listEl.innerHTML = `<p style="color:var(--muted);">Savat bo‘sh / Корзина пуста / Cart is empty</p>`;
  } else {
    listEl.innerHTML = cart
      .map(
        (item) => `
        <div class="checkout-item">
          <div><strong>${escapeHTML(item.name)}</strong> <small>(${escapeHTML(item.size)})</small></div>
          <div style="display:flex; align-items:center; gap:10px;">
            <strong>${formatSum(item.price)}</strong>
            <button type="button" class="close-btn" onclick="removeFromCart(${item.uid})">✕</button>
          </div>
        </div>
      `
      )
      .join('');
  }

  const itemsSum = cart.reduce((s, i) => s + i.price, 0);
  document.getElementById('checkoutCount').textContent = String(cart.length);
  document.getElementById('deliveryFeeText').textContent = formatSum(deliveryFee);
  document.getElementById('checkoutTotalSum').textContent = formatSum(itemsSum + deliveryFee);

  if (currentUser) {
    document.getElementById('custName').value = currentUser.name;
    document.getElementById('custPhone').value = currentUser.phone;
  }
}

window.removeFromCart = function (uid) {
  cart = cart.filter((i) => i.uid !== uid);
  localStorage.setItem('aura_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCheckout();
};

document.getElementById('deliveryType').addEventListener('change', (e) => {
  const isCourier = e.target.value === 'courier';
  document.getElementById('branchSelectWrap').hidden = isCourier;
  document.getElementById('addressWrap').hidden = !isCourier;
  renderCheckout();
});

document.querySelectorAll('input[name="paymentMethod"]').forEach((radio) => {
  radio.addEventListener('change', (e) => {
    document.getElementById('cardDetailsBox').hidden = e.target.value !== 'card';
  });
});

document.getElementById('checkoutForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (!cart.length) return showToast('Avval savatga mahsulot qo‘shing!');

  const deliveryType = document.getElementById('deliveryType').value;
  const deliveryFee = deliveryType === 'courier' ? 25000 : 0;
  const itemsSum = cart.reduce((s, i) => s + i.price, 0);
  const payVal = document.querySelector('input[name="paymentMethod"]:checked').value;
  const paymentMethod = payVal === 'card' ? 'Karta orqali (Uzcard / Humo / Visa)' : 'Naqd pul (Qabul qilganda)';

  const receipt = {
    receiptId: 'CHK-' + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleString('uz-UZ'),
    customer: document.getElementById('custName').value.trim(),
    phone: document.getElementById('custPhone').value.trim(),
    region: document.getElementById('custRegion').value,
    deliveryType,
    destination:
      deliveryType === 'courier'
        ? document.getElementById('custAddress').value.trim() || 'Kuryer manzili'
        : document.getElementById('pickupBranchSelect').value,
    paymentMethod,
    payType: payVal,
    status: payVal === 'card' ? 'PAID ✓' : 'CASH ON DELIVERY',
    items: [...cart],
    total: itemsSum + deliveryFee
  };

  receipts.unshift(receipt);
  localStorage.setItem('aura_receipts', JSON.stringify(receipts));
  cart = [];
  localStorage.setItem('aura_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCheckout();
  renderOrdersMonitor();
  openReceiptModal(receipt);
});

function renderReceipts() {
  const grid = document.getElementById('receiptsGrid');
  if (!receipts.length) {
    grid.innerHTML = `<p style="color:var(--muted);">Cheklar tarixi bo‘sh.</p>`;
    return;
  }

  grid.innerHTML = receipts
    .map(
      (r, idx) => `
      <div class="receipt-card">
        <div class="receipt-top">
          <strong>🧾 ${escapeHTML(r.receiptId)}</strong>
          <span class="branch-status">${escapeHTML(r.status)}</span>
        </div>
        <p style="font-size:0.84rem; color:var(--muted);">${escapeHTML(r.date)}</p>
        <p style="font-size:0.88rem; margin-top:6px;"><strong>${escapeHTML(r.customer)}</strong> (${escapeHTML(r.phone)})</p>
        <p style="font-size:0.84rem; color:var(--muted);">${escapeHTML(r.destination)}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px;">
          <strong style="color:var(--brand);">${formatSum(r.total)}</strong>
          <button type="button" class="btn btn-outline" onclick="viewReceiptByIndex(${idx})">Chek</button>
        </div>
      </div>
    `
    )
    .join('');
}

window.viewReceiptByIndex = function (idx) {
  if (receipts[idx]) openReceiptModal(receipts[idx]);
};

function openReceiptModal(r) {
  document.getElementById('receiptModalBody').innerHTML = `
    <div style="font-size:0.9rem; line-height:1.7;">
      <p><strong>ID:</strong> ${escapeHTML(r.receiptId)}</p>
      <p><strong>Sana:</strong> ${escapeHTML(r.date)}</p>
      <p><strong>Mijoz:</strong> ${escapeHTML(r.customer)} (${escapeHTML(r.phone)})</p>
      <p><strong>Manzil / Filial:</strong> ${escapeHTML(r.region)}, ${escapeHTML(r.destination)}</p>
      <p><strong>To‘lov turi:</strong> ${escapeHTML(r.paymentMethod)}</p>
      <hr style="margin:10px 0; border:none; border-top:1px dashed var(--border);" />
      ${r.items.map((i) => `<div style="display:flex; justify-content:space-between;"><span>${escapeHTML(i.name)} (${escapeHTML(i.size)})</span><strong>${formatSum(i.price)}</strong></div>`).join('')}
      <hr style="margin:10px 0; border:none; border-top:1px dashed var(--border);" />
      <div style="display:flex; justify-content:space-between; font-size:1.1rem;">
        <strong>JAMI:</strong>
        <strong style="color:var(--brand);">${formatSum(r.total)}</strong>
      </div>
    </div>
  `;
  document.getElementById('receiptBackdrop').classList.add('open');
  document.getElementById('receiptModal').classList.add('open');
}

document.getElementById('closeReceiptBtn').addEventListener('click', () => {
  document.getElementById('receiptBackdrop').classList.remove('open');
  document.getElementById('receiptModal').classList.remove('open');
});

document.getElementById('printReceiptBtn').addEventListener('click', () => window.print());

// ================= 11. AUTH & RO'YXATDAN O'TGANLAR =================
const authBackdrop = document.getElementById('authBackdrop');
const authModal = document.getElementById('authModal');

document.getElementById('openAuthBtn').addEventListener('click', () => {
  authBackdrop.classList.add('open');
  authModal.classList.add('open');
});

document.getElementById('closeAuthBtn').addEventListener('click', () => {
  authBackdrop.classList.remove('open');
  authModal.classList.remove('open');
});

document.getElementById('authForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  if (!name || !phone) return;

  currentUser = { name, phone };
  localStorage.setItem('aura_user', JSON.stringify(currentUser));

  registeredUsers.unshift({
    id: Date.now(),
    name,
    phone,
    time: new Date().toLocaleString('uz-UZ')
  });
  localStorage.setItem('aura_users', JSON.stringify(registeredUsers));

  document.getElementById('userLabel').textContent = name.split(' ')[0];
  authBackdrop.classList.remove('open');
  authModal.classList.remove('open');
  renderAdminUsers();
  showToast(`Xush kelibsiz, ${name}!`);
});

// ================= 12. ADMIN PANEL & YANGI TOVAR QO'SHISH =================
const ADMIN_PASSWORDS = ['Aura2026!', 'aura2026', 'admin123'];
const adminAuthBackdrop = document.getElementById('adminAuthBackdrop');
const adminAuthModal = document.getElementById('adminAuthModal');

function openAdminAuthModal() {
  adminAuthBackdrop.classList.add('open');
  adminAuthModal.classList.add('open');
  setTimeout(() => document.getElementById('adminPassInput').focus(), 50);
}

function closeAdminAuthModal() {
  adminAuthBackdrop.classList.remove('open');
  adminAuthModal.classList.remove('open');
}

document.getElementById('closeAdminAuthBtn').addEventListener('click', closeAdminAuthModal);
document.getElementById('adminAuthBackdrop').addEventListener('click', closeAdminAuthModal);

document.getElementById('adminAuthForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const pass = document.getElementById('adminPassInput').value.trim();
  if (!ADMIN_PASSWORDS.includes(pass)) {
    return showToast('Parol noto‘g‘ri! (Masalan: aura2026 yoki Aura2026!)');
  }
  adminUnlocked = true;
  document.getElementById('adminPassInput').value = '';
  closeAdminAuthModal();
  switchPage('admin');
  showToast('Admin panel ochildi!');
});

document.getElementById('lockAdminBtn').addEventListener('click', () => {
  adminUnlocked = false;
  switchPage('home');
  showToast('Admin panel yopildi');
});

document.getElementById('adminAddProductForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('newProdName').value.trim();
  const category = document.getElementById('newProdCategory').value;
  const price = Number(document.getElementById('newProdPrice').value);
  const material = document.getElementById('newProdMaterial').value.trim() || 'Sifatli mato / charm';
  const color = document.getElementById('newProdColor').value || '#8b5cf6';
  const desc = document.getElementById('newProdDesc').value.trim();
  if (!name || !price || !desc) return;

  const kind = category === 'footwear' ? 'shoe' : 'cloth';
  const newItem = hydrateProducts([
    {
      id: Date.now(),
      name,
      category,
      occasion: category === 'footwear' ? 'casual' : category,
      fit: 'regular',
      kind,
      price,
      oldPrice: Math.round(price * 1.25),
      discount: '-20%',
      color,
      sizes: category === 'footwear' ? '39, 40, 41, 42, 43, 44' : 'S, M, L, XL',
      material,
      brand: 'AURA Custom',
      toneGroup: ['cool', 'neutral', 'warm'],
      details: ['pockets', 'breathable'],
      stores: BRANCHES.slice(0, 3).map((b) => `${b.city} — ${b.name}`),
      desc
    }
  ])[0];

  PRODUCTS.unshift(newItem);
  localStorage.setItem('aura_products_v4', JSON.stringify(PRODUCTS));
  e.target.reset();
  renderCatalog(activeCategoryFilter, document.getElementById('globalSearch').value);
  showToast(`"${name}" katalogga qo‘shildi!`);
});

function renderAdminUsers() {
  const tbody = document.getElementById('adminUsersBody');
  const countEl = document.getElementById('adminUsersCount');
  if (!tbody || !countEl) return;
  countEl.textContent = String(registeredUsers.length);

  if (!registeredUsers.length) {
    tbody.innerHTML = `<tr><td colspan="5" style="color:var(--muted);">Hali hech kim ro‘yxatdan o‘tmagan.</td></tr>`;
    return;
  }

  tbody.innerHTML = registeredUsers
    .map(
      (u, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td><strong>${escapeHTML(u.name)}</strong></td>
        <td>${escapeHTML(u.phone)}</td>
        <td>${escapeHTML(u.time)}</td>
        <td><button type="button" class="btn btn-danger" onclick="deleteRegisteredUser(${u.id})">O‘chirish</button></td>
      </tr>
    `
    )
    .join('');
}

window.deleteRegisteredUser = function (userId) {
  registeredUsers = registeredUsers.filter((u) => u.id !== userId);
  localStorage.setItem('aura_users', JSON.stringify(registeredUsers));
  renderAdminUsers();
  showToast('Foydalanuvchi o‘chirildi');
};

// ================= 13. BUYURTMALAR SAHIFASI (KIM NIMA ZAKAZ QILGANI) =================
function renderOrdersMonitor() {
  const listEl = document.getElementById('ordersMonitorList');
  if (!listEl) return;

  const totalCount = receipts.length;
  const totalRevenue = receipts.reduce((sum, r) => sum + Number(r.total || 0), 0);
  const cardCount = receipts.filter((r) => r.payType === 'card' || String(r.paymentMethod).includes('Karta')).length;
  const cashCount = totalCount - cardCount;

  document.getElementById('ordersTotalCount').textContent = String(totalCount);
  document.getElementById('ordersTotalRevenue').textContent = formatSum(totalRevenue);
  document.getElementById('ordersCardCount').textContent = String(cardCount);
  document.getElementById('ordersCashCount').textContent = String(cashCount);

  if (!receipts.length) {
    listEl.innerHTML = `<p style="color:var(--muted);">Hozircha buyurtmalar yo‘q. Mijoz savatdan mahsulot olib rasmiylashtirganda, barcha ma’lumot shu yerda chiqadi.</p>`;
    return;
  }

  listEl.innerHTML = receipts
    .map(
      (r, idx) => `
      <div class="order-monitor-card">
        <div class="order-monitor-head">
          <div>
            <strong>🧾 ${escapeHTML(r.receiptId)}</strong> • <span style="color:var(--muted); font-size:0.84rem;">${escapeHTML(r.date)}</span>
          </div>
          <span class="branch-status">${escapeHTML(r.status)}</span>
        </div>
        <p style="font-size:0.92rem;">
          👤 <strong>Mijoz:</strong> ${escapeHTML(r.customer)} &nbsp;|&nbsp;
          📞 <strong>Tel:</strong> ${escapeHTML(r.phone)}
        </p>
        <p style="font-size:0.86rem; color:var(--muted); margin-top:4px;">
          📍 <strong>Manzil / Filial:</strong> ${escapeHTML(r.region)} — ${escapeHTML(r.destination)} &nbsp;|&nbsp;
          💳 <strong>To‘lov:</strong> ${escapeHTML(r.paymentMethod)}
        </p>
        <div class="order-items-chips">
          ${(r.items || [])
            .map(
              (item) => `<span class="order-item-chip">🛍️ ${escapeHTML(item.name)} (${escapeHTML(item.size)}) — ${formatSum(item.price)}</span>`
            )
            .join('')}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; flex-wrap:wrap; gap:8px;">
          <strong style="font-size:1.05rem; color:var(--brand);">Jami zakaz summasi: ${formatSum(r.total)}</strong>
          <button type="button" class="btn btn-outline" onclick="viewReceiptByIndex(${idx})">Chekni ko‘rish</button>
        </div>
      </div>
    `
    )
    .join('');
}

// ================= START =================
applyTheme(currentTheme);
applyLanguage(currentLang);
renderToneSwatches();
renderBranches();
updateCartBadge();
renderAdminUsers();
renderOrdersMonitor();
runVisualStoreSearch('office', 'Klassik Pijak');
if (PRODUCTS[0]) openInVirtual(PRODUCTS[0].id);