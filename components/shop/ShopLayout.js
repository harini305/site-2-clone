import { Suspense } from "react";
import Link from "next/link";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { listingHref } from "@/lib/shop";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductCard from "@/components/ui/ProductCard";
import ShopSidebar from "./ShopSidebar";
import SortSelect from "./SortSelect";
import styles from "./ShopLayout.module.css";

// Shared listing page: sidebar + breadcrumb/sort toolbar + product grid + pagination.
export default function ShopLayout({
  breadcrumbs,
  basePath,
  query,
  result,
  activeCategory,
  keepParams = {},
  emptyMessage = "No products were found matching your selection.",
}) {
  const params = {
    ...keepParams,
    sort: query.sort,
    min_price: query.minSet ? query.min : undefined,
    max_price: query.maxSet ? query.max : undefined,
  };

  return (
    <div className={`container page-top ${styles.layout}`}>
      <ShopSidebar activeCategory={activeCategory} basePath={basePath} query={query} keepParams={keepParams} />

      <div className={styles.main}>
        <div className={styles.toolbar}>
          <Breadcrumbs items={breadcrumbs} />
          <Suspense fallback={null}>
            <SortSelect value={query.sort} />
          </Suspense>
        </div>

        <p className={styles.count} aria-live="polite">
          {result.total === 0
            ? "No results"
            : `Showing ${(result.page - 1) * 12 + 1}–${(result.page - 1) * 12 + result.items.length} of ${result.total} result${result.total === 1 ? "" : "s"}`}
        </p>

        {result.items.length === 0 ? (
          <div className={styles.empty}>
            <p>{emptyMessage}</p>
            <Link href="/products">Browse all products</Link>
          </div>
        ) : (
          <ul className={styles.grid}>
            {result.items.map((p) => (
              <li key={p.slug} data-reveal="up">
                <ProductCard product={p} variant="shop" headingLevel={2} />
              </li>
            ))}
          </ul>
        )}

        {result.pages > 1 ? (
          <nav aria-label="Pagination" className={styles.pagination}>
            {result.page > 1 ? (
              <Link href={listingHref(basePath, params, { page: result.page - 1 })} aria-label="Previous page">
                <PiCaretLeft aria-hidden="true" />
              </Link>
            ) : null}
            {Array.from({ length: result.pages }, (_, i) => i + 1).map((n) =>
              n === result.page ? (
                <span key={n} aria-current="page" className={styles.currentPage}>
                  {n}
                </span>
              ) : (
                <Link key={n} href={listingHref(basePath, params, { page: n })} aria-label={`Page ${n}`}>
                  {n}
                </Link>
              )
            )}
            {result.page < result.pages ? (
              <Link href={listingHref(basePath, params, { page: result.page + 1 })} aria-label="Next page">
                <PiCaretRight aria-hidden="true" />
              </Link>
            ) : null}
          </nav>
        ) : null}
      </div>
    </div>
  );
}
