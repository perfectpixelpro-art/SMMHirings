import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
// Treat the placeholder/empty key as "not configured" → fall back to console.
const hasKey =
  !!apiKey && apiKey !== "your_resend_api_key" && !apiKey.startsWith("replace");

const resend = hasKey ? new Resend(apiKey) : null;
const FROM = process.env.EMAIL_FROM || "SMM Hiring <onboarding@resend.dev>";

async function send({ to, subject, html, link }) {
  if (!resend) {
    // Dev fallback: no API key → print the link so the flow is testable.
    console.log(
      `\n──────── [EMAIL · DEV MODE] ────────\n` +
        `To:      ${to}\nSubject: ${subject}\nLink:    ${link}\n` +
        `(Set RESEND_API_KEY in .env to actually send.)\n` +
        `────────────────────────────────────\n`
    );
    return;
  }

  // The Resend SDK returns { data, error } — it does NOT throw on API errors.
  // We must check `error` ourselves, otherwise failures are silent.
  const { data, error } = await resend.emails.send({ from: FROM, to, subject, html });
  if (error) {
    console.error(`[email] Resend rejected message to ${to}: ${error.message || JSON.stringify(error)}`);
    const err = new Error(error.message || "Email failed to send");
    err.code = "EMAIL_SEND_FAILED";
    throw err;
  }
  return data;
}

function button(href, label) {
  return `<a href="${href}" style="display:inline-block;background:#12B3EF;color:#fff;text-decoration:none;font-weight:600;padding:12px 28px;border-radius:8px">${label}</a>`;
}

export function sendVerificationEmail(to, link) {
  return send({
    to,
    link,
    subject: "Verify your SMM Hiring email",
    html: `<div style="font-family:sans-serif;max-width:480px;margin:auto">
      <h2 style="color:#0d1117">Confirm your email</h2>
      <p style="color:#374151">Thanks for signing up. Click below to verify your account. This link expires in 24 hours.</p>
      <p>${button(link, "Verify email")}</p>
      <p style="color:#9ca3af;font-size:12px">Or paste this link: ${link}</p>
    </div>`,
  });
}

export function sendResetEmail(to, link) {
  return send({
    to,
    link,
    subject: "Reset your SMM Hiring password",
    html: `<div style="font-family:sans-serif;max-width:480px;margin:auto">
      <h2 style="color:#0d1117">Reset your password</h2>
      <p style="color:#374151">We received a request to reset your password. Click below to choose a new one. This link expires in 1 hour.</p>
      <p>${button(link, "Reset password")}</p>
      <p style="color:#9ca3af;font-size:12px">If you didn't request this, you can ignore this email. Link: ${link}</p>
    </div>`,
  });
}
