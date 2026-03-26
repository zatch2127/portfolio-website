"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import logoImage from "./images/logo.png";
import syntaraImage from "./images/syntara.png";
import chessLogoImage from "./images/chess_logo.png";

const projects = [
  {
    title: "Dawn of the Werewolf",
    description:
      "A real-time multiplayer Werewolf game where players are assigned secret roles like villagers, werewolves, and leaders. The game alternates between day and night phases during the day, players discuss and vote, while at night, werewolves secretly coordinate through private chat.",
    tech: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
    github: "",
    live: "https://nightmarewolf.netlify.app/",
    featured: true,
    image: logoImage,
  },
  {
    title: "AI Mock Interview",
    description:
      "An AI-powered mock interview platform with voice conversations, Google login, session persistence, and real-time feedback scoring. It uses the Web Speech API for natural interaction, Gemini for intelligent interview responses, and Firebase for authentication and interview history.",
    tech: [
      "React 18",
      "Vite",
      "Web Speech API",
      "Google Gemini",
      "Firebase Auth",
      "Firestore",
    ],
    github: "",
    live: "https://ai-interview-ten-woad.vercel.app/",
    featured: true,
    image:
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_Blog_Header_3.width-200.format-webp.webp",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A responsive full-stack e-commerce platform built with React and MongoDB. It features smooth animations using GSAP, modern styling with Tailwind CSS, and dynamic real-time inventory management.",
    tech: ["React", "MongoDB", "Tailwind CSS", "JavaScript", "GSAP"],
    github: "",
    live: "https://www.syntarahealthcare.com",
    featured: true,
    image: syntaraImage,
  },
  {
    title: "Zatch Chess",
    description:
      "A real-time online chess game built with Express and Socket.IO, using chess.js to enforce legal moves and game state. The frontend is rendered with plain HTML, CSS, and vanilla JavaScript for a lightweight multiplayer experience.",
    tech: [
      "Node.js",
      "Express",
      "Socket.IO",
      "chess.js",
      "HTML",
      "CSS",
      "JavaScript",
      "npm",
    ],
    github: "",
    live: "https://zatch-chess.onrender.com/",
    featured: true,
    image: chessLogoImage,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-900/30" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-400">
            A showcase of innovative solutions that demonstrate technical
            excellence and creative problem-solving
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -5 }}
            >
              <div
                className={`grid gap-0 ${
                  project.featured ? "lg:grid-cols-2" : "grid-cols-1"
                }`}
              >
                <div className="relative overflow-hidden">
                  <div className="relative min-h-[280px] overflow-hidden bg-slate-950 sm:min-h-[320px]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt=""
                      fill
                      aria-hidden="true"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="scale-110 object-cover object-center opacity-30 blur-2xl transition-transform duration-500 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_45%),linear-gradient(135deg,rgba(15,23,42,0.25),rgba(2,6,23,0.92))]" />
                    <div className="absolute inset-0 p-6 sm:p-8">
                      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(15,23,42,0.45)] backdrop-blur-sm">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          sizes="(min-width: 1024px) 42vw, 100vw"
                          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105 sm:p-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <motion.div
                    className="absolute right-4 top-4 flex gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      hoveredProject === index
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-slate-900/80 p-2 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-blue-600"
                        data-interactive
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => window.open(project.live, "_blank")}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-purple-600"
                      data-interactive
                    >
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </motion.div>
                </div>

                <div className="flex flex-col justify-center p-6">
                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {project.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-600 bg-slate-700/50 px-3 py-1 text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="relative z-10 flex gap-4">
                    {project.github ? (
                      <button
                        type="button"
                        onClick={() => window.open(project.github, "_blank")}
                        className="relative z-20 flex cursor-pointer items-center gap-2 border-none bg-transparent p-0 text-slate-400 transition-colors duration-200 hover:text-white"
                        style={{ pointerEvents: "auto" }}
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </button>
                    ) : null}

                    <button
                      type="button"
                      onClick={() => window.open(project.live, "_blank")}
                      className="relative z-20 flex cursor-pointer items-center gap-2 border-none bg-transparent p-0 text-slate-400 transition-colors duration-200 hover:text-blue-400"
                      style={{ pointerEvents: "auto" }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
            data-interactive
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
