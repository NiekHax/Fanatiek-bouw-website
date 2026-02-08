import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { services } from "@/lib/services";

const featuredShowcase = [
  {
    src: "/images/projects/nieuwbouw-hal-glazen-voordeur-trap.webp",
    alt: "Nieuwbouw hal met glazen voordeur en trap",
    title: "Nieuwbouw interieur",
    label: "Verbouwing",
  },
  {
    src: "/images/projects/badkamer-renovatie-douchehoek-nisjes.jpeg",
    alt: "Douchehoek met inbouwnis",
    title: "Badkamerrenovatie",
    label: "Renovatie",
  },
  {
    src: "/images/projects/dakopbouw-gevelbekleding-buitenaanzicht.webp",
    alt: "Buitenaanzicht afgeronde dakopbouw met gevelbekleding",
    title: "Dakopbouw met gevelbekleding",
    label: "Verbouwing",
  },
];

export default function HomePage() {

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center">
        <Image
          src="/images/projects/aanbouw-houtskelet-bouw-werkzaamheden.webp"
          alt="Twee vaklui bouwen aanbouw in houtskeletbouw"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-near-black/55" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20">
          <h1 className="max-w-2xl font-heading text-4xl font-extrabold uppercase leading-tight text-white md:text-5xl lg:text-[56px]">
            Aanbouw, verbouw &amp; renovatie met vakmanschap
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200">
            Niek en Rick staan voor u klaar met meer dan 5 jaar ervaring in de
            bouw. Van een complete uitbouw tot een strakke renovatie — wij
            realiseren uw bouwplannen in de regio Overijssel en Drenthe.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/ons-werk"
              className="rounded border-2 border-white px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-near-black"
            >
              Bekijk ons werk
            </Link>
            <Link
              href="/contact"
              className="rounded bg-primary px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-lg"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <ScrollFadeIn>
            <h2 className="text-center font-heading text-3xl font-bold text-dark md:text-4xl">
              Waar wij u bij kunnen helpen
            </h2>
          </ScrollFadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Uitgelichte projecten */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <ScrollFadeIn>
            <h2 className="text-center font-heading text-3xl font-bold text-dark md:text-4xl">
              Werk waar wij trots op zijn
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-medium">
              Elk project leveren wij op met dezelfde toewijding. Maar deze
              projecten laten zien waar Fanatiek Bouw voor staat.
            </p>
          </ScrollFadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredShowcase.map((item) => (
              <ScrollFadeIn key={item.src}>
                <Link href="/ons-werk" aria-label={`Bekijk project: ${item.title}`}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="font-heading text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <span className="mt-1 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/ons-werk"
              className="text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              Bekijk al ons werk →
            </Link>
          </div>
        </div>
      </section>

      {/* Over ons blok */}
      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <ScrollFadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/projects/fanatiek-bouw-bedrijfsbus-zijkant-achterkant.webp"
                  alt="Bedrijfsbus van Fanatiek Bouw"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold text-dark md:text-4xl">
                  Fanatiek over kwaliteit — tot in het kleinste detail
                </h2>
                <p className="mt-6 leading-relaxed text-medium">
                  Wij zijn Niek en Rick, de vakmensen achter Fanatiek Bouw. Wij
                  leerden elkaar kennen als collega&apos;s bij hetzelfde bedrijf. Na
                  drie jaar samen te hebben gewerkt, wisten we: dit kunnen wij
                  beter zelf. Met meer dan 5 jaar ervaring, een gedeelde passie
                  voor strak en eerlijk werk, en de drive om elke klant tevreden
                  te maken, bouwen wij aan een bedrijf waar u op kunt vertrouwen.
                </p>
                <p className="mt-4 border-l-4 border-primary pl-4 italic text-dark">
                  We maken het strak en netjes — ook de dingen die u misschien
                  nooit zult opmerken.
                </p>
                <Link
                  href="/over-ons"
                  className="mt-6 inline-block text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  Meer over ons →
                </Link>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <ScrollFadeIn>
            <h2 className="text-center font-heading text-3xl font-bold text-dark md:text-4xl">
              Wat onze klanten zeggen
            </h2>
          </ScrollFadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Familie De Vries",
                location: "Staphorst",
                quote: "Onze badkamer is compleet gestript en opnieuw opgebouwd. Het resultaat is prachtig — strakke tegels, nette afwerking en alles netjes opgeruimd achtergelaten. Echt vakwerk.",
                stars: 5,
              },
              {
                name: "Mark & Linda",
                location: "Rouveen",
                quote: "Niek en Rick hebben onze zolder verbouwd tot een volwaardige slaapkamer. Goede communicatie, op tijd klaar en het resultaat was nog mooier dan we hadden verwacht.",
                stars: 5,
              },
              {
                name: "Jan Hoekstra",
                location: "Meppel",
                quote: "De gevel van ons huis was dringend aan vervanging toe. Fanatiek Bouw heeft het keurig opgepakt, van steiger tot oplevering. Fijne jongens om mee te werken en een eerlijke prijs.",
                stars: 5,
              },
            ].map((review, i) => (
              <ScrollFadeIn key={i}>
                <div className="rounded-lg border bg-white p-6">
                  <div className="mb-3 flex text-yellow-400">
                    {Array.from({ length: review.stars }).map((_, j) => (
                      <svg key={j} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 text-sm italic leading-relaxed text-medium">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-dark">
                    — {review.name}, {review.location}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram / Social */}
      <section className="bg-light py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <ScrollFadeIn>
            <h2 className="font-heading text-3xl font-bold text-dark md:text-4xl">
              Volg ons werk
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-medium">
              Bekijk onze projecten, renovaties en dagelijkse werkzaamheden op
              Instagram.
            </p>
            <a
              href="https://www.instagram.com/fanatiek_bouw/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              Volg @fanatiek_bouw →
            </a>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
