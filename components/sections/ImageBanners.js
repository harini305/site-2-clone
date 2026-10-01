import Image from "next/image";
import Link from "next/link";
import { imageBanners } from "@/lib/data/home";
import styles from "./ImageBanners.module.css";

export default function ImageBanners() {
  return (
    <section className={`container ${styles.grid}`} aria-label="Shop collections">
      {imageBanners.map((b, i) => (
        <Link
          key={b.href}
          href={b.href}
          className={`${styles.banner} ${styles[b.theme]}`}
          data-reveal={i === 0 ? "left" : "right"}
        >
          <Image
            src={b.image}
            alt={b.alt}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.img}
          />
          <span className={styles.label}>
            {b.label[0]}
            <br />
            {b.label[1]}
          </span>
        </Link>
      ))}
    </section>
  );
}
