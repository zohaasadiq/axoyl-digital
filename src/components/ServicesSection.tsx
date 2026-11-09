"use client";

import React, { useState } from "react";
import {
  Share2,
  Video,
  Flame,
  Users,
  Megaphone,
  BarChart3,
  Building2,
  UserCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { WE_DEAL_IN } from "@/lib/data";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  smm: <Share2 className="w-5 h-5 text-[#520000]" />,
  "content-creation": <Video className="w-5 h-5 text-[#520000]" />,
  campaigns: <Flame className="w-5 h-5 text-[#520000]" />,
  engagement: <Users className="w-5 h-5 text-[#520000]" />,
  influencer: <Megaphone className="w-5 h-5 text-[#520000]" />,
  analytics: <BarChart3 className="w-5 h-5 text-[#520000]" />,
  "corporate-branding": <Building2 className="w-5 h-5 text-[#520000]" />,
  "personal-branding": <UserCheck className="w-5 h-5 text-[#520000]" />,
};

interface ServicesSectionProps {
  onOpenAudit: () => void;
}

export default function ServicesSection({ onOpenAudit }: ServicesSectionProps) {
  const [filter, setFilter] = useState<"all" | "primary" | "secondary">("all");

  const filteredItems = WE_DEAL_IN.filter((item) => {
    if (filter === "primary") return item.primary;
    if (filter === "secondary") return !item.primary;
    return true;
  });

  return (
    <section id="services" className="relative py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header directly from Portfolio Page 3 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#D7C3B1]/60">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#520000]/25 bg-white mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#520000] uppercase">
                Portfolio Page 03 · Core Capabilities
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight">
              WE DEAL IN<span className="text-[#520000]">.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#3D261E] font-normal leading-relaxed">
              We specialize in providing top-tier services to elevate your online presence and brand identity. Our expertise spans across a variety of areas:
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === "all"
                  ? "bg-[#520000] text-white shadow-md"
                  : "bg-white text-[#3D261E] border border-[#D7C3B1] hover:border-[#520000]"
              }`}
            >
              All Areas (8)
            </button>
            <button
              onClick={() => setFilter("primary")}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                filter === "primary"
                  ? "bg-[#520000] text-white shadow-md"
                  : "bg-white text-[#3D261E] border border-[#D7C3B1] hover:border-[#520000]"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#520000]" />
              Primary: Social Media (SMM)
            </button>
            <button
              onClick={() => setFilter("secondary")}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === "secondary"
                  ? "bg-[#520000] text-white shadow-md"
                  : "bg-white text-[#3D261E] border border-[#D7C3B1] hover:border-[#520000]"
              }`}
            >
              Secondary: Marketing &amp; PR
            </button>
          </div>
        </div>

        {/* 8 Deal-In Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className={`group rounded-3xl p-7 transition-all duration-300 border flex flex-col justify-between ${
                item.primary
                  ? "bg-white border-[#520000]/40 hover:border-[#520000] shadow-md hover:shadow-xl hover:-translate-y-1.5"
                  : "bg-[#FAF6F0] border-[#D7C3B1] hover:border-[#520000]/50 hover:bg-white hover:-translate-y-1"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1] flex items-center justify-center group-hover:bg-[#520000] group-hover:border-[#520000] transition-colors">
                    <span className="group-hover:text-white transition-colors">
                      {SERVICE_ICONS[item.id]}
                    </span>
                  </div>

                  {item.primary ? (
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#520000] text-white shadow-sm">
                      Primary SMM
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white text-[#5A4842] border border-[#D7C3B1]">
                      Marketing &amp; PR
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-serif font-bold text-[#140202] tracking-wide mb-2.5 group-hover:text-[#520000] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#5A4842] leading-relaxed font-normal mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D7C3B1]/50 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#520000] uppercase tracking-wider">
                  Axoyl Standard
                </span>
                <button
                  onClick={onOpenAudit}
                  className="text-xs font-bold text-[#520000] hover:text-[#720909] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
