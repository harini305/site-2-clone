import Image from "next/image";
import Link from "next/link";
import { getCategory } from "@/lib/data/categories";
import Price from "./Price";
import WishlistButton from "./WishlistButton";
import AddToCartButton from "./AddToCartButton";
import styles from "./ProductCard.module.css";

// variant "home": wishlist heart next to the cart pill (homepage sections)
// variant "shop": centered pill, larger title (shop & category listings)
// variant "related": compact, no category line (product page)
export default function ProductCard({ product, variant = "home", headingLevel = 3 }) {
  const Title = `h${headingLevel}`;
  const href = `/product/${product.slug}`;
  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      {product.onSale ? <span className={styles.badge}>Sale!</span> : null}
      {!product.inStock ? <span className={`${styles.badge} ${styles.stock}`}>Out of stock</span> : null}
      <Link href={href} className={styles.media} tabIndex={-1} aria-hidden="true">
        <Image
          src={product.images[0]}
          alt=""
          width={400}
          height={400}
          className={styles.img}
        />
      </Link>
      <div className={styles.body}>
        {variant !== "related" ? (
          <p className={styles.cats}>
            {product.categories.map((slug, i) => (
              <span key={slug}>
                {i > 0 ? ", " : null}
                <Link href={`/product-category/${slug}`}>{getCategory(slug)?.name}</Link>
              </span>
            ))}
          </p>
        ) : null}
        <Title className={styles.title}>
          <Link href={href}>{product.name}</Link>
        </Title>
        <Price product={product} saleFirst={variant === "related"} />
        <div className={styles.actions}>
          {variant === "home" ? <WishlistButton slug={product.slug} name={product.name} /> : null}
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
