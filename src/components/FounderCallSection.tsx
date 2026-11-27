"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { EXACT_CONTACT } from "@/lib/data";

interface FounderCallProps {
  onOpenBooking: () => void;
}

export function FounderCallCard({ onOpenBooking }: FounderCallProps) {
  const whatsappUrl = `https://wa.me/${EXACT_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    "Hi Esha, I'd like to book a 20-minute call to discuss my brand's social media."
  )}`;

  return (
    <div className="rounded-3xl bg-[#D7C3B1] border border-[#520000]/15 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
      <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#520000] shrink-0 shadow-md">
          <Image
            src="/team/esha-founder.jpeg"
            alt="Esha - Founder Axoyl Digital"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#140202]">
            Hey 👋 I am <span className="text-[#520000]">Esha</span>, Founder &amp; Creative Director
          </h3>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
        <button
          onClick={onOpenBooking}
          className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] transition-all transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2"
        >
          <span>Book a 20-minute call</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#140202] bg-white border border-[#520000]/20 hover:border-[#520000] hover:text-[#520000] transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp Esha</span>
        </a>
      </div>
    </div>
  );
}

export default function FounderCallSection({ onOpenBooking }: FounderCallProps) {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF6F0] text-[#140202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FounderCallCard onOpenBooking={onOpenBooking} />
      </div>
    </section>
  );
}
