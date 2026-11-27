"use client";

import React from "react";
import Image from "next/image";

const CLIENT_LOGOS = [
  { file: "1.png", alt: "Dekco Construction" },
  { file: "2.png", alt: "HFO Accountants" },
  { file: "3.png", alt: "Loomi" },
  { file: "4.png", alt: "School Impact" },
  { file: "5.png", alt: "Skinsation" },
  { file: "6.png", alt: "Source Atelier" },
  { file: "7.png", alt: "Toebeansters" },
  { file: "8.png", alt: "Zeno International" },
  { file: "9.png", alt: "Fincorp" },
  { file: "10.png", alt: "H Ribbon" },
  { file: "11.png", alt: "Hestia Harlow" },
  { file: "12.png", alt: "Rese Wellness" },
  { file: "13.png", alt: "Fly Seekers" },
  { file: "14.png", alt: "Melo" },
  { file: "15.png", alt: "Zam Zam" },
  { file: "16.png", alt: "Labusa Travel" },
  { file: "17.png", alt: "The London Store UK" },
  { file: "18.png", alt: "Kaked" },
  { file: "19.png", alt: "Northstar Group" },
  { file: "20.png", alt: "Oyster" },
  { file: "21.png", alt: "Nurse at Call" },
];

export default function ClientLogosSection() {
  const MARQUEE_ITEMS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-20 sm:py-24 bg-[#FAF6F0] text-[#140202] overflow-hidden border-b border-[#D7C3B1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#140202] mb-12">
          Trusted by Brands
        </h2>

        {/* Slow Row of Client Logos */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF6F0] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF6F0] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-left gap-6 sm:gap-8 items-center w-max">
            {MARQUEE_ITEMS.map((client, idx) => (
              <div
                key={idx}
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-[#D7C3B1] shadow-sm shrink-0 hover:border-[#520000] transition-all"
              >
                <Image
                  src={`/client-logos/${client.file}`}
                  alt={client.alt}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
