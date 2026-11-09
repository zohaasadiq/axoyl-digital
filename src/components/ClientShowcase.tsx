"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";

// Verified client brand logos extracted directly from Axoyl's portfolio (Page 19)
const CLIENT_LOGOS = [
  { id: 1, file: "/clients/client_5.png", name: "Hestia Harlow", sector: "Luxury Catering (USA)" },
  { id: 2, file: "/clients/client_22.png", name: "ER Organics", sector: "Clean Skincare & Beauty" },
  { id: 3, file: "/clients/client_14.png", name: "Sarivaa Aesthetics", sector: "Aesthetic Clinic (UK)" },
  { id: 4, file: "/clients/client_4.png", name: "Kaked Bakery", sector: "Artisanal Vegan Pastry" },
  { id: 5, file: "/clients/client_9.png", name: "Labusa Travel", sector: "Luxury Travel & Tours" },
  { id: 6, file: "/clients/client_7.png", name: "Salubrity Organics", sector: "Organic Skincare" },
  { id: 7, file: "/clients/client_10.png", name: "Shark Sports", sector: "Combat Sports & Fitness" },
  { id: 8, file: "/clients/client_11.png", name: "The Palm Dubai", sector: "Luxury Hospitality" },
  { id: 9, file: "/clients/client_21.png", name: "Spogen Athletics", sector: "Activewear & Gear" },
  { id: 10, file: "/clients/client_24.png", name: "The London Store UK", sector: "British Fashion Retail" },
  { id: 11, file: "/clients/client_16.png", name: "Circle Coffee Co.", sector: "Artisan Coffee Roasters" },
  { id: 12, file: "/clients/client_20.png", name: "AurSkin Clinic", sector: "Dermatology & Clinic" },
  { id: 13, file: "/clients/client_18.png", name: "Devccelator", sector: "Venture & Tech Lab" },
  { id: 14, file: "/clients/client_12.png", name: "G Invokers", sector: "Digital & Gaming" },
  { id: 15, file: "/clients/client_13.png", name: "Alphas Aura", sector: "Performance Lifestyle" },
  { id: 16, file: "/clients/client_2.png", name: "Alphas Core", sector: "Creator & Apparel" },
  { id: 17, file: "/clients/client_1.png", name: "Apex Taurus", sector: "Athletic & Energy" },
  { id: 18, file: "/clients/client_3.png", name: "CodeCurly Studio", sector: "Digital Product Lab" },
  { id: 19, file: "/clients/client_8.png", name: "er Organics Pure", sector: "Botanical Formulations" },
  { id: 20, file: "/clients/client_15.png", name: "Vertex Kinetic", sector: "Creative Production" },
  { id: 21, file: "/clients/client_19.png", name: "Salubrity Botanics", sector: "Holistic Skin Health" },
  { id: 22, file: "/clients/client_23.png", name: "G-Organics Glow", sector: "Natural Cosmetics" },
  { id: 23, file: "/clients/client_25.png", name: "WIM Codex", sector: "Web3 & Entertainment" },
  { id: 24, file: "/clients/client_6.png", name: "Circle Festive", sector: "Seasonal Retail" },
];

const ROW_ONE = CLIENT_LOGOS.slice(0, 12);
const ROW_TWO = CLIENT_LOGOS.slice(12);

const KEY_CASE_HIGHLIGHTS = [
  {
    brand: "Hestia Harlow",
    sector: "Luxury Events & Catering (USA)",
    result: "+480% Social Reach",
    sub: "Viral event showcases reaching 144k+ organic viewers",
  },
  {
    brand: "Sarivaa Aesthetics",
    sector: "Aesthetic Clinic (UK / Global)",
    result: "+280% High-Ticket Inquiries",
    sub: "Clinical authority combined with luxury visual aesthetics",
  },
  {
    brand: "ER Organics",
    sector: "Clean Skincare & Beauty",
    result: "147k Views & +340% Lift",
    sub: "UGC seeding and organic routine videos driving conversions",
  },
  {
    brand: "Kaked Bakery",
    sector: "Artisanal Culinary & Pastry",
    result: "Tables Sold Out · 91k Views",
    sub: "High-retention food styling reels and local geo-targeting",
  },
];

