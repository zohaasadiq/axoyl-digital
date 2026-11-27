"use client";

import React from "react";
import HeroWorldMap from "@/components/HeroWorldMap";

export default function WhereWeWorkMapSection() {
  return (
    <section id="map" className="py-20 sm:py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60 text-[#140202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Geographically Accurate World Map with Real Continents and Flight Arcs */}
        <HeroWorldMap />
      </div>
    </section>
  );
}
