"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { getBrochureDownloadUrl, type Brochure } from "@/lib/brochures";

type FormState = {
  success: boolean;
  message: string;
} | null;

const PORTAL_ID = "244290520";
const FORM_ID = "193dd0a1-0320-4c29-8246-1933d5202c43";
const SUBMISSION_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`;

async function submitToHubSpot(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const fields = [
    { name: "firstname", value: formData.get("name")?.toString() ?? "" },
    { name: "email", value: formData.get("email")?.toString() ?? "" },
    { name: "pdf_filename", value: formData.get("pdf_filename")?.toString() ?? "" },
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

    return { success: true, message: "Your download is starting." };
  } catch {
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full h-[48px] px-[18px] py-[12px] bg-[#2563EB] text-white font-semibold text-base rounded-lg border-2 border-white/12 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Submitting..." : "Download Brochure"}
    </button>
  );
}

interface BrochureDownloadFormProps {
  brochure: Brochure;
  onSuccess?: () => void;
}

export function BrochureDownloadForm({ brochure, onSuccess }: BrochureDownloadFormProps) {
  const router = useRouter();
  const [state, formAction] = useActionState(submitToHubSpot, null);

  useEffect(() => {
    if (!state?.success) return;

    onSuccess?.();
    router.push(getBrochureDownloadUrl(brochure.pdfFilename));
  }, [state, brochure, onSuccess, router]);

  return (
    <form action={formAction} className="flex flex-col gap-[17px]">
      <input type="hidden" name="pdf_filename" value={brochure.pdfFilename} />

      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="brochure-name" className="text-sm font-medium cursor-pointer">
          Name <span className="text-[#6941C6]">*</span>
        </label>
        <input
          id="brochure-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className="w-full h-[44px] px-[14px] py-[10px] bg-white border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-base text-foreground placeholder-[#667085] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB]"
        />
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="brochure-email" className="text-sm font-medium cursor-pointer">
          Email <span className="text-[#6941C6]">*</span>
        </label>
        <input
          id="brochure-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="w-full h-[44px] px-[14px] py-[10px] bg-white border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-base text-foreground placeholder-[#667085] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB]"
        />
      </div>

      <SubmitButton />

      {state && !state.success && (
        <div className="p-4 rounded-md bg-red-50 text-red-700 text-sm">{state.message}</div>
      )}

      {state?.success && (
        <div className="p-4 rounded-md bg-green-50 text-green-700 text-sm">{state.message}</div>
      )}
    </form>
  );
}
