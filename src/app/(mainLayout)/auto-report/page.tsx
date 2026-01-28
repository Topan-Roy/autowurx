import carImage from "@/assets/curvy-highwa.webp";
import FreeReportSection from "@/components/Pages/AutoReport/FreeReportSection";
import TrustedReportsSection from "@/components/Pages/AutoReport/TrustedReportsSection";
import WhatsIncludedSection from "@/components/Pages/AutoReport/WhatsIncludedSection";
import AutoReportGallerySection from "@/components/Pages/AutoReport/AutoReportGallerySection";
import FAQSection from "@/components/Pages/AutoReport/FAQSection";
import GetFreeReportBanner from "@/components/Pages/AutoReport/GetFreeReportBanner";
const AutoReportPage = () => {
  return (
    <div>
      <section className="relative w-full h-[40vh] sm:h-[60vh] md:h-[65vh] lg:h-[65vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(78.97deg, rgba(7, 7, 7, 0) 0.94%, rgba(7, 7, 7, 0.55) 39.27%), url(${carImage.src})`,
            opacity: 1,
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12 text-center text-white">
          <h1 className="text-5xl w-full font-bold leading-tight mb-2 sm:mb-4 drop-shadow-md">
            FREE Vehicle History Reports
          </h1>
          <p className="text-lg font-medium  drop-shadow-sm opacity-90">
            Free Reports. Confident Buying. Peace of Mind.
          </p>
        </div>
      </section>

      <FreeReportSection />
      <TrustedReportsSection />
      <WhatsIncludedSection />
      <AutoReportGallerySection />
      <FAQSection />
      <GetFreeReportBanner />
    </div>
  );
};

export default AutoReportPage;
