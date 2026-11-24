"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Filter, ExternalLink, CheckCircle2 } from "lucide-react";

interface MediaItem {
  id: string;
  brand: string;
  category: string;
  title: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  aspect?: string;
}

const DRIVE_MEDIA_ITEMS: MediaItem[] = [
  // Skinsation (Aesthetics Clinic)
  {
    id: "skinsation-video",
    brand: "Skinsation",
    category: "Aesthetic Clinic",
    title: "Clinical Treatment & Skincare Showcase",
    type: "video",
    src: "/images/drive/skinsation/skinsation-video.mp4",
    aspect: "aspect-[9/16]",
  },
  {
    id: "skinsation-img-1",
    brand: "Skinsation",
    category: "Aesthetic Clinic",
    title: "Luxury Clinic Treatment Visuals",
    type: "image",
    src: "/images/drive/skinsation/skinsation-1.png",
    aspect: "aspect-square",
  },
  {
    id: "skinsation-img-4",
    brand: "Skinsation",
    category: "Aesthetic Clinic",
    title: "It's Not Your Skincare - Educational Campaign",
    type: "image",
    src: "/images/drive/skinsation/skinsation-4.png",
    aspect: "aspect-[4/5]",
  },
  {
    id: "skinsation-img-7",
    brand: "Skinsation",
    category: "Aesthetic Clinic",
    title: "Clinic Experience & Appointment Invitation",
    type: "image",
    src: "/images/drive/skinsation/skinsation-7.png",
    aspect: "aspect-square",
  },

  // Hestia Harlow (Luxury Catering & Events)
  {
    id: "hestia-video",
    brand: "Hestia Harlow",
    category: "Events & Hospitality",
    title: "Seasonal Cocktail & Event Atmosphere",
    type: "video",
    src: "/images/drive/hestia-harlow/hestia-video.mp4",
    aspect: "aspect-[9/16]",
  },
  {
    id: "hestia-img-1",
    brand: "Hestia Harlow",
    category: "Events & Hospitality",
    title: "Adoro Amalfi Tablescape",
    type: "image",
    src: "/images/drive/hestia-harlow/hestia-1.png",
    aspect: "aspect-square",
  },
  {
    id: "hestia-img-2",
    brand: "Hestia Harlow",
    category: "Events & Hospitality",
    title: "Coastal Cool Dining Aesthetic",
    type: "image",
    src: "/images/drive/hestia-harlow/hestia-2.png",
    aspect: "aspect-square",
  },

  // Loomi Tikka (Dubai & Bahrain Food)
  {
    id: "loomi-video",
    brand: "Loomi Tikka",
    category: "Food & Beverage",
    title: "Global Village Dubai Street Food Buzz",
    type: "video",
    src: "/images/drive/loomi-tikka/loomi-video.mp4",
    aspect: "aspect-[9/16]",
  },
  {
    id: "loomi-img-5",
    brand: "Loomi Tikka",
    category: "Food & Beverage",
    title: "LOOMI X SIKKA Visual Identity",
    type: "image",
    src: "/images/drive/loomi-tikka/loomi-5.png",
    aspect: "aspect-square",
  },
  {
    id: "loomi-img-2",
    brand: "Loomi Tikka",
    category: "Food & Beverage",
    title: "Eid Festive Campaign Box",
    type: "image",
    src: "/images/drive/loomi-tikka/loomi-2.png",
    aspect: "aspect-square",
  },

  // ER Organics (Skincare & Beauty)
  {
    id: "er-img-1",
    brand: "ER Organics",
    category: "Clean Skincare",
    title: "Creator Collaboration & Product Shoot",
    type: "image",
    src: "/images/drive/er-organics/er-1.jpeg",
    aspect: "aspect-[4/5]",
  },
  {
    id: "er-img-3",
    brand: "ER Organics",
    category: "Clean Skincare",
    title: "Skincare Texture & Application Feed",
    type: "image",
    src: "/images/drive/er-organics/er-3.jpeg",
    aspect: "aspect-square",
  },

  // Flyseeker (Travel)
  {
    id: "flyseeker-video",
    brand: "Flyseeker",
    category: "Travel & Tours",
    title: "Dubai Wanderlust & Booking Campaign",
    type: "video",
    src: "/images/drive/flyseeker/flyseeker-video.mp4",
    aspect: "aspect-[9/16]",
  },
  {
    id: "flyseeker-img-1",
    brand: "Flyseeker",
    category: "Travel & Tours",
    title: "Dubai Destination Highlights",
    type: "image",
    src: "/images/drive/flyseeker/flyseeker-1.png",
    aspect: "aspect-square",
  },

  // Dekco Construction (Construction)
  {
    id: "dekco-img-1",
    brand: "Dekco Construction",
    category: "Construction",
    title: "Craftsmanship & Outdoor Deck Living",
    type: "image",
    src: "/images/drive/dekco/dekco-1.jpeg",
    aspect: "aspect-[4/5]",
  },

  // NSG Group (Performance Ads)
  {
    id: "nsg-img-1",
    brand: "NSG Group",
    category: "Performance Ads",
    title: "High-Converting Roofing Ad Creative",
    type: "image",
    src: "/images/drive/nsg/nsg-1.png",
    aspect: "aspect-square",
  },

  // Toebeansters (Animation & Plush)
  {
    id: "toebeansters-img-1",
    brand: "Toebeansters",
    category: "Character & Design",
    title: "Plush Character Lineup & Visuals",
    type: "image",
    src: "/images/drive/toebeansters/toebeansters-1.png",
    aspect: "aspect-square",
  },
];

