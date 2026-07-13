"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo */}
            <motion.div
              className="text-3xl font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Zaid<span className="text-[#6366f1]">.</span>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-px bg-[rgba(255,255,255,0.06)] relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#6366f1]"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Percentage */}
            <motion.span
              className="text-[11px] text-[#333] font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.min(Math.round(progress), 100)}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
