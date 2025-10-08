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





// src/redux/slices/cartSlice.ts
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Product } from "@/data/data";

// // Extend Product with cart options
// export type CartItem = Product & {
//   quantity: number;
//   selectedColor: string;
//   selectedSize: string;
//   discountPrice?: number; // final price after discount
//   discount?: string;      // discount percentage
// };

// interface CartState {
//   items: CartItem[];
// }

// // 🔹 Load cart from localStorage
// const loadCartFromStorage = (): CartItem[] => {
//   try {
//     const stored = localStorage.getItem("cart");
//     return stored ? JSON.parse(stored) : [];
//   } catch (error) {
//     console.error("Error loading cart from localStorage", error);
//     return [];
//   }
// };

// // 🔹 Save cart to localStorage
// const saveCartToStorage = (items: CartItem[]) => {
//   try {
//     localStorage.setItem("cart", JSON.stringify(items));
//   } catch (error) {
//     console.error("Error saving cart to localStorage", error);
//   }
// };

// const initialState: CartState = {
//   items: [], // start empty, will be replaced in extraReducers
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       const { id, selectedColor, selectedSize, quantity, price, discount } = action.payload;

//       const existingItem = state.items.find(
//         (item) =>
//           item.id === id &&
//           item.selectedColor === selectedColor &&
//           item.selectedSize === selectedSize
//       );

//       const discountNumber = discount ? Number(discount.replace("%", "")) : 0;
//       const discountPrice = discountNumber
//         ? price - (price * discountNumber) / 100
//         : price;

//       if (existingItem) {
//         existingItem.quantity += quantity;
//         existingItem.discountPrice = discountPrice;
//         console.log("✅ Increased quantity, discounted price:", discountPrice);
//       } else {
//         state.items.push({ ...action.payload, discountPrice });
//         console.log("🆕 Added new item with discounted price:", discountPrice);
//       }

//       saveCartToStorage(state.items); // ✅ save after update
//     },

//     removeFromCart: (state, action: PayloadAction<number>) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//       saveCartToStorage(state.items); // ✅ save after update
//     },

//     increaseQuantity: (state, action: PayloadAction<{ id: number; selectedColor: string; selectedSize: string }>) => {
//       const { id, selectedColor, selectedSize } = action.payload;
//       const item = state.items.find(
//         (i) => i.id === id && i.selectedColor === selectedColor && i.selectedSize === selectedSize
//       );

//       if (item) {
//         item.quantity += 1;
//       }
//       saveCartToStorage(state.items); // ✅ save after update
//     },

//     decreaseQuantity: (state, action: PayloadAction<{ id: number; selectedColor: string; selectedSize: string }>) => {
//       const { id, selectedColor, selectedSize } = action.payload;
//       const item = state.items.find(
//         (i) => i.id === id && i.selectedColor === selectedColor && i.selectedSize === selectedSize
//       );

//       if (item) {
//         if (item.quantity > 1) {
//           item.quantity -= 1;
//         } else {
//           state.items = state.items.filter(
//             (i) => !(i.id === id && i.selectedColor === selectedColor && i.selectedSize === selectedSize)
//           );
//         }
//       }
//       saveCartToStorage(state.items); // ✅ save after update
//     },

//     clearCart: (state) => {
//       state.items = [];
//       saveCartToStorage(state.items); // ✅ save after clear
//     },

//     // 🔹 New action: Load from localStorage when app starts
//     loadCart: (state) => {
//       state.items = loadCartFromStorage();
//     },
//   },
// });

// export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, loadCart } =
//   cartSlice.actions;
// export default cartSlice.reducer;



// // src/pages/_app.tsx
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { Provider } from "react-redux";
// import store from "@/redux/store";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { loadCart } from "@/redux/slices/cartSlice";

// function CartInitializer() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(loadCart()); // ✅ Load cart items from localStorage on page load
//   }, [dispatch]);

//   return null; // nothing to render
// }

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       {/* this runs once and loads cart into redux */}
//       <CartInitializer />
//       <Component {...pageProps} />
//     </Provider>
//   );
// }
