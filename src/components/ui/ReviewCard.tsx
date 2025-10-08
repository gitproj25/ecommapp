"use client";
import { useState } from "react";
import Image from "next/image";
import React from 'react'
import { CheckCircle } from "lucide-react";

import { Filter, ChevronDown, Edit } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { Star, StarHalf, Star as StarEmpty } from "lucide-react"; // StarHalf for half stars

const ReviewCard = () => {
    
      interface Review {
      name: string;
      rating: number;
      comment: string;
      date: string;
    }
    
     const allReviews: Review[] = [
  {
    name: "John Doe",
    rating: 4.5,
    comment:
"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "Sep 12, 2025",
  },
  {
    name: "Jane Smith",
    rating: 3,
    comment:
      "Nice design but the color is slightly different than the picture. The fabric feels a bit thin, so I’m not sure about durability, but overall it still looks stylish.",
    date: "Sep 10, 2025",
  },
  {
    name: "Alex Johnson",
    rating: 3.5,
    comment:
      "Excellent product! I love the fabric and style. The fit is very flattering and I got many compliments when I wore it. Delivery was quick and packaging was neat.",
    date: "Sep 08, 2025",
  },
  {
    name: "Emily Davis",
    rating: 4.5,
    comment:
      "Good t-shirt but delivery took longer than expected. The material feels nice and soft, but the size runs a little smaller than described. I recommend ordering one size up.",
    date: "Sep 05, 2025",
  },
  {
    name: "John Doe",
    rating: 3,
    comment:
      "Great quality t-shirt, fits perfectly and very comfortable! I love how breathable it feels in summer. The stitching is strong and the design looks even better in person.",
    date: "Sep 12, 2025",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment:
      "Nice design but the color is slightly different than the picture. After a week of use, the fabric still feels fresh and soft. Overall, I’m happy with this purchase.",
    date: "Sep 10, 2025",
  },
  {
    name: "John Doe",
    rating: 3,
    comment:
      "Great quality t-shirt, fits perfectly and very comfortable! I have worn it multiple times and it still looks new. Perfect for casual wear and easy to pair with jeans.",
    date: "Sep 12, 2025",
  },
  {
    name: "Jane Smith",
    rating: 4.5,
    comment:
      "Nice design but the color is slightly different than the picture. I expected a brighter shade, but it’s still nice. Fabric is soft and doesn’t irritate the skin.",
    date: "Sep 10, 2025",
  },
];

    
 
    
    
     const INITIAL_COUNT = 6;
      const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);
    
      const handleToggle = (): void => {
        if (visibleCount === allReviews.length) {
          // Show less
          setVisibleCount(INITIAL_COUNT);
        } else {
          // Show all
          setVisibleCount(allReviews.length);
        }
      };
  return (
    <div>
        <section className="w-full max-w-[clamp(360px,92%,2140px)] mx-auto px-4 py-5 pb-5 mb-3 ">

  <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
<h2 className="  text-[clamp(1rem,1.5vw,2rem)] font-Satoshi font-bold flex-1 min-w-0 whitespace-nowrap overflow-hidden">
  All Reviews{' '}
  <span className="font-Satoshi font-light text-[clamp(0.7rem,1vw,1.2rem)] text-gray-500">
    (24)
  </span>  
</h2>



  <div className="flex gap-4 flex-wrap">
    {/* Filter Button */}
    <div className="flex items-center bg-lightGray gap-2 px-4 py-2 rounded-full text-black">
      <Image
        src="/blackfilter.png"
        alt="filter"
        width={20}
        height={20}
        className="brightness-0"
      />
    </div>

    {/* Latest Button - hide on small screens */}
    <button className="hidden sm:flex items-center font-Satoshi font-Regular gap-2 bg-lightGray px-3 sm:px-10 py-1.5 sm:py-3 rounded-full 
text-[#000000]   hover:bg-gray-200 transition">
      Latest
      <ChevronDown size={16} />
    </button>

    {/* Write Review Button */}
    <button className="flex items-center font-Satoshi font-Regular gap-2 bg-black text-white px-4 sm:px-10 py-1.5 sm:py-3 rounded-full text-[clamp(1.1rem,1.5vw,1rem)]  hover:bg-gray-800 transition">
      Write Review
    </button>
  </div>
</div>


 



   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {allReviews.slice(0, visibleCount).map((review, i) => (
        <div
  key={i}
  className="border  rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-60 flex flex-col justify-between gap-2"
>  


<div className="flex justify-between items-center">
  <div className="flex text-yellow-500">
    {(() => {
      const fullStars = Math.floor(review.rating); // full stars
      const hasHalfStar = review.rating % 1 >= 0.5; // half star?

      return (
        <>
          {/* Full stars */}
          {Array.from({ length: fullStars }, (_, i) => (
            <Star key={`full-${i}`} size={24} className="fill-current text-yellow-500" />
          ))}

          {/* Half star */}
         {hasHalfStar && <StarHalf key="half" size={24} className="fill-current text-yellow-500" />}
        </>
      );
    })()}
  </div>

  <MoreHorizontal size={30} className="text-gray-500 cursor-pointer" />
</div>

  {/* Rating */}


  {/* Name + Check */}
  <div className="flex items-start gap-2">
    <p className=" text-[clamp(1rem,2vw,1.3rem)] font-Satoshi font-bold">{review.name}</p>
      {/* <CheckCircle size={18} className="text-green-500" /> */}
      <Image
      src="/right.png"
      alt="right icon"
      width={20}
      height={20}
      className="mt-0.5"
      />
  </div>

  {/* Comment */}
  <p className="text-semiBlack text-[clamp(0.9rem,1vw,1.6rem)]   text-gray-300 font-Satoshi font-Regular">"{review.comment}"</p>

  {/* Date */}
  <p className="font-Satoshi text-gray-400 text-[clamp(0.9rem,1vw,1.7rem)] text-semiBlack">Posted on {review.date}</p>
</div>

        ))}
      </div>


    

       {/* Toggle Button */}
      <div className="flex justify-center py-5">
        <button
          onClick={handleToggle}
          className="border border-gray-300 font-Satoshi font-Regular text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 sm:w-48 whitespace-nowrap"
        >
          {visibleCount === allReviews.length ? "Read Less" : "Load More Reviews"}
        </button>
      </div>
</section>
      
    </div>
  )
}

export default ReviewCard
