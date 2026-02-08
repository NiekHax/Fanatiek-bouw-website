"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Lightbox from "@/components/Lightbox";
import CTABanner from "@/components/CTABanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const categories = ["Alles", "Verbouwingen", "Renovatie", "Overkappingen"];

export default function OnsWerkPage() {
  const [activeFilter, setActiveFilter] = useState("Alles");
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  const filtered =
    activeFilter === "Alles"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Header */}
      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-dark md:text-5xl">
            Ons werk
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-medium">
            Van verbouwingen en renovaties tot overkappingen op maat — hieronder
            vindt u een selectie van onze afgeronde projecten. Elk project is met
            dezelfde toewijding en zorg voor detail uitgevoerd.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Filter buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-primary text-white"
                    : "border border-gray-300 text-dark hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ScrollFadeIn key={project.id}>
                <ProjectCard
                  project={project}
                  onClick={() => setLightboxProject(project)}
                />
              </ScrollFadeIn>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-medium">
              Heeft u een project in gedachten? Wij bespreken graag de
              mogelijkheden.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block rounded bg-primary px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-lg"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxProject && (
        <Lightbox
          images={lightboxProject.images}
          title={lightboxProject.title}
          isOpen={!!lightboxProject}
          onClose={() => setLightboxProject(null)}
        />
      )}

      <CTABanner />
    </>
  );
}
