import Image from "next/image";
import jslClient from "@/../public/assets/jsl-client.svg";

export function JohnSnowLabs() {
  return (
    <Image 
      src={jslClient} 
      alt="John Snow Labs workflow diagram" 
      className="object-contain" 
    />
  );
}