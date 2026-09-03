import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { absoluteUrl, SITE } from "@/constants/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  organization?: string;
  email?: string;
  phone?: string;
  services?: string[];
  subject?: string;
  message?: string;
};

const BRAND = {
  bg: "#0a0a0a",
  surface: "#141414",
  border: "#2a2a2a",
  text: "#fafafa",
  muted: "#8f8f8f",
  accent: "#F46F0C",
  heading: "'Clash Display','Space Grotesk',Helvetica,Arial,sans-serif",
  body: "'Space Grotesk',Helvetica,Arial,sans-serif",
} as const;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string, accent = false): string {
  return `<tr>
    <td style="padding:10px 0;vertical-align:top;width:150px;font-family:${BRAND.body};font-size:12px;line-height:18px;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.muted};white-space:nowrap;">${label}</td>
    <td style="padding:10px 0;vertical-align:top;font-family:${BRAND.body};font-size:15px;line-height:24px;color:${accent ? BRAND.accent : BRAND.text};">${value || "—"}</td>
  </tr>`;
}

/** Section heading — uppercase, tight, with the brand's orange full stop. */
function sectionTitle(label: string): string {
  return `<tr><td style="padding:32px 0 4px;font-family:${BRAND.heading};font-size:13px;line-height:20px;letter-spacing:0.16em;text-transform:uppercase;font-weight:700;color:${BRAND.text};">${label}<span style="color:${BRAND.accent};">.</span></td></tr>
  <tr><td style="padding:0 0 4px;"><div style="height:1px;background:${BRAND.border};line-height:1px;font-size:0;">&nbsp;</div></td></tr>`;
}

