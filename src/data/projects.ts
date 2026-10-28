import { Project } from "../types/project";

const projects: Project[] = [

    {
        title: "cape-safe",
        description: "Location-based system that provides crowd-sourced safety information about Cape Town aimed at increasing tourism safety within the city.",
        slug: "tourism-safety-app",
        techStack: ["React Native", "Node.js", "Firebase", "Google Maps API", "TypeScript"],
        status: "in-progress",
        liveUrl: "",
        githubUrl: "https://github.com/Cape-Safe/cape-safe",
        
    },

    {
        title: "chefbook",
        description: "Webapp Project where a user adds ingredients to their personal pantry and is able to have recipes suggested to them based on the contents of their pantry.",
        slug: "chefbook",
        status: "live",
        techStack: ["Django REST Framework", "React", "PostGreSQL", "Python", "JWT Auth", "JavaScript"],
        liveUrl: "https://chefbook-ashen.vercel.app/",
        githubUrl: "https://github.com/Noah-Rothschild/chefbook",
        
    },

    {
        title: "rising-tide",
        description: "C-2-C E-commerce website built using Javascript, PHP and MySQL that aims to connect South African vendors to customers in a secure marketplace environment.",
        slug: "rising-tide",
        status: "live",
        techStack: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
        liveUrl: "https://rising-tide.freedev.app/",
        githubUrl: "https://github.com/Noah-Rothschild/rising-tide",
        
    },

    {
        title: "portfolio-website",
        description: "A responsive portfolio website showcasing my projects and skills.",
        slug: "portfolio-website",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        status: "live",
        liveUrl: "",
        githubUrl: "https://github.com/Noah-Rothschild/portfolio",
        
    },

    {
        title: "cape-safe",
        description: "Location-based system that provides crowd-sourced safety information about Cape Town aimed at increasing tourism safety within the city.",
        slug: "tourism-safety-app",
        techStack: ["React Native", "Node.js", "Firebase", "Google Maps API", "TypeScript"],
        status: "in-progress",
        liveUrl: "",
        githubUrl: "",
        
    }

    

];

export default projects;