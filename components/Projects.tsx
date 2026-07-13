"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ExternalLink,
  ChevronDown,
  Wrench,
  Lightbulb,
  Target,
  MessageSquare,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";

const projects = [
  {
    number: "01",
    title: "AI Mock Interview",
    tagline: "Voice-powered interview practice with AI feedback",
    description:
      "An AI-powered mock interview platform with voice conversations, Google login, session persistence, and real-time feedback scoring. Uses the Web Speech API for natural interaction and Gemini for intelligent interview responses.",
    problem:
      "Most mock interview tools feel robotic. You type, it responds. There's no voice, no flow, no pressure — the things that make real interviews hard.",
    challenge:
      "Building natural voice interaction in the browser while maintaining session state and providing meaningful feedback. The Web Speech API has inconsistent support across browsers.",
    approach:
      "Used the Web Speech API for real-time voice recognition, Gemini for generating contextually relevant interview questions and feedback, and Firebase for session persistence and authentication.",
    tech: ["React 18", "Vite", "Web Speech API", "Google Gemini", "Firebase Auth", "Firestore"],
    live: "https://ai-interview-ten-woad.vercel.app/",
    takeaways: [
      "Voice APIs are fragile — built fallbacks for browser compatibility",
      "Session persistence across tabs requires careful state synchronization",
      "AI feedback quality depends heavily on prompt engineering",
    ],
  },
  {
    number: "02",
    title: "Dawn of the Werewolf",
    tagline: "Real-time multiplayer social deduction game",
    description:
      "A real-time multiplayer Werewolf game where players are assigned secret roles like villagers, werewolves, and leaders. The game alternates between day and night phases — players discuss and vote during the day, while werewolves secretly coordinate at night through private chat.",
    problem:
      "Social deduction games rely on real-time communication, hidden information, and game state synchronization — all things that are hard to get right over the web.",
    challenge:
      "Keeping game state consistent across all connected players while maintaining the secrecy of role assignments. Night phase requires separate communication channels that certain players can't access.",
    approach:
      "Used Socket.IO for real-time bidirectional communication. Server maintains authoritative game state. Client receives only the information their role is allowed to see.",
    tech: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
    live: "https://nightmarewolf.netlify.app/",
    takeaways: [
      "Real-time multiplayer is 80% backend logic, 20% frontend",
      "Game state synchronization is a distributed systems problem",
      "Event-driven architecture scales better than polling",
    ],
  },
  {
    number: "03",
    title: "Syntara Healthcare",
    tagline: "E-commerce platform with real-time inventory",
    description:
      "A responsive e-commerce platform built with React and MongoDB. Features smooth animations using GSAP, modern styling with Tailwind CSS, and dynamic real-time inventory management.",
    problem:
      "Healthcare products need accurate inventory tracking. A customer ordering an out-of-stock item creates trust issues and operational overhead.",
    challenge:
      "Real-time inventory updates across multiple sessions without over-fetching or showing stale data. Animations needed to feel premium without impacting performance.",
    approach:
      "GSAP for smooth scroll-triggered animations. MongoDB for flexible product data. Component-based React architecture for maintainability.",
    tech: ["React", "MongoDB", "Tailwind CSS", "JavaScript", "GSAP"],
    live: "https://www.syntarahealthcare.com",
    takeaways: [
      "GSAP animations perform better than CSS transitions for complex sequences",
      "E-commerce UX is about reducing friction at every step",
      "Real-time inventory requires careful conflict resolution",
    ],
  },
  {
    number: "04",
    title: "Zatch Chess",
    tagline: "Lightweight real-time chess over the web",
    description:
      "A real-time online chess game built with Express and Socket.IO, using chess.js to enforce legal moves and game state. The frontend is rendered with plain HTML, CSS, and vanilla JavaScript for a lightweight multiplayer experience.",
    problem:
      "Chess platforms are either heavy (requiring frameworks) or limited (single-player only). I wanted something lightweight that still supported real-time multiplayer.",
    challenge:
      "Move validation, game state management, and opponent synchronization need to happen atomically. A race condition means corrupted game state.",
    approach:
      "chess.js handles all move validation server-side. Socket.IO broadcasts moves to both players. Vanilla frontend keeps the bundle tiny and the experience fast.",
    tech: ["Node.js", "Express", "Socket.IO", "chess.js", "HTML", "CSS", "JavaScript"],
    live: "https://zatch-chess.onrender.com/",
    takeaways: [
      "Vanilla JS has its place — the entire frontend is under 50KB",
      "Server-side validation prevents cheating in multiplayer games",
      "chess.js is an excellent library for move validation and game state",
    ],
  },
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-heading">
      <div className="section-divider mb-24 sm:mb-32 lg:mb-40" />

      <div className="container-width">
        <ScrollReveal>
          <span className="text-caption mb-4 block">Projects</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 id="projects-heading" className="heading-lg mb-4">
            Things I&apos;ve
            <br />
            <span className="text-gradient">built and shipped.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-body max-w-2xl mb-16">
            Real projects with live demos. Each one solved a different problem.
            Click any project to explore the thinking behind it.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <ScrollReveal key={project.number} delay={0.1 + i * 0.05}>
              <TiltCard>
                <motion.div
                  className="card overflow-hidden"
                  layout
                >
                {/* Header - always visible */}
                <div
                  className="p-5 sm:p-6 cursor-pointer group"
                  onClick={() =>
                    setExpandedProject(expandedProject === i ? null : i)
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <span className="text-xs font-bold text-[#6366f1] mt-1 shrink-0">
                        {project.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#6366f1] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[13px] text-[#555] mt-0.5">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <MagneticButton
                        href={project.live}
                        className="btn-ghost btn-sm hidden sm:flex"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </MagneticButton>
                      <motion.div
                        animate={{ rotate: expandedProject === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4 text-[#444]" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-3 ml-7">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tag text-[9px]">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tag text-[9px]">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {expandedProject === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 border-t border-[rgba(255,255,255,0.04)]">
                        <div className="grid sm:grid-cols-2 gap-5 mt-5">
                          {/* Problem */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Target className="w-3.5 h-3.5 text-[#6366f1]" />
                              <span className="text-[11px] uppercase tracking-[0.15em] text-[#555] font-medium">
                                Problem
                              </span>
                            </div>
                            <p className="text-[13px] text-[#888] leading-relaxed">
                              {project.problem}
                            </p>
                          </div>

                          {/* Challenge */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Wrench className="w-3.5 h-3.5 text-[#6366f1]" />
                              <span className="text-[11px] uppercase tracking-[0.15em] text-[#555] font-medium">
                                Challenge
                              </span>
                            </div>
                            <p className="text-[13px] text-[#888] leading-relaxed">
                              {project.challenge}
                            </p>
                          </div>

                          {/* Approach */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Lightbulb className="w-3.5 h-3.5 text-[#6366f1]" />
                              <span className="text-[11px] uppercase tracking-[0.15em] text-[#555] font-medium">
                                Approach
                              </span>
                            </div>
                            <p className="text-[13px] text-[#888] leading-relaxed">
                              {project.approach}
                            </p>
                          </div>

                          {/* Takeaways */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <MessageSquare className="w-3.5 h-3.5 text-[#6366f1]" />
                              <span className="text-[11px] uppercase tracking-[0.15em] text-[#555] font-medium">
                                Takeaways
                              </span>
                            </div>
                            <ul className="space-y-2">
                              {project.takeaways.map((t, ti) => (
                                <li
                                  key={ti}
                                  className="text-[13px] text-[#888] leading-relaxed flex items-start gap-2"
                                >
                                  <span className="w-1 h-1 rounded-full bg-[#6366f1] mt-2 shrink-0" />
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Mobile live link */}
                        <div className="mt-5 sm:hidden">
                          <MagneticButton
                            href={project.live}
                            className="btn-ghost btn-sm w-full"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </MagneticButton>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
