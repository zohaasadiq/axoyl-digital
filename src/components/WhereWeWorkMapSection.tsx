"use client";

import React from "react";
import { Globe, MapPin, Sparkles } from "lucide-react";

const HUBS = [
  {
    country: "United Arab Emirates",
    city: "Dubai",
    flag: "🇦🇪",
    code: "UAE",
    x: 60,
    y: 48,
  },
  {
    country: "United Kingdom",
    city: "London",
    flag: "🇬🇧",
    code: "UK",
    x: 48,
    y: 32,
  },
  {
    country: "United States",
    city: "New York",
    flag: "🇺🇸",
    code: "USA",
    x: 28,
    y: 38,
  },
  {
    country: "Ireland",
    city: "Dublin",
    flag: "🇮🇪",
    code: "IRL",
    x: 46,
    y: 30,
  },
  {
    country: "Australia",
    city: "Sydney",
    flag: "🇦🇺",
    code: "AUS",
    x: 85,
    y: 75,
  },
];

export default function WhereWeWorkMapSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#140202] text-[#FAF6F0] relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#520000]/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#240404] text-[#D7C3B1] border border-[#520000]/60 text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D7C3B1]" />
            <span>FROM PAKISTAN, ACROSS BORDERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-5 leading-tight">
            Our team in Pakistan. <br />
            <span className="italic font-normal text-[#D7C3B1]">Your brand, everywhere.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#FAF6F0]/80 font-normal leading-relaxed">
            We work with brands in the UAE, UK, USA, Ireland and Australia. Wherever your customers are, our team builds your presence where they scroll.
          </p>
        </div>

        {/* Dark World Map Visual with Pakistan Epicenter & Radiating Curved Lines */}
        <div className="relative rounded-3xl bg-[#1B0505] border border-[#D7C3B1]/20 p-6 sm:p-10 shadow-2xl overflow-hidden mb-12">
          {/* Subtle World Map SVG Silhouette */}
          <div className="relative w-full aspect-[2/1] min-h-[300px] sm:min-h-[420px] flex items-center justify-center">
            {/* World Grid Lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D7C3B1" strokeWidth="0.5" strokeOpacity="0.4" />
                </pattern>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#520000" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D7C3B1" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Curved Connection Lines from Pakistan (Approx 64%, 44%) */}
              {/* To UAE (60%, 48%) */}
              <path
                d="M 640 220 Q 620 230 600 240"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-pulse"
              />
              {/* To UK (48%, 32%) */}
              <path
                d="M 640 220 Q 550 140 480 160"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-pulse"
              />
              {/* To Ireland (46%, 30%) */}
              <path
                d="M 640 220 Q 530 130 460 150"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              {/* To USA (28%, 38%) */}
              <path
                d="M 640 220 Q 420 80 280 190"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-pulse"
              />
              {/* To Australia (85%, 75%) */}
              <path
                d="M 640 220 Q 760 300 850 375"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-pulse"
              />
            </svg>

            {/* Glowing Dot on Sialkot / Lahore, Pakistan */}
            <div
              className="absolute z-20 flex flex-col items-center"
              style={{ top: "44%", left: "64%", transform: "translate(-50%, -50%)" }}
            >
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#D7C3B1] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#520000] border-2 border-white shadow-[0_0_15px_#fff]"></span>
              </div>
              <div className="mt-2 px-3 py-1 rounded-full bg-white text-[#140202] text-[10px] font-bold tracking-wider uppercase shadow-lg border border-[#D7C3B1]">
                HQ · Sialkot / Lahore
              </div>
            </div>

            {/* Target Destinations Pins */}
            {HUBS.map((hub, idx) => (
              <div
                key={idx}
                className="absolute z-10 flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: `${hub.y}%`, left: `${hub.x}%` }}
              >
                <div className="relative group cursor-pointer">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#2D0202] border border-[#D7C3B1] flex items-center justify-center text-xs shadow-md group-hover:scale-125 transition-transform">
                    {hub.flag}
                  </div>
                  <div className="hidden sm:block absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/80 text-[9px] text-[#FAF6F0] whitespace-nowrap font-medium border border-white/10 pointer-events-none">
                    {hub.city}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Hub Badges Row */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 border-t border-[#D7C3B1]/20">
            {HUBS.map((hub, idx) => (
              <div
                key={idx}
                className="px-4 py-3 rounded-2xl bg-[#240404]/80 border border-[#D7C3B1]/20 flex items-center gap-3 text-left"
              >
                <span className="text-xl">{hub.flag}</span>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">{hub.code}</p>
                  <p className="text-[10px] text-[#FAF6F0]/60">{hub.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
