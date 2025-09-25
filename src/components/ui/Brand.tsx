

"use client";

import Image from "next/image";

const logos = [
  { src: "/za.png", alt: "Zara" },
  { src: "/slogo2.png", alt: "Zara" },
  { src: "/logo3.png", alt: "Gucci" },
  { src: "/logo4.png", alt: "Prada" },
  { src: "/logo5.png", alt: "Calvin" },
  { src: "/logo1.png", alt: "Versace" },
  { src: "/logo5.png", alt: "Calvin" },
  { src: "/logo3.png", alt: "Gucci" },
  { src: "/logo4.png", alt: "Prada" },
  { src: "/logo5.png", alt: "Calvin" },
 
];

export default function LogoCarousel() {
  return (
    <div  id="brands" className="w-full overflow-hidden space-y-4 bg-black mb-8">
      {/* Main row (always visible) */}
      <div className="flex w-max animate-infinite-scroll  hover:animate-none py-4 md:py-12">
        {logos.concat(logos).map((logo, i) => (
          <div key={i} className="flex-shrink-0 mx-8">
            <Image src={logo.src} alt={logo.alt} width={120} height={60} className="max-h-[1.5rem]"/>
          </div>
        ))}
        {logos.concat(logos).map((logo, i) => (
          <div key={`dup-${i}`} className="flex-shrink-0 mx-8">
            <Image src={logo.src} alt={logo.alt} width={120} height={60}  className="max-h-[1.5rem]"/>
          </div> 
        ))} 
      </div>

      {/* Second row (only shows <640px) */}
      <div className="flex w-max animate-infinite-scroll-reverse  sm:hidden ">
        {logos.concat(logos).map((logo, i) => (
          <div key={`row2-${i}`} className="flex-shrink-0 mx-8">
            <Image src={logo.src} alt={logo.alt} width={120} height={60}  className="max-h-[1.5rem]" />
          </div>
        ))}
        {logos.concat(logos).map((logo, i) => (
          <div key={`row2-dup-${i}`} className="flex-shrink-0 mx-8">
            <Image src={logo.src} alt={logo.alt} width={120} height={60} className="max-h-[1.5rem]"/>
          </div>
        ))}
      </div>
    </div>
  );
}

