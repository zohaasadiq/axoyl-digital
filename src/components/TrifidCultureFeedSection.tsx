"use client";

import React from "react";
import Image from "next/image";
import { Play, Eye, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import { EXACT_CONTACT } from "@/lib/data";

const REELS_FEED = [
  {
    views: "147,000+",
    title: "Clean Skincare Routine & Hook",
    category: "Organic Retention",
    image: "/work/case_page_17.png",
  },
  {
    views: "144,000+",
    title: "Hestia Harlow Luxury Events",
    category: "High-Ticket Viral Reach",
    image: "/work/p17_img1_199.png",
  },
  {
    views: "91,000+",
    title: "Aesthetic Feed Before & After",
    category: "Brand Transformation",
    image: "/work/p17_img2_200.png",
  },
  {
    views: "68,000+",
    title: "Behind The Scenes Production",
    category: "Culture & SMM Studio",
    image: "/work/p17_img3_201.png",
  },
];

export default function TrifidCultureFeedSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF6F0] border-t border-[#D7C3B1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D7C3B1] bg-white mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#520000]">
              Follow the Culture
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-[#140202] uppercase tracking-tight">
            15M+ PEOPLE ALREADY WATCHING<span className="text-[#520000]">.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#3D261E] font-serif leading-relaxed">
            Follow us for daily content, behind-the-scenes moments, and a front-row seat to the brand culture we&apos;re building — one reel at a time.
          </p>
        </div>

        {/* 4-Reel Card Row (Trifid Exact Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {REELS_FEED.map((reel, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-black aspect-[9/16] border border-[#D7C3B1] shadow-md hover:border-[#520000] hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={reel.image}
                alt={reel.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-between p-4 sm:p-5 text-left">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#D7C3B1] border border-[#D7C3B1]/20">
                    {reel.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    <Play className="w-3.5 h-3.5 fill-white" />
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
                    {reel.views}
                  </div>
                  <p className="text-[11px] text-[#D7C3B1] line-clamp-2">
                    {reel.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div>
          <a
            href={`https://instagram.com/${EXACT_CONTACT.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] transition-colors shadow-lg"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @{EXACT_CONTACT.instagram}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}