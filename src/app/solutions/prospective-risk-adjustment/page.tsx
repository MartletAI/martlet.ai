import { WhyMartletAI } from "./components/why-martlet-ai";
import { Hero } from "./components/hero";
import "./components/styles.css"


export default function Page() {
	return (
		<main>
			{/* Hero Section */}
			<Hero />
			{/* Why Martlet AI Section */}
			<WhyMartletAI  />
		</main>
	);
}