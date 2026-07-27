import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// nodemailer needs the Node.js runtime (not Edge).
export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  organization?: string;
  email?: string;
  phone?: string;
  services?: string[];
  subServices?: string[];
  subject?: string;
  message?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:6px 12px;vertical-align:top;color:#666;font-weight:600;white-space:nowrap;">${label}</td>
    <td style="padding:6px 12px;vertical-align:top;color:#111;">${value || "—"}</td>
  </tr>`;
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
  const subServices = Array.isArray(body.subServices) ? body.subServices : [];
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

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

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO || user;

  if (!user || !pass) {
    console.error("Contact form: missing GMAIL_USER / GMAIL_APP_PASSWORD env.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#111;">New enquiry from the Orglife website</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        ${row("Name", escapeHtml(name))}
        ${row("Organization", escapeHtml(organization))}
        ${row("Email", escapeHtml(email))}
        ${row("Phone", escapeHtml(phone))}
        ${row("Services", escapeHtml(services.join(", ")))}
        ${row("Sub-services", escapeHtml(subServices.join(", ")))}
        ${row("Subject", escapeHtml(subject))}
        ${row("Message", escapeHtml(message).replace(/\n/g, "<br/>"))}
      </table>
    </div>`;

  const text = [
    "New enquiry from the Orglife website",
    "",
    `Name: ${name}`,
    `Organization: ${organization || "—"}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Services: ${services.join(", ") || "—"}`,
    `Sub-services: ${subServices.join(", ") || "—"}`,
    `Subject: ${subject || "—"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"Orglife Website" <${user}>`,
      to,
      replyTo: email,
      subject: subject
        ? `New enquiry: ${subject}`
        : `New enquiry from ${name}`,
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
