"use client";

import { useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PiCaretDown, PiMagnifyingGlass } from "react-icons/pi";
import { categories } from "@/lib/data/categories";
import { searchProducts } from "@/lib/data/products";
import { formatPrice } from "@/lib/format";
import styles from "./HeaderSearch.module.css";

export default function HeaderSearch() {
  const router = useRouter();
  const id = useId();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrapRef = useRef(null);

  const results = useMemo(
    () => (query.trim().length >= 2 ? searchProducts(query, cat).slice(0, 5) : []),
    [query, cat]
  );
  const showList = open && query.trim().length >= 2;

  const submit = (e) => {
    e.preventDefault();
    if (active >= 0 && results[active]) {
      router.push(`/product/${results[active].slug}`);
    } else {
      const params = new URLSearchParams();
      params.set("s", query.trim());
      if (cat) params.set("category", cat);
      router.push(`/search?${params}`);
    }
    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (!showList) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(results.length - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(-1, a - 1));
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div
      className={styles.wrap}
      ref={wrapRef}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <form role="search" className={styles.form} onSubmit={submit} action="/search">
        <label htmlFor={`${id}-q`} className="visually-hidden">
          Search products
        </label>
        <input
          id={`${id}-q`}
          name="s"
          type="search"
          className={styles.input}
          placeholder="Search..."
          autoComplete="off"
          value={query}
          role="combobox"
          aria-expanded={showList}
          aria-controls={`${id}-list`}
          aria-autocomplete="list"
          aria-activedescendant={active >= 0 ? `${id}-opt-${active}` : undefined}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActive(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
        />
        <div className={styles.selectWrap}>
          <label htmlFor={`${id}-c`} className="visually-hidden">
            Category
          </label>
          <select
            id={`${id}-c`}
            name="category"
            className={styles.select}
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
          <PiCaretDown aria-hidden="true" className={styles.caret} />
        </div>
        <button type="submit" className={styles.submit} aria-label="Search">
          <PiMagnifyingGlass aria-hidden="true" />
        </button>
      </form>

      {showList ? (
        <div className={styles.panel}>
          <ul id={`${id}-list`} role="listbox" aria-label="Product suggestions">
            {results.map((p, i) => (
              <li key={p.slug} id={`${id}-opt-${i}`} role="option" aria-selected={i === active}>
                <Link
                  href={`/product/${p.slug}`}
                  className={`${styles.item} ${i === active ? styles.activeItem : ""}`}
                  onClick={() => setOpen(false)}
                >
                  <Image src={p.images[0]} alt="" width={44} height={44} />
                  <span className={styles.itemName}>{p.name}</span>
                  <span className={styles.itemPrice}>{formatPrice(p.price)}</span>
                </Link>
              </li>
            ))}
          </ul>
          {results.length === 0 ? (
            <p className={styles.empty}>No products match “{query.trim()}”.</p>
          ) : (
            <button type="button" className={styles.all} onClick={submit}>
              View all results
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}
