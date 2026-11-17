"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, ArrowRight, Play, Globe, Smartphone, Check } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import { WORLD_MAP_PATH } from "./worldMapPath";

interface HeroProps {
  onOpenQuote: (service?: string) => void;
  onOpenAudit: () => void;
}

const HERO_BAR_CHIPS = [
  "Social media management",
  "Content & reels",
  "Paid ads",
  "Branding",
  "Personal branding",
  "PR",
  "Email marketing",
];

const DESTINATIONS = [
  {
    id: "usa",
    country: "USA",
    flag: "🇺🇸",
    city: "New York",
    pinX: 356,
    pinY: 180,
    badgeX: 315,
    badgeY: 145,
    badgeW: 76,
    badgeH: 26,
    controlX: 580,
    controlY: 50,
    highlight: "Modest Wear & Creator Accounts",
  },
  {
    id: "ireland",
    country: "Ireland",
    flag: "🇮🇪",
    city: "Dublin",
    pinX: 579,
    pinY: 138,
    badgeX: 535,
    badgeY: 105,
    badgeW: 86,
    badgeH: 26,
    controlX: 720,
    controlY: 100,
    highlight: "Sustainable Apparel & Lifestyle",
  },
  {
    id: "uk",
    country: "UK",
    flag: "🇬🇧",
    city: "London",
    pinX: 604,
    pinY: 148,
    badgeX: 648,
    badgeY: 118,
    badgeW: 72,
    badgeH: 26,
    controlX: 730,
    controlY: 115,
    highlight: "The London Store UK · E-commerce",
  },
  {
    id: "uae",
    country: "UAE",
    flag: "🇦🇪",
    city: "Dubai",
    pinX: 786,
    pinY: 246,
    badgeX: 786,
    badgeY: 290,
    badgeW: 76,
    badgeH: 26,
    controlX: 820,
    controlY: 205,
    highlight: "Luxury Fashion & Retail",
  },
  {
    id: "australia",
    country: "Australia",
    flag: "🇦🇺",
    city: "Sydney",
    pinX: 1083,
    pinY: 488,
    badgeX: 1135,
    badgeY: 488,
    badgeW: 96,
    badgeH: 26,
    controlX: 990,
    controlY: 320,
    highlight: "International Consumer Brands",
  },
];

const LAHORE = {
  pinX: 848,
  pinY: 216,
  badgeX: 935,
  badgeY: 185,
  badgeW: 144,
  badgeH: 28,
};

const DUMMY_FEED_POSTS = [
  { id: 1, title: "Viral Skincare Routine", views: "147K views", isReel: true, bg: "from-[#380000] to-[#140202]", tag: "147K" },
  { id: 2, title: "Luxury Dining Styling", views: "144K views", isReel: true, bg: "from-[#4a1c14] to-[#260a0a]", tag: "144K" },
  { id: 3, title: "Clinic Authority Reel", views: "91K views", isReel: true, bg: "from-[#2d1115] to-[#140202]", tag: "91K" },
  { id: 4, title: "Founder Editorial", views: "52K views", isReel: false, bg: "from-[#3a221a] to-[#1b0b08]", tag: "Carousels" },
  { id: 5, title: "Brand Launch Campaign", views: "88K views", isReel: true, bg: "from-[#520000] to-[#2d0202]", tag: "88K" },
  { id: 6, title: "Aesthetic Identity Moodboard", views: "64K views", isReel: false, bg: "from-[#241311] to-[#0d0404]", tag: "Branding" },
];

