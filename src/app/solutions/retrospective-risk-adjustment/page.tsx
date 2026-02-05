import { TrustAndAccuracy } from "./components/trust-and-accuracy";
import { Hero } from "./components/hero";
import { WhyMartletAI } from "./components/why-martlet-ai";
import { HowItWorks } from "./components/how-it-works";
import { CTA } from "./components/cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retrospective Risk Adjustment Solution | Martlet AI",
  description: "Boost payer performance with Martlet AI’s retrospective risk adjustment solutions for precise coding, audits, and optimized healthcare risk scores.",
  keywords: ["retrospective risk adjustment", "retrospective coding", "retrospective risk adjustment services"],
};

export default function Page() {
	return (
		<main>
			{/* Hero Section */}
			<Hero />

			{/* Why Martlet AI Section */}
			<WhyMartletAI />

			{/* Trust and Accuracy Section */}
			<TrustAndAccuracy />

			{/* How It Works Section */}
			<HowItWorks />

			{/* CTA Section */}
			<CTA />
		</main>
	)
}