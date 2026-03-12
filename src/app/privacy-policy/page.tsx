import { Contents } from "./components/contents"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Martlet AI",
  description: "Learn how Martlet AI collects, uses, and protects personal data under its Privacy Policy, with a focus on privacy by design and user rights.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function Page() {
  return (
    <main>
      <Contents />
    </main>
  )
}