"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { PiX } from "react-icons/pi";
import { departments, utilityLinks } from "@/lib/data/site";
import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";
import styles from "./MobileMenu.module.css";

const pages = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  ...utilityLinks,
  { label: "Wishlist", href: "/wishlist" },
  { label: "Cart", href: "/cart" },
  { label: "My Account", href: "/my-account" },
];

export default function MobileMenu({ open, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll("a, button");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div className={`${styles.root} ${open ? styles.open : ""}`} aria-hidden={!open} inert={!open}>
      <div className={styles.backdrop} onClick={onClose} />
      <div
        id="mobile-menu"
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className={styles.top}>
          <Logo />
          <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Close menu">
            <PiX aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile">
          <ul className={styles.pages}>
            {pages.map((p) => (
              <li key={p.label}>
                <Link href={p.href} onClick={onClose}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.subhead}>Departments</p>
          <ul className={styles.depts}>
            {departments.map((d) => (
              <li key={d.label}>
                <Link href={d.href} onClick={onClose}>
                  <Icon name={d.icon} />
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
