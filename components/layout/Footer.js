import Link from "next/link";
import { FaCcAmex, FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import { site } from "@/lib/data/site";
import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";
import NewsletterForm from "./NewsletterForm";
import styles from "./Footer.module.css";

const payments = [
  { name: "Visa", Icon: FaCcVisa, color: "#1a1f71" },
  { name: "American Express", Icon: FaCcAmex, color: "#2e77bc" },
  { name: "Mastercard", Icon: FaCcMastercard, color: "#eb001b" },
  { name: "PayPal", Icon: FaCcPaypal, color: "#003087" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <section className={styles.subscribe} aria-labelledby="subscribe-title">
        <div className={`container ${styles.subscribeInner}`}>
          <h2 id="subscribe-title" className={styles.subscribeTitle} data-reveal="up">
            <span>Subscribe Now</span> <small>For Coupons, Newsletters, And More!</small>
          </h2>
          <NewsletterForm />
        </div>
      </section>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <div className={styles.brand}>
            <Logo size="lg" />
            <ul className={styles.payments} aria-label="Accepted payment methods">
              {payments.map(({ name, Icon: P, color }) => (
                <li key={name} title={name}>
                  <P aria-hidden="true" style={{ color }} />
                  <span className="visually-hidden">{name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.meta}>
            <ul className={styles.socials} aria-label="Social media">
              {site.socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} (opens in a new tab)`}>
                    <Icon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
            <p className={styles.copy}>
              © {year} {site.title}. All rights reserved.{" "}
              <Link href="/image-credits" className={styles.credits}>
                Image credits
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
