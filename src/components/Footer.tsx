"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";
import { EXACT_CONTACT } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#2D0202] border-t border-[#D7C3B1]/30 pt-20 pb-12 overflow-hidden text-[#F4ECE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#D7C3B1]/20">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/brand/logo-tight-beige.png"
                alt="Axoyl Digital"
                width={200}
                height={75}
                className="h-11 sm:h-12 w-auto object-contain filter drop-shadow-sm"
              />
            </Link>

            <p className="text-xs sm:text-sm text-[#F4ECE3]/80 font-normal leading-relaxed max-w-sm">
              {EXACT_CONTACT.agencySubtitle}. Primarily an elite Social Media Management agency and secondarily a creative marketing &amp; PR powerhouse. Turning brand channels into cultural icons.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://instagram.com/${EXACT_CONTACT.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3D0303] border border-[#D7C3B1]/30 flex items-center justify-center text-[#D7C3B1] hover:text-white hover:border-[#D7C3B1] hover:bg-[#520000] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/923492976505`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3D0303] border border-[#D7C3B1]/30 flex items-center justify-center text-[#D7C3B1] hover:text-white hover:border-[#D7C3B1] hover:bg-[#520000] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>
              <a
                href={`mailto:${EXACT_CONTACT.email}`}
                className="w-10 h-10 rounded-full bg-[#3D0303] border border-[#D7C3B1]/30 flex items-center justify-center text-[#D7C3B1] hover:text-white hover:border-[#D7C3B1] hover:bg-[#520000] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Site Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D7C3B1] mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F4ECE3]/90">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services &amp; Capabilities
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Industry Portfolios
                </Link>
              </li>
              <li>
                <Link href="/influencer-growth" className="hover:text-white transition-colors">
                  Viral &amp; Influencer Roster
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About &amp; Creative Team
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Book Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Areas from Portfolio Page 03 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D7C3B1] mb-4">
              We Deal In
            </h4>
            <ul className="space-y-2 text-xs text-[#F4ECE3]/90">
              <li className="text-white font-bold text-xs tracking-wide">1. SOCIAL MEDIA MANAGEMENT (SMM)</li>
              <li>2. CONTENT CREATION</li>
              <li>3. SOCIAL MEDIA CAMPAIGNS</li>
              <li>4. AUDIENCE ENGAGEMENT</li>
              <li>5. INFLUENCER MARKETING</li>
              <li>6. ANALYTICS AND REPORTING</li>
              <li>7. CORPORATE BRANDING</li>
              <li>8. PERSONAL BRANDING</li>
            </ul>
          </div>

          {/* Contact Details from Portfolio Page 23 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D7C3B1] mb-4">
              Direct Inquiries
            </h4>
            <ul className="space-y-3 text-xs text-[#F4ECE3]/90">
              <li>
                <span className="block text-[#D7C3B1]/70 uppercase text-[10px] font-bold">Founder / CEO Direct:</span>
                <span className="text-white font-semibold">{EXACT_CONTACT.phone}</span>
              </li>
              <li>
                <span className="block text-[#D7C3B1]/70 uppercase text-[10px] font-bold">Direct Email:</span>
                <span className="text-white font-semibold">{EXACT_CONTACT.email}</span>
              </li>
              <li>
                <span className="block text-[#D7C3B1]/70 uppercase text-[10px] font-bold">Active Hubs:</span>
                <span className="text-white font-medium">Pakistan · United States · UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7C3B1]/80">
          <div>
            © {new Date().getFullYear()} {EXACT_CONTACT.company} ({EXACT_CONTACT.agencySubtitle}). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-white font-medium">Primary: SMM · Secondary: Marketing &amp; PR</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-[#D7C3B1] transition-colors font-semibold"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
