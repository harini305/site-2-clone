"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiShoppingBag, PiX } from "react-icons/pi";
import { cartLines, removeFromCart, setCartQty, toast, useStore } from "@/lib/store";
import { formatPrice } from "@/lib/format";
import Button from "@/components/ui/Button";
import QuantityInput from "@/components/ui/QuantityInput";
import CartTotals, { getTotals } from "./CartTotals";
import styles from "./Cart.module.css";

export function EmptyCart({ message = "Your cart is currently empty." }) {
  return (
    <div className={styles.empty}>
      <PiShoppingBag aria-hidden="true" />
      <p>{message}</p>
      <Button href="/products">Return to shop</Button>
    </div>
  );
}

export default function CartView() {
  const { cart } = useStore();
  const [coupon, setCoupon] = useState("");
  const lines = cartLines(cart);

  if (lines.length === 0) return <EmptyCart />;
  const totals = getTotals(lines);

  return (
    <div className={styles.layout}>
      <div>
        <table className={styles.table}>
          <caption className="visually-hidden">Items in your cart</caption>
          <thead>
            <tr>
              <th scope="col">
                <span className="visually-hidden">Remove</span>
              </th>
              <th scope="col" colSpan={2}>
                Product
              </th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((l) => (
              <tr key={l.slug}>
                <td className={styles.removeCell}>
                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() => removeFromCart(l.slug)}
                    aria-label={`Remove ${l.product.name} from cart`}
                  >
                    <PiX aria-hidden="true" />
                  </button>
                </td>
                <td className={styles.thumbCell}>
                  <Image src={l.product.images[0]} alt="" width={80} height={80} />
                </td>
                <td className={styles.nameCell}>
                  <Link href={`/product/${l.slug}`}>{l.product.name}</Link>
                </td>
                <td data-label="Price">{formatPrice(l.product.price)}</td>
                <td data-label="Quantity">
                  <QuantityInput
                    value={l.qty}
                    onChange={(n) => setCartQty(l.slug, n)}
                    label={`${l.product.name} quantity`}
                  />
                </td>
                <td data-label="Subtotal" className={styles.lineTotal}>
                  {formatPrice(l.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <form
          className={styles.coupon}
          onSubmit={(e) => {
            e.preventDefault();
            if (!coupon.trim()) {
              toast("Please enter a coupon code.", "error");
              return;
            }
            toast(`Coupon “${coupon.trim()}” is not valid. (Demo store: no coupons are active.)`, "error");
          }}
        >
          <label htmlFor="coupon" className="visually-hidden">
            Coupon code
          </label>
          <input
            id="coupon"
            className="field"
            placeholder="Coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <Button type="submit" variant="dark">
            Apply coupon
          </Button>
        </form>
      </div>

      <aside className={styles.totals} aria-labelledby="cart-totals-title">
        <h2 id="cart-totals-title">Cart totals</h2>
        <CartTotals totals={totals} className={styles.totalsTable} />
        <Button href="/checkout" size="lg" className={styles.checkoutBtn}>
          Proceed to checkout
        </Button>
      </aside>
    </div>
  );
}
