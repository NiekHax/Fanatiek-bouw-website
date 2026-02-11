import Link from "next/link";

interface CTABannerProps {
  headline?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  headline = "Bouwplannen? Wij denken graag met u mee.",
  subtitle = "Neem vrijblijvend contact op en ontdek wat Fanatiek Bouw voor u kan betekenen.",
  primaryLabel = "Neem contact op",
  primaryHref = "/contact",
  secondaryLabel = "Bel 06 253 337 80",
  secondaryHref = "tel:+31625333780",
}: CTABannerProps) {
  return (
    <section className="bg-near-black py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          {headline}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">{subtitle}</p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="rounded bg-primary px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-lg"
          >
            {primaryLabel}
          </Link>
          <a
            href={secondaryHref}
            className="rounded border-2 border-white px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-near-black"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
