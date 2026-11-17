"use client";

import React, { useState } from "react";
import { Globe } from "lucide-react";
import { WORLD_MAP_PATH } from "./worldMapPath";

interface Destination {
  id: string;
  country: string;
  flag: string;
  city: string;
  pinX: number;
  pinY: number;
  badgeX: number;
  badgeY: number;
  badgeW: number;
  badgeH: number;
  controlX: number;
  controlY: number;
  highlight: string;
}

const DESTINATIONS: Destination[] = [
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

// Origin: Lahore, Pakistan
const LAHORE = {
  pinX: 848,
  pinY: 216,
  badgeX: 935,
  badgeY: 185,
  badgeW: 144,
  badgeH: 28,
};

export default function HeroWorldMap() {
  const [activeDestination, setActiveDestination] = useState<string | null>(null);

  return (
    <div className="w-full mb-12 rounded-3xl bg-[#F6F0E9] border border-[#D7C3B1] shadow-[0_12px_40px_rgba(83,0,0,0.06)] overflow-hidden">
      {/* Top Header Strip: Requested #F6F0E9 Background */}
      <div className="px-6 sm:px-8 py-5 border-b border-[#D7C3B1] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#F6F0E9]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#530000]/25 text-[#530000] text-[10px] font-bold uppercase tracking-wider mb-1.5 shadow-2xs">
            <Globe className="w-3 h-3 text-[#530000]" />
            <span>From Lahore, Across Borders</span>
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#140202]">
            Our team in Pakistan. Your world of business.
          </h3>
          <p className="text-xs text-[#5A4842] mt-0.5">
            Active social media management and high-converting marketing campaigns across 6 countries.
          </p>
        </div>

        {/* Quick Country Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {DESTINATIONS.map((dest) => {
            const isHovered = activeDestination === dest.id;
            return (
              <button
                key={dest.id}
                onMouseEnter={() => setActiveDestination(dest.id)}
                onMouseLeave={() => setActiveDestination(null)}
                onClick={() =>
                  setActiveDestination(activeDestination === dest.id ? null : dest.id)
                }
                className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isHovered
                    ? "bg-[#530000] text-white shadow-sm font-bold"
                    : "bg-white text-[#3D261E] border border-[#D7C3B1] hover:border-[#530000] hover:text-[#530000]"
                }`}
              >
                <span>{dest.flag}</span>
                <span>{dest.country}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Map Interactive Canvas: Exact #530000 Background with Light Continents */}
      <div className="relative w-full bg-[#530000] overflow-hidden select-none">
        <svg
          viewBox="0 0 1200 650"
          className="w-full h-auto block"
          style={{ background: "#530000" }}
        >
          <defs>
            {/* Coordinate Grid Pattern */}
            <pattern
              id="mapGrid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#FAF6F0"
                strokeWidth="0.5"
                strokeOpacity="0.04"
              />
            </pattern>

            {/* Glowing Flight Arc Gradients on #530000 */}
            <linearGradient id="flightArc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#D7C3B1" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FAF6F0" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="flightArcActive" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="40%" stopColor="#FFDE99" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>

            {/* Arc Glow Filter */}
            <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Drop Shadow for Badges */}
            <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Grid lines background */}
          <rect width="1200" height="650" fill="url(#mapGrid)" />

          {/* Light Landmass Continents on #530000 Background */}
          <path
            d={WORLD_MAP_PATH}
            fill="#EFE5D8"
            stroke="#D7C3B1"
            strokeWidth="0.6"
          />

          {/* Flight Curves (from Lahore pin to destination pins) */}
          {DESTINATIONS.map((dest) => {
            const isHovered = activeDestination === dest.id;
            const pathData = `M ${LAHORE.pinX} ${LAHORE.pinY} Q ${dest.controlX} ${dest.controlY} ${dest.pinX} ${dest.pinY}`;

            return (
              <g key={`arc-${dest.id}`}>
                {/* Arc Shadow Track */}
                <path
                  d={pathData}
                  fill="none"
                  stroke="#330000"
                  strokeWidth={isHovered ? "4" : "2.5"}
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                />

                {/* Animated Dashed Route */}
                <path
                  d={pathData}
                  fill="none"
                  stroke={isHovered ? "url(#flightArcActive)" : "url(#flightArc)"}
                  strokeWidth={isHovered ? "3" : "1.8"}
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  filter={isHovered ? "url(#arcGlow)" : undefined}
                  style={{
                    animation: "dashMove 22s linear infinite",
                  }}
                />
              </g>
            );
          })}

          {/* Callout Leader Lines connecting Exact Pins to Non-overlapping Badges */}
          {DESTINATIONS.map((dest) => {
            return (
              <line
                key={`callout-${dest.id}`}
                x1={dest.pinX}
                y1={dest.pinY}
                x2={dest.badgeX}
                y2={dest.badgeY}
                stroke="#530000"
                strokeWidth="1.2"
                strokeDasharray="2 2"
                strokeOpacity="0.9"
              />
            );
          })}

          {/* Lahore Callout Leader Line */}
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

          {/* Destination Exact Pinpoints */}
          {DESTINATIONS.map((dest) => {
            const isHovered = activeDestination === dest.id;
            return (
              <g
                key={`pin-${dest.id}`}
                className="cursor-pointer"
                onMouseEnter={() => setActiveDestination(dest.id)}
                onMouseLeave={() => setActiveDestination(null)}
              >
                {/* Pulse halo on hover */}
                <circle
                  cx={dest.pinX}
                  cy={dest.pinY}
                  r={isHovered ? "13" : "7"}
                  fill="#FFFFFF"
                  fillOpacity={isHovered ? "0.4" : "0.2"}
                  className={isHovered ? "animate-ping" : ""}
                />
                {/* Precise Geographic Pin Dot */}
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

          {/* Origin: Lahore, Pakistan Pinpoint */}
          <g>
            <circle
              cx={LAHORE.pinX}
              cy={LAHORE.pinY}
              r="22"
              fill="#FFFFFF"
              fillOpacity="0.2"
              className="animate-ping"
            />
            <circle
              cx={LAHORE.pinX}
              cy={LAHORE.pinY}
              r="10"
              fill="#FFFFFF"
              fillOpacity="0.35"
            />
            <circle
              cx={LAHORE.pinX}
              cy={LAHORE.pinY}
              r="5.5"
              fill="#FFFFFF"
              stroke="#530000"
              strokeWidth="2.5"
            />
          </g>

          {/* Destination Badges (Crisp White Vector Pills with #530000 Text - Zero Overlap) */}
          {DESTINATIONS.map((dest) => {
            const isHovered = activeDestination === dest.id;
            const rx = dest.badgeX - dest.badgeW / 2;
            const ry = dest.badgeY - dest.badgeH / 2;

            return (
              <g
                key={`badge-${dest.id}`}
                className="cursor-pointer transition-transform duration-200"
                filter="url(#badgeShadow)"
                onMouseEnter={() => setActiveDestination(dest.id)}
                onMouseLeave={() => setActiveDestination(null)}
              >
                {/* Pill Background */}
                <rect
                  x={rx}
                  y={ry}
                  width={dest.badgeW}
                  height={dest.badgeH}
                  rx={dest.badgeH / 2}
                  fill={isHovered ? "#380000" : "#FFFFFF"}
                  stroke={isHovered ? "#FFFFFF" : "#530000"}
                  strokeWidth={isHovered ? "1.8" : "1"}
                  className="transition-colors duration-200"
                />

                {/* Badge Text with Flag */}
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

          {/* Lahore Origin Badge (Northeast of Pinpoint - Zero Collision) */}
          <g filter="url(#badgeShadow)">
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
            {/* Live Green Pulse Indicator */}
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

        {/* Active Route Tooltip / Info Strip at the Bottom */}
        {activeDestination && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 rounded-full bg-[#260000]/95 backdrop-blur-md text-white border border-white/20 shadow-xl flex items-center gap-2 text-xs font-medium animate-fade-in pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span>
              Route: <strong>Lahore (HQ)</strong> →{" "}
              <strong>
                {DESTINATIONS.find((d) => d.id === activeDestination)?.flag}{" "}
                {DESTINATIONS.find((d) => d.id === activeDestination)?.city},{" "}
                {DESTINATIONS.find((d) => d.id === activeDestination)?.country}
              </strong>
            </span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="text-[#D7C3B1] text-[11px] hidden sm:inline">
              {DESTINATIONS.find((d) => d.id === activeDestination)?.highlight}
            </span>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes dashMove {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </div>
  );
}
