"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrifidAboutSection from "@/components/TrifidAboutSection";
import TrifidWorkSection from "@/components/TrifidWorkSection";
import TrifidServicesSection from "@/components/TrifidServicesSection";
import TrifidResultsSection from "@/components/TrifidResultsSection";
import ClientShowcase from "@/components/ClientShowcase";
import TrifidOperateSection from "@/components/TrifidOperateSection";
import TrifidDifferenceSection from "@/components/TrifidDifferenceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrifidCultureFeedSection from "@/components/TrifidCultureFeedSection";
import TrifidCtaSection from "@/components/TrifidCtaSection";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";

export default function Home() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleOpenAudit = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#140202] selection:bg-[#520000] selection:text-white">
      {/* 01. Floating Capsule Navbar (Trifid Style) */}
      <Navbar onOpenAudit={handleOpenAudit} />

      {/* 02. Hero Section with Floating Bottom-Right Brief Card (Trifid Style) */}
      <Hero onOpenAudit={handleOpenAudit} />

      {/* 03. "Who We Are" — THE SMM & CULTURE AGENCY. + 4 Metric Blocks */}
      <TrifidAboutSection />

      {/* 04. "Our Work" — Work that moves culture. + Founder Banner */}
      <TrifidWorkSection onOpenAudit={handleOpenAudit} />

      {/* 05. "What We Do" — EVERYTHING YOU NEED. NOTHING YOU DON'T. (3-Col Grid) */}
      <TrifidServicesSection onOpenAudit={handleOpenAudit} />

      {/* 06. "Real Clients. Real Results." — Phone Mockup Reel Proof & Reviews */}
      <TrifidResultsSection />

      {/* 07. "Brands Collaborations" — Dual Infinite Logo Marquee (Page 19) */}
      <ClientShowcase />

      {/* 08. "Where We Operate" — Built with Passion. Operating Everywhere. (PK · USA · UAE) */}
      <TrifidOperateSection />

      {/* 09. "Why Choose Us" — THE DIFFERENCE IS IN HOW WE'RE BUILT. */}
      <TrifidDifferenceSection onOpenAudit={handleOpenAudit} />

      {/* 10. "Client Stories" — DON'T TAKE OUR WORD FOR IT. (Split Screen) */}
      <TestimonialsSection />

      {/* 11. "Follow the Culture" — 15M+ Views & Reel Showcase */}
      <TrifidCultureFeedSection />

      {/* 12. "Start Something Real" — Bottom Stage CTA */}
      <TrifidCtaSection onOpenAudit={handleOpenAudit} />

      {/* 13. Deep Maroon Footer */}
      <Footer />

      {/* 14. Interactive Audit Modal */}
      <AuditModal isOpen={isAuditModalOpen} onClose={handleCloseAudit} />
    </main>
  );
}