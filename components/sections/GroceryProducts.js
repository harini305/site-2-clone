"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { groceryTabs } from "@/lib/data/home";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./GroceryProducts.module.css";

// Filterable product grid ("Grocery Products"): products are passed in from the server.
export default function GroceryProducts({ products }) {
  const [tab, setTab] = useState("all");
  const gridRef = useRef(null);
  const tabRefs = useRef([]);

  const visible = tab === "all" ? products : products.filter((p) => p.categories.includes(tab));

  const animateNext = useRef(false);

  // Animate the newly filtered cards once React has committed them.
  useEffect(() => {
    if (!animateNext.current || !gridRef.current) return;
    animateNext.current = false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 24, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.05, ease: "power2.out", clearProps: "transform" }
    );
  }, [tab]);

  const select = (slug) => {
    if (slug === tab) return;
    animateNext.current = true;
    setTab(slug);
  };

  const onKeyDown = (e, index) => {
    let next = null;
    if (e.key === "ArrowRight") next = (index + 1) % groceryTabs.length;
    if (e.key === "ArrowLeft") next = (index - 1 + groceryTabs.length) % groceryTabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = groceryTabs.length - 1;
    if (next !== null) {
      e.preventDefault();
      tabRefs.current[next]?.focus();
      select(groceryTabs[next].slug);
    }
  };

  return (
    <section className={`container page-section ${styles.section}`} aria-labelledby="grocery-title">
      <SectionHeading
        id="grocery-title"
        action={
          <div role="tablist" aria-label="Filter grocery products" className={styles.tabs}>
            {groceryTabs.map((t, i) => (
              <button
                key={t.slug}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`grocery-tab-${t.slug}`}
                aria-selected={tab === t.slug}
                aria-controls="grocery-panel"
                tabIndex={tab === t.slug ? 0 : -1}
                className={tab === t.slug ? styles.active : undefined}
                onClick={() => select(t.slug)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                {t.label}
              </button>
            ))}
          </div>
        }
      >
        Grocery Products
      </SectionHeading>

      <div
        id="grocery-panel"
        role="tabpanel"
        aria-labelledby={`grocery-tab-${tab}`}
        className={styles.grid}
        ref={gridRef}
      >
        {visible.map((p) => (
          <div key={p.slug} data-reveal="up">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
