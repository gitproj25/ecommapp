// // components/NewArrivals.tsx
// import Image from "next/image";

// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   rating: number; // out of 5
//   price: string;
// };

// const products: Product[] = [
//   { id: 1, name: "T-Shirt with Tape Details ", image: "/dress1.png", rating: 4, price: "$49.99" },
//   { id: 2, name: "Skinny Fit Jeans", image: "/dress2.png", rating: 5, price: "$59.99" },
//   { id: 3, name: "Checkered Shirt", image: "/dress3.png", rating: 3, price: "$39.99" },
//   { id: 4, name: "Sleeve Striped T-Shirt", image: "/dress4.png", rating: 4, price: "$44.99" },
// ];

// export default function NewArrivals() {
//   return (
//     <section className="py-10 bg-gray-50">
//       <div className="max-w-[clamp(360px,90%,1400px)] mx-auto px-4 text-center">
//         <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-Roboto font-[700] mb-8">NEW ARRIVALS</h2>
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-lg  overflow-hidden "
//             >
//               {/* <div className="relative w-full aspect-[4/3]  h-[20rem]    rounded-2xl border border-green-900"> */}
//               <div className="relative w-full h-[12rem] max-[340px]:h-[10rem] sm:h-[16rem]  rounded-4xl">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               {/* <div className="p-4 text-center"> */}
//               <div className="p-3 flex flex-col items-start text-left  h-[6.5rem]  sm:h-32">
//                 {/* Product name */}
//                 <h3 className="text-[clamp(0.6rem,2.5vw,1.25rem)] mb-1 font-medium line-clamp-2">
//                   {product.name}
//                 </h3>

//                 {/* Stars + rating */}
//                 <div className="flex justify-center mb-1 gap-1">
//                   {Array.from({ length: 5 }, (_, i) => (
//                     <span
//                       key={i}
//                       className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
//                     >
//                       ★
//                     </span>
//                   ))}
//                   <span className="text-[clamp(0.6rem,2vw,0.875rem)] text-gray-600">
//                     {product.rating}/5
//                   </span>
//                 </div>

//                 {/* Price (always bottom) */}
//                 <p className="mt-auto text-[clamp(0.875rem,3vw,1.5rem)] font-semibold">
//                   {product.price}
//                 </p>
//               </div>





//             </div>
//           ))}
//         </div>
//         {/* View All Button */}
//         <div className="mt-8">
//           <button className="border border-gray-300 font-normal text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 w-full sm:w-48">
//             View All
//           </button>

//         </div>
//       </div>

//       {/* <div className="border-b border-[#0000001A] pb-2 pt-10 max-w-[clamp(360px,92%,2140px)]  "> */}
//       <div className="border-b border-[#0000001A] pb-2 pt-10 max-w-[clamp(360px,92%,2140px)]   mx-auto">
//       </div>

//     </section>
//   );
// }










// // components/NewArrivals.tsx
// import Image from "next/image";

// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   rating: number; // out of 5
//   price: string;
// };

// const products: Product[] = [
//   { id: 1, name: "Vertical Striped Shir ", image: "/dress5.png", rating: 4, price: "$49.99" },
//   { id: 2, name: "Courage Graphic T-shirt", image: "/dress6.png", rating: 5, price: "$59.99" },
//   { id: 3, name: "Loose Fit Bermuda Shorts", image: "/dress7.png", rating: 3, price: "$39.99" },
//   { id: 4, name: "Faded Skinny Jeans", image: "/dress8.png", rating: 4, price: "$44.99" },
// ];

// export default function NewArrivals() {
//   return (
//     <section className="py-10 bg-gray-50">
//       <div className="max-w-[clamp(360px,90%,1400px)] mx-auto px-4 text-center">
//         <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-Roboto font-[700] mb-8">TOP ARRIVALS</h2>
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-lg  overflow-hidden "
//             >
//               {/* <div className="relative w-full aspect-[4/3]  h-[20rem]    rounded-2xl border border-green-900"> */}
//               <div className="relative w-full h-[12rem] max-[340px]:h-[10rem] sm:h-[16rem]   rounded-3xl ">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               {/* <div className="p-4 text-center"> */}
//                 <div className="p-3 flex flex-col items-start text-left  h-[6.5rem] sm:h-32">
//   {/* Product name */}
//   <h3 className="text-[clamp(0.6rem,2.5vw,1.25rem)] mb-1 font-medium line-clamp-2">
//     {product.name}
//   </h3>

