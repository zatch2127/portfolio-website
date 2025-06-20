"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import zatch from "./images/zatch.png";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-slate-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                I'm an aspiring full-stack developer with a strong foundation in
                web technologies and a deep passion for building digital
                experiences that are both functional and visually engaging. My
                journey into development began with personal projects and a
                curiosity for how technology shapes the world.
              </p>
              <p>
                I'm particularly interested in modern JavaScript frameworks,
                cloud platforms, and creating user-focused solutions. While I
                may be at the start of my professional journey, I’ve already
                built several projects, collaborated on open-source, and am
                eager to contribute to impactful development teams.
              </p>
              <p>
                Outside of coding, I enjoy learning about AI, contributing to
                online tech communities, and constantly seeking ways to improve
                my skills and help others grow alongside me.
              </p>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                "Passionate Learner",
                "Aspiring Full Stack Developer",
                "Quick Adopter of New Tech",
                "Open to Opportunities",
              ].map((item, index) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />

              <Image
                src={zatch}
                alt="Mohammad Zaid"
                width={400}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>

            {/* Floating decoration */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
