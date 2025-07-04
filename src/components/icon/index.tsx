import Image from "next/image";

interface IconProps {
  src: string;
  alt: string;
}
export function Icon({ src, alt }: IconProps) {
  return (
    <div className="relative w-[70px] h-[70px]">
      <Image src={src} fill alt={alt} className="object-contain" />
    </div>
  );
}
