import { Project } from "../types/project";

interface ProjectCardProps {
    project: Project;
    variant?: "default" | "compact";
}

export default function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
    return (
        <div className={`border p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300 w-full ${variant === "compact" ? "max-w-sm" : "max-w-2xl"} mx-auto bg-white text-gray-900 space-y-3`}>
            <h3 className="text-xl font-bold">{project.title}</h3>
            {project.techStack && (
                <div>
                    {project.techStack.map((tech) => (
                        <span key={tech} className="bg-accent/10 text-accent text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
            <p className="text-sm text-gray-500">Status: {project.status}</p>
            <div className="flex gap-4">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Live Demo
                </a>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    GitHub
                </a>}
            </div>
            {variant === "default" && <p className="text-sm text-gray-700">{project.description}</p>}
            
        </div>
    );
}