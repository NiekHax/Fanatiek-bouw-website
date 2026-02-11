import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import type { Project } from "@/lib/projects";

interface Section {
  title: string;
  content: string;
}

interface ServicePageProps {
  title: string;
  intro: string;
  sections: Section[];
  image?: { src: string; alt: string };
  relatedProjects: Project[];
  ctaHeadline?: string;
  breadcrumbLabel: string;
}

export default function ServicePageTemplate({
  title,
  intro,
  sections,
  image,
  relatedProjects,
  ctaHeadline,
  breadcrumbLabel,
}: ServicePageProps) {
  return (
    <>
      {/* Header */}
      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav className="mb-6 text-sm text-medium" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/diensten" className="hover:text-primary">Diensten</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-dark">{breadcrumbLabel}</span>
          </nav>
          <h1 className="font-heading text-4xl font-bold text-dark md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl leading-relaxed text-medium">{intro}</p>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          {sections.map((section, i) => (
            <ScrollFadeIn key={i}>
              <div
                className={`mb-16 last:mb-0 ${
                  i === 0 && image
                    ? "grid items-start gap-8 lg:gap-12 lg:grid-cols-2"
                    : ""
                }`}
              >
                <div className="rounded-lg bg-primary/[0.09] p-6 md:bg-transparent md:p-0">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark md:text-3xl">
                    {section.title}
                  </h2>
                  <p className="leading-relaxed text-medium">{section.content}</p>
                </div>
                {i === 0 && image && (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-light py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <ScrollFadeIn>
              <h2 className="mb-12 text-center font-heading text-3xl font-bold text-dark">
                Gerelateerde projecten
              </h2>
            </ScrollFadeIn>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.slice(0, 3).map((project) => (
                <ScrollFadeIn key={project.id}>
                  <Link href="/ons-werk" className="group relative block aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                      <h3 className="font-heading text-sm font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        headline={ctaHeadline || "Bouwplannen? Wij denken graag met u mee."}
        primaryLabel="Offerte aanvragen"
        primaryHref="/contact"
        secondaryLabel="Bel ons"
        secondaryHref="tel:+31630222025"
      />
    </>
  );
}
