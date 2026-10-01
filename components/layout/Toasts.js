"use client";

import Link from "next/link";
import { PiCheckCircle, PiInfo, PiWarningCircle, PiX } from "react-icons/pi";
import { dismissToast, useToasts } from "@/lib/store";
import styles from "./Toasts.module.css";

const icons = { success: PiCheckCircle, error: PiWarningCircle, info: PiInfo };

export default function Toasts() {
  const toasts = useToasts();
  return (
    <div className={styles.region} role="status" aria-live="polite">
      {toasts.map((t) => {
        const I = icons[t.type] || PiInfo;
        return (
          <div key={t.id} className={`${styles.toast} ${styles[t.type]}`}>
            <I aria-hidden="true" className={styles.icon} />
            <p>{t.message}</p>
            {t.action ? (
              <Link href={t.action.href} className={styles.action} onClick={() => dismissToast(t.id)}>
                {t.action.label}
              </Link>
            ) : null}
            <button type="button" onClick={() => dismissToast(t.id)} aria-label="Dismiss notification">
              <PiX aria-hidden="true" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
