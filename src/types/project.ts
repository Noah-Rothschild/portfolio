export interface Project {
    title: string;
    description: string;
    status: "live" | "in-progress";
    techStack?: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
}