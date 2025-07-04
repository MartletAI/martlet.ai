interface FeatureProps {
  content: string;
  quantity?: string;
  svg?: React.ReactElement;
  bgColor?: string;
}
export function Feature({ content, quantity, svg, bgColor }: FeatureProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 md:gap-4 p-4 md:p-[30px] border-[3px] border-[#F5F6F8] ${
        bgColor ? bgColor : "bg-white"
      } w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-[25px]`}
    >
      {quantity ? (
        <h3 className="text-secondary text-2xl md:text-5xl font-bold">
          {quantity}
        </h3>
      ) : null}

      {svg ? svg : null}

      <p className="text-center font-semibold">{content}</p>
    </div>
  );
}
