// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { products, Product } from "../../data/data";




// interface ProductsState {
//   allProducts: Product[];
//   filteredProducts: Product[];
//   selectedColor: string;
//   selectedSize: string | null;
//   priceRange: [number, number];
//    searchQuery: string; // <-- new
// }

// const initialState: ProductsState = {
//   allProducts: [],
//   filteredProducts: [],
//   selectedColor: "",
//   selectedSize: null,
//   priceRange: [50, 200],
//    searchQuery: "", // <-- new
// };

// const applyFilters = (state: ProductsState) => {
//     const query = state.searchQuery.toLowerCase().replace(/[-\s]/g, ""); // remove hyphens and spaces
//   state.filteredProducts = state.allProducts.filter((product) => {
   
//     const matchColor =
//   !state.selectedColor || product.color.includes(state.selectedColor);


//     // ✅ Size filter
//     const matchSize =
//       !state.selectedSize || product.size.includes(state.selectedSize);

//     // ✅ Price filter
//     const [minPrice, maxPrice] = state.priceRange;
//     const matchPrice =
//       product.price >= minPrice && product.price <= maxPrice;

//        // ✅ Search filter
//        const name = product.name.toLowerCase().replace(/[-\s]/g, "");
//     const category = product.category.toLowerCase().replace(/[-\s]/g, "");
//     const matchSearch = query === "" || name.includes(query) || category.includes(query);

//     return matchColor && matchSize && matchPrice&&matchSearch;
//   });
// };

// export const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     setProducts: (state, action: PayloadAction<Product[]>) => {
//       state.allProducts = action.payload;
//       state.filteredProducts = action.payload;
//     },
   
//     filterByColor: (state, action: PayloadAction<string>) => {
//   state.selectedColor = action.payload;
//   applyFilters(state);
// },

//     filterBySize: (state, action: PayloadAction<string>) => {
//       state.selectedSize = action.payload;
//       applyFilters(state);
//     },
//     filterByPrice: (state, action: PayloadAction<[number, number]>) => {
//       state.priceRange = action.payload;
//       applyFilters(state);
//     },
//     // ✅ New reducer for sorting
//     sortByPrice(state, action: PayloadAction<"low" | "high">) {
//       if (action.payload === "low") {
//         state.filteredProducts.sort((a, b) => a.price - b.price);
//       } else if (action.payload === "high") {
//         state.filteredProducts.sort((a, b) => b.price - a.price);
//       }
//     },
//     // inside productslice.ts
// filterByCategory: (state, action: PayloadAction<string>) => {
//   state.filteredProducts = state.allProducts.filter(
//     (product) => product.category === action.payload
//   );
// },

// searchProducts: (state, action: PayloadAction<string>) => {
//   state.searchQuery = action.payload;
//   applyFilters(state);
// },

// applyAllFilters: (state) => {
//   applyFilters(state);
// },
//     /////
//     // resetFilters: (state) => {
//     //   state.selectedColor = [];
//     //   state.selectedSize = null;
//     //   state.priceRange = [50, 200];
//     //   state.filteredProducts = state.allProducts;
//     // },
//   },
// });


// export const { setProducts, filterByColor, filterBySize,filterByPrice,sortByPrice,filterByCategory,searchProducts,applyAllFilters} =
//   productsSlice.actions;

// export default productsSlice.reducer;




// redux/store/productslice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products, Product } from "../../data/data";

interface ProductsState {
  allProducts: Product[];
  filteredProducts: Product[];
  selectedColor: string;
  selectedSize: string | null;
  priceRange: [number, number];
  searchQuery: string;
}

// ✅ initialize with products so preview works
const initialState: ProductsState = {
  allProducts: products,
  filteredProducts: products,
  selectedColor: "",
  selectedSize: null,
  priceRange: [50, 200],
  searchQuery: "",
};

const applyFilters = (state: ProductsState) => {
  const query = state.searchQuery.toLowerCase().replace(/[-\s]/g, ""); // normalize input
  state.filteredProducts = state.allProducts.filter((product) => {
    // ✅ Color filter
    const matchColor =
      !state.selectedColor || product.color.includes(state.selectedColor);

    // ✅ Size filter
    const matchSize =
      !state.selectedSize || product.size.includes(state.selectedSize);

    // ✅ Price filter
    const [minPrice, maxPrice] = state.priceRange;
    const matchPrice = product.price >= minPrice && product.price <= maxPrice;

    // ✅ Search filter (by name + category)
    const name = product.name.toLowerCase().replace(/[-\s]/g, "");
    const category = product.category.toLowerCase().replace(/[-\s]/g, "");
    const matchSearch =
      query === "" || name.includes(query) || category.includes(query);

    return matchColor && matchSize && matchPrice && matchSearch;
  });
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },

    filterByColor: (state, action: PayloadAction<string>) => {
      state.selectedColor = action.payload;
      applyFilters(state);
    },

    filterBySize: (state, action: PayloadAction<string>) => {
      state.selectedSize = action.payload;
      applyFilters(state);
    },

    filterByPrice: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
      applyFilters(state);
    },

    // ✅ Sorting
    sortByPrice(state, action: PayloadAction<"low" | "high">) {
      if (action.payload === "low") {
        state.filteredProducts.sort((a, b) => a.price - b.price);
      } else {
        state.filteredProducts.sort((a, b) => b.price - a.price);
      }
    },

    // ✅ Category filter
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.filteredProducts = state.allProducts.filter(
        (product) => product.category === action.payload
      );
    },

    // ✅ Search filter
    searchProducts: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      applyFilters(state);
    },

    applyAllFilters: (state) => {
      applyFilters(state);
    },
  },
});

export const {
  setProducts,
  filterByColor,
  filterBySize,
  filterByPrice,
  sortByPrice,
  filterByCategory,
  searchProducts,
  applyAllFilters,
} = productsSlice.actions;

export default productsSlice.reducer;
