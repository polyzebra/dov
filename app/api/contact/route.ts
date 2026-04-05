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
const BUSINESS_PHONE_DISPLAY = "0868672333";
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
  <div style="margin:0;padding:2px;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
    <div style="width:100%;max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
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
  <div style="padding:8px 10px;background:#fcfdff;border-bottom:1px solid #e2e8f0;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
      <tr>
        ${
          showLogo
            ? `
        <td style="width:42px;vertical-align:top;padding:0 6px 0 0;">
          <img
            src="${getLogoUrl()}"
            alt="DOV Drone"
            width="34"
            height="34"
            style="display:block;width:34px;height:34px;object-fit:contain;border:0;"
          />
        </td>
        `
            : ""
        }
        <td style="vertical-align:top;">
          <div style="font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#2563eb;font-weight:700;margin-bottom:3px;">
            DOV Drone
          </div>

          <h1 style="margin:0;font-size:18px;line-height:1.05;letter-spacing:-0.03em;color:#0f172a;font-weight:700;">
            ${title}
          </h1>

          ${
            subtitle
              ? `<p style="margin:4px 0 0;font-size:12px;line-height:1.45;color:#475569;">
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
  <div style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#334155;">
    ${label}
  </div>
`;

const buildInfoTable = (payload: ContactPayload) => {
  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const phone = escapeHtml(payload.phone);
  const service = escapeHtml(formatServiceLabel(payload.service));

  return `
    <table style="width:100%;border-collapse:collapse;font-size:13px;">
      <tr>
        <td style="padding:7px 0;width:82px;font-weight:700;color:#0f172a;border-bottom:1px solid #e2e8f0;vertical-align:top;">Name</td>
        <td style="padding:7px 0;color:#475569;border-bottom:1px solid #e2e8f0;">${name}</td>
      </tr>
      <tr>
        <td style="padding:7px 0;font-weight:700;color:#0f172a;border-bottom:1px solid #e2e8f0;vertical-align:top;">Email</td>
        <td style="padding:7px 0;color:#475569;border-bottom:1px solid #e2e8f0;">
          <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:7px 0;font-weight:700;color:#0f172a;border-bottom:1px solid #e2e8f0;vertical-align:top;">Phone</td>
        <td style="padding:7px 0;color:#475569;border-bottom:1px solid #e2e8f0;">
          <a href="tel:${escapeHtml(payload.phone)}" style="color:#2563eb;text-decoration:none;">${phone}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:7px 0;font-weight:700;color:#0f172a;vertical-align:top;">Service</td>
        <td style="padding:7px 0;color:#475569;">${service}</td>
      </tr>
    </table>
  `;
};

const buildMessageCard = (message: string) => `
  <div style="margin-top:6px;padding:6px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:7px;">
    ${buildSectionLabel("Message")}
    <div style="margin:0;font-size:13px;line-height:1.6;color:#475569;">
      ${escapeHtml(message).replace(/\n/g, "<br />")}
    </div>
  </div>
`;

const buildContactCard = () => `
  <div style="margin-top:6px;padding:6px;background:#ffffff;border:1px solid #e2e8f0;border-radius:7px;">
    ${buildSectionLabel("Contact")}

    <div style="font-size:13px;line-height:1.65;color:#475569;">
      <div>
        Email:
        <a href="mailto:${BUSINESS_EMAIL}" style="color:#2563eb;text-decoration:none;">${BUSINESS_EMAIL}</a>
      </div>
      <div>
        Tel:
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
    <div style="padding:6px 8px 8px;border-top:1px solid #e2e8f0;background:#fafcff;">
      <div style="font-size:12px;font-weight:700;color:#0f172a;">DOV Drone</div>
      <div style="margin-top:4px;font-size:11px;line-height:1.55;color:#64748b;">
        Aerial visuals, inspections, and drone media<br />
        <a href="${siteUrl}" style="color:#2563eb;text-decoration:none;">${siteUrl}</a><br />
        <a href="mailto:${BUSINESS_EMAIL}" style="color:#2563eb;text-decoration:none;">${BUSINESS_EMAIL}</a><br />
        Tel / WhatsApp:
        <a href="tel:${BUSINESS_PHONE_TEL}" style="color:#2563eb;text-decoration:none;">${BUSINESS_PHONE_DISPLAY}</a>
      </div>
    </div>
  `;
};

