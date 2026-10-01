"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// A Link that skips viewport prefetching (which fires for every card as you scroll)
// and instead prefetches when the user shows intent: hover, keyboard focus or touch.
export default function HoverPrefetchLink({ href, onMouseEnter, onFocus, onTouchStart, ...props }) {
  const router = useRouter();
  const prefetch = () => router.prefetch(href);
  return (
    <Link
      href={href}
      prefetch={false}
      onMouseEnter={(e) => {
        prefetch();
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        prefetch();
        onFocus?.(e);
      }}
      onTouchStart={(e) => {
        prefetch();
        onTouchStart?.(e);
      }}
      {...props}
    />
  );
}
