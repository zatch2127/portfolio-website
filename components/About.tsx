"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Lightbulb, Code2, Zap, Target } from "lucide-react";
import ScrollReveal, { StaggerReveal } from "./ScrollReveal";
import zatch from "./images/zatch.png";

const philosophy = [
  {
    icon: Lightbulb,
    title: "Think in systems",
    desc: "Every feature is part of a larger architecture. I map the whole before writing a line.",
  },
  {
    icon: Code2,
    title: "Ship with clarity",
    desc: "Code that other engineers can read is code that lasts. I write for humans first.",
  },
  {
    icon: Zap,
    title: "Constraint-driven",
    desc: "The best solutions come from working within limits. Free tiers, tight deadlines — they force better engineering.",
  },
  {
    icon: Target,
    title: "Impact over effort",
    desc: "A 50ms response time matters more than a clever algorithm. I optimize for what users feel.",
  },
];

export default function About() {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" aria-labelledby="about-heading">
      <div className="section-divider mb-24 sm:mb-32 lg:mb-40" />

      <div className="container-width">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24 sm:mb-32">
          <div>
            <ScrollReveal>
              <span className="text-caption mb-4 block">About</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 id="about-heading" className="heading-lg">
                The person behind
                <br />
                <span className="text-gradient">the code.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="flex flex-col justify-end">
            <ScrollReveal delay={0.2}>
              <div className="space-y-5 text-body">
                <p>
                  I didn&apos;t start with a computer science degree. I started
                  with curiosity — taking things apart, seeing how they worked,
                  and wondering if I could build something better.
                </p>
                <p>
                  That curiosity led me to Python, then to full-stack
                  development, then to AI. Each step wasn&apos;t a career
                  move — it was a problem I couldn&apos;t stop thinking about.
                </p>
                <p>
                  Today, I build systems that need to work in production. Not
                  demos. Not prototypes. Software that handles real users, real
                  data, and real constraints.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Photo + Philosophy */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-24 sm:mb-32">
          {/* Photo */}
          <ScrollReveal className="lg:col-span-2" direction="left">
            <div className="relative max-w-sm">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
                <Image
                  src={zatch}
                  alt="Mohammad Zaid"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 to-transparent" />
              </div>
              {/* Accent line */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-[rgba(99,102,241,0.2)] rounded-br-2xl" />
            </div>
          </ScrollReveal>

          {/* Philosophy */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <span className="text-caption mb-6 block">Engineering Philosophy</span>
            </ScrollReveal>
            <StaggerReveal
              className="grid sm:grid-cols-2 gap-4"
              itemClassName=""
              staggerDelay={0.08}
              initialDelay={0.1}
            >
              {philosophy.map((item) => (
                  <motion.div
                    key={item.title}
                    className="card p-5 group cursor-default"
                    whileHover={{ y: -2, borderColor: "rgba(99,102,241,0.15)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-[rgba(99,102,241,0.08)] flex items-center justify-center mb-4 group-hover:bg-[rgba(99,102,241,0.12)] transition-colors">
                      <item.icon className="w-4 h-4 text-[#6366f1]" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#666] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
              ))}
            </StaggerReveal>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef}>
          <ScrollReveal>
            <span className="text-caption mb-8 block">Journey</span>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[rgba(255,255,255,0.06)]" />

            <StaggerReveal
              className="space-y-8"
              itemClassName=""
              staggerDelay={0.1}
              initialDelay={0.1}
            >
              {[
                { year: "2024", event: "Started building with Python and web technologies", detail: "First projects: chess games, e-commerce platforms, real-time apps" },
                { year: "2024", event: "Earned 10 certifications across AI and development", detail: "Oracle, Anthropic, Hugging Face, Cisco, HackerRank" },
                { year: "2025", event: "Built NutriScan — a production SaaS with AI", detail: "Flask API, 50+ endpoints, multi-source search, LLM integration, deployed on cloud" },
                { year: "2025", event: "Deepened AI/LLM expertise", detail: "Groq, Gemini, ChromaDB, LangGraph agent workflows" },
              ].map((item) => (
                  <div key={item.year + item.event} className="flex gap-6 items-start">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-[#0c0c0c] border border-[rgba(255,255,255,0.08)] flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-[#6366f1]">
                        {item.year.slice(2)}
                      </span>
                    </div>
                    <div className="pb-2">
                      <p className="text-sm font-medium text-white mb-0.5">
                        {item.event}
                      </p>
                      <p className="text-[13px] text-[#555]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
