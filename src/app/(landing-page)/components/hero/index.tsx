import { ProofBar } from "../proof-bar";
import { ShowCase } from "./show-case";

export function Hero() {
  return (
    <div className="apple-hero">
      <div className="max-w-[1440px] m-auto relative z-10">
        {/* Primary hero content - headline, tagline, and CTAs */}
        <ShowCase />

        {/* Proof bar - the numbers behind the claims */}
        <ProofBar />
      </div>
    </div>
  );
}
