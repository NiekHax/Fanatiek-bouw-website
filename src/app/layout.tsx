import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fanatiekbouw.nl"),
  title: {
    default: "Fanatiek Bouw — Aanbouw, Verbouw & Renovatie in Overijssel en Drenthe",
    template: "%s — Fanatiek Bouw",
  },
  description:
    "Vakkundige verbouwingen, renovaties en overkappingen op maat. Fanatiek Bouw uit Staphorst staat voor kwaliteit en persoonlijk contact.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Fanatiek Bouw",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.fanatiekbouw.nl",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Fanatiek Bouw",
    telephone: "+31630222025",
    email: "fanatiekbouw@outlook.com",
    url: "https://www.fanatiekbouw.nl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gemeenteweg 25",
      addressLocality: "Staphorst",
      postalCode: "7951 CC",
      addressCountry: "NL",
    },
    areaServed: [
      { "@type": "State", name: "Overijssel" },
      { "@type": "State", name: "Drenthe" },
    ],
    sameAs: ["https://www.instagram.com/fanatiek_bouw/"],
  };

  return (
    <html lang="nl" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body text-dark antialiased">
        <Navbar />
        <main id="main-content" className="pt-[80px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
