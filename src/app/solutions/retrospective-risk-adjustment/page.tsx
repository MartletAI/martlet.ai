import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { TrustAndAccuracy } from "./components/trust-and-accuracy";
import { Hero } from "./components/hero";
import { WhyMartletAI } from "./components/why-martlet-ai";
import { HowItWorks } from "./components/how-it-works";
import { CTA } from "./components/cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retrospective Risk Adjustment Solution | Martlet AI",
  description: "Boost payer performance with Martlet AI’s retrospective risk adjustment solutions for precise coding, audits, and optimized healthcare risk scores.",
  alternates: {
    canonical: "/solutions/retrospective-risk-adjustment",
  },
};

export default function Page() {
	return (
		<main>
			<BreadcrumbJsonLd
				items={[
					{ name: "Home", href: "/" },
					{
						name: "Retrospective Risk Adjustment",
						href: "/solutions/retrospective-risk-adjustment",
					},
				]}
			/>
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