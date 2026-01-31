import Image from "next/image";
import jslClient from "@/../public/assets/industry-partners/jsl-client.svg";

export function JohnSnowLabs() {
  return (
    <Image 
      src={jslClient} 
      alt="John Snow Labs workflow diagram" 
      className="object-contain w-full h-auto" 
    />
  );
}