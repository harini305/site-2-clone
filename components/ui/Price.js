import { formatPrice } from "@/lib/format";
import styles from "./Price.module.css";

export default function Price({ product, size = "md", saleFirst = false, className = "" }) {
  const { price, regularPrice, onSale } = product;
  const current = (
    <ins className={styles.current} key="c">
      <span className="visually-hidden">{onSale ? "Sale price: " : "Price: "}</span>
      {formatPrice(price)}
    </ins>
  );
  const old = onSale ? (
    <del className={styles.old} key="o">
      <span className="visually-hidden">Original price: </span>
      {formatPrice(regularPrice)}
    </del>
  ) : null;
  return (
    <p className={`${styles.price} ${styles[size]} ${className}`}>
      {saleFirst ? [current, old] : [old, current]}
    </p>
  );
}
