"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(255,255,255,0.04)]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p className="text-sm text-[#444]">
              &copy; {currentYear} Mohammad Zaid
            </p>
            <p className="text-[11px] text-[#333]">
              Designed &amp; built with precision.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/zatch2127"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] text-[#444] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] rounded-lg px-1"
              aria-label="GitHub profile (opens in new tab)"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-zaid-ansari-757048342/"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] text-[#444] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] rounded-lg px-1"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              LinkedIn
            </a>
            <motion.a
              href="#home"
              className="w-8 h-8 rounded-lg border border-[rgba(255,255,255,0.06)] flex items-center justify-center text-[#444] hover:text-white hover:border-[rgba(255,255,255,0.12)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
