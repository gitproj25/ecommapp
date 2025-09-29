

//max-w-[clamp(360px,92%,2140px)]

"use client";

import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
<section className="min-w-[clamp(220px,95%,1300px)] absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 
 bg-black py-6 px-6  rounded-xl z-50 border border-green-600">

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-2">
    {/* Left text */}
    <h2 className="font-extrabold text-[clamp(1.5rem,3.5vw,2.5rem)] text-white text-center md:text-left">
      STAY UP TO DATE ABOUT <br className="hidden sm:block" /> OUR LATEST OFFERS
    </h2>

    {/* Right form */}
    <form className="flex flex-col sm:flex-col items-center gap-3 w-full md:w-auto">
      <div className="flex items-center bg-white rounded-full px-4 py-3 w-full sm:w-96">
        <Mail className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full text-[clamp(0.875rem,2vw,1rem)] font-satoshi font-light black outline-none bg-transparent"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-white text-black text-[clamp(0.875rem,2vw,1rem)] font-satoshi font-light px-6 sm:px-8 py-2.5 rounded-full hover:bg-gray-200 transition w-full sm:w-96"
      >
        Subscribe to Newsletter
      </button>
    </form>
  </div>
</section>

  );
}
