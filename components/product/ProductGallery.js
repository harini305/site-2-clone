"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PiCaretLeft, PiCaretRight, PiMagnifyingGlassPlus, PiX } from "react-icons/pi";
import styles from "./ProductGallery.module.css";

export default function ProductGallery({ images, name }) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const closeRef = useRef(null);
  const openerRef = useRef(null);

  const go = (d) => setIndex((i) => (i + d + images.length) % images.length);

  useEffect(() => {
    if (!zoom) return;
    const opener = openerRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") setZoom(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [zoom, images.length]);

  return (
    <div className={styles.gallery} data-reveal="left">
      <div className={styles.main}>
        <Image
          key={images[index]}
          src={images[index]}
          alt={`${name}, image ${index + 1} of ${images.length}`}
          width={560}
          height={560}
          className={styles.mainImg}
          preload
        />
        <button
          ref={openerRef}
          type="button"
          className={styles.zoomBtn}
          onClick={() => setZoom(true)}
          aria-label="View larger image"
        >
          <PiMagnifyingGlassPlus aria-hidden="true" />
        </button>
      </div>

      {images.length > 1 ? (
        <ul className={styles.thumbs} aria-label="Product images">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                className={i === index ? styles.activeThumb : undefined}
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                aria-pressed={i === index}
              >
                <Image src={src} alt="" width={120} height={120} />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {zoom ? (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={`${name} image viewer`}>
          <div className={styles.backdrop} onClick={() => setZoom(false)} />
          <Image src={images[index]} alt={name} width={900} height={900} className={styles.lightImg} />
          <button ref={closeRef} type="button" className={styles.close} onClick={() => setZoom(false)} aria-label="Close image viewer">
            <PiX aria-hidden="true" />
          </button>
          {images.length > 1 ? (
            <>
              <button type="button" className={`${styles.nav} ${styles.prev}`} onClick={() => go(-1)} aria-label="Previous image">
                <PiCaretLeft aria-hidden="true" />
              </button>
              <button type="button" className={`${styles.nav} ${styles.next}`} onClick={() => go(1)} aria-label="Next image">
                <PiCaretRight aria-hidden="true" />
              </button>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
