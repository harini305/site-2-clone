import Link from "next/link";
import styles from "./Button.module.css";

// Shared button/link styles. variant: red | yellow | dark | pill | outline
export default function Button({
  href,
  variant = "red",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}
