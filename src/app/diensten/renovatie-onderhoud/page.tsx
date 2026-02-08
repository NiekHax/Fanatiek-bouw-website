import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Renovatie",
  description:
    "Badkamer, keuken, vloeren, dak of gevel renoveren? Strakke renovaties met oog voor detail.",
  alternates: { canonical: "https://www.fanatiekbouw.nl/diensten/renovatie-onderhoud" },
};

export default function RenovatiePage() {
  const related = projects.filter((p) => p.category === "Renovatie");

  return (
    <ServicePageTemplate
      title="Renovatie"
      breadcrumbLabel="Renovatie"
      intro="Is uw woning toe aan vernieuwing? Van een nieuwe badkamer of keuken tot een complete dakrenovatie — wij zorgen dat uw huis weer in topconditie komt."
      sections={[
        {
          title: "Wat wij doen",
          content:
            "Wij voeren renovaties uit op elk niveau. Of het nu gaat om het moderniseren van uw badkamer, het vernieuwen van uw keuken, het leggen van nieuwe vloeren, of het renoveren van uw dak of gevel — wij pakken het vakkundig aan. Met oog voor detail en een duurzame afwerking zorgen wij voor een resultaat waar u jarenlang plezier van heeft.",
        },
        {
          title: "Waarom Fanatiek Bouw",
          content:
            "Wij geloven dat kwaliteit in de details zit. Dat betekent strakke afwerkingen, nette aansluitingen en zorgvuldig werken — ook op de plekken die u misschien nooit zult zien. Dat is waar wij fanatiek in zijn.",
        },
      ]}
      image={{
        src: "/images/projects/gevelrenovatie-steiger-werkzaamheden.webp",
        alt: "Gevelrenovatie werkzaamheden met steiger",
      }}
      relatedProjects={related}
      ctaHeadline="Renovatie nodig? Wij helpen u graag."
    />
  );
}
