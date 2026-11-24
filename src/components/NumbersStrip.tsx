"use client";

import React, { useState, useEffect, useRef } from "react";

interface MetricCardProps {
  number: string;
  label: string;
  targetValue: number;
  startValue?: number;
  prefix?: string;
  suffix?: string;
  padZero?: boolean;
  description: string;
}

function AnimatedMetricCard({
  number,
  label,
  targetValue,
  startValue = 0,
  prefix = "",
  suffix = "",
  padZero = false,
  description,
}: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(targetValue);
  const animFrameRef = useRef<number | null>(null);

  const runCountAnimation = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    const duration = 850; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth cubic easing
      const ease = 1 - Math.pow(1 - progress, 3);

      if (targetValue <= 10 && startValue === 0) {
        // Step through integers visibly: 0 -> 1 -> 2 ... -> target
        const step = Math.min(Math.floor(progress * (targetValue + 1)), targetValue);
        setDisplayValue(step);
      } else {
        const range = targetValue - startValue;
        const current = Math.round(startValue + ease * range);
        setDisplayValue(current);
      }

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(update);
      } else {
        setDisplayValue(targetValue);
        animFrameRef.current = null;
      }
    };

    setDisplayValue(startValue);
    animFrameRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    // Initial entrance count
    runCountAnimation();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const formattedNumber = padZero
    ? String(displayValue).padStart(2, "0")
    : String(displayValue);

  return (
    <div
      onMouseEnter={runCountAnimation}
      onPointerEnter={runCountAnimation}
      onClick={runCountAnimation}
      className="rounded-3xl bg-[#520000] text-white p-7 flex flex-col justify-between min-h-[190px] shadow-lg relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-[#D7C3B1]/20 hover:border-[#D7C3B1]/60 cursor-pointer select-none"
    >
      {/* Subtle luxury light sheen on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Top index & label */}
      <div className="flex items-center justify-between relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D7C3B1]">{number}</span>
        <span className="text-[10px] uppercase font-bold tracking-wider text-[#D7C3B1]/90 group-hover:text-white transition-colors">
          {label}
        </span>
      </div>

      {/* Counter & Description */}
      <div className="relative z-10 mt-6">
        <div className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white group-hover:text-[#FAF6F0] mb-1.5 tabular-nums flex items-baseline transition-colors">
          <span>{prefix}</span>
          <span className="transition-all">{formattedNumber}</span>
          <span>{suffix}</span>
        </div>
        <p className="text-xs text-[#D7C3B1] font-medium group-hover:text-white/90 transition-colors uppercase tracking-wider">
          {description}
        </p>
      </div>
    </div>
  );
}

const METRICS: MetricCardProps[] = [
  {
    number: "01",
    label: "Brands Retained",
    targetValue: 37,
    suffix: "+",
    description: "brands",
  },
  {
    number: "02",
    label: "Global Reach",
    targetValue: 6,
    suffix: "",
    description: "countries",
  },
  {
    number: "03",
    label: "Organic Views",
    targetValue: 2,
    suffix: "M+",
    description: "organic views generated",
  },
  {
    number: "04",
    label: "Industry Tenure",
    targetValue: 2019,
    startValue: 2000,
    prefix: "Since ",
    description: "in social media",
  },
];

export default function NumbersStrip() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF6F0] border-y border-[#D7C3B1]/60 text-[#140202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric) => (
            <AnimatedMetricCard key={metric.number} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
