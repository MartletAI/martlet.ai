"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import type { Brochure } from "@/lib/brochures";
import { submitBrochureDownload, type BrochureDownloadState } from "./actions";

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
      {pending ? "Submitting..." : "Email me the download link"}
    </button>
  );
}

interface BrochureDownloadFormProps {
  brochure: Brochure;
}

/**
 * BrochureDownloadForm - collects name + work email, then hands off to a
 * server action that gates on email domain and emails a signed, expiring
 * download link via HubSpot. No download happens directly from this form —
 * the whole point is that it never touches the file at all.
 */
export function BrochureDownloadForm({ brochure }: BrochureDownloadFormProps) {
  const [state, formAction] = useActionState<BrochureDownloadState, FormData>(
    submitBrochureDownload,
    null,
  );

  if (state?.success) {
    return (
      <div className="p-4 rounded-lg bg-green-50 text-green-700 text-sm">{state.message}</div>
    );
  }

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
          Work email <span className="text-primary">*</span>
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
    </form>
  );
}
