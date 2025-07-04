import { Button } from "../ui/button";
import { Companies } from "./companies";
import { HeroText } from "./hero-text";

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="flex flex-col align-start justify-between gap-8 xl:gap-16 xl:flex-row  xl:items-center">
        <div className="flex flex-col p-0 m-0 xl:gap-6">
          <HeroText />
          <p className="font-semibold text-xl mt-4 whitespace-nowrap md:text-2xl">
            On-premise, Secure, Real-time <br />
            HCC Coding & Risk Profiling
          </p>
          <div className="mt-6">
            <Button className="w-fit" aria-label="Book a demo for Martlet AI">
              Book a Demo
            </Button>
          </div>
        </div>

        <figure
          className="w-full max-w-[928px] aspect-[928/520] bg-white rounded-[25px] shadow-[0px_25px_80px_0px_#0483FD1A]"
          role="img"
          aria-label="Illustration showcasing Martlet AI in action"
        ></figure>
      </div>

      <Companies />
    </section>
  );
}
