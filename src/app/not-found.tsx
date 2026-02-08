import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h1 className="font-heading text-6xl font-extrabold text-primary md:text-8xl">
          404
        </h1>
        <h2 className="mt-4 font-heading text-2xl font-bold text-dark md:text-3xl">
          Pagina niet gevonden
        </h2>
        <p className="mx-auto mt-4 max-w-md text-medium">
          De pagina die u zoekt bestaat helaas niet (meer). Geen zorgen — via
          onderstaande link vindt u snel de weg terug.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded bg-primary px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-lg"
          >
            Naar de homepage
          </Link>
          <Link
            href="/contact"
            className="rounded border-2 border-primary px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </section>
  );
}
