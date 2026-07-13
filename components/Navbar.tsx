"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "NutriScan", href: "#nutriscan" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "nutriscan", "projects", "certifications", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen]);

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[rgba(5,5,5,0.8)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-bold text-white tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] rounded-lg px-1 -ml-1"
            aria-label="Go to top"
          >
            Mohammad Zaid<span className="text-[#6366f1]">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1" role="menubar">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                role="menuitem"
                aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] ${
                  activeSection === item.href.slice(1)
                    ? "text-white"
                    : "text-[#555] hover:text-[#888]"
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    className="absolute inset-0 bg-[rgba(99,102,241,0.06)] rounded-lg"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a
              href="/docs/Mohammad_Zaid.pdf"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-[13px] font-medium text-[#6366f1] hover:text-[#818cf8] transition-colors px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] rounded-lg"
              aria-label="Download resume (opens in new tab)"
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-[#666] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] rounded-lg p-1"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <motion.div
          id="mobile-menu"
          role="menu"
          className="md:hidden bg-[rgba(5,5,5,0.95)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.04)]"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <div className="px-5 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                role="menuitem"
                onClick={() => setIsMobileOpen(false)}
                className={`block text-sm py-2.5 px-3 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] ${
                  activeSection === item.href.slice(1)
                    ? "text-white bg-[rgba(99,102,241,0.06)]"
                    : "text-[#666] hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/docs/Mohammad_Zaid.pdf"
              target="_blank"
              rel="noreferrer"
              className="block text-sm text-[#6366f1] py-2.5 px-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] rounded-lg"
              aria-label="Download resume (opens in new tab)"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
