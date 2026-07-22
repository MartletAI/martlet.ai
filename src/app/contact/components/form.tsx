"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FormState = {
  success: boolean;
  message: string;
} | null;

const PORTAL_ID = '244290520';
const FORM_ID = 'b8431294-553a-4dc9-b0de-a9514c5d568c';
const SUBMISSION_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`;

async function submitToHubSpot(_prevState: FormState, formData: FormData): Promise<FormState> {

  const fields = [
    { name: 'email', value: formData.get('email')?.toString() ?? '' },
    { name: 'firstname', value: formData.get('firstname')?.toString() ?? '' },
    { name: 'lastname', value: formData.get('lastname')?.toString() ?? '' },
    { name: 'message', value: `${formData.get('message')?.toString() ?? ''}\n\nSubmission URL: ${sessionStorage.getItem('navigationSource') ?? ''}` },
  ];


  try {
    const response = await fetch(SUBMISSION_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields }),
    });

    if (!response.ok) {
       return { success: false, message: "Something went wrong. Please try again." };
    }

    return { success: true, message: "Thanks for submitting the form. We will get back to you shortly." };
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
      className="btn btn-gradient w-full h-[48px]! text-base! font-semibold! disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Sending..." : "Get in touch"}
    </button>
  );
}

export function Form() {
  const router = useRouter();
  const [state, formAction] = useActionState(submitToHubSpot, null);

  useEffect(() => {
    if (state?.success) {
      router.push("/thank-you-contact-us");
    }
  }, [state, router]);

  return (
    <form action={formAction} className="w-full max-w-[614px] mx-auto bg-white rounded-[24px] shadow-[0_6px_24px_rgba(10,10,18,0.06)] border border-border p-5 md:p-9 flex flex-col gap-[17px]">
      <div className="flex flex-col sm:flex-row gap-[17px] w-full">
        <div className="flex flex-col gap-1.5 flex-1">
          <label htmlFor="first-name" className="text-sm font-medium cursor-pointer">
            First name <span className="text-primary">*</span>
          </label>
          <input
            id="first-name"
            name="firstname"
            type="text"
            required
            autoComplete="given-name"
            placeholder="First name"
            className="w-full h-[44px] px-[14px] py-[10px] bg-white border border-border rounded-xl shadow-[0_1px_2px_rgba(10,10,18,0.04)] text-base text-foreground placeholder-[#8a8a8f] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <label htmlFor="last-name" className="text-sm font-medium  cursor-pointer">
            Last name <span className="text-primary">*</span>
          </label>
          <input
            id="last-name"
            name="lastname"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Last name"
            className="w-full h-[44px] px-[14px] py-[10px] bg-white border border-border rounded-xl shadow-[0_1px_2px_rgba(10,10,18,0.04)] text-base text-foreground placeholder-[#8a8a8f] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="email" className="text-sm font-medium cursor-pointer">
          Email <span className="text-primary">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="w-full h-[44px] px-[14px] py-[10px] bg-white border border-border rounded-xl shadow-[0_1px_2px_rgba(10,10,18,0.04)] text-base text-foreground placeholder-[#8a8a8f] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="message" className="text-sm font-medium cursor-pointer">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Leave us a message..."
          className="w-full h-[160px] px-[14px] py-[10px] bg-white border border-border rounded-xl shadow-[0_1px_2px_rgba(10,10,18,0.04)] text-base text-foreground placeholder-[#8a8a8f] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
        />
      </div>

      <div className="flex items-start gap-3 w-full">
        <div className="flex items-center h-5">
          <input
            id="privacy-policy"
            name="privacy-policy"
            type="checkbox"
            required
            className="w-4 h-4 text-primary border-border rounded focus:ring-primary/30"
          />
        </div>
        <label htmlFor="privacy-policy" className="text-sm text-muted font-normal cursor-pointer select-none">
          You agree to our <Link href="/privacy-policy" className="underline decoration-muted underline-offset-2 hover:text-primary">privacy policy</Link>.
        </label>
      </div>

      <SubmitButton />

      {state && !state.success && (
        <div className="mt-4 p-4 rounded-md bg-red-50 text-red-700">
          {state.message}
        </div>
      )}
    </form>
  )
}