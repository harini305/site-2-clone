import Link from "next/link";
import { PiShoppingCartSimple } from "react-icons/pi";
import { site } from "@/lib/data/site";
import styles from "./Logo.module.css";

export default function Logo({ size = "md" }) {
  return (
    <Link href="/" className={`${styles.logo} ${styles[size]}`} aria-label={`${site.title} home`}>
      <span className={styles.mark} aria-hidden="true">
        <PiShoppingCartSimple />
      </span>
      <span className={styles.text}>
        <span className={styles.name}>{site.name}</span>
        <span className={styles.tagline}>{site.tagline}</span>
      </span>
    </Link>
  );
}
