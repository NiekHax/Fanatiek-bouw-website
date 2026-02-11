import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Ons Werk — Projecten van Fanatiek Bouw",
  description: "Bekijk onze afgeronde verbouwingen, renovaties en overkappingen.",
  alternates: { canonical: "https://www.fanatiekbouw.nl/ons-werk" },
};

export default function OnsWerkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Ons Werk", href: "/ons-werk" },
      ]} />
      {children}
    </>
  );
}
