import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div>
      <section id="hero" className="hero-section">
        <div className="hero">
          <h1>Noah Rothschild</h1>
          <h2>Software Engineer</h2>
          <img src="/profile.jpg" alt="Profile Picture" />
          <p>Building full-stack solutions to real problems.</p>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="previews">
          <h2>Selected Projects</h2>
          <p>Here are some of my recent projects:</p>
          <div className="project-previews">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div>
          <h2>About</h2>
          <p>Hello, I'm Noah Rothschild! I'm a software engineer with a passion for building full-stack solutions. My current experience includes leveraging modern web technologies such as Django, Typescript, React and Next.js to create efficient and scalable web-solutions. I am always looking for new challenges and learning opportunities and am currently developing my cloud architecture knowledge.</p>
          <a href="/noah_rothschild_cv.pdf" download>Download Resume</a>
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <h2>Contact Me</h2>
          <p>If you have a project that needs help or a role that you think I'd be a good fit for, feel free to reach out!</p>

          <h2>Location</h2>
          <p>Cape Town, South Africa.</p>

          <h2>Email</h2>
          <p><a href="mailto:nprothschild@gmail.com">nprothschild@gmail.com</a></p>

          <h2>Social Media</h2>
          <p><a href="https://www.linkedin.com/in/noah-rothschild-095270202/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href="https://github.com/Noah-Rothschild" target="_blank" rel="noopener noreferrer">GitHub</a></p>

        </div>
      </section>
    </div>
  );
}