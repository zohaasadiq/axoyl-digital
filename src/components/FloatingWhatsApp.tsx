"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { EXACT_CONTACT } from "@/lib/data";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${EXACT_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    "Hi Esha, I found Axoyl Digital online and would love to chat about growing our brand."
  )}`;

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Esha on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-medium text-xs sm:text-sm shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:bg-[#20ba59] hover:shadow-[0_10px_30px_rgba(37,211,102,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-4 h-4 fill-current" />
        <span className="font-semibold tracking-wide">Chat with Esha</span>
      </a>
    </aside>
  );
}
