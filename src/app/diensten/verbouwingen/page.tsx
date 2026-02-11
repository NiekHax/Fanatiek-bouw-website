import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Verbouwingen",
  description:
    "Aanbouw, dakkapel of complete verbouwing? Fanatiek Bouw verzorgt elke verbouwing met vakmanschap.",
  alternates: { canonical: "https://www.fanatiekbouw.nl/diensten/verbouwingen" },
};

export default function VerbouwingenPage() {
  const related = projects.filter((p) => p.category === "Verbouwingen");

  return (
    <ServicePageTemplate
      title="Verbouwingen"
      breadcrumbLabel="Verbouwingen"
      breadcrumbHref="/diensten/verbouwingen"
      intro="Een verbouwing is vaak een grote stap. Of u nu meer ruimte wilt creëren met een aanbouw, een dakkapel wilt plaatsen of uw woning compleet wilt herinrichten — wij begeleiden u van het eerste gesprek tot de oplevering."
      sections={[
        {
          title: "Wat wij doen",
          content:
            "Bij Fanatiek Bouw verzorgen wij alle soorten verbouwingen. Denk aan uitbouwen, het plaatsen van dakkapellen, het verwijderen van dragende muren, het samenvoegen van ruimtes en het creëren van extra verdiepingen. Elk project pakken wij volledig op, inclusief de coördinatie van eventuele onderaannemers voor specialistisch werk zoals elektra en loodgieterswerk.",
        },
        {
          title: "Onze aanpak",
          content:
            "Wij beginnen altijd met een persoonlijk gesprek bij u thuis. Daar nemen wij de situatie op, bespreken uw wensen en nemen de maten op. Vervolgens ontvangt u een heldere offerte zonder verrassingen. Tijdens de uitvoering houden wij u op de hoogte en zorgen wij dat het resultaat precies wordt zoals afgesproken — of beter.",
        },
      ]}
      image={{
        src: "/images/projects/aanbouw-houtskelet-bouw-werkzaamheden.webp",
        alt: "Houtskeletbouw werkzaamheden aan aanbouw",
      }}
      relatedProjects={related}
      ctaHeadline="Verbouwing gepland? Vraag vrijblijvend een offerte aan."
    />
  );
}
