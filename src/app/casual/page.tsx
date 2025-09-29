"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { products } from "../../data/data";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import * as Slider from "@radix-ui/react-slider";
import Pagination from "@/components/ui/pagination";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { useSearchParams } from "next/navigation";
import { setProducts, filterByColor,sortByPrice,filterByPrice,filterBySize,filterByCategory,searchProducts,applyAllFilters} from "../../redux/store/productslice";

export default function Casual() {
    const searchParams = useSearchParams();
  const from = searchParams.get("from") || "Casual"; // default text if no query
  const [selectedSize, setSelectedSize] = useState<string>("Large");

  const searchQuery = searchParams.get("search") || "";
  const [price, setPrice] = useState([50, 200]);
  const [selectedColor, setSelectedColor] = useState("blue");
const [selectedColors, setSelectedColors] = useState<string[]>([]);
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const [currentPage, setCurrentPage] = useState(1);
 const activeColor = useSelector((state: RootState) => state.products.selectedColor);

 // Scroll to top when currentPage changes
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [currentPage]);

 
   const dispatch = useDispatch<AppDispatch>(); 
  const filteredProducts = useSelector(
    (state: RootState) => state.products.filteredProducts
  );

  useEffect(() => {
    dispatch(setProducts(products)); // set all products initially
  }, [dispatch]);




// Debugging: show in console
useEffect(() => {
  console.log("Filtered Products:", filteredProducts);
}, [filteredProducts]);
   useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      dispatch(searchProducts(searchQuery)); // trigger filter on mount
    }
  }, [searchParams, dispatch]);
 
  useEffect(() => {
    if (searchQuery) {
      dispatch(searchProducts(searchQuery));
    }
  }, [searchQuery, dispatch]);

// const handleColorClick = (color: string) => {
//   setSelectedColors([color]); // still keep it in state as array if needed for UI
//   dispatch(filterByColor(color)); // single string, not array
// };


const handleColorClick = (color: string) => {
  dispatch(filterByColor(color));  // saves color in Redux
  dispatch(applyAllFilters());     // apply all filters immediately
};

  // ✅ Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSidebarOpen]);

  const sizes: string[] = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  const dressStyles: string[] = ["Casual", "Formal", "Party", "Gym"];
  const color = [
    "green",
    "red",
    "yellow",
    "orange",
    "skyblue",
    "blue",
    "pink",
    "purple",
    "white",
    "black",
  ];

useEffect(() => {
  dispatch(applyAllFilters());
}, [selectedColor, selectedSize, price, currentPage, dispatch]);


 
 // Pagination  
const productsPerPage = 9;
const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
const startIndex = (currentPage - 1) * productsPerPage;
const currentProducts = filteredProducts.slice(
  startIndex,
  startIndex + productsPerPage

);





const [isPriceOpen, setIsPriceOpen] = useState(true);
const [isColorOpen, setIsColorOpen] = useState(true);
const [isSizeOpen, setIsSizeOpen] = useState(true);


