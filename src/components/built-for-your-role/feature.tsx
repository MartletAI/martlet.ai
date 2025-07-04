import Image from "next/image";

interface FeatureProps {
  content: string;
}
export function Feature({ content }: FeatureProps) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <Image
        src="/build-for-your-role/checkmark.svg"
        width={12}
        height={9}
        alt="checkmark icon"
      />
      <p>{content}</p>
    </div>
  );
}
