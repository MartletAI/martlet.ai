"use server";

import { getBrochureDownloadUrl } from "@/lib/brochures";
import { isBlockedEmailDomain } from "@/lib/email-blocklist";
import { generateDownloadToken } from "@/lib/download-token";
import { SITE_ORIGIN } from "@/lib/json-ld";

export type BrochureDownloadState = {
  success: boolean;
  message: string;
} | null;

const PORTAL_ID = "244290520";
const FORM_ID = "193dd0a1-0320-4c29-8246-1933d5202c43";
const SUBMISSION_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`;

/**
 * Server-side brochure download handler. Runs entirely on the server so the
 * email-domain check can't be bypassed client-side: blocked domains never
 * reach HubSpot at all. On success, a signed 72-hour download link is
 * generated and submitted as a hidden HubSpot field, which a HubSpot
 * automation emails to the contact — the site itself never hands back or
 * triggers the download directly.
 */
export async function submitBrochureDownload(
  _prevState: BrochureDownloadState,
  formData: FormData,
): Promise<BrochureDownloadState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const pdfFilename = formData.get("pdf_filename")?.toString() ?? "";

  if (!name || !email || !pdfFilename) {
    return { success: false, message: "Please fill in all fields." };
  }

  if (isBlockedEmailDomain(email)) {
    return { success: false, message: "Please use your work email address." };
  }

  const { token, expires } = generateDownloadToken(pdfFilename);
  const downloadUrl = new URL(getBrochureDownloadUrl(pdfFilename), SITE_ORIGIN);
  downloadUrl.searchParams.set("token", token);
  downloadUrl.searchParams.set("expires", String(expires));

  const fields = [
    { name: "firstname", value: name },
    { name: "email", value: email },
    { name: "pdf_filename", value: pdfFilename },
    { name: "brochure_download_link", value: downloadUrl.toString() },
  ];

  try {
    const response = await fetch(SUBMISSION_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields }),
    });

    if (!response.ok) {
      return { success: false, message: "Something went wrong. Please try again." };
    }

    return {
      success: true,
      message: "Check your email for your download link — it's valid for 72 hours.",
    };
  } catch {
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
