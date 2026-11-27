"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useRegion } from "@/context/RegionContext";

interface NavbarProps {
  onOpenQuote?: (service?: string) => void;
  onOpenAudit?: () => void;
}

const PK_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Work" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const INTL_NAV_LINKS = [
  { href: "/clinics", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ onOpenQuote, onOpenAudit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { region } = useRegion();
  const isIntl = region === "INTL";
  const navLinks = isIntl ? INTL_NAV_LINKS : PK_NAV_LINKS;
  const homeHref = isIntl ? "/clinics" : "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookCallClick = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else if (onOpenAudit) {
      onOpenAudit();
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 pointer-events-auto px-5 sm:px-8 py-3 flex items-center justify-between border ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.08)] border-[#D7C3B1]"
            : "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-[#D7C3B1]/80"
        }`}
      >
        {/* Brand Logo */}
        <Link href={homeHref} className="flex items-center group py-0.5">
          <div className="relative h-10 sm:h-11 w-44 sm:w-52 transition-transform group-hover:scale-105 flex items-center">
            <Image
              src="/brand/logo-tight-maroon.png"
              alt="Axoyl Digital Logo"
              width={180}
              height={44}
              priority
              className="object-contain object-left max-h-11 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors relative py-1 ${
                  isActive
                    ? "text-[#520000]"
                    : "text-[#140202]/80 hover:text-[#520000]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#520000] rounded-full shadow-sm" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Book a call */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleBookCallClick}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] hover:shadow-[0_4px_16px_rgba(82,0,0,0.25)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
          >
            <span>Book a call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={handleBookCallClick}
            className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-[#520000]"
          >
            Book call
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-[#FAF6F0] border border-[#D7C3B1] text-[#140202] hover:text-[#520000] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto rounded-3xl bg-white border border-[#D7C3B1] shadow-2xl p-5 pointer-events-auto animate-fade-in text-[#140202]">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs font-bold uppercase tracking-wider py-2.5 px-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-[#FAF6F0] text-[#520000]"
                      : "text-[#140202] hover:bg-[#FAF6F0] hover:text-[#520000]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
