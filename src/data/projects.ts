import { Project } from "../types/project";

const projects: Project[] = [

    {
        title: "cape-safe",
        description: "Location-based system that provides safety information about Cape Town aimed at increasing tourism safety within the city backed by official SAPS crime data.",
        slug: "tourism-safety-app",
        longDescription: [
            "Cape Safe is a mobile app that lets locals and visitors share and view safety information about areas around Cape Town, displayed on an interactive map.",
            "Built with React Native and TypeScript, with a Node.js service and Firebase handling data and authentication, and the Google Maps API powering location features.",
            "The risk score comes from SAPS crime statistics for 60 City of Cape Town police stations (2024/2025). Each crime type is normalised across stations before it is weighted, so common low-severity crime does not drown out violent crime. The result is shown as Lower, Moderate or High risk and as a 0 to 100 score.",
            "Additional functionality includes an emergency screen that provides access to emergency service numbers, group location sharing and user authentication through firebase.",
            "During this project I assumed the role of lead developer in a team of 6 and mentored group members in proper Github practices."
        ],
        images: ["/images/projects/tourism-safety-app/2.png", "/images/projects/tourism-safety-app/3.png", "/images/projects/tourism-safety-app/4.png"],
        techStack: ["React Native", "Node.js", "Firebase", "Google Maps API", "TypeScript"],
        status: "in-progress",
        liveUrl: "",
        githubUrl: "https://github.com/Cape-Safe/cape-safe",
        
    },

    {
        title: "chefbook",
        description: "Webapp Project where a user adds ingredients to their personal pantry and is able to have recipes suggested to them based on the contents of their pantry.",
        slug: "chefbook",
        longDescription: [
            "Chefbook lets users keep track of the ingredients in their personal pantry and suggests recipes they can make from what they already have.",
            "The back end is a Django REST Framework API backed by PostgreSQL with JWT authentication. This is all displayed by a React front end.",
            "The project was built as a full-stack solution to a problem I identified in my own life. I often have ingredients in my pantry that I forget about, and I end up buying more ingredients for recipes that I could have made with what I already had. Chefbook solves this problem by allowing users to input their pantry contents and then suggesting recipes based on those ingredients.",
        ],
        images: ["/images/projects/chefbook/1.png", "/images/projects/chefbook/2.png", "/images/projects/chefbook/3.png"],
        status: "live",
        techStack: ["Django REST Framework", "React", "PostGreSQL", "Python", "JWT Auth", "JavaScript"],
        liveUrl: "https://chefbook-ashen.vercel.app/",
        githubUrl: "https://github.com/Noah-Rothschild/chefbook",
        
    },

    {
        title: "rising-tide",
        description: "C-2-C E-commerce website built using Javascript, PHP and MySQL that aims to connect South African vendors to customers in a secure marketplace environment.",
        slug: "rising-tide",
        longDescription: [
            "Rising Tide is a customer-to-customer marketplace that connects South African vendors with buyers in a secure environment.",
            "It is built with PHP and MySQL on the server, with JavaScript, HTML and CSS on the client.",
            "Built during an e-commerce course, this project was a great opportunity to learn about the challenges of building a secure and scalable e-commerce platform, managing search and filtering, and implementing a user-friendly interface.",
        ],
        images: ["/images/projects/rising-tide/1.png", "/images/projects/rising-tide/2.png", "/images/projects/rising-tide/3.png"],
        status: "in-progress",
        techStack: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
        liveUrl: "",
        githubUrl: "https://github.com/Noah-Rothschild/rising-tide",
        
    },

    {
        title: "portfolio-website",
        description: "A responsive portfolio website showcasing my projects and skills.",
        slug: "portfolio-website",
        longDescription: [
            "The site you're looking at: a responsive portfolio showcasing my projects and skills.",
            "Built with Next.js and TypeScript and styled with Tailwind CSS.",
        ],
        images: ["/images/projects/portfolio-website/1.png"],
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        status: "live",
        liveUrl: "",
        githubUrl: "https://github.com/Noah-Rothschild/portfolio",
        
    }
    

];

export default projects;