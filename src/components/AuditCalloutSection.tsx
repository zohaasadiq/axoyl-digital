"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface AuditCalloutProps {
  onOpenAudit: () => void;
}

export function AuditCalloutCard({ onOpenAudit }: AuditCalloutProps) {
  const [auditHandle, setAuditHandle] = useState("");

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenAudit();
  };

  return (
    <div className="border border-[#D7C3B1] bg-white p-6 sm:p-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-xl">
          <p className="text-sm text-[#520000] mb-2">Free social media audit</p>
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#140202] mb-1.5">
            Send us your handle.
          </h2>
          <p className="text-xs sm:text-sm text-[#5A4842] leading-relaxed">
            Within 48 hours you&apos;ll get a short review of what&apos;s working, what isn&apos;t, and what we&apos;d fix first. No contracts. No sales pitch.
          </p>
        </div>

        <form onSubmit={handleAuditSubmit} className="flex flex-col sm:flex-row items-center gap-2.5 w-full lg:w-auto">
          <input
            type="text"
            placeholder="@yourbrand or website"
            value={auditHandle}
            onChange={(e) => setAuditHandle(e.target.value)}
            className="w-full sm:w-80 bg-[#FAF6F0] border border-[#D7C3B1] px-5 py-3 text-xs sm:text-sm text-[#140202] placeholder-[#5A4842]/60 focus:outline-none focus:border-[#530000]"
          />
          <button
            type="button"
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-7 py-3 bg-[#530000] hover:bg-[#380000] text-white text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <span>Get my free audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AuditCalloutSection({ onOpenAudit }: AuditCalloutProps) {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF6F0] text-[#140202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AuditCalloutCard onOpenAudit={onOpenAudit} />
      </div>
    </section>
  );
}
