// src/redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/data/data";

// Extend Product with cart options
export type CartItem = Product & {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
  discountPrice?: number; // final price after discount
  discount?: string;      // discount percentage
};

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
//  addToCart: (state, action: PayloadAction<CartItem>) => {
//   const { id, selectedColor, selectedSize, quantity } = action.payload;

//   const existingItem = state.items.find(
//     (item) =>
//       item.id === id &&
//       item.selectedColor === selectedColor &&
//       item.selectedSize === selectedSize
//   );

//   if (existingItem) {
//     existingItem.quantity += quantity; // ✅ use given quantity
//     console.log("✅ Item already in cart, increased quantity by", quantity);
//   } else {
//     state.items.push({ ...action.payload }); // ✅ add with passed quantity
//     console.log("🆕 New item added to cart with quantity", quantity);
//   }
// },


addToCart: (state, action: PayloadAction<CartItem>) => {
  const { id, selectedColor, selectedSize, quantity, price, discount } = action.payload;

  const existingItem = state.items.find(
    (item) =>
      item.id === id &&
      item.selectedColor === selectedColor &&
      item.selectedSize === selectedSize
  );

  // Calculate discounted price
 // discount is a string like "-25%" or undefined
const discountNumber = discount ? Number(discount.replace("%", "")) : 0;

// calculate price
const discountPrice = discountNumber
  ? price - (price * discountNumber) / 100
  : price;

  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.discountPrice = discountPrice; // update price if needed
    console.log("✅ Increased quantity, discounted price:", discountPrice);
  } else {
    state.items.push({ ...action.payload, discountPrice }); // add discounted price
    console.log("🆕 Added new item with discounted price:", discountPrice);
  }
},



    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<{ id: number; selectedColor: string; selectedSize: string }>) => {
  const { id, selectedColor, selectedSize } = action.payload;
  const item = state.items.find(
    (i) => i.id === id && i.selectedColor === selectedColor && i.selectedSize === selectedSize
  );

  if (item) {
    item.quantity += 1;
  }
},

    decreaseQuantity: (state, action: PayloadAction<{ id: number; selectedColor: string; selectedSize: string }>) => {
      const { id, selectedColor, selectedSize } = action.payload;
      const item = state.items.find(
        (i) => i.id === id && i.selectedColor === selectedColor && i.selectedSize === selectedSize
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (i) => !(i.id === id && i.selectedColor === selectedColor && i.selectedSize === selectedSize)
          );
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart,increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
