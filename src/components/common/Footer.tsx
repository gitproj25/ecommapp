// import  react from 'react'
// import Image from 'next/image';
// export default function Footer() {
//   return (
//     <footer className="bg-[#F0F0F0] w-full  mx-auto   absolute    pt-24 py-12 px-4 border-t border-gray-200 z-0">
//         <div className="max-w-[clamp(360px,92%,2140px)]  mt-20 mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 gap-8">
//           {/* Logo */}
//           <div className="col-span-2 sm:col-span-3 lg:col-span-1">
       
// <h3 className="font-extrabold text-black text-[clamp(1.6rem,3vw,1.8rem)]">
//   SHOP.CO
// </h3>
//            <p className="text-[clamp(0.9rem,1.2vw,1rem)] font-normal text-gray-600 mt-3 leading-relaxed ">
//   We have clothes that suit your style and which you’re proud to wear
//    From women to men.
// </p>

//               {/* Social icons */}
//   <div className="flex gap-4 mt-4">
//     <Image src="/i.png" alt="Instagram" width={24} height={24} />
//     <Image src="/t.png" alt="Twitter" width={20} height={20} />
//     <Image src="/f.png" alt="Facebook" width={24} height={24} />
//     <Image src="/g.png" alt="LinkedIn" width={24} height={24} />
//   </div>
//           </div>
 
//     {[
//             {
//               title: "COMPANY",
//               items: ["About", "Features", "Works", "Career"],
//             },
//             {
//               title: "HELP",
//               items: [
//                 "Customer Support",
//                 "Delivery Details",
//                 "Terms & Conditions",
//                 "Privacy Policy",
//               ],
//             },
//             {
//               title: "FAQ",
//               items: ["Account", "Manage Deliveries", "Orders", "Payments"],
//             },
//             {
//               title: "RESOURCES",
//               items: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
//             },
//           ].map((section, i) => (
//             <div key={i}>
//               <h4 className="font-normal mb-3 tracking-[0.1em] text-[clamp(1.1rem,1.3vw,1.5rem)]">{section.title}</h4>
//               <ul className="space-y-4 text-sm text-gray-600 text-[clamp(1rem,1.3vw,1.2rem)]
// ">
//                 {section.items.map((link, j) => (
//                   <li key={j} className="hover:text-black cursor-pointer font-normal">
//                     {link}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
      
//   </div>
        
       

      


//         {/* Bottom row */}
//         <div className="max-w-[clamp(360px,92%,2140px)]  mx-auto mt-8 flex flex-col sm:flex-row justify-between items-start gap-4 border-t border-gray-200 pt-6">
//           <p className="text-[clamp(0.75rem,1vw,0.9rem)] font-normal text-gray-500">
//             Shopco © 2000–2023, All Rights Reserved
//           </p>
//           <div className="flex gap-3">
//             <Image src="/visa.png" alt="Visa" width={40} height={25} />
//             <Image src="/badge.png" alt="PayPal" width={40} height={25} />
//             <Image src="/g.png" alt="Mastercard" width={40} height={25} />
//             <Image src="/apple.png" alt="ApplePay" width={40} height={25} />
//           </div>
//         </div>
//       </footer>
//   );
// }



import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] w-full mx-auto absolute pt-24 py-12 px-4 border-t border-gray-200 z-0">
      <div className="max-w-[clamp(360px,92%,2140px)] mt-20 mx-auto gap-8">
        {/* Logo */}

          <div className="flex flex-col">
            <h3 className="font-extrabold text-black text-[clamp(1.6rem,3vw,1.8rem)]">
              SHOP.CO
            </h3>
            <p className="text-[clamp(0.9rem,1.2vw,1rem)] font-normal text-gray-600 mt-3 leading-relaxed ">
              We have clothes that suit your style and which you’re proud to
              wear From women to men.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-4">
              <Image src="/i.png" alt="Instagram" width={24} height={24} />
              <Image src="/1.png" alt="Twitter" width={20} height={20} />
              <Image src="/f.png" alt="Facebook" width={24} height={24} />
              <Image src="/g.png" alt="LinkedIn" width={24} height={24} />
            </div>
          </div>
       



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
  {/* Company */}
  <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
    <h4 className="font-normal mb-3 tracking-[0.1em] text-[clamp(1.1rem,1.3vw,1.5rem)]">
      COMPANY
    </h4>
    <ul className="space-y-4 text-sm text-gray-600 text-[clamp(1rem,1.3vw,1.2rem)]">
      <li className="hover:text-black cursor-pointer font-normal">About</li>
      <li className="hover:text-black cursor-pointer font-normal">Features</li>
      <li className="hover:text-black cursor-pointer font-normal">Works</li>
      <li className="hover:text-black cursor-pointer font-normal">Career</li>
    </ul>
  </div>

  {/* Help */}
  <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
    <h4 className="font-normal mb-3 tracking-[0.1em] text-[clamp(1.1rem,1.3vw,1.5rem)]">
      HELP
    </h4>
    <ul className="space-y-4 text-sm text-gray-600 text-[clamp(1rem,1.3vw,1.2rem)]">
      <li className="hover:text-black cursor-pointer font-normal">Customer Support</li>
      <li className="hover:text-black cursor-pointer font-normal">Delivery Details</li>
      <li className="hover:text-black cursor-pointer font-normal">Terms & Conditions</li>
      <li className="hover:text-black cursor-pointer font-normal">Privacy Policy</li>
    </ul>
  </div>

  {/* FAQ */}
  <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
    <h4 className="font-normal mb-3 tracking-[0.1em] text-[clamp(1.1rem,1.3vw,1.5rem)]">
      FAQ
    </h4>
    <ul className="space-y-4 text-sm text-gray-600 text-[clamp(1rem,1.3vw,1.2rem)]">
      <li className="hover:text-black cursor-pointer font-normal">Account</li>
      <li className="hover:text-black cursor-pointer font-normal">Manage Deliveries</li>
      <li className="hover:text-black cursor-pointer font-normal">Orders</li>
      <li className="hover:text-black cursor-pointer font-normal">Payments</li>
    </ul>
  </div>

  {/* Resources */}
  <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
    <h4 className="font-normal mb-3 tracking-[0.1em] text-[clamp(1.1rem,1.3vw,1.5rem)]">
      RESOURCES
    </h4>
    <ul className="space-y-4 text-sm text-gray-600 text-[clamp(1rem,1.3vw,1.2rem)]">
      <li className="hover:text-black cursor-pointer font-normal">Free eBooks</li>
      <li className="hover:text-black cursor-pointer font-normal">Development Tutorial</li>
      <li className="hover:text-black cursor-pointer font-normal">How to - Blog</li>
      <li className="hover:text-black cursor-pointer font-normal">Youtube Playlist</li>
    </ul>
  </div>
</div>

      </div>

      {/* Bottom row */}
      <div className="max-w-[clamp(360px,92%,2140px)] mx-auto mt-8 flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left gap-4 border-t border-gray-200 pt-6">
  <p className="text-[clamp(0.75rem,1vw,0.9rem)] font-normal text-gray-500">
    Shopco © 2000–2023, All Rights Reserved
  </p>
  <div className="flex gap-3 h-[20px]">
    <Image src="/visa.png" alt="Visa" width={40} height={25} />
    <Image src="/badge.png" alt="PayPal" width={40} height={25} />
    <Image src="/Paypal.png" alt="paypal" width={50} height={5} />
    <Image src="/apple.png" alt="ApplePay" width={40} height={25} />
    <Image src="/gpay.png" alt="gpay" width={50} height={10} />
  </div>
</div>

    </footer>
  );
}


