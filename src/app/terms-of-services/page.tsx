import { Contents } from "./components/contents"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Martlet AI",
  description: "Read Martlet AI’s Terms of Service detailing conditions for using our website and services, user rights, and legal terms governing access and use.",
  alternates: {
    canonical: "/terms-of-services",
  },
};

export default function Page() {
  return (
    <main>
      <Contents />
    </main>
  )
}
