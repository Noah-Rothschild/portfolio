import { Project } from "../types/project";

interface ProjectCardProps {
    project: Project;
    variant?: "default" | "compact";
}

export default function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
    return (
        <div className="border p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-sm bg-white text-gray-900">
            <h3>{project.title}</h3>
            {project.techStack && (
                <div>
                    {project.techStack.map((tech) => (
                        <span key={tech} className="bg-accent/10 text-accent text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
            <p>Status: {project.status}</p>
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Live Demo
            </a>}
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                GitHub
            </a>}
            <img src={project.image} alt={project.title} />
            {variant === "default" && <p>{project.description}</p>}
            
        </div>
    );
}