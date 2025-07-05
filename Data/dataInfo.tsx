import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { HomeIcon } from "@radix-ui/react-icons";
import dinedrop from "../public/dinedrop.png";
import pawsHome from "../public/pawsHome.png";
import fit from "../public/fit.png";
import car from "../public/rent.png";

export const data = {
  name: "Anuj Gupta",
  description:
    "I love learning new things, building cool stuff, and growing every day.",
  location: "Jhansi, Uttar Pradesh",
  summary:
    "I'm Currently pursuing B.Tech in Computer Science and Engineering, focusing on Web development with React and Next.js, while also strengthening my Data Structures and Algorithms skills.",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer-motion",
    "C++",
    "C",
    "Mongo DB",
    "Express",
    "Node JS",
    "JavaScript",
  ],
  home: [
    {
      label: "Home",
      icon: HomeIcon,
      url: "/",
    },
  ],
  socialLinks: [
    {
      label: "Github",
      icon: faGithub,
      url: "https://github.com/anujgupta018",
    },
    {
      label: "LinkedIn",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/anuj-gupta-377786252",
    },
    {
      label: "X",
      icon: faXTwitter,
      url: "https://x.com/AnujjGupta07",
    },
  ],
  Education: [
    {
      College: "Jaypee University of Engineering and Technology",
      time: "2022-2026",
      degree: "Bachelor's in Technology,B.Tech (CSE)",
    },
    {
      College: "Sun International School",
      time: "2022",
      degree: "Class XII",
    },
  ],
};
export const Projects = [
  {
    id: 1,
    title: "Fit-Scheduler",
    live: "https://fit-scheduler.vercel.app/",
    code: "https://github.com/anujgupta018/fit-scheduler",
    image: fit,
    description:
      "Fit Scheduler is a smart workout planning app that helps users organize their fitness routines efficiently, making it easy to stay consistent and track progress.",
    tech: ["Next.js", "Framer-motion", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "PawsHome",
    live: "https://paws-home-6hsu-f5jgpab2t-anuj-guptas-projects-a666ceef.vercel.app/",
    code: "https://github.com/anujgupta018/paws-home",
    image: pawsHome,
    description:
      "PawsHome is a pet adoption platform designed to connect loving homes with animals in need, making the adoption process smooth, heartfelt, and easy.",
    tech: ["Next.js", "Framer-motion", "TypeScript", "Tailwind"],
  },
  {
    id: 3,
    title: "Rent-A-Car",
    live: "https://rent-a-car-orcin.vercel.app/",
    code: "https://github.com/anujgupta018/Rent-a-car",
    image: car,
    description:
      "Rent-a-Car is a sleek landing page built with AOS animations, offering a smooth and visually engaging experience for users exploring car rental services.",
    tech: ["React", "JavaScript", "AOS", "Tailwind"],
  },
  {
    id: 4,
    title: "DineDrop",
    live: "https://dine-drop-two.vercel.app/",
    code: "https://github.com/anujgupta018/DineDrop",
    image: dinedrop,
    description:
      "DineDrop is a responsive food ordering website built with React, offering users a smooth and intuitive experience for browsing and ordering meals.",
    tech: ["React", "AOS", "JavaScript", "Tailwind"],
  },
];
export const hackathons = [
  {
    name: "GameCodex (2024)",
    description:
      "Developed a GTA-themed website during GameCodex, featuring interactive elements and immersive design, capturing the essence of the game environment.",
  },
  {
    name: "HackCbs (2024)",
    description:
      "Contributed to the frontend development of a blockchain-based project during HackCbs, focusing on UI/UX and seamless user interaction",
  },
];
