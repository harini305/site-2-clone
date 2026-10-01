import { priceBounds } from "@/lib/data/products";

export const PAGE_SIZE = 12;

export const sortOptions = [
  { value: "", label: "Default" },
  { value: "popularity", label: "Popularity" },
  { value: "rating", label: "Average rating" },
  { value: "price", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

// Normalises raw searchParams into a safe listing query.
export function parseListingQuery(searchParams = {}) {
  const num = (v, fallback) => {
    const n = Number(Array.isArray(v) ? v[0] : v);
    return Number.isFinite(n) && v !== undefined && v !== "" ? n : fallback;
  };
  const str = (v) => (Array.isArray(v) ? v[0] : v) || "";
  const sort = str(searchParams.sort);
  return {
    sort: sortOptions.some((o) => o.value === sort) ? sort : "",
    min: Math.max(priceBounds.min, num(searchParams.min_price, priceBounds.min)),
    max: Math.min(priceBounds.max, num(searchParams.max_price, priceBounds.max)),
    page: Math.max(1, Math.floor(num(searchParams.page, 1))),
    minSet: str(searchParams.min_price) !== "",
    maxSet: str(searchParams.max_price) !== "",
  };
}

export function applyListingQuery(list, { sort, min, max, page }) {
  let items = list.filter((p) => p.price >= min && p.price <= max);
  if (sort === "price") items = [...items].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") items = [...items].sort((a, b) => b.price - a.price);
  if (sort === "rating") items = [...items].sort((a, b) => b.rating - a.rating);
  if (sort === "popularity") items = [...items].sort((a, b) => Number(b.onSale) - Number(a.onSale) || b.rating - a.rating);
  const total = items.length;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const current = Math.min(page, pages);
  return {
    items: items.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE),
    total,
    pages,
    page: current,
  };
}

// Builds a URL for the listing keeping the existing query params.
export function listingHref(basePath, params, overrides = {}) {
  const merged = { ...params, ...overrides };
  const qs = new URLSearchParams();
  Object.entries(merged).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "" && !(k === "page" && Number(v) === 1)) qs.set(k, String(v));
  });
  const s = qs.toString();
  return s ? `${basePath}?${s}` : basePath;
}
