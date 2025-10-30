"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
{
  title: "Dawn of the Werewolf",
  description:
    "A real-time multiplayer Werewolf game where players are assigned secret roles like villagers, werewolves, and leaders. The game alternates between day and night phases — during the day, players discuss and vote, while at night, werewolves secretly coordinate through private chat. Built with seamless real-time communication, dynamic role assignments, and smooth UI transitions.",
  tech: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
  github: "#",
  live: "https://nightmarewolf.netlify.app/",
  featured: true,
},
    {
      title: "E-Commerce Platform",
      description:
        "A responsive full-stack e-commerce platform built with React and MongoDB. It features smooth animations using GSAP, modern styling with Tailwind CSS, and dynamic real-time inventory management.",
      tech: ["React", "MongoDB", "Tailwind CSS", "JavaScript", "GSAP"],
      github: "#",
      live: "https://www.syntarahealthcare.com",
      featured: true,
    },
    // {
    //   title: "AI-Powered Analytics Dashboard",
    //   description:
    //     "Machine learning-driven analytics platform that provides predictive insights and automated reporting for business intelligence.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tech: ["React", "Python", "TensorFlow", "AWS"],
    //   github: "#",
    //   live: "#",
    //   featured: true,
    // },
    // {
    //   title: "Real-time Collaboration Tool",
    //   description:
    //     "WebRTC-based collaboration platform with live document editing, video conferencing, and project management features.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tech: ["Vue.js", "Node.js", "Socket.io", "WebRTC"],
    //   github: "#",
    //   live: "#",
    //   featured: false,
    // },
    {
      title: "E- Voting System",
      description:
        "A secure and user-friendly electronic voting platform built . Enables voter authentication, vote casting, and real-time result tracking with admin controls.",

      image: "/placeholder.svg?height=300&width=500",
      tech: ["Python", "Html", "Css", "Js", "sqlLite"],
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of innovative solutions that demonstrate technical
            excellence and creative problem-solving
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm ${
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
                className={`grid ${
                  project.featured ? "lg:grid-cols-2" : "grid-cols-1"
                } gap-0`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Floating action buttons */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      hoveredProject === index
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={project.github}
                      className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 transition-colors duration-200"
                      data-interactive
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <button
                      type="button"
                      onClick={() => window.open(project.live, "_blank")}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 transition-colors duration-200"
                      data-interactive
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>

                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 relative z-10">
                    <button
                      type="button"
                      onClick={() => {
                        console.log("GitHub Code clicked!");
                        alert("You clicked: GitHub Code");
                      }}
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 relative z-20"
                      style={{ pointerEvents: "auto" }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        window.open(project.live, "_blank");
                      }}
                      className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 relative z-20"
                      style={{ pointerEvents: "auto" }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            data-interactive
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
