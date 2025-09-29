

// import React from "react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-[#F0F0F0] w-full mx-auto absolute pt-24 py-12 px-4 border-t border-gray-200 z-0">
//       <div className="max-w-[clamp(360px,92%,2140px)] mt-20 mx-auto gap-8">
//         {/* Grid wrapper */}   
//         {/* Grid wrapper */}
// <div className="  flex flex-col lg:flex-row  ">
//   {/* SHOP.CO */}
//   <div className=" w-[90%] md:w-[50%] lg:w-[20%] ">
//     <p className="font-extrabold text-black text-[clamp(1.7rem,3vw,1.9rem)] items-start justify-start">
//       SHOP.CO
//     </p>
//     <p className=" w-full lg:w-[170px] xl:w-[260px] text-[clamp(1rem,1vw,1.1em)] lg:text-[clamp(0.8rem,1vw,0.9rem)] xl:text-[clamp(1rem,1.2vw,1.3rem)] font-normal text-gray-600 mt-1 lg:mt-3 leading-relaxed ">
//       We have clothes that suit your style and which you’re proud to
//       wear From women to men.
//     </p>

//     {/* Social icons */}

//    <div className="flex gap-4 mt-2 lg:mt-4 lg:mb-0 mb-6">
//   <Image src="/i.png" alt="Instagram" width={36} height={36} />
//   <Image src="/1.png" alt="Twitter" width={36} height={36} />
//   <Image src="/f.png" alt="Facebook" width={36} height={36} />
//   <Image src="/4.png" alt="GitHub" width={36} height={36} />
// </div>

//   </div>

//   {/* 4 sections wrapper with justify-around */}
 
//     {/* Company */}
//         <div className=" lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 justify-center ">
//     <div className="flex flex-col items-center text-center sm:items-center lg:items-start lg:text-left mb-2  ">
//       <h4 className=" mb-3 tracking-[0.1em] text-[clamp(1.1rem,1.3vw,1.5rem)]">
//         COMPANY
//       </h4>
//       <ul className="space-y-4 text-sm text-gray-600 text-[clamp(1rem,1vw,1.1em)] lg:text-[clamp(0.8rem,1vw,0.9rem)] xl:text-[clamp(1rem,1.2vw,1.3rem)] ">
//         <li className="hover:text-black cursor-pointer ">About</li>
//         <li className="hover:text-black cursor-pointer">Features</li>
//         <li className="hover:text-black cursor-pointer ">Works</li>
//         <li className="hover:text-black cursor-pointer">Career</li>
//       </ul>
//     </div>

//     {/* Help */}
//     <div className="flex flex-col items-center text-center sm:items-center lg:items-start lg:text-left">
//       <h4 className="font-normal mb-3 tracking-[0.1em] text-[clamp(1.1rem,1.3vw,1.5rem)]">
//         HELP
//       </h4>
//       <ul className="space-y-4 text-sm text-gray-600 text-[clamp(1rem,1vw,1.1em)] lg:text-[clamp(0.8rem,1vw,0.9rem)] xl:text-[clamp(1rem,1.2vw,1.3rem)] ">
//         <li className="hover:text-black cursor-pointer">Customer Support</li>
//         <li className="hover:text-black cursor-pointer ">Delivery Details</li>
//         <li className="hover:text-black cursor-pointer ">Terms & Conditions</li>
//         <li className="hover:text-black cursor-pointer ">Privacy Policy</li>
//       </ul>
//     </div>

//     {/* FAQ */}
//     <div className="flex flex-col items-center text-center sm:items-center lg:items-start lg:text-left">
//       <h4 className="font-normal mb-3 tracking-[0.1em] text-[clamp(1.1rem,1.3vw,1.5rem)]">
//         FAQ
//       </h4>
//       <ul className="space-y-4 text-sm text-gray-600 text-[clamp(1rem,1vw,1.1em)] lg:text-[clamp(0.8rem,1vw,0.9rem)] xl:text-[clamp(1rem,1.2vw,1.3rem)] ">
//         <li className="hover:text-black cursor-pointer font-normal">Account</li>
//         <li className="hover:text-black cursor-pointer font-normal">Manage Deliveries</li>
//         <li className="hover:text-black cursor-pointer font-normal">Orders</li>
//         <li className="hover:text-black cursor-pointer font-normal">Payments</li>
//       </ul>
//     </div>