export default function ClientShowcase() {
  const [activeHighlight, setActiveHighlight] = useState(0);

  return (
    <section id="clients" className="relative py-28 bg-[#F4ECE3] border-y border-[#D7C3B1]/60 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center z-10">
        {/* Trifid-style Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
            Brands Collaborations · Page 19
          </span>
        </div>

        {/* Trifid-style Massive Editorial Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight max-w-3xl mx-auto leading-none">
          Brands that{" "}
          <span className="italic font-serif font-normal text-[#520000] relative inline-block">
            trust us
          </span>
          <span className="text-[#520000]">.</span>
        </h2>
        <p className="mt-4 text-base text-[#3D261E] max-w-2xl mx-auto font-light leading-relaxed">
          From luxury US catering powerhouses and UK aesthetic clinics to clean skincare brands, explore the partners growing through Axoyl Digital.
        </p>
      </div>

      {/* Marquee Wrapper with edge fade masks */}
      <div className="relative w-full overflow-hidden space-y-5">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#F4ECE3] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#F4ECE3] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Leftward moving infinite marquee */}
        <div className="flex animate-marquee-left gap-4 items-center">
          {[...ROW_ONE, ...ROW_ONE].map((client, index) => (
            <div
              key={`r1-${client.id}-${index}`}
              className="flex-shrink-0 flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-white border border-[#D7C3B1]/90 hover:border-[#520000] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.03] group min-w-[240px] sm:min-w-[270px]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#D7C3B1]/60 p-1 flex items-center justify-center shrink-0 overflow-hidden group-hover:border-[#520000]/40 transition-colors">
                <Image
                  src={client.file}
                  alt={client.name}
                  width={46}
                  height={46}
                  className="max-h-full max-w-full object-contain filter contrast-105"
                />
              </div>
              <div className="flex flex-col min-w-0 pr-1 text-left">
                <span className="text-sm font-bold text-[#140202] tracking-tight truncate group-hover:text-[#520000] transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] font-semibold text-[#520000] uppercase tracking-wider truncate">
                  {client.sector}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Rightward moving infinite marquee */}
        <div className="flex animate-marquee-right gap-4 items-center">
          {[...ROW_TWO, ...ROW_TWO].map((client, index) => (
            <div
              key={`r2-${client.id}-${index}`}
              className="flex-shrink-0 flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-white border border-[#D7C3B1]/90 hover:border-[#520000] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.03] group min-w-[240px] sm:min-w-[270px]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#D7C3B1]/60 p-1 flex items-center justify-center shrink-0 overflow-hidden group-hover:border-[#520000]/40 transition-colors">
                <Image
                  src={client.file}
                  alt={client.name}
                  width={46}
                  height={46}
                  className="max-h-full max-w-full object-contain filter contrast-105"
                />
              </div>
              <div className="flex flex-col min-w-0 pr-1 text-left">
                <span className="text-sm font-bold text-[#140202] tracking-tight truncate group-hover:text-[#520000] transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] font-semibold text-[#520000] uppercase tracking-wider truncate">
                  {client.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Client Case Highlights Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 z-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D7C3B1] shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#D7C3B1]/40">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#520000]">
                Proven Client Outcomes
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#140202] mt-1">
                Measured impact across premium industries
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#520000]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Documented in Axoyl Digital Portfolio</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {KEY_CASE_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveHighlight(idx)}
                className={`p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                  activeHighlight === idx
                    ? "bg-[#520000] text-white border-[#520000] shadow-xl transform -translate-y-1"
                    : "bg-[#FAF6F0] text-[#140202] border-[#D7C3B1]/60 hover:border-[#520000]/40"
                }`}
              >
                <div
                  className={`text-xs font-bold tracking-wider uppercase mb-1 ${
                    activeHighlight === idx ? "text-[#D7C3B1]" : "text-[#520000]"
                  }`}
                >
                  {item.brand}
                </div>
                <div
                  className={`text-xs mb-3 font-medium ${
                    activeHighlight === idx ? "text-white/80" : "text-[#5A4842]"
                  }`}
                >
                  {item.sector}
                </div>
                <div
                  className={`text-2xl font-serif font-bold mb-1.5 ${
                    activeHighlight === idx ? "text-white" : "text-[#140202]"
                  }`}
                >
                  {item.result}
                </div>
                <p
                  className={`text-xs leading-relaxed font-light ${
                    activeHighlight === idx ? "text-white/85" : "text-[#5A4842]"
                  }`}
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
