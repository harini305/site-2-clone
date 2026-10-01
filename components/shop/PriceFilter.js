"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { priceBounds } from "@/lib/data/products";
import { listingHref } from "@/lib/shop";
import { formatPrice } from "@/lib/format";
import styles from "./PriceFilter.module.css";

// Dual-thumb price slider built from two native range inputs.
export default function PriceFilter({ basePath, min, max, sort, keepParams }) {
  const router = useRouter();
  const [lo, setLo] = useState(min);
  const [hi, setHi] = useState(max);
  const span = priceBounds.max - priceBounds.min;
  const pct = (v) => ((v - priceBounds.min) / span) * 100;

  const apply = (e) => {
    e.preventDefault();
    router.push(listingHref(basePath, { ...keepParams, sort, min_price: lo, max_price: hi }));
  };

  return (
    <form className={styles.form} onSubmit={apply}>
      <div className={styles.values} aria-hidden="true">
        <span>{formatPrice(lo).replace(".00", "")}</span>
        <span>{formatPrice(hi).replace(".00", "")}</span>
      </div>
      <div className={styles.slider}>
        <div className={styles.track} />
        <div className={styles.range} style={{ left: `${pct(lo)}%`, right: `${100 - pct(hi)}%` }} />
        <input
          type="range"
          min={priceBounds.min}
          max={priceBounds.max}
          step={1}
          value={lo}
          onChange={(e) => setLo(Math.min(Number(e.target.value), hi - 1))}
          aria-label="Minimum price"
          aria-valuetext={formatPrice(lo)}
        />
        <input
          type="range"
          min={priceBounds.min}
          max={priceBounds.max}
          step={1}
          value={hi}
          onChange={(e) => setHi(Math.max(Number(e.target.value), lo + 1))}
          aria-label="Maximum price"
          aria-valuetext={formatPrice(hi)}
        />
      </div>
      <button type="submit" className={styles.apply}>
        Filter
      </button>
    </form>
  );
}
