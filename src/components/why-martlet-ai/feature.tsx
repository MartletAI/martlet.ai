interface FeatureProps {
  icon: React.ReactElement;
  title: React.ReactElement;
  description: React.ReactElement;
}
export function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-start w-fit min-[450px]:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[45%]">
      {icon}
      <h3 className="text-2xl mt-5 mb-3">{title}</h3>
      <p className="text-[14px]">{description}</p>
    </div>
  );
}
