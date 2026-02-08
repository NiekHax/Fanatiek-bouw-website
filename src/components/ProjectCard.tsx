import Image from "next/image";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg"
      aria-label={`Bekijk project: ${project.title}`}
    >
      <Image
        src={project.images[0].src}
        alt={project.images[0].alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="font-heading text-lg font-bold text-white">
          {project.title}
        </h3>
        <span className="mt-1 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          {project.category}
        </span>
      </div>
    </button>
  );
}
