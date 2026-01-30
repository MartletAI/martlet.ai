import { Hero } from "./components/hero";
import { Blogs } from "./components/blogs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Martlet AI Blog | Risk Adjustment Insights",
  description: "Stay updated with Martlet AI blogs for the latest product features, technological advancements, and insights into our solutions and industry trends.",
};

export default function Page() {
  return(
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Blogs Section */}
      <Blogs />
    </main>
  )
}