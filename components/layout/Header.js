"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiHeart, PiList, PiUser } from "react-icons/pi";
import { utilityLinks } from "@/lib/data/site";
import { useStore } from "@/lib/store";
import Logo from "@/components/ui/Logo";
import HeaderSearch from "./HeaderSearch";
import MiniCart from "./MiniCart";
import MobileMenu from "./MobileMenu";
import CategoryNav from "./CategoryNav";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const { wishlist } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 160);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div className={styles.slot}>
        <header className={`${styles.bar} ${scrolled ? styles.scrolled : ""}`}>
          <div className={`container ${styles.inner}`}>
            <Logo />
            <div className={styles.search}>
              <HeaderSearch />
            </div>
            <nav aria-label="Utility" className={styles.utility}>
              <ul>
                {utilityLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={isActive(l.href) ? styles.current : undefined}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.burger}
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <PiList aria-hidden="true" />
              </button>
              <Link href="/my-account" className={styles.signin}>
                <PiUser aria-hidden="true" />
                <span className={styles.signinText}>Sign In / Register</span>
                <span className="visually-hidden">Account</span>
              </Link>
              <Link href="/wishlist" className={styles.icon} aria-label={`Wishlist, ${wishlist.length} items`}>
                <PiHeart aria-hidden="true" />
                {wishlist.length > 0 ? <span className={styles.dot} aria-hidden="true" /> : null}
              </Link>
              <MiniCart />
            </div>
          </div>
        </header>
      </div>
      <CategoryNav />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
