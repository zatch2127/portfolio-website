"use client"

import { motion, useInView } from "framer-motion"
import { BadgeCheck, Bot, Braces } from "lucide-react"
import type { CSSProperties } from "react"
import { useRef, useState } from "react"

const technicalStrengthGroups = [
  {
    title: "Core Programming Skills",
    items: [
      { name: "Python", summary: "Backend development, API design, data handling" },
      { name: "JavaScript", summary: "Frontend logic, async workflows, API integration" },
    ],
  },
  {
    title: "Frameworks & Frontend",
    items: [
      { name: "React / Next.js", summary: "Component-based UI, state management, routing" },
      { name: "Tailwind CSS", summary: "Responsive UI development and styling" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", summary: "Relational database design, queries, optimization basics" },
      { name: "MongoDB", summary: "CRUD operations and basic schema design" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Git / GitHub", summary: "Version control and collaboration" },
      { name: "Docker", summary: "Containerized deployment" },
      { name: "CI/CD Pipelines", summary: "Basic setup for Node.js / Python apps" },
    ],
  },
  {
    title: "AI / LLM Exposure",
    items: [
      { name: "OpenAI / Gemini", summary: "Built AI-powered mock interview platform using OpenAI / Gemini" },
      { name: "Hugging Face", summary: "Familiar with Hugging Face workflows for NLP" },
    ],
  },
] as const

const coreTechnologies = [
  "Python",
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "Tailwind CSS",
  "HTML",
  "CSS",
] as const

const expertiseGroups = [
  {
    title: "LLM",
    description: "Generative AI, LLM foundations, Claude-oriented workflows, and cloud-aligned certifications grouped into one focused capability area.",
    icon: Bot,
    accent: "var(--expertise-accent-ai)",
    certifications: [
      {
        name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        issuer: "Oracle",
        date: "2025",
        url: "https://drive.google.com/file/d/1efdO9rVNcn8iCnz81SaC0qh2ivY7iwx9/view?usp=drive_link",
      },
      {
        name: "Oracle Certified Foundations Associate / Oracle Cloud Infrastructure 2025 AI Foundations Associate",
        issuer: "Oracle",
        date: "2025",
        url: "https://drive.google.com/file/d/1ATD-KXD0uAgYbP64ZRMs6NtbHbjqpAEy/view?usp=drive_link",
      },
      {
        name: "Hugging Face (AI / ML Course Certificate)",
        issuer: "Hugging Face",
        date: "2024",
        url: "https://drive.google.com/file/d/1ph8X7jVc6LNaplSRDEr5qj4vMSb7JvbN/view?usp=drive_link",
      },
      {
        name: "Cloud Code in Action",
        issuer: "Anthropic",
        date: "2025",
        url: "https://drive.google.com/file/d/1ujwfc-EcGFCgosjvFVb00rraKZi0Y5zt/view?usp=drive_link",
      },
      {
        name: "Cloud 101",
        issuer: "Cloud Academy",
        date: "2024",
        url: "https://drive.google.com/file/d/1zhdDSSgVy3exKfaB5Z8g2lEkjsXe1IHk/view?usp=drive_link",
      },
    ],
  },
  {
    title: "Development",
    description: "Full-stack development training grounded in Python and JavaScript fundamentals with practical delivery focus.",
    icon: Braces,
    accent: "var(--expertise-accent-dev)",
    certifications: [
      {
        name: "Python Full Stack Certification",
        issuer: "G-Tech Jain  ",
        date: "2024",
        url: "https://drive.google.com/file/d/19M22fZOQP9ko4tPJQCqRBiHTiFUp6MuO/view?usp=drive_link",
      },
      {
        name: "Web Development Using Python",
        issuer: "ABMA Education & G-TEC Education",
        date: "2024",
        url: "https://drive.google.com/file/d/1WIREjZwj1F1Pcfit9yvzKxE9TGsSuSKh/view?usp=drive_link",
      },
      {
        name: "Python Basics",
        issuer: "HackerRank",
        date: "2024",
        url: "https://drive.google.com/file/d/1cqGXTK8WXrK4K8995QgOvSxXJ53DEGR-/view?usp=drive_link",
      },
      {
        name: "Python Essentials 1",
        issuer: "Cisco Networking Academy",
        date: "2024",
        url: "https://drive.google.com/file/d/1lRAGaiO1Ws11adwgSWWscRdgKEZgycOY/view?usp=drive_link",
      },
      {
        name: "Python for Data Science & Machine Learning",
        issuer: "Udemy",
        date: "2024",
        url: "https://drive.google.com/file/d/1BNGp_KdiqyTJ5jC_RZ0Nu9aekJ2OhWUe/view?usp=drive_link",
      },
    ],
  },
] as const

export default function Skills() {
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({})

  return (
    <section
      id="skills"
      ref={ref}
      className="verified-expertise relative overflow-hidden bg-slate-900/30 py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-[0.32em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.85)]" />
            Technical Expertise
          </span>
          <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            A practical skill set presented for hiring managers and recruiters.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300/72 sm:text-lg">
            Core languages, frameworks, databases, and certifications organized in a resume-friendly format that
            makes your strengths easy to evaluate during screening.
          </p>
        </motion.div> */}

        <div className="mt-16">
          <motion.div
            className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Professional Snapshot</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">Technical Strengths</h3>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300/74">
              Focused on Python-led development with practical experience in backend services, frontend delivery,
              real-time applications, and database-driven web products.
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {technicalStrengthGroups.map((group) => (
                <div key={group.title} className="rounded-[20px] border border-white/8 bg-slate-950/45 px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">{group.title}</p>
                  <div className="mt-4 space-y-3">
                    {group.items.map((skill) => (
                      <div key={skill.name}>
                        <p className="text-sm font-medium text-white">{skill.name}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-300/80">{skill.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {expertiseGroups.map((group, index) => {
            const Icon = group.icon
            const isExpanded = expandedGroups[group.title] ?? false
            const visibleCertificates = isExpanded ? group.certifications : group.certifications.slice(0, 2)

            return (
              <motion.article
                key={group.title}
                className="expertise-card group relative overflow-visible rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.75, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-80"
                  style={{ background: `linear-gradient(90deg, transparent, ${group.accent}, transparent)` }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div
                    className="expertise-icon flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 text-slate-400"
                    style={{ "--expertise-brand": group.accent } as CSSProperties}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-slate-400">
                      Certified
                    </span>
                    <span className="text-sm font-medium text-white/90">{group.certifications.length} Records</span>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Capability Area</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{group.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300/74">{group.description}</p>
                </div>

                <div className="mt-8 space-y-3">
                  {visibleCertificates.map((certificate) => (
                    <div
                      key={certificate.name}
                      className="relative rounded-[20px] border border-white/8 bg-slate-950/45 px-4 py-4 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-1px]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white">{certificate.name}</p>
                          <p className="mt-1 text-sm text-slate-400">{certificate.issuer}</p>
                        </div>

                        <a
                          href={certificate.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${certificate.name} certificate`}
                          className="verified-badge peer relative inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-slate-200 outline-none transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:border-white/20 hover:bg-white/[0.11] focus-visible:border-cyan-300/40 focus-visible:bg-white/[0.12]"
                        >
                          <BadgeCheck className="h-3.5 w-3.5 text-cyan-300" />
                          Verified
                        </a>
                      </div>

                      <div className="pointer-events-none absolute right-4 z-20 mt-3 w-[220px] translate-y-2 rounded-2xl border border-white/15 bg-white/[0.1] p-4 opacity-0 shadow-[0_18px_50px_rgba(2,8,23,0.48)] backdrop-blur-2xl transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] peer-hover:pointer-events-auto peer-hover:translate-y-0 peer-hover:opacity-100 peer-focus-visible:pointer-events-auto peer-focus-visible:translate-y-0 peer-focus-visible:opacity-100 max-sm:left-4 max-sm:right-4 max-sm:w-auto">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Verification</p>
                        <p className="mt-3 text-sm text-white">{certificate.issuer}</p>
                        <p className="mt-1 text-sm text-slate-300">Issued {certificate.date}</p>
                      </div>
                    </div>
                  ))}

                  {group.certifications.length > 2 ? (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedGroups((current) => ({
                          ...current,
                          [group.title]: !isExpanded,
                        }))
                      }
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-200 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.1]"
                    >
                      {isExpanded ? "Show Less" : `Show More +${group.certifications.length - 2}`}
                    </button>
                  ) : null}
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* <motion.div
          className="mt-16 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Core Technologies</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">What I work with</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300/74">
            A concise stack overview that helps employers quickly identify your strongest tools and development
            comfort zone.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {coreTechnologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm text-slate-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
