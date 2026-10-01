// Product catalogue. Prices and category assignments mirror the reference demo;
// names that were third-party trademarks are replaced with generic product names,
// and all copy and artwork is original.
const img = (name) => `/images/products/${name}.svg`;

const raw = [
  {
    slug: "whole-wheat-bread",
    name: "Whole Wheat Bread",
    price: 2,
    categories: ["fresh-chilled-food", "health"],
    images: ["bread"],
    rating: 4,
    weight: "600 g",
    origin: "Local bakery",
    summary: "A hearty stone-baked loaf made with wholegrain flour and a crackly golden crust.",
  },
  {
    slug: "classic-instant-coffee",
    name: "Classic Instant Coffee",
    price: 9,
    categories: ["tea-coffee"],
    images: ["coffee-jar"],
    rating: 4,
    weight: "200 g",
    origin: "Colombia & Brazil",
    summary: "Smooth, medium-roast instant coffee granules for a rich cup in seconds.",
  },
  {
    slug: "french-fries",
    name: "French Fries",
    price: 8,
    categories: ["fresh-chilled-food", "vegetables"],
    images: ["fries", "chips-bag"],
    weight: "1 kg",
    origin: "Netherlands",
    summary: "Golden straight-cut fries, pre-blanched and ready for the oven or air fryer.",
  },
  {
    slug: "funnel-ice-cream",
    name: "Funnel ice cream",
    price: 3,
    regularPrice: 4,
    categories: ["trending"],
    images: ["ice-cream", "sundae"],
    weight: "120 ml",
    origin: "Dairy co-op",
    summary: "Soft-serve berry ice cream swirled into a crisp waffle cone.",
  },
  {
    slug: "paprika-crisps",
    name: "Paprika Crisps",
    price: 7.03,
    regularPrice: 25,
    categories: ["meat", "trending"],
    images: ["chips-bag", "chips-bag-red"],
    weight: "150 g",
    origin: "Spain",
    summary: "Crunchy kettle crisps dusted with smoky sweet paprika and a hint of chilli.",
  },
  {
    slug: "chocolate-cake",
    name: "Chocolate Cake",
    price: 4.05,
    categories: ["trending"],
    images: ["cake", "donut"],
    rating: 4,
    weight: "450 g",
    origin: "In-store bakery",
    summary: "Layered dark chocolate sponge with a silky vanilla cream filling.",
  },
  {
    slug: "chocolate-donut",
    name: "Chocolate donut",
    price: 1,
    categories: ["trending"],
    images: ["donut"],
    rating: 4,
    weight: "80 g",
    origin: "In-store bakery",
    summary: "A pillowy ring donut dipped in glossy chocolate glaze.",
  },
  {
    slug: "extra-virgin-olive-oil",
    name: "Extra Virgin Olive Oil",
    price: 21.05,
    regularPrice: 25,
    categories: ["trending"],
    images: ["oil-bottle"],
    weight: "1 L",
    origin: "Greece",
    summary: "Cold-pressed oil with a fruity, peppery finish for dressings and cooking.",
  },
  {
    slug: "pint-beer",
    name: "Pint Beer",
    price: 18.25,
    regularPrice: 25,
    categories: ["beer"],
    images: ["beer-bottle"],
    weight: "6 × 330 ml",
    origin: "Craft brewery",
    summary: "A crisp golden lager with a clean, refreshing finish. Six-bottle pack.",
  },
  {
    slug: "yeast-extract-spread",
    name: "Yeast Extract Spread",
    price: 21.05,
    regularPrice: 25,
    categories: ["wine"],
    images: ["spread-jar"],
    weight: "250 g",
    origin: "United Kingdom",
    summary: "A rich, savoury spread packed with B vitamins. Love it on hot buttered toast.",
  },
  {
    slug: "grass-milk",
    name: "Grass Milk",
    price: 10.5,
    categories: ["health"],
    images: ["milk-tub", "yogurt-pack"],
    weight: "680 g",
    origin: "Organic farms",
    summary: "Creamy whole-milk vanilla yogurt from grass-fed cows. No added grain feed.",
  },
  {
    slug: "yogurt-strawberry",
    name: "Yogurt Strawberry",
    price: 12,
    regularPrice: 14.05,
    categories: ["health", "trending"],
    images: ["yogurt-pack", "milk-tub"],
    inStock: false,
    weight: "4 × 125 g",
    origin: "Dairy co-op",
    summary: "Four live-culture strawberry yogurts with real fruit pieces.",
  },
  {
    slug: "green-beans-1-kg",
    name: "Green beans – 1 Kg",
    price: 21.05,
    regularPrice: 25,
    categories: ["fresh-chilled-food", "vegetables"],
    images: ["green-beans"],
    weight: "1 kg",
    origin: "Kenya",
    summary: "Tender, hand-picked green beans that stay bright and snappy when steamed.",
  },
  {
    slug: "chocolate-bar",
    name: "Chocolate Bar",
    price: 4,
    categories: ["health", "trending"],
    images: ["chocolate-bar", "chocolate-box"],
    rating: 4,
    weight: "200 g",
    origin: "Belgium",
    summary: "Smooth milk chocolate loaded with whole roasted hazelnuts.",
  },
  {
    slug: "fruit-nut-chocolate",
    name: "Fruit & Nut Chocolate",
    price: 14.05,
    regularPrice: 21.05,
    categories: ["trending"],
    images: ["chocolate-box", "chocolate-bar"],
    rating: 4,
    weight: "24 × 40 g",
    origin: "Belgium",
    summary: "A sharing box of milk chocolate bars with raisins and almonds.",
  },
  {
    slug: "barista-milk",
    name: "Barista Milk",
    price: 21.05,
    categories: ["tea-coffee"],
    images: ["milk-carton"],
    rating: 4,
    weight: "6 × 1 L",
    origin: "Denmark",
    summary: "A creamy milk made for frothing: silky microfoam for lattes and flat whites.",
  },
  {
    slug: "black-tea",
    name: "Black tea",
    price: 14.1,
    categories: ["tea-coffee"],
    images: ["tea-box"],
    weight: "100 bags",
    origin: "Sri Lanka",
    summary: "A bright, full-bodied everyday blend. Perfect with a splash of milk.",
  },
  {
    slug: "popcorn",
    name: "PopCorn",
    price: 3,
    categories: ["trending"],
    images: ["popcorn"],
    weight: "250 g",
    origin: "USA",
    summary: "Fluffy, lightly salted popcorn: cinema-style at home.",
  },
  {
    slug: "eggs-table-tray",
    name: "Eggs – Table Tray",
    price: 21.05,
    categories: ["fresh-chilled-food"],
    images: ["eggs"],
    rating: 4,
    weight: "30 eggs",
    origin: "Free-range farm",
    summary: "A tray of thirty free-range eggs with rich, golden yolks.",
  },
  {
    slug: "classic-pint-beer",
    name: "Classic Pint Beer",
    price: 21.05,
    regularPrice: 25,
    categories: ["beer", "wine"],
    images: ["beer-can"],
    rating: 4,
    weight: "12 × 330 ml",
    origin: "Craft brewery",
    summary: "A zesty lemon shandy in handy cans: light, sparkling and refreshing.",
  },
  {
    slug: "fresh-banana",
    name: "Fresh Banana",
    price: 14.05,
    categories: ["fruits"],
    images: ["banana"],
    weight: "1 kg",
    origin: "Ecuador",
    summary: "Sweet, naturally ripened bananas, perfect for snacking and smoothies.",
  },
  {
    slug: "fresh-onions",
    name: "Fresh Onions",
    price: 18.25,
    regularPrice: 25,
    categories: ["vegetables"],
    images: ["onions"],
    weight: "2 kg",
    origin: "Spain",
    summary: "Firm brown onions with a mellow sweetness once caramelised.",
  },
];

