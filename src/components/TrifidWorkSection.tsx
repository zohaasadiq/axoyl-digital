"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface TrifidWorkSectionProps {
  onOpenAudit: () => void;
}

const FEATURED_WORKS = [
  {
    category: "Social Media Experts",
    title: "Transforming Content to Art",
    subtitle: "How Aesthetic Reels & Feed Curation Scaled Salubrity Organics",
    image: "/work/case_page_6.png",
    tag: "Skincare & Wellness",
    link: "/portfolio",
  },
  {
    category: "Short-Form Video & Viral Hooks",
    title: "144k View Video Engine",
    subtitle: "High-Retention Visual Storytelling for Hestia Harlow (USA)",
    image: "/work/case_page_5.png",
    tag: "Luxury Catering & Events",
    link: "/portfolio",
  },
  {
    category: "Content Strategy & SMM",
    title: "Social Media Architecture",
    subtitle: "Full-Funnel Content Calendar & Inquiries for Labusa Travel",
    image: "/work/case_page_7.png",
    tag: "Travel & Lifestyle",
    link: "/portfolio",
  },
  {
    category: "Aesthetic Clinics & PR",
    title: "Aesthetic Rebrand & Direct Leads",
    subtitle: "Positioning ER Organics as an Industry Authority with High Retention",
    image: "/work/case_page_8.png",
    tag: "Organic Skincare",
    link: "/portfolio",
  },
];

export default function TrifidWorkSection({ onOpenAudit }: TrifidWorkSectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF6F0] border-t border-[#D7C3B1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D7C3B1] bg-white mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#520000]">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight">
            Work that moves culture<span className="text-[#520000]">.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3D261E] max-w-2xl font-serif">
            From viral reels exceeding 147k views to luxury feed transformations that convert viewers into loyal brand advocates.
          </p>
        </div>

        {/* 2x2 Work Grid (Trifid Signature Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {FEATURED_WORKS.map((work, idx) => (
            <Link
              key={idx}
              href={work.link}
              className="group rounded-3xl bg-white border border-[#D7C3B1] p-6 sm:p-7 shadow-sm hover:border-[#520000] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-[#F4ECE3] border border-[#D7C3B1]/60 mb-6">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#520000] border border-[#D7C3B1] shadow-sm">
                      {work.tag}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-[#520000] block mb-2">
                  {work.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#140202] group-hover:text-[#520000] transition-colors mb-2">
                  {work.title}
                </h3>

                <p className="text-sm text-[#5A4842] leading-relaxed font-normal">
                  {work.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#D7C3B1]/40 flex items-center justify-between text-xs font-bold text-[#520000]">
                <span>Explore Case Study</span>
                <div className="w-8 h-8 rounded-full bg-[#FAF6F0] border border-[#D7C3B1] flex items-center justify-center group-hover:bg-[#520000] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Founder Callout Banner (Trifid Exact Founder Strip) */}
        <div className="rounded-3xl bg-[#D7C3B1] border-2 border-[#520000]/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 sm:gap-5 text-center sm:text-left">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#520000] shrink-0 shadow-md">
              <Image
                src="/team/esha-founder.jpeg"
                alt="Esha - Founder Axoyl Digital"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg sm:text-2xl font-serif font-bold text-[#140202]">
                Hey 👋 I am <span className="text-[#520000]">Esha</span>, Founder of Axoyl Digital
              </h4>
              <p className="text-xs sm:text-sm text-[#140202]/80 mt-1 font-medium">
                Let&apos;s talk about your brand&apos;s positioning and organic social media growth.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAudit}
            className="shrink-0 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] transition-colors shadow-lg flex items-center gap-2"
          >
            <span>Book a call with Esha</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}