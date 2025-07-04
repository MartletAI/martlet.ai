interface FeatureProps {
  svg: React.ReactElement;
  content: string;
}
export function Feature({ svg, content }: FeatureProps) {
  return (
    <div className="p-8 shadow-[0px_25px_60px_0px_#1B1F3B1F] bg-white rounded-[22px] w-full max-w-[270px] h-[200px] max-[1440px]:max-w-[243px] max-[1440px]:h-[180px] 2xl:max-w-[300px] 2xl:h-[220px] 3xl:max-w-[324px] 3xl:h-[240px]">
      <div className="relative top-[-65px]">{svg}</div>
      <p className="font-bold mt-[-8px]">{content}</p>
    </div>
  );
}
