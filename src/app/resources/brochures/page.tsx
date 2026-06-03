import type { Metadata } from "next";
import { Hero } from "./components/hero";
import { Brochures } from "./components/brochures";

export const metadata: Metadata = {
  title: "Martlet AI Brochures | Product Guides & Solution Overviews",
  description:
    "Download Martlet AI brochures to learn more about retrospective risk adjustment, HEDIS gap closure, and our healthcare AI solutions.",
  alternates: {
    canonical: "/resources/brochures",
  },
};

export default function Page() {
  return (
    <main>
      <Hero />
      <Brochures />
    </main>
  );
}
