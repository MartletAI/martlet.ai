import "./components/styles.css"
import { Hero } from "./components/hero";
import { WhyMartletAI } from "./components/why-martlet-ai";
import { TrustAndAccuracy } from "./components/trust-and-accuracy";

export default function Page() {
	return (
		<main>
			{/* Hero Section */}
			<Hero />

			{/* Why Martlet AI Section */}
			<WhyMartletAI  />

			{/* Trust and Accuracy Section */}
			<TrustAndAccuracy />
		</main>
	);
}