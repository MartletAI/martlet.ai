import { ReactNode } from "react";
import { Icon } from "../icon";
import { Button } from "../button";

interface HeroProps {
  badgeText: string;
  headerText1: string;
  headerText2: string;
  description: string;
  buttonLabel: string;
  backgroundImage?: ReactNode;
}

export function Hero({ badgeText, headerText1, headerText2, description, buttonLabel, backgroundImage }: HeroProps) {
  return (
    <section className="prospective-hero-section pt-[156px] pb-10 relative overflow-hidden">
      {backgroundImage}
      <div className="container-main mx-auto flex flex-col justify-center relative z-10">
        <div className="mx-auto flex w-[188px] h-[37px] px-4 py-1.5 justify-center items-center gap-1.5 rounded-full bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] mb-11.5">
          <Icon name="ellipse" className="fill-[#33C020] size-2" />
          <p className="text-black font-medium text-[14px]">{badgeText}</p>
        </div>
        <h1 className="text-center font-bold text-[56px] leading-[1.1] tracking-[-0.02em] mx-auto">
          <span className="prospective-hero-gradient-text block mb-6">{headerText1}</span>
          <span className="text-[#0B2559] block">{headerText2}</span>
        </h1>
        <p className="my-8 text-center text-2xl italic font-medium leading-8 text-foreground mx-auto">{description}</p>
        <Button className="w-[182px] mx-auto bg-footer-bg! text-white">{buttonLabel} <Icon name="play" className="ml-2 size-3 fill-[#CCE6FF]" /></Button>
      </div>
      
    </section>
  )
}