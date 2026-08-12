import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Noah Rothschild</h1>
        <h2>Software Engineer</h2>
        <img src="/profile.jpg" alt="Profile Picture" />
        <p>Building full-stack solutions to real problems.</p>
      </div>

      <div className="previews">
        <h2>My Work</h2>
        <p>Here are some of my recent projects:</p>
        <div className="project-previews">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} variant="compact" />
          ))}
        </div>
      </div>
    </div>
  );
}