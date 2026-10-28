export interface Project {
    title: string;
    slug: string;
    description: string;
    longDescription?: string[];
    status: "live" | "in-progress";
    techStack?: string[];
    image?: string;
    images?: string[];
    liveUrl?: string;
    githubUrl?: string;
}