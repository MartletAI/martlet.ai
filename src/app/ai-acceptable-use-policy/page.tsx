import { Contents } from "./components/contents"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Acceptable Use Policy | Martlet AI",
  description: "Read Martlet AI’s AI Acceptable Use Policy outlining rules for ethical, lawful, and responsible use of AI systems to protect users and align with compliance standards.",
  alternates: {
    canonical: "/ai-acceptable-use-policy",
  },
};

export default function Page() {
  return (
    <main>
      <Contents />
    </main>
  )
}
