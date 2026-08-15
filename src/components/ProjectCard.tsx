import { Project } from "../types/project";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
    variant?: "default" | "compact";
}

export default function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
    return (
        <Link
        href={`/projects/${project.slug}`}
        className="group flex flex-col gap-3 py-8 border-t border-gray-200 hover:bg-gray-50 transition-colors duration-300 -mx-4 px-7">
        <h3 className="font-comfortaa text-2xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
            {project.title}
        </h3>

        <p className="font-source-sans text-sm text-gray-600 leading-relaxed max-w-3xl">
            {project.description}
        </p>

        {project.techStack && (
            <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
                <span key={tech} className="text-xs uppercase tracking-wider px-2.5 py-1 border bg-gray-100 border-gray-400 text-gray-500 rounded-full">
                {tech}
                </span>
            ))}
            </div>
        )}
        </Link>
  );
}