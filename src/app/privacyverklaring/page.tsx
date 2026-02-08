import type { Metadata } from "next";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Privacyverklaring van Fanatiek Bouw — hoe wij omgaan met uw persoonsgegevens.",
  alternates: { canonical: "https://www.fanatiekbouw.nl/privacyverklaring" },
};

export default function PrivacyverklaringPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-dark md:text-5xl">
            Privacyverklaring
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-medium">
            Hoe wij omgaan met uw persoonsgegevens.
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
            {/* 1. Wie zijn wij */}
            <ScrollFadeIn>
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
                  1. Wie zijn wij
                </h2>
                <p className="leading-relaxed text-medium">
                  Fanatiek Bouw is een timmerbedrijf gevestigd aan Gemeenteweg 25, 7951 CC Staphorst.
                  KvK-nummer: 93047592. Voor vragen over deze privacyverklaring kunt u contact opnemen
                  via{" "}
                  <a href="mailto:fanatiekbouw@outlook.com" className="text-primary hover:underline">
                    fanatiekbouw@outlook.com
                  </a>
                  .
                </p>
              </div>
            </ScrollFadeIn>

            {/* 2. Welke gegevens verzamelen wij */}
            <ScrollFadeIn>
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
                  2. Welke gegevens verzamelen wij
                </h2>
                <p className="mb-3 leading-relaxed text-medium">
                  Wij verzamelen persoonsgegevens wanneer u:
                </p>
                <ul className="space-y-2 text-medium">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    Het contactformulier op onze website invult (naam, e-mailadres, telefoonnummer, locatie, projectomschrijving)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    Bestanden uploadt bij uw aanvraag (foto&apos;s of PDF&apos;s)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    Telefonisch of per e-mail contact met ons opneemt
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    Onze website bezoekt (via cookies, mits u daarvoor toestemming geeft)
                  </li>
                </ul>
              </div>
            </ScrollFadeIn>

            {/* 3. Waarvoor gebruiken wij uw gegevens */}
            <ScrollFadeIn>
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
                  3. Waarvoor gebruiken wij uw gegevens
                </h2>
                <ul className="space-y-2 text-medium">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    Om uw aanvraag te verwerken en contact met u op te nemen
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    Om een offerte op te stellen
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    Om onze website te verbeteren (via geanonimiseerde analytische gegevens)
                  </li>
                </ul>
              </div>
            </ScrollFadeIn>

            {/* 4. Rechtsgrondslag */}
            <ScrollFadeIn>
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
                  4. Rechtsgrondslag
                </h2>
                <p className="leading-relaxed text-medium">
                  Wij verwerken uw gegevens op basis van uw toestemming (contactformulier) en ons
                  gerechtvaardigd belang (website-analyse na consent).
                </p>
              </div>
            </ScrollFadeIn>

            {/* 5. Bewaartermijnen */}
            <ScrollFadeIn>
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
                  5. Bewaartermijnen
                </h2>
                <p className="leading-relaxed text-medium">
                  Uw contactgegevens en aanvraag bewaren wij maximaal 2 jaar na het laatste contact.
                  Analytische gegevens worden maximaal 26 maanden bewaard door Google Analytics.
                </p>
              </div>
            </ScrollFadeIn>

            {/* 6. Delen met derden */}
            <ScrollFadeIn>
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
                  6. Delen met derden
                </h2>
                <p className="leading-relaxed text-medium">
                  Wij delen uw persoonsgegevens niet met derden, tenzij dit noodzakelijk is voor de
                  uitvoering van onze diensten (bijvoorbeeld het doorsturen van een e-mail via onze
                  e-mailprovider) of wanneer wij daartoe wettelijk verplicht zijn.
                </p>
              </div>
            </ScrollFadeIn>

            {/* 7. Cookies */}
            <ScrollFadeIn>
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
                  7. Cookies
                </h2>
                <p className="leading-relaxed text-medium">
                  Wij gebruiken noodzakelijke cookies en, met uw toestemming, analytische cookies
                  (Google Analytics). Lees meer in ons{" "}
                  <a href="/cookiebeleid" className="text-primary hover:underline">
                    cookiebeleid
                  </a>
                  .
                </p>
              </div>
            </ScrollFadeIn>

            {/* 8. Uw rechten */}
            <ScrollFadeIn>
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
                  8. Uw rechten
                </h2>
                <p className="mb-3 leading-relaxed text-medium">U heeft het recht om:</p>
                <ul className="space-y-2 text-medium">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    Inzage te vragen in uw persoonsgegevens
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    Uw gegevens te laten corrigeren of verwijderen
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    Bezwaar te maken tegen de verwerking
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    Uw toestemming in te trekken
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    Een klacht in te dienen bij de Autoriteit Persoonsgegevens
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed text-medium">
                  Neem contact op via{" "}
                  <a href="mailto:fanatiekbouw@outlook.com" className="text-primary hover:underline">
                    fanatiekbouw@outlook.com
                  </a>{" "}
                  om uw rechten uit te oefenen.
                </p>
              </div>
            </ScrollFadeIn>

            {/* 9. Beveiliging */}
            <ScrollFadeIn>
              <div>
                <h2 className="mb-4 font-heading text-2xl font-bold text-dark">
                  9. Beveiliging
                </h2>
                <p className="leading-relaxed text-medium">
                  Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens
                  te beschermen tegen ongeautoriseerde toegang, verlies of misbruik. Onze website
                  maakt gebruik van SSL-encryptie.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
