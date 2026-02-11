import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Overkappingen op Maat in Hout",
  description:
    "Veranda, carport, pergola of tuinhuis? Volledig op maat in hout.",
  alternates: { canonical: "https://www.fanatiekbouw.nl/diensten/overkappingen" },
};

export default function OverkappingenPage() {
  const related = projects.filter((p) => p.category === "Overkappingen");

  return (
    <ServicePageTemplate
      title="Overkappingen"
      breadcrumbLabel="Overkappingen"
      breadcrumbHref="/diensten/overkappingen"
      intro="Een overkapping geeft uw tuin of oprit extra functionaliteit en uitstraling. Wij ontwerpen en bouwen elke overkapping volledig op maat — altijd in hout, altijd met vakmanschap."
      sections={[
        {
          title: "Wat wij doen",
          content:
            "Van veranda's en carports tot pergola's en tuinhuizen — wij bouwen het allemaal. Elke overkapping wordt op maat gemaakt en volledig in hout uitgevoerd. Hout is een materiaal dat wij door en door kennen, en dat past bij de ambachtelijke aanpak waar Fanatiek Bouw voor staat.",
        },
      ]}
      image={{
        src: "/images/projects/houten-tuinhuis-op-maat-gebouwd.jpeg",
        alt: "Op maat gebouwd houten tuinhuis",
      }}
      relatedProjects={related}
      ctaHeadline="Overkapping op maat? Neem contact op voor een vrijblijvend gesprek."
    />
  );
}
