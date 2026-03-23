

import AboutCTASection from "@/components/About/AboutCTASection";
import AboutHero from "@/components/About/AboutHero";
import OurPhilosophy from "@/components/About/OurPhilosophy";
import WhatWeDo from "@/components/About/WhatWeDo";
import WhoWeAre from "@/components/About/WhoWeAre";


export default function AboutPage() {
  return (
    <main>
      <AboutHero />
     
      <WhoWeAre/>
      <WhatWeDo/>
<OurPhilosophy/>
<AboutCTASection/>
    </main>
  );
}