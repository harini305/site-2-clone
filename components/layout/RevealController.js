"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offsets = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: -40 },
  right: { x: 40 },
  zoom: { scale: 0.92 },
  fade: {},
};

// Animates every [data-reveal] element on the current page as it scrolls into
// view (staggered in batches), plus [data-parallax] image movement.
// Elements are only hidden while the `js-anim` class is on <html>; it is removed
// for reduced-motion users and as a fail-safe if this never runs.
export default function RevealController() {
  const pathname = usePathname();

  // Pause hover effects inside <main> while scrolling (see .is-scrolling in globals.css).
  useEffect(() => {
    const root = document.documentElement;
    let timer;
    const onScroll = () => {
      if (!root.classList.contains("is-scrolling")) root.classList.add("is-scrolling");
      clearTimeout(timer);
      timer = setTimeout(() => root.classList.remove("is-scrolling"), 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      root.classList.remove("is-scrolling");
    };
  }, []);

  useEffect(() => {
    window.__revealReady = true;
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      root.classList.remove("js-anim");
      return undefined;
    }
    root.classList.add("js-anim");

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray("[data-reveal]");
      els.forEach((el) => gsap.set(el, { opacity: 0, ...offsets[el.dataset.reveal || "up"] }));

      ScrollTrigger.batch(els, {
        start: "top 92%",
        once: true,
        interval: 0.1,
        batchMax: 6,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.09,
            overwrite: true,
            clearProps: "transform",
          }),
      });

      gsap.utils.toArray("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 40;
        gsap.fromTo(
          el,
          { y: amount },
          {
            y: -amount,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
    });

    // Recalculate positions once images and fonts have settled.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 400);

    return () => {
      clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
