import { Icon } from "../icon";
import { Button } from "../button";
import { cn } from "@/lib/utils";

interface HeroProps {
  badgeText: string;
  headerTextClass?: string;
  headerText1: string;
  headerText1Class?: string;
  headerText2: string;
  headerText2Class?: string;
  description: string;
  buttonLabel: string;
  className?: string; 
}

export function Hero({ badgeText, headerText1, headerText2, description, buttonLabel, className, headerText1Class, headerText2Class, headerTextClass }: HeroProps) {
  return (
    <section className={cn("pt-[156px] pb-10 relative overflow-hidden", className)}>
      <div className="container-main mx-auto flex flex-col justify-center relative z-10">
        <div className="mx-auto flex w-[188px] h-[37px] px-4 py-1.5 justify-center items-center gap-1.5 rounded-full bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.10)] mb-11.5">
          <Icon name="ellipse" className="fill-[#33C020] size-2" />
          <p className="text-black font-medium text-[14px]">{badgeText}</p>
        </div>
        <h1 className={cn("text-center font-extrabold text-[56px] leading-[77px] tracking-[-0.02em] mx-auto", headerTextClass)}>
          <span className={cn("block", headerText1Class, headerTextClass ? "mb-6": "mb-0")}>{headerText1}</span>
          <span className={cn("block", headerText2Class)}>{headerText2}</span>
        </h1>
        <p className="my-8 text-center text-[25.75px] italic font-medium leading-8 text-foreground mx-auto max-w-[1030px]">{description}</p>
        <Button className="w-[182px] h-12! bg-footer-bg! text-lg! text-white mx-auto">
          {buttonLabel}
          <Icon name="play" className="ml-2 size-3 fill-[#CCE6FF]" />
        </Button>
      </div>
      
    </section>
  )
}