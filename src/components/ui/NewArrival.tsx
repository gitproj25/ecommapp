"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";


export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating: number;
  reviews: number;
  image: string;
  thumbnails: string[];
  color: string[];
  size: string[];
  description: string; // ✅ added
};

const products: Product[] = [

  {
    id: 5,
    name: "Checkered Shirt",
    category: "Shirts",
    price: 180,
    rating: 4.6,
    reviews: 375,
    image: "/products/p2.png",
    thumbnails: ["/products/p2.png", "/products/p2.png","/products/p2.png"],
    color: ["orange", "red"],
    size: ["Large", "X-Large", "XX-Large"],
    description: "Classic checkered shirt made with high-quality fabric for a stylish, comfortable fit."
  },
  {
    id: 6,
    name: "Shorts",
    category: "Shorts",
    price: 130,
    oldPrice: 160,
    discount: "-30%",
    rating: 4.5,
    reviews: 520,
    image: "/products/p3.png",
    thumbnails: ["/products/p3.png", "/products/p3.png","/products/p3.png"],
    color: ["blue"],
    size: ["Small", "Medium", "Large"],
    description: "Casual shorts perfect for summer wear, offering comfort and style in one."
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    category: "Shirts",
    price: 212,
    discount: "-20%",
    rating: 4.4,
    reviews: 210,
    image: "/products/p1.png",
    thumbnails: ["/products/p1.png", "/products/p1.png","/products/p1.png"],
    color: ["green"],
    size: ["Medium", "Large", "X-Large"],
    description: "Vertical striped shirt designed for a sleek look, suitable for casual and semi-formal events."
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    category: "T-shirts",
    price: 145,
    oldPrice: 182,
    rating: 4.0,
    reviews: 105,
    image: "/products/p2.png",
    thumbnails: ["/products/p2.png", "/products/p2.png","/products/p2.png"],
    color: ["orange", "yellow"],
    size: ["X-Small", "Small", "Medium"],
    description: "Courage graphic T-shirt with eye-catching design and a soft, comfortable feel."
  },
];

export default function NewArrivals() {
  return (
    <section  id="new-arrivals" className="py-2 mb-10 ">
      <div className=" md:max-w-[clamp(360px,90%,1400px)] mx-auto px-4 text-center">
        <h2 className="font-extrabold uppercase text-[clamp(1.6rem,3.1vw,9rem)] mb-8">
        NEW ARRIVALS
        </h2>

        {/* Swiper only for <480px, grid for larger */}
        <div className=" sm:hidden">
          <Swiper
            spaceBetween={2}
            slidesPerView={1.7}
            loop={true}
            autoplay={{
              delay: 2000, // 2s delay
              disableOnInteraction: false, // keep running after swipe
            }}
            modules={[Autoplay]}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Normal grid for >=480px */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>


     
 
  <div className="mt-8 sm:flex sm:justify-center items-center mx-6 ">
     <Link
  href={{
    pathname: "/casual",
    query: { from: "New Arrivals" }, // Pass the source here
  }}
  passHref
>
 <button className="  border border-gray-300 font-satoshi font-light text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 
   w-full  sm:w-[220px]  ">
    View All
  </button>
</Link>


        </div> 
      

      <div className="w-full border-b border-gray-300 mt-14"></div>

    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="relative w-[93%] sm:w-full h-[12rem] sm:h-[16rem] lg:h-[18rem]">
        
      <Link href={`/productdetails/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-3xl"
        />
        </Link>
      </div>

      <div className="p-3 flex flex-col items-start text-left h-[7rem] sm:h-36">
        <h3 className="text-[clamp(0.9rem,2.2vw,1.2rem)] font-Satoshi font-Medium   w-full  h-[1.3rem] sm:h-[1.2rem] md:h-[1.9rem]">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 h-[1.79rem] sm:h-[1.75rem] md:h-[1.9rem]">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`${
                i < product.rating ? "text-yellow-400" : "text-gray-300"
              } text-[clamp(1rem,2.5vw,2rem)]`}
            >
              ★
            </span>
          ))}
           <span className="text-[clamp(0.6rem,1.5vw,0.875rem)] font-satoshi symbol text-gray-600">
  <span className="font-sans">{product.rating}</span>/5
</span>
        </div>

        <div className="mt-4 h-[1.5rem] sm:h-[2rem] md:h-[1.9rem] flex items-center gap-2 ">
          {product.oldPrice ? (
            <>
              <span className="text-black text-[clamp(0.7rem,3vw,1.6rem)] font-Satoshi font-bold">
                ${product.price}
              </span>
              <span className="line-through text-gray-400 text-[clamp(0.7rem,3vw,1.6rem)] font-Satoshi font-bold">
                ${product.oldPrice}
              </span>
              <span className="bg-red-100 text-red-500 font-Satoshi font-Medium px-3 py-1 rounded-full text-[clamp(0.4rem,2vw,0.6rem)]">
                {Math.round(
                  ((Number(product.oldPrice) - Number(product.price)) /
                    Number(product.oldPrice)) *
                    100
                )}
                %
              </span>
            </>
          ) : (
            <span className="text-black font-Satoshi font-bold text-[clamp(0.7rem,3vw,1.6rem)]">
              ${product.price}
            </span>
          )}
        </div>

      

      </div>
    </div>
  );
}






