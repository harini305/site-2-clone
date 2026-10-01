import CheckoutView from "@/components/cart/CheckoutView";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import styles from "../simple-page.module.css";

export const metadata = {
  title: "Checkout",
  robots: { index: false },
};

export default function CheckoutPage() {
  return (
    <div className={`container page-top ${styles.page}`}>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cart", href: "/cart" }, { label: "Checkout" }]} />
      <div className={styles.body}>
        <CheckoutView />
      </div>
    </div>
  );
}
