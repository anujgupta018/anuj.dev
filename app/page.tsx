"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import profile from "../public/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Leetcode from "../public/leetcode.svg";
import gfg from "../public/gfg.svg";

const socialLinks = [
  {
    icon: <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />,
    url: "https://github.com/anujgupta018",
  },
  {
    icon: <img src="leetcode.svg" className="w-6 h-6 " />,
    url: "https://leetcode.com/u/Anujgupta_/",
  },
  {
    icon: <img src="gfg.svg" alt="GFG" className="w-6 h-6" />,
    url: "https://www.geeksforgeeks.org/user/anujjgupta/",
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />,
    url: "https://www.linkedin.com/in/anuj-gupta-377786252",
  },
];

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "C++",
  "MongoDB",
];

const hackathons = [
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

const projects = [
  {
    title: "Comment Analyser",
    description:
      "Developed the frontend for the 'Comment Analyser' project, which leverages AI to analyze and classify YouTube comments based on sentiment, helping users to gain insights into public feedback and engagement.",
    github: "https://github.com/anujgupta018/Comment-Analyzer",
    demo: "https://github.com/anujgupta018/Comment-Analyzer",
  },
  {
    title: "Rent-a-Car",
    description:
      "A visually engaging landing page built with React, featuring smooth animations and a modern, user-friendly UI design",
    github: "https://github.com/anujgupta018/Rent-a-car",
    demo: "https://rent-a-car-orcin.vercel.app",
  },
  {
    title: "Dine-Drop",
    description: "DineDrop is a sleek food ordering website built with React, providing a smooth and user-friendly experience for browsing and ordering meals.",
    github: "https://github.com/anujgupta018/DineDrop",
    demo: "https://dine-drop-two.vercel.app",
  },
  {
    title: "Blogify",
    description: "Blogify is an application that enables users to create, update, and delete blogs, providing a smooth and interactive blogging experience",
    github: "https://github.com/anujgupta018/Blogify",
    demo: "https://github.com/anujgupta018/Blogify",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.header
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <Image
            src={profile}
            alt="Anuj Gupta"
            width={120}
            height={120}
            className="rounded-full border-4 border-white"
          />
          <h1 className="text-4xl font-bold mt-4">Anuj Gupta</h1>
          <p className="text-xl text-gray-400">
            Full Stack Developer (3rd Year) | Focused on Frontend & Strong in
            Problem Solving
          </p>
        </div>
        <nav className="mt-6">
          <ul className="flex justify-center space-x-4">
            {"Skills Hackathons Projects".split(" ").map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-blue-400 hover:text-blue-600 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>

      <motion.section
        className="max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.section id="skills" className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
        <div className="overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex space-x-6 animate-marquee"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section id="hackathons" className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">Hackathons</h2>
        <div className="space-y-4">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.name}
              className="bg-gray-800 p-4 rounded shadow"
            >
              <h3 className="font-semibold text-blue-400">{hackathon.name}</h3>
              <p className="text-gray-400">{hackathon.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="projects" className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 p-4 rounded shadow"
            >
              <h3 className="font-semibold text-lg text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-2">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.footer className="max-w-3xl mx-auto text-center">
        <p className="text-gray-500">Contact: invincibleanuj1718@gmail.com</p>
      </motion.footer>
    </div>
  );
}
