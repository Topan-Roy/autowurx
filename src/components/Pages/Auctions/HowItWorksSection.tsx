"use client";

import React from "react";
import {
  UserPlus,
  Search,
  Gavel,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Register & Verify",
    description:
      "Create your free account and complete our quick verification process to start bidding.",
    items: ["Free registration", "Identity verification", "Instant approval"],
    icon: UserPlus,
    active: false,
  },
  {
    id: 2,
    title: "Browse & Research",
    description:
      "Explore our extensive inventory with detailed vehicle histories and high-resolution photos.",
    items: [
      "Vehicle history reports",
      "High-res photo galleries",
      "Condition reports",
    ],
    icon: Search,
    active: true,
  },
  {
    id: 3,
    title: "Bid & Win",
    description:
      "Place bids in real-time auctions or set maximum bids with our auto-bid feature.",
    items: ["Live bidding", "Auto-bid protection", "Real-time updates"],
    icon: Gavel,
    active: false,
  },
  {
    id: 4,
    title: "Secure Payment",
    description:
      "Complete your purchase with our secure payment system and transparent fee structure.",
    items: ["Secure payments", "Transparent fees", "Multiple payment options"],
    icon: CreditCard,
    active: false,
  },
  {
    id: 5,
    title: "Take Delivery",
    description:
      "Arrange pickup or delivery of your new vehicle with our logistics partners.",
    items: ["Flexible pickup", "Delivery options", "Transportation assistance"],
    icon: CheckCircle2,
    active: false,
  },
];
const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px]  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D0D0D] mb-4">
            How AutoWurx Works
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Join the thousands who trust AutoWurx for their vehicle auction
            needs. Our streamlined process makes buying and selling vehicles
            simple and secure.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-[2px] bg-green-50 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative z-10">
                  <div className="flex justify-center mb-10 translate-y-4">
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold ring-8 ring-white">
                      {step.id}
                    </div>
                  </div>
                  <motion.div
                    whileHover={{
                      y: -10,
                      borderColor: "#FFE135",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`bg-white rounded-xl p-6 h-full flex flex-col items-center text-center transition-colors duration-300 border-2 cursor-default ${
                      step.active
                        ? "border-[#FFE135] shadow-[0_10px_30px_rgba(255,225,53,0.15)] ring-1 ring-[#FFE135]"
                        : "border-gray-100 shadow-sm"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg ${
                        step.active
                          ? "bg-gradient-to-br from-[#FFE135] via-[#4ADE80] to-[#22C55E]"
                          : "bg-gradient-to-br from-[#D1FAE5] via-[#A7F3D0] to-[#6EE7B7]"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          step.active ? "text-[#0D2B1D]" : "text-[#065F46]"
                        }`}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-[#1A1A1B] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2 mt-auto">
                      {step.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs text-gray-400 font-medium"
                        >
                          <span
                            className={`w-1 h-1 rounded-full ${
                              step.active ? "bg-[#FFE135]" : "bg-[#4ADE80]"
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
