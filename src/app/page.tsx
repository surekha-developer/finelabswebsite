import CoreCapabilities from "@/components/Home/CoreCapabilities";
import CTASection from "@/components/Home/CTASection";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import StatsSection from "@/components/Home/StatsSection";
import WhoWeAre from "@/components/Home/WhoWeAre";
import Header from "@/components/Layout/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>

  <HeroSection/>
  <WhoWeAre/>
  <StatsSection/>
  <CoreCapabilities/>
  <CTASection/>
  
  </div>
  );
}
