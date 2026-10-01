import { heroBanners, specialOffers } from "@/lib/data/home";
import { getProductsBySlugs } from "@/lib/data/products";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import PromoBanner from "./PromoBanner";
import styles from "./HeroGrid.module.css";

export default function HeroGrid() {
  const offers = getProductsBySlugs(specialOffers);
  return (
    <section className={`container ${styles.grid}`} aria-label="Featured offers">
      <div className={styles.left}>
        <PromoBanner banner={heroBanners.oils} theme="blue" layout="image-left" priority />
        <PromoBanner banner={heroBanners.organic} theme="purple" layout="image-right" />
      </div>
      <div className={styles.right}>
        <SectionHeading accent="red" size="md" id="special-offer">
          Special Offer
        </SectionHeading>
        <div className={styles.offers}>
          {offers.map((p) => (
            <div key={p.slug} data-reveal="right">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
        <PromoBanner banner={heroBanners.popcorn} theme="sunset" layout="stacked" ctaVariant="dark" />
      </div>
    </section>
  );
}