//     {/* Resources */}
//     <div className="flex flex-col items-center text-center sm:items-center lg:items-start lg:text-left">
//       <h4 className="font-normal mb-3 tracking-[0.1em] text-[clamp(1.1rem,1.3vw,1.5rem)]">
//         RESOURCES
//       </h4>
//       <ul className="space-y-4 text-sm text-gray-600 text-[clamp(1rem,1vw,1.1em)] lg:text-[clamp(0.8rem,1vw,0.9rem)] xl:text-[clamp(1rem,1.2vw,1.3rem)] ">
//         <li className="hover:text-black cursor-pointer font-normal">Free eBooks</li>
//         <li className="hover:text-black cursor-pointer font-normal">Development Tutorial</li>
//         <li className="hover:text-black cursor-pointer font-normal">How to - Blog</li>
//         <li className="hover:text-black cursor-pointer font-normal">Youtube Playlist</li>
//       </ul>
//     </div>
//   </div>
// </div>
// </div>
     

//       {/* Bottom row */}
//       <div className="max-w-[clamp(360px,92%,2140px)] mx-auto mt-8 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-4 border-t border-gray-200 pt-4 lg:pt-6">
//         <p className="text-[clamp(0.75rem,1vw,0.9rem)] font-normal text-gray-500">
//           Shopco © 2000–2023, All Rights Reserved
//         </p>
//    <div className="flex gap-1">
//   <Image src="/visa.png" alt="Visa" width={90} height={50} />
//   <Image src="/badge.png" alt="PayPal" width={90} height={50} />
//   <Image src="/Paypal.png" alt="paypal" width={90} height={50} />
//   <Image src="/apple.png" alt="ApplePay" width={90} height={50} />
//   <Image src="/g.png" alt="gpay" width={90} height={50} />
// </div>



//       </div>
//     </footer>
//   );
// }





// import React from "react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-[#F0F0F0] absolute w-full mx-auto pt-24 py-12 px-4 border-t border-gray-200 z-0">
//       <div className="max-w-7xl mt-20 mx-auto gap-8">
//         {/* Grid wrapper */}
//         <div className="flex flex-col lg:flex-row">
//           {/* SHOP.CO */}
//           <div className="w-[90%] md:w-[50%] lg:w-[20%]">
//             <p className="font-extrabold text-black text-2xl lg:text-3xl">
//               SHOP.CO
//             </p>
//             <p className="w-full lg:w-64 text-gray-600 mt-1 lg:mt-3 leading-relaxed text-sm lg:text-base font-satoshi font-light">
//               We have clothes that suit your style and which you’re proud to wear from women to men.
//             </p>

//             {/* Social icons */}
//             <div className="flex gap-4 mt-2 lg:mt-4 lg:mb-0 mb-6">
//               <Image src="/i.png" alt="Instagram" width={36} height={36} />
//               <Image src="/1.png" alt="Twitter" width={36} height={36} />
//               <Image src="/f.png" alt="Facebook" width={36} height={36} />
//               <Image src="/4.png" alt="GitHub" width={36} height={36} />
//             </div>
//           </div>

//           {/* 4 sections wrapper */}
//           <div className="lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 justify-center">
//             {/* Company */}
//             <div className="flex flex-col items-center text-center sm:items-center lg:items-start lg:text-left mb-2">
//               <h4 className="mb-3 tracking-wide text-lg lg:text-xl font-semibold">
//                 COMPANY
//               </h4>
//               <ul className="space-y-2 text-gray-600 text-sm lg:text-base font-satoshi font-light">
//                 <li className="hover:text-black cursor-pointer">About</li>
//                 <li className="hover:text-black cursor-pointer">Features</li>
//                 <li className="hover:text-black cursor-pointer">Works</li>
//                 <li className="hover:text-black cursor-pointer">Career</li>
//               </ul>
//             </div>

//             {/* Help */}
//             <div className="flex flex-col items-center text-center sm:items-center lg:items-start lg:text-left">
//               <h4 className="mb-3 tracking-wide text-lg lg:text-xl font-semibold">
//                 HELP
//               </h4>
//               <ul className="space-y-2 text-gray-600 text-sm lg:text-base font-satoshi font-light">
//                 <li className="hover:text-black cursor-pointer">Customer Support</li>
//                 <li className="hover:text-black cursor-pointer">Delivery Details</li>
//                 <li className="hover:text-black cursor-pointer">Terms & Conditions</li>
//                 <li className="hover:text-black cursor-pointer">Privacy Policy</li>
//               </ul>
//             </div>

