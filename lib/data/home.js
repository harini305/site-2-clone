// Homepage content: banners and the product lists shown in each section.
export const heroBanners = {
  oils: {
    badge: "%30 OFF",
    eyebrow: "The Fit Kitchen",
    title: "Natural Oils",
    cta: { label: "Shop Now", href: "/products" },
    image: "/images/products/olive-oil.webp",
    alt: "A glass bottle of golden oil with a small dish of oil",
  },
  organic: {
    badge: "%15 OFF",
    eyebrow: "One Day Delivery",
    title: "Eat Organic",
    cta: { label: "Shop Now", href: "/products" },
    image: "/images/banners/breads.webp",
    alt: "Two freshly baked loaves of bread",
  },
  popcorn: {
    badge: "%30 OFF",
    eyebrow: "it's time to",
    title: "Big Popcorn",
    cta: { label: "Shop Now", href: "/product/popcorn" },
    image: "/images/products/popcorn.webp",
    alt: "A heap of freshly popped popcorn",
  },
};

export const specialOffers = ["funnel-ice-cream", "paprika-crisps"];

export const groceryTabs = [
  { label: "All", slug: "all" },
  { label: "Health", slug: "health" },
  { label: "Meat", slug: "meat" },
  { label: "Tea, Coffee", slug: "tea-coffee" },
  { label: "Trending", slug: "trending" },
  { label: "Vegetables", slug: "vegetables" },
];

export const groceryProducts = [
  "whole-wheat-bread",
  "classic-instant-coffee",
  "french-fries",
  "funnel-ice-cream",
  "paprika-crisps",
  "chocolate-cake",
  "chocolate-donut",
  "extra-virgin-olive-oil",
  "grass-milk",
  "yogurt-strawberry",
];

export const promoTiles = [
  {
    title: "Sunflower",
    text: "Up to 30% Off",
    href: "/products",
    image: "/images/banners/sunflower-seeds.webp",
    alt: "Black sunflower seeds",
    theme: "orange",
  },
  {
    title: "Snacks",
    text: "Minimum 20% Off",
    href: "/product-category/trending",
    image: "/images/products/paprika-crisps.webp",
    image2: "/images/products/fruit-nut-chocolate.webp",
    alt: "Ridged potato crisps and chocolate nut bars",
    theme: "dark",
  },
  {
    title: "Coffee",
    text: "Minimum 30% Off",
    href: "/product-category/tea-coffee",
    image: "/images/products/coffee-cup.webp",
    image2: "/images/banners/coffee-beans.webp",
    alt: "A cup of black coffee with roasted coffee beans",
    theme: "red",
  },
];

export const trendingProducts = [
  "funnel-ice-cream",
  "paprika-crisps",
  "chocolate-cake",
  "chocolate-donut",
  "extra-virgin-olive-oil",
  "fruit-nut-chocolate",
  "popcorn",
  "yogurt-strawberry",
];

export const bestOffers = [
  "whole-wheat-bread",
  "yeast-extract-spread",
  "grass-milk",
  "yogurt-strawberry",
  "chocolate-bar",
];

export const imageBanners = [
  {
    label: ["Most", "Popular"],
    href: "/product-category/trending",
    image: "/images/banners/pexels-3962285.jpg",
    alt: "A shopper choosing a lemon in a supermarket aisle",
    theme: "red",
  },
  {
    label: ["Special", "Offers"],
    href: "/products?sort=price",
    image: "/images/banners/pexels-3167310.jpg",
    alt: "Wooden shelves stocked with snacks and sauces",
    theme: "yellow",
  },
];

export const topSavers = [
  "whole-wheat-bread",
  "french-fries",
  "green-beans-1-kg",
  "eggs-table-tray",
  "fresh-banana",
];
