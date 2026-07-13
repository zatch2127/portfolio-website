"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function EasterEgg() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [showMessage, setShowMessage] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Konami code listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const nextKey = KONAMI[sequence.length];
      if (e.key === nextKey) {
        const newSeq = [...sequence, e.key];
        setSequence(newSeq);
        if (newSeq.length === KONAMI.length) {
          setShowMessage(true);
          setSequence([]);
          setTimeout(() => setShowMessage(false), 5000);
        }
      } else {
        setSequence([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sequence]);

  // Triple-click on logo easter egg
  useEffect(() => {
    const logo = document.querySelector("nav a");
    if (!logo) return;

    const handleClick = () => {
      setClickCount((prev) => {
        const next = prev + 1;
        if (next >= 5) {
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 5000);
          return 0;
        }
        return next;
      });
    };

    // Reset after 2 seconds of no clicks
    const timer = setInterval(() => setClickCount(0), 2000);

    logo.addEventListener("click", handleClick);
    return () => {
      logo.removeEventListener("click", handleClick);
      clearInterval(timer);
    };
  }, [clickCount]);

  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          className="fixed inset-0 z-[10001] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#0c0c0c] border border-[rgba(99,102,241,0.2)] rounded-2xl p-8 sm:p-12 text-center max-w-md mx-4 shadow-2xl"
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
          >
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-white mb-2">
              You found it!
            </h3>
            <p className="text-sm text-[#888] leading-relaxed">
              You&apos;re clearly someone who pays attention to details.
              That&apos;s exactly the kind of person I want to work with.
            </p>
            <div className="mt-4 text-[11px] text-[#444]">
              Konami Code → ↑↑↓↓←→←→BA
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
