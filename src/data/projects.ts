import { Project } from "../types/project";

const projects: Project[] = [
    {
        title: "chefbook",
        description: "Webapp Project where a user adds ingredients to their personal pantry and is able to have recipes suggested to them based on the contents of their pantry.",
        status: "in-progress",
        techStack: ["Django", "React", "PostGreSQL"],
        liveUrl: "",
        githubUrl: "https://github.com/Noah-Rothschild/chefbook",
        
    },

    {
        title: "rising-tide",
        description: "C-2-C E-commerce website built using Javascript, PHP and MySQL that aims to connect South African vendors to customers in a secure marketplace environment.",
        status: "live",
        techStack: ["PHP", "JavaScript", "MySQL"],
        image: "/images/rising_tide.png",
        liveUrl: "https://rising-tide.freedev.app/",
        githubUrl: "https://github.com/Noah-Rothschild/rising-tide",
        
    },

    {
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing my projects and skills.",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        status: "in-progress",
        liveUrl: "",
        githubUrl: "",
        
    },

    {
        title: "tourism-safety app",
        description: "Location-based system that provides crowd-sourced safety information about Cape Town aimed at increasing tourism safety within the city.",
        status: "in-progress",
        liveUrl: "",
        githubUrl: "",
        
    }

    

];

export default projects;