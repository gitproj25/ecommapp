


// ///works"use client";
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X, ShoppingCart, User, Search,ChevronDown} from "lucide-react";

// import { searchProducts } from "../../redux/store/productslice";
// import { useRouter } from "next/navigation";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/redux/store/store";




// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);      // mobile menu toggle
//   const [showSearch, setShowSearch] = useState(false); // mobile search toggle
//    const [isShopOpen, setIsShopOpen] = useState(false); // desktop Shop dropdown toggle
//     const filteredProducts = useSelector(
//     (state: RootState) => state.products.filteredProducts
//   );

//   const [query, setQuery] = useState("");
//   const dispatch = useDispatch();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     console.log(value)
//     setQuery(value);
//     dispatch(searchProducts(value)); // filter products in Redux
//   };
// const router = useRouter();
//   // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//   //   if (e.key === "Enter" && filteredProducts.length > 0) {
//   //     router.push("/casual");
//   //     setQuery(""); // optional: clear search
//   //   }
//   // };
// const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//   if (e.key === "Enter" && query.trim() !== "") {
//     router.push(`/casual?search=${encodeURIComponent(query.trim())}`);
//     setQuery(""); // optional: clear input
//   }
// };



//   return (
//     <header className="w-full border-b border-gray-200  py-1">
//       <div className="max-w-[clamp(360px,92%,2140px)] mx-auto flex items-center justify-between px-2  py-3 lg:py-4">
//         {/* Left side (Logo + Mobile Menu button) */}
//         <div className="flex items-center space-x-3">
//           {/* Mobile menu button */}
//           <button
//             className="lg:hidden"
//             onClick={() => {
//               setIsOpen(!isOpen);
//               setShowSearch(false); // close search when menu opens
//             }}
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>

//           {/* Logo */}
//           <Link href="/" className="font-extrabold text-[clamp(1.5rem,4vw,2.5rem)]">
//             SHOP.CO
//           </Link>
          
//         </div>

//         {/* Desktop Nav */}
//         {/* <nav className="hidden lg:flex space-x-6 text-gray-700 font-normal">
//            <div className="flex items-center space-x-1 cursor-pointer">
//     <Link href="#">Shop</Link>
//     <ChevronDown className="h-4 w-4" />
//   </div>
//           <Link href="#">On Sale</Link>
//           <Link href="#">New Arrivals</Link>
//           <Link href="#">Brands</Link>
//         </nav> */}


//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex space-x-6 text-gray-700 font-normal relative px-2">
//           {/* Shop with clickable dropdown */}
//           <div className="relative">
//             <button
//               className="flex items-center space-x-1 cursor-pointer"
//               onClick={() => setIsShopOpen(!isShopOpen)}
//             >
//               <span>Shop</span>
//               <ChevronDown className="h-4 w-4" />
//             </button>

//             {/* Dropdown menu */}
//             {isShopOpen && (
//               <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded z-20">
//                 <Link href="#" className="block px-4 py-2 font-normal hover:bg-gray-100">Men</Link>
//                 <Link href="#" className="block px-4 py-2 font-normal hover:bg-gray-100">Women</Link>
//                 <Link href="#" className="block px-4 py-2mfont-normal hover:bg-gray-100">Kids</Link>
//               </div>
//             )}
//           </div>

//           <Link href="#">On Sale</Link>
//           <Link href="#">New Arrivals</Link>
//           <Link href="#">Brands</Link>
//         </nav>

//         {/* Search Bar (Desktop Only) */}
//         <div className="hidden lg:flex flex-1 max-w-md mx-6">
//           <div className="flex items-center w-full bg-gray-100 rounded-full px-3 py-2">
//             <Search className="h-5 w-5 text-gray-500 mr-2" />
//             <input
//               type="text"
//                value={query}
//               placeholder="Search for products..."
//               className="bg-transparent outline-none w-full  font-normal"
//               onChange={handleChange}
             
//               onKeyDown={handleKeyDown}
//             />


          
//           </div>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-4">
//           {/* Search Icon on Mobile */}
//           <button
//             className="lg:hidden"
//             onClick={() => {
//               setShowSearch(!showSearch);
//               setIsOpen(false); // close menu when search opens
//             }}
//           >
//             <Search className="h-6 w-6" />
//           </button>
//           <Link href="/cart">
//   <ShoppingCart className="h-6 w-6 cursor-pointer" />
// </Link>
          
