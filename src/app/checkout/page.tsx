"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/store";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "@/redux/store/cartslice";
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CheckoutPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  // calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = cartItems.reduce((acc, item) => acc + ((item.price * (parseInt(item.discount || "0"))) / 100) * item.quantity, 0);
  const total = subtotal - discount;

  if (cartItems.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl font-satoshi font-light mb-4">Your cart is empty 🛒</h2>
        <button
          onClick={() => router.push("/")}
          className="bg-black text-white px-6 py-2 rounded-full"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-satoshi font-light mb-6">Checkout</h2>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <p className="font-satoshi font-light text-lg">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Color: {item.selectedColor} | Size: {item.selectedSize}
                </p>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center gap-3">
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
                className="bg-gray-200 p-1 rounded-full"
              >
                <Minus className="w-4 h-4" />
              </button>

              <span>{item.quantity}</span>

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
                className="bg-gray-200 p-1 rounded-full"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Item total */}
            <p className="font-satoshi font-light">${(item.price * item.quantity).toFixed(2)}</p>

            {/* Remove button */}
            <button
            //   onClick={() =>
            //     dispatch(
            //       removeFromCart({
            //         id: item.id,
            //         selectedColor: item.selectedColor,
            //         selectedSize: item.selectedSize,
            //       })
            //     )
            //   }
              className="text-red-500"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="mt-10 border-t pt-6 flex flex-col items-end gap-2">
        <p className="text-gray-600">Subtotal: ${subtotal.toFixed(2)}</p>
        <p className="text-gray-600">Discount: -${discount.toFixed(2)}</p>
        <p className="font-satoshi text-xl">Total: ${total.toFixed(2)}</p>

        <button
          onClick={() => {
            alert("✅ Order Placed!");
            dispatch(clearCart());
            router.push("/");
          }}
          className="mt-4 bg-black text-white px-8 py-3 rounded-full"
        >
          Place Order
        </button>
      </div>
    </section>
  );
}
