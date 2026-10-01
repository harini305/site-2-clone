export const categories = [
  { slug: "beer", name: "Beer" },
  { slug: "fresh-chilled-food", name: "Fresh & Chilled Food" },
  { slug: "fruits", name: "Fruits" },
  { slug: "health", name: "Health" },
  { slug: "meat", name: "Meat" },
  { slug: "tea-coffee", name: "Tea, Coffee" },
  { slug: "trending", name: "Trending" },
  { slug: "vegetables", name: "Vegetables" },
  { slug: "wine", name: "Wine" },
];

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}
