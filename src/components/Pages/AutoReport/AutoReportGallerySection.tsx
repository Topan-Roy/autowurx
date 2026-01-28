import Image from "next/image";
import roadImage from "@/assets/image copy.png";
import roadImage2 from "@/assets/image copy 2.png";
import roadImage3 from "@/assets/image copy 3.png";
import roadImage4 from "@/assets/image copy 4.png";
import roadImage5 from "@/assets/image copy 5.png";
import roadImage6 from "@/assets/image copy 6.png";
import roadImage7 from "@/assets/image copy 7.png";
import roadImage8 from "@/assets/image copy 8.png";
const AutoReportGallerySection = () => {
  const images = {
    road: roadImage.src,
    coupleCar: roadImage2.src,
    womanDriving: roadImage3.src,
    familyCar: roadImage4.src,
    convertible: roadImage5.src,
    trunk: roadImage6.src,
    offroad: roadImage7.src,
    phoneApp: roadImage8.src,
  };
  return (
    <div className="bg-white py-4">
      <div className="w-full px-2">
        <div className="flex gap-2 h-[300px]">
          <div className="relative w-[240px] h-full rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={images.road}
              alt="Scenic Road"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex gap-2 h-[145px]">
              <div className="relative flex-1 rounded-lg overflow-hidden">
                <img
                  src={images.coupleCar}
                  alt="Couple in car"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative flex-1 rounded-lg overflow-hidden">
                <img
                  src={images.womanDriving}
                  alt="Woman driving with dog"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative flex-1 rounded-lg overflow-hidden">
                <img
                  src={images.familyCar}
                  alt="Family trip"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="relative flex-1 rounded-lg overflow-hidden">
              <img
                src={images.convertible}
                alt="Convertible sunset drive"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <div className="relative h-[145px] rounded-lg overflow-hidden">
              <img
                src={images.familyCar}
                alt="Happy family in car"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex gap-2 flex-1">
              <div className="relative flex-1 rounded-lg overflow-hidden">
                <img
                  src={images.trunk}
                  alt="Friends in trunk"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative flex-1 rounded-lg overflow-hidden">
                <img
                  src={images.offroad}
                  alt="Offroad vehicle"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          <div className="relative w-[240px] h-full rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={images.phoneApp}
              alt="Mobile App"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AutoReportGallerySection;
