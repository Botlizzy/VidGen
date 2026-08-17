import { Resend } from "resend";
import { ENV } from "./_core/env";

export function isEmailVerificationConfigured() {
  return Boolean(ENV.resendApiKey && ENV.resendFromEmail);
}

export async function sendVerificationEmail(input: {
  to: string;
  verificationUrl: string;
}) {
  if (!isEmailVerificationConfigured()) {
    throw new Error("Email verification is not configured. Add RESEND_API_KEY and RESEND_FROM_EMAIL.");
  }

  const resend = new Resend(ENV.resendApiKey);
  const result = await resend.emails.send({
    from: ENV.resendFromEmail,
    to: [input.to],
    subject: "Verify your VID-GEN account",
    text: `Verify your VID-GEN account by opening this link: ${input.verificationUrl}`,
    html: `<p>Welcome to VID-GEN.</p><p><a href="${input.verificationUrl}">Verify your email address</a> to finish setting up your creator workspace.</p>`,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result.data;
}
