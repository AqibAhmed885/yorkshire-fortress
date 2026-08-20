import { NextResponse } from "next/server";
import { Resend } from "resend";
import { services } from "../../data";

const allowedServices = new Set([
  ...services.map((service) => service.title),
  "Multiple services",
  "Not sure yet",
]);

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  organisation?: unknown;
  service?: unknown;
  location?: unknown;
  message?: unknown;
  website?: unknown;
};

function clean(value: unknown, maximumLength: number) {
  return String(value ?? "")
    .trim()
    .slice(0, maximumLength);
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

function response(message: string, status = 200) {
  return NextResponse.json(
    { message },
    {
      status,
      headers: { "Cache-Control": "no-store" },
    },
  );
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return response("This enquiry could not be submitted.", 403);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return response("The enquiry is too large to submit.", 413);
  }

  let body: ContactRequest;
  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return response("Please check the form details and try again.", 400);
  }

  const website = clean(body.website, 250);
  if (website) {
    return response("Thank you. Your enquiry has been received.");
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 50);
  const organisation = clean(body.organisation, 150);
  const service = clean(body.service, 100);
  const location = clean(body.location, 150);
  const message = clean(body.message, 5_000);

  if (!name || !email || !service || !message) {
    return response("Please complete all required fields.", 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return response("Please enter a valid email address.", 400);
  }

  if (!allowedServices.has(service)) {
    return response("Please select a valid security service.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Contact email environment variables are not configured.");
    return response(
      "Email delivery is temporarily unavailable. Please call our team instead.",
      503,
    );
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Organisation", organisation || "Not provided"],
    ["Service", service],
    ["Site location", location || "Not provided"],
  ];
  const text = [
    "New website security enquiry",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Requirements:",
    message,
  ].join("\n");
  const detailRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <th style="padding:10px 14px;text-align:left;vertical-align:top;background:#f3f0e9;color:#10243c;width:150px">${escapeHtml(label)}</th>
          <td style="padding:10px 14px;color:#273442">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");
  const html = `
    <div style="margin:0;padding:28px;background:#f3f0e9;font-family:Arial,sans-serif;color:#273442">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border-top:6px solid #d8b36a">
        <div style="padding:28px;background:#10243c;color:#ffffff">
          <p style="margin:0 0 8px;color:#d8b36a;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase">Yorkshire Fortress Security</p>
          <h1 style="margin:0;font-size:28px;line-height:1.2">New website enquiry</h1>
        </div>
        <div style="padding:28px">
          <table style="width:100%;border-collapse:collapse;font-size:15px" role="presentation">
            ${detailRows}
          </table>
          <div style="margin-top:24px;padding:20px;border-left:4px solid #d8b36a;background:#f8f7f3">
            <h2 style="margin:0 0 10px;color:#10243c;font-size:18px">Requirements</h2>
            <p style="margin:0;white-space:pre-wrap;line-height:1.65">${escapeHtml(message)}</p>
          </div>
          <p style="margin:24px 0 0;font-size:13px;color:#66717c">Reply to this email to respond directly to ${escapeHtml(name)}.</p>
        </div>
      </div>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New website enquiry — ${service}`,
      text,
      html,
      tags: [{ name: "source", value: "website-contact" }],
    });

    if (error) {
      console.error("Resend rejected a contact email:", error.name);
      return response("We could not send your enquiry. Please try again or call our team.", 502);
    }

    return response("Thank you. Your enquiry has been sent to our security team.");
  } catch (error) {
    console.error(
      "Contact email delivery failed:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return response("We could not send your enquiry. Please try again or call our team.", 502);
  }
}