/** Readable client + OS out of a raw user-agent string. */
function describeClient(ua: string): string {
  if (!ua) return "";
  const browser = /Edg\//.test(ua)
    ? "Edge"
    : /OPR\/|Opera/.test(ua)
      ? "Opera"
      : /Chrome\//.test(ua)
        ? "Chrome"
        : /Safari\//.test(ua)
          ? "Safari"
          : /Firefox\//.test(ua)
            ? "Firefox"
            : "";
  const os = /iPhone|iPad|iPod/.test(ua)
    ? "iOS"
    : /Android/.test(ua)
      ? "Android"
      : /Mac OS X/.test(ua)
        ? "macOS"
        : /Windows/.test(ua)
          ? "Windows"
          : /Linux/.test(ua)
            ? "Linux"
            : "";
  return [browser, os].filter(Boolean).join(" on ") || "";
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const organization = body.organization?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const services = Array.isArray(body.services) ? body.services : [];
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  // Metadata about the submission itself — who sent it, from where, and when.
  const headers = request.headers;
  const ip =
    headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    headers.get("x-real-ip") ||
    "";
  const userAgent = headers.get("user-agent") ?? "";
  const client = describeClient(userAgent);
  const referer = headers.get("referer") ?? "";
  const language = headers.get("accept-language")?.split(",")[0] ?? "";
  const country = headers.get("x-vercel-ip-country") ?? "";
  const city = headers.get("x-vercel-ip-city") ?? "";
  const location = [city && decodeURIComponent(city), country]
    .filter(Boolean)
    .join(", ");
  const receivedAt = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

  // Validation
  if (!name || !email || !message || services.length === 0) {
    return NextResponse.json(
      {
        error:
          "Please fill in your name, email, message and select at least one service.",
      },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const user = process.env.SMTP_USER ?? process.env.GMAIL_USER;
  const pass = process.env.SMTP_PASSWORD ?? process.env.GMAIL_APP_PASSWORD;
  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  const from = process.env.CONTACT_FROM || user;
  const to = process.env.CONTACT_TO || user;

  if (!user || !pass) {
    console.error(
      "Contact form: missing SMTP_USER / SMTP_PASSWORD (or GMAIL_USER / GMAIL_APP_PASSWORD) env.",
    );
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  if (!Number.isFinite(port) || port <= 0) {
    console.error(
      `Contact form: invalid SMTP_PORT "${process.env.SMTP_PORT}".`,
    );
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const heading = subject || `New enquiry from ${name}`;

  const html = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<meta name="color-scheme" content="dark"/>
<meta name="supported-color-schemes" content="dark"/>
<title>${escapeHtml(heading)}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.bg};">
<!-- Preheader: the grey line clients show beside the subject in the list. -->
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(name)}${organization ? ` · ${escapeHtml(organization)}` : ""} — ${escapeHtml(services.join(", ") || "enquiry")}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BRAND.bg};padding:32px 16px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:${BRAND.surface};border:1px solid ${BRAND.border};">

  <tr><td style="padding:28px 32px 0;">
    <div style="font-family:${BRAND.body};font-size:12px;line-height:18px;letter-spacing:0.16em;text-transform:uppercase;color:${BRAND.accent};">New website enquiry</div>
    <div style="padding-top:10px;font-family:${BRAND.heading};font-size:30px;line-height:34px;font-weight:700;text-transform:uppercase;letter-spacing:-0.01em;color:${BRAND.text};">${escapeHtml(heading)}<span style="color:${BRAND.accent};">.</span></div>
  </td></tr>

  <tr><td style="padding:0 32px 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      ${sectionTitle("Contact")}
      <tr><td colspan="2"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ${row("Name", escapeHtml(name))}
        ${row("Organization", escapeHtml(organization))}
        ${row("Email", `<a href="mailto:${escapeHtml(email)}" style="color:${BRAND.accent};text-decoration:none;">${escapeHtml(email)}</a>`)}
        ${row("Phone", phone ? `<a href="tel:${escapeHtml(phone.replace(/\s+/g, ""))}" style="color:${BRAND.text};text-decoration:none;">${escapeHtml(phone)}</a>` : "")}
      </table></td></tr>

      ${sectionTitle("Interested in")}
      <tr><td colspan="2" style="padding:14px 0 0;">
        ${services.map((service) => `<span style="display:inline-block;margin:0 6px 6px 0;padding:6px 14px;border:1px solid ${BRAND.border};border-radius:999px;font-family:${BRAND.body};font-size:13px;line-height:18px;color:${BRAND.text};">${escapeHtml(service)}</span>`).join("") || `<span style="font-family:${BRAND.body};font-size:15px;color:${BRAND.muted};">—</span>`}
      </td></tr>

      ${sectionTitle("Message")}
      <tr><td colspan="2" style="padding:14px 0 0;font-family:${BRAND.body};font-size:15px;line-height:26px;color:${BRAND.text};">${escapeHtml(message).replace(/\n/g, "<br/>")}</td></tr>

      ${sectionTitle("Submission details")}
      <tr><td colspan="2"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ${row("Received", escapeHtml(receivedAt))}
        ${row("Location", escapeHtml(location))}
        ${row("IP address", escapeHtml(ip))}
        ${row("Device", escapeHtml(client))}
        ${row("Language", escapeHtml(language))}
        ${row("Submitted from", referer ? `<a href="${escapeHtml(referer)}" style="color:${BRAND.text};text-decoration:none;">${escapeHtml(referer)}</a>` : "")}
      </table></td></tr>
    </table>
  </td></tr>

  <!-- Reply CTA -->
  <tr><td style="padding:0 32px 36px;">
    <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent(`Re: ${heading}`)}" style="display:inline-block;padding:13px 28px;border-radius:999px;background:${BRAND.text};color:${BRAND.bg};font-family:${BRAND.body};font-size:14px;font-weight:600;text-decoration:none;">Reply to ${escapeHtml(name.split(" ")[0] || name)}</a>
  </td></tr>

  <tr><td style="padding:20px 32px 28px;border-top:1px solid ${BRAND.border};font-family:${BRAND.body};font-size:12px;line-height:20px;color:${BRAND.muted};">
    Sent automatically from the contact form at
    <a href="${SITE.url}" style="color:${BRAND.muted};">${SITE.url.replace(/^https?:\/\//, "")}</a>.
    Replying to this email goes straight to ${escapeHtml(name)}.
  </td></tr>
</table>
</td></tr>
</table>
</body></html>`;

  const text = [
    `NEW WEBSITE ENQUIRY — ${heading}`,
    "",
    "CONTACT",
    `Name: ${name}`,
    `Organization: ${organization || "—"}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    "",
    "INTERESTED IN",
    services.join(", ") || "—",
    "",
    "MESSAGE",
    message,
    "",
    "SUBMISSION DETAILS",
    `Received: ${receivedAt}`,
    `Location: ${location || "—"}`,
    `IP address: ${ip || "—"}`,
    `Device: ${client || "—"}`,
    `Language: ${language || "—"}`,
    `Submitted from: ${referer || "—"}`,
    "",
    `Sent automatically from the contact form at ${SITE.url}.`,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"Orglife Website" <${from}>`,
      to,
      replyTo: email,
      subject: subject ? `New enquiry: ${subject}` : `New enquiry from ${name}`,
      html,
      text,
    });
  } catch (err) {
    console.error("Contact form: failed to send email.", err);
    return NextResponse.json(
      { error: "Something went wrong while sending. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
