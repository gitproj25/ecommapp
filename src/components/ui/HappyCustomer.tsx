// "use client";

// import { CheckCircle } from "lucide-react";
// import Image from "next/image";

// const reviews = [
//   { name: "Sarah M.", review: "I’m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.", rating: 5 },
//   { name: "Alex K.", review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.", rating: 4 },
//   { name: "James L.", review: "As someone who’s always on the lookout for unique fashion pieces, I’m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.", rating: 5 },
//   { name: "Monica D.", review: "The experience with Shopco has been seamless from browsing to checkout. The quality of the clothes is top-notch, and I always get compliments when I wear them.", rating: 4 },
//   { name: "John", review: "The experience with Shopco has been seamless from browsing to checkout. The quality of the clothes is top-notch, and I always get compliments when I wear them.", rating: 5 },
//     { name: "Sarah M.", review: "I’m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.", rating: 5 },
//   { name: "Alex K.", review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.", rating: 4 },
//   { name: "James L.", review: "As someone who’s always on the lookout for unique fashion pieces, I’m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.", rating: 5 },
//   { name: "Monica D.", review: "The experience with Shopco has been seamless from browsing to checkout. The quality of the clothes is top-notch, and I always get compliments when I wear them.", rating: 4 },
//   { name: "John", review: "The experience with Shopco has been seamless from browsing to checkout. The quality of the clothes is top-notch, and I always get compliments when I wear them.", rating: 5 },
  
  
// ];

// export default function ReviewCarousel() {
//   const scrollReviews = [...reviews, ...reviews ]; // duplicate for infinite scroll

//   return (
//     <section className="w-full relative overflow-hidden py-8 ">
     
//       {/* <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6">
//   OUR HAPPY <br className="block sm:hidden" /> CUSTOMERS
// </h2> */}
// <h2 className=" max-w-[clamp(360px,92%,2140px)] mx-auto px-2  text-[clamp(1.3rem,4vw,3rem)]  font-extrabold text-start mb-6 ">
//   OUR HAPPY <br className="block sm:hidden" /> CUSTOMERS
// </h2>

//       {/* Carousel viewport animate-infinite-scroll pause-on-hover */}
//      <div className="relative w-full flex justify-center overflow-hidden ">
//   <div className="flex w-max  gap-8 animate-infinite-scroll pause-on-hover">
//     {[...scrollReviews].map((r, i) => {
//       const pos = i % reviews.length;
//       const centerIndex = Math.floor(reviews.length / 2);
//       const isSharp =
//         pos === centerIndex || pos === centerIndex - 1 || pos === centerIndex + 1;

//       return (
//         <div
//           key={i}
//           className={`flex-shrink-0 bg-white rounded-2xl border border-gray-200 p-6 w-[20rem] sm:w-[27rem] h-64 flex flex-col transition-transform duration-300 ${
//             isSharp ? "scale-100 z-10" : "scale-95 z-0 mb-32"
//           }`}
//         >
//           <div className="flex mb-2">
//             {Array.from({ length: r.rating }).map((_, idx) => (
//               <span key={idx} className="text-yellow-400 text-[clamp(1.2rem,2vw,2rem)]">
//                 ★
//               </span>
//             ))}
//           </div>
//           <div className="flex items-center space-x-2 ">
//   <p className="m-0 font-Satoshi font-extrabold text-[clamp(0.8rem,1.2vw,1.4rem)]">{r.name}</p>
//   <Image
//     src="/right.png"
//     alt="right icon"
//     width={20}
//     height={20}
//     className="mt-0.5"
//   />
// </div>

//          <p className="mt-2 font-satoshi font-thin text-[clamp(0.75rem,1.2vw,1.1rem)]">
//   "{r.review}"
// </p>

//         </div>
//       );
//     })}
//   </div>

//   {/* Edge gradients */}
//   <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
//   <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
// </div>

//     </section>
//   );
// }




// "use client";

// import Image from "next/image";

// const reviews = [
//   { name: "Sarah M.", review: "I’m blown away by the quality and style...", rating: 5 },
//   { name: "Alex K.", review: "Finding clothes that align with my style...", rating: 4 },
//   { name: "James L.", review: "Thrilled to have stumbled upon Shop.co...", rating: 5 },
//   { name: "Monica D.", review: "Seamless experience from browsing to checkout...", rating: 4 },
//   { name: "John", review: "Top-notch quality and compliments everywhere...", rating: 5 },
// ];

// export default function ReviewCarousel() {
//   const scrollReviews = [...reviews, ...reviews]; // duplicate for smooth loop

