
import { Hero } from "./components/hero";
import { TrustAndAccuracy } from "./components/trust-and-accuracy";


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
    </main>
  );
}


