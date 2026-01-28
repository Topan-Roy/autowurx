import { FaCheck } from "react-icons/fa6";

const WhatsIncludedSection = () => {
  const items = [
    // Column 1
    "Junk & Salvage Info",
    "Insurance Info",
    "Title History",
    "Title Brands",
    "Online History",
    "Classic",
    "Collision",
    "Crushed",
    "Disclosed Damage",
    "Dismantled",
    // Column 2
    "Fire Damage",
    "Flood Damage",
    "Former Rental",
    "Gray Market",
    "Hail Damage",
    "Junk",
    "Kit",
    "Odometer Info",
    "Police Use",
    "Taxi",
    // Column 3
    "Owner Retained",
    "Parts Only",
    "Rebuilt",
    "Reconstructed",
    "Recovered Theft",
    "Refurbished",
    "Remanufactured",
    "Replica",
    "Saltwater Damage",
    "Salvage",
    // Column 4
    "Salvage Stolen",
    "Street Rod",
    "Test Vehicle",
    "Totaled",
    "Undisclosed Lien",
    "Vandalism",
    "Reissued VIN",
    "VIN Replaced",
    "Warranty Returned",
    "And More!",
  ];

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 uppercase">
            What's Included In Our Vehicle History Reports
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Critical vehicle history details married with online vehicle history
            data offer a unique, broad view of a vehicle's life. From current
            vehicle condition to vehicle history, we report the critical details
            you need to buy smart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 max-w-6xl mx-auto text-sm sm:text-base">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <FaCheck className="text-[#00cba9] flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsIncludedSection;
