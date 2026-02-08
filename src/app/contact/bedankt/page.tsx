import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bedankt voor uw aanvraag",
  robots: { index: false, follow: false },
};

export default function BedanktPage() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-heading text-3xl font-bold text-dark md:text-4xl">
          Bedankt voor uw aanvraag!
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-medium">
          Wij hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u
          op. Heeft u een dringende vraag? Bel ons gerust op{" "}
          <a href="tel:+31630222025" className="font-semibold text-primary">
            06 302 220 25
          </a>
          .
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded bg-primary px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary-hover"
        >
          Naar de homepage
        </Link>
      </div>
    </section>
  );
}
