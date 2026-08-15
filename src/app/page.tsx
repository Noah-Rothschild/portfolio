import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div>
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center gap-5 px-10">
          <h1 className="font-comfortaa text-[clamp(3rem,10vw,9rem)] font-light tracking-tight text-gray-900">Noah Rothschild</h1>
          <h2 className="font-source-sans text-[clamp(2rem,3vw,3rem)] font-light text-gray-500 tracking-wide">Software Engineer</h2>

          <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-8">
            <a href="https://github.com/Noah-Rothschild" target="_blank" rel="noopener noreferrer" className="font-comfortaa text-xs uppercase tracking-wider text-gray-700 hover:text-gray-900 transition-colors duration-200"> <img src="/images/github.png" alt="GitHub Icon" className="inline-block w-4 h-4 mr-1" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/noah-rothschild-095270202/" target="_blank" rel="noopener noreferrer" className="font-comfortaa text-xs uppercase tracking-wider text-gray-700 hover:text-gray-900 transition-colors duration-200"> <img src="/images/linkedin.png" alt="LinkedIn Icon" className="inline-block w-4 h-4 mr-1" />
              LinkedIn
            </a>
            <a href="mailto:nprothschild@gmail.com" className="font-comfortaa text-xs uppercase tracking-wider text-gray-700 hover:text-gray-900 transition-colors duration-200"> <img src="/images/email.png" alt="Email Icon" className="inline-block w-4 h-4 mr-1" />
              Email
            </a>
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