//           <User className="h-6 w-6 cursor-pointer" />
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       {isOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-3">
//           <Link href="#" className="block">Shop</Link>
//           <Link href="#" className="block">On Sale</Link>
//           <Link href="#" className="block">New Arrivals</Link>
//           <Link href="#" className="block">Brands</Link>
//         </div>
//       )}

//       {/* Mobile Search Input */}
//       {showSearch && (
//         <div className="lg:hidden bg-gray-100 border-t border-gray-200 px-4 py-2">
//           <div className="flex items-center bg-white rounded-full px-3 py-2">
//             <Search className="h-5 w-5 text-gray-500 mr-2" />
//             <input
//               type="text"
//               placeholder="Search for products..."
//               className="bg-transparent outline-none w-full"
//               autoFocus
//                onChange={handleChange}
             
//               onKeyDown={handleKeyDown}
//             />
//             <button
//               className="ml-2 text-sm text-gray-600"
//               onClick={() => setShowSearch(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, User, Search, ChevronDown } from "lucide-react";
import { searchProducts } from "../../redux/store/productslice";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/store";
 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const [showSearch, setShowSearch] = useState(false); // mobile search toggle
  const [isShopOpen, setIsShopOpen] = useState(false); // desktop Shop dropdown toggle
  const filteredProducts = useSelector(
    (state: RootState) => state.products.filteredProducts
  );

  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    dispatch(searchProducts(value)); // filter products in Redux
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      router.push(`/casual?search=${encodeURIComponent(query.trim())}`);
      setQuery(""); // optional: clear input 1440
    }
  };
 return (
    <header className="w-full border-b border-gray-200 py-1">
  



<div className="max-w-[clamp(360px,92%,2140px)] mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-3 lg:py-4 gap-3 sm:gap-6 lg:gap-10">
  {/* Left side (Logo + Mobile Menu button) */}
  <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
    <button
      className="lg:hidden"
      onClick={() => {
        setIsOpen(!isOpen);
        setShowSearch(false);
      }}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>

    <Link
      href="/"
      className="font-extrabold font-Integral CF text-[clamp(1.2rem,3.5vw,2.5rem)] leading-[100%] align-middle"
    >
      SHOP.CO
    </Link>
  </div>

  {/* Desktop Nav */}
  <nav className="hidden lg:flex gap-4 xl:gap-8 text-gray-700  relative ml-4">
    <div
      className="relative"
      tabIndex={0}
      onBlur={() => setIsShopOpen(false)}
    >
      <button
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setIsShopOpen(!isShopOpen)}
      >
        <span className="text-[clamp(1rem,1.11vw,1.4rem)] text-[#000000] font-Satoshi font-Regular">
          Shop
        </span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isShopOpen && (
        <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded z-20">
          <Link
            href="#"
            className="block px-4 py-2 font-satoshi font-light hover:bg-gray-100"
            onClick={() => setIsShopOpen(false)}
          >
            Men
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 font-satoshi font-light hover:bg-gray-100"
            onClick={() => setIsShopOpen(false)}
          >
            Women
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 font-satoshi font-light hover:bg-gray-100"
            onClick={() => setIsShopOpen(false)}
          >
            Kids
          </Link>
        </div>
      )}
    </div>

    <Link
      href="/#on-sale"
      className="text-[clamp(1rem,1.11vw,1.4rem)] text-[#000000] font-Satoshi font-Regular"
    >
      On Sale
    </Link>
    <Link
      href="/#new-arrivals"
      className="text-[clamp(1rem,1.11vw,1.4rem)] text-[#000000] font-Satoshi font-Regular"
    >
      New Arrivals
    </Link>
    <Link
      href="/#brands"
      className="text-[clamp(1rem,1.11vw,1.4rem)] text-[#000000] font-Satoshi font-Regular"
    >
      Brands
    </Link>
  </nav>

  {/* Search Bar 2xl:max-w-2xl */}
  <div className="hidden lg:flex flex-1 max-w-lg  mx-2 md:mx-4 lg:mx-6 relative">
    <div className="flex items-center w-full bg-gray-100 rounded-full px-3 py-2">
      <Search className="h-5 w-5 text-gray-500 mr-2" />
      <input
        type="text"
        value={query}
        placeholder="Search for products..."
        className="bg-transparent outline-none w-full font-Satoshi font-light text-[clamp(0.8rem,1vw,1.4rem)] "
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
    {query.trim() !== "" && (
  <div className="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50">
    {filteredProducts.length > 0 ? (
      filteredProducts.slice(0, 5).map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setQuery("");
            router.push(`/casual?search=${encodeURIComponent(item.name)}`);
          }}
          className="flex items-center font-Satoshi font-light w-full text-left px-4 py-2 hover:bg-gray-100 text-sm gap-2"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-8 h-8 object-cover rounded"
          />
          <span>{item.name}</span>
        </button>
      ))
    ) : (
      <p className="px-4 py-2 text-gray-500 text-sm font-satoshi font-light">
        No results found
      </p>
    )}
  </div>
)}

  </div>

  {/* Right Side Icons */}
  <div className="flex items-center gap-2 sm:gap-3 lg:gap-10">
  <button
    className="lg:hidden"
    onClick={() => {
      setShowSearch(!showSearch);
      setIsOpen(false);
    }}
  >
    <Search className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
  </button>

  <Link href="/cart">
    <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 cursor-pointer" />
  </Link>

  <img
    src="/u.png"
    className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 cursor-pointer object-contain"
  />
</div>
</div>





     

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-3">
          <Link href="#" className="block font-satoshi font-light">
            Shop
          </Link>
          <Link href="#" className="block font-satoshi font-light">
            On Sale
          </Link>
          <Link href="#" className="block font-satoshi font-light">
            New Arrivals
          </Link>
          <Link href="#" className="block font-satoshi font-light">
            Brands
          </Link>
        </div>
      )}

      {/* Mobile Search Input */}
      {showSearch && (
        <div className="lg:hidden bg-gray-100 border-t border-gray-200 px-4 py-2 relative">
          <div className="flex items-center bg-white rounded-full px-3 py-2">
            <Search className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none w-full font-Satoshi font-light"
              autoFocus
              value={query}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button
              className="ml-2 text-sm text-gray-600"
              onClick={() => setShowSearch(false)}
            >
              Cancel
            </button>
          </div>

          {/* 🔽 Search Preview for Mobile */}
          {query.trim() !== "" && filteredProducts.length > 0 && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50">
              {filteredProducts.slice(0, 5).map((item) => (
                <Link
                  key={item.id}
                  href={`/product/${item.id}`}
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2 text-xs text-gray-500 border-t">
                Showing {Math.min(filteredProducts.length, 5)} of{" "}
                {filteredProducts.length} result(s)
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
