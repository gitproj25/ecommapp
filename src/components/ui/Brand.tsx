// "use client";

// import Image from "next/image";

// const logos = [
//   { src: "/za.png", alt: "Zara" },
//   { src: "/slogo2.png", alt: "Zara" },
//   { src: "/logo3.png", alt: "Gucci" },
//   { src: "/logo4.png", alt: "Prada" },
//   { src: "/logo5.png", alt: "Calvin" },
//   { src: "/logo1.png", alt: "Versace" },
//   { src: "/logo5.png", alt: "Calvin" },
//   { src: "/logo3.png", alt: "Gucci" },
//   { src: "/logo4.png", alt: "Prada" },
//   { src: "/logo5.png", alt: "Calvin" },
// ];

// export default function LogoCarousel() {
//   const duplicatedLogos = logos.concat(logos); // only duplicate once for seamless scroll

//   return (
//     <div className="w-full overflow-hidden space-y-4 bg-black mb-8">
//       {/* Main row (always visible) */}
//       <div className="flex w-max animate-infinite-scroll hover:animate-none py-4 md:py-12">
//         {duplicatedLogos.map((logo, i) => (
//           <div key={i} className="flex-shrink-0 mx-8">
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={120}
//               height={60}
//               className="max-h-[1.5rem]"
//               draggable={false} // prevent dragging, avoids jump on click
//             />
//           </div>
//         ))}
//       </div>

//       {/* Second row (mobile only) */}
//       <div className="flex w-max animate-infinite-scroll-reverse sm:hidden">
//         {duplicatedLogos.map((logo, i) => (
//           <div key={i} className="flex-shrink-0 mx-8">
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={120}
//               height={60}
//               className="max-h-[1.5rem]"
//               draggable={false}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




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
  const duplicatedLogos = logos.concat(logos);

  return (
    <div id="brands" className="w-full overflow-hidden space-y-4 bg-black mb-8">
      {/* Main row */}
      <div className="flex w-max animate-infinite-scroll py-4 md:py-12">
        {duplicatedLogos.map((logo, i) => (
          <div key={i} className="flex-shrink-0 mx-8">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="max-h-[1.5rem]"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Second row (mobile only) */}
      <div className="flex w-max animate-infinite-scroll-reverse sm:hidden">
        {duplicatedLogos.map((logo, i) => (
          <div key={i} className="flex-shrink-0 mx-8">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="max-h-[1.5rem]"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
