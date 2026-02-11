"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const contactCards = [
  {
    title: "Bel ons",
    value: "06 302 220 25",
    href: "tel:+31630222025",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    title: "Mail ons",
    value: "info@fanatiekbouw.nl",
    href: "mailto:info@fanatiekbouw.nl",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Bezoekadres",
    value: "Gemeenteweg 25, Staphorst",
    href: null,
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "WhatsApp",
    value: "Stuur een bericht",
    href: "https://wa.me/31630222025",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];

export default function ContactPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Er ging iets mis.");
      }

      router.push("/contact/bedankt");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Er ging iets mis. Probeer het later opnieuw of bel ons op 06 302 220 25."
      );
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-dark md:text-5xl">
            Neem contact op
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-medium">
            Heeft u een vraag, wilt u een project bespreken of direct een offerte
            aanvragen? Neem gerust contact met ons op — wij reageren zo snel
            mogelijk.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const inner = (
                <div className="flex flex-col items-center rounded-lg border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <svg
                    className="mb-3 h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                  </svg>
                  <h3 className="font-heading text-sm font-bold text-dark">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-medium">{card.value}</p>
                </div>
              );
              return card.href ? (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {inner}
                </a>
              ) : (
                <div key={card.title}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="pb-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
            {/* Form */}
            <div>
              <h2 className="mb-2 font-heading text-2xl font-bold text-dark">
                Offerte aanvragen
              </h2>
              <p className="mb-8 text-sm text-medium">
                Vul onderstaand formulier in en wij nemen zo snel mogelijk
                contact met u op. Hoe meer informatie u deelt, hoe sneller wij
                een passende offerte kunnen opstellen.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                {/* Naam */}
                <div>
                  <label htmlFor="naam" className="mb-1 block text-sm font-semibold text-dark">
                    Naam <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    className="w-full rounded border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                </div>

                {/* Email + Telefoon */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-semibold text-dark">
                      E-mailadres <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefoon" className="mb-1 block text-sm font-semibold text-dark">
                      Telefoonnummer <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      required
                      className="w-full rounded border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Locatie + Type project */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="locatie" className="mb-1 block text-sm font-semibold text-dark">
                      Locatie (postcode + plaats) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="locatie"
                      name="locatie"
                      required
                      className="w-full rounded border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="type-project" className="mb-1 block text-sm font-semibold text-dark">
                      Type project <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="type-project"
                      name="type-project"
                      required
                      className="w-full rounded border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecteer...
                      </option>
                      <option value="Verbouwing">Verbouwing</option>
                      <option value="Renovatie">Renovatie</option>
                      <option value="Overkapping">Overkapping</option>
                      <option value="Onderhoud">Onderhoud</option>
                      <option value="Anders">Anders</option>
                    </select>
                  </div>
                </div>

                {/* Omschrijving */}
                <div>
                  <label htmlFor="omschrijving" className="mb-1 block text-sm font-semibold text-dark">
                    Omschrijving project <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="omschrijving"
                    name="omschrijving"
                    rows={5}
                    required
                    placeholder="Beschrijf kort wat u wilt laten doen..."
                    className="w-full rounded border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                </div>

                {/* File upload */}
                <div>
                  <label htmlFor="bestanden" className="mb-1 block text-sm font-semibold text-dark">
                    Foto&apos;s uploaden (optioneel)
                  </label>
                  <input
                    type="file"
                    id="bestanden"
                    name="bestanden"
                    multiple
                    accept="image/*,.pdf"
                    className="w-full rounded border border-gray-300 px-4 py-3 text-sm file:mr-4 file:rounded file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary hover:file:bg-primary/20"
                  />
                  <p className="mt-1 text-xs text-medium">
                    Max. 5 bestanden, max. 10MB per bestand (afbeeldingen of PDF)
                  </p>
                </div>

                {/* Hoe gevonden */}
                <div>
                  <label htmlFor="gevonden" className="mb-1 block text-sm font-semibold text-dark">
                    Hoe heeft u ons gevonden?
                  </label>
                  <select
                    id="gevonden"
                    name="gevonden"
                    className="w-full rounded border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    defaultValue=""
                  >
                    <option value="">Selecteer...</option>
                    <option value="Google">Google</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Via via">Via via</option>
                    <option value="Anders">Anders</option>
                  </select>
                </div>

                {/* Privacy */}
                <p className="text-xs text-medium">
                  Door dit formulier te versturen gaat u akkoord met onze{" "}
                  <a href="/privacyverklaring" className="text-primary underline">
                    privacyverklaring
                  </a>
                  .
                </p>

                {error && (
                  <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded bg-primary px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-lg disabled:opacity-50"
                >
                  {submitting ? "Verzenden..." : "Offerte aanvragen"}
                </button>
              </form>
            </div>

            {/* Sidebar: Map + info */}
            <div className="space-y-6">
              {/* Google Maps */}
              <div className="aspect-square overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2405.5!2d6.2!3d52.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGemeenteweg+25%2C+Staphorst!5e0!3m2!1snl!2snl!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locatie Fanatiek Bouw"
                />
              </div>

              {/* Werkgebied */}
              <div className="rounded-lg border bg-white p-6">
                <h3 className="mb-2 font-heading text-lg font-bold text-dark">
                  Werkgebied
                </h3>
                <p className="text-sm text-medium">
                  Overijssel &amp; Drenthe
                </p>
                <p className="text-sm text-medium">
                  Grotere projecten ook buiten deze regio
                </p>
                <p className="mt-4 text-sm font-semibold text-dark">
                  KvK: 93047592
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
