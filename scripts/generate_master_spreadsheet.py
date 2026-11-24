import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation
import os

wb = openpyxl.Workbook()

# Setup sheets
ws_master = wb.active
ws_master.title = "All Inquiries & Leads"

ws_audits = wb.create_sheet(title="Free Audits (48h)")
ws_quotes = wb.create_sheet(title="Quote Requests (24h)")
ws_dropdowns = wb.create_sheet(title="Validation & Settings")

# Brand Colors (Axoyl Burgundy Palette)
BURGUNDY_DARK = "520000"
BURGUNDY_LIGHT = "7A1A1A"
CREAM_BG = "FAF6F0"
GOLD_ACCENT = "D7C3B1"
WHITE = "FFFFFF"
GRAY_TEXT = "5A4842"
LIGHT_ZEBRA = "FDFBF7"
BORDER_COLOR = "E5D9CE"

font_title = Font(name="Calibri", size=15, bold=True, color="FFFFFF")
font_subtitle = Font(name="Calibri", size=10, italic=True, color="FAF6F0")
font_header = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
font_body = Font(name="Calibri", size=10, color="140202")
font_body_bold = Font(name="Calibri", size=10, bold=True, color="140202")
font_pill_audit = Font(name="Calibri", size=10, bold=True, color="78350F") # warm amber
font_pill_quote = Font(name="Calibri", size=10, bold=True, color="520000") # burgundy

fill_header = PatternFill(start_color=BURGUNDY_DARK, end_color=BURGUNDY_DARK, fill_type="solid")
fill_sub_header = PatternFill(start_color="691010", end_color="691010", fill_type="solid")
fill_zebra = PatternFill(start_color=LIGHT_ZEBRA, end_color=LIGHT_ZEBRA, fill_type="solid")
fill_cream = PatternFill(start_color=CREAM_BG, end_color=CREAM_BG, fill_type="solid")

thin_border_side = Side(border_style="thin", color=BORDER_COLOR)
cell_border = Border(left=thin_border_side, right=thin_border_side, top=thin_border_side, bottom=thin_border_side)
header_border = Border(left=Side(style="thin", color="8B2525"), right=Side(style="thin", color="8B2525"),
                       top=Side(style="medium", color="520000"), bottom=Side(style="medium", color="520000"))

# Define Columns for Master Sheet
columns = [
    ("A", "Lead ID", 14, Alignment(horizontal="center")),
    ("B", "Date Submitted", 16, Alignment(horizontal="center")),
    ("C", "Form / Request Type", 24, Alignment(horizontal="center")),
    ("D", "SLA Target", 15, Alignment(horizontal="center")),
    ("E", "Client Name", 20, Alignment(horizontal="left")),
    ("F", "Email Address", 26, Alignment(horizontal="left")),
    ("G", "Brand Name", 20, Alignment(horizontal="left")),
    ("H", "Instagram Handle / Website", 26, Alignment(horizontal="left")),
    ("I", "Country", 16, Alignment(horizontal="center")),
    ("J", "Services Selected", 34, Alignment(horizontal="left")),
    ("K", "Monthly Budget Range", 24, Alignment(horizontal="left")),
    ("L", "Message / Current Bottleneck", 40, Alignment(horizontal="left")),
    ("M", "Pipeline Status", 18, Alignment(horizontal="center")),
    ("N", "Priority", 14, Alignment(horizontal="center")),
    ("O", "Assigned Lead", 16, Alignment(horizontal="center")),
    ("P", "Deliverable / Quote Link", 28, Alignment(horizontal="left")),
    ("Q", "Internal Notes & Follow-Up", 35, Alignment(horizontal="left")),
]

# Configure Validation & Settings Sheet
ws_dropdowns.views.sheetView[0].showGridLines = True
ws_dropdowns["A1"] = "Dropdown Lists & Lookup Values"
ws_dropdowns["A1"].font = Font(name="Calibri", size=13, bold=True, color=BURGUNDY_DARK)

