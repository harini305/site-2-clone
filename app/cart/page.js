import CartView from "@/components/cart/CartView";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import styles from "../simple-page.module.css";

export const metadata = {
  title: "Cart",
  robots: { index: false },
};

export default function CartPage() {
  return (
    <div className={`container page-top ${styles.page}`}>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />
      <div className={styles.body}>
        <CartView />
      </div>
    </div>
  );
}
