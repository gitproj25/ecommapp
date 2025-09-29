"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import ReviewCard from "./ReviewCard";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<"details" | "reviews" | "faq">("details");

  return (
    <section className="w-full max-w-[clamp(360px,92%,2140px)] mx-auto  py-2 ">
      {/* Tabs */}
      <div className="flex border-b mb-6">
  <button
    className={`flex-1 text-center py-2 font-satoshi font-light ${
      activeTab === "details" ? "border-b-2 border-black text-black" : "text-gray-500"
    }`}
    onClick={() => setActiveTab("details")}
  >
    Product Details
  </button>

  <button
    className={`flex-1 text-center py-2 font-satoshi font-light ${
      activeTab === "reviews" ? "border-b-2 border-black text-black" : "text-gray-500"
    }`}
    onClick={() => setActiveTab("reviews")}
  >
    Reviews
  </button>

  <button
    className={`flex-1 text-center py-2 font-satoshi font-light ${
      activeTab === "faq" ? "border-b-2 border-black text-black" : "text-gray-500"
    }`}
    onClick={() => setActiveTab("faq")}
  >
    FAQ
  </button>
</div>


      {/* Tab Content */}
      <div>
        {activeTab === "details" && (
            <div>
                </div>

        )}

        {activeTab === "reviews" && (
          <div>
            {/* <h3 className="text-xl font-bold mb-4">Customer Reviews</h3> */}
                     <div>
            {/* <h3 className="text-xl font-bold mb-4">Product Details</h3> */}
           <ReviewCard/>
          </div>
          </div>
        )}

        {activeTab === "faq" && (
          <div>
            {/* <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600">FAQ content goes here.</p> */}
          </div>
        )}
      </div>
    </section>
  );
}
