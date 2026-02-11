import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Onderhoud & Beheer",
  description:
    "Regelmatig onderhoud, reparaties en verduurzaming van uw pand.",
  alternates: { canonical: "https://www.fanatiekbouw.nl/diensten/onderhoud-beheer" },
};

export default function OnderhoudBeheerPage() {
  // No dedicated onderhoud projects yet, show renovation projects
  const related = projects.filter((p) => p.category === "Renovatie").slice(0, 3);

  return (
    <ServicePageTemplate
      title="Onderhoud & Beheer"
      breadcrumbLabel="Onderhoud & Beheer"
      breadcrumbHref="/diensten/onderhoud-beheer"
      intro="Goed onderhoud voorkomt grote kosten op de lange termijn. Wij helpen particulieren en vastgoedeigenaren met het in stand houden en verbeteren van hun pand."
      sections={[
        {
          title: "Wat wij doen",
          content:
            "Van periodiek onderhoud en kleine reparaties tot verduurzamingsmaatregelen en het verbeteren van het energielabel — wij zorgen dat uw pand in optimale staat blijft. Of u nu een woning bezit of meerdere panden beheert, wij denken graag met u mee over een onderhoudsplan dat past bij uw situatie.",
        },
      ]}
      image={{
        src: "/images/projects/gevelrenovatie-regelwerk-steiger.webp",
        alt: "Regelwerk en steigerwerk bij gevelonderhoud",
      }}
      relatedProjects={related}
      ctaHeadline="Onderhoud nodig? Wij denken graag met u mee."
    />
  );
}
