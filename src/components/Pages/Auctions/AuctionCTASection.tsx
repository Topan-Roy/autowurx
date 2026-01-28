"use client";

import React from "react";
import { Play } from "lucide-react";

const AuctionCTASection = () => {
  const stats = [
    { label: "Registered Users", value: "15,234" },
    { label: "Successful Transactions", value: "98.7%" },
    { label: "Average Monthly Sales", value: "$2.4M" },
    { label: "Customer Support", value: "24/7" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className=" max-w-[1600px] mx-auto px-6">
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#FFE135] via-[#4ADE80] to-[#22C55E] rounded-[40px] p-12 md:p-20 text-center shadow-xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0D2B1D] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[#0D2B1D]/80 max-w-2xl mx-auto text-lg mb-10 leading-relaxed font-medium">
            Join over 15,000 satisfied customers who have found their perfect
            vehicle through AutoWurx auctions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-all shadow-lg active:scale-95">
              Register Now - It's Free
            </button>
            <button className="flex items-center gap-2 border-2 border-[#0D2B1D] text-[#0D2B1D] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#0D2B1D]/5 transition-all active:scale-95">
              Watch Demo Video
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <p className="text-3xl md:text-3xl font-black text-[#1A1A1B] mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="text-gray-500 font-semibold text-[18px] md:text-base  tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuctionCTASection;
