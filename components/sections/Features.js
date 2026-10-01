import { features } from "@/lib/data/site";
import Icon from "@/components/ui/Icon";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <section className={`container ${styles.section}`} aria-label="Why shop with us">
      <ul className={styles.list}>
        {features.map((f) => (
          <li key={f.title} className={styles.item} data-reveal="up">
            <Icon name={f.icon} className={styles.icon} />
            <div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.text}>{f.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
