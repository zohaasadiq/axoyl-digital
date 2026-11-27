"use client";

import React, { useState, useEffect, useRef } from "react";

interface MetricProps {
  label: string;
  targetValue: number;
  startValue?: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedMetric({
  label,
  targetValue,
  startValue = 0,
  prefix = "",
  suffix = "",
}: MetricProps) {
  const [displayValue, setDisplayValue] = useState(targetValue);
  const animFrameRef = useRef<number | null>(null);

  const runCountAnimation = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    const duration = 900;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      if (targetValue <= 10 && startValue === 0) {
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
    runCountAnimation();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div
      onMouseEnter={runCountAnimation}
      onClick={runCountAnimation}
      className="group px-6 py-8 sm:py-10 cursor-pointer select-none transition-colors hover:bg-black/[0.06]"
    >
      <div className="font-display text-[34px] sm:text-5xl font-medium tracking-tight text-[#FAF6F0] tabular-nums leading-none">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <p className="mt-2.5 text-[13px] sm:text-sm text-[#D7C3B1] group-hover:text-white transition-colors">
        {label}
      </p>
    </div>
  );
}

const METRICS: MetricProps[] = [
  { targetValue: 37, suffix: "+", label: "Brands retained" },
  { targetValue: 6, label: "Countries served" },
  { targetValue: 2, suffix: "M+", label: "Organic views generated" },
  { targetValue: 2019, startValue: 2009, label: "Founded" },
];

export function StatLedger() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#FAF6F0]/15 border border-[#FAF6F0]/15 bg-[#520000]">
      {METRICS.map((metric) => (
        <AnimatedMetric key={metric.label} {...metric} />
      ))}
    </div>
  );
}

export default function NumbersStrip() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF6F0] text-[#140202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StatLedger />
      </div>
    </section>
  );
}
