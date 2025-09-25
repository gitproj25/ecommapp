// "use client";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   rating: number; // out of 5
//   price: string;
//   oldPrice?: number; // 20% higher
// };

// const products: Product[] = [
//   { id: 1, name: "Vertical Striped Shirt ", image: "/dress5.png", rating: 4, price: "49.99", oldPrice: 182 },
//   { id: 2, name: "Courage Graphic T-shirt", image: "/dress6.png", rating: 5, price: "59.99" },
//   { id: 3, name: "Loose Fit Bermuda Shorts", image: "/dress7.png", rating: 3, price: "39.99" },
//   { id: 4, name: "Faded Skinny Jeans", image: "/dress8.png", rating: 4, price: "44.99" },
// ];

// export default function NewArrivals() {
//   return (
//     <section className="py-2 mb-10">
//       <div className="max-w-[clamp(360px,90%,1400px)] mx-auto px-4 text-center">
//         <h2 className="font-extrabold uppercase text-[clamp(1.2rem,2.6vw,6rem)] mb-8">
//           TOP SELECTION
//         </h2>

//         {/* Swiper only for <480px, grid for larger */}
//         <div className="block sm:hidden">
//           <Swiper
//             spaceBetween={20}
//             slidesPerView={1.2}
//             loop={true}
//             autoplay={{
//               delay: 2000, // 2s delay
//               disableOnInteraction: false, // keep running after swipe
//             }}
//             modules={[Autoplay]}
//           >
//             {products.map((product) => (
//               <SwiperSlide key={product.id}>
//                 <ProductCard product={product} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Normal grid for >=480px */}
//         <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>

//       <div className="w-full border-b border-gray-300 mt-14"></div>
//     </section>
//   );
// }

// function ProductCard({ product }: { product: Product }) {
//   return (
//     <div className="bg-white rounded-lg overflow-hidden">
//       <div className="relative w-[80%] sm:w-full h-[12rem] sm:h-[16rem] lg:h-[18rem]">
        
   
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           className="object-cover rounded-3xl"
//         />
//       </div>

//       <div className="p-3 flex flex-col items-start text-left h-[7rem] sm:h-36">
//         <h3 className="text-[clamp(0.75rem,2vw,1.125rem)] w-full font-bold h-[1.3rem] sm:h-[2rem]">
//           {product.name}
//         </h3>

//         <div className="flex items-center gap-1 h-[1.5rem] sm:h-[1.75rem]">
//           {Array.from({ length: 5 }, (_, i) => (
//             <span
//               key={i}
//               className={`${
//                 i < product.rating ? "text-yellow-400" : "text-gray-300"
//               } text-[clamp(1rem,2.5vw,2rem)]`}
//             >
//               ★
//             </span>
//           ))}
//           <span className="text-[clamp(0.6rem,1.5vw,0.875rem)] text-gray-600">
//             {product.rating}/5
//           </span>
//         </div>

//         <div className="mt-auto h-[1.5rem] sm:h-[2rem] flex items-center gap-2 font-semibold">
//           {product.oldPrice ? (
//             <>
//               <span className="text-black text-[clamp(0.7rem,3vw,1.2rem)]">
//                 ${product.price}
//               </span>
//               <span className="line-through text-gray-400 text-[clamp(0.7rem,3vw,1.2rem)]">
//                 ${product.oldPrice}
//               </span>
//               <span className="bg-red-100 text-red-500 font-medium px-2 py-0.5 rounded-full text-[clamp(0.4rem,2vw,0.7rem)]">
//                 {Math.round(
//                   ((Number(product.oldPrice) - Number(product.price)) /
//                     Number(product.oldPrice)) *
//                     100
//                 )}
//                 %
//               </span>
//             </>
//           ) : (
//             <span className="text-black text-[clamp(0.7rem,3vw,1.2rem)]">
//               ${product.price}
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }