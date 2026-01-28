import Link from "next/link";
import { FaBolt, FaChartBar, FaDollarSign, FaLandmark } from "react-icons/fa";
import Image from "next/image";
import sampleReport from "@/assets/Vehicle-Red-Car-Transparent.png";
const TrustedReportsSection = () => {
  const features = [
    {
      icon: <FaLandmark className="w-8 h-8 text-[#008ba3]" />,
      title: "Government Data",
      description:
        "Backed by the NMVTIS, our reports offer title, fraud and damage disclosures.",
    },
    {
      icon: <FaChartBar className="w-8 h-8 text-[#008ba3]" />,
      title: "Carsforsale.com Data",
      description:
        "Insightful data from previous sellers include price and online photo history.",
    },
    {
      icon: <FaDollarSign className="w-8 h-8 text-[#008ba3]" />,
      title: "Free Reports",
      description:
        "Our reports are complimentary because you shouldn't pay for peace of mind.",
    },
    {
      icon: <FaBolt className="w-8 h-8 text-[#008ba3]" />,
      title: "Instant Access",
      description:
        "Reports are immediately available for quick decision making.",
    },
  ];
  return (
    <div className="bg-white  pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 tracking-wide uppercase">
            Vehicle History Reports You Can Trust
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Two powerful data providers combine forces to provide vehicle
            history on over 96% of the vehicles on the road in the US today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#1a6b7e] to-[#298da3] relative mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-[250px] relative">
            <div className="md:absolute md:bottom-0 md:left-10 w-48 sm:w-64 md:w-56 lg:w-64 mb-6 md:mb-0 z-10 hidden md:block">
              <Image
                src={sampleReport}
                alt="Sample Report"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div className="w-full md:pl-72 lg:pl-80 py-10 md:py-8 text-center md:text-left flex flex-col items-center md:items-start">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                See why over a million people have used our free reports
              </h3>
              <p className="text-white/80 text-sm sm:text-base mb-6">
                Title Information / Odometer History / 70+ Brand Checks and so
                much more
              </p>
              <button className="bg-white text-[#0e5c6e] font-bold py-3 px-6 rounded shadow hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm sm:text-base">
                VIEW SAMPLE REPORT <span className="text-lg">»</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedReportsSection;
