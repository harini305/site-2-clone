import Image from "next/image";
import { imageCredits, licenseUrls } from "@/lib/data/imageCredits";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import styles from "./page.module.css";

export const metadata = {
  title: "Image Credits",
  description: "Sources, authors and licences for the photography used on this site.",
};

export default function ImageCreditsPage() {
  return (
    <div className="container page-top">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Image Credits" }]} />
      <p className={styles.intro}>
        Product and banner photos on this site are used under open licences. Where a licence requires it, the
        author is credited below. Photos marked “background removed” were cut out from their original
        backgrounds and resized; adaptations of CC BY-SA photos are shared under the same licence.
      </p>
      <ul className={styles.list}>
        {imageCredits.map((c) => (
          <li key={c.file} className={styles.item}>
            <Image src={c.file} alt="" width={72} height={72} className={styles.thumb} />
            <div>
              <a href={c.source} target="_blank" rel="noopener noreferrer" className={styles.title}>
                {c.title}
              </a>
              <p className={styles.meta}>
                by {c.author} ·{" "}
                <a href={licenseUrls[c.license]} target="_blank" rel="noopener noreferrer license">
                  {c.license}
                </a>{" "}
                · {c.changes}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
