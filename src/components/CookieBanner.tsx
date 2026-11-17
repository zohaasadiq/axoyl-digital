"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const consent = localStorage.getItem("axoyl_cookie_consent");
    if (!consent) {
      // Delay showing by 1s for smoother entry
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: "all" | "essential") => {
    localStorage.setItem("axoyl_cookie_consent", choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-6 left-6 z-40 max-w-sm w-[calc(100vw-3rem)] rounded-2xl bg-white/95 backdrop-blur-md border border-[#D7C3B1] p-4 sm:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] text-[#140202] animate-fade-in"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-[#FAF6F0] text-[#520000] border border-[#D7C3B1]/60 shrink-0">
          <Cookie className="w-4 h-4" />
        </div>
        <div className="flex-1 text-xs">
          <p className="font-medium text-[#140202] leading-relaxed">
            We use optional cookies for analytics and advertising.
          </p>
          <p className="mt-1 text-[#5A4842]">
            Read our{" "}
            <Link
              href="/privacy-cookie-policy"
              className="text-[#520000] underline font-medium hover:text-[#380000]"
            >
              Cookie Policy
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="mt-3.5 flex items-center gap-2 pt-2 border-t border-[#D7C3B1]/40">
        <button
          onClick={() => handleConsent("all")}
          className="flex-1 px-3 py-2 rounded-xl bg-[#520000] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#380000] transition-colors shadow-sm"
        >
          Allow optional
        </button>
        <button
          onClick={() => handleConsent("essential")}
          className="flex-1 px-3 py-2 rounded-xl bg-[#FAF6F0] border border-[#D7C3B1] text-[#140202] text-[11px] font-bold uppercase tracking-wider hover:bg-white transition-colors"
        >
          Essential only
        </button>
      </div>
    </div>
  );
}
