



// // components/NewArrivals.tsx
// import Image from "next/image";
// import Link from "next/link";
// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   rating: number; // out of 5
//   price: string;
//   oldPrice?: number;// 20% higher
// };


// const products: Product[] = [
//   { id: 1, name: "Vertical Striped Shirt ", image: "/dress5.png", rating: 4, price: "49.99", oldPrice: 182 },
//   { id: 2, name: "Courage Graphic T-shirt", image: "/dress6.png", rating: 5, price: "59.99" },
//   { id: 3, name: "Loose Fit Bermuda Shorts", image: "/dress7.png", rating: 3, price: "39.99" },
//   { id: 4, name: "Faded Skinny Jeans", image: "/dress8.png", rating: 4, price: "44.99" },
// ];
// // const products: Product[] = [
// //   { id: 1, name: "Vertical Striped Shir ", image: "/dress5.png", rating: 4, price: "$49.99" },
// //   { id: 2, name: "Courage Graphic T-shirt", image: "/dress6.png", rating: 5, price: "$59.99" },
// //   { id: 3, name: "Loose Fit Bermuda Shorts", image: "/dress7.png", rating: 3, price: "$39.99" },
// //   { id: 4, name: "Faded Skinny Jeans", image: "/dress8.png", rating: 4, price: "$44.99" },
// // ];

// export default function NewArrivals() {
//   return (
//     <section className="py-2 mb-10">
//       <div className="max-w-[clamp(360px,90%,1400px)] mx-auto px-4 text-center">
//         <h2 className=" font-extrabold  uppercase  text-[clamp(1.2rem,2.6vw,6rem)] tracking-[0%]  mb-8">TOP SELECTION</h2>
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-lg  overflow-hidden "
//             >
//               {/* <div className="relative w-full aspect-[4/3]  h-[20rem]    rounded-2xl border border-green-900"> */}
//               {/* <div className="relative w-full h-[12rem] max-[340px]:h-[10rem] sm:h-[16rem]   rounded-full "> */}
//               <div className="relative w-full h-[12rem] max-[340px]:h-[10rem] sm:h-[16rem] lg:h-[18rem]  ">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-cover rounded-3xl"
//                 />
//               </div>




//               <div className="p-3 flex flex-col items-start text-left h-[7rem] sm:h-36">
//                 {/* Product name */}
//                 <h3 className="text-[clamp(0.75rem,2vw,1.125rem)] w-full  font-bold  h-[1.3rem] sm:h-[2rem]">
//                   {product.name}
//                 </h3>

//                 {/* Stars + rating */}
//                 <div className="flex items-center gap-1 h-[1.5rem] sm:h-[1.75rem]">
//                   {Array.from({ length: 5 }, (_, i) => (
//                     <span
//                       key={i}
//                       className={`${i < product.rating ? "text-yellow-400" : "text-gray-300"
//                         } text-[clamp(1rem,2.5vw,2rem)]`}
//                     >
//                       ★
//                     </span>

//                   ))}
//                   <span className="text-[clamp(0.6rem,1.5vw,0.875rem)] text-gray-600">
//                     {product.rating}/5
//                   </span>
//                 </div>

//                 {/* Price (always bottom) */}
//                 <div className="mt-auto h-[1.5rem] sm:h-[2rem] flex items-center gap-2 font-semibold">
//                   {product.oldPrice ? (
//                     <>
//                       {/* Discounted price */}
//                       <span className="text-black text-[clamp(0.7rem,3vw,1.2rem)]">
//                         $ {product.price}
//                       </span>

//                       {/* Original price */}
//                       <span className="line-through text-gray-400 text-[clamp(0.7rem,3vw,1.2rem)]">
//                         ${product.oldPrice}
//                       </span>

//                       {/* % Off badge */}
//                       <span className="bg-red-100 text-red-500 font-medium px-2 py-0.5 rounded-full text-[clamp(0.4rem,2vw,0.7rem)]">
//                         {Math.round(((Number(product.oldPrice) - Number(product.price)) / Number(product.oldPrice)) * 100)}%
//                       </span>

//                     </>
//                   ) : (
//                     <span className="text-black text-[clamp(0.7rem,3vw,1.2rem)]">
//                       ${product.price}
//                     </span>
//                   )}
//                 </div>

//               </div>

//             </div>
//           ))}
//         </div>

