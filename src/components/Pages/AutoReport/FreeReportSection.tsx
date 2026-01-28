import { Input } from "antd";
import Image from "next/image";
import carImage from "@/assets/Vehicle-Red-Car-Transparent.png";
import carImage2 from "@/assets/20210315-nmvtis2x.png";
const FreeReportSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-34 sm:-mt-40 md:-mt-40 mb-5 max-w-5xl mx-auto z-20">
          <div className="flex items-center justify-between ">
            <div className="bg-white text-gray-800 font-bold px-6 py-3 rounded-t-lg shadow-sm text-sm sm:text-base cursor-default border-b-2 border-white">
              Check Your VIN
            </div>
            <a
              href="#"
              className="bg-transparent text-white hover:text-gray-200 font-bold px-6 py-3 rounded-t-lg text-sm sm:text-base ml-2 bg-black/40 sm:bg-transparent"
            >
              Where Is My VIN?
            </a>
          </div>
          <div className="bg-white p-6 rounded-b-lg rounded-tr-lg shadow-lg flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start gap-4 border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-15">
              <div className="flex items-center gap-2">
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Enter Your VIN"
                    className="w-full px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-t-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    maxLength={17}
                  />

                  <button className="w-full mt-2 px-2 py-2 bg-[#C41E3A] hover:bg-[#A01828] text-white font-bold text-sm tracking-wide rounded-b-md transition-colors duration-200 uppercase">
                    GET FREE REPORT
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full text-center lg:text-right hidden lg:block">
              <img src={carImage2.src} className="w-1/2" alt="" />
              <p className="text-[10px] text-gray-400 mt-2">
                Report Provided by Carsforsale.com®, an Approved NMVTIS Data
                Provider
              </p>
            </div>
          </div>
          <div className="lg:hidden text-center mt-2 px-4">
            <img src={carImage2.src} className="w-1/2" alt="" />
            <p className="text-[10px] text-gray-400">
              Report Provided by Carsforsale.com®, an Approved NMVTIS Data
              Provider
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white border border-gray-200 p-4 rounded-lg shadow-sm max-w-4xl mx-auto mb-16 relative z-10">
          <div className="text-center md:text-left">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
              Check your VIN now & get a <br />
              FREE vehicle history report!
            </h3>
            <a
              href="#"
              className="text-blue-500 hover:underline text-xs font-bold"
            >
              Research any vehicle by VIN
            </a>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Input
              placeholder="Enter VIN Number"
              className="h-10 w-full sm:w-48 border-gray-300 rounded text-sm"
            />
            <button className="bg-[#ffb700] hover:bg-[#e6a600] text-black font-bold h-10 px-4 rounded whitespace-nowrap transition-colors text-sm">
              Check VIN &gt;
            </button>
          </div>
        </div>
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl  font-medium text-gray-800 mb-4">
            2,500,000 FREE REPORTS & COUNTING
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
            <span className="h-px w-12 bg-gray-300"></span>
            <p className="text-lg">
              Our reports match over{" "}
              <span className="font-bold text-blue-600">96%</span> of vehicles
              in the U.S.
            </p>
            <span className="h-px w-12 bg-gray-300"></span>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Our proven Vehicle History Reports help minimize your risk and
            prevent expensive mistakes when buying your next vehicle. Backed by
            government data (NMVTIS), our reports protect you from fraud, stolen
            and unsafe vehicles. Plus, they provide previous seller information,
            like historical photos and price history so you buy smart. It's
            peace-of-mind, for FREE!
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto py-10">
          <div className="flex justify-center items-center py-10">
            <div className="relative w-full max-w-xl">
              <Image
                src={carImage}
                alt="Vehicle Diagram"
                className="w-full h-auto object-contain drop-shadow-2xl"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="absolute top-[20%] left-[10%] text-right flex items-center gap-3">
              <div>
                <h4 className="font-bold text-gray-700">Title Info</h4>
                <p className="text-xs text-gray-500">
                  Issued November 17, 2016
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                📄
              </div>
            </div>
            <div className="absolute top-[45%] left-[5%] text-right flex items-center gap-3">
              <div>
                <h4 className="font-bold text-gray-700">Odometer History</h4>
                <p className="text-xs text-gray-500">6,182 miles</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                🚗
              </div>
            </div>
            <div className="absolute top-[70%] left-[10%] text-right flex items-center gap-3">
              <div>
                <h4 className="font-bold text-gray-700">Junk & Salvage Info</h4>
                <p className="text-xs text-gray-500">2 Records Found</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                ⚠️
              </div>
            </div>
            <div className="absolute top-[20%] right-[10%] text-left flex items-center flex-row-reverse gap-3">
              <div>
                <h4 className="font-bold text-gray-700">Insurance Report</h4>
                <p className="text-xs text-gray-500">1 Record</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                🛡️
              </div>
            </div>
            <div className="absolute top-[45%] right-[5%] text-left flex items-center flex-row-reverse gap-3">
              <div>
                <h4 className="font-bold text-gray-700">Average Price</h4>
                <p className="text-xs text-gray-500">$24,081</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                📈
              </div>
            </div>
            <div className="absolute top-[70%] right-[10%] text-left flex items-center flex-row-reverse gap-3">
              <div>
                <h4 className="font-bold text-gray-700">Brand History</h4>
                <p className="text-xs text-gray-500">1 Brand Reported</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                🔄
              </div>
            </div>
          </div>
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                📄
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Title Info</h4>
                <p className="text-xs text-gray-500">
                  Issued November 17, 2016
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                🚗
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Odometer History</h4>
                <p className="text-xs text-gray-500">6,182 miles</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                ⚠️
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Junk & Salvage Info</h4>
                <p className="text-xs text-gray-500">2 Records Found</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                🛡️
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Insurance Report</h4>
                <p className="text-xs text-gray-500">1 Record</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                📈
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Average Price</h4>
                <p className="text-xs text-gray-500">$24,081</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                🔄
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Brand History</h4>
                <p className="text-xs text-gray-500">1 Brand Reported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeReportSection;
