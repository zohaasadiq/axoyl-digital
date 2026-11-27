"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRegion } from "@/context/RegionContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogosSection from "@/components/ClientLogosSection";
import HomeServicesSection from "@/components/HomeServicesSection";
import DriveMediaSection from "@/components/DriveMediaSection";
import RowTestimonialsSection from "@/components/RowTestimonialsSection";
import WhereWeWorkMapSection from "@/components/WhereWeWorkMapSection";
import AuditCalloutSection from "@/components/AuditCalloutSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const router = useRouter();
  const { region, hydrated } = useRegion();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);
  const [modalMode, setModalMode] = useState<"quote" | "audit">("quote");

  useEffect(() => {
    if (hydrated && region === "INTL") {
      router.replace("/clinics");
    }
  }, [hydrated, region, router]);

  const handleOpenQuote = (service?: string) => {
    setModalMode("quote");
    setModalService(service || "Social Media Management");
    setIsQuoteModalOpen(true);
  };

  const handleOpenAudit = () => {
    setModalMode("audit");
    setIsQuoteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsQuoteModalOpen(false);
  };

  if (hydrated && region === "INTL") {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#140202] selection:bg-[#520000] selection:text-white">
      {/* 00. Global Navigation: Home · For Clinics · Work · Services · Plans · About · Contact */}
      <Navbar onOpenQuote={handleOpenQuote} onOpenAudit={handleOpenAudit} />

      {/* HeroSection: Identity statement, stats ledger, and founder call */}
      <Hero onOpenBooking={() => handleOpenQuote("20-minute consultation call")} />

      {/* Section 2: Map (Global Reach from Pakistan) */}
      <WhereWeWorkMapSection />

      {/* Section 3: Trusted by Brands */}
      <ClientLogosSection />

      {/* Section 4: Services (Social Media Management, Branding & Designing, Video Editing, Paid Ads, PR & Influencer Marketing, Personal Branding, Email Marketing) */}
      <HomeServicesSection onOpenQuote={handleOpenQuote} />

      {/* Section 5: Best pictures and videos from drive */}
      <DriveMediaSection />

      {/* Section 6: Testimonial total 6 in row form */}
      <RowTestimonialsSection />

      {/* Free Social Media Audit Callout */}
      <AuditCalloutSection onOpenAudit={handleOpenAudit} />

      {/* Footer: Styled just like Roy's Digital Media */}
      <Footer />

      {/* Direct WhatsApp Contact Floating Button */}
      <FloatingWhatsApp />

      {/* Cookie Banner */}
      <CookieBanner />

      {/* Quote & Free Social Media Audit Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseModal}
        initialService={modalService}
        initialMode={modalMode}
      />
    </main>
  );
}