const buildAdminEmail = (payload: ContactPayload) => {
  const siteUrl = getSiteUrl();

  return {
    text: `New quote request from the DOV Drone website

Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}
Service: ${formatServiceLabel(payload.service)}
Message: ${payload.message}

Business email: ${BUSINESS_EMAIL}
Phone / WhatsApp: ${BUSINESS_PHONE_DISPLAY}

Sent via ${siteUrl}`,
    html: buildEmailShell(`
      ${buildBrandHeader({
        title: "New quote request",
        subtitle: "A new request was submitted on the DOV Drone website.",
      })}

      <div style="padding:6px;">
        ${buildInfoTable(payload)}
        ${buildMessageCard(payload.message)}
        ${buildContactCard()}
      </div>

      <div style="padding:6px 8px;border-top:1px solid #e2e8f0;background:#fafcff;font-size:11px;color:#64748b;">
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

  return {
    text: `Hi ${payload.name},

Thanks for reaching out to DOV Drone.

We've received your request and will respond within 1 business day with next steps and a tailored plan.

Your submitted details:
Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}
Service: ${formatServiceLabel(payload.service)}
Message: ${payload.message}

Contact:
Email: ${BUSINESS_EMAIL}
Phone / WhatsApp: ${BUSINESS_PHONE_DISPLAY}

DOV Drone
${siteUrl}`,
    html: buildEmailShell(`
      ${buildBrandHeader({
        title: "Thanks for your request",
      })}

      <div style="padding:6px;">
        <p style="margin:0 0 8px;font-size:14px;line-height:1.55;color:#334155;">
          Hi ${safeName},
        </p>

        <p style="margin:0 0 8px;font-size:14px;line-height:1.65;color:#475569;">
          We’ve received your request and will respond within
          <strong style="color:#0f172a;">1 business day</strong>
          with next steps and a tailored plan.
        </p>

        <div style="margin-top:6px;padding:6px;background:#f8fbff;border:1px solid #dbeafe;border-radius:7px;">
          ${buildSectionLabel("Requested service")}
          <div style="margin-top:3px;font-size:15px;line-height:1.35;color:#0f172a;font-weight:700;">
            ${serviceLabel}
          </div>
        </div>

        <div style="margin-top:8px;">
          ${buildSectionLabel("Your submitted details")}

          <div style="padding:6px;background:#ffffff;border:1px solid #e2e8f0;border-radius:7px;">
            ${buildInfoTable(payload)}
            ${buildMessageCard(payload.message)}
          </div>
        </div>

        <p style="margin:8px 0 0;font-size:13px;line-height:1.6;color:#475569;">
          If your enquiry is urgent, you can contact us directly below.
        </p>

        ${buildContactCard()}

        <div style="margin-top:6px;">
          <a
            href="${siteUrl}"
            style="display:inline-block;padding:8px 11px;border-radius:7px;background:linear-gradient(135deg,#38bdf8 0%,#4f46e5 100%);color:#ffffff;text-decoration:none;font-size:12px;font-weight:700;"
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
        { success: false, error: `Missing required fields: ${missing.join(", ")}` },
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
    const adminSubject = `New ${formatServiceLabel(contactPayload.service)} enquiry from ${
      contactPayload.name || "website form"
    }`;

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
        subject: "Thanks for your request — DOV Drone",
        text: autoReply.text,
        html: autoReply.html,
      };

      await transporter.sendMail(autoReplyMail);
    } catch (autoReplyError) {
      console.error("Auto-reply exception:", autoReplyError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("POST /api/contact fatal error:", error);

    return NextResponse.json(
      { success: false, error: "Unable to send email. Please try again." },
      { status: 500 }
    );
  }
}