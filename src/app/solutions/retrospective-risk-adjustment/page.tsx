import { TrustAndAccuracy } from "./components/trust-and-accuracy";
import { Hero } from "./components/hero";
import { WhyMartletAI } from "./components/why-martlet-ai";
import { HowItWorks } from "./components/how-it-works";
import { CTA } from "./components/cta";

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