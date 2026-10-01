// Store-wide settings. Rename the brand or contact details here.
export const site = {
  name: "Cartly",
  tagline: "Grocery Shop",
  title: "Cartly Grocery Shop",
  description:
    "Fresh groceries, pantry staples and everyday essentials delivered to your door. Browse fresh & chilled food, bakery, drinks, health and more.",
  currency: "USD",
  freeShippingThreshold: 150,
  flatShipping: 5,
  contact: {
    address: ["34 Hamston, Times", "Avenue NY"],
    phones: ["+1-555-0142-77", "+1-555-0198-05"],
    emails: ["hello@cartly.example", "orders@cartly.example"],
    mapQuery: "Times Square, New York, NY",
  },
  socials: [
    { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/" },
    { name: "Twitter", icon: "twitter", href: "https://twitter.com/" },
    { name: "Pinterest", icon: "pinterest", href: "https://www.pinterest.com/" },
    { name: "YouTube", icon: "youtube", href: "https://www.youtube.com/" },
    { name: "Google", icon: "google", href: "https://www.google.com/" },
  ],
};

// Header utility links (top-right of the header).
export const utilityLinks = [
  { label: "Our Stores", href: "/products" },
  { label: "Help Center", href: "/contact" },
];

// Department bar under the header. Departments without their own category in
// the catalogue point to the full shop, rather than to invented routes.
export const departments = [
  { label: "Fresh & Chilled Food", icon: "fresh", href: "/product-category/fresh-chilled-food" },
  { label: "Food Cupboard", icon: "cupboard", href: "/products" },
  { label: "Bakery", icon: "bakery", href: "/products" },
  { label: "Frozen Food", icon: "frozen", href: "/products" },
  { label: "Tea & Coffee", icon: "tea", href: "/product-category/tea-coffee" },
  { label: "Beer, Wine", icon: "beer", href: "/product-category/beer" },
  { label: "Health, Beauty", icon: "health", href: "/product-category/health" },
  { label: "Home Care & Cleaning", icon: "home", href: "/products" },
];

export const features = [
  { icon: "truck", title: "Free Shipping", text: "Free delivery on orders over $150" },
  { icon: "cart", title: "Best Deal Online", text: "Fresh prices on everyday essentials." },
  { icon: "return", title: "15 Days Return", text: "Easy returns within fifteen days." },
  { icon: "card", title: "Secure Payment", text: "Encrypted, trusted checkout." },
];
