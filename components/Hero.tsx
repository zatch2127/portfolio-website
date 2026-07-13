"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowDown, Command } from "lucide-react";
import ParticleField from "./ParticleField";

const roles = [
  { text: "Full-Stack Developer", icon: "{ }" },
  { text: "AI Agent Builder", icon: "⚡" },
  { text: "SaaS Architect", icon: "△" },
  { text: "Automation Engineer", icon: "⟁" },
];

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setStarted(false);
    const startTimer = setTimeout(() => setStarted(true), 100);
    return () => clearTimeout(startTimer);
  }, [text]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 35 + Math.random() * 25);
      return () => clearTimeout(timer);
    }
  }, [displayed, text, started]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-[#6366f1] ml-[1px] align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#050505]" aria-hidden="true" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-[rgba(99,102,241,0.04)] rounded-full blur-[100px]" aria-hidden="true" />

      {/* Secondary glow — subtle warm */}
      <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-[rgba(236,72,153,0.02)] rounded-full blur-[80px]" aria-hidden="true" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Particles */}
      <div aria-hidden="true">
        <ParticleField />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-5"
        style={{ y, opacity, scale }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-4 py-2 text-[11px] font-medium tracking-[0.15em] uppercase text-[#6366f1] border border-[rgba(99,102,241,0.15)] rounded-full bg-[rgba(99,102,241,0.05)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366f1] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6366f1]" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name — staggered letter reveal */}
        <div className="mb-4 overflow-hidden">
          <motion.h1
            className="heading-xl leading-[0.95]"
            initial="hidden"
            animate="visible"
          >
            {"Mohammad".split("").map((char, i) => (
              <motion.span
                key={`m-${i}`}
                className="inline-block"
                variants={{
                  hidden: { y: 120, rotateX: -80, opacity: 0 },
                  visible: {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      delay: 0.4 + i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="mb-8 overflow-hidden">
          <motion.h1
            className="heading-xl text-[#444] leading-[0.95]"
            initial="hidden"
            animate="visible"
          >
            {"Zaid".split("").map((char, i) => (
              <motion.span
                key={`z-${i}`}
                className="inline-block"
                variants={{
                  hidden: { y: 120, rotateX: -80, opacity: 0 },
                  visible: {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      delay: 0.6 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Rotating role with typewriter + gradient + icon */}
        <motion.div
          className="h-12 mb-10 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <span className="text-caption mr-3">I build as a</span>
          <div className="relative h-8 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                className="flex items-center gap-2"
                initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Icon */}
                <span className="text-[13px] text-[#6366f1] font-mono opacity-70">
                  {roles[roleIndex].icon}
                </span>
                {/* Typewriter text with shimmer gradient */}
                <span className="text-lg sm:text-xl font-semibold text-gradient-shimmer whitespace-nowrap">
                  <TypewriterText text={roles[roleIndex].text} />
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-body max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          I design and build intelligent systems that solve real problems.
          From AI-powered SaaS platforms to production APIs that handle
          thousands of requests — I care about the details that make
          software feel inevitable.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.a
            href="#nutriscan"
            className="btn-primary px-8 py-4 text-base"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            See My Work
          </motion.a>
          <motion.a
            href="#about"
            className="btn-ghost px-8 py-4 text-base"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            My Story
          </motion.a>
        </motion.div>

        {/* Keyboard hint */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-2 text-[#333]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <Command className="w-3 h-3" />
          <span className="text-[11px] tracking-wider">Press</span>
          <span className="kbd">K</span>
          <span className="text-[11px] tracking-wider">to explore</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#333]">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[#333] to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
