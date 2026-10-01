import Button from "@/components/ui/Button";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className={`container ${styles.wrap}`}>
      <p className={styles.code} aria-hidden="true">
        404
      </p>
      <h1 className={styles.title}>Oops! That page can’t be found.</h1>
      <p className={styles.text}>
        The page you’re looking for may have moved or no longer exists. Try searching for a product or head back
        to the shop.
      </p>
      <div className={styles.actions}>
        <Button href="/">Back to home</Button>
        <Button href="/products" variant="dark">
          Browse products
        </Button>
      </div>
    </div>
  );
}
