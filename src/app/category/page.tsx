


"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { products } from "../../types/products";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import * as Slider from "@radix-ui/react-slider";
import Pagination from "@/components/ui/pagination";

export default function ProductsPage() {
  const [selectedSize, setSelectedSize] = useState<string>("Large");
  const [price, setPrice] = useState([50, 200]);
  const [selectedColor, setSelectedColor] = useState("blue");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

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
  const colors = [
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

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <section className="w-full max-w-[clamp(360px,92%,2140px)] mx-auto px-4 py-10 mb-40">
      {/* Sidebar Toggle (mobile) */}


        <div className="p-4 text-sm text-gray-500">
    Home &gt; <span className="text-black font-medium">Casual</span>
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
            <h3 className="font-bold text-lg mb-2 flex items-center justify-between">
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
                    className="flex justify-between items-center cursor-pointer hover:underline font-normal"
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
                className="flex justify-between w-full font-semibold mb-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                Price
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {/* Price slider */}
              {isOpen && (
                <div className="flex flex-col gap-4">
                  <Slider.Root
                    className="relative flex items-center select-none touch-none w-full h-5"
                    value={price}
                    min={50}
                    max={200}
                    step={1}
                    onValueChange={(val) => setPrice(val as [number, number])}
                  >
                    <Slider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
                      <Slider.Range className="absolute bg-black rounded-full h-full" />
                    </Slider.Track>
                    <Slider.Thumb className="block w-4 h-4 bg-black rounded-full cursor-pointer" />
                    <Slider.Thumb className="block w-4 h-4 bg-black rounded-full cursor-pointer" />
                  </Slider.Root>

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${price[0]}</span>
                    <span>${price[1]}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="border-b border-gray-300 pb-2 mb-4"></div>

            {/* Colors */}
            <div className="w-auto">
              {/* Header with toggle */}
              <button
                className="flex justify-between w-full font-semibold mb-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                Colors
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {/* Color options */}
              {isOpen && (
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className={`h-8 w-8  rounded-full border-2 ${selectedColor === color ? "border-black" : "border-gray-300"
                        }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="border-b border-gray-300 pb-2 mb-4"></div>

            {/* Sizes */}
            <div>
              {/* <button className="flex justify-between w-full font-semibold mb-2 text-xs">
                Size <ChevronDown size={16} />
              </button>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`rounded-full border px-2 py-2 ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div> */}



              <div>
                <button
                  className="flex justify-between items-center w-full font-semibold mb-3"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Size
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {/* Sizes Grid */}
                {isOpen && (
                  <div className="  xl:mr-12 ml-0 text-xs sm:text-md">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`inline-block rounded-full border px-2 xl:px-4 py-3 mb-2 mr-3 lg:mr-6 transition-colors font-normal
            ${selectedSize === size
                            ? "bg-black text-white border-black"
                            : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                          }`}
                        onClick={() => setSelectedSize(size)}
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
              <button className="flex justify-between w-full font-semibold mb-2 font-normal">
                Dress Style <ChevronDown size={16} />
              </button>
              <ul className="space-y-3 text-sm text-gray-700 font-normal">
                {dressStyles.map((style) => (
                  <li
                    key={style}
                    className="flex justify-between items-center cursor-pointer hover:underline"
                  >
                    {style} <ChevronRight size={16} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Button */}
            <button className="w-full bg-black text-white py-2 rounded-full">
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
          <h2 className="text-2xl font-bold mb-6 flex justify-between items-center text-[clamp(1.25rem,2vw,2rem)]">Casual
            <div className="flex items-center gap-4 text-[clamp(0.6rem,1.5vw,1rem)] text-gray-600 font-normal">
              <span>
                Showing 1–10 of 100 Products
              </span>
              <span className="flex items-center gap-1 hidden md:flex">
                Sort by:{" "}
                <select className="border rounded px-2 py-1 text-[clamp(0.35rem,1.5vw,0.8rem)]">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </span>
            </div>

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

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl  transition"
              >
                <div className="relative w-full sm:h-[clamp(15rem,28vw,28rem)] h-[clamp(12rem,20vw,20rem)] md:h-[clamp(9rem,22vw,19rem)] 2xl:h-[clamp(12rem,22vw,21rem)] rounded-3xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-sm truncate mt-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  {"★".repeat(Math.round(product.rating))}
                  <span className="text-gray-500 text-xs">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-bold text-lg">${product.price}</span>
                  {product.oldPrice && (
                    <>
                      <span className="line-through text-gray-400 text-sm">
                        ${product.oldPrice}
                      </span>
                      <span className="text-red-500 text-sm font-medium">
                        {product.discount}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="border-b border-gray-300 pb-2 mb-4"></div>
          <div className="w-full">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </main>
      </div>
    </section>
  );
}
