"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/Icons";
import { EXACT_CONTACT } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#120202] text-[#FAF6F0] pt-16 pb-10 border-t border-[#D7C3B1]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-10 border-b border-[#FAF6F0]/10">
          <div className="max-w-sm">
            <Link href="/" className="inline-block mb-5">
              <div className="relative h-11 w-44">
                <Image
                  src="/brand/logo-tight-beige.png"
                  alt="Axoyl Digital"
                  width={180}
                  height={44}
                  className="object-contain object-left max-h-11 w-auto"
                />
              </div>
            </Link>

            <p className="text-sm text-[#FAF6F0]/80 font-normal leading-relaxed">
              Axoyl Digital is a full-service creative &amp; social media agency. We turn attention into long-term customer relationships.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-2.5 text-xs text-[#FAF6F0]/80">
              <a href={`tel:${EXACT_CONTACT.phone}`} className="flex items-center gap-2 hover:text-white transition-colors font-medium">
                <Phone className="w-4 h-4 text-[#D7C3B1]" />
                {EXACT_CONTACT.phone}
              </a>
              <a href={`mailto:${EXACT_CONTACT.email}`} className="flex items-center gap-2 hover:text-white transition-colors font-medium">
                <Mail className="w-4 h-4 text-[#D7C3B1]" />
                {EXACT_CONTACT.email}
              </a>
              <span className="flex items-center gap-2 text-[#FAF6F0]/60">
                <MapPin className="w-4 h-4 text-[#D7C3B1]" />
                {EXACT_CONTACT.address}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://instagram.com/${EXACT_CONTACT.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#D7C3B1]/20 flex items-center justify-center text-[#D7C3B1] hover:text-white hover:bg-[#520000] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://linkedin.com/company/${EXACT_CONTACT.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#D7C3B1]/20 flex items-center justify-center text-[#D7C3B1] hover:text-white hover:bg-[#520000] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6F0]/60">
          <div>
            © 2026 Axoyl Digital. Registered Company. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-cookie-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy-cookie-policy#cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Worldwide Packages
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
