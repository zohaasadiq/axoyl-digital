"use client";

import React from "react";
import { StatLedger } from "./NumbersStrip";
import { FounderCallCard } from "./FounderCallSection";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-28 overflow-hidden bg-[#FAF6F0] text-[#140202]">
      {/* Cartographer's grid — a quiet textural backdrop */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#530000 1px, transparent 1px), linear-gradient(90deg, #530000 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Identity statement — centered, editorial, restrained */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-20 text-center animate-fade-in">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-[84px] font-medium leading-[1.02] tracking-tight text-[#140202]">
            Social Media Marketing Agency
          </h1>
        </div>

        {/* Stats — a single ledger, not a grid of cards */}
        <div className="mb-10 sm:mb-14">
          <StatLedger />
        </div>

        {/* Meet the founder — in place of the audit callout */}
        <FounderCallCard onOpenBooking={onOpenBooking} />
      </div>
    </section>
  );
}
