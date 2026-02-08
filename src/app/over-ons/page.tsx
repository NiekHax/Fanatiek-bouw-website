import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Over Ons — Fanatiek Bouw uit Staphorst",
  description:
    "Maak kennis met Niek en Rick, de vakmensen achter Fanatiek Bouw.",
  alternates: { canonical: "https://www.fanatiekbouw.nl/over-ons" },
};

const werkwijzeStappen = [
  { nr: 1, title: "Contact", description: "U belt of mailt ons met uw vraag." },
  { nr: 2, title: "Inmeten & advies", description: "Wij komen bij u thuis om de situatie te bekijken en uw wensen te bespreken." },
  { nr: 3, title: "Offerte", description: "U ontvangt een heldere offerte met indicatie startdatum." },
  { nr: 4, title: "Uitvoering", description: "Wij gaan aan de slag en houden u op de hoogte." },
  { nr: 5, title: "Oplevering", description: "Wij zorgen dat u 100% tevreden bent met het resultaat." },
];

export default function OverOnsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-dark md:text-5xl">
            Over Fanatiek Bouw
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-medium">
            Fanatiek Bouw, dat zijn Niek Haasjes en Rick Compagner — twee
            vakmensen uit Staphorst met een gedeelde passie voor de bouw.
          </p>
        </div>
      </section>

      {/* Ons verhaal */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <ScrollFadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-light">
                <Image
                  src="/images/projects/fanatiek-bouw-bedrijfsbus-zijkant-achterkant.webp"
                  alt="Bedrijfsbus van Fanatiek Bouw"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="mb-6 font-heading text-3xl font-bold text-dark">
                  Ons verhaal
                </h2>
                <p className="mb-4 leading-relaxed text-medium">
                  Wij leerden elkaar kennen als collega&apos;s bij hetzelfde bedrijf.
                  Drie jaar lang werkten wij samen als de enige twee werknemers —
                  in die tijd leerden wij niet alleen het vak tot in detail, maar
                  ontdekten we ook dat we dezelfde visie delen: eerlijk werken,
                  strakke kwaliteit leveren en klanten echt tevreden maken.
                </p>
                <p className="leading-relaxed text-medium">
                  Die gedeelde drive was de aanleiding om Fanatiek Bouw op te
                  richten. De naam zegt het al — wij zijn fanatiek. Fanatiek over
                  strakke afwerkingen, over heldere communicatie en over het
                  nakomen van onze afspraken. Of het nu gaat om een grote
                  verbouwing of een klein onderhoudsproject: wij leveren het af
                  alsof het ons eigen huis is.
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Wat ons drijft */}
      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 font-heading text-3xl font-bold text-dark">
                Wat ons drijft
              </h2>
              <p className="mb-4 leading-relaxed text-medium">
                Onze ambitie is om Fanatiek Bouw uit te bouwen tot een
                betrouwbaar en gedreven bouwbedrijf. Een bedrijf waar klanten op
                terug kunnen vallen, waar vakmanschap centraal staat en waar
                eerlijkheid de norm is. En als er onverhoopt een keer iets niet
                helemaal goed gaat? Dan lossen wij het netjes op. Zo simpel is
                het.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-medium">
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                  Niek: Allround vakman, VCA-gecertificeerd
                </span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                  5+ jaar ervaring
                </span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                  Bedrijfsaansprakelijkheidsverzekering
                </span>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <ScrollFadeIn>
            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-dark">
              Onze werkwijze
            </h2>
          </ScrollFadeIn>
          <div className="grid gap-8 md:grid-cols-5">
            {werkwijzeStappen.map((stap) => (
              <ScrollFadeIn key={stap.nr}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    {stap.nr}
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-dark">
                    {stap.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-medium">
                    {stap.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <ScrollFadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 font-heading text-3xl font-bold text-dark">
                Werkgebied
              </h2>
              <p className="leading-relaxed text-medium">
                Regio Overijssel en Drenthe, met Staphorst als thuisbasis. Voor
                grotere projecten ook buiten deze regio inzetbaar.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