//       </div>





//       {/* <div className="mt-2">
//             <Link href="/casual" passHref>
//          <button className="border border-gray-300 font-normal text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 w-full sm:w-48">
//    View All
//  </button>
//  </Link>

//         </div> */}
//       <div className="w-full border-b border-gray-300 mt-14"></div>
//     </section>
//   );
// }





//780




// "use client";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import Link from "next/link";

// export type Product = {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   oldPrice?: number;
//   discount?: string;
//   rating: number;
//   reviews: number;
//   image: string;
//   thumbnails: string[];
//   color: string[];
//   size: string[];
//   description: string; // ✅ added
// };

// const products: Product[] = [
//   // { id: 1, name: "Vertical Striped Shirt ", image: "/dress5.png", rating: 4, price: "49.99", oldPrice: 182 },
//   // { id: 2, name: "Courage Graphic T-shirt", image: "/dress6.png", rating: 5, price: "59.99" },
//   // { id: 3, name: "Loose Fit Bermuda Shorts", image: "/dress7.png", rating: 3, price: "39.99" },
//   // { id: 4, name: "Faded Skinny Jeans", image: "/dress8.png", rating: 4, price: "44.99" },
//   {
//     id: 1,
//     name: "Gradient Graphic T-shirt",
//     category: "T-shirts",
//     price: 145,
//     oldPrice: 182, // 20% higher
//     rating: 4.9,
//     reviews: 1355,
//     image: "/pic3.png",
//     thumbnails: ["/pic3.png", "/pic3.png", "/pic3.png"],
//     color: ["gray", "blue"],
//     size: ["Small", "Medium", "Large"],
//     description: "A stylish gradient T-shirt made from soft, breathable cotton for ultimate comfort."
//   },
//   {
//     id: 2,
//     name: "Polo with Tipping Details",
//     category: "shirt",
//     price: 180,
//     oldPrice: 225, // 20% higher
//     rating: 4.8,
//     reviews: 455,
//     image: "/pic2.png",
//     thumbnails: ["/pic2.png", "/pic2.png","/pic2.png"],
//     color: ["pink"],
//     size: ["Medium", "Large", "X-Large"],
//     description: "Classic polo shirt with subtle tipping details. Perfect for casual and semi-formal wear."
//   },
//   {
//     id: 3,
//     name: "Black Striped T-shirt",
//     category: "T-shirts",
//     price: 120,
//     oldPrice: 160,
//     discount: "-25%",
//     rating: 4.7,
//     reviews: 568,
//     image: "/pic1.png",
//     thumbnails: ["/pic1.png", "/pic1.png", "/pic1.png"],
//     color: ["black"],
//     size: ["X-Small", "Small", "Medium"],
//     description: "Black striped T-shirt that combines casual style with comfort for everyday wear."
//   },
//   {
//     id: 4,
//     name: "Skirt",
//     category: "Jeans",
//     price: 240,
//     oldPrice: 260,
//     discount: "-20%",
//     rating: 4.6,
//     reviews: 180,
//     image: "/products/p1.png",
//     thumbnails: ["/products/p1.png", "/products/p1.png","/products/p1.png"],
//     color: ["green", "blue"],
//     size: ["Small", "Medium", "Large", "X-Large"],
//     description: "Elegant skirt with comfortable fit, ideal for casual outings or office wear."
//   },
// ];

// export default function NewArrivals() {
//   return (
//     <section  id="on-sale" className="py-2 mb-10">
//       <div className="max-w-[clamp(360px,90%,1400px)] mx-auto px-4 text-center">
//         <h2 className="font-extrabold uppercase text-[clamp(1.2rem,2.6vw,6rem)] mb-8">
//           TOP SELECTION
//         </h2>

//         {/* Swiper only for <480px, grid for larger */}
//         <div className=" sm:hidden">
//           <Swiper
//             spaceBetween={2}
//             slidesPerView={1.7}
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


     
 
//   <div className="mt-2 sm:flex sm:justify-center items-center mx-6 ">
//      <Link
//   href={{
//     pathname: "/casual",
//     query: { from: "Top Seller" }, // Pass the source here
//   }}
//   passHref
// >
//   <button className=" border border-gray-300 font-normal text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300  w-full  sm:w-[300px]  ">
//     View All
//   </button>
// </Link>


