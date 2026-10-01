"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./ProductCarousel.module.css";

export default function ProductCarousel({ id, title, products, viewAllHref }) {
  return (
    <section className={`container page-section ${styles.section}`} aria-labelledby={id}>
      <SectionHeading
        id={id}
        action={
          <div className={styles.controls}>
            <button type="button" className={`${styles.arrow} ${id}-prev`} aria-label="Previous products">
              <PiCaretLeft aria-hidden="true" />
            </button>
            <button type="button" className={`${styles.arrow} ${id}-next`} aria-label="Next products">
              <PiCaretRight aria-hidden="true" />
            </button>
            <Button href={viewAllHref} size="sm" className={styles.viewAll}>
              View all<span className="visually-hidden"> {title}</span>
            </Button>
          </div>
        }
      >
        {title}
      </SectionHeading>

      <div className={styles.track} data-reveal="up">
        <Swiper
          modules={[Navigation, Pagination, A11y, Keyboard, Autoplay]}
          navigation={{ prevEl: `.${id}-prev`, nextEl: `.${id}-next` }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          autoplay={{ delay: 4500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          loop
          spaceBetween={23}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 14 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1025: { slidesPerView: 4, spaceBetween: 23 },
            1281: { slidesPerView: 5, spaceBetween: 23 },
          }}
          a11y={{ prevSlideMessage: "Previous products", nextSlideMessage: "Next products" }}
          className={styles.swiper}
        >
          {products.map((p) => (
            <SwiperSlide key={p.slug} className={styles.slide}>
              <ProductCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
