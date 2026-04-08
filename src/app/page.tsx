import CoreCapabilities from "@/components/Home/CoreCapabilities";
import CTASection from "@/components/Home/CTASection";
import HeroSection from "@/components/Home/HeroSection";
import StatsSection from "@/components/Home/StatsSection";
import WhoWeAre from "@/components/Home/WhoWeAre";

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
