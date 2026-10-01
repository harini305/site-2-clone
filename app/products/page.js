import { products } from "@/lib/data/products";
import { applyListingQuery, parseListingQuery } from "@/lib/shop";
import ShopLayout from "@/components/shop/ShopLayout";

export const metadata = {
  title: "Products",
  description: "Browse every product in the store: fresh food, bakery, drinks, snacks and more.",
};

export default async function ProductsPage({ searchParams }) {
  const query = parseListingQuery(await searchParams);
  const result = applyListingQuery(products, query);
  return (
    <ShopLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      basePath="/products"
      query={query}
      result={result}
    />
  );
}
