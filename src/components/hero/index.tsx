import { Icon } from "../icon";
import { cn } from "@/lib/utils";
import { SmartLink } from "../cta/smart-link";

interface HeroProps {
  badgeText: string;
  headerTextClass?: string;
  headerText1: string;
  headerText1Class?: string;
  headerText2: string;
  headerText2Class?: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
  className?: string; 
}

export function Hero({ badgeText, headerText1, headerText2, description, buttonLabel, className, headerText1Class, headerText2Class, headerTextClass, buttonHref = "/contact" }: HeroProps) {
  return (
    <section className={cn("pt-28 pb-10 md:pt-[156px] md:pb-10 relative overflow-hidden", className)}>
      <div className="container-main mx-auto flex flex-col justify-center relative z-10 px-4 md:px-0">
        <div className="mx-auto flex w-fit h-auto py-1 md:py-1.5 md:h-[37px] px-3 md:px-4 justify-center items-center gap-1.5 rounded-full bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] mb-6 md:mb-11.5">
          <Icon name="ellipse" className="fill-[#33C020] size-1.5 md:size-2" />
          <p className="text-black font-medium text-xs md:text-[14px]">{badgeText}</p>
        </div>
        <h1 className={cn("text-center font-extrabold text-4xl md:text-[56px] leading-tight md:leading-[77px] tracking-[-0.02em] mx-auto", headerTextClass)}>
          <span className={cn("block", headerText1Class, headerTextClass ? "mb-2 md:mb-6": "mb-0")}>{headerText1}</span>
          <span className={cn("block", headerText2Class)}>{headerText2}</span>
        </h1>
        <p className="my-6 md:my-8 text-center text-lg md:text-[25.75px] italic font-medium leading-normal md:leading-8 text-foreground mx-auto max-w-[90%] md:max-w-[1030px]">{description}</p>
        <SmartLink href={buttonHref} className="btn btn-primary w-fit px-6 md:w-[182px] md:px-0 h-12! bg-footer-bg! text-base md:text-lg! text-white mx-auto flex items-center justify-center">
          {buttonLabel}
          <Icon name="play" className="ml-2 size-3 fill-[#CCE6FF]" />
        </SmartLink>
      </div>
      
    </section>
  )
}