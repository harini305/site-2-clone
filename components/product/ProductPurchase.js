"use client";

import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaPinterest, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { PiLinkSimple, PiShareNetwork } from "react-icons/pi";
import { addToCart, toast } from "@/lib/store";
import Button from "@/components/ui/Button";
import QuantityInput from "@/components/ui/QuantityInput";
import WishlistButton from "@/components/ui/WishlistButton";
import styles from "./ProductPurchase.module.css";

export default function ProductPurchase({ product }) {
  const [qty, setQty] = useState(1);
  const [shareOpen, setShareOpen] = useState(false);
  const [url, setUrl] = useState("");
  const shareRef = useRef(null);

  useEffect(() => {
    if (!shareOpen) return;
    const onDoc = (e) => {
      if (!shareRef.current?.contains(e.target)) setShareOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setShareOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [shareOpen]);

  const enc = encodeURIComponent(url);
  const text = encodeURIComponent(product.name);
  const shares = [
    { name: "Facebook", Icon: FaFacebookF, href: `https://www.facebook.com/sharer/sharer.php?u=${enc}` },
    { name: "Twitter", Icon: FaTwitter, href: `https://twitter.com/intent/tweet?url=${enc}&text=${text}` },
    { name: "Pinterest", Icon: FaPinterest, href: `https://pinterest.com/pin/create/button/?url=${enc}&description=${text}` },
    { name: "WhatsApp", Icon: FaWhatsapp, href: `https://wa.me/?text=${text}%20${enc}` },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast("Product link copied to clipboard.", "success");
    } catch {
      toast("Couldn’t copy the link. Please copy it from the address bar.", "error");
    }
    setShareOpen(false);
  };

  return (
    <>
      <div className={styles.buy}>
        {product.inStock ? (
          <>
            <label className={styles.qtyLabel} htmlFor="pdp-qty">
              Quantity:
            </label>
            <QuantityInput id="pdp-qty" value={qty} onChange={setQty} label={`${product.name} quantity`} />
            <Button size="lg" className={styles.add} onClick={() => addToCart(product.slug, qty)}>
              Add to cart
            </Button>
          </>
        ) : (
          <p className={styles.oos}>Out of stock. Add it to your wishlist and check back soon.</p>
        )}
      </div>

      <div className={styles.extras}>
        <div className={styles.share} ref={shareRef}>
          <button
            type="button"
            className={styles.shareBtn}
            aria-expanded={shareOpen}
            aria-controls="share-menu"
            onClick={() => {
              setUrl(window.location.href);
              setShareOpen((o) => !o);
            }}
          >
            Share <PiShareNetwork aria-hidden="true" />
          </button>
          {shareOpen ? (
            <ul id="share-menu" className={styles.shareMenu}>
              {shares.map(({ name, Icon, href }) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon aria-hidden="true" /> {name}
                  </a>
                </li>
              ))}
              <li>
                <button type="button" onClick={copy}>
                  <PiLinkSimple aria-hidden="true" /> Copy link
                </button>
              </li>
            </ul>
          ) : null}
        </div>
        <WishlistButton slug={product.slug} name={product.name} withLabel />
      </div>
    </>
  );
}
