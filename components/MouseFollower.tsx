"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updateMousePosition);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [data-interactive]"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        style={{ pointerEvents: "none" }}
      />

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-blue-400/30 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
        style={{ pointerEvents: "none" }}
      />

      {/* Floating jelly elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full pointer-events-none z-[9997] backdrop-blur-sm"
          animate={{
            x: mousePosition.x + Math.sin(Date.now() * 0.001 + i) * 50 - 8,
            y: mousePosition.y + Math.cos(Date.now() * 0.001 + i) * 50 - 8,
            scale: [1, 1.2, 1],
          }}
          transition={{
            type: "spring",
            stiffness: 100 - i * 10,
            damping: 20,
            scale: {
              duration: 2 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
          style={{ pointerEvents: "none" }}
        />
      ))}
    </>
  );
}