settings_data = {
    "A": ("Form Types", ["Free Social Media Audit", "Get a Quote"]),
    "B": ("Monthly Budget Ranges", [
        "Under $1,000 / mo",
        "$1,000 - $2,500 / mo",
        "$2,500 - $5,000 / mo",
        "$5,000+ / mo",
        "Quoted in PKR (Pakistan local)"
    ]),
    "C": ("Services Options", [
        "Social media management",
        "Content & reels",
        "Paid ads",
        "Branding",
        "Personal branding",
        "PR",
        "Email marketing"
    ]),
    "D": ("Pipeline Statuses", [
        "New",
        "In Review",
        "Audit In Progress",
        "Audit Delivered",
        "Quote In Progress",
        "Quote Sent",
        "Call Booked",
        "Won - Client Signed",
        "Lost / Inactive"
    ]),
    "E": ("Priority Levels", ["High", "Medium", "Low"]),
    "F": ("Team Assignees", ["Esha (Founder)", "Marketing Lead", "Strategy Team", "Unassigned"])
}

for col, (title, vals) in settings_data.items():
    ws_dropdowns[f"{col}3"] = title
    ws_dropdowns[f"{col}3"].font = font_body_bold
    ws_dropdowns[f"{col}3"].fill = fill_cream
    for idx, v in enumerate(vals, start=4):
        ws_dropdowns[f"{col}{idx}"] = v
        ws_dropdowns[f"{col}{idx}"].font = font_body
    ws_dropdowns.column_dimensions[col].width = 25

# Format Master Sheet
def setup_sheet_headers(ws, title_text, subtitle_text):
    ws.views.sheetView[0].showGridLines = True
    
    # Title Block
    ws.merge_cells("A1:Q1")
    ws["A1"] = title_text
    ws["A1"].font = font_title
    ws["A1"].fill = fill_header
    ws["A1"].alignment = Alignment(horizontal="left", vertical="center", indent=1)
    
    ws.merge_cells("A2:Q2")
    ws["A2"] = subtitle_text
    ws["A2"].font = font_subtitle
    ws["A2"].fill = fill_sub_header
    ws["A2"].alignment = Alignment(horizontal="left", vertical="center", indent=1)
    
    ws.row_dimensions[1].height = 32
    ws.row_dimensions[2].height = 20
    ws.row_dimensions[3].height = 8 # Spacing
    ws.row_dimensions[4].height = 28 # Table Header
    
    for col_letter, header_name, width, align in columns:
        cell = ws[f"{col_letter}4"]
        cell.value = header_name
        cell.font = font_header
        cell.fill = fill_header
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = header_border
        ws.column_dimensions[col_letter].width = width

setup_sheet_headers(
    ws_master,
    "AXOYL DIGITAL — CLIENT INQUIRIES & AUDIT MASTER TRACKER",
    "Unified database storing submissions from both 'Free Social Media Audit' and 'Get a Quote' forms."
)

setup_sheet_headers(
    ws_audits,
    "AXOYL DIGITAL — FREE SOCIAL MEDIA AUDITS (48-HOUR SLA)",
    "Submissions requesting a 48-hour social media teardown and review."
)

setup_sheet_headers(
    ws_quotes,
    "AXOYL DIGITAL — CUSTOM QUOTE & PROPOSAL REQUESTS (24-HOUR SLA)",
    "Submissions requesting bespoke service scope and pricing quotes."
)

# Sample Rows
sample_data = [
    (
        "AUD-2026-001",
        "2026-11-20 14:32",
        "Free Social Media Audit",
        "48 Hours",
        "Sarah Jenkins",
        "sarah@skinsation.com",
        "Skinsation",
        "@skinsation",
        "USA",
        "Social media management, Content & reels",
        "$1,000 - $2,500 / mo",
        "Struggling with organic engagement on reels and low retention on TikTok.",
        "Audit In Progress",
        "High",
        "Esha (Founder)",
        "https://notion.so/axoyl/skinsation-audit",
        "Instagram review done; reels hook optimization draft ready for review."
    ),
    (
        "QTE-2026-002",
        "2026-11-21 09:15",
        "Get a Quote",
        "24 Hours",
        "Marcus Vance",
        "marcus@elevatewear.co",
        "Elevate Activewear",
        "elevatewear.co",
        "UK",
        "Paid ads, Branding, Email marketing",
        "$2,500 - $5,000 / mo",
        "Need full funnel revamp: Meta ads scaling + Klaviyo flow setup.",
        "Quote Sent",
        "High",
        "Esha (Founder)",
        "https://drive.google.com/axoyl/proposals/elevatewear",
        "Custom proposal sent via email and WhatsApp. Follow up on Monday."
    ),
    (
        "AUD-2026-003",
        "2026-11-22 18:40",
        "Free Social Media Audit",
        "48 Hours",
        "Amira Al-Mansoor",
        "amira@pureglow.ae",
        "PureGlow Organic Skincare",
        "@pureglow_dxb",
        "UAE",
        "Social media management, Branding, PR",
        "$5,000+ / mo",
        "Launching our luxury line in Dubai mall; need audit of current feed & influencer strategy.",
        "New",
        "High",
        "Esha (Founder)",
        "",
        "New lead submitted via mobile popup. SLA deadline within 48h."
    ),
    (
        "QTE-2026-004",
        "2026-11-22 21:05",
        "Get a Quote",
        "24 Hours",
        "Zainab Khan",
        "zainab@organictreats.pk",
        "Organic Treats PK",
        "@organictreats.pk",
        "Pakistan",
        "Content & reels, Social media management",
        "Quoted in PKR (Pakistan local)",
        "Want high-retention recipe videos and daily story management.",
        "New",
        "Medium",
        "Marketing Lead",
        "",
        "Direct inquiry for local PK packages. Quote to be prepared."
    ),
]

