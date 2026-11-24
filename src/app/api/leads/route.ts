import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const LEADS_FILE_PATH = path.join(process.cwd(), "data", "leads.json");
const CASE_STUDIES_SHEET_WEBHOOK_URL =
  process.env.CASE_STUDIES_SHEET_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbxWdCraoK849rh9Wa6rU-UENbNjXL42XvXtjVkrnegfwvqKlF7-zEKgfZnwoSCzNv6K/exec";
const QUOTES_SHEET_WEBHOOK_URL =
  process.env.QUOTES_SHEET_WEBHOOK_URL ||
  process.env.GOOGLE_SHEET_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbynx0pHIqOnujvBTqU-CjfXZ4jQVUS0rHACHtCMzUHbqz5m75FIFiUku2yTVw3YSuaxqQ/exec";
const SPREADSHEET_CSV_PATH = path.join(process.cwd(), "data", "Axoyl_Forms_Master_Spreadsheet.csv");

function getLeadsFromDisk(): any[] {
  if (fs.existsSync(LEADS_FILE_PATH)) {
    try {
      const fileContent = fs.readFileSync(LEADS_FILE_PATH, "utf-8");
      const data = JSON.parse(fileContent);
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }
  return [];
}

function saveLeadsToDisk(leads: any[]): void {
  try {
    const dir = path.dirname(LEADS_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(LEADS_FILE_PATH, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    console.warn("Local disk write skipped in serverless environment (e.g. Vercel):", err);
  }
}

function appendLeadToCSV(lead: any): void {
  try {
    const dir = path.dirname(SPREADSHEET_CSV_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const isAudit = lead.type === "free_audit" || lead.type === "social_audit" || lead.type === "social_media_audit";
    const formType = isAudit ? "Free Social Media Audit" : "Get a Quote";
    const slaTarget = isAudit ? "48 Hours" : "24 Hours";
    const servicesStr = Array.isArray(lead.services) ? lead.services.join(", ") : (lead.services || lead.objective || "");

    const escapeCsv = (str: string | undefined | null) => {
      const s = str ? String(str).replace(/"/g, '""') : "";
      return `"${s}"`;
    };

    const row = [
      escapeCsv(lead.id),
      escapeCsv(lead.timestamp ? lead.timestamp.replace("T", " ").substring(0, 16) : new Date().toISOString().replace("T", " ").substring(0, 16)),
      escapeCsv(formType),
      escapeCsv(slaTarget),
      escapeCsv(lead.name || lead.clientName || ""),
      escapeCsv(lead.email || lead.contact || ""),
      escapeCsv(lead.brand || lead.brandName || ""),
      escapeCsv(lead.handle || ""),
      escapeCsv(lead.country || ""),
      escapeCsv(servicesStr),
      escapeCsv(lead.budget || ""),
      escapeCsv(lead.message || ""),
      escapeCsv(lead.status || "New"),
      escapeCsv("High"),
      escapeCsv("Esha (Founder)"),
      escapeCsv(""),
      escapeCsv("Auto-captured from web form submission"),
    ].join(",");

    fs.appendFileSync(SPREADSHEET_CSV_PATH, `\n${row}`, "utf-8");
  } catch (err) {
    console.error("Failed to append lead to CSV spreadsheet:", err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const isAudit = body.type === "free_audit" || body.type === "social_audit" || body.type === "social_media_audit";
    const leadId = isAudit ? `AUD_${Date.now()}` : `QTE_${Date.now()}`;
    const userEmail = (body.email || body.contact || "").trim().toLowerCase();

    const leads = getLeadsFromDisk();

    // Check duplicate cooldown: 48h for audits, 24h for quotes/inquiries
    if (userEmail && userEmail !== "n/a" && userEmail.includes("@")) {
      const now = Date.now();
      const cooldownHours = isAudit ? 48 : 24;
      const cooldownMs = cooldownHours * 60 * 60 * 1000;

      const existingRecentLead = leads.find((l) => {
        const leadEmail = (l.email || l.contact || "").trim().toLowerCase();
        if (leadEmail !== userEmail) return false;

        const leadIsAudit =
          l.type === "free_audit" ||
          l.type === "social_audit" ||
          l.type === "social_media_audit";

        // Check if matching same request category
        if (leadIsAudit !== isAudit) return false;

        const leadTime = new Date(l.timestamp).getTime();
        return now - leadTime < cooldownMs;
      });

      if (existingRecentLead) {
        const leadTime = new Date(existingRecentLead.timestamp).getTime();
        const elapsedMs = now - leadTime;
        const remainingHours = Math.max(1, Math.ceil((cooldownMs - elapsedMs) / (1000 * 60 * 60)));

        console.log(`[Rate Limit] Duplicate request blocked for ${userEmail}. Remaining: ${remainingHours}h`);

        return NextResponse.json({
          success: false,
          alreadySubmitted: true,
          message: "You have already placed a request.",
          lead: existingRecentLead,
          remainingHours,
          cooldownHours,
        });
      }
    }

    const newLead = {
      id: leadId,
      timestamp: new Date().toISOString(),
      type: body.type || (isAudit ? "free_audit" : "quote_request"),
      name: body.name || body.clientName || "N/A",
      email: body.email || body.contact || "N/A",
      brandName: body.brand || body.brandName || "N/A",
      handle: body.handle || "N/A",
      country: body.country || "N/A",
      services: Array.isArray(body.services) ? body.services : (body.services ? [body.services] : [body.objective || "General Inquiry"]),
      budget: body.budget || "N/A",
      message: body.message || "",
      ip: request.headers.get("x-forwarded-for") || "127.0.0.1",
      status: "new",
      routedTo: [
        "data/leads.json",
        "data/Axoyl_Forms_Master_Spreadsheet.csv",
        "Esha WhatsApp (+92 349 2976505)",
        "axoyldigital@gmail.com",
      ],
    };

    leads.unshift(newLead);
    saveLeadsToDisk(leads);
    appendLeadToCSV(newLead);

    // Forward lead to appropriate Google Sheet webhook
    const targetWebhook =
      newLead.type === "case_studies_request"
        ? CASE_STUDIES_SHEET_WEBHOOK_URL
        : (QUOTES_SHEET_WEBHOOK_URL || CASE_STUDIES_SHEET_WEBHOOK_URL);

    if (targetWebhook) {
      try {
        fetch(targetWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: JSON.stringify({
            leadId: newLead.id,
            email: newLead.email !== "N/A" ? newLead.email : "",
            name: newLead.name !== "N/A" ? newLead.name : "",
            brand: newLead.brandName !== "N/A" ? newLead.brandName : "",
            handle: newLead.handle !== "N/A" ? newLead.handle : "",
            country: newLead.country !== "N/A" ? newLead.country : "",
            services: newLead.services,
            budget: newLead.budget !== "N/A" ? newLead.budget : "",
            message: newLead.message || "",
            timestamp: newLead.timestamp,
            type: newLead.type,
            formType: isAudit ? "Free Social Media Audit" : "Get a Quote",
            slaTarget: isAudit ? "48 Hours" : "24 Hours",
          }),
        }).catch((err) => console.error("[Google Sheet Sync Error]:", err));
      } catch (e) {
        console.error("[Google Sheet Dispatch Error]:", e);
      }
    }

    console.log(`[Lead Captured] Stored lead for ${newLead.brandName} (${newLead.email})`);

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully in agency database.",
      lead: newLead,
    });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { success: false, error: "Failed to store lead." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = getLeadsFromDisk();
    return NextResponse.json({ success: true, count: leads.length, leads });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to read leads." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Missing id parameter" }, { status: 400 });
    }

    let leads = getLeadsFromDisk();
    leads = leads.filter((l) => l.id !== id);
    saveLeadsToDisk(leads);

    return NextResponse.json({ success: true, message: `Lead ${id} removed.` });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to delete lead." }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ success: false, error: "Missing id or status" }, { status: 400 });
    }

    const leads = getLeadsFromDisk();
    const lead = leads.find((l) => l.id === id);
    if (lead) {
      lead.status = status;
      saveLeadsToDisk(leads);
      return NextResponse.json({ success: true, lead });
    }

    return NextResponse.json({ success: false, error: "Lead not found." }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update lead." }, { status: 500 });
  }
}