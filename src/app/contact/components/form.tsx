"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

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
    { name: 'message', value: `${formData.get('message')?.toString() ?? ''}\n\nSubmission URL: ${window.location.search?.split('from=').pop()}` },
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
  } catch (error) {
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
      {pending ? "Sending..." : "Get in touch"}
    </button>
  );
}

export function Form() {
  const [state, formAction] = useActionState(submitToHubSpot, null);

  return (
    <form action={formAction} className="w-full max-w-[614px] mx-auto bg-white rounded-[12px] shadow-[0px_6px_20.6px_0px_rgba(0,0,0,0.05)] border border-[#E4E7EC] p-8 flex flex-col gap-[17px]">
      <div className="flex flex-col sm:flex-row gap-[17px] w-full">
        <div className="flex flex-col gap-1.5 flex-1">
          <label htmlFor="first-name" className="text-sm font-medium  cursor-pointer">
            First name <span className="text-[#6941C6]">*</span>
          </label>
          <input
            id="first-name"
            name="firstname"
            type="text"
            required
            autoComplete="given-name"
            placeholder="First name"
            className="w-full h-[44px] px-[14px] py-[10px] bg-white border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-base text-foreground placeholder-[#667085] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB]"
          />
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <label htmlFor="last-name" className="text-sm font-medium  cursor-pointer">
            Last name <span className="text-[#6941C6]">*</span>
          </label>
          <input
            id="last-name"
            name="lastname"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Last name"
            className="w-full h-[44px] px-[14px] py-[10px] bg-white border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-base text-foreground placeholder-[#667085] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="email" className="text-sm font-medium cursor-pointer">
          Email <span className="text-[#6941C6]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="w-full h-[44px] px-[14px] py-[10px] bg-white border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-base text-foreground placeholder-[#667085] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB]"
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
          className="w-full h-[160px] px-[14px] py-[10px] bg-white border border-[#D0D5DD] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-base text-foreground placeholder-[#667085] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] resize-y"
        />
      </div>

      <div className="flex items-start gap-3 w-full">
        <div className="flex items-center h-5">
          <input
            id="privacy-policy"
            name="privacy-policy"
            type="checkbox"
            required
            className="w-4 h-4 text-[#2563EB] border-gray-300 rounded focus:ring-[#2563EB]"
          />
        </div>
        <label htmlFor="privacy-policy" className="text-sm text-[#475467] font-normal cursor-pointer select-none">
          You agree to our friendly <a href="#" className="underline decoration-[#475467] underline-offset-2">privacy policy</a>.
        </label>
      </div>

      <SubmitButton />

      {state && (
        <div className={`mt-4 p-4 rounded-md ${state.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {state.message}
        </div>
      )}
    </form>
  )
}