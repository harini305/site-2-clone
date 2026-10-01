"use client";

import { useState } from "react";
import { PiCheckBold } from "react-icons/pi";
import { addToCart } from "@/lib/store";
import Button from "./Button";

export default function AddToCartButton({ product, qty = 1, variant = "pill", size, className = "" }) {
  const [added, setAdded] = useState(false);

  if (!product.inStock) {
    return (
      <Button variant={variant} size={size} className={className} href={`/product/${product.slug}`}>
        Read more
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => {
        addToCart(product.slug, qty);
        setAdded(true);
        setTimeout(() => setAdded(false), 1600);
      }}
      aria-label={`Add ${product.name} to cart`}
    >
      {added ? <PiCheckBold aria-hidden="true" /> : null}
      {added ? "Added" : "Add to cart"}
    </Button>
  );
}
