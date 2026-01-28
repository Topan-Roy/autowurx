"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MapPin,
  DollarSign,
  Calendar,
  Gauge,
  ChevronDown,
  X,
  Heart,
  Eye,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Car = {
  id: number;
  title: string;
  price: number;
  miles: string;
  location: string;
  image: string;
  badge?: string;
  postedAt?: string;
};

const carsData: Car[] = [
  {
    id: 1,
    title: "2010 Honda Civic",
    price: 4995,
    miles: "120,000",
    location: "Springfield, IL",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200",
    badge: "Good Deal",
    postedAt: "Posted 2 hours ago",
  },
  {
    id: 2,
    title: "2009 Toyota Corolla",
    price: 4800,
    miles: "145,000",
    location: "Chatham, IL",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200",
    badge: "Hot Listing",
    postedAt: "Posted 5 hours ago",
  },
  {
    id: 3,
    title: "2012 Ford Focus",
    price: 4750,
    miles: "135,000",
    location: "Decatur, IL",
    image:
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=1200",
  },
  {
    id: 4,
    title: "2007 Chevrolet Impala",
    price: 3900,
    miles: "155,000",
    location: "Lincoln, IL",
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200",
    badge: "Deal Alert!",
  },
];

function VehicleDetailsModal({
  car,
  onClose,
}: {
  car: Car;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full z-10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* Left: Image Gallery */}
          <div className="md:w-1/2 bg-gray-100 relative min-h-[300px]">
            <Image
              src={car.image}
              alt={car.title}
              fill
              className="object-cover"
            />
            {car.badge && (
              <span className="absolute top-6 left-6 bg-[#4CAF50] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                {car.badge}
              </span>
            )}
          </div>

          {/* Right: Details */}
          <div className="md:w-1/2 p-8 flex flex-col h-full overflow-y-auto">
            <div className="mb-6">
              <h2 className="text-3xl font-black text-[#1A1A1B] leading-tight mb-2">
                {car.title}
              </h2>
              <p className="text-gray-400 flex items-center gap-1.5 text-sm">
                <MapPin className="w-4 h-4" /> {car.location}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                  Price
                </p>
                <p className="text-2xl font-black text-[#1A1A1B] tracking-tight">
                  ${car.price.toLocaleString()}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                  Mileage
                </p>
                <p className="text-2xl font-black text-[#1A1A1B] tracking-tight">
                  {car.miles}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-gray-500 font-medium">Condition</span>
                <span className="px-2.5 py-1 bg-green-50 text-green-700 rounded-md font-bold text-[10px] border border-green-100">
                  Excellent
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-gray-500 font-medium">Market Value</span>
                <span className="text-[#1A1A1B] font-bold">$5,500</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <span className="text-gray-500 font-medium">VHR Status</span>
                <span className="text-green-600 font-bold flex items-center gap-1">
                  Verified
                </span>
              </div>
            </div>

            <div className="mt-auto flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-[#FFE135] to-[#4ADE80] text-[#0D2B1D] py-4 rounded-xl font-black shadow-lg hover:opacity-90 transition-all">
                Contact Seller
              </button>
              <button className="p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
                <Heart className="w-6 h-6 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CarCard({ car, onOpen }: { car: Car; onOpen: (car: Car) => void }) {
  return (
    <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
      <div className="relative w-full h-[220px]">
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {car.badge && (
            <span className="bg-[#4CAF50] text-white text-[10px] font-black px-2.5 py-1.5 rounded-lg shadow-sm">
              {car.badge}
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-xl text-gray-400 hover:text-red-500 transition-colors shadow-lg">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        {car.postedAt && (
          <div className="absolute top-4 right-16">
            <span className="bg-white/90 backdrop-blur-sm shadow-lg text-gray-600 text-[10px] font-bold px-2.5 py-1.5 rounded-lg">
              {car.postedAt}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <p className="text-2xl font-black text-[#1A1A1B] tracking-tight">
            ${car.price.toLocaleString()}
          </p>
        </div>
        <h3 className="text-lg font-bold text-[#1A1A1B] tracking-tight mb-1">
          {car.title}
        </h3>
        <p className="text-xs text-gray-400 font-medium mb-6">
          {car.miles} miles · {car.location}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => onOpen(car)}
            className="flex-1 bg-[#5C8D6F] text-white py-3 px-4 rounded-xl text-sm font-black hover:bg-[#4a7259] transition-all shadow-md active:scale-95"
          >
            View Details
          </button>
          <button className="px-4 py-3 border border-gray-100 rounded-xl text-gray-400 font-bold text-sm hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2">
            <Heart className="w-4 h-4" /> Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CarsUnder5kPage() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <section className="py-20 bg-[#F4F6F5] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-10 w-full">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl md:text-5xl font-black text-[#1A1A1B]">
              Cars Under $5,000{" "}
              <span className="text-gray-400 font-medium">(Cash Deals)</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl">
              Browse local listings priced under $5,000 for cash-only deals. No
              financing.
            </p>
          </div>
        </div>

        {/* Improved Filter Bar */}
        <div className="bg-[#E2EBE5] rounded-2xl p-4 flex flex-wrap gap-4 items-center mb-12 shadow-sm">
          <div className="bg-white rounded-xl flex items-center gap-2 px-4 py-3 border border-gray-100 shadow-sm min-w-[240px]">
            <MapPin className="w-4 h-4 text-[#5C8D6F]" />
            <span className="text-sm font-bold text-gray-700">
              Springfield, IL 62704
            </span>
            <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
          </div>

          <div className="bg-white rounded-xl flex items-center justify-center gap-2 px-6 py-3 border border-gray-100 shadow-sm min-w-[120px]">
            <span className="text-sm font-bold text-gray-700">&lt; $5,000</span>
          </div>

          <div className="bg-white rounded-xl flex items-center justify-center gap-2 px-6 py-3 border border-gray-100 shadow-sm min-w-[150px]">
            <span className="text-sm font-bold text-gray-700">
              2008 &lt; YR &lt; 2020
            </span>
          </div>

          <div className="bg-white rounded-xl flex items-center justify-center gap-2 px-6 py-3 border border-gray-100 shadow-sm min-w-[120px]">
            <span className="text-sm font-bold text-gray-700">
              &lt; 150k mi
            </span>
          </div>
        </div>

        {/* Listings */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {carsData.map((car) => (
            <CarCard key={car.id} car={car} onOpen={setSelectedCar} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCar && (
          <VehicleDetailsModal
            car={selectedCar}
            onClose={() => setSelectedCar(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
