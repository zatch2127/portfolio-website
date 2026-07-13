"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
}: MagneticButtonProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.a>
  );
}
