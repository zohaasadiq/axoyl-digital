"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import HeroWorldMap from "@/components/HeroWorldMap";

export default function WhereWeWorkMapSection() {
  return (
    <section id="map" className="py-20 sm:py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60 text-[#140202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#520000] border border-[#520000]/25 text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
            <span>Global Reach · From Pakistan</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#140202] tracking-tight mb-4 leading-tight">
            Our team in Pakistan. <br />
            <span className="italic font-normal text-[#520000]">Your brand, everywhere.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5A4842] font-normal leading-relaxed">
            We work with clinics, med-spas, and lifestyle brands in the UAE, UK, USA, Ireland, and Australia. Wherever your patients and customers scroll, our team builds your authority.
          </p>
        </div>

        {/* Exact Geographically Accurate World Map with Real Continents and Flight Arcs */}
        <HeroWorldMap />
      </div>
    </section>
  );
}
