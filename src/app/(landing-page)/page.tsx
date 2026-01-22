
import { Hero } from "./components/hero";
import { IndustryPartners } from "./components/industry-partners";
import { TrustAndAccuracy } from "./components/trust-and-accuracy";
import { WhyMartletAI } from "./components/why-martlet-ai";
import { CTA } from "./components/cta";


/**
 * Home - Landing page for Martlet AI
 * Displays the hero section with decorative background and products overview
 */
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* Trust and Accuracy Section */}
      <TrustAndAccuracy />

      {/* Industry partners */}
      <IndustryPartners />

      {/* Why Martlet AI Section */}
      <WhyMartletAI />

      {/* CTA Section */}
      <CTA />
    </main>
  );
}


