import { Icon, IconProps } from "@/components";
import { cn } from "@/lib/utils";

interface TrustFactorProps {
    title: string;
    icon: IconProps['name'];
    backgroundColor: string;
    color: string;
    border: string;
    reverse: boolean;
		width: string;
}
export function TrustFactor({ title, icon, backgroundColor, color, border, reverse, width }: TrustFactorProps) {
	return (
		<div className={cn("flex items-center gap-4 justify-end", reverse && "flex-row-reverse justify-start")}>
			<span className={cn(width, "text-foreground text-lg font-semibold", reverse && "text-left", !reverse && "text-right")}>{title}</span>
			<div className={`${backgroundColor} ${color} ${border} rounded-full size-18 flex justify-center items-center`}>
				<Icon name={icon} className="size-11.5" />
			</div>
		</div>
	)
}