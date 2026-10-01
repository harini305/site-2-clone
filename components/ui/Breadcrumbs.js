import Link from "next/link";
import { PiCaretRight } from "react-icons/pi";
import styles from "./Breadcrumbs.module.css";

// items: [{ label, href? }] — the last item is the current page.
export default function Breadcrumbs({ items, as: Tag = "h1" }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <Tag className={styles.trail}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <span key={item.label} className={styles.item}>
              {i > 0 ? <PiCaretRight aria-hidden="true" className={styles.sep} /> : null}
              {item.href && !last ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current={last ? "page" : undefined}>{item.label}</span>
              )}
            </span>
          );
        })}
      </Tag>
    </nav>
  );
}
