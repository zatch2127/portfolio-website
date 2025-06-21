"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: "Python", level: 95, color: "from-yellow-500 to-orange-500" },
    { name: "JavaScript", level: 80, color: "from-blue-600 to-blue-400" },
    { name: "MySQL", level: 88, color: "from-green-500 to-emerald-500" },
    { name: "React/Next.js", level: 75, color: "from-blue-500 to-cyan-500" },
    { name: "TailwindCss", level: 82, color: "from-orange-500 to-red-500" },
    { name: "GraphQL", level: 80, color: "from-pink-500 to-purple-500" },
    { name: "Docker", level: 78, color: "from-blue-400 to-blue-600" },
    { name: "MongoDB", level: 45, color: "from-green-600 to-green-400" },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-slate-400">{skill.level}%</span>
              </div>

              <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                />

                {/* Animated shine effect */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  animate={{
                    x: [-50, 300],
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.1 + 1,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology icons grid */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {["React", "MySQL", "JavaScript", "Node.js", "Python", "AWS"].map((tech, index) => (
            <motion.div
              key={tech}
              className="flex flex-col items-center p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group"
              whileHover={{ scale: 1.05, y: -5 }}
              data-interactive
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-3 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
