"use client";

import React from "react";
import Image from "next/image";

// Verified client brands from the portfolio document
const NAMED_CLIENTS = [
  { name: "Hestia Harlow", desc: "Social Media Management", logo: "/images/drive/hestia-harlow/hestia-1.png", location: "USA" },
  { name: "Loomi Tikka", desc: "Content Creation & Design", logo: "/images/drive/loomi-tikka/loomi-5.png", location: "Dubai · Bahrain" },
  { name: "ER Organics", desc: "Influencer Marketing & SMM", logo: "/images/drive/er-organics/er-1.jpeg", location: "Global" },
  { name: "Dekco Construction", desc: "Social Media & Paid Ads", logo: "/images/drive/dekco/dekco-1.jpeg", location: "Kansas City" },
  { name: "Skinsation Clinic", desc: "360° Marketing & Branding", logo: "/images/drive/skinsation/skinsation-1.png", location: "Sialkot" },
  { name: "Flyseeker", desc: "Branding & Social Media", logo: "/images/drive/flyseeker/flyseeker-1.png", location: "Dubai" },
  { name: "Toebeansters", desc: "Character Design & Animation", logo: "/images/drive/toebeansters/toebeansters-1.png", location: "Global" },
  { name: "NSG Group", desc: "Paid Ads & Creatives", logo: "/images/drive/nsg/nsg-1.png", location: "USA" },
];

// Unnamed client text tiles specified in Client Document
const UNNAMED_CLIENT_TILES = [
  { label: "Luxury Hospitality & Catering", location: "USA" },
  { label: "Aesthetic Clinic & Med Spa", location: "UK" },
  { label: "Global Village Food Concept", location: "Dubai" },
  { label: "Clean Organic Skincare", location: "Global" },
  { label: "Residential Construction", location: "Kansas City" },
  { label: "Aviation & Travel Agency", location: "UAE" },
  { label: "Plush Toy & Character Brand", location: "Global" },
  { label: "Roofing & Insurance Ads", location: "USA" },
];

export default function ClientLogosSection() {
  const MARQUEE_ITEMS = [...NAMED_CLIENTS, ...NAMED_CLIENTS];

  return (
    <section className="py-20 sm:py-24 bg-[#FAF6F0] text-[#140202] overflow-hidden border-b border-[#D7C3B1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] mb-2">
          Global Portfolio
        </p>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#140202] mb-4">
          Trusted by Brands
        </h2>
        <p className="text-sm text-[#5A4842] max-w-xl mx-auto mb-12">
          From luxury dining and clinical aesthetics to global retail and viral toy brands.
        </p>

        {/* Slow Row of Single-Colour Named Client Logos */}
        <div className="relative w-full overflow-hidden mb-12 py-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF6F0] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF6F0] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-left gap-6 sm:gap-8 items-center w-max">
            {MARQUEE_ITEMS.map((client, idx) => (
              <div
                key={idx}
                className="w-48 sm:w-56 p-5 sm:p-6 rounded-2xl bg-white border border-[#D7C3B1] shadow-sm flex flex-col items-center justify-center text-center hover:border-[#520000] transition-all group shrink-0"
              >
                <div className="relative w-28 h-16 sm:w-32 sm:h-20 mb-3 flex items-center justify-center overflow-hidden rounded-xl bg-[#FAF6F0] border border-[#D7C3B1]/40">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="130px"
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <span className="font-serif text-sm sm:text-base font-bold tracking-tight text-[#140202] group-hover:text-[#520000] transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] font-medium text-[#5A4842] mt-0.5 uppercase tracking-wider">
                  {client.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Text Tiles for Unnamed Clients */}
        <div>
          <p className="text-xs font-semibold text-[#5A4842] uppercase tracking-wider mb-4">
            Private &amp; Retained Client Accounts
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {UNNAMED_CLIENT_TILES.map((tile, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-full bg-white border border-[#D7C3B1] text-xs font-medium text-[#3D261E] flex items-center gap-2 shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#520000]" />
                <span>{tile.label}</span>
                <span className="text-[#5A4842]/40">·</span>
                <span className="text-[#520000] font-semibold">{tile.location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