//         </div> 
      

//       <div className="w-full border-b border-gray-300 mt-14"></div>

//     </section>
//   );
// }

// function ProductCard({ product }: { product: Product }) {
//   return (
//     <div className="bg-white rounded-lg overflow-hidden">
//       <div className="relative w-[90%] sm:w-full h-[12rem] sm:h-[16rem] lg:h-[18rem]">
        
//       <Link href={`/productdetails/${product.id}`}>
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           className="object-cover rounded-3xl"
//         />
//         </Link>
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
    id: 1,
    name: "Gradient Graphic T-shirt",
    category: "T-shirts",
    price: 145,
    oldPrice: 182, // 20% higher
    rating: 4.9,
    reviews: 1355,
    image: "/pic3.png",
    thumbnails: ["/pic3.png", "/pic3.png", "/pic3.png"],
    color: ["gray", "blue"],
    size: ["Small", "Medium", "Large"],
    description: "A stylish gradient T-shirt made from soft, breathable cotton for ultimate comfort."
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    category: "shirt",
    price: 180,
    oldPrice: 225, // 20% higher
    rating: 4.8,
    reviews: 455,
    image: "/pic2.png",
    thumbnails: ["/pic2.png", "/pic2.png","/pic2.png"],
    color: ["pink"],
    size: ["Medium", "Large", "X-Large"],
    description: "Classic polo shirt with subtle tipping details. Perfect for casual and semi-formal wear."
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    category: "T-shirts",
    price: 120,
    oldPrice: 160,
    discount: "-25%",
    rating: 4.7,
    reviews: 568,
    image: "/pic1.png",
    thumbnails: ["/pic1.png", "/pic1.png", "/pic1.png"],
    color: ["black"],
    size: ["X-Small", "Small", "Medium"],
    description: "Black striped T-shirt that combines casual style with comfort for everyday wear."
  },
  {
    id: 4,
    name: "Skirt",
    category: "Jeans",
    price: 240,
    oldPrice: 260,
    discount: "-20%",
    rating: 4.6,
    reviews: 180,
    image: "/products/p1.png",
    thumbnails: ["/products/p1.png", "/products/p1.png","/products/p1.png"],
    color: ["green", "blue"],
    size: ["Small", "Medium", "Large", "X-Large"],
    description: "Elegant skirt with comfortable fit, ideal for casual outings or office wear."
  },
];

export default function NewArrivals() {
  return (
    <section  id="on-sale" className="py-2 mb-10 ">
      <div className=" md:max-w-[clamp(360px,90%,1400px)] mx-auto px-4 text-center">
        <h2 className="  uppercase text-[clamp(1.6rem,2.6vw,6rem)] mb-8 ">
        TOP SELLINGS  
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


     
 
  <div className="mt-2 sm:flex sm:justify-center items-center mx-6 ">
     <Link
  href={{
    pathname: "/casual",
    query: { from: "New Arrivals" }, // Pass the source here
  }}
  passHref
>
  <button className=" border border-gray-300 font-satoshi font-light text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 
   w-full  sm:w-[230px]  ">
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
        <h3 className="text-[clamp(0.75rem,2vw,1.125rem)]  font-Satoshi font-extrabold   w-full  h-[1.3rem] sm:h-[2rem]">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 h-[1.5rem] sm:h-[1.75rem] ">
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

        <div className="mt-auto h-[1.5rem] sm:h-[2rem] flex items-center gap-2 font-Satoshi font-extrabold">
          {product.oldPrice ? (
            <>
              <span className="text-black text-[clamp(0.7rem,3vw,1.2rem)] font-satoshi font-light">
                ${product.price}
              </span>
              <span className="line-through text-gray-400 text-[clamp(0.7rem,3vw,1.2rem)] font-satoshi font-light">
                ${product.oldPrice}
              </span>
              <span className="bg-red-100 text-red-500 font-satoshi font-light px-2 py-0.5 rounded-full text-[clamp(0.4rem,2vw,0.7rem)] font-satoshi font-light">
                {Math.round(
                  ((Number(product.oldPrice) - Number(product.price)) /
                    Number(product.oldPrice)) *
                    100
                )}
                %
              </span>
            </>
          ) : (
            <span className="text-black  font-satoshi font-light   text-[clamp(0.7rem,3vw,1.2rem)]">
              ${product.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}