//   return (
//     <section className="w-full relative overflow-hidden py-8">
//       <h2 className="max-w-[clamp(360px,92%,2140px)] mx-auto px-2 text-[clamp(1.3rem,4vw,3rem)] font-extrabold text-start mb-6">
//         OUR HAPPY <br className="block sm:hidden" /> CUSTOMERS
//       </h2>

//       <div className="relative w-full overflow-hidden">
//         <div className="flex flex-nowrap gap-8 animate-infinite-scroll pause-on-hover w-max">
//           {scrollReviews.map((r, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0 bg-white rounded-2xl border border-gray-200 p-6 w-[20rem] sm:w-[27rem] h-64 flex flex-col"
//             >
//               <div className="flex mb-2">
//                 {Array.from({ length: r.rating }).map((_, idx) => (
//                   <span key={idx} className="text-yellow-400 text-[clamp(1.2rem,2vw,2rem)]">
//                     ★
//                   </span>
//                 ))}
//               </div>
//               <div className="flex items-center space-x-2">
//                 <p className="m-0 font-Satoshi font-extrabold text-[clamp(0.8rem,1.2vw,1.4rem)]">
//                   {r.name}
//                 </p>
//                 <Image src="/right.png" alt="right icon" width={20} height={20} className="mt-0.5" />
//               </div>
//               <p className="mt-2 font-satoshi font-thin text-[clamp(0.75rem,1.2vw,1.1rem)]">
//                 "{r.review}"
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Edge gradients */}
//         <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
//         <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
//       </div>
//     </section>
//   );
// }










"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

const reviews = [
  { name: "Sarah M.", review: "I’m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.", rating: 5 },
  { name: "Alex K.", review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.", rating: 4 },
  { name: "James L.", review: "As someone who’s always on the lookout for unique fashion pieces, I’m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.", rating: 5 },
  { name: "Monica D.", review: "The experience with Shopco has been seamless from browsing to checkout. The quality of the clothes is top-notch, and I always get compliments when I wear them.", rating: 4 },
  { name: "John", review: "The experience with Shopco has been seamless from browsing to checkout. The quality of the clothes is top-notch, and I always get compliments when I wear them.", rating: 5 },
  { name: "Sarah M.", review: "I’m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.", rating: 5 },
  { name: "Alex K.", review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.", rating: 4 },
  { name: "James L.", review: "As someone who’s always on the lookout for unique fashion pieces, I’m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.", rating: 5 },
  { name: "Monica D.", review: "The experience with Shopco has been seamless from browsing to checkout. The quality of the clothes is top-notch, and I always get compliments when I wear them.", rating: 4 },
  { name: "John", review: "The experience with Shopco has been seamless from browsing to checkout. The quality of the clothes is top-notch, and I always get compliments when I wear them.", rating: 5 },
];

export default function ReviewCarousel() {
  const scrollReviews = [...reviews, ...reviews]; // duplicate for infinite scroll

  return (
    <section className="w-full relative overflow-hidden py-8">
      <h2 className="max-w-[clamp(360px,92%,2140px)] mx-auto px-2 text-[clamp(1.3rem,4vw,3rem)] font-extrabold text-start mb-6">
        OUR HAPPY <br className="block sm:hidden" /> CUSTOMERS
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex flex-nowrap gap-8 w-max animate-infinite-scroll pause-on-hover">
          {scrollReviews.map((r, i) => {
            const pos = i % reviews.length;
            const centerIndex = Math.floor(reviews.length / 2);
            const isSharp =
              pos === centerIndex || pos === centerIndex - 1 || pos === centerIndex + 1;

            return (
              <div
                key={i}
                className={`flex-shrink-0 bg-white rounded-2xl border border-gray-200 p-6 w-[20rem] sm:w-[27rem] h-64 flex flex-col transition-transform duration-300 ${
                  isSharp ? "scale-100 z-10" : "scale-95 z-0 mb-32"
                }`}
              >
                <div className="flex mb-2">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-[clamp(1.2rem,2vw,2rem)]">
                      ★
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <p className="m-0 font-Satoshi font-extrabold text-[clamp(0.8rem,1.2vw,1.4rem)]">
                    {r.name}
                  </p>
                  <Image
                    src="/right.png"
                    alt="right icon"
                    width={20}
                    height={20}
                    className="mt-0.5"
                  />
                </div>
                <p className="mt-2 font-satoshi font-thin text-[clamp(0.75rem,1.2vw,1.1rem)]">
                  "{r.review}"
                </p>
              </div>
            );
          })}
        </div>

        {/* Edge gradients */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
