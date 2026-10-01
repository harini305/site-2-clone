import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import styles from "./ProductRow.module.css";

// Section heading + "View all" + a row of five product cards.
export default function ProductRow({ id, title, products, viewAllHref = "/products" }) {
  return (
    <section className={`container page-section ${styles.section}`} aria-labelledby={id}>
      <SectionHeading
        id={id}
        action={
          <Button href={viewAllHref} size="sm" className={styles.viewAll}>
            View all<span className="visually-hidden"> {title}</span>
          </Button>
        }
      >
        {title}
      </SectionHeading>
      <div className={styles.grid}>
        {products.map((p) => (
          <div key={p.slug} data-reveal="up">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
