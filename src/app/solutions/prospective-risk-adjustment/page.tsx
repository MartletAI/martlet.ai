import "./components/styles.css"
import { Hero } from "./components/hero";
import { WhyMartletAI } from "./components/why-martlet-ai";
import { TrustAndAccuracy } from "./components/trust-and-accuracy";
import { HowItWorks } from "./components/how-it-works";
import { WhatTeamsCare } from "./components/what-teams-care";
import { DesignedForTrust } from "./components/designed-for-trust";
import { CTA } from "./components/cta";

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