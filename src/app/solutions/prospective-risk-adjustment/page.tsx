import "./components/styles.css"
import { Hero } from "./components/hero";
import { WhyMartletAI } from "./components/why-martlet-ai";
import { TrustAndAccuracy } from "./components/trust-and-accuracy";
import { HowItWorks } from "./components/how-it-works";
import { WhatTeamsCare } from "./components/what-teams-care";
import { DesignedForTrust } from "./components/designed-for-trust";
import { CTA } from "./components/cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prospective Risk Adjustment Solution | Martlet AI",
  description: "Optimize healthcare outcomes with Martlet AI's prospective risk adjustment solutions, improving accuracy in patient risk assessments.",
};

export default function Page() {
	return (
		<main>
			{/* Hero Section */}
			<Hero />

			{/* Why Martlet AI Section */}
			<WhyMartletAI  />

			{/* Trust and Accuracy Section */}
			<TrustAndAccuracy />

			{/* How it works Section */}
			<HowItWorks />

			{/* What Teams Care About Section */}
			<WhatTeamsCare />

			{/* Designed for Trust Section */}
			<DesignedForTrust />

			{/* CTA Section */}
			<CTA />
		</main>
	);
}