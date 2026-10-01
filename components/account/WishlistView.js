"use client";

import Image from "next/image";
import Link from "next/link";
import { PiHeart, PiX } from "react-icons/pi";
import { getProduct } from "@/lib/data/products";
import { toggleWishlist, useStore } from "@/lib/store";
import Price from "@/components/ui/Price";
import Button from "@/components/ui/Button";
import AddToCartButton from "@/components/ui/AddToCartButton";
import styles from "./Wishlist.module.css";

export default function WishlistView() {
  const { wishlist } = useStore();
  const items = wishlist.map(getProduct).filter(Boolean);

  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <caption className="visually-hidden">Products in your wishlist</caption>
        <thead>
          <tr>
            <th scope="col">
              <span className="visually-hidden">Remove</span>
            </th>
            <th scope="col" colSpan={2}>
              Product
            </th>
            <th scope="col">Price</th>
            <th scope="col">Stock status</th>
            <th scope="col">
              <span className="visually-hidden">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan={6} className={styles.emptyCell}>
                <PiHeart aria-hidden="true" />
                <p>No products added to the wishlist yet.</p>
                <Button href="/products" size="sm">
                  Browse products
                </Button>
              </td>
            </tr>
          ) : (
            items.map((p) => (
              <tr key={p.slug}>
                <td className={styles.removeCell}>
                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() => toggleWishlist(p.slug)}
                    aria-label={`Remove ${p.name} from wishlist`}
                  >
                    <PiX aria-hidden="true" />
                  </button>
                </td>
                <td className={styles.thumbCell}>
                  <Image src={p.images[0]} alt="" width={80} height={80} />
                </td>
                <td className={styles.nameCell}>
                  <Link href={`/product/${p.slug}`}>{p.name}</Link>
                </td>
                <td data-label="Price">
                  <Price product={p} className={styles.price} />
                </td>
                <td data-label="Stock" className={p.inStock ? styles.in : styles.out}>
                  {p.inStock ? "In stock" : "Out of stock"}
                </td>
                <td className={styles.actionCell}>
                  <AddToCartButton product={p} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