//             {/* FAQ */}
//             <div className="flex flex-col items-center text-center sm:items-center lg:items-start lg:text-left">
//               <h4 className="mb-3 tracking-wide text-lg lg:text-xl font-semibold">
//                 FAQ
//               </h4>
//               <ul className="space-y-2 text-gray-600 text-sm lg:text-base font-satoshi font-light">
//                 <li className="hover:text-black cursor-pointer">Account</li>
//                 <li className="hover:text-black cursor-pointer">Manage Deliveries</li>
//                 <li className="hover:text-black cursor-pointer">Orders</li>
//                 <li className="hover:text-black cursor-pointer">Payments</li>
//               </ul>
//             </div>

//             {/* Resources */}
//             <div className="flex flex-col items-center text-center sm:items-center lg:items-start lg:text-left">
//               <h4 className="mb-3 tracking-wide text-lg lg:text-xl ">
//                 RESOURCES
//               </h4>
//               <ul className="space-y-2 text-gray-600 text-sm lg:text-base font-satoshi font-light">
//                 <li className="hover:text-black cursor-pointer">Free eBooks</li>
//                 <li className="hover:text-black cursor-pointer">Development Tutorial</li>
//                 <li className="hover:text-black cursor-pointer">How to Blog</li>
//                 <li className="hover:text-black cursor-pointer">YouTube Playlist</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Bottom row */}
//         <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-4 border-t border-gray-200 pt-4 lg:pt-6">
//           <p className="text-gray-500 text-sm md:text-base font-satoshi font-light">
//             Shopco © 2000–2023, All Rights Reserved
//           </p>
//           <div className="flex gap-1 flex-wrap justify-center md:justify-start">
//             <Image src="/visa.png" alt="Visa" width={90} height={50} />
//             <Image src="/badge.png" alt="PayPal" width={90} height={50} />
//             <Image src="/Paypal.png" alt="PayPal" width={90} height={50} />
//             <Image src="/apple.png" alt="ApplePay" width={90} height={50} />
//             <Image src="/g.png" alt="GPay" width={90} height={50} />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }









