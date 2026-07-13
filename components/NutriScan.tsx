"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Layers,
  Cpu,
  Database,
  Shield,
  Search,
  BarChart3,
  ChevronRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import StatsCounter from "./StatsCounter";

const features = [
  "Scan a barcode, search by name, or upload a photo",
  "Instant health grade (A–F) with per-category scores",
  "Flagged ingredients with risk levels",
  "Condition-specific insights (diabetes, allergies, etc.)",
  'Ask the AI: "Is this safe for someone with kidney stones?"',
];

const architecture = [
  {
    icon: Search,
    title: "Search Cascade",
    desc: "4-source fallback: MySQL → Open Food Facts → USDA FoodData Central → LLM. Each layer has its own cache and circuit breaker.",
    detail: "If one source fails, the system falls through to the next automatically. No user-facing errors.",
  },
  {
    icon: Cpu,
    title: "AI Pipeline",
    desc: "Groq (Llama 3.3 70B) primary → Gemini fallback with exponential retries. Every call cost-tracked.",
    detail: "Dual-provider failover ensures the AI features stay available even when one provider is down.",
  },
  {
    icon: Database,
    title: "3-Layer Caching",
    desc: "Redis (<50ms exact match) → ChromaDB semantic (85% similarity) → HTTP ETags.",
    detail: "Most queries hit Redis and return in under 50ms. Semantic search catches similar-but-not-identical products.",
  },
  {
    icon: BarChart3,
    title: "Scoring Engine",
    desc: "Sugar, sodium, fat, calories scored against category-specific thresholds. A drink is scored differently than noodles.",
    detail: "Not just comparing numbers — the system understands that different food categories have different healthy ranges.",
  },
  {
    icon: Shield,
    title: "Security Layer",
    desc: "JWT + bcrypt + rate limiting + Pydantic validation + HMAC signing + CORS locking.",
    detail: "Production-grade security on a $7/month deployment. Every input validated, every request authenticated.",
  },
];

const metrics = [
  { label: "API Endpoints", value: "50", suffix: "+" },
  { label: "Database Tables", value: "25", suffix: "+" },
  { label: "Verified Products", value: "11000", suffix: "+" },
  { label: "Automated Tests", value: "158" },
  { label: "Monthly Cost", value: "7", prefix: "$" },
];

const stack = [
  "Python",
  "Flask",
  "MySQL",
  "Redis",
  "ChromaDB",
  "Groq",
  "Gemini",
  "Stripe",
  "React",
  "Tailwind",
  "Render",
  "AWS RDS",
];

export default function NutriScan() {
  const [expandedArch, setExpandedArch] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="nutriscan" ref={sectionRef} className="section-padding relative" aria-labelledby="nutriscan-heading">
      <div className="section-divider mb-24 sm:mb-32 lg:mb-40" />

      <div className="container-width">
        {/* Header */}
        <ScrollReveal>
          <span className="text-caption mb-4 block">Flagship Project</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 id="nutriscan-heading" className="heading-xl mb-6">
            NutriScan
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-gradient heading-md mb-8 max-w-3xl">
            The food intelligence platform that reads labels
            <br className="hidden sm:block" />
            so you don&apos;t have to.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-body max-w-3xl text-lg mb-16">
            73% of packaged foods contain ingredients most people can&apos;t
            pronounce. &quot;Natural flavors&quot; can mean 100+ chemicals. A
            &quot;healthy&quot; juice can have more sugar than Coke. I got tired
            of Googling every ingredient. So I built NutriScan.
          </p>
        </ScrollReveal>

        {/* What it does */}
        <ScrollReveal delay={0.25}>
          <div className="card p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[rgba(99,102,241,0.08)] flex items-center justify-center">
                <Layers className="w-4 h-4 text-[#6366f1]" />
              </div>
              <h3 className="heading-md">What It Does</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-3 group">
                  <ArrowRight className="w-4 h-4 text-[#6366f1] mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-[14px] text-[#888] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Architecture - expandable */}
        <ScrollReveal delay={0.3}>
          <div className="card p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-[rgba(99,102,241,0.08)] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-[#6366f1]" />
              </div>
              <h3 className="heading-md">Architecture</h3>
            </div>
            <div className="space-y-3">
              {architecture.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="rounded-xl bg-[#050505] border border-[rgba(255,255,255,0.04)] overflow-hidden cursor-pointer"
                  onClick={() => setExpandedArch(expandedArch === i ? null : i)}
                  layout
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className="w-8 h-8 rounded-lg bg-[rgba(99,102,241,0.06)] flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-[#6366f1]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-[13px] text-[#666] leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedArch === i ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-4 h-4 text-[#444] shrink-0" />
                    </motion.div>
                  </div>
                  {expandedArch === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4 pt-0"
                    >
                      <div className="pl-12 text-[13px] text-[#555] leading-relaxed border-t border-[rgba(255,255,255,0.04)] pt-3">
                        {item.detail}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Metrics - animated counters */}
        <ScrollReveal delay={0.35}>
          <StatsCounter stats={metrics} />
        </ScrollReveal>

        {/* Stack + Links */}
        <ScrollReveal delay={0.4}>
          <div className="card p-6 sm:p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <MagneticButton
                href="https://saazanutriscan.netlify.app/dashboard"
                className="btn-primary"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </MagneticButton>
              <MagneticButton href="https://github.com/zatch2127" className="btn-ghost">
                <Github className="w-4 h-4" />
                Source Code
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>

        {/* The hardest part */}
        <ScrollReveal delay={0.45}>
          <div className="mt-6 card p-6 sm:p-8 border-[rgba(99,102,241,0.1)]">
            <span className="text-caption mb-3 block">The hardest part</span>
            <p className="text-body text-[14px] leading-relaxed">
              Debugging SSL chains between Render and AWS RDS at 2 AM. Building
              search for &quot;Maaza&quot; — an Indian product in zero standard
              databases. I had to build a sync-first LLM fallback that stores
              results for future queries. Production is a different beast. Free
              tier gives you 512MB RAM and one worker. Every constraint forced a
              better solution.
            </p>
          </div>
        </ScrollReveal>

        {/* What I learned */}
        <ScrollReveal delay={0.5}>
          <div className="mt-6 card p-6 sm:p-8">
            <span className="text-caption mb-3 block">What I learned</span>
            <p className="text-body text-[14px] leading-relaxed">
              The gap between a working prototype and production software is
              enormous. Caching strategies, circuit breakers, cost tracking,
              graceful degradation — these aren&apos;t nice-to-haves. They&apos;re
              what keep a system running when everything else fails.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
