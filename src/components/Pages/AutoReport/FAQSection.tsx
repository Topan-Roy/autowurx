"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Input } from "antd";
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What is a Vehicle History Report (VHR)?",
      answer:
        "A Vehicle History Report is a reliable report for consumers and sellers that describes the history and title behind a vehicle. A Vehicle History Reports is a trusted report that gives you the information you need to determine whether the car you want to purchase is in good shape and priced fairly.",
    },
    {
      question:
        "Where does the information for my Vehicle History Report come from?",
      answer:
        "Our data comes from the National Motor Vehicle Title Information System (NMVTIS), which includes data from state DMVs, insurance providers, and junk/salvage yards. We also partner with other industry leaders to provide comprehensive data.",
    },
    {
      question: "What vehicles have access to Vehicle History Reports?",
      answer:
        "Most vehicles manufactured after 1981 defined by a 17-character VIN can have a report generated. This covers cars, trucks, motorcycles, and RVs.",
    },
    {
      question:
        "What information is reported when I ask for a Vehicle History Report?",
      answer:
        "The report includes title history, odometer readings, junk/salvage history, insurance records, theft records, and lien information, among other 40+ checks.",
    },
    {
      question: "How often is a Vehicle History Report updated?",
      answer:
        "Information is updated regularly as new data is reported to NMVTIS and our other data partners. We strive to provide the most current data available.",
    },
    {
      question: "What information do you need to get a Vehicle History Report?",
      answer:
        "All you need is the vehicle's unique 17-character Vehicle Identification Number (VIN).",
    },
    {
      question: "Where can I find the VIN on my vehicle?",
      answer:
        "The VIN can typically be found on the driver's side dashboard (visible through the windshield) or on the driver's side door jamb. It's also on vehicle registration and insurance documents.",
    },
    {
      question: "Why are Carsforsale.com Vehicle History Reports Free?",
      answer:
        "We believe in transparency and empowering buyers. By offering free reports, we help create a safer, more informed marketplace for everyone.",
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-12 uppercase tracking-wide">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 last:border-0"
            >
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base sm:text-lg font-medium text-gray-700  transition-colors">
                  {faq.question}
                </span>
                <MdKeyboardArrowDown
                  className={`w-6 h-6 text-[#00cba9] transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-col items-center text-center">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
            Check your VIN now & get a
            <br className="hidden sm:block" />
            <span className="uppercase"> FREE vehicle history report!</span>
          </h3>
          <p className="text-[#008ba3] text-sm font-semibold mb-6">
            Research any vehicle by VIN
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg">
            <Input
              placeholder="Enter VIN Number"
              className="h-12 w-full text-base border-gray-300 rounded shadow-sm focus:border-[#ffb700] hover:border-[#ffb700]"
            />
            <button className="bg-[#ffb700] hover:bg-[#e5a500] text-black font-bold h-12 px-8 rounded shadow-sm whitespace-nowrap transition-colors w-full sm:w-auto">
              Check VIN &gt;
            </button>
          </div>
          {/* <p className="text-xs text-blue-400 mt-2 self-end sm:self-center sm:ml-96 pr-4 cursor-pointer">
            ⓘ
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
