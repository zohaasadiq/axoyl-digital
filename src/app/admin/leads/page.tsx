"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Inbox,
  Search,
  Download,
  Trash2,
  CheckCircle2,
  MessageCircle,
  Mail,
  RefreshCw,
  ExternalLink,
  Sparkles,
  ArrowLeft,
  FileSpreadsheet,
} from "lucide-react";

interface Lead {
  id: string;
  timestamp: string;
  type: string;
  brandName: string;
  handle: string;
  contact: string;
  objective: string;
  industry: string;
  message?: string;
  status: string;
  routedTo: string[];
}

export default function LeadsDashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads", { cache: "no-store" });
      const data = await res.json();
      if (data.success && Array.isArray(data.leads)) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Failed to load leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead record?")) return;
    try {
      const res = await fetch(`/api/leads?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setLeads(leads.filter((l) => l.id !== id));
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleToggleStatus = async (lead: Lead) => {
    const nextStatus = lead.status === "contacted" ? "new" : "contacted";
    try {
      const res = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: lead.id, status: nextStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setLeads(leads.map((l) => (l.id === lead.id ? { ...l, status: nextStatus } : l)));
      }
    } catch (err) {
      console.error("Status update failed:", err);
    }
  };

  const exportCSV = () => {
    if (leads.length === 0) return alert("No leads to export.");
    const headers = ["ID", "Timestamp", "Type", "Brand Name", "Handle", "Contact", "Objective", "Industry", "Status"];
    const rows = leads.map((l) => [
      l.id,
      new Date(l.timestamp).toLocaleString(),
      l.type,
      `"${l.brandName || ""}"`,
      `"${l.handle || ""}"`,
      `"${l.contact || ""}"`,
      `"${l.objective || ""}"`,
      `"${l.industry || ""}"`,
      l.status,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `axoyl_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      (l.brandName || "").toLowerCase().includes(search.toLowerCase()) ||
      (l.handle || "").toLowerCase().includes(search.toLowerCase()) ||
      (l.contact || "").toLowerCase().includes(search.toLowerCase()) ||
      (l.industry || "").toLowerCase().includes(search.toLowerCase()) ||
      (l.objective || "").toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filterType === "all" ? true : filterType === "contacted" ? l.status === "contacted" : l.status !== "contacted";

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#140202]">
      {/* Top Header */}
      <header className="bg-white border-b border-[#D7C3B1]/80 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#520000] bg-[#FAF6F0] border border-[#D7C3B1] hover:bg-[#520000] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Website</span>
            </Link>

            <div className="h-5 w-px bg-[#D7C3B1]" />

            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-lg text-[#140202]">Axoyl Lead Manager</span>
              <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#520000] text-white">
                Admin
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={fetchLeads}
              className="p-2 rounded-full border border-[#D7C3B1] text-[#140202] hover:text-[#520000] hover:bg-[#FAF6F0] transition-colors"
              title="Refresh leads"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>

            <button
              onClick={exportCSV}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#520000] hover:bg-[#380000] transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Info Banner */}
        <div className="mb-8 rounded-3xl bg-white border border-[#D7C3B1] p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#140202]">
              Incoming Inquiries &amp; 1:1 Social Audits
            </h1>
            <p className="text-xs text-[#5A4842] mt-1 leading-relaxed">
              Every request submitted on the website is recorded in realtime to{" "}
              <code className="bg-[#FAF6F0] text-[#520000] font-bold px-2 py-0.5 rounded border border-[#D7C3B1]">
                data/leads.json
              </code>{" "}
              and accessible via API at{" "}
              <Link href="/api/leads" target="_blank" className="text-[#520000] underline font-bold">
                /api/leads ↗
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center shrink-0">
            <div className="p-3 rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1]/80 min-w-[90px]">
              <span className="text-[10px] font-bold uppercase text-[#5A4842] block">Total Leads</span>
              <span className="text-2xl font-serif font-bold text-[#140202]">{leads.length}</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1]/80 min-w-[90px]">
              <span className="text-[10px] font-bold uppercase text-[#520000] block">New / Pending</span>
              <span className="text-2xl font-serif font-bold text-[#520000]">
                {leads.filter((l) => l.status !== "contacted").length}
              </span>
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF6F0] border border-[#D7C3B1]/80 min-w-[90px]">
              <span className="text-[10px] font-bold uppercase text-emerald-700 block">Contacted</span>
              <span className="text-2xl font-serif font-bold text-emerald-600">
                {leads.filter((l) => l.status === "contacted").length}
              </span>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#5A4842] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search brand, handle, phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-white border border-[#D7C3B1] text-[#140202] placeholder-[#5A4842]/50 focus:outline-none focus:border-[#520000]"
            />
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setFilterType("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                filterType === "all"
                  ? "bg-[#520000] text-white shadow-sm"
                  : "bg-white text-[#3D261E] border border-[#D7C3B1] hover:border-[#520000]"
              }`}
            >
              All ({leads.length})
            </button>
            <button
              onClick={() => setFilterType("new")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                filterType === "new"
                  ? "bg-[#520000] text-white shadow-sm"
                  : "bg-white text-[#3D261E] border border-[#D7C3B1] hover:border-[#520000]"
              }`}
            >
              Pending ({leads.filter((l) => l.status !== "contacted").length})
            </button>
            <button
              onClick={() => setFilterType("contacted")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                filterType === "contacted"
                  ? "bg-[#520000] text-white shadow-sm"
                  : "bg-white text-[#3D261E] border border-[#D7C3B1] hover:border-[#520000]"
              }`}
            >
              Contacted ({leads.filter((l) => l.status === "contacted").length})
            </button>
          </div>
        </div>

        {/* Leads List / Table */}
        {filteredLeads.length === 0 ? (
          <div className="rounded-3xl bg-white border border-[#D7C3B1] p-12 text-center">
            <Inbox className="w-12 h-12 text-[#D7C3B1] mx-auto mb-3" />
            <h3 className="text-lg font-serif font-bold text-[#140202]">No requests found</h3>
            <p className="text-xs text-[#5A4842] mt-1">
              {search ? "No inquiries match your search filter." : "Audit requests will appear here immediately once submitted."}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredLeads.map((lead) => {
              const formattedDate = new Date(lead.timestamp).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              });

              const isContacted = lead.status === "contacted";

              const cleanPhone = (lead.contact || "").replace(/[^0-9]/g, "");
              const waText = encodeURIComponent(
                `Hi ${lead.brandName || "there"}, this is Esha from Axoyl Digital regarding your Social Media Audit request!`
              );

              return (
                <div
                  key={lead.id}
                  className={`rounded-3xl border p-6 transition-all duration-300 shadow-sm hover:shadow-md ${
                    isContacted ? "bg-[#FAF6F0] border-[#D7C3B1]" : "bg-white border-[#520000]/30 hover:border-[#520000]"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Brand Info */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg sm:text-xl font-serif font-bold text-[#140202]">
                          {lead.brandName || "Untitled Inquiry"}
                        </span>
                        {lead.handle && lead.handle !== "N/A" && (
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#520000] border border-[#520000]/20">
                            {lead.handle}
                          </span>
                        )}
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isContacted
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : "bg-amber-100 text-amber-800 border border-amber-300"
                          }`}
                        >
                          {isContacted ? "Contacted" : "New Request"}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#5A4842]">
                        <span>
                          <strong>Objective:</strong> {lead.objective}
                        </span>
                        <span>•</span>
                        <span>
                          <strong>Industry:</strong> {lead.industry}
                        </span>
                        <span>•</span>
                        <span>{formattedDate}</span>
                      </div>

                      {lead.message && (
                        <p className="text-xs text-[#3D261E] bg-[#FAF6F0] p-2.5 rounded-xl border border-[#D7C3B1]/60 mt-2">
                          &ldquo;{lead.message}&rdquo;
                        </p>
                      )}
                    </div>

                    {/* Contact & Actions */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 lg:pt-0">
                      <span className="text-xs font-bold text-[#140202] px-3 py-1.5 rounded-xl bg-[#FAF6F0] border border-[#D7C3B1]">
                        {lead.contact}
                      </span>

                      {/* WhatsApp Button */}
                      {cleanPhone ? (
                        <a
                          href={`https://wa.me/${cleanPhone}?text=${waText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
                          title="Open WhatsApp chat with lead"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      ) : null}

                      {/* Email Button */}
                      {lead.contact.includes("@") && (
                        <a
                          href={`mailto:${lead.contact}?subject=Your%20Axoyl%20Digital%20Social%20Media%20Audit`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-[#520000] bg-white border border-[#D7C3B1] hover:bg-[#FAF6F0] transition-colors"
                          title="Send email to lead"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Email</span>
                        </a>
                      )}

                      {/* Toggle Status */}
                      <button
                        onClick={() => handleToggleStatus(lead)}
                        className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-bold transition-colors ${
                          isContacted
                            ? "bg-white text-[#5A4842] border border-[#D7C3B1] hover:text-[#140202]"
                            : "bg-[#520000] text-white hover:bg-[#380000]"
                        }`}
                        title="Toggle contacted status"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{isContacted ? "Mark Pending" : "Mark Contacted"}</span>
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(lead.id)}
                        className="p-2 rounded-full text-[#5A4842] hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition-colors"
                        title="Delete lead record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}