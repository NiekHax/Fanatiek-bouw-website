import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description: "Algemene voorwaarden van Fanatiek Bouw.",
  alternates: { canonical: "https://www.fanatiekbouw.nl/algemene-voorwaarden" },
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <section className="py-20">
      <div className="prose prose-gray mx-auto max-w-[800px] px-6">
        <h1 className="font-heading text-4xl font-bold text-dark">
          Algemene Voorwaarden
        </h1>
        <p className="text-sm text-medium">Laatst bijgewerkt: februari 2026</p>

        <div className="mt-8 rounded-lg border bg-light p-8 text-center">
          <p className="text-medium">
            De algemene voorwaarden van Fanatiek Bouw worden op dit moment
            opgesteld. Neem voor vragen contact op via{" "}
            <a href="mailto:info@fanatiekbouw.nl" className="text-primary">
              info@fanatiekbouw.nl
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
