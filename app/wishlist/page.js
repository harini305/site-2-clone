import WishlistView from "@/components/account/WishlistView";
import styles from "../simple-page.module.css";

export const metadata = {
  title: "Wishlist",
  robots: { index: false },
};

export default function WishlistPage() {
  return (
    <div className={`container page-top ${styles.page} ${styles.narrow}`}>
      <h1 className={styles.title}>Wishlist</h1>
      <div className={styles.body}>
        <WishlistView />
      </div>
    </div>
  );
}