def populate_sheet(ws, data_rows):
    for r_idx, row in enumerate(data_rows, start=5):
        ws.row_dimensions[r_idx].height = 24
        is_zebra = (r_idx % 2 == 0)
        current_fill = fill_zebra if is_zebra else None
        
        for c_idx, val in enumerate(row):
            col_letter = columns[c_idx][0]
            align = columns[c_idx][3]
            cell = ws[f"{col_letter}{r_idx}"]
            cell.value = val
            cell.font = font_body
            cell.alignment = align
            cell.border = cell_border
            if current_fill:
                cell.fill = current_fill
                
            # Highlight status column gently
            if col_letter == "M":
                if val == "New":
                    cell.fill = PatternFill(start_color="FEF3C7", end_color="FEF3C7", fill_type="solid") # soft amber
                elif val in ["Audit Delivered", "Quote Sent"]:
                    cell.fill = PatternFill(start_color="DCFCE7", end_color="DCFCE7", fill_type="solid") # soft green
                elif val == "Audit In Progress":
                    cell.fill = PatternFill(start_color="E0F2FE", end_color="E0F2FE", fill_type="solid") # soft blue

populate_sheet(ws_master, sample_data)
populate_sheet(ws_audits, [r for r in sample_data if "Audit" in r[2]])
populate_sheet(ws_quotes, [r for r in sample_data if "Quote" in r[2]])

# Add Data Validation for Dropdowns on Master Sheet
dv_form_type = DataValidation(type="list", formula1="'Validation & Settings'!$A$4:$A$5", allow_blank=True)
dv_budget = DataValidation(type="list", formula1="'Validation & Settings'!$B$4:$B$8", allow_blank=True)
dv_status = DataValidation(type="list", formula1="'Validation & Settings'!$D$4:$D$12", allow_blank=True)
dv_priority = DataValidation(type="list", formula1="'Validation & Settings'!$E$4:$E$6", allow_blank=True)
dv_assignee = DataValidation(type="list", formula1="'Validation & Settings'!$F$4:$F$7", allow_blank=True)

for sheet in [ws_master, ws_audits, ws_quotes]:
    sheet.add_data_validation(dv_form_type)
    sheet.add_data_validation(dv_budget)
    sheet.add_data_validation(dv_status)
    sheet.add_data_validation(dv_priority)
    sheet.add_data_validation(dv_assignee)

    dv_form_type.add(f"C5:C500")
    dv_budget.add(f"K5:K500")
    dv_status.add(f"M5:M500")
    dv_priority.add(f"N5:N500")
    dv_assignee.add(f"O5:O500")

    # Freeze header rows
    sheet.freeze_panes = "A5"

# Save Excel
out_dir = "/home/zohaahassan/Desktop/Work/Axoyl/data"
os.makedirs(out_dir, exist_ok=True)
xlsx_path = os.path.join(out_dir, "Axoyl_Forms_Master_Spreadsheet.xlsx")
wb.save(xlsx_path)
print(f"Generated Excel at: {xlsx_path}")

# Also generate a clean CSV version for direct Google Sheets / CRM import
csv_path = os.path.join(out_dir, "Axoyl_Forms_Master_Spreadsheet.csv")
import csv
with open(csv_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    # Header
    writer.writerow([col[1] for col in columns])
    for r in sample_data:
        writer.writerow(r)
print(f"Generated CSV at: {csv_path}")
