import AuctionHero from "@/components/Pages/Auctions/AuctionHero";
import FeaturedVehicles from "@/components/Pages/Auctions/FeaturedVehicles";
import HowItWorksSection from "@/components/Pages/Auctions/HowItWorksSection";
import AuctionCTASection from "@/components/Pages/Auctions/AuctionCTASection";
import React from "react";

const Auctions = () => {
  return (
    <div className="">
      <AuctionHero />
      <FeaturedVehicles />
      <HowItWorksSection />
      <AuctionCTASection />
    </div>
  );
};

export default Auctions;
