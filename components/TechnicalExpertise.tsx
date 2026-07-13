"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Server,
  Globe,
  Database,
  Code2,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    id: "ai",
    icon: Brain,
    title: "AI & LLMs",
    color: "#6366f1",
    description: "Building with large language models, embeddings, and intelligent agents.",
    items: [
      { name: "OpenAI / Gemini API", level: "Production" },
      { name: "Groq (Llama 3.3 70B)", level: "Production" },
      { name: "ChromaDB (vector search)", level: "Production" },
      { name: "LangGraph agents", level: "Exploring" },
      { name: "Hugging Face NLP", level: "Certified" },
      { name: "Intent classification", level: "Built" },
    ],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend",
    color: "#8b5cf6",
    description: "APIs, authentication, data processing, and server-side architecture.",
    items: [
      { name: "Python / Flask / FastAPI", level: "Primary" },
      { name: "Django REST Framework", level: "Built" },
      { name: "REST API design (50+ endpoints)", level: "Production" },
      { name: "JWT + bcrypt auth", level: "Production" },
      { name: "Rate limiting & validation", level: "Production" },
      { name: "Background task processing", level: "Familiar" },
    ],
  },
  {
    id: "frontend",
    icon: Globe,
    title: "Frontend",
    color: "#06b6d4",
    description: "User interfaces, interactions, and component architecture.",
    items: [
      { name: "React / Next.js", level: "Primary" },
      { name: "TypeScript", level: "Daily use" },
      { name: "Tailwind CSS", level: "Production" },
      { name: "Framer Motion", level: "Built" },
      { name: "GSAP animations", level: "Built" },
      { name: "Responsive design", level: "Every project" },
    ],
  },
  {
    id: "data",
    icon: Database,
    title: "Data & Storage",
    color: "#10b981",
    description: "Databases, caching, search, and data pipeline design.",
    items: [
      { name: "MySQL / PostgreSQL", level: "Production" },
      { name: "MongoDB", level: "Production" },
      { name: "Redis (multi-layer caching)", level: "Production" },
      { name: "ChromaDB (semantic search)", level: "Production" },
      { name: "Schema design & optimization", level: "Every project" },
      { name: "Multi-source data pipelines", level: "Built" },
    ],
  },
  {
    id: "languages",
    icon: Code2,
    title: "Languages",
    color: "#f59e0b",
    description: "Programming languages and markup.",
    items: [
      { name: "Python", level: "Primary" },
      { name: "JavaScript / TypeScript", level: "Daily use" },
      { name: "SQL", level: "Every project" },
      { name: "HTML / CSS", level: "Foundation" },
      { name: "Bash scripting", level: "Familiar" },
    ],
  },
  {
    id: "devops",
    icon: Wrench,
    title: "DevOps & Tools",
    color: "#ef4444",
    description: "Deployment, CI/CD, version control, and infrastructure.",
    items: [
      { name: "Git / GitHub", level: "Daily use" },
      { name: "Docker", level: "Familiar" },
      { name: "CI/CD (GitHub Actions)", level: "Built" },
      { name: "AWS RDS / Render / Netlify", level: "Production" },
      { name: "Stripe integration", level: "Production" },
      { name: "Pydantic validation", level: "Production" },
    ],
  },
];

const levelColors: Record<string, string> = {
  "Primary": "bg-[rgba(99,102,241,0.15)] text-[#818cf8]",
  "Production": "bg-[rgba(16,185,129,0.1)] text-[#34d399]",
  "Daily use": "bg-[rgba(6,182,212,0.1)] text-[#22d3ee]",
  "Every project": "bg-[rgba(168,85,247,0.1)] text-[#c084fc]",
  "Built": "bg-[rgba(245,158,11,0.1)] text-[#fbbf24]",
  "Exploring": "bg-[rgba(255,255,255,0.05)] text-[#888]",
  "Certified": "bg-[rgba(99,102,241,0.1)] text-[#6366f1]",
  "Familiar": "bg-[rgba(255,255,255,0.03)] text-[#666]",
  "Foundation": "bg-[rgba(255,255,255,0.03)] text-[#555]",
};

export default function TechnicalExpertise() {
  const [activeCategory, setActiveCategory] = useState("ai");
  const active = categories.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" className="section-padding" aria-labelledby="skills-heading">
      <div className="section-divider mb-24 sm:mb-32 lg:mb-40" />

      <div className="container-width">
        <ScrollReveal>
          <span className="text-caption mb-4 block">Technical Expertise</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 id="skills-heading" className="heading-lg mb-4">
            Skills demonstrated
            <br />
            <span className="text-gradient">through production systems.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-body max-w-2xl mb-12">
            Not theoretical knowledge. Every skill listed here has been applied
            in real projects that are deployed, tested, and serving users.
          </p>
        </ScrollReveal>

        {/* Category tabs + content */}
        <ScrollReveal delay={0.3}>
          <div className="grid lg:grid-cols-[200px_1fr] gap-6">
            {/* Tabs */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-[rgba(99,102,241,0.08)] text-white border border-[rgba(99,102,241,0.15)]"
                      : "text-[#555] hover:text-[#888] hover:bg-[rgba(255,255,255,0.02)] border border-transparent"
                  }`}
                >
                  <cat.icon className="w-4 h-4 shrink-0" />
                  <span className="hidden sm:inline">{cat.title}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="card p-5 sm:p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${active.color}10` }}
                  >
                    <active.icon className="w-4 h-4" style={{ color: active.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{active.title}</h3>
                </div>
                <p className="text-[13px] text-[#555] mb-5">{active.description}</p>

                <div className="space-y-2">
                  {active.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[rgba(255,255,255,0.02)] transition-colors group"
                    >
                      <span className="text-sm text-[#ccc]">{item.name}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          levelColors[item.level] || "bg-[rgba(255,255,255,0.05)] text-[#666]"
                        }`}
                      >
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
