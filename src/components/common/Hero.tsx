




"use client";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="w-full bg-[#F2F0F1]">
      <div className="max-w-[clamp(360px,92%,2140px)]  mx-auto px-4  sm:gap-2 gap-2  grid grid-cols-1 sm:grid-cols-2 items-center">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          {/* Text + Button */}
          <div className="space-y-4 text-start lg:text-left pt-6">
            <h1 className="text-[clamp(2rem,4vw,3.8rem)] font-extrabold text-[#000000] leading-tight ">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p className="text-[#00000099]  mx-auto lg:mx-0 font-normal">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </p>

            {/* Shop Now Button */}
            <Link href="/casual">
            <button className="w-full sm:w-48 px-6 py-3 bg-black mt-6 text-white rounded-full font-medium hover:bg-gray-900">
              Shop Now
            </button>
            </Link>
          </div>

          {/* Stats (moved outside space-y-6 so it aligns with main div) */}
          {/* Stats */}
{/* Stats */}







<div className="pt-10 text-center lg:text-left">
  <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-6 text-center text-left">
    
    {/* 200+ */}
  
    <div className="flex flex-col items-center lg:items-start  xl:border-r-2 border-gray-300 ml-8 lg:ml-0">
      <p className="font-bold text-[clamp(1.5rem,4vw,3rem)]">200+</p>
      <p className="text-[clamp(0.6rem,2vw,1rem)] text-[#00000099] whitespace-nowrap font-normal">
        International Brands
      </p>
    </div>

      {/* Vertical line */}
    {/* <div className="hidden sm:block w-px h-16 bg-gray-400 self-center"></div> */}

    {/* 2,000+ */}
    <div className="xl:border-r-2  border-gray-300 ">
    <div className="flex flex-col items-center lg:items-start border-l-2 sm:border-none border-gray-300 ">
      <p className="font-bold text-[clamp(1.5rem,4vw,3rem)]">2,000+</p>
      <p className="text-[clamp(0.6rem,2vw,1rem)] text-[#00000099] whitespace-nowrap font-normal ">
        High-Quality Products
      </p>
    </div></div>
    {/* <div className="lg:border-l-2"></div> */}
        {/* Vertical line */}
    {/* <div className="hidden lg:block w-px h-16 bg-gray-400 self-center"></div> */}
    {/* 30,000+ */}
    <div className="flex flex-col items-center col-span-2 lg:col-span-1 lg:items-start">
      <p className="font-bold text-[clamp(1.5rem,4vw,3rem)]">30,000+</p>
      <p className="text-[clamp(0.6rem,2vw,1rem)] text-[#00000099] whitespace-nowrap font-normal">
        Happy Customers
      </p>
    </div>
    <div className="lg:border-l-2"></div>
  </div>
</div>




        </div>

        {/* Right Side with Image */}
        {/* <div className="relative flex justify-center">
          <Image
            src="/couple.jpg"
            alt="Fashion Models"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div> */}
        {/* <div className="relative flex justify-center h-[30rem] sm:h-[45rem]  overflow-hidden rounded-lg">
  <Image
    src="/couple.jpg"
    alt="Fashion Models"
    fill
    className="object-cover object-top"
  />
</div> */}
 {/* <div className="relative flex justify-center h-[28rem] sm:h-[30rem] lg:h-[45rem] overflow-hidden rounded-lg"> */}
 {/* <div className="relative w-full h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[45rem] overflow-hidden rounded-lg ">
  <Image
    src="/couple.jpg"
    alt="Fashion Models"
    fill
    className="object-cover object-top"
  />
</div> */}



<div className="relative w-full overflow-hidden rounded-lg aspect-[4/3] sm:aspect-[16/9] lg:aspect-[3/2] min-h-[28rem] sm:min-h-[35rem] lg:min-h-[40rem]">
  <Image
    src="/couple.jpg"
    alt="Fashion Models"
    fill
    className="object-cover object-top"
  />
</div>








      </div>
    </section>
  );
}
