"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BRAND_SNIPPETS = [
  { name: "Hestia Harlow", sector: "USA Catering", logo: "/clients/client_5.png" },
  { name: "ER Organics", sector: "Clean Skincare", logo: "/clients/client_22.png" },
  { name: "Sarivaa Aesthetics", sector: "UK Clinic", logo: "/clients/client_14.png" },
  { name: "Kaked Bakery", sector: "Vegan Pastry", logo: "/clients/client_4.png" },
  { name: "Labusa Travel", sector: "Luxury Travel", logo: "/clients/client_9.png" },
  { name: "The Palm Dubai", sector: "Hospitality", logo: "/clients/client_11.png" },
  { name: "Salubrity Organics", sector: "Wellness", logo: "/clients/client_7.png" },
  { name: "Shark Sports", sector: "Athletics", logo: "/clients/client_10.png" },
];

interface MetricCardProps {
  number: string;
  label: string;
  targetValue: number;
  prefix?: string;
  suffix?: string;
  padZero?: boolean;
  description: string;
}

function AnimatedMetricCard({
  number,
  label,
  targetValue,
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

      if (targetValue <= 5) {
        // Step through each integer visibly: 00 -> 01 -> 02 -> 03
        const step = Math.min(Math.floor(progress * (targetValue + 1)), targetValue);
        setDisplayValue(step);
      } else {
        const current = Math.round(ease * targetValue);
        setDisplayValue(current);
      }

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(update);
      } else {
        setDisplayValue(targetValue);
        animFrameRef.current = null;
      }
    };

    setDisplayValue(0);
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
      className="rounded-3xl bg-[#520000] text-white p-7 flex flex-col justify-between min-h-[200px] shadow-lg relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-[#D7C3B1]/20 hover:border-[#D7C3B1]/60 cursor-pointer select-none"
    >
      {/* Subtle luxury light sheen on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="flex items-center justify-between relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D7C3B1]">{number}</span>
        <span className="text-[10px] uppercase font-bold tracking-wider text-[#D7C3B1]/90 group-hover:text-white transition-colors">
          {label}
        </span>
      </div>

      <div className="relative z-10">
        <div className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white group-hover:text-[#FAF6F0] mb-1 tabular-nums flex items-baseline transition-colors">
          <span>{prefix}</span>
          <span className="transition-all">{formattedNumber}</span>
          <span>{suffix}</span>
        </div>
        <p className="text-xs text-[#D7C3B1] font-medium group-hover:text-white/90 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function TrifidAboutSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF6F0] border-t border-[#D7C3B1]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Stacked Typography vs Editorial + Client Marquee */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Stacked Giant Typography (Trifid Media Signature) */}
          <div className="lg:col-span-6">
            <h2 className="text-5xl sm:text-7xl lg:text-[84px] font-display font-medium text-[#140202] uppercase leading-[0.95] tracking-tight">
              THE <br />
              <span className="text-[#520000]">SMM &amp; CULTURE</span> <br />
              AGENCY<span className="text-[#520000]">.</span>
            </h2>
          </div>

          {/* Right Column: Editorial Paragraph & Client Showcase */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D7C3B1] bg-white mb-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#520000]">
                  Who We Are
                </span>
              </div>

              <p className="text-base sm:text-xl text-[#140202] font-serif leading-relaxed mb-8">
                We create campaigns that move culture, build brands that last, and produce short-form content that people actually want to watch. Axoyl Digital is a high-impact social media management and marketing collective operating across 3 countries, all obsessed with one standard: delivering measurable commercial growth for your brand.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#5A4842]">
                  Our clients.
                </span>
                <Link
                  href="#clients"
                  className="text-xs font-semibold text-[#520000] hover:underline inline-flex items-center gap-1"
                >
                  View all 24+ brands <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Verified High-Visibility Client Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {BRAND_SNIPPETS.map((b, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-3 rounded-2xl bg-white border border-[#D7C3B1] hover:border-[#520000] shadow-sm hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#FAF6F0] p-1.5 flex items-center justify-center shrink-0 border border-[#D7C3B1]/70 group-hover:border-[#520000]/50 transition-colors shadow-inner mb-2">
                      <Image
                        src={b.logo}
                        alt={b.name}
                        width={48}
                        height={48}
                        className="max-h-full max-w-full object-contain filter contrast-110 drop-shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
                      />
                    </div>
                    <span className="text-xs font-bold text-[#140202] tracking-tight leading-tight group-hover:text-[#520000] transition-colors line-clamp-1 w-full">
                      {b.name}
                    </span>
                    <span className="text-[9.5px] font-semibold text-[#520000] uppercase tracking-wider truncate w-full mt-0.5">
                      {b.sector}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 4 Animated Chamfered Metric Blocks (Counting from 0 to figure on hover) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatedMetricCard
            number="01"
            label="Across all managed feeds"
            targetValue={15}
            suffix="M+"
            description="Followers & Views Reached"
          />
          <AnimatedMetricCard
            number="02"
            label="Where our teams operate"
            targetValue={3}
            padZero={true}
            description="Countries Live (PK · USA · UAE)"
          />
          <AnimatedMetricCard
            number="03"
            label="Full-time. Zero outsourcing."
            targetValue={100}
            suffix="%"
            description="In-house Creative Crew"
          />
          <AnimatedMetricCard
            number="04"
            label="Brands that trust Axoyl"
            targetValue={50}
            suffix="+"
            description="Clients Onboarded Globally"
          />
        </div>
      </div>
    </section>
  );
}
