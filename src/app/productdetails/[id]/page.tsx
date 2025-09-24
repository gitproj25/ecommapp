"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Plus, Minus } from "lucide-react";
import Tabs from "../../../components/ui/Tabs";
import YouMight from "../../../components/ui/YouMight";
import { useParams } from "next/navigation";
import { products } from "../../../data/data";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/store"; // your root reducer
import { addToCart, decreaseQuantity, removeFromCart } from "../../../redux/store/cartslice";
import { useRouter } from "next/navigation"; // for App Router
import Link from "next/link";
import { toast } from "react-toastify";
export default function ProductDetails() {
  const { id } = useParams(); // ✅ get id from URL
  const product = products.find((p) => p.id.toString() === id); // ✅ match product
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
 const router = useRouter(); // get router

 



  const [selectedColor, setSelectedColor] = useState(product?.color?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.size?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.image || "");

  if (!product) {
    return <p className="text-center py-10">Product not found</p>;
  }
  const cartItem = cartItems.find(
  (item) =>
    item.id === product.id &&
    item.selectedColor === selectedColor &&
    item.selectedSize === selectedSize
);
// final quantity (cart already has some? add it to new quantity)
const finalQuantity = (cartItem?.quantity || 0) + quantity;
console.log("🛒 Cart Items:", cartItems);

// Get recommended products (same category, max 4 products)
const recommendedProducts = products
  .filter(p => p.id !== product.id && p.category === product.category) // exclude current
  .slice(0, 4); // only 4 products


  return (
    <>
      <section className="w-full max-w-[clamp(360px,92%,2140px)] h-auto mx-auto px-2 md:px-6 py-10 ">
          {/* Breadcrumbs */}
<div className="w-full md:w-1/2 mb-4">
  <nav className="text-gray-500 text-sm flex gap-2">
     <Link href="/">
    <span className="cursor-pointer hover:underline">Home</span>
    </Link>
    <span>/</span>
    <Link href="/casual">
    <span className="cursor-pointer hover:underline">Products</span>
    </Link>
    <span>/</span>
    <span className="text-black font-medium">{product.name}</span>
  </nav>
</div>
        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[clamp(20rem,33vw,40rem)]">
          {/* Left Section: Images */}


  <div className="w-full md:w-1/2 flex sm:flex-row flex-col gap-2  h-[50%] md:h-auto lg:gap-4 justify-between">
    {/* Right (Main Image) */}
  
    <div className=" flex flex-col sm:w-[75%] sm:order-1">
      <img
        src={mainImage}
        alt={product.name}
           // required for Next.js Image
        className="w-full h-[300px] sm:h-full  rounded-lg  object-cover"
      />
   
  </div>
  {/* Left (Thumbnails) */}
  <div className="w-full sm:w-[25%] flex sm:flex-col justify-between flex-row gap-2 ">
    {product?.thumbnails?.slice(0, 3).map((thumb, i) => (
      <div
        key={i}
        onClick={() => setMainImage(thumb)}
        className="
          w-full  /* responsive width */
          h-full                /* keep thumbnails square */
          sm:w-full sm:flex-1           /* medium+ screens stretch vertically */
          cursor-pointer  rounded-lg overflow-hidden
        "
      >
        <img
          src={thumb}
          alt={`Thumbnail ${i + 1}`}
             // required for Next.js Image
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>


</div>



          {/* Right Section: Product Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-between  h-[clamp(20rem,33vw,40rem)] md:h-auto ">


          <div className="">
      <p className="font-extrabold uppercase text-[clamp(1.2rem,2vw,6rem)] lg:text-[clamp(1.2rem,2.6vw,9rem)] ">
  {product.name}
</p>


            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="text-yellow-500 lg:text-[clamp(1rem,2vw,12rem)]">★★★★★</div>
              <div className="text-gray-500 text-[clamp(0.75rem,2vw,1rem)]">
                {product.rating}
              </div>
            </div>

            {/* Price */}
    <div className="flex items-center gap-3">
  {/* Discounted Price */}
  <span className="text-[clamp(0.75rem,2vw,1rem)] lg:text-[clamp(0.5rem,3vw,1.5rem)] font-semibold">
    ${product.price} {/* discounted price */}
  </span>

  {/* Old Price */}
  {product.oldPrice && (
    <span className="line-through text-gray-400 text-[clamp(0.75rem,2vw,1rem)] lg:text-[clamp(0.5rem,3vw,1.5rem)]">
      ${product.oldPrice} {/* original price */}
    </span>
  )}

  {/* Discount Percentage */}
  {product.oldPrice && (
    <span className="bg-[#FF33331A] text-red-400 font-normal text-[clamp(0.75rem,1.5vw,1rem)] lg:text-[clamp(0.5rem,3vw,1rem)] px-2 py-1 rounded-full">
      -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
    </span>
  )}
</div>
 {/* Description */}
        <p className="text-semiBlack font-Satoshi text-[clamp(0.8rem,1vw,1rem)] lg:text-[clamp(0.8rem,1.8vw,1rem)]">
  {product.description}
</p>

          </div>
          <div className="border-b border-gray-200 "></div>
        


            {/* Colors */}
                <div>
              <h3 className="text-semiBlack font-normal text-[clamp(0.8rem,1vw,1rem)] lg:text-[clamp(0.8rem,1.8vw,1rem)] mb-2">Select Colors</h3>
              <div className="flex gap-3">
                {product.color?.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`xl:h-9 xl:w-9 w-6 h-6  rounded-full border-2 flex items-center justify-center ${
                      selectedColor === color ? "border-black" : "border-gray-300"
                    }`}
                  >
                    {selectedColor === color && <Check className="lg:w-4 lg:h-4 w-3 h-3 text-white" />}
                  </button>
                ))}
              </div>
              </div>
           
            <div className="border-b border-gray-200 "></div>

            {/* Sizes */}
            <div>
              <h3 className="font-normal text-semiBlack text-[clamp(0.8rem,1vw,1rem)] lg:text-[clamp(0.8rem,1.8vw,1rem)]  mb-1 lg:mb-2">Choose Size</h3>
              <div className="flex gap-3 flex-wrap">
                {product.size?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`xl:px-5 xl:py-3  py-1 px-3 text-[clamp(0.8rem,1vw,1rem)] lg:text-[clamp(0.8rem,1.8vw,1rem)] rounded-full border  font-normal ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-gray-100 text-gray-600 border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              
            </div></div>
            <div className="border-b border-gray-200 "></div>

            {/* Quantity + Cart */}
            <div className="flex items-start justify-start  gap-2  ">
              <div className="flex items-center bg-gray-100 rounded-full py-2 px-7 lg:px-12 lg:py-2">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                  <Minus className="w-4 h-4 xl:w-5 xl:h-5" />
                </button>
                <span className="px-3 text-sm sm:text-base md:text-lg">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)}>
                  <Plus className="w-4 h-4 xl:w-5 xl:h-5" />
                </button>
              </div>

   <button
  onClick={() => {
    // Add product to cart
dispatch(
  addToCart({
    ...product,
    selectedColor,
    selectedSize,
    quantity,
   discount: "20" ,// number
    price: product.price,
    discountPrice: product.price - (product.price * 20) / 100
  })
);
 // toast.success("Item added to cart! 🎉");  // success toast

    // Navigate to cart page  sm:w-[clamp(160px,50%,350px)]
    router.push("/cart");
  }}
  className="w-[clamp(140px,60%,300px)] text-[clamp(0.8rem,1vw,1rem)] lg:text-[clamp(0.8rem,1.8vw,1rem)] lg:w-full  bg-black text-white  py-2 xl:py-2 rounded-full font-semibold "
>
  Add to Cart
</button>


            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Tabs />

    <YouMight prod={recommendedProducts} />
    </>
  );
}
