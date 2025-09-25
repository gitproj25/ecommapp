// "use client";

// import Image from "next/image";
// import Link from "next/link";

// const dressStyles = [
//   { name: "Casual", imageSrc: "/f11.png" },
//   { name: "Formal", imageSrc: "/f22.png" },
//   { name: "Party", imageSrc: "/f33.png" },
//   { name: "Gym", imageSrc: "/f44.png" },
// ];

// export default function DressStyleGrid() {
//   return (
//     <section className="w-full py-8 px-6 ">
//       {/* <div className="bg-[#F0F0F0] max-w-[clamp(360px,92%,2140px)] mx-auto rounded-2xl p-14 pb-20 "> */}
//       <div className="bg-[#F0F0F0] max-w-[clamp(360px,92%,2140px)] mx-auto rounded-2xl 
//             p-14 pb-20 
//             max-[480px]:p-4 max-[480px]:pb-6">
//         {/* <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10  text-[clamp(1.5rem,4vw,3rem)]">
//           BROWSE BY DRESS STYLE
//         </h2> */}
//         <h2 className="text-center  mb-10 text-[clamp(1.5rem,4vw,3rem)] font-extrabold">
//   BROWSE BY DRESS STYLE
// </h2>

        


//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//   {dressStyles.map((style, i) => {
//     // Check if first or last item
//     const isFirstOrLast = i === 0 || i === dressStyles.length - 1;

//     return (
//       <div
//         key={i}
//         className={`relative rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105
//           ${i === 1 || i === 2 ? "col-span-1 sm:col-span-1 lg:col-span-2" : "col-span-1"}
//           ${isFirstOrLast ? "h-36 sm:h-72 md:h-64 lg:h-80" : "h-42 sm:h-72 md:h-64 lg:h-80"}`}
//       >
//         <Link
//   href={{
//     pathname: "/casual",
//     query: { from: "casual" }, // pass the breadcrumb source
//   }}
// >
//         <Image
//           src={style.imageSrc}
//           alt={style.name}
//           width={800}
//           height={400}
//           className="w-full h-full object-aspect[1/2] lg:object-cover"
//         />
//         </Link>

//         <div className="absolute left-2 top-2 text-black font-bold text-[clamp(1.25rem,3vw,2rem)] px-3 py-1 rounded-md">
//           {style.name}
//         </div>
//       </div>
//     );
//   })}
// </div>

//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";

const dressStyles = [
  { name: "Casual", imageSrc: "/f11.png", mobileImage: "/f11.png"},
  { name: "Formal", imageSrc: "/f22.png", mobileImage: "/f22.png"},
  { name: "Party", imageSrc: "/f33.png", mobileImage:   "/f33.png"},
  { name: "Gym", imageSrc: "/f44.png", mobileImage:    "/f44.png", },
];

export default function DressStyleGrid() {
  return (
    <section className="w-full py-8 px-6">
      <div
        className="bg-[#F0F0F0] max-w-[clamp(360px,92%,2140px)] mx-auto rounded-2xl 
            p-14 pb-20 
            max-[480px]:p-4 max-[480px]:pb-6"
      >
        <h2 className="text-center mb-10 text-[clamp(1.5rem,4vw,3rem)] font-extrabold">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {dressStyles.map((style, i) => {
            const isFirstOrLast = i === 0 || i === dressStyles.length - 1;

            return (
          //     <div
          //       key={i}
          //       className={`relative rounded-lg overflow-hidden shadow-md transition-transform duration-300
          //          transform hover:scale-105
          // ${i === 1 || i === 2 ? "col-span-1 sm:col-span-1 lg:col-span-2" : "col-span-1"}
          // ${isFirstOrLast ? "h-36 sm:h-72 md:h-64 lg:h-80" : "h-42 sm:h-72 md:h-64 lg:h-80"}`}
          //     >

          <div
  key={i}
  className={`relative rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105
    ${i === 1 || i === 2 ? "col-span-1 sm:col-span-1 lg:col-span-2" : "col-span-1"}
    h-48 sm:h-72 md:h-80 lg:h-96`}
>
                <Link
                  href={{
                    pathname: "/casual",
                    query: { from: "casual" },
                  }}
                >
                  {/* Mobile Image */}
                  <Image
                    src={style.mobileImage}
                    alt={style.name}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover block sm:hidden"
                  />

                  {/* Desktop/Tablet Image */}
                  <Image
                    src={style.imageSrc}
                    alt={style.name}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover hidden sm:block"
                  />
                </Link>

                <div className=" block absolute left-4 top-4 text-black font-bold text-[clamp(1.25rem,3vw,2rem)] px-3 py-1 rounded-md">
                  {style.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
