"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, CheckCircle2, Mail } from "lucide-react";

const PROJECTS = [
  {
    id: "er-organics",
    brand: "ER Organics",
    industry: "Organic skincare",
    whatWeDid: "Social media management, reels and a monthly content calendar",
    result: "147K views on one reel; more followers and enquiries",
    dummyImage: "/work/case_page_17.png",
    stat: "147K views",
  },
  {
    id: "skinsation",
    brand: "Skinsation",
    industry: "Aesthetic clinic · Pakistan",
    whatWeDid: "Social media management, reels, content calendar and campaign posts",
    result: "Follower growth, more profile visits and new client bookings",
    dummyImage: "/work/case_page_8.png",
    stat: "+310% DMs",
  },
  {
    id: "flyseekers",
    brand: "Flyseekers",
    industry: "Visas & travel",
    whatWeDid: "Social media, reels and lead-focused content",
    result: "More profile visits and new client enquiries",
    dummyImage: "/work/slide_17.png",
    stat: "42 Inquiries",
  },
  {
    id: "the-london-store",
    brand: "The London Store UK",
    industry: "Luxury retail · UK",
    whatWeDid: "Social media management, reels and content calendar",
    result: "Follower growth and more store visitors",
    dummyImage: "/work/slide_5.png",
    stat: "+190% Footfall",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "You've done great for me so far, and I can tell it's because you've built real consistency and positioning behind what you do.",
    author: "Ahmad Irfan",
    role: "Manager",
    brand: "ER Organics",
  },
  {
    quote:
      "Esha and the Axoyl team took our social media off our hands completely. The content looks premium, it goes out on time, and we've seen more people finding the store through Instagram.",
    author: "Client Feedback",
    role: "Management",
    brand: "The London Store UK",
  },
  {
    quote:
      "Axoyl built our social media from the ground up: a clear plan, beautiful content and reels that actually bring in bookings. Working with Esha feels like having our own marketing team.",
    author: "Client Feedback",
    role: "Clinic Director",
    brand: "Skinsation",
  },
];

export default function SelectedWorkSection() {
  const [portfolioEmail, setPortfolioEmail] = useState("");
  const [portfolioRequested, setPortfolioRequested] = useState(false);

  const handlePortfolioRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (portfolioEmail) {
      setPortfolioRequested(true);
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "portfolio_request",
          email: portfolioEmail,
        }),
      }).catch((err) => console.error("Portfolio request error:", err));
    }
  };

  return (
    <section id="work" className="py-20 sm:py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60 text-[#140202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] mb-2">
              Proven Results
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#140202] tracking-tight">
              Selected work.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="mt-4 sm:mt-0 text-xs font-bold uppercase tracking-wider text-[#520000] hover:underline inline-flex items-center gap-1.5"
          >
            <span>View all case studies</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white border border-[#D7C3B1] overflow-hidden hover:border-[#520000] transition-all group flex flex-col justify-between shadow-sm hover:shadow-lg"
            >
              {/* Image Preview with Stat Tag */}
              <div className="relative aspect-[16/9] w-full bg-[#140202] overflow-hidden">
                <Image
                  src={project.dummyImage}
                  alt={project.brand}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#140202]/90 backdrop-blur-md text-[#D7C3B1] border border-[#520000]/40 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#D7C3B1]" />
                  <span>{project.stat}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#520000] mb-1">
                    {project.industry}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#140202] mb-3">
                    {project.brand}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A4842] mb-4">
                    <strong className="text-[#140202]">What we did: </strong>
                    {project.whatWeDid}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D7C3B1]/60">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#D7C3B1] text-[#3D261E] text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#520000]" />
                    <span>Result: {project.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Real Client Quotes */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] mb-1.5">
              Client Feedback
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#140202]">
              Words from our partners.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#520000] text-white border border-[#D7C3B1]/25 p-6 sm:p-7 flex flex-col justify-between hover:border-[#D7C3B1]/70 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group shadow-lg"
              >
                {/* Subtle luxury light sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <p className="text-sm text-white/95 italic leading-relaxed mb-6 font-serif">
                    “{t.quote}”
                  </p>
                  <div className="pt-4 border-t border-[#D7C3B1]/30">
                    <p className="text-xs font-bold text-white">{t.author}</p>
                    <p className="text-[11px] text-[#D7C3B1] font-semibold">
                      {t.role}, {t.brand}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Magnet: Portfolio by email */}
        <div className="rounded-3xl bg-white border-2 border-[#D7C3B1] p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#140202] mb-2">
            Want to see more? We share our full portfolio privately.
          </h3>
          <p className="text-xs sm:text-sm text-[#5A4842] mb-6 max-w-md mx-auto">
            Includes confidential analytics reports, before/after reach breakdowns, and high-ticket client reels.
          </p>

          {!portfolioRequested ? (
            <form onSubmit={handlePortfolioRequest} className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={portfolioEmail}
                onChange={(e) => setPortfolioEmail(e.target.value)}
                className="w-full sm:flex-1 bg-[#FAF6F0] border border-[#D7C3B1] rounded-full px-5 py-3 text-xs text-[#140202] placeholder-[#5A4842]/60 focus:outline-none focus:border-[#520000]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#520000] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#380000] transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-sm font-semibold"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send me the portfolio</span>
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF6F0] border border-[#520000] text-[#520000] text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#520000]" />
              <span>We've received your request and will email our private portfolio shortly!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
