"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface CounterProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, label, prefix = "", suffix = "", duration = 2 }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = numericValue;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue, duration]);

  return (
    <motion.div
      ref={ref}
      className="card p-5 sm:p-6 text-center group relative overflow-hidden"
      whileHover={{ y: -3, borderColor: "rgba(99,102,241,0.15)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(99,102,241,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-2">
          {prefix}{displayValue.toLocaleString()}{suffix}
        </div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-[#555] font-medium">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

interface StatsGridProps {
  stats: Array<{
    value: string;
    label: string;
    prefix?: string;
    suffix?: string;
  }>;
}

export default function StatsCounter({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {stats.map((stat) => (
        <AnimatedCounter
          key={stat.label}
          value={stat.value}
          label={stat.label}
          prefix={stat.prefix}
          suffix={stat.suffix}
        />
      ))}
    </div>
  );
}
