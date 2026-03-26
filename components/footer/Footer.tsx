"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-slate-700 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
        <motion.p
          className="text-sm font-medium tracking-wide text-slate-200"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          © {currentYear} Mohammad Zaid. Crafted with passion and precision.
        </motion.p>
      </div>
    </footer>
  );
}
