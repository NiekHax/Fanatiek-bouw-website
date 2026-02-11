import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Onze Diensten",
  description:
    "Van verbouwingen en renovaties tot overkappingen in hout. Ontdek wat Fanatiek Bouw voor u kan betekenen.",
  alternates: { canonical: "https://www.fanatiekbouw.nl/diensten" },
};

export default function DienstenPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Diensten", href: "/diensten" },
      ]} />
      {/* Header */}
      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav className="mb-6 text-sm text-medium" aria-label="Breadcrumb">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">&gt;</span>
            <span className="text-dark">Diensten</span>
          </nav>
          <h1 className="font-heading text-4xl font-bold text-dark md:text-5xl">
            Onze diensten
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-medium">
            Of het nu gaat om een complete verbouwing, een renovatie of een
            overkapping op maat — bij Fanatiek Bouw bent u aan het juiste adres.
            Wij werken met vakmanschap, transparante communicatie en oog voor
            detail. Ontdek hieronder wat wij voor u kunnen betekenen.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ScrollFadeIn key={service.slug}>
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  href={service.href}
                />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