//   {/* Stars + rating */}
//   <div className="flex justify-center mb-1 gap-1">
//     {Array.from({ length: 5 }, (_, i) => (
//       <span
//         key={i}
//         className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
//       >
//         ★
//       </span>
//     ))}
//     <span className="text-[clamp(0.6rem,2vw,0.875rem)] text-gray-600">
//       {product.rating}/5
//     </span>
//   </div>

//   {/* Price (always bottom) */}
//   <p className="mt-auto text-[clamp(1rem,3vw,1.5rem)] font-semibold">
//     {product.price}
//   </p>
// </div>
//             </div>
//           ))}
//         </div>
//           {/* View All Button */}
//         <div className="mt-8">
//          <button className="border border-gray-300 font-normal text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 w-full sm:w-48">
//   View All
// </button>

//         </div>
//       </div>
//     </section>
//   );
// }









// components/NewArrivals.tsx
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  image: string;
  rating: number; // out of 5
  price: string;
  oldPrice?: number;// 20% higher
};


const products: Product[] = [
  { id: 1, name: "Vertical Striped Shirt ", image: "/bluetshirt.png", rating: 4, price: "49.99"},
  { id: 2, name: "Courage Graphic T-shirt", image: "/pic3.png", rating: 5, price: "59.99", oldPrice: 182 },
  { id: 3, name: "Loose Fit Bermuda Shorts", image: "/pic2.png", rating: 3, price: "39.99" },
  { id: 4, name: "Faded Skinny Jeans", image: "/pic1.png", rating: 4, price: "44.99", oldPrice: 182 },
];

export default function NewArrivals() {
  return (
    <section className="py-4 mb-10   ">
      <div className="max-w-[clamp(360px,90%,1400px)] mx-auto px-4 text-center">
        <h2 className=" font-extrabold  uppercase  text-[clamp(1.2rem,2.6vw,6rem)] tracking-[0%]  mb-8">NEW ARRIVALS</h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg  overflow-hidden "
            >
              {/* <div className="relative w-full aspect-[4/3]  h-[20rem]    rounded-2xl border border-green-900"> */}
              {/* <div className="relative w-full h-[12rem] max-[340px]:h-[10rem] sm:h-[16rem]   rounded-full "> */}
                <div className="relative w-full h-[12rem] max-[340px]:h-[10rem] sm:h-[16rem] lg:h-[18rem]  ">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              {/* <div className="p-4 text-center"> */}
                {/* <div className="p-3 flex flex-col items-start text-left  h-[6.5rem] sm:h-32"> */}
                


<div className="p-3 flex flex-col items-start text-left h-[7rem] sm:h-36">
  {/* Product name */}
  <h3 className="text-[clamp(0.75rem,2vw,1.125rem)] w-full  font-bold  h-[1.3rem] sm:h-[2rem]">
    {product.name}
  </h3>

  {/* Stars + rating */}
  <div className="flex items-center gap-1 h-[1.5rem] sm:h-[1.75rem]">
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
    <span className="text-[clamp(0.6rem,1.5vw,0.875rem)] text-gray-600">
      {product.rating}/5
    </span>
  </div>

  {/* Price (always bottom) */}
  <div className="mt-auto h-[1.5rem] sm:h-[2rem] flex items-center gap-2 font-semibold">
  {product.oldPrice ? (
    <>
      {/* Discounted price */}
      <span className="text-black text-[clamp(0.7rem,3vw,1.2rem)]">
       $ {product.price}
      </span>

      {/* Original price */}
      <span className="line-through text-gray-400 text-[clamp(0.7rem,3vw,1.2rem)]">
        ${product.oldPrice}
      </span>

      {/* % Off badge */}
      <span className="bg-red-100 text-red-500 font-medium px-2 py-0.5 rounded-full text-[clamp(0.4rem,2vw,0.7rem)]">
  {Math.round(((Number(product.oldPrice) - Number(product.price)) / Number(product.oldPrice)) * 100)}%
</span>

    </>
  ) : (
    <span className="text-black text-[clamp(0.7rem,3vw,1.2rem)]">
      ${product.price}
    </span>
  )}
</div>

</div>

            </div>
          ))}
        </div>

               <div className="mt-2">
         <button className="border border-gray-300 font-normal text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 w-full sm:w-48">
   View All
 </button>

        </div>
        <div className="w-full border-b border-gray-300 mt-14"></div>
         
      </div>
    </section>
  );
}

