import { bestOffers, groceryProducts, topSavers, trendingProducts } from "@/lib/data/home";
import { getProductsBySlugs } from "@/lib/data/products";
import HeroGrid from "@/components/sections/HeroGrid";
import GroceryProducts from "@/components/sections/GroceryProducts";
import PromoTiles from "@/components/sections/PromoTiles";
import ProductCarousel from "@/components/sections/ProductCarousel";
import ProductRow from "@/components/sections/ProductRow";
import ImageBanners from "@/components/sections/ImageBanners";
import Features from "@/components/sections/Features";

export default function HomePage() {
  return (
    <>
      <h1 className="visually-hidden">Fresh groceries delivered to your door</h1>
      <HeroGrid />
      <GroceryProducts products={getProductsBySlugs(groceryProducts)} />
      <PromoTiles />
      <ProductCarousel
        id="trending-title"
        title="What’s Trending"
        products={getProductsBySlugs(trendingProducts)}
        viewAllHref="/product-category/trending"
      />
      <ProductRow id="best-offers-title" title="Best Offers View" products={getProductsBySlugs(bestOffers)} />
      <ImageBanners />
      <ProductRow id="top-savers-title" title="Top Savers Today" products={getProductsBySlugs(topSavers)} />
      <Features />
    </>
  );
}
