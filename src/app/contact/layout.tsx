import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Contact & Offerte",
  description: "Vraag vrijblijvend een offerte aan of neem contact op met Fanatiek Bouw.",
  alternates: { canonical: "https://www.fanatiekbouw.nl/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
      ]} />
      {children}
    </>
  );
}
