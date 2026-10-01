import Image from "next/image";
import Button from "@/components/ui/Button";
import styles from "./PromoBanner.module.css";

// Large gradient banner card used in the homepage hero grid.
// theme: blue | purple | sunset   layout: image-left | image-right | stacked
export default function PromoBanner({ banner, theme, layout = "image-left", priority = false, ctaVariant = "yellow" }) {
  return (
    <article className={`${styles.card} ${styles[theme]} ${styles[layout]}`} data-reveal="up">
      <div className={styles.media}>
        {/* GSAP moves this wrapper; the image's own transform is reserved for the hover zoom. */}
        <div className={styles.parallax} data-parallax="14">
          <Image
            src={banner.image}
            alt={banner.alt}
            width={600}
            height={420}
            sizes="(max-width: 767px) 90vw, (max-width: 1180px) 55vw, 430px"
            className={styles.img}
            preload={priority}
          />
        </div>
      </div>
      <div className={styles.copy}>
        <p className={styles.badge}>{banner.badge}</p>
        <p className={styles.eyebrow}>{banner.eyebrow}</p>
        <h2 className={styles.title}>{banner.title}</h2>
        <Button href={banner.cta.href} variant={ctaVariant} className={styles.cta}>
          {banner.cta.label}
          <span className="visually-hidden">: {banner.title}</span>
        </Button>
      </div>
    </article>
  );
}
