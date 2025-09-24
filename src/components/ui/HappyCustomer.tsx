"use client";

import { CheckCircle } from "lucide-react";

const reviews = [
  { name: "Sarah M.", review: "I’m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.", rating: 5 },
  { name: "Alex K.", review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.", rating: 4 },
  { name: "James L.", review: "As someone who’s always on the lookout for unique fashion pieces, I’m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.", rating: 5 },
  { name: "Monica D.", review: "The experience with Shopco has been seamless from browsing to checkout. The quality of the clothes is top-notch, and I always get compliments when I wear them.", rating: 4 },
  { name: "John", review: "The experience with Shopco has been seamless from browsing to checkout. The quality of the clothes is top-notch, and I always get compliments when I wear them.", rating: 5 },
  
];

export default function ReviewCarousel() {
  const scrollReviews = [...reviews, ...reviews,...reviews, ]; // duplicate for infinite scroll

  return (
    <section className="w-full relative overflow-hidden py-10 ">
     
      {/* <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6">
  OUR HAPPY <br className="block sm:hidden" /> CUSTOMERS
</h2> */}
<h2 className=" max-w-[clamp(360px,92%,2140px)] mx-auto px-2  text-[clamp(1.5rem,4vw,3rem)]  font-extrabold text-start mb-6 ">
  OUR HAPPY <br className="block sm:hidden" /> CUSTOMERS
</h2>

      {/* Carousel viewport */}
      <div className="relative w-full flex justify-center overflow-hidden ">  
        <div className="flex w-max animate-infinite-scroll gap-8 ">
          {scrollReviews.map((r, i) => {
            // Calculate relative position in original array
            const pos = i % reviews.length;
            // Center card index (middle card)
            const centerIndex = Math.floor(reviews.length / 2);
            // Blur everything except the center and adjacent
            const isSharp = pos === centerIndex || pos === centerIndex - 1 || pos === centerIndex + 1;

            return (
              <div
                key={i}
                className={`flex-shrink-0 bg-white rounded-2xl border boredr-gray-800 p-6 w-[20rem] sm:w-[27rem] h-64 flex flex-col transition-transform duration-300 ${
                  isSharp ? "scale-100 z-10" : "scale-95 z-0  mb-32 "
                }`}
              >
                <div className="flex mb-2">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <div className="flex items-center space-x-2 font-semibold">
                  <p>{r.name}</p>
                  <CheckCircle size={18} className="text-green-500" />
                </div>
                <p className="mt-2 text-sm font-normal">{r.review}</p>
              </div>
            );
          })}
        </div>

        {/* Edge overlays */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
