import { meta, shopify, starbucks, tesla } from "../assets/images";
import infosys from "../assets/images/infosys_logo.png";
import cart from "../assets/icons/cart.png";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    

} from "../assets/icons";
import Logo_medify from "../assets/icons/Logo_medify.svg";
import qStatic from "../assets/icons/qtrip_static.png";
import qDynamic from "../assets/icons/qdynamic.png";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Infosys",
        icon: infosys,
        iconBg: "#007CC3",
        date: "May 2022 - prsent",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Kaifi-10',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mdmurghoobkaifi/',
    }
];

export const projects = [
    {
        iconUrl: cart,
        theme: 'btn-back-green',
        name: 'QKart Frontend',
        description: 'QKart is a feature-rich e-commerce application that offers a wide variety of high-quality products for customers to browse, choose, and purchase. ',
        link: 'https://kaifi-qkart-frontend.vercel.app/',
    },
    {
        iconUrl: Logo_medify,
        theme: 'btn-back-blue',
        name: 'Medical Slot Booking Platform',
        description: 'A React web app that lets users find medical centers by state and city in the USA and book appointments easily.',
        link: 'https://medify-taupe.vercel.app/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Expense Tracker',
        description: 'A React-based Expense Tracker app that helps you record, manage, and visualize all your daily spending in one place.',
        link: 'https://kaifi-expense-tracker.vercel.app/',
    },
    {
        iconUrl: qStatic,
        theme: 'btn-back-pink',
        name: 'QTrip Static',
        description: 'QTrip is a static travel website designed for travelers seeking diverse adventures and experiences across various cities around the world.',
        link: 'https://qtrip-static-kaifi.vercel.app/index.html',
    },
    {
        iconUrl: qDynamic,
        theme: 'btn-back-black',
        name: 'QTrip Dynamic',
        description: 'QTrip is a dynamic travel website that helps travelers discover and explore a wide range of adventures across various cities worldwide.',
        link: 'https://qtrip-dynamic-phi-one.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'BOT-AI',
        description: 'This React-based web application allows users to interact and have real-time conversations with an AI model through a chat interface.',
        link: 'https://kaifi-bot-ai.vercel.app/',
    }
];