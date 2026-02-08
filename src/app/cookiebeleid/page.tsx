import type { Metadata } from "next";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Cookiebeleid",
  description: "Informatie over de cookies die Fanatiek Bouw gebruikt op deze website.",
  alternates: { canonical: "https://www.fanatiekbouw.nl/cookiebeleid" },
};

export default function CookiebeleidPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-dark md:text-5xl">
            Cookiebeleid
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-medium">
            Welke cookies wij gebruiken en waarom.
          </p>
          <p className="mt-2 text-sm text-medium/60">
            Laatst bijgewerkt: februari 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-16">
            {/* Wat zijn cookies */}
            <ScrollFadeIn>
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
                  Wat zijn cookies?
                </h2>
                <p className="leading-relaxed text-medium">
                  Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen
                  wanneer u onze website bezoekt. Ze helpen ons om de website goed te
                  laten functioneren en om te begrijpen hoe bezoekers onze website
                  gebruiken.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Welke cookies gebruiken wij */}
            <ScrollFadeIn>
              <div>
                <h2 className="mb-6 font-heading text-2xl font-bold text-dark">
                  Welke cookies gebruiken wij?
                </h2>

                <h3 className="mb-3 font-heading text-lg font-semibold text-dark">
                  Noodzakelijke cookies
                </h3>
                <div className="overflow-hidden rounded-lg border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-light">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-dark">Cookie</th>
                        <th className="px-4 py-3 font-semibold text-dark">Doel</th>
                        <th className="px-4 py-3 font-semibold text-dark">Bewaartermijn</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-medium">cookie_consent</td>
                        <td className="px-4 py-3 text-medium">Onthoudt uw cookie-keuze</td>
                        <td className="px-4 py-3 text-medium">1 jaar</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 leading-relaxed text-medium">
                  Deze cookies zijn noodzakelijk voor het functioneren van de website en
                  worden altijd geplaatst, zonder dat daarvoor toestemming nodig is.
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-dark">
                  Analytische cookies
                </h3>
                <div className="overflow-hidden rounded-lg border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-light">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-dark">Cookie</th>
                        <th className="px-4 py-3 font-semibold text-dark">Doel</th>
                        <th className="px-4 py-3 font-semibold text-dark">Bewaartermijn</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3 text-medium">_ga</td>
                        <td className="px-4 py-3 text-medium">Google Analytics — onderscheidt gebruikers</td>
                        <td className="px-4 py-3 text-medium">2 jaar</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-medium">_ga_*</td>
                        <td className="px-4 py-3 text-medium">Google Analytics — sessie-state</td>
                        <td className="px-4 py-3 text-medium">2 jaar</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 leading-relaxed text-medium">
                  Deze cookies worden alleen geplaatst als u daar toestemming voor geeft.
                  Ze helpen ons inzicht te krijgen in hoe de website wordt gebruikt,
                  zodat wij deze kunnen verbeteren.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Cookie-instellingen wijzigen */}
            <ScrollFadeIn>
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
                  Cookie-instellingen wijzigen
                </h2>
                <p className="leading-relaxed text-medium">
                  U kunt uw cookie-instellingen op elk moment wijzigen via de link
                  &ldquo;Cookie-instellingen&rdquo; in de footer van onze website.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Meer informatie */}
            <ScrollFadeIn>
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
                  Meer informatie
                </h2>
                <p className="leading-relaxed text-medium">
                  Heeft u vragen over ons cookiebeleid? Neem dan contact met ons op via{" "}
                  <a href="mailto:fanatiekbouw@outlook.com" className="text-primary hover:underline">
                    fanatiekbouw@outlook.com
                  </a>
                  .
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
