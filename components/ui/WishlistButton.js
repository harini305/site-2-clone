"use client";

import { PiHeart, PiHeartFill } from "react-icons/pi";
import { toggleWishlist, useStore } from "@/lib/store";
import styles from "./WishlistButton.module.css";

export default function WishlistButton({ slug, name, withLabel = false, className = "" }) {
  const { wishlist } = useStore();
  const active = wishlist.includes(slug);
  return (
    <button
      type="button"
      className={`${styles.btn} ${active ? styles.active : ""} ${withLabel ? styles.labelled : ""} ${className}`}
      onClick={() => toggleWishlist(slug)}
      aria-pressed={active}
      aria-label={withLabel ? undefined : `${active ? "Remove" : "Add"} ${name} ${active ? "from" : "to"} wishlist`}
    >
      {withLabel ? <span>{active ? "In your wishlist" : "Add to wishlist"}</span> : null}
      {active ? <PiHeartFill aria-hidden="true" /> : <PiHeart aria-hidden="true" />}
    </button>
  );
}
