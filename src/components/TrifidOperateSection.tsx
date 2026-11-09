"use client";

import React from "react";
import { Globe, MapPin } from "lucide-react";

const HUBS = [
  {
    country: "Pakistan",
    flag: "🇵🇰",
    role: "Central Production & Creative Hub",
    detail: "Full-stack short-form video editing, visual carousel design & rapid campaign deployment.",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    role: "EST / PST Client Overlap & Strategy",
    detail: "Direct account management, luxury brand consulting, and North American creator partnerships.",
  },
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    role: "Dubai & Gulf Regional Accounts",
    detail: "Real-time communication, regional influencer marketing, and corporate social management.",
  },
];

export default function TrifidOperateSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#2D0202] text-white border-t border-[#D7C3B1]/20 overflow-hidden relative">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#520000]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D7C3B1]/30 bg-[#3D0303] mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D7C3B1]">
              Where We Operate
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-white uppercase tracking-tight">
            Built with Passion<span className="text-[#D7C3B1]">.</span> <br />
            Operating Everywhere<span className="text-[#D7C3B1]">.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#D7C3B1]/90 font-serif">
            3 countries. Dedicated creative crew. One standard of excellence.
          </p>
        </div>

        {/* Global Country Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {HUBS.map((hub, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#3D0303]/80 border border-[#D7C3B1]/20 p-8 shadow-xl hover:border-[#D7C3B1]/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{hub.flag}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D7C3B1] px-3 py-1 rounded-full bg-[#520000] border border-[#D7C3B1]/20">
                    Live Hub
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {hub.country}
                </h3>

                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D7C3B1] mb-3">
                  {hub.role}
                </h4>

                <p className="text-xs sm:text-sm text-[#F4ECE3]/80 leading-relaxed font-normal">
                  {hub.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D7C3B1]/15 flex items-center gap-2 text-xs text-[#D7C3B1]">
                <MapPin className="w-3.5 h-3.5 text-[#D7C3B1]" />
                <span>Active 24/7 client workflow</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Country Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["Pakistan (HQ)", "United States", "United Arab Emirates", "United Kingdom (Partnerships)", "Canada"].map((c, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-xs font-semibold text-[#D7C3B1] bg-[#3D0303] border border-[#D7C3B1]/20 shadow-sm"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}