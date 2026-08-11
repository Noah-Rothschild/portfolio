export interface Project {
    title: string;
    description: string;
    status: "live" | "in-progress";
    techStack: [];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
}