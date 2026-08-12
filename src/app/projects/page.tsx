import projects from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}

    </div>
  );
}