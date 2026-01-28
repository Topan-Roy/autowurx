"use client";

import React from "react";
import { Heart, Eye, MapPin, Gauge, Info } from "lucide-react";

const vehicles = [
  {
    id: 1,
    name: "2023 Tesla Model S",
    location: "Los Angeles, CA",
    mileage: "12,450",
    condition: "Excellent",
    currentBid: "$45,000",
    bids: "12 bids",
    status: "LIVE",
    time: "2h 14m",
    views: "23",
    type: "bid",
  },
  {
    id: 2,
    name: "2022 BMW M3 Competition",
    location: "Miami, FL",
    mileage: "8,900",
    condition: "Like New",
    currentBid: "$62,000",
    bids: null,
    status: "UPCOMING",
    time: "4h 32m",
    views: "45",
    type: "register",
  },
  {
    id: 3,
    name: "2023 Ford F-150 Lightning",
    location: "Dallas, TX",
    mileage: "5,200",
    condition: "Excellent",
    currentBid: "$55,000",
    bids: "18 bids",
    status: "LIVE",
    time: "1h 45m",
    views: "31",
    type: "bid",
  },
  {
    id: 4,
    name: "2021 Porsche 911 Turbo S",
    location: "New York, NY",
    mileage: "15,600",
    condition: "Good",
    currentBid: "$180,000",
    bids: null,
    status: "UPCOMING",
    time: "Tomorrow",
    views: "67",
    type: "register",
  },
];

const FeaturedVehicles = () => {
  return (
    <section className="py-20 bg-[#e9e7e7]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-[#0D0D0D] mb-4">
            Featured Vehicles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover hand-picked premium vehicles available in our live auctions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              <div className="relative h-48 bg-[#F3F4F6] flex items-center justify-center">
                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1 ${
                      vehicle.status === "LIVE"
                        ? "bg-[#4ADE80]"
                        : "bg-[#3B82F6]"
                    }`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {vehicle.status}
                  </span>
                </div>
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                  <Heart className="w-4 h-4" />
                </button>

                {/* Grid Icon Placeholder */}
                <div className="w-12 h-12 border-2 border-gray-200 rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 border-t-2 border-transparent border-l-2 border-gray-200 rounded-full -rotate-45" />
                  <div className="p-2 border border-gray-100 rounded">
                    <div className="grid grid-cols-2 gap-0.5">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-1 h-1 bg-gray-300" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Bar in Image */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm px-3 py-2 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-white/90 text-xs font-medium">
                    <span className="opacity-70">
                      {vehicle.status === "LIVE" ? "" : ""}
                    </span>
                    {vehicle.time}
                  </div>
                  <div className="flex items-center gap-1 text-white/90 text-xs font-medium">
                    <Eye className="w-3.5 h-3.5" />
                    {vehicle.views}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-bold text-[#1A1A1B] text-lg mb-1">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <MapPin className="w-3 h-3" />
                    {vehicle.location}
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <div className="text-gray-500">
                    Mileage:{" "}
                    <span className="text-[#1A1A1B] font-semibold">
                      {vehicle.mileage}
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-md font-bold text-[10px] border border-gray-100">
                    {vehicle.condition}
                  </span>
                </div>

                <div className="pt-2 border-t border-gray-50 flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                      Current Bid:
                    </p>
                    <p className="text-xl font-extrabold text-[#0D0D0D]">
                      {vehicle.currentBid}
                    </p>
                    {vehicle.bids && (
                      <p className="text-[10px] text-gray-400">
                        {vehicle.bids}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all shadow-sm ${
                      vehicle.type === "bid"
                        ? "bg-gradient-to-r from-[#FFE135] to-[#4ADE80] text-[#0D2B1D] hover:opacity-90"
                        : "bg-black text-white hover:bg-gray-900"
                    }`}
                  >
                    {vehicle.type === "bid" ? "Bid Now" : "Register"}
                  </button>
                  <button className="p-3 border border-gray-100 rounded-xl text-gray-400 hover:text-black hover:border-gray-200 transition-all">
                    <Info className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 border-2 border-black rounded-lg font-bold text-[16px] hover:bg-black hover:text-white transition-all">
            View All Vehicles (40+ Available)
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
