import { Hero } from "@/components/hero";
import { RiskAdjustmentBoost } from "@/components/risk-adjustment-boost";
import { BuiltForYourRole } from "@/components/built-for-your-role";
import { WhyMartletAI } from "@/components/why-martlet-ai";
import { TrustAndAccuracy } from "@/components/trust-and-accuracy";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="pb-16">
      <div className="blue-layout"></div>

      <div className="purple-layout"></div>
      <div className="sky-layout"></div>

      <div className="hero-section-parrot"></div>

      <div className="absolute top-16 left-0 right-0 bottom-0 max-w bg-transparent">
        <Hero />
        <RiskAdjustmentBoost />
        <BuiltForYourRole />
        <div className="why-martlet-section-parrot">
          <WhyMartletAI />
          <TrustAndAccuracy />
        </div>
        <Contact />
        <div className="h-[100px]" />
      </div>
    </main>
  );
}
