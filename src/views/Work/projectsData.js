import Haven1 from "../../assets/Haven1.png";
import Haven2 from "../../assets/Haven2.png";
import Haven3 from "../../assets/Haven3.png";
import Haven4 from "../../assets/Haven4.png";
import Raven1 from "../../assets/Raven1.png";
import Raven2 from "../../assets/Raven2.png";
import Raven3 from "../../assets/Raven3.png";
import Raven4 from "../../assets/Raven4.png";
import Connect1 from "../../assets/Connect1.png";
import Connect2 from "../../assets/Connect2.png";
import Connect3 from "../../assets/Connect3.png";
import Connect4 from "../../assets/Connect4.png";
import Calanara3 from "../../assets/Calanara3.png";
import Calanara5 from "../../assets/Calanara5.png";
import Calanara6 from "../../assets/Calanara6.png";
import Calanara7 from "../../assets/Calanara7.png";
import Magic1 from "../../assets/Magic1.png";
import Magic2 from "../../assets/Magic2.png";
import Magic3 from "../../assets/Magic3.png";
import Magic4 from "../../assets/Magic4.png";
import Magic5 from "../../assets/Magic5.png";
import allpro1 from "../../assets/allpro1.png";
import allpro2 from "../../assets/allpro2.png";
import allpro3 from "../../assets/allpro3.png";
import allpro4 from "../../assets/allpro4.png";
import traven1 from "../../assets/Traven1.png";
import traven2 from "../../assets/Traven2.png";
import traven3 from "../../assets/Traven3.png";
import traven4 from "../../assets/Traven4.png";
import Weday1 from "../../assets/Weday1.png";
import Weday2 from "../../assets/Weday2.png";
import Weday3 from "../../assets/Weday3.png";
import Bs1 from "../../assets/BS1.png";
import Bs2 from "../../assets/BS2.png";
import Bs3 from "../../assets/BS3.png";
import Bs4 from "../../assets/BS4.png";

export const categories = [
  "All",
  "Office Project",
  "Freelance Project",
  "Personal Project",
];

export const projects = [
  {
    title: "HavenCannabis",
    category: "Freelance Project",
    description:
      "A clean and modern website showcasing premium cannabis products with an emphasis on brand quality and user-friendly browsing.",
    imgSrc: Haven1,
  },
  {
    title: "Raven",
    category: "Freelance Project",
    description:
      "A bold and artistic website for Raven Tattoo Studio, highlighting custom tattoo work, artist portfolios, and studio atmosphere.",
    imgSrc: Raven1,
  },
  {
    title: "Connect Studio",
    category: "Freelance Project",
    description:
      "A sleek landing platform for Connect Studio, built to present their social media services and strengthen their digital presence.",
    imgSrc: Connect1,
  },
  {
    title: "Traven",
    category: "Freelance Project",
    description:
      "A clean, modern landing page for Traven that highlights offerings and strengthens brand visibility.",
    imgSrc: traven4,
  },
  {
    title: "Allpro Construction & Renovation",
    category: "Freelance Project",
    description:
      "A professional construction company website featuring services, past projects, and renovation solutions for residential and commercial clients.",
    imgSrc: allpro4,
  },
  {
    title: "Beauty Society BKK",
    category: "Freelance Project",
    description:
      "A stylish and elegant website for a Bangkok-based beauty salon, showcasing beauty treatments, pricing, and premium wellness services.",
    imgSrc: Bs1,
  },

  {
    title: "Calanara",
    category: "Personal Project",
    description:
      "A simple and efficient scheduling app designed to organize daily routines, tasks, and events with clarity.",
    imgSrc: Calanara3,
  },
  {
    title: "Magic Of Flavour",
    category: "Personal Project",
    description:
      "A recipe-sharing platform where users can discover, save, and explore a variety of delicious meals from around the world.",
    imgSrc: Magic5,
  },
  {
    title: "WeDay Social Platform",
    category: "Office Project",
    description:
      "An internal social and administrative platform supporting company communication, content sharing, and team management tools.",
    imgSrc: Weday1,
  },
  {
    title: "WeDay Internal Operation Management",
    category: "Office Project",
    description:
      "An internal admin-only operation management system designed to manage platform users, penalties, and moderation workflows. ",
    imgSrc: Weday2,
  },
  {
    title: "WeDay Page Admin Management",
    category: "Office Project",
    description:
      "A page-level admin management system designed for page owners and administrators to manage social content and e-commerce operations within their pages.",
    imgSrc: Weday3,
  },
];

