import Image from "next/image";
import { promoTiles } from "@/lib/data/home";
import Button from "@/components/ui/Button";
import styles from "./PromoTiles.module.css";

export default function PromoTiles() {
  return (
    <section className={`container ${styles.grid}`} aria-label="Category promotions">
      {promoTiles.map((t) => (
        <article key={t.title} className={`${styles.tile} ${styles[t.theme]}`} data-reveal="up">
          <div className={styles.media} aria-hidden={t.image2 ? undefined : "true"}>
            <Image src={t.image} alt={t.alt} width={260} height={260} className={styles.img} />
            {t.image2 ? (
              <Image src={t.image2} alt="" width={200} height={200} className={styles.img2} />
            ) : null}
          </div>
          <div className={styles.copy}>
            <h3 className={styles.title}>{t.title}</h3>
            <p className={styles.text}>{t.text}</p>
            <Button href={t.href} variant={t.theme === "orange" ? "dark" : "yellow"} size="sm" className={styles.cta}>
              Shop Now<span className="visually-hidden">: {t.title}</span>
            </Button>
          </div>
        </article>
      ))}
    </section>
  );
}
