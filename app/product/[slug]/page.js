import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory } from "@/lib/data/categories";
import { getProduct, getRelatedProducts, products } from "@/lib/data/products";
import Price from "@/components/ui/Price";
import Rating from "@/components/ui/Rating";
import ProductCard from "@/components/ui/ProductCard";
import ProductGallery from "@/components/product/ProductGallery";
import ProductPurchase from "@/components/product/ProductPurchase";
import ProductTabs from "@/components/product/ProductTabs";
import styles from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Page not found" };
  return {
    title: product.name,
    description: product.summary,
    openGraph: { title: product.name, description: product.summary },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product);

  return (
    <div className="page-top">
      <div className={`container ${styles.top}`}>
        <ProductGallery images={product.images} name={product.name} />
        <div className={styles.info} data-reveal="right">
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.cats}>
            <span className={styles.catLabel}>{product.categories.length > 1 ? "Categories" : "Category"}</span>
            {product.categories.map((c, i) => (
              <span key={c}>
                {i > 0 ? ", " : null}
                <Link href={`/product-category/${c}`}>{getCategory(c)?.name}</Link>
              </span>
            ))}
          </p>
          {product.rating ? (
            <p className={styles.rating}>
              <Rating value={product.rating} /> <span>{product.rating}.0 average rating</span>
            </p>
          ) : null}
          <Price product={product} size="lg" saleFirst className={styles.price} />
          <p className={styles.summary}>{product.summary}</p>
          <p className={product.inStock ? styles.inStock : styles.outStock}>
            {product.inStock ? "In stock" : "Out of stock"}
          </p>
          <ProductPurchase product={product} />
        </div>
      </div>

      <ProductTabs product={product} />

      <section className={`container ${styles.related}`} aria-labelledby="related-title">
        <h2 id="related-title" className={styles.relatedTitle} data-reveal="up">
          Related Products
        </h2>
        <ul className={styles.relatedGrid}>
          {related.map((p) => (
            <li key={p.slug} data-reveal="up">
              <ProductCard product={p} variant="related" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
