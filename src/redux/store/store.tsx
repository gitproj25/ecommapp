// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cartslice";
import productsReducer from "./productslice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});


// Types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
