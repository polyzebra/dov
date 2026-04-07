import { NextResponse } from "next/server";
import nodemailer, { type SendMailOptions } from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  company?: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  "name",
  "email",
  "phone",
  "service",
  "message",
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

const BUSINESS_EMAIL = "dovdrone@gmail.com";
const BUSINESS_PHONE_DISPLAY = "086 867 2333";
const BUSINESS_PHONE_TEL = "+353868672333";
const BUSINESS_WHATSAPP = "https://wa.me/353868672333";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatServiceLabel = (service: string) => {
  const normalized = service.trim();
  if (!normalized) return "General enquiry";

  return normalized
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

const getSiteUrl = () => {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    "https://dov.ie";

  return raw.replace(/\/+$/, "");
};

const getLogoUrl = () => `${getSiteUrl()}/logo.png`;

const getSafePayload = (payload: Partial<ContactPayload>): ContactPayload => ({
  name: String(payload.name ?? "").trim(),
  email: String(payload.email ?? "").trim(),
  phone: String(payload.phone ?? "").trim(),
  service: String(payload.service ?? "").trim(),
  message: String(payload.message ?? "").trim(),
});

const buildEmailShell = (content: string) => `
  <div style="margin:0;padding:6px;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
    <div style="width:100%;max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;">
      ${content}
    </div>
  </div>
`;

const buildBrandHeader = ({
  title,
  subtitle,
  showLogo = true,
}: {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
}) => `
  <div style="padding:14px 12px;background:#f8fbff;border-bottom:1px solid #e2e8f0;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
      <tr>
        ${
          showLogo
            ? `
        <td style="width:90px;vertical-align:middle;padding:0 14px 0 0;">
          <img
            src="${getLogoUrl()}"
            alt="DOV Drone"
            width="70"
            height="70"
            style="display:block;width:70px;height:70px;object-fit:contain;border:0;"
          />
        </td>
        `
            : ""
        }
        <td style="vertical-align:middle;">
          <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#2563eb;font-weight:700;margin-bottom:6px;">
            DOV Drone
          </div>

          <h1 style="margin:0;font-size:24px;line-height:1.2;letter-spacing:-0.02em;color:#0f172a;font-weight:700;">
            ${title}
          </h1>

          ${
            subtitle
              ? `<p style="margin:6px 0 0;font-size:14px;line-height:1.6;color:#475569;">
                   ${subtitle}
                 </p>`
              : ""
          }
        </td>
      </tr>
    </table>
  </div>
`;

const buildSectionLabel = (label: string) => `
  <div style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#334155;">
    ${label}
  </div>
`;

const buildInfoTable = (payload: ContactPayload) => {
  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const phone = escapeHtml(payload.phone);

  return `
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr>
        <td style="padding:10px 0;width:96px;font-weight:700;color:#0f172a;border-bottom:1px solid #e2e8f0;vertical-align:top;">Name</td>
        <td style="padding:10px 0;color:#475569;border-bottom:1px solid #e2e8f0;">${name}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;font-weight:700;color:#0f172a;border-bottom:1px solid #e2e8f0;vertical-align:top;">Email</td>
        <td style="padding:10px 0;color:#475569;border-bottom:1px solid #e2e8f0;">
          <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0;font-weight:700;color:#0f172a;vertical-align:top;">Phone</td>
        <td style="padding:10px 0;color:#475569;">
          <a href="tel:${escapeHtml(payload.phone)}" style="color:#2563eb;text-decoration:none;">${phone}</a>
        </td>
      </tr>
    </table>
  `;
};

const buildMessageCard = (message: string) => {
  const safeMessage = message.trim();

  if (!safeMessage) return "";

  return `
    <div style="margin-top:10px;padding:14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">
      ${buildSectionLabel("Message")}
      <div style="margin:0;font-size:14px;line-height:1.7;color:#475569;">
        ${escapeHtml(safeMessage).replace(/\n/g, "<br />")}
      </div>
    </div>
  `;
};

const buildContactCard = () => `
  <div style="margin-top:12px;padding:14px;background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;">
    ${buildSectionLabel("Contact")}
    <div style="font-size:14px;line-height:1.85;color:#475569;">
      <div>
        Email:
        <a href="mailto:${BUSINESS_EMAIL}" style="color:#2563eb;text-decoration:none;">${BUSINESS_EMAIL}</a>
      </div>
      <div>
        Phone:
        <a href="tel:${BUSINESS_PHONE_TEL}" style="color:#2563eb;text-decoration:none;">${BUSINESS_PHONE_DISPLAY}</a>
      </div>
      <div>
        WhatsApp:
        <a href="${BUSINESS_WHATSAPP}" style="color:#2563eb;text-decoration:none;">${BUSINESS_PHONE_DISPLAY}</a>
      </div>
    </div>
  </div>
`;

const buildFooter = () => {
  const siteUrl = getSiteUrl();

  return `
    <div style="padding:14px 12px;border-top:1px solid #e2e8f0;background:#fafcff;">
      <div style="font-size:13px;font-weight:700;color:#0f172a;">DOV Drone</div>
      <div style="margin-top:6px;font-size:12px;line-height:1.7;color:#64748b;">
        Aerial visuals, inspections, and drone media<br />
        <a href="${siteUrl}" style="color:#2563eb;text-decoration:none;">${siteUrl}</a><br />
        <a href="mailto:${BUSINESS_EMAIL}" style="color:#2563eb;text-decoration:none;">${BUSINESS_EMAIL}</a><br />
        Phone / WhatsApp:
        <a href="tel:${BUSINESS_PHONE_TEL}" style="color:#2563eb;text-decoration:none;">${BUSINESS_PHONE_DISPLAY}</a>
      </div>
    </div>
  `;
};

const buildAdminEmail = (payload: ContactPayload) => {
  const siteUrl = getSiteUrl();
  const messageText = payload.message.trim()
    ? `Message: ${payload.message}`
    : "Message: Not provided";

  const messageCard = buildMessageCard(payload.message);

  return {
    text: `New enquiry from the DOV Drone website

Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}
Service: ${formatServiceLabel(payload.service)}
${messageText}

Business email: ${BUSINESS_EMAIL}
Phone / WhatsApp: ${BUSINESS_PHONE_DISPLAY}

Sent via ${siteUrl}`,
    html: buildEmailShell(`
      ${buildBrandHeader({
        title: "New enquiry received",
        subtitle: "A new enquiry was submitted on the DOV Drone website.",
      })}

      <div style="padding:12px;">
        <div style="margin-top:0;padding:14px;background:#f8fbff;border:1px solid #dbeafe;border-radius:10px;">
          ${buildSectionLabel("Requested service")}
          <div style="margin-top:4px;font-size:18px;line-height:1.35;color:#0f172a;font-weight:700;">
            ${escapeHtml(formatServiceLabel(payload.service))}
          </div>
        </div>

        <div style="margin-top:12px;">
          ${buildSectionLabel("Customer details")}
          <div style="padding:14px;background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;">
            ${buildInfoTable(payload)}
            ${messageCard}
          </div>
        </div>

        ${buildContactCard()}
      </div>

      <div style="padding:12px;border-top:1px solid #e2e8f0;background:#fafcff;font-size:12px;color:#64748b;">
        Sent via
        <a href="${siteUrl}" style="color:#2563eb;text-decoration:none;">DOV Drone website</a>
      </div>
    `),
  };
};

const buildAutoReplyEmail = (payload: ContactPayload) => {
  const siteUrl = getSiteUrl();
  const safeName = escapeHtml(payload.name);
  const serviceLabel = escapeHtml(formatServiceLabel(payload.service));
  const messageCard = buildMessageCard(payload.message);
  const textMessageBlock = payload.message.trim()
    ? `Message: ${payload.message}\n`
    : "";

  return {
    text: `Hi ${payload.name},

We’ve received your enquiry and will get back to you within 1 business day.

Requested service:
${formatServiceLabel(payload.service)}

Your details:
Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}
${textMessageBlock}
If your request is urgent, call, email, or message us on WhatsApp below.

Contact:
Email: ${BUSINESS_EMAIL}
Phone: ${BUSINESS_PHONE_DISPLAY}
WhatsApp: ${BUSINESS_PHONE_DISPLAY}

DOV Drone
${siteUrl}`,
    html: buildEmailShell(`
      ${buildBrandHeader({
        title: "We received your enquiry",
      })}

      <div style="padding:12px;">
        <p style="margin:0 0 12px;font-size:14px;line-height:1.7;color:#334155;">
          Hi ${safeName},
        </p>

        <p style="margin:0 0 14px;font-size:14px;line-height:1.8;color:#475569;">
          We’ve received your enquiry and will get back to you within
          <strong style="color:#0f172a;">1 business day</strong>.
        </p>

        <div style="margin-top:0;padding:14px;background:#f8fbff;border:1px solid #dbeafe;border-radius:10px;">
          ${buildSectionLabel("Requested service")}
          <div style="margin-top:4px;font-size:18px;line-height:1.35;color:#0f172a;font-weight:700;">
            ${serviceLabel}
          </div>
        </div>

        <div style="margin-top:12px;">
          ${buildSectionLabel("Your details")}
          <div style="padding:14px;background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;">
            ${buildInfoTable(payload)}
            ${messageCard}
          </div>
        </div>

        <div style="margin-top:12px;">
          ${buildSectionLabel("Next step")}
          <p style="margin:0;font-size:14px;line-height:1.75;color:#475569;">
            If your request is urgent, call, email, or message us on WhatsApp below.
          </p>
        </div>

        ${buildContactCard()}

        <div style="margin-top:14px;">
          <a
            href="${siteUrl}"
            style="display:inline-block;padding:11px 16px;border-radius:10px;background:linear-gradient(135deg,#38bdf8 0%,#4f46e5 100%);color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;"
          >
            Visit DOV Drone
          </a>
        </div>
      </div>

      ${buildFooter()}
    `),
  };
};

const createTransporter = () => {
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();

  if (!smtpUser || !smtpPass) {
    throw new Error("Missing SMTP configuration.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
};

const getBaseMailOptions = () => {
  const smtpUser = process.env.SMTP_USER?.trim();

  if (!smtpUser) {
    throw new Error("Missing SMTP user.");
  }

  return {
    from: `"DOV Drone" <${smtpUser}>`,
  };
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<ContactPayload>;

    if (payload.company) {
      return NextResponse.json({ success: true });
    }

    const missing = requiredFields.filter((field) => {
      const value = payload[field];
      return typeof value !== "string" || !value.trim();
    });

    if (missing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields: ${missing.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const contactTo = process.env.CONTACT_TO_EMAIL?.trim();

    if (!contactTo) {
      return NextResponse.json(
        { success: false, error: "Missing email configuration." },
        { status: 500 }
      );
    }

    const contactPayload = getSafePayload(payload);

    if (!emailRegex.test(contactPayload.email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const transporter = createTransporter();
    const baseMailOptions = getBaseMailOptions();

    const adminContent = buildAdminEmail(contactPayload);
    const adminSubject = `New enquiry: ${formatServiceLabel(
      contactPayload.service
    )} – ${contactPayload.name || "Website form"}`;

    const adminMail: SendMailOptions = {
      ...baseMailOptions,
      to: contactTo,
      replyTo: contactPayload.email,
      subject: adminSubject,
      text: adminContent.text,
      html: adminContent.html,
    };

    await transporter.sendMail(adminMail);

    try {
      const autoReply = buildAutoReplyEmail(contactPayload);

      const autoReplyMail: SendMailOptions = {
        ...baseMailOptions,
        to: contactPayload.email,
        subject: "We received your enquiry – DOV Drone",
        text: autoReply.text,
        html: autoReply.html,
      };

      await transporter.sendMail(autoReplyMail);
    } catch (autoReplyError) {
      console.error(
        "Auto-reply exception for:",
        contactPayload.email,
        autoReplyError
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("POST /api/contact fatal error:", error);

    return NextResponse.json(
      { success: false, error: "Unable to send email. Please try again." },
      { status: 500 }
    );
  }
}