"use client";

import { useRouter } from "next/navigation";
import { Project } from "../types/project";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
    variant?: "default" | "compact";
}

export default function ProjectCard({ project, variant = "default" }: ProjectCardProps) {

    const router = useRouter();

    return (
        <div
        onClick={() => router.push(`/projects/${project.slug}`)}
        className="group flex flex-col gap-3 py-8 border-t border-gray-200 hover:bg-gray-50 transition-colors duration-300 -mx-4 px-7 cursor-pointer">
        <div className="flex items-baseline gap-3">
            <h3 className="font-comfortaa text-2xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                {project.title}
            </h3>

            <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 -translate-y-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                {project.status}
            </span>
        
            {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-gray-900 transition-colors duration-200">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>
            )}
            {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-gray-900 transition-colors duration-200">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <circle cx="12" cy="12" r="9" />
                        <ellipse cx="12" cy="12" rx="4" ry="9" />
                        <path d="M3 12h18" />
                    </svg>
                </a>
            )}
        </div>
        

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
        </div>
  );
}