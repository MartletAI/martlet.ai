import type { Metadata } from "next";
import { Hero } from "./components/hero";

export const metadata: Metadata = {
  title: "Thank You | Martlet AI",
  description: "Thank you for contacting Martlet AI. We will get back to you shortly.",
  alternates: {
    canonical: "/thank-you-contact-us",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <main>
      <Hero />
    </main>
  );
}
