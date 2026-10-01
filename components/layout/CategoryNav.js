import Link from "next/link";
import { departments } from "@/lib/data/site";
import Icon from "@/components/ui/Icon";
import styles from "./CategoryNav.module.css";

export default function CategoryNav() {
  return (
    <nav aria-label="Departments" className={styles.nav}>
      <ul className={`container ${styles.list}`}>
        {departments.map((d) => (
          <li key={d.label}>
            <Link href={d.href} className={styles.link}>
              <Icon name={d.icon} className={styles.icon} />
              <span>{d.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
