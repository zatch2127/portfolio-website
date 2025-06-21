"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

import zatch from "./images/zatch.png";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
                may be at the start of my professional journey, I've already
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
            <div
              className="relative w-full h-96 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={openModal}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />

              <Image
                src={zatch}
                alt="Mohammad Zaid"
                width={400}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

              {/* Click indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
                  Click to expand
                </div>
              </div>
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

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative w-[90vw] h-[90vh] mx-4"
            initial={{
              scale: 0.3,
              opacity: 0,
              rotateY: -90,
              z: -1000,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              rotateY: 0,
              z: 0,
            }}
            exit={{
              scale: 0.3,
              opacity: 0,
              rotateY: 90,
              z: -1000,
            }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            onClick={(e) => e.stopPropagation()}
            style={{ perspective: 1000 }}
          >
            {/* Close button */}
            <motion.button
              onClick={closeModal}
              className="absolute -top-6 -right-6 z-10 w-12 h-12 bg-gradient-to-r from-red-500/80 to-pink-600/80 hover:from-red-600 hover:to-pink-700 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.3 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </motion.button>

            {/* Modal image */}
            <motion.div
              className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {/* IMAGE - Full face, clear, no blur */}
              <Image
                src={zatch}
                alt="Mohammad Zaid - Full size"
                fill
                className="object-contain z-10"
              />

              {/* Subtle hover zoom effect */}
              <motion.div
                className="absolute inset-0 z-20 rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />

              {/* Animated glowing border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent z-30"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(0, 123, 255, 0.3)",
                    "0 0 15px rgba(0, 123, 255, 0.5)",
                    "0 0 0px rgba(0, 123, 255, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
