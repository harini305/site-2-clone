import { notFound } from "next/navigation";
import { categories, getCategory } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";
import { applyListingQuery, parseListingQuery } from "@/lib/shop";
import ShopLayout from "@/components/shop/ShopLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Page not found" };
  return {
    title: category.name,
    description: `Shop ${category.name.toLowerCase()} products at great prices.`,
  };
}

export default async function CategoryPage({ params, searchParams }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const query = parseListingQuery(await searchParams);
  const result = applyListingQuery(getProductsByCategory(slug), query);
  return (
    <ShopLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: category.name },
      ]}
      basePath={`/product-category/${slug}`}
      activeCategory={slug}
      query={query}
      result={result}
    />
  );
}
