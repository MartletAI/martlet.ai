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

const INPUT_CLASS =
  "w-full h-[44px] px-[14px] py-[10px] bg-white border border-border rounded-xl shadow-[0_1px_2px_rgba(10,10,18,0.04)] text-base text-foreground placeholder-[#8a8a8f] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-gradient w-full h-[48px]! text-base! font-semibold! disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Submitting..." : "Download brochure"}
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
        <label htmlFor="brochure-name" className="text-sm font-medium text-foreground cursor-pointer">
          Name <span className="text-primary">*</span>
        </label>
        <input
          id="brochure-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={INPUT_CLASS}
        />
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="brochure-email" className="text-sm font-medium text-foreground cursor-pointer">
          Email <span className="text-primary">*</span>
        </label>
        <input
          id="brochure-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={INPUT_CLASS}
        />
      </div>

      <SubmitButton />

      {state && !state.success && (
        <div className="p-3 rounded-lg bg-red-50 text-red-700 text-sm">{state.message}</div>
      )}

      {state?.success && (
        <div className="p-3 rounded-lg bg-green-50 text-green-700 text-sm">{state.message}</div>
      )}
    </form>
  );
}