export const products = raw.map((p, index) => ({
  id: index + 1,
  inStock: true,
  rating: 0,
  regularPrice: null,
  ...p,
  onSale: p.regularPrice != null && p.regularPrice > p.price,
  images: p.images.map(img),
  description: [
    `${p.summary} We source it carefully and keep it at its best from the shelf to your kitchen, so every order arrives fresh and ready to enjoy.`,
    "Store in a cool, dry place unless the label says otherwise, and check the pack for full ingredient and allergen information. Delivery slots are available seven days a week.",
  ],
  details: [
    "Carefully selected for freshness and flavour.",
    "Packed to keep its quality during delivery.",
    "Covered by our 15-day return promise.",
  ],
}));

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsBySlugs(slugs) {
  return slugs.map(getProduct).filter(Boolean);
}

export function getProductsByCategory(slug) {
  return products.filter((p) => p.categories.includes(slug));
}

export function getRelatedProducts(product, limit = 4) {
  const related = products.filter(
    (p) => p.slug !== product.slug && p.categories.some((c) => product.categories.includes(c))
  );
  const fill = products.filter((p) => p.slug !== product.slug && !related.includes(p));
  return [...related, ...fill].slice(0, limit);
}

export function searchProducts(query = "", category = "") {
  const q = query.trim().toLowerCase();
  return products.filter((p) => {
    if (category && !p.categories.includes(category)) return false;
    if (!q) return true;
    return p.name.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q);
  });
}

export const priceBounds = {
  min: Math.floor(Math.min(...products.map((p) => p.price))),
  max: Math.ceil(Math.max(...products.map((p) => p.price))),
};
