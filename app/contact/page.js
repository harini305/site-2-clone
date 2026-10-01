import { PiEnvelopeSimple, PiHeadphones, PiMapPin } from "react-icons/pi";
import { site } from "@/lib/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import styles from "@/components/contact/Contact.module.css";

export const metadata = {
  title: "Help Center",
  description: "Questions about an order, delivery or our products? Get in touch with our help center.",
};

export default function ContactPage() {
  const { contact } = site;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&z=13&output=embed`;
  return (
    <div className="page-top">
      <div className="container">
        <div className={styles.map} data-reveal="fade">
          <iframe
            title={`Map showing our store near ${contact.mapQuery}`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className={`container ${styles.inner}`}>
        <SectionHeading as="h1" size="md">
          Contact Info
        </SectionHeading>
        <p className={styles.intro} data-reveal="up">
          Our help center team is here seven days a week. Whether you have a question about an order, a delivery
          slot or a product, send us a message and we’ll get back to you as soon as possible.
        </p>

        <ul className={styles.info}>
          <li data-reveal="up">
            <PiMapPin aria-hidden="true" />
            <address>
              {contact.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </li>
          <li data-reveal="up">
            <PiHeadphones aria-hidden="true" />
            <div>
              {contact.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/[^+\d]/g, "")}`}>
                  {p}
                </a>
              ))}
            </div>
          </li>
          <li data-reveal="up">
            <PiEnvelopeSimple aria-hidden="true" />
            <div>
              {contact.emails.map((e) => (
                <a key={e} href={`mailto:${e}`}>
                  {e}
                </a>
              ))}
            </div>
          </li>
        </ul>

        <h2 className="visually-hidden">Send us a message</h2>
        <ContactForm />
      </div>
    </div>
  );
}
