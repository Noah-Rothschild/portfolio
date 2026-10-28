import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "../../../data/projects";
import ImageCarousel from "../../../components/ImageCarousel";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Noah Rothschild`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="max-w-5xl mx-auto px-6 pt-32 pb-28">
      <Link href="/#projects" className="font-comfortaa text-xs uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors duration-200">
        ← Back to projects
      </Link>

      <header className="mt-8 mb-12 flex flex-col gap-4">
        <div className="flex items-baseline gap-3">
          <h1 className="font-comfortaa text-4xl md:text-5xl font-semibold text-gray-900">
            {project.title}
          </h1>
          <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 -translate-y-1">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
            {project.status}
          </span>
        </div>

        <p className="font-source-sans text-lg text-gray-600 leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {(project.githubUrl || project.liveUrl) && (
          <div className="flex items-center gap-6">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="underline font-comfortaa text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors duration-200">
                GitHub →
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="underline font-comfortaa text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors duration-200">
                Live Site →
              </a>
            )}
          </div>
        )}
      </header>

      {project.images && project.images.length > 0 && (
        <ImageCarousel images={project.images} alt={project.title} />
      )}

      <section className="mt-16 grid md:grid-cols-[2fr_1fr] gap-16">
        <div className="flex flex-col gap-5">
          <h2 className="font-comfortaa text-2xl font-semibold text-gray-900">Overview</h2>
          {project.longDescription?.map((paragraph) => (
            <p key={paragraph} className="font-source-sans text-base text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {project.techStack && (
          <div>
            <span className="font-comfortaa text-xs uppercase tracking-wider text-gray-600 block mb-4">TechStack</span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs uppercase tracking-wider px-2.5 py-1 border border-gray-200 text-gray-500 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>
    </article>
  );
}