// Reset page when filters change
useEffect(() => {
  setCurrentPage(1); // reset page
  dispatch(applyAllFilters()); // recalc filteredProducts
}, [selectedColor, selectedSize, price, dispatch]);

 

  return (
    <section className="w-full max-w-[clamp(360px,92%,2140px)] mx-auto px-4 py-10 mb-40">
      {/* Sidebar Toggle (mobile) */}


        <div className="p-4 text-[clamp(0.75rem,2vw,0.9rem)] text-gray-500 font-satoshi font-light">
          <Link href="/">
    Home</Link> {'>'} <span className="text-black font-satoshi font-light">{from}</span>
  </div>
      <div className="flex flex-col md:flex-row gap-6 justify-between">
          {/* Breadcrumb inside sidebar */}
 
        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white shadow-lg transform transition-transform duration-300 z-50
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:w-[30%] lg:w-[25%] md:h-auto md:shadow-none md:border rounded-xl
          overflow-y-auto`} // ✅ Sidebar   scroll
        >
          {/*.close button...*/}


          {/* Sidebar Content */}
          <div className="p-4 space-y-6">
            {/* Filters Header */}
            <h3 className="font-satoshi font-light text-lg mb-2 flex items-center justify-between">
              Filters
              <button
                className="hidden md:flex justify-end gap-2  text-white px-4 py-2 rounded-full mb-4"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Image
                  src="/filter.png"
                  alt="filter"
                  width={20}
                  height={20}
                />
              </button>


              <div className="flex justify-end p-2 md:hidden">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-600 hover:text-black text-2xl relative z-50"
                >
                  ✕
                </button>


              </div>
            </h3>
            <div className="border-b border-gray-300 pb-2 mb-4"></div>

            {/* Categories */}
            <ul className="space-y-3 text-sm text-gray-700">
              {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex justify-between items-center text-[clamp(0.75rem,2vw,0.9rem)] cursor-pointer hover:underline  font-satoshi font-light"
                     onClick={() => dispatch(filterByCategory(item))} // ✅ dispatch action
                  >
                    {item} <ChevronRight size={16} />
                  </li>
                )
              )}
            </ul>
            <div className="border-b border-gray-300 pb-2 mb-4"></div>

            {/* Price */}
            <div>
              {/* Header with toggle */}
              <button
                className="flex justify-between w-full  mb-2 font-satoshi font-light"
                    onClick={() => setIsPriceOpen(!isPriceOpen)}
              >
                Price
                {isPriceOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {/* Price slider */}
              {isPriceOpen && (


<div className="relative w-full h-6"> {/* relative container */}
  <Slider.Root
    className="relative flex items-center select-none touch-none w-full h-5"
    value={price}
    min={50}
    max={200}
    step={1}
    onValueChange={(val: number[]) => {
      const newPrice: [number, number] = [val[0], val[1]];
      setPrice(newPrice);
      dispatch(filterByPrice(newPrice));
    }}
  >
    <Slider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
      <Slider.Range className="absolute bg-black rounded-full h-full" />
    </Slider.Track>
    <Slider.Thumb className="block w-5 h-5 bg-black rounded-full cursor-pointer" />
    <Slider.Thumb className="block w-5 h-5 bg-black rounded-full cursor-pointer" />
  </Slider.Root>

  {/* Price labels above thumbs */}
     <div className="absolute top-full left-0 w-full mt-1 pointer-events-none font-Satoshi font-light">
    <span
      className="absolute text-[clamp(0.75rem,2vw,0.9rem)] text-gray-600"
      style={{
        left: `${((price[0] - 50) / 150) * 100}%`,
        transform: "translateX(-50%)",
      }}
    >
      ${price[0]}
    </span>
    <span
      className="absolute text-sm text-gray-600"
      style={{
        left: `${((price[1] - 50) / 150) * 100}%`,
        transform: "translateX(-50%)",
      }}
    >
      ${price[1]}
    </span>
  </div>
</div>

              )}
            </div>
            <div className="border-b border-gray-300 pb-2 mb-4"></div>

            {/* Colors */}
            <div className="w-auto">
              {/* Header with toggle */}
              <button
                className="flex justify-between w-full  font-satoshi font-light  mb-2"
         onClick={() => setIsColorOpen(!isColorOpen)}
              >
                Colors
                {isColorOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {/* Color options */}
              {isColorOpen && (
                <div className="flex flex-wrap gap-2">
                  {color.map((color) => (
                    <button
                      key={color}
                      className={`h-8 w-8  rounded-full border-2 ${selectedColor === color ? "border-black" : "border-gray-300"
                        }`}
                      style={{ backgroundColor: color }}
                    onClick={() => {
            setSelectedColor(color);   // local state
            handleColorClick(color);   // ✅ dispatch filter
          }}
                      
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="border-b border-gray-300 pb-2 mb-4"></div>

            {/* Sizes */}
            <div>
             



              <div>
                <button
                  className="flex justify-between items-center w-full font-satoshi font-light  mb-3"
                   onClick={() => {
    setIsSizeOpen(!isSizeOpen);             // ✅ toggle open/close
  
    console.log("Selected size:", sizes);       // ✅ example filter
  }}
                >
                  Size
                  {isSizeOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {/* Sizes Grid */}
                {isSizeOpen && (
                  <div className="  xl:mr-12 ml-0 text-[clamp(0.75rem,2vw,0.9rem)]">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`inline-block rounded-full border px-2 xl:px-4 py-3 mb-2 mr-3 lg:mr-6 transition-colors font-satoshi font-light
            ${selectedSize === size
                            ? "bg-black text-white border-black"
                            : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                          }`}
                        onClick={() => {
      setSelectedSize(size);          // update local state
      dispatch(filterBySize(size));   // ✅ pass a single string
      console.log("Selected size:", size);
    }}
                        
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>







            </div>
            <div className="border-b border-gray-300 pb-2 mb-4"></div>

            {/* Dress Style */}
            <div>
              <button className="flex justify-between w-full font-satoshi font-light mb-2 ">
                Dress Style <ChevronDown size={16} />
              </button>
              <ul className="space-y-3 text-[clamp(0.75rem,2vw,0.9rem)] text-gray-700 font-normal">
                {dressStyles.map((style) => (
                  <li
                    key={style}
                    className="flex justify-between items-center font-satoshi font-light cursor-pointer hover:underline"
                  >
                    {style} <ChevronRight size={16} />
                  </li>
                ))}
              </ul>
            </div>

           
<button
  onClick={() => {
    // First, update Redux state with local selections
    if (selectedColor) dispatch(filterByColor(selectedColor));
    if (selectedSize) dispatch(filterBySize(selectedSize));
 dispatch(filterByPrice(price as [number, number]));


    // Then apply all filters at once
    dispatch(applyAllFilters());
  }}
  className="w-full bg-black text-white py-2 rounded-full mt-4"
>
  Apply Filter
</button>

          </div>
        </aside>

        {/* Dark overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main */}
        <main className="w-full md:w-[70%] lg:w-[75%] flex flex-col gap-6">
    

          <h2 className="text-2xl font-satoshi font-light mb-6 flex justify-between items-center text-[clamp(1.25rem,2vw,2rem)]">
            
            
            {from}
            
            {currentProducts.length > 0 && (
  <div className="flex items-center gap-4 text-[clamp(0.9rem,1.3vw,1.3rem)] md:text-[clamp(0.7rem,1.5vw,1rem)] text-gray-600 font-normal">
   
     <span className="font-satoshi font-light">
      Showing {((currentPage - 1) * productsPerPage) + 1}–
      {Math.min(currentPage * productsPerPage, filteredProducts.length)} 
      of  14  Products
    </span>
    <span className="flex items-center gap-1 font-satoshi font-light hidden md:flex">
      Sort by:{" "}
      <select 
        onChange={(e) => dispatch(sortByPrice(e.target.value as "low" | "high"))}
        className="border font-satoshi font-light rounded px-2 py-1 text-[clamp(0.7rem,1.5vw,1rem)] "
      >
        <option className="font-satoshi font-light"  value="low ">Price: Low to High</option>
        <option className="font-satoshi font-light"   value="high ">Price: High to Low</option>
      </select>
    </span>
  </div>
)}


            <button
              className="md:hidden flex justify-end gap-2 bg-gray text-white px-4 py-2 rounded-full mb-4"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Image
                src="/filter.png"
                alt="filter"
                width={20}
                height={20}
              />

            </button>

          </h2>
  {currentProducts.length === 0 ?(
  <div className="flex flex-col items-center justify-center text-center w-full" style={{ minHeight: '30vh' }}>
    <p className="text-black text-lg ">
      No products found
    </p>
    <Link
      href="/casual"
      className="px-6 py-2  text-white rounded-full hover:bg-gray-800 transition"
    >
      Back to Products
    </Link>
  </div>
):(
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
         
  {currentProducts.map((product) => (
    <div
      key={product.id}
      className="bg-white rounded-3xl transition"
    >
      <div className="relative w-full sm:h-[clamp(15rem,28vw,28rem)] h-[clamp(12rem,20vw,20rem)] md:h-[clamp(9rem,22vw,19rem)] 2xl:h-[clamp(12rem,22vw,21rem)] rounded-3xl overflow-hidden">
        <Link href={`/productdetails/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </Link>
      </div>
      <h3 className="font-Satoshi font-extrabold  text-[clamp(0.75rem,2vw,1.125rem)] truncate mt-2">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 text-yellow-500 ">
        {/* {"★".repeat(Math.round(product.rating))}
        <span className="text-gray-500">
          ({product.reviews})
        </span> */}
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
            <span className="text-[clamp(0.6rem,1.5vw,0.875rem)] font-satoshi symbol text-gray-600">
  <span className="font-sans">{product.rating}</span>/5
</span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="font-Satoshi font-extraboldt text-[clamp(0.7rem,3vw,1.2rem)]">${product.price}</span>
        {product.oldPrice && (
          <>
            <span className="line-through text-gray-400  font-satoshi font-light text-[clamp(0.7rem,3vw,1.2rem)]">
              ${product.oldPrice}
            </span>
            <span className="bg-[#FF33331A] rounded-full px-2 text-red-500 text-[clamp(0.6rem,3vw,1rem)] font-satoshi font-light">
              {product.discount}
            </span>
          </>
        )}
      </div>
    </div>
  ))






}

          </div>
)
}
          {/* <div className="border-b border-gray-300 pb-2 mb-4"></div> */}

         {currentProducts.length > 0 && (
  <div className="w-full">
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  </div>
)}
        </main>
      </div>
    </section>
  );
}
