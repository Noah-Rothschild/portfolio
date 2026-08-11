import { Project } from "../types/project";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div>
            <h3>{project.title}</h3>
{project.techStack && (
    <div>
        {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
        ))}
    </div>
)}
<p>Status: {project.status}</p>
{project.liveUrl && <a href={project.liveUrl}>Live Demo</a>}
{project.githubUrl && <a href={project.githubUrl}>GitHub</a>}
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            
        </div>
    );
}