// components/Footer.tsx
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-[#F0F0F0] w-full mx-auto pt-24 py-12 px-4 border-t border-gray-200">
//       <div className="max-w-[1200px] mx-auto">
//         {/* Top section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center sm:text-left">
//           {/* Logo + About */}
//           <div className="flex flex-col items-center sm:items-start">
//             <h2 className="text-2xl font-bold">SHOP.CO</h2>
//             <p className="mt-4 text-gray-600 text-sm leading-relaxed font-satoshi font-light max-w-xs">
//               We have clothes that suits your style and which you’re proud to
//               wear. From women to men.
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-4 mt-6 justify-center sm:justify-start">
//               <a href="#" className="p-2 bg-white rounded-full shadow">
//                 <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
//               </a>
//               <a href="#" className="p-2 bg-white rounded-full shadow">
//                 <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
//               </a>
//               <a href="#" className="p-2 bg-white rounded-full shadow">
//                 <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
//               </a>
//               <a href="#" className="p-2 bg-white rounded-full shadow">
//                 <Image src="/github.svg" alt="GitHub" width={20} height={20} />
//               </a>
//             </div>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="font-satoshi font-light mb-4">COMPANY</h3>
//             <ul className="space-y-2 text-gray-600 text-sm font-satoshi font-light">
//               <li>About</li>
//               <li>Features</li>
//               <li>Works</li>
//               <li>Career</li>
//             </ul>
//           </div>

//           {/* Help */}
//           <div>
//             <h3 className="font-satoshi font-light mb-4">HELP</h3>
//             <ul className="space-y-2 text-gray-600 text-sm font-satoshi font-light">
//               <li>Customer Support</li>
//               <li>Delivery Details</li>
//               <li>Terms & Conditions</li>
//               <li>Privacy Policy</li>
//             </ul>
//           </div>

//           {/* FAQ */}
//           <div>
//             <h3 className="font-satoshi font-light mb-4">FAQ</h3>
//             <ul className="space-y-2 text-gray-600 text-sm font-satoshi font-light">
//               <li>Account</li>
//               <li>Manage Deliveries</li>
//               <li>Orders</li>
//               <li>Payments</li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="font-satoshi font-light mb-4">RESOURCES</h3>
//             <ul className="space-y-2 text-gray-600 text-sm font-satoshi font-light">
//               <li>Free eBooks</li>
//               <li>Development Tutorial</li>
//               <li>How to - Blog</li>
//               <li>Youtube Playlist</li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom line */}
//         <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center">
//           <p className="text-gray-500 text-sm font-satoshi font-light">
//             Shop.co © 2000-2023, All Rights Reserved
//           </p>

//           {/* Payment icons */}
//           <div className="flex justify-center gap-4 flex-wrap">
//             <Image src="/visa.png" alt="Visa" width={50} height={30} />
//             <Image src="/mastercard.png" alt="Mastercard" width={50} height={30} />
//             <Image src="/paypal.png" alt="Paypal" width={50} height={30} />
//             <Image src="/applepay.png" alt="Apple Pay" width={50} height={30} />
//             <Image src="/googlepay.png" alt="Google Pay" width={50} height={30} />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }





// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-[#F0F0F0] w-full mx-auto pt-24 py-12 px-4 border-t border-gray-200">
//       <div className="max-w-[1200px] mx-auto">
//         {/* Top section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center sm:text-left">
//           {/* Logo + About */}
//           <div className="flex flex-col items-center sm:items-start">
//             <h2 className="text-2xl font-bold">SHOP.CO</h2>
//             <p className="mt-4 text-gray-600 text-sm leading-relaxed font-satoshi font-light max-w-xs text-center sm:text-left">
//               We have clothes that suits your style and which you’re proud to
//               wear. From women to men.
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-4 mt-6 justify-center sm:justify-start">
//               <a href="#" className="p-2 bg-white rounded-full shadow">
//                 <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
//               </a>
//               <a href="#" className="p-2 bg-white rounded-full shadow">
//                 <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
//               </a>
//               <a href="#" className="p-2 bg-white rounded-full shadow">
//                 <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
//               </a>
//               <a href="#" className="p-2 bg-white rounded-full shadow">
//                 <Image src="/github.svg" alt="GitHub" width={20} height={20} />
//               </a>
//             </div>
//           </div>

//           {/* Company */}
//           <div className="flex flex-col items-center sm:items-start">
//             <h3 className="font-satoshi font-light mb-4">COMPANY</h3>
//             <ul className="space-y-2 text-gray-600 text-sm font-satoshi font-light text-center sm:text-left">
//               <li>About</li>
//               <li>Features</li>
//               <li>Works</li>
//               <li>Career</li>
//             </ul>
//           </div>

//           {/* Help */}
//           <div className="flex flex-col items-center sm:items-start">
//             <h3 className="font-satoshi font-light mb-4">HELP</h3>
//             <ul className="space-y-2 text-gray-600 text-sm font-satoshi font-light text-center sm:text-left">
//               <li>Customer Support</li>
//               <li>Delivery Details</li>
//               <li>Terms & Conditions</li>
//               <li>Privacy Policy</li>
//             </ul>
//           </div>

//           {/* FAQ */}
//           <div className="flex flex-col items-center sm:items-start">
//             <h3 className="font-satoshi font-light mb-4">FAQ</h3>
//             <ul className="space-y-2 text-gray-600 text-sm font-satoshi font-light text-center sm:text-left">
//               <li>Account</li>
//               <li>Manage Deliveries</li>
//               <li>Orders</li>
//               <li>Payments</li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div className="flex flex-col items-center sm:items-start">
//             <h3 className="font-satoshi font-light mb-4">RESOURCES</h3>
//             <ul className="space-y-2 text-gray-600 text-sm font-satoshi font-light text-center sm:text-left">
//               <li>Free eBooks</li>
//               <li>Development Tutorial</li>
//               <li>How to - Blog</li>
//               <li>Youtube Playlist</li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom line */}
//         <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center">
//           <p className="text-gray-500 text-sm font-satoshi font-light">
//             Shop.co © 2000-2023, All Rights Reserved
//           </p>

//           {/* Payment icons */}
//           <div className="flex justify-center gap-4 flex-wrap">
//             <Image src="/visa.png" alt="Visa" width={50} height={30} />
//             <Image src="/mastercard.png" alt="Mastercard" width={50} height={30} />
//             <Image src="/paypal.png" alt="Paypal" width={50} height={30} />
//             <Image src="/applepay.png" alt="Apple Pay" width={50} height={30} />
//             <Image src="/googlepay.png" alt="Google Pay" width={50} height={30} />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0]  absolute w-full mx-auto  py-12 px-4 border-t border-gray-200 z-0 pt-40">
      <div className="max-w-[clamp(360px,92%,2140px)] mx-auto ">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 text-center sm:text-left ">
          {/* Logo + About (full width on mobile + tablet, 1 col on lg) */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <h2 className="text-2xl font-bold">SHOP.CO</h2>
            <p className="mt-4 text-gray-600  text-[clamp(0.85rem,1vw,1.05rem)] leading-relaxed font-satoshi font-light max-w-xs sm:max-w-sm lg:max-w-none">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
     <Image src="/i.png" alt="Instagram" width={32} height={32} />
<Image src="/1.png" alt="Twitter" width={32} height={32} />
<Image src="/f.png" alt="Facebook" width={32} height={32} />
<Image src="/4.png" alt="GitHub" width={32} height={32} />


            </div>
          </div>

         {/* Middle Links */}
<div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 lg:mt-0">
  {/* Company */}
 {/* Company */}
<div className="text-center lg:text-left lg:ml-auto ">
  <div>
    <h3 className="font-satoshi font-light mb-4 tracking-[0.1em] text-[clamp(0.9rem,1.5vw,1.25rem)]">COMPANY</h3>
    <ul className="space-y-4 text-gray-600 text-sm font-satoshi font-light text-[clamp(0.9rem,1vw,1.4rem)]">
      <li>About</li>
      <li>Features</li>
      <li>Works</li>
      <li>Career</li>
    </ul>
  </div>
</div>

{/* Help */}
<div className="text-center lg:text-left lg:ml-auto">
  <div>
    <h3 className="font-satoshi font-light mb-4 tracking-[0.1em] text-[clamp(0.9rem,1.5vw,1.25rem)]">HELP</h3>
    <ul className="space-y-4 text-gray-600 text-sm font-satoshi font-light text-[clamp(0.9rem,1vw,1.4rem)]">
      <li>Customer Support</li>
      <li>Delivery Details</li>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
    </ul>
  </div>
</div>

{/* FAQ */}
<div className="text-center lg:text-left lg:ml-auto">
  <div>
    <h3 className="font-satoshi font-light mb-4 tracking-[0.1em] text-[clamp(0.9rem,1.5vw,1.25rem)]">FAQ</h3>
    <ul className="space-y-4 text-gray-600 text-sm font-satoshi font-light text-[clamp(0.9rem,1vw,1.4rem)]">
      <li>Account</li>
      <li>Manage Deliveries</li>
      <li>Orders</li>
      <li>Payments</li>
    </ul>
  </div>
</div>

{/* Resources */}
<div className="text-center lg:text-left lg:ml-auto">
  <div>
    <h3 className="font-satoshi font-light mb-4 tracking-[0.1em]  text-[clamp(0.9rem,1.5vw,1.25rem)]">RESOURCES</h3>
    <ul className="space-y-4 text-gray-600 text-sm font-satoshi font-light text-[clamp(0.9rem,1vw,1.4rem)]">
      <li>Free eBooks</li>
      <li>Development Tutorial</li>
      <li>How to - Blog</li>
      <li>Youtube Playlist</li>
    </ul>
  </div>
</div>

</div>




        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-satoshi font-light text-center">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          {/* Payment icons */}
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center">
  <img
    src="/visa.png"
    alt="Visa"
    className="w-14 h-auto sm:w-24 md:w-24 lg:w-24 object-contain"
  />
  <img
    src="/badge.png"
    alt="PayPal"
    className="w-14 h-auto sm:w-24 md:w-24 lg:w-24 object-contain"
  />
  <img
    src="/Paypal.png"
    alt="PayPal"
    className="w-14 h-auto sm:w-24  md:w-24 lg:w-24 object-contain"
  />
  <img
    src="/apple.png"
    alt="ApplePay"
    className="w-14 h-auto sm:w-24 md:w-24 lg:w-24 object-contain"
  />
  <img
    src="/g.png"
    alt="GPay"
    className="w-14 h-auto sm:w-24 md:w-24 lg:w-24 object-contain"
  />
</div>

        </div>
      </div>
    </footer>
  );
}










