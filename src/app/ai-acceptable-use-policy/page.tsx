import { Contents } from "./components/contents"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Acceptable Use Policy | Martlet AI",
  description: "Martlet AI’s Acceptable Use Policy ensures ethical, legal AI deployment, protecting users and aligning with compliance standards for responsible AI use.",
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
