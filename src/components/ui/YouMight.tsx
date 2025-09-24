




// components/NewArrivals.tsx
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  image: string;
  rating: number; // out of 5
  price: string;
};
interface YouMightProps {
  prod: any[];  // array of product objects
}

const products: Product[] = [
  { id: 1, name: "Vertical Striped Shirt ", image: "/bluetshirt.png", rating: 4, price: "$49.99" },
  { id: 2, name: "Courage Graphic T-shirt", image: "/pic3.png", rating: 5, price: "$59.99" },
  { id: 3, name: "Loose Fit Bermuda Shorts", image: "/pic2.png", rating: 3, price: "$39.99" },
  { id: 4, name: "Faded Skinny Jeans", image: "/pic1.png", rating: 4, price: "$44.99" },
];

export default function NewArrivals({ prod }: YouMightProps) {
  //  if (!prod || prod.length === 0) {
  //   return null; // ✅ Don't render anything if no products
  // }
  return (
    <section className="py-2 mb-40   ">
      <div className="max-w-[clamp(360px,90%,1400px)] mx-auto px-4 text-center">
        <h2 className=" font-extrabold  uppercase  text-[clamp(1.2rem,2.6vw,6rem)] tracking-[0%]  mb-8">You Might Also Like It</h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {prod.map((product) => (
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
      <span className="text-black text-[clamp(1rem,3vw,1.5rem)]">
        ${product.price}
      </span>

      {/* Original price */}
      <span className="line-through text-gray-400 text-[clamp(1rem,3vw,1.5rem)]">
        ${product.oldPrice}
      </span>

      {/* % Off badge */}
      <span className="bg-red-100 text-red-500 font-medium px-2 py-0.5 rounded-full text-[clamp(0.7rem,2vw,0.9rem)]">
        {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
      </span>
    </>
  ) : (
    <span className="text-black text-[clamp(1rem,3vw,1.5rem)]">
      ${product.price}
    </span>
  )}
</div>

</div>

            </div>
          ))}
        </div>
         
      </div>
    </section>
  );
}

