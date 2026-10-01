"use client";

import { PiMinus, PiPlus } from "react-icons/pi";
import styles from "./QuantityInput.module.css";

export default function QuantityInput({ value, onChange, min = 1, max = 99, label = "Quantity", id }) {
  const clamp = (n) => Math.max(min, Math.min(max, Number.isFinite(n) ? n : min));
  return (
    <div className={styles.qty} role="group" aria-label={label}>
      <button
        type="button"
        onClick={() => onChange(clamp(value - 1))}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        <PiMinus aria-hidden="true" />
      </button>
      <input
        id={id}
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={value}
        aria-label={label}
        onChange={(e) => onChange(clamp(parseInt(e.target.value, 10)))}
      />
      <button
        type="button"
        onClick={() => onChange(clamp(value + 1))}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        <PiPlus aria-hidden="true" />
      </button>
    </div>
  );
}
