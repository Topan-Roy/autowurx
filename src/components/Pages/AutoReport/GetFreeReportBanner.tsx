import { Input } from "antd";
import carBg from "@/assets/images.jpg";
const GetFreeReportBanner = () => {
  return (
    <div className="relative py-5 sm:py-5 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${carBg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#a31a26]/95 to-[#7a121b]/20 z-10" />
      <div className="container mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          <div className="text-center lg:text-left text-white max-w-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              See why over a million people have used our free reports
            </h2>
            <p className="text-white/90 text-sm sm:text-base font-medium">
              Free Reports. Confident Buying. Peace of Mind.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg">
            <Input
              placeholder="Enter Your VIN"
              className="h-10 w-full text-base border-0 rounded shadow-sm"
            />
            <button className="bg-white hover:bg-gray-100 text-[#0e5c6e] font-bold h-10 px-6 rounded shadow-sm whitespace-nowrap transition-colors w-full sm:w-auto flex items-center justify-center gap-1 uppercase text-sm">
              Get Free Report <span className="text-lg">»</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetFreeReportBanner;
