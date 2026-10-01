import { getCategory } from "@/lib/data/categories";
import { searchProducts } from "@/lib/data/products";
import { applyListingQuery, parseListingQuery } from "@/lib/shop";
import ShopLayout from "@/components/shop/ShopLayout";

export async function generateMetadata({ searchParams }) {
  const { s = "" } = await searchParams;
  const term = String(s).trim();
  return {
    title: term ? `Search results for “${term}”` : "Search",
    robots: { index: false },
  };
}

export default async function SearchPage({ searchParams }) {
  const raw = await searchParams;
  const term = String(raw.s || "").trim().slice(0, 80);
  const category = getCategory(String(raw.category || "")) ? String(raw.category) : "";
  const query = parseListingQuery(raw);
  const result = applyListingQuery(searchProducts(term, category), query);
  const label = term ? `Results for “${term}”` : "All products";

  return (
    <ShopLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Search", href: "/products" }, { label }]}
      basePath="/search"
      keepParams={{ s: term, category }}
      activeCategory={category}
      query={query}
      result={result}
      emptyMessage={`Sorry, nothing matched “${term}”. Try a different keyword or browse a category.`}
    />
  );
}
