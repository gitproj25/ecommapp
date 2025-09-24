// "use client";

// import { useState } from "react";
// import Image from "next/image";

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   oldPrice?: number;
//   discount?: string;
//   rating: number;
//   reviews: number;
//   image: string;
// };

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Gradient Graphic T-shirt",
//     price: 145,
//     rating: 4.9,
//     reviews: 1355,
//     image: "/p1.png",
//   },
//   {
//     id: 2,
//     name: "Polo with Tipping Details",
//     price: 180,
//     rating: 4.8,
//     reviews: 455,
//     image: "/p2.png",
//   },
//   {
//     id: 3,
//     name: "Black Striped T-shirt",
//     price: 120,
//     oldPrice: 160,
//     discount: "-25%",
//     rating: 4.7,
//     reviews: 568,
//     image: "/p3.png",
//   },
//   {
//     id: 4,
//     name: "Skinny Fit Jeans",
//     price: 240,
//     oldPrice: 260,
//     discount: "-20%",
//     rating: 4.6,
//     reviews: 180,
//     image: "/p4.png",
//   },
//   {
//     id: 5,
//     name: "Checkered Shirt",
//     price: 180,
//     rating: 4.6,
//     reviews: 375,
//     image: "/p5.png",
//   },
//   {
//     id: 6,
//     name: "Sleeve Striped T-shirt",
//     price: 130,
//     oldPrice: 160,
//     discount: "-30%",
//     rating: 4.5,
//     reviews: 520,
//     image: "/p6.png",
//   },
//   {
//     id: 7,
//     name: "Vertical Striped Shirt",
//     price: 212,
//     oldPrice: 232,
//     discount: "-20%",
//     rating: 4.4,
//     reviews: 210,
//     image: "/p7.png",
//   },
//   {
//     id: 8,
//     name: "Courage Graphic T-shirt",
//     price: 145,
//     rating: 4.0,
//     reviews: 105,
//     image: "/p8.png",
//   },
//   {
//     id: 9,
//     name: "Loose Fit Bermuda Shorts",
//     price: 80,
//     rating: 4.3,
//     reviews: 335,
//     image: "/p9.png",
//   },
// ];

// export default function ProductsPage() {
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);

//   return (
//     <section className="w-full max-w-[1440px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
//       {/* Filters Sidebar */}
//       <aside className="md:col-span-1 border rounded-lg p-4 space-y-6">
//         <div>
//           <h3 className="font-bold text-lg mb-2">Filters</h3>
//           <ul className="space-y-1 text-sm text-gray-700">
//             <li>T-shirts</li>
//             <li>Shirts</li>
//             <li>Hoodies</li>
//             <li>Jeans</li>
//           </ul>
//         </div>

//         {/* Price Range */}
//         <div>
//           <h4 className="font-semibold mb-2">Price</h4>
//           <input type="range" min={0} max={300} className="w-full" />
//         </div>

//         {/* Colors */}
//         <div>
//           <h4 className="font-semibold mb-2">Colors</h4>
//           <div className="flex gap-2 flex-wrap">
//             {["red", "blue", "green", "yellow", "purple", "black"].map(
//               (c, i) => (
//                 <button
//                   key={i}
//                   className={`w-6 h-6 rounded-full border`}
//                   style={{ backgroundColor: c }}
//                 ></button>
//               )
//             )}
//           </div>
//         </div>

//         {/* Sizes */}
//         <div>
//           <h4 className="font-semibold mb-2">Size</h4>
//           <div className="flex flex-wrap gap-2">
//             {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
//               <button
//                 key={size}
//                 onClick={() => setSelectedSize(size)}
//                 className={`px-3 py-1 border rounded-full text-sm ${
//                   selectedSize === size
//                     ? "bg-black text-white"
//                     : "bg-white text-black"
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         <button className="w-full bg-black text-white rounded-full py-2 hover:bg-gray-900">
//           Apply Filter
//         </button>
//       </aside>

//       {/* Products Grid */}
//       <main className="md:col-span-3">
//         <h2 className="text-2xl font-bold mb-6">Casual</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//           {products.map((product) => (
           
//           ))}
//         </div>
//       </main>
//     </section>
//   );
// }
