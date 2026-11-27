"use client";

import React from "react";
import { useRegion } from "@/context/RegionContext";

export default function RegionPrompt() {
  const { region, hydrated, setRegion } = useRegion();

  if (!hydrated || region !== null) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="max-w-sm w-full rounded-3xl bg-white border border-[#D7C3B1] p-7 sm:p-8 shadow-2xl text-center text-[#140202]">
        <h2 className="font-serif text-xl sm:text-2xl font-bold mb-2">
          Where are you visiting from?
        </h2>
        <p className="text-xs sm:text-sm text-[#5A4842] mb-6 leading-relaxed">
          We&apos;ll show you the pages most relevant to your market.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => setRegion("PK")}
            className="w-full px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] transition-all"
          >
            Pakistan
          </button>
          <button
            onClick={() => setRegion("INTL")}
            className="w-full px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#140202] border border-[#D7C3B1] hover:border-[#520000] transition-colors"
          >
            Outside Pakistan
          </button>
        </div>
      </div>
    </div>
  );
}
