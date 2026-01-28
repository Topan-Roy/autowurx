"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Car,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
} from "lucide-react";

const AuctionHero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "02",
    hours: "14",
    minutes: "29",
    seconds: "24",
  });

  useEffect(() => {
    const timer = setInterval(() => {}, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#f0b80f] via-[#1dc65b] to-[#166534]  pb-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#000] leading-tight">
              Find Your Perfect <br />
              <span className="text-[#000]">Vehicle Today</span>
            </h1>
            <p className="text-lg text-[#0D2B1D]/80 max-w-xl">
              Join thousands of buyers and sellers in live vehicle auctions. Get
              the best deals on cars, trucks, and specialty vehicles with
              transparent bidding.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-[#0D0D0D] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1A1A1A] transition-all shadow-lg hover:shadow-xl">
              <div className="bg-white/20 p-1 rounded-full">
                <Play className="w-4 h-4 fill-white" />
              </div>
              Join Live Auction
            </button>
            <button className="bg-white text-[#0D2B1D] px-8 py-4 rounded-xl font-bold border-2 border-transparent hover:border-white/50 hover:bg-white/90 transition-all shadow-md">
              Browse Vehicles
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
              <span className="text-sm font-medium text-[#0D2B1D]/70">
                Live Auctions Active
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFE135]" />
              <span className="text-sm font-medium text-[#0D2B1D]/70">
                Secure Payments
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0D2B1D]" />
              <span className="text-sm font-medium text-[#0D2B1D]/70">
                Licensed Dealers
              </span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          {/* Main Auction Card */}
          <div className="bg-[#0D1511] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4ADE80]/20 to-transparent rounded-bl-full" />

            <div className="text-center space-y-2 mb-8">
              <h2 className="text-[#FFE135] text-2xl font-bold">
                Next Live Auction
              </h2>
              <p className="text-[#fffff] text-sm">
                Premium Vehicle Collection
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#1A2621] rounded-2xl p-4 text-center border border-white/5 group-hover:border-white/10 transition-colors"
                >
                  <span className="block text-2xl md:text-3xl font-bold text-white mb-1">
                    {item.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center space-y-1 mb-8">
              <p className="text-sm text-gray-300">
                Featured:{" "}
                <span className="font-semibold text-white">
                  2023 Tesla Model S
                </span>
              </p>
              <p className="text-xs text-gray-400">
                Starting bid:{" "}
                <span className="text-[#FFE135] font-bold text-lg ml-1">
                  $45,000
                </span>
              </p>
            </div>

            <button className="w-full bg-gradient-to-r from-[#FFE135] to-[#4ADE80] text-[#000] py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg">
              Register to Bid
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F0FDF4]/80 backdrop-blur-md p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="bg-[#FFE135]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Car className="w-10 h-10 text-[#0D2B1D]" />
              </div>

              <p className="text-2xl font-bold text-[#0D2B1D]">2,847</p>

              <p className="text-xs text-gray-600 font-medium">
                Vehicles Available
              </p>
            </div>

            <div className="bg-[#F0FDF4]/80 backdrop-blur-md p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="bg-[#FFE135]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-10 h-10 text-[#0D2B1D]" />
              </div>
              <p className="text-2xl font-bold text-[#0D2B1D]">15,234</p>
              <p className="text-xs text-gray-600 font-medium">
                Active Bidders
              </p>
            </div>

            <div className="bg-[#F0FDF4]/80 backdrop-blur-md p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="bg-[#FFE135]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-10 h-10 text-[#0D2B1D]" />
              </div>
              <p className="text-2xl font-bold text-[#0D2B1D]">98.7%</p>
              <p className="text-xs text-gray-600 font-medium">
                Successful Sales
              </p>
            </div>

            <div className="bg-[#F0FDF4]/80 backdrop-blur-md p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="bg-[#FFE135]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-10 h-10 text-[#0D2B1D]" />
              </div>
              <p className="text-2xl font-bold text-[#0D2B1D]">24/7</p>
              <p className="text-xs text-gray-600 font-medium">Live Auctions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionHero;