export default function DriveMediaSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "images" | "videos">("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const brands = ["all", "Skinsation", "Hestia Harlow", "Loomi Tikka", "ER Organics", "Flyseeker", "Dekco Construction", "NSG Group", "Toebeansters"];

  const filteredItems = DRIVE_MEDIA_ITEMS.filter((item) => {
    const matchesType =
      activeFilter === "all" ||
      (activeFilter === "images" && item.type === "image") ||
      (activeFilter === "videos" && item.type === "video");

    const matchesBrand = selectedBrand === "all" || item.brand === selectedBrand;
    return matchesType && matchesBrand;
  });

  return (
    <section id="drive-showcase" className="py-20 sm:py-28 bg-[#FAF6F0] border-t border-[#D7C3B1]/60 text-[#140202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#520000]/25 text-[#520000] text-xs font-bold uppercase tracking-[0.2em] mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#520000]" />
              <span>Section 4 · Media Vault</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#140202] tracking-tight">
              Best pictures and videos from drive.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5A4842] max-w-2xl">
              Curated reels, viral campaign creatives, table settings, and ad creative assets developed for our partner brands across Dubai, the USA, and Pakistan.
            </p>
          </div>

          {/* Media Type Tabs */}
          <div className="flex items-center p-1 rounded-full bg-white border border-[#D7C3B1] self-start md:self-auto shrink-0 shadow-xs">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === "all"
                  ? "bg-[#520000] text-white shadow-xs"
                  : "text-[#3D261E] hover:text-[#520000]"
              }`}
            >
              All Media
            </button>
            <button
              onClick={() => setActiveFilter("images")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === "images"
                  ? "bg-[#520000] text-white shadow-xs"
                  : "text-[#3D261E] hover:text-[#520000]"
              }`}
            >
              Pictures
            </button>
            <button
              onClick={() => setActiveFilter("videos")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === "videos"
                  ? "bg-[#520000] text-white shadow-xs"
                  : "text-[#3D261E] hover:text-[#520000]"
              }`}
            >
              Videos &amp; Reels
            </button>
          </div>
        </div>

        {/* Brand Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5A4842] flex items-center gap-1 shrink-0 mr-2">
            <Filter className="w-3 h-3 text-[#520000]" />
            <span>Brand:</span>
          </span>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedBrand === b
                  ? "bg-[#520000] text-white shadow-xs"
                  : "bg-white text-[#3D261E] border border-[#D7C3B1] hover:border-[#520000]"
              }`}
            >
              {b === "all" ? "All Brands" : b}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-white border border-[#D7C3B1] overflow-hidden hover:border-[#520000] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/5] w-full bg-[#1B0505] overflow-hidden">
                {item.type === "video" ? (
                  <div className="relative w-full h-full">
                    <video
                      src={item.src}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                    <button
                      onClick={() => setActiveVideoModal(item.src)}
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#520000]/90 text-white flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform shadow-lg"
                      aria-label="Play Video"
                    >
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </button>
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 text-[#FAF6F0] text-[10px] font-bold uppercase tracking-wider border border-white/20">
                      Reel / Video
                    </span>
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      aria-hidden="true"
                      className="object-cover filter blur-md opacity-30 pointer-events-none"
                    />
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-contain relative z-10 p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                    <span className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-white/90 text-[#140202] text-[10px] font-bold uppercase tracking-wider border border-[#D7C3B1]">
                      Design / Photo
                    </span>
                  </div>
                )}
              </div>

              {/* Media Card Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#520000]">
                      {item.brand}
                    </span>
                    <span className="text-[10px] text-[#5A4842] font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-serif font-bold text-[#140202] line-clamp-1 group-hover:text-[#520000] transition-colors">
                    {item.title}
                  </h4>
                </div>

                <div className="pt-3 mt-3 border-t border-[#D7C3B1]/40 flex items-center justify-between text-xs text-[#5A4842]">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Live in Client Feed</span>
                  </span>
                  {item.type === "video" ? (
                    <button
                      onClick={() => setActiveVideoModal(item.src)}
                      className="text-[#520000] font-bold hover:underline inline-flex items-center gap-1 text-[11px]"
                    >
                      <span>Watch</span>
                      <Play className="w-2.5 h-2.5 fill-current" />
                    </button>
                  ) : (
                    <a
                      href={item.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#520000] font-bold hover:underline inline-flex items-center gap-1 text-[11px]"
                    >
                      <span>Expand</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#140202] rounded-3xl overflow-hidden border border-[#D7C3B1]/40 shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideoModal}
              controls
              autoPlay
              playsInline
              muted
              className="w-full max-h-[80vh] rounded-2xl object-contain bg-black"
            />
            <div className="p-4 flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Axoyl Client Video Asset
              </span>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="px-4 py-1.5 rounded-full bg-[#520000] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#720909]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
