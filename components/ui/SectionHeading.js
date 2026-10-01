import styles from "./SectionHeading.module.css";

// Heading with the short divider bar used throughout the reference design.
export default function SectionHeading({
  as: Tag = "h2",
  children,
  accent = "grey",
  size = "lg",
  action,
  id,
  className = "",
}) {
  return (
    <div className={`${styles.wrap} ${className}`}>
      <Tag id={id} className={`${styles.heading} ${styles[size]}`} data-reveal="left">
        <span className={`${styles.bar} ${styles[accent]}`} aria-hidden="true" />
        {children}
      </Tag>
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  );
}