export default function Hero({ onOpenQuote, onOpenAudit }: HeroProps) {
  const [auditHandle, setAuditHandle] = useState("");
  const [rightView, setRightView] = useState<"map" | "feed">("map");
  const [activeDestination, setActiveDestination] = useState<string | null>(null);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenAudit();
  };

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#FAF6F0] text-[#140202]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(83,0,0,0.05),rgba(250,246,240,0))]" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#530000 1px, transparent 1px), linear-gradient(90deg, #530000 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Balanced Hero Stage: Left Headline & Audit + Right Global Map & Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start mb-10">
          
          {/* Left Column (5 cols on lg): Headline, Copy, Action Buttons, and 1b Audit Card */}
          <div className="lg:col-span-5 flex flex-col items-start text-left justify-between h-full">
            <div>
              {/* Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#530000]/20 text-[#530000] text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#530000]" />
                <span>Social Media Agency · Marketing · PR</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-bold text-[#140202] leading-[1.08] tracking-tight mb-4">
                Social media that builds brands people buy from.
              </h1>

              {/* One-liner */}
              <p className="text-sm sm:text-base text-[#3D261E] font-normal leading-relaxed mb-6">
                Axoyl Digital is a social media agency and a full-funnel marketing and PR powerhouse, operating from Pakistan for brands across 6 countries.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6 w-full sm:w-auto">
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#530000] hover:bg-[#380000] transition-all transform hover:-translate-y-0.5 shadow-sm"
                >
                  <span>See our work</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onOpenQuote()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#140202] bg-white border border-[#D7C3B1] hover:border-[#530000] hover:text-[#530000] transition-all shadow-xs"
                >
                  <span>Book a call</span>
                  <ArrowUpRight className="w-4 h-4 text-[#530000]" />
                </button>
              </div>
            </div>

            {/* Interactive Selection (Integrated in Left Dark Card) */}
            <div className="w-full rounded-2xl bg-[#140202] text-[#FAF6F0] p-5 border border-[#3D0303] shadow-md mt-2">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#240404] text-[#D7C3B1] border border-[#530000]/60 text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#D7C3B1]" />
                  <span>Interactive Selection</span>
                </div>
                <span className="text-[10px] text-[#FAF6F0]/60">Select to inquire</span>
              </div>

              <h3 className="text-sm sm:text-base font-serif font-bold text-white mb-3">
                What does your brand need?
              </h3>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {HERO_BAR_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => onOpenQuote(chip)}
                    className="group px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-[#200505] border border-[#D7C3B1]/30 text-[#FAF6F0] hover:bg-[#530000] hover:border-[#530000] hover:text-white transition-all flex items-center gap-1 shadow-2xs"
                  >
                    <span>{chip}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#D7C3B1]" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (7 cols on lg): The Global World Map & Client Proof Stage */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="rounded-3xl bg-[#F6F0E9] border border-[#D7C3B1] shadow-[0_12px_40px_rgba(83,0,0,0.06)] overflow-hidden flex flex-col h-full justify-between">
              
              {/* Header with #F6F0E9 Background & Mode Switcher */}
              <div className="px-5 sm:px-6 py-4 border-b border-[#D7C3B1] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F6F0E9]">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-[#530000]/25 text-[#530000] text-[10px] font-bold uppercase tracking-wider mb-1 shadow-2xs">
                    <Globe className="w-3 h-3 text-[#530000]" />
                    <span>From Lahore, Across Borders</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#140202]">
                    Our team in Pakistan. Your world of business.
                  </h3>
                </div>

                {/* Switch between Map View & Instagram Feed */}
                <div className="flex items-center p-1 rounded-full bg-white border border-[#D7C3B1] self-start sm:self-auto shrink-0 shadow-2xs">
                  <button
                    onClick={() => setRightView("map")}
                    className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                      rightView === "map"
                        ? "bg-[#530000] text-white shadow-xs"
                        : "text-[#3D261E] hover:text-[#530000]"
                    }`}
                  >
                    <Globe className="w-3 h-3" />
                    <span>Global Map</span>
                  </button>

                  <button
                    onClick={() => setRightView("feed")}
                    className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
                      rightView === "feed"
                        ? "bg-[#530000] text-white shadow-xs"
                        : "text-[#3D261E] hover:text-[#530000]"
                    }`}
                  >
                    <Smartphone className="w-3 h-3" />
                    <span>Live Feed</span>
                  </button>
                </div>
              </div>

              {/* View 1: Global Route Map Canvas (#530000 Background + Light Continents) */}
              {rightView === "map" ? (
                <div className="relative w-full bg-[#530000] select-none flex-1 flex flex-col justify-center">
                  <svg
                    viewBox="0 0 1200 650"
                    className="w-full h-auto block"
                    style={{ background: "#530000" }}
                  >
                    <defs>
                      <pattern id="heroMapGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#FAF6F0" strokeWidth="0.5" strokeOpacity="0.04" />
                      </pattern>

                      <linearGradient id="heroFlightArc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                        <stop offset="50%" stopColor="#D7C3B1" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#FAF6F0" stopOpacity="0.95" />
                      </linearGradient>

                      <linearGradient id="heroFlightArcActive" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                        <stop offset="40%" stopColor="#FFDE99" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                      </linearGradient>

                      <filter id="heroArcGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>

                      <filter id="heroBadgeShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.45" />
                      </filter>
                    </defs>

                    <rect width="1200" height="650" fill="url(#heroMapGrid)" />

                    {/* Light Landmass Continents on #530000 */}
                    <path d={WORLD_MAP_PATH} fill="#EFE5D8" stroke="#D7C3B1" strokeWidth="0.6" />

                    {/* Flight Arcs */}
                    {DESTINATIONS.map((dest) => {
                      const isHovered = activeDestination === dest.id;
                      const pathData = `M ${LAHORE.pinX} ${LAHORE.pinY} Q ${dest.controlX} ${dest.controlY} ${dest.pinX} ${dest.pinY}`;

                      return (
                        <g key={`hero-arc-${dest.id}`}>
                          <path
                            d={pathData}
                            fill="none"
                            stroke="#330000"
                            strokeWidth={isHovered ? "4" : "2.5"}
                            strokeOpacity="0.6"
                            strokeLinecap="round"
                          />
                          <path
                            d={pathData}
                            fill="none"
                            stroke={isHovered ? "url(#heroFlightArcActive)" : "url(#heroFlightArc)"}
                            strokeWidth={isHovered ? "3" : "1.8"}
                            strokeDasharray="6 6"
                            strokeLinecap="round"
                            filter={isHovered ? "url(#heroArcGlow)" : undefined}
                            style={{ animation: "heroDash 22s linear infinite" }}
                          />
                        </g>
                      );
                    })}

                    {/* Callout Leader Lines */}
                    {DESTINATIONS.map((dest) => (
                      <line
                        key={`hero-callout-${dest.id}`}
                        x1={dest.pinX}
                        y1={dest.pinY}
                        x2={dest.badgeX}
                        y2={dest.badgeY}
                        stroke="#530000"
                        strokeWidth="1.2"
                        strokeDasharray="2 2"
                        strokeOpacity="0.9"
                      />
                    ))}

                    <line
                      x1={LAHORE.pinX}
                      y1={LAHORE.pinY}
                      x2={LAHORE.badgeX - 45}
                      y2={LAHORE.badgeY}
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                      strokeOpacity="0.85"
                    />

                    {/* Destination Pinpoints */}
                    {DESTINATIONS.map((dest) => {
                      const isHovered = activeDestination === dest.id;
                      return (
                        <g
                          key={`hero-pin-${dest.id}`}
                          className="cursor-pointer"
                          onMouseEnter={() => setActiveDestination(dest.id)}
                          onMouseLeave={() => setActiveDestination(null)}
                        >
                          <circle
                            cx={dest.pinX}
                            cy={dest.pinY}
                            r={isHovered ? "13" : "7"}
                            fill="#FFFFFF"
                            fillOpacity={isHovered ? "0.4" : "0.2"}
                            className={isHovered ? "animate-ping" : ""}
                          />
                          <circle
                            cx={dest.pinX}
                            cy={dest.pinY}
                            r={isHovered ? "5.5" : "4.5"}
                            fill="#530000"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                          />
                        </g>
                      );
                    })}

                    {/* Origin: Lahore Pinpoint */}
                    <g>
                      <circle cx={LAHORE.pinX} cy={LAHORE.pinY} r="22" fill="#FFFFFF" fillOpacity="0.2" className="animate-ping" />
                      <circle cx={LAHORE.pinX} cy={LAHORE.pinY} r="10" fill="#FFFFFF" fillOpacity="0.35" />
                      <circle cx={LAHORE.pinX} cy={LAHORE.pinY} r="5.5" fill="#FFFFFF" stroke="#530000" strokeWidth="2.5" />
                    </g>

                    {/* Non-overlapping Destination Badges */}
                    {DESTINATIONS.map((dest) => {
                      const isHovered = activeDestination === dest.id;
                      const rx = dest.badgeX - dest.badgeW / 2;
                      const ry = dest.badgeY - dest.badgeH / 2;

                      return (
                        <g
                          key={`hero-badge-${dest.id}`}
                          className="cursor-pointer transition-transform duration-200"
                          filter="url(#heroBadgeShadow)"
                          onMouseEnter={() => setActiveDestination(dest.id)}
                          onMouseLeave={() => setActiveDestination(null)}
                        >
                          <rect
                            x={rx}
                            y={ry}
                            width={dest.badgeW}
                            height={dest.badgeH}
                            rx={dest.badgeH / 2}
                            fill={isHovered ? "#380000" : "#FFFFFF"}
                            stroke={isHovered ? "#FFFFFF" : "#530000"}
                            strokeWidth={isHovered ? "1.8" : "1"}
                          />
                          <text
                            x={dest.badgeX}
                            y={dest.badgeY + 4}
                            textAnchor="middle"
                            fill={isHovered ? "#FFFFFF" : "#530000"}
                            fontSize="11"
                            fontWeight="bold"
                            fontFamily="system-ui, sans-serif"
                          >
                            {dest.flag} {dest.country}
                          </text>
                        </g>
                      );
                    })}

                    {/* Lahore Origin Badge */}
                    <g filter="url(#heroBadgeShadow)">
                      <rect
                        x={LAHORE.badgeX - LAHORE.badgeW / 2}
                        y={LAHORE.badgeY - LAHORE.badgeH / 2}
                        width={LAHORE.badgeW}
                        height={LAHORE.badgeH}
                        rx={LAHORE.badgeH / 2}
                        fill="#260000"
                        stroke="#FFFFFF"
                        strokeWidth="1.2"
                      />
                      <circle cx={LAHORE.badgeX - LAHORE.badgeW / 2 + 12} cy={LAHORE.badgeY} r="3" fill="#34D399" />
                      <text
                        x={LAHORE.badgeX + 3}
                        y={LAHORE.badgeY + 4}
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="11"
                        fontWeight="bold"
                        fontFamily="system-ui, sans-serif"
                      >
                        🇵🇰 Lahore · Our Team
                      </text>
                    </g>
                  </svg>

                  {/* Active Tooltip Strip on Map */}
                  {activeDestination && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1 rounded-full bg-[#260000]/95 backdrop-blur-md text-white border border-white/20 shadow-lg flex items-center gap-2 text-[11px] font-medium pointer-events-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span>
                        Route: <strong>Lahore (HQ)</strong> →{" "}
                        <strong>
                          {DESTINATIONS.find((d) => d.id === activeDestination)?.flag}{" "}
                          {DESTINATIONS.find((d) => d.id === activeDestination)?.city}
                        </strong>
                      </span>
                      <span className="text-white/40">|</span>
                      <span className="text-[#D7C3B1]">
                        {DESTINATIONS.find((d) => d.id === activeDestination)?.highlight}
                      </span>
                    </div>
                  )}

                  {/* Quick Pill Controls at the bottom of the map */}
                  <div className="p-3 bg-[#420000] border-t border-[#FAF6F0]/15 flex items-center justify-between text-xs text-[#FAF6F0]/80">
                    <span className="font-semibold text-[11px] uppercase tracking-wider text-[#D7C3B1]">
                      Click destination to highlight route:
                    </span>
                    <div className="flex items-center gap-1.5 overflow-x-auto">
                      {DESTINATIONS.map((d) => (
                        <button
                          key={d.id}
                          onClick={() => setActiveDestination(activeDestination === d.id ? null : d.id)}
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                            activeDestination === d.id
                              ? "bg-white text-[#530000]"
                              : "bg-[#280000] text-white hover:bg-white/10"
                          }`}
                        >
                          {d.flag} {d.country}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* View 2: Live Instagram Feed Phone Mockup (Fills Container, Zero White Space) */
                <div className="relative p-4 sm:p-6 bg-[#140202] flex items-center justify-center flex-1 overflow-hidden">
                  {/* Ambient studio glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1E0404] via-[#140202] to-[#100101]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#530000]/35 rounded-full blur-[80px] pointer-events-none" />

                  {/* Phone Device Mockup - Scaled to Fit Container */}
                  <div className="relative z-10 w-full max-w-[390px] sm:max-w-[420px] rounded-[38px] p-3.5 bg-[#1C0505] shadow-[0_20px_60px_rgba(0,0,0,0.6)] border-4 border-[#530000]/60">
                    {/* Notch / Dynamic Island */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20" />

                    {/* Phone Screen Area */}
                    <div className="relative rounded-[28px] overflow-hidden bg-white text-[#140202] pt-6 pb-3.5">
                      {/* Instagram Top Bar */}
                      <div className="px-4 py-2 border-b border-[#FAF6F0] flex items-center justify-between">
                        <div className="flex items-center gap-1.5 font-bold text-xs">
                          <span>axoyl.digital</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#530000]" />
                        </div>
                        <InstagramIcon className="w-4 h-4 text-[#530000]" />
                      </div>

                      {/* Profile Header & Stats */}
                      <div className="p-3.5 flex items-center gap-3.5">
                        <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#530000] via-[#851E1E] to-[#D7C3B1] shrink-0">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                            <Image
                              src="/team/esha-founder.jpeg"
                              alt="Esha"
                              width={44}
                              height={44}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                        <div className="flex-1 flex justify-around text-center">
                          <div>
                            <div className="text-sm font-bold text-[#140202]">37+</div>
                            <div className="text-[10px] text-[#5A4842] font-medium">Brands</div>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#140202]">400K+</div>
                            <div className="text-[10px] text-[#5A4842] font-medium">Top Reels</div>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#140202]">6</div>
                            <div className="text-[10px] text-[#5A4842] font-medium">Countries</div>
                          </div>
                        </div>
                      </div>

                      {/* Bio snippet */}
                      <div className="px-3.5 pb-2.5 text-[11px] leading-tight text-[#3D261E]">
                        <span className="font-bold">Axoyl Digital · Social Media Agency</span>
                        <p className="text-[#5A4842] text-[10px] mt-0.5">Strategy · Viral Reels · Content · PR</p>
                      </div>

                      {/* 6 Reels Grid */}
                      <div className="grid grid-cols-3 gap-1.5 px-2 pt-1">
                        {DUMMY_FEED_POSTS.map((post) => (
                          <div
                            key={post.id}
                            className={`relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br ${post.bg} flex flex-col justify-between p-2 text-white group hover:scale-[1.03] transition-transform duration-200 shadow-xs`}
                          >
                            <div className="flex justify-between items-start text-[9px]">
                              {post.isReel ? (
                                <Play className="w-3 h-3 fill-white" />
                              ) : (
                                <span className="font-bold text-[8px] uppercase tracking-wider">{post.tag}</span>
                              )}
                            </div>
                            <div className="text-[9px] font-bold tracking-tight line-clamp-1">
                              {post.views}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Free Social Media Audit Section (Full Width Bottom Bar in Crisp White Theme) */}
        <div className="rounded-3xl bg-white border border-[#D7C3B1] p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#530000]/20 text-[#530000] text-[10px] font-bold uppercase tracking-wider mb-2 shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#530000]" />
                <span>Free Social Media Audit</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#140202] mb-1.5">
                Send us your handle.
              </h2>
              <p className="text-xs sm:text-sm text-[#5A4842] leading-relaxed">
                Within 48 hours you&apos;ll get a short review of what&apos;s working, what isn&apos;t, and what we&apos;d fix first. No contracts. No sales pitch.
              </p>
            </div>

            <form onSubmit={handleAuditSubmit} className="flex flex-col sm:flex-row items-center gap-2.5 w-full lg:w-auto">
              <input
                type="text"
                placeholder="@yourbrand or website"
                value={auditHandle}
                onChange={(e) => setAuditHandle(e.target.value)}
                className="w-full sm:w-80 bg-[#FAF6F0] border border-[#D7C3B1] rounded-full px-5 py-3 text-xs sm:text-sm text-[#140202] placeholder-[#5A4842]/60 focus:outline-none focus:border-[#530000]"
              />
              <button
                type="button"
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#530000] hover:bg-[#380000] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shrink-0 shadow-sm"
              >
                <span>Get my free audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes heroDash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </section>
  );
}
