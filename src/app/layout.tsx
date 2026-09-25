import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { practice } from "@/content/site";
import "../styles.css";

export const metadata: Metadata = {
  title: "Lucian Ion FRCS(Plast) — Consultant Plastic and Cosmetic Surgeon, London",
  description:
    "Lucian Ion FRCS(Plast), consultant plastic and cosmetic surgeon in Upper Wimpole Street, London. Rhinoplasty, facial sculpting, face and neck rejuvenation and breast surgery.",
  authors: [{ name: "Lucian Ion" }],
  openGraph: {
    siteName: "Lucian Ion FRCS(Plast)",
    type: "website",
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300&display=swap"
        />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: `${practice.surgeon} ${practice.credentials}`,
              telephone: "+442074867757",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Aveling House, 1B Upper Wimpole Street",
                addressLocality: "London",
                postalCode: "W1G 6AB",
                addressCountry: "GB",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
