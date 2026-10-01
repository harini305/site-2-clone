import Link from "next/link";
import { PiMagnifyingGlass } from "react-icons/pi";
import { categories } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";
import SectionHeading from "@/components/ui/SectionHeading";
import PriceFilter from "./PriceFilter";
import styles from "./ShopSidebar.module.css";

export default function ShopSidebar({ activeCategory, basePath, query, keepParams }) {
  return (
    <aside className={styles.sidebar} aria-label="Shop filters">
      <div className={styles.block}>
        <SectionHeading as="h2" accent="red" size="sm">
          Search
        </SectionHeading>
        <form action="/search" role="search" className={styles.search}>
          <label htmlFor="sidebar-search" className="visually-hidden">
            Search products
          </label>
          <input
            id="sidebar-search"
            name="s"
            type="search"
            placeholder="Search Products..."
            defaultValue={keepParams.s || ""}
            className={styles.input}
          />
          <button type="submit" className={styles.searchBtn}>
            Search <PiMagnifyingGlass aria-hidden="true" />
          </button>
        </form>
      </div>

      <div className={styles.block}>
        <SectionHeading as="h2" accent="red" size="sm">
          Filter By Price
        </SectionHeading>
        <PriceFilter key={`${basePath}-${query.min}-${query.max}`} basePath={basePath} min={query.min} max={query.max} sort={query.sort} keepParams={keepParams} />
      </div>

      <div className={styles.block}>
        <SectionHeading as="h2" accent="red" size="sm">
          Category
        </SectionHeading>
        <ul className={styles.cats}>
          {categories.map((c) => {
            const active = c.slug === activeCategory;
            return (
              <li key={c.slug}>
                <Link
                  href={`/product-category/${c.slug}`}
                  className={active ? styles.activeCat : undefined}
                  aria-current={active ? "page" : undefined}
                >
                  <span className={styles.box} aria-hidden="true" />
                  <span className={styles.catName}>{c.name}</span>
                  <span className={styles.catCount}>({getProductsByCategory(c.slug).length})</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
