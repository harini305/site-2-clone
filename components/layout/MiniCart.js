"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiShoppingBag, PiX } from "react-icons/pi";
import { cartCount, cartLines, removeFromCart, useStore } from "@/lib/store";
import { formatPrice } from "@/lib/format";
import Button from "@/components/ui/Button";
import styles from "./MiniCart.module.css";

export default function MiniCart() {
  const { cart } = useStore();
  const [open, setOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(null);
  const pathname = usePathname();
  const ref = useRef(null);
  const id = useId();
  const lines = cartLines(cart);
  const count = cartCount(cart);
  const subtotal = lines.reduce((s, l) => s + l.total, 0);

  // Close the dropdown whenever the route changes.
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
      >
        <PiShoppingBag aria-hidden="true" />
        <span className={styles.count} aria-hidden="true">
          {count}
        </span>
      </button>

      <div id={id} className={`${styles.panel} ${open ? styles.open : ""}`} hidden={!open}>
        {lines.length === 0 ? (
          <div className={styles.empty}>
            <PiShoppingBag aria-hidden="true" />
            <p>Your cart is currently empty.</p>
            <Button href="/products" size="sm">
              Return to shop
            </Button>
          </div>
        ) : (
          <>
            <p className={styles.heading}>Shopping Cart ({count})</p>
            <ul className={styles.list}>
              {lines.map((l) => (
                <li key={l.slug} className={styles.line}>
                  <Image src={l.product.images[0]} alt="" width={56} height={56} />
                  <div>
                    <Link href={`/product/${l.slug}`} className={styles.name}>
                      {l.product.name}
                    </Link>
                    <p className={styles.meta}>
                      {l.qty} × {formatPrice(l.product.price)}
                    </p>
                  </div>
                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() => removeFromCart(l.slug)}
                    aria-label={`Remove ${l.product.name} from cart`}
                  >
                    <PiX aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
            <p className={styles.subtotal}>
              <span>Subtotal:</span> <strong>{formatPrice(subtotal)}</strong>
            </p>
            <div className={styles.buttons}>
              <Button href="/cart" variant="outline" size="sm">
                View cart
              </Button>
              <Button href="/checkout" size="sm">
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
