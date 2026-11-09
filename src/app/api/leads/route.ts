import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const LEADS_FILE_PATH = path.join(process.cwd(), "data", "leads.json");

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
  const dir = path.dirname(LEADS_FILE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(LEADS_FILE_PATH, JSON.stringify(leads, null, 2), "utf-8");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const newLead = {
      id: `lead_${Date.now()}`,
      timestamp: new Date().toISOString(),
      type: body.type || "social_audit",
      brandName: body.brandName || "N/A",
      handle: body.handle || "N/A",
      contact: body.contact || body.email || "N/A",
      objective: body.objective || body.goal || body.service || "N/A",
      industry: body.industry || "N/A",
      message: body.message || "",
      ip: request.headers.get("x-forwarded-for") || "127.0.0.1",
      status: "new",
      routedTo: [
        "data/leads.json",
        "Esha WhatsApp (+92 349 2976505)",
        "axoyldigital@gmail.com",
      ],
    };

    const leads = getLeadsFromDisk();
    leads.unshift(newLead);
    saveLeadsToDisk(leads);

    console.log(`[Lead Captured] Stored lead for ${newLead.brandName} (${newLead.contact})`);

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