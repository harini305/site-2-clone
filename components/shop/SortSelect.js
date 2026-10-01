"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PiCaretDown } from "react-icons/pi";
import { sortOptions } from "@/lib/shop";
import styles from "./SortSelect.module.css";

export default function SortSelect({ value }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onChange = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    if (e.target.value) params.set("sort", e.target.value);
    else params.delete("sort");
    params.delete("page");
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  };

  return (
    <div className={styles.wrap}>
      <label htmlFor="shop-sort" className={styles.label}>
        Sort by:
      </label>
      <select id="shop-sort" className={styles.select} value={value} onChange={onChange}>
        {sortOptions.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <PiCaretDown aria-hidden="true" className={styles.caret} />
    </div>
  );
}
