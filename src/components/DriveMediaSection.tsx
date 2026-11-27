"use client";

import React from "react";
import Image from "next/image";

const MEDIA_IMAGES = [
  "/images/media-vault/media-1.jpg",
  "/images/media-vault/media-2.jpg",
  "/images/media-vault/media-3.jpg",
  "/images/media-vault/media-4.jpg",
  "/images/media-vault/media-5.jpg",
  "/images/media-vault/media-6.jpg",
  "/images/media-vault/media-7.jpg",
];

export default function DriveMediaSection() {
  const MARQUEE_ITEMS = [...MEDIA_IMAGES, ...MEDIA_IMAGES];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF6F0] overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF6F0] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF6F0] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-left gap-4 sm:gap-6 items-center w-max">
          {MARQUEE_ITEMS.map((src, idx) => (
            <div
              key={idx}
              className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden border border-[#D7C3B1] shrink-0"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
