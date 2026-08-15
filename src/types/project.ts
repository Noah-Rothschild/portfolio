export interface Project {
    title: string;
    slug: string;
    description: string;
    status: "live" | "in-progress";
    techStack?: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
}