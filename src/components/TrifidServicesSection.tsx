"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface TrifidServicesSectionProps {
  onOpenAudit: () => void;
}

const SERVICES = [
  {
    num: "01",
    title: "Social Media Management",
    desc: "Always-on content, community and platform management that keeps your brand in the feed and in the conversation.",
    link: "/services",
  },
  {
    num: "02",
    title: "Content Creation & Viral Video",
    desc: "Scroll-stopping short-form reels, high-aesthetic carousels, and visual storytelling engineered with viral hooks to maximize organic non-follower reach.",
    link: "/services",
  },
  {
    num: "03",
    title: "Social Media Campaigns",
    desc: "Strategic viral campaign rollouts engineered around product drops, seasonal milestones, and brand announcements that convert casual viewers into paying advocates.",
    link: "/services",
  },
  {
    num: "04",
    title: "Influencer Marketing",
    desc: "Vetted creator networks across Pakistan, the USA, and UAE matched to your brand and measured on real engagement and ROI.",
    link: "/influencer-growth",
  },
  {
    num: "05",
    title: "Branding & Design",
    desc: "Identity systems built to outlast trends — logo, visual language, aesthetic feed curation, and executive personal branding for founders.",
    link: "/services",
  },
];

export default function TrifidServicesSection({ onOpenAudit }: TrifidServicesSectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF6F0] border-t border-[#D7C3B1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D7C3B1] bg-white mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#520000]">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight">
            <span className="text-[#520000]">EVERYTHING</span> YOU NEED. <br />
            NOTHING YOU DON&apos;T<span className="text-[#520000]">.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3D261E] max-w-2xl font-serif">
            Axoyl Digital operates as your full-stack growth partner. Zero vanity metrics, zero delays.
          </p>
        </div>

        {/* 3-Column Grid (Exact Trifid Services Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((s, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-[#D7C3B1] p-8 shadow-sm hover:border-[#520000] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-2xl font-serif font-bold text-[#520000] block mb-4">
                  {s.num}
                </span>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#140202] mb-3 group-hover:text-[#520000] transition-colors">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5A4842] leading-relaxed font-normal mb-8">
                  {s.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#D7C3B1]/40 flex items-center justify-between">
                <Link
                  href={s.link}
                  className="text-xs font-bold uppercase tracking-wider text-[#140202] group-hover:text-[#520000] transition-colors"
                >
                  Learn More
                </Link>

                <Link
                  href={s.link}
                  className="w-9 h-9 rounded-full bg-[#FAF6F0] border border-[#D7C3B1] flex items-center justify-center text-[#520000] group-hover:bg-[#520000] group-hover:text-white transition-all"
                  aria-label={`Learn more about ${s.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}

          {/* Card 06: Featured Blue/Maroon Contrast Card (Trifid Exact Block) */}
          <div className="rounded-3xl bg-[#520000] text-white p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div>
              <span className="text-2xl font-serif font-bold text-[#D7C3B1] block mb-4">
                +
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                Not sure where to start?
              </h3>

              <p className="text-xs sm:text-sm text-[#D7C3B1] leading-relaxed font-normal mb-8">
                Tell us your brand goal and timeline — we&apos;ll audit your current feed and map out the exact social strategy to get you there.
              </p>
            </div>

            <button
              onClick={onOpenAudit}
              className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#140202] bg-[#D7C3B1] hover:bg-white transition-all shadow-md font-bold"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}