import { Poppins } from "next/font/google";
import { site } from "@/lib/data/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Toasts from "@/components/layout/Toasts";
import BackToTop from "@/components/layout/BackToTop";
import RevealController from "@/components/layout/RevealController";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: `${site.title} | Fresh Groceries Delivered`,
    template: `%s | ${site.title}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.title,
    title: site.title,
    description: site.description,
  },
};

export const viewport = {
  themeColor: "#f9253b",
};

// Hides [data-reveal] content before first paint only when motion is allowed.
// If the animation controller has not started after 4s, content is shown anyway.
const revealBootstrap = `(function(){try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){var r=document.documentElement;r.classList.add('js-anim');setTimeout(function(){if(!window.__revealReady)r.classList.remove('js-anim')},4000)}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <BackToTop />
        <Toasts />
        <RevealController />
      </body>
    </html>
  );
}
