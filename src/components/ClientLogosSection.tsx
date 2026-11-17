"use client";

import React from "react";
import Image from "next/image";

// Verified real single-colour client logos
const NAMED_CLIENTS = [
  { name: "Flyseekers", desc: "Aviation & Luxury Travel", logo: "/clients/client_24.png" },
  { name: "ER Organics", desc: "Organic Hair & Skincare", logo: "/clients/client_14.png" },
  { name: "Skinsation Clinic", desc: "Aesthetic & Skin Specialists", logo: "/clients/client_9.png" },
  { name: "The London Store UK", desc: "International Retail & E-com", logo: "/clients/client_22.png" },
  { name: "Pure Radiance", desc: "Dermatology & Laser", logo: "/clients/client_18.png" },
];

// Unnamed client text tiles specified in Client Document
const UNNAMED_CLIENT_TILES = [
  { label: "Luxury Fashion Brand", location: "UAE" },
  { label: "Aesthetic Clinic", location: "UK" },
  { label: "Boutique Perfumer", location: "Lahore" },
  { label: "Modest Wear Label", location: "USA" },
  { label: "Fine Dining Restaurant", location: "Islamabad" },
  { label: "Sustainable Apparel", location: "Ireland" },
];

export default function ClientLogosSection() {
  const MARQUEE_ITEMS = [...NAMED_CLIENTS, ...NAMED_CLIENTS, ...NAMED_CLIENTS];

  return (
    <section className="py-20 sm:py-24 bg-[#FAF6F0] text-[#140202] overflow-hidden border-b border-[#D7C3B1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#520000] mb-2">
          Global Portfolio
        </p>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#140202] mb-12">
          Trusted by brands across 6 countries.
        </h2>

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
                <div className="relative w-28 h-16 sm:w-32 sm:h-20 mb-3 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={130}
                    height={70}
                    className="max-h-14 sm:max-h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
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
