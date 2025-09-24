


"use client";

import Image from "next/image";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Tag } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/store";
import { removeFromCart,increaseQuantity, decreaseQuantity, addToCart,clearCart } from "../../redux/store/cartslice";
import { Plus, Minus } from "lucide-react";

export default function CartPage() {
   const cartItems = useSelector((state: RootState) => state.cart.items);


const deliveryFee = 15;
  console.log("cartpage", cartItems);

  const dispatch = useDispatch();
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const totalDiscount = cartItems.reduce(
      (acc, item) => acc + ((item.price - (item.discountPrice || item.price)) * item.quantity),
      0
    );
const total = subtotal - totalDiscount + deliveryFee;

 // If cart is empty, show a message
  if (cartItems.length === 0) {
    return (
      <div className="sm:max-w-[clamp(360px,92%,2140px)] mt-10 mx-auto flex justify-center items-center  min-h-[400px] rounded-xl p-6">
        <p className="text-center text-gray-500 text-lg">
          🛒 Your cart is empty
        </p>
      </div>
    );
  }
  return (




<div className="sm:max-w-[clamp(360px,92%,2140px)] px-6 sm:px-6 mt-10 mx-auto flex flex-col gap-6 mb-60">
  {/* Breadcrumb + Heading (Full Width, aligned top) */}
  <div className="w-full flex flex-col gap-2 max-h-full">
    <nav className="text-sm text-gray-500 flex gap-2">
      <span className="cursor-pointer hover:text-black">Home</span>
      <span>/</span>
      <span className="cursor-pointer hover:text-black">Cart</span>
    </nav>
    <h1 className="font-extrabold uppercase text-[clamp(1.2rem,2vw,6rem)] lg:text-[clamp(1.2rem,2.6vw,9rem)] ">YOUR CART</h1>
  </div>

  {/* Left + Right Section (Aligned) <div className="border-b border-gray-200 "></div> */}
  {/* <div className="flex flex-col lg:flex-row gap-6"> */}
  <div className="flex flex-col lg:flex-row gap-6 items-start">
    {/* Left Section: Cart Items */}
    <div className="w-full lg:w-3/5 border rounded-3xl p-4 flex flex-col gap-4">
      {cartItems.map((item,index) => (
       <div
      key={item.id}
      className={`flex items-center justify-between sm:p-4 
        ${
          cartItems.length > 1 && index !== cartItems.length - 1
            ? "border-b border-gray-200 pb-4"
            : ""
        }`}
    >
          <div className="flex items-center gap-4 flex-1 ">
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="rounded-lg object-cover w-24 h-24 sm:w-32 sm:h-32"
            />

            <div className="flex flex-col flex-1 space-y-1 sm:space-y-1">
              <div className="flex justify-between">
                <h3 className="font-semibold text-[clamp(0.875rem,2vw,1.1rem)]">
                  {item.name}
                </h3>
                <button onClick={() => dispatch(clearCart())}>
                  <Image src="/delete.png" alt="delete" width={20} height={20} />
                </button>
              </div>

              <p className="font-thin text-[clamp(0.75rem,2vw,1rem)]">
                <span className="text-black">Size:</span>{" "}
                <span className="text-gray-500">{item.selectedSize}</span>
              </p>
              <p className="font-thin text-[clamp(0.75rem,2vw,1rem)] mt-1">
                <span className="text-black">Color:</span>{" "}
                <span className="text-gray-500">{item.selectedColor}</span>
              </p>

              <div className="flex justify-between items-center">
                <p className="font-bold text-[clamp(1.25rem,4vw,1.5rem)]">
                  ${item.price}
                </p>
                <div className="flex items-center border rounded-2xl bg-[#F0F0F0]">
                  <button
                    onClick={() =>
                      dispatch(
                        decreaseQuantity({
                          id: item.id,
                          selectedColor: item.selectedColor,
                          selectedSize: item.selectedSize,
                        })
                      )
                    }
                    className="sm:px-3 px-1 py-2"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        increaseQuantity({
                          id: item.id,
                          selectedColor: item.selectedColor,
                          selectedSize: item.selectedSize,
                        })
                      )
                    }
                    className="sm:px-3 px-1 py-2"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
    </div>

    {/* Right Section: Order Summary */}
    <div className="w-full lg:w-2/5 border rounded-xl p-6 self-start space-y-4">
      <h2 className="text-[clamp(1.4rem,3vw,1.6rem)] font-bold mb-4">
        Order Summary
      </h2>

      <div className="flex justify-between text-[clamp(0.75rem,2vw,1rem)]">
        <span className="text-gray-500 font-normal">Subtotal</span>
        <span className="text-black font-bold">${subtotal}</span>
      </div>

      <div className="flex justify-between text-[clamp(0.75rem,2vw,1rem)] text-red-500">
        <span className="text-gray-500 font-normal">Discount (-20%)</span>
       <span className="font-bold">-${totalDiscount.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-[clamp(0.75rem,2vw,1rem)]">
        <span className="text-gray-500 font-normal">Delivery Fee</span>
        <span>$15</span>
      </div>

      <div className="border-t my-2"></div>

      <div className="flex justify-between font-bold text-[clamp(0.75rem,2vw,1rem)]">
        <span className="text-black font-normal">Total</span>
        <span>{total}</span>
      </div>

      <div className="flex gap-2 mt-4">
        <div className="flex-1 relative">
          <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Add promo code"
            className="w-full border rounded-full bg-[#F0F0F0] px-8 py-2 text-[clamp(0.75rem,2vw,1rem)]"
          />
        </div>
        <button className="bg-black text-white rounded-full px-10 py-2 text-[clamp(0.75rem,2vw,1rem)]">
          Apply
        </button>
      </div>

      <button className="w-full bg-black text-white rounded-full py-3 mt-4 font-semibold text-[clamp(0.75rem,2vw,1rem)]">
        Go to Checkout →
      </button>
    </div>
  </div>
</div>



  );
}
