"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "nutriscan", label: "NutriScan" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = sections.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase())
  );

  // Reset selection when filter changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setQuery("");
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const navigate = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      el.focus({ preventScroll: true });
    }
  };

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      navigate(filtered[selectedIndex].id);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Palette */}
          <motion.div
            role="dialog"
            aria-label="Navigate to section"
            aria-modal="true"
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-[9999] px-4"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-[#0c0c0c] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-2xl overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-[rgba(255,255,255,0.06)]">
                <Search className="w-4 h-4 text-[#555]" aria-hidden="true" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleListKeyDown}
                  placeholder="Navigate to..."
                  role="combobox"
                  aria-expanded={true}
                  aria-controls="command-list"
                  aria-activedescendant={filtered[selectedIndex] ? `cmd-${filtered[selectedIndex].id}` : undefined}
                  className="flex-1 bg-transparent text-sm text-white placeholder-[#444] outline-none"
                />
                <span className="kbd text-[10px]">ESC</span>
              </div>

              {/* Results */}
              <div
                id="command-list"
                ref={listRef}
                role="listbox"
                className="max-h-[300px] overflow-y-auto py-2"
              >
                {filtered.map((section, i) => (
                  <button
                    key={section.id}
                    id={`cmd-${section.id}`}
                    role="option"
                    aria-selected={i === selectedIndex}
                    onClick={() => navigate(section.id)}
                    className={`w-full flex items-center justify-between px-5 py-3 text-sm transition-colors text-left focus:outline-none ${
                      i === selectedIndex
                        ? "text-white bg-[rgba(99,102,241,0.08)]"
                        : "text-[#888] hover:text-white hover:bg-[rgba(255,255,255,0.03)]"
                    }`}
                  >
                    <span>{section.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#444]" />
                  </button>
                ))}
                {filtered.length === 0 && (
                  <div className="px-5 py-6 text-center text-sm text-[#444]">
                    No sections found
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-[rgba(255,255,255,0.06)] flex items-center gap-4 text-[11px] text-[#333]">
                <span className="flex items-center gap-1.5">
                  <span className="kbd">↑↓</span> navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="kbd">↵</span> select
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="kbd">esc</span> close
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