export const allProjects = [
  {
    title: "WeDay Social Platform",
    description: "A comprehensive internal social platform.",
    detailsDescription: `
     Worked as a Frontend Developer to build a social media platform combined with e-commerce workflows, focusing on performance, usability, and scalability. The platform enables social interaction, content management, and product-driven engagement within a single system.
     Developed responsive and accessible UI using React, MUI, and Tailwind CSS.
      Collaborated closely with the backend team to bind REST APIs and handle real-time data.
      Worked directly with UI/UX designers to translate designs into pixel-perfect interfaces.

    `,
    images: [Weday1],
    tags: ["ReactJS", "Tailwind CSS", "MaterialUI", "Office Project"],
  },
  {
    title: "WeDay Internal Operation Management",
    description: "An internal admin-only operation management system",
    detailsDescription: `
     An internal admin-only operation management system designed to manage platform users, penalties, and moderation workflows. This system is strictly for administrators and is not accessible to end users.
     Penalty and report management for enforcing platform rules.
     Package and subscription control for internal operations.
     Centralized report and penalty monitoring dashboards.
     Built using React, MUI, and Tailwind CSS. 
     Implemented a consistent UI using design tokens provided by the design team for colors, themes, and spacing
    `,
    images: [Weday2],
    tags: ["ReactJS", "Tailwind CSS", "MaterialUI", "Office Project"],
  },

  {
    title: "WeDay Page Admin Management",
    description: "A page-level admin management system.",
    detailsDescription: `
    A page-level admin management system designed for page owners and administrators to manage social content and e-commerce operations within their pages. This module enables page admins to handle both engagement and monetization features in one place.
    Page admin and owner role management.
    Page content management, including post creation, poll posts and product posts.
    E-commerce workflows such as order management and order tracking.
    Page-level dashboards for managing activity, products, and performance.
    Built using React, MUI, and Tailwind CSS.

    `,
    images: [Weday3],
    tags: ["ReactJS", "Tailwind CSS", "MaterialUI", "Office Project"],
  },

  {
    title: "HavenCannabis",
    description: "A modern landing page built for a premium cannabis brand.",
    detailsDescription: `
      Delivered a polished and responsive website for Haven Dispo, a top-tier cannabis dispensary. 
      Developed with Next.js and Tailwind CSS, the site emphasizes fast performance and a sleek,
      modern aesthetic. Added smooth Framer Motion animations to create an engaging browsing
      experience. Integrated a custom mail system with dynamic templates to streamline customer
      inquiries and support. Focused on clean UI structure, responsiveness, and scalable frontend
      architecture to reflect the brand's high-end identity.
    `,
    images: [Haven1, Haven2, Haven3, Haven4],
    tags: [
      "Next.js",
      "Tailwind CSS",
      "MagicUI",
      "Framer Motion",
      "Freelance Project",
    ],
  },

  {
    title: "Raven",
    description: "A premium landing page for Raven Tattoo Studio Bangkok.",
    detailsDescription: `
      Designed and developed a minimal yet bold digital presence for Raven Tattoo Studio. 
      Using Next.js, Tailwind CSS, and ShadCN UI, I created a visually clean and responsive interface
      that highlights the studio's premium craftsmanship. Added Framer Motion animations to enhance
      visual flow without overwhelming the design. Implemented an automated mail system to support
      booking inquiries. The project focuses on elegant UI, fast performance, and refined motion
      design to match the brand's artistic personality.
    `,
    images: [Raven1, Raven2, Raven3, Raven4],
    tags: [
      "Next.js",
      "Tailwind CSS",
      "MagicUI",
      "Framer Motion",
      "Freelance Project",
    ],
  },

  {
    title: "Connect Studio",
    description: "A clean and modern website for a creative digital agency.",
    detailsDescription: `
      Developed the official website for Connect Studio, a creative hub specializing in digital
      content and brand strategy. Built with Next.js, Tailwind CSS, and ShadCN UI, the site features
      a structured grid layout, refined typography, and responsive design. Smooth animations powered
      by Framer Motion add depth and interactivity. Integrated a complete email system to support
      direct client communication. This project showcases my approach to blending clean design,
      performance, and fluid motion for modern creative agencies.
    `,
    images: [Connect1, Connect2, Connect3, Connect4],
    tags: [
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Framer Motion",
      "Freelance Project",
    ],
  },
  {
    title: "Traven",
    description:
      "A premium landing page for Traven Bar and Restaurant in Bangkok",
    detailsDescription: `
  Designed and developed a premium yet welcoming digital presence for Traven Bar and Restaurant in Bangkok.
  Built with Next.js, Tailwind CSS, and ShadCN UI, the site features a clean, modern, and fully responsive
  layout that highlights the restaurant’s atmosphere, menu offerings, and brand identity.
  Subtle Framer Motion animations were added to enhance visual flow and user engagement without
  distracting from the content. An automated mail system was implemented to handle reservations
  and customer inquiries efficiently. The project focuses on elegant UI, smooth interactions,
  and fast performance to reflect Traven’s upscale dining experience.
`,

    images: [traven1, traven2, traven3, traven4],
    tags: [
      "Next.js",
      "Tailwind CSS",
      "MagicUI",
      "Framer Motion",
      "Freelance Project",
    ],
  },

  {
    title: "Allpro Construction & Renovation",
    description:
      "A modern, informative website for a construction and renovation company.",
    detailsDescription: `
      Built a professional website for Allpro Construction & Renovation, focusing on clarity,
      trust, and ease of navigation. Utilized Next.js for fast rendering and Tailwind CSS with
      ShadCN UI for a clean and consistent design system. Framer Motion was added to deliver light,
      professional animations that enhance user engagement. The final result is a modern, responsive,
      and reliable online presence that effectively showcases the company’s services and expertise.
    `,
    images: [allpro1, allpro2, allpro3, allpro4],
    tags: [
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Framer Motion",
      "Freelance Project",
    ],
  },

  {
    title: "Beauty Society BKK",
    description:
      "A digital platform for a Bangkok-based beauty and wellness studio.",
    detailsDescription: `
      Created a stylish and dynamic website for Beauty Society BKK, highlighting their premium
      beauty and wellness services. Built with Next.js and Tailwind CSS, enhanced with ShadCN UI
      for consistency and accessibility. Added smooth Framer Motion animations for a refined user
      experience. On the backend, implemented Prisma ORM with PostgreSQL to support dynamic content,
      user management, and an intuitive admin dashboard. Designed the system to allow staff to easily
      update services, manage bookings, and maintain content with minimal effort.
    `,
    images: [Bs1, Bs2, Bs3, Bs4],
    tags: [
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Framer Motion",
      "Prisma ORM",
      "PostgreSQL",
      "Freelance Project",
    ],
  },

  {
    title: "Calanara",
    description: "A personal scheduling app for organizing daily routines.",
    detailsDescription: `
      A productivity-focused web app designed to help manage personal schedules, tasks, and daily
      routines. Built as a creative personal experiment exploring simple UI patterns and workflow
      organization features. Highlights visual clarity, clean design principles, and smooth
      user flow to improve everyday task tracking.
    `,
    images: [Calanara3, Calanara5, Calanara6, Calanara7],
    tags: ["Productivity", "Design", "Task Management", "Personal Project"],
  },

  {
    title: "Magic Of Flavour",
    description: "A recipe discovery and sharing platform.",
    detailsDescription: `
      A personal web project built to explore UI design, content structuring, and recipe management
      functionalities. Users can browse, save, and explore a variety of dishes through a clean,
      visually-driven interface. Focused on creating a warm, accessible experience with modern web
      design techniques.
    `,
    images: [Magic1, Magic2, Magic3, Magic4],
    tags: ["Food", "Design", "Recipe Sharing", "Personal Project"],
  },
];
