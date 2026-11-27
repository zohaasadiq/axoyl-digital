"use client";

import React from "react";
import Link from "next/link";
import { Megaphone, Palette, Clapperboard, Target, Users, UserRound, Mail } from "lucide-react";

interface HomeServicesProps {
  onOpenQuote: (service?: string) => void;
}

const FLAGSHIP = { title: "Social Media Management", icon: Megaphone };

const SERVICES = [
  { title: "Branding & Designing", icon: Palette },
  { title: "Video Editing", icon: Clapperboard },
  { title: "Paid Ads", icon: Target },
  { title: "PR & Influencer Marketing", icon: Users },
  { title: "Personal Branding", icon: UserRound },
  { title: "Email Marketing", icon: Mail },
];

export default function HomeServicesSection({}: HomeServicesProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60 text-[#140202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#140202] tracking-tight mb-12 sm:mb-16">
          What we do.
        </h2>

        {/* Flagship service */}
        <div className="w-full flex items-center gap-5 sm:gap-7 rounded-2xl bg-[#520000] px-6 sm:px-10 py-7 sm:py-9 shadow-sm mb-4 sm:mb-6">
          <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 shrink-0">
            <FLAGSHIP.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#D7C3B1]" />
          </span>
          <span className="font-serif text-2xl sm:text-4xl font-bold text-white">
            {FLAGSHIP.title}
          </span>
        </div>

        {/* Remaining services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-white border border-[#D7C3B1] hover:border-[#520000] p-6 sm:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#FAF6F0] border border-[#D7C3B1] group-hover:bg-[#520000] group-hover:border-[#520000] transition-colors mb-5">
                <service.icon className="w-5 h-5 text-[#520000] group-hover:text-white transition-colors" />
              </span>
              <span className="font-serif text-lg sm:text-xl font-bold text-[#140202] leading-snug">
                {service.title}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom micro-link to full services page */}
        <div className="text-center mt-12">
          <p className="text-xs text-[#5A4842]">
            Looking for something tailored?{" "}
            <Link
              href="/services"
              className="font-bold text-[#520000] underline underline-offset-4 hover:text-[#380000] transition-colors ml-1"
            >
              Browse our complete service catalog &amp; deliverables →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
