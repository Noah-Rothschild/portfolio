"use client";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useState, useEffect } from "react";

export default function Home() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (

    <div>
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center gap-5 px-10">
          <h1 className="font-comfortaa text-[clamp(3rem,10vw,9rem)] font-light tracking-tight text-gray-900">Noah Rothschild</h1>
          <h2 className="font-source-sans text-[clamp(2rem,3vw,3rem)] font-light text-gray-500 tracking-wide">Software Engineer</h2>
          
          
          <div className={`absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 transition-opacity duration-400 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-8">
              <a href="https://github.com/Noah-Rothschild" target="_blank" rel="noopener noreferrer" className="font-comfortaa text-xs uppercase tracking-wider text-gray-500 gap-1 inline-flex hover:text-gray-900 transition-colors duration-200">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/noah-rothschild-095270202/" target="_blank" rel="noopener noreferrer" className="font-comfortaa text-xs uppercase tracking-wider text-gray-500 gap-1 inline-flex hover:text-gray-900 transition-colors duration-200">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a href="mailto:nprothschild@gmail.com" className="font-comfortaa text-xs uppercase tracking-wider text-gray-500 gap-1 inline-flex hover:text-gray-900 transition-colors duration-200">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-10.5 6.75L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l10.5 6.75 10.5-6.75z" />
                </svg>
                Email
              </a>
            </div>
            <a href="#projects" className="animate-bounce">
              <span className="text-gray-700 text-2xl">
                <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </a>
          </div>
      </section>

      <section id="projects" className="scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-comfortaa text-3xl font-semibold text-gray-900 mb-4">Selected Work</h2>
          <div className="project-previews">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 px-6 py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-comfortaa text-3xl font-semibold text-gray-900 mb-8">About</h2>
            <p className="font-source-sans text-base text-gray-600 leading-relaxed max-w-md mb-6">
              Hello, I'm Noah Rothschild! I'm a software engineer with a passion for building full-stack solutions. My current experience includes leveraging modern web technologies such as Django, Typescript, React and Next.js to create efficient and scalable web-solutions. I am always looking for new challenges and learning opportunities and am currently developing my cloud architecture knowledge.
              </p>
              <a href="/noah_rothschild_cv.pdf" download className="font-comfortaa text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors duration-200">
                Download Resume →
              </a>
            </div>

          <div className="flex flex-col gap-10">
            <div>
              <span className="font-comfortaa text-xs uppercase tracking-wider text-gray-600 block mb-4">TechStack</span>
              <div className="flex flex-wrap gap-2">
                {["Python", "JavaScript", "Java", "PHP", "TypeScript", "Django", "MySQL", "PostgreSQL", "CSS", "HTML", "AWS", "React"].map((tech) => (
                  <span key={tech} className="text-xs uppercase tracking-wider px-2.5 py-1 border border-gray-200 text-gray-500 rounded-full">
                    {tech}
                    </span>
              ))}
              </div>
            </div>

            <div>
              <span className="font-comfortaa text-xs uppercase tracking-wider text-gray-600 block mb-4">Education</span>
              <p className="font-source-sans font-semibold text-gray-900">Eduvos, Cape Town</p>
              <p className="font-source-sans text-sm text-gray-600">BSc Information Technology: Software Engineering  2024–2026</p>
              <p className="font-source-sans text-xs text-gray-400 mt-1">Expected November 2026</p>
            </div>
          </div>
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

      <section className="footer">
        <p>{new Date().getFullYear()} &copy;  Noah Rothschild. All rights reserved.</p>
      </section>
    
    </div>
  );
}