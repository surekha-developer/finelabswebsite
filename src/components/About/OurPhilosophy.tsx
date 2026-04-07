"use client";

import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

export default function OurPhilosophy() {
  return (
    <section className="w-full bg-white px-6 py-12 lg:py-24 overflow-hidden">
      
      {/* TOP DIVIDER */}
      <div className="max-w-7xl mx-auto border-t border-[#e9e9e9] mb-14" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 relative">

        {/* BACKGROUND HEXAGON NETWORK — clipped so it doesn't overflow on mobile */}
        <div className="absolute top-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] opacity-5 pointer-events-none overflow-hidden">
          <div className="relative w-full h-full">
             <Hexagon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full stroke-black" strokeWidth={0.5} />
             <Hexagon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 stroke-black rotate-12" strokeWidth={0.5} />
             <Hexagon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 stroke-black rotate-45" strokeWidth={0.5} />
          </div>
        </div>

        {/* LEFT SIDE: Title & Logos */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 mb-4">
            — OUR PHILOSOPHY
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-16 text-slate-900">
            Consulting-led.
            <br />
            Delivery-proven.
          </h2>

          {/* PARTNER LOGOS GRID (Text-based mockup simulating the partner logos) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-x-12 sm:gap-y-8 items-center justify-items-center sm:justify-items-start opacity-80">
            <span className="text-xl sm:text-2xl font-bold tracking-tighter">amazon</span>
            <span className="text-xl sm:text-2xl font-semibold text-gray-600">Microsoft</span>
            <span className="text-2xl sm:text-3xl font-extrabold tracking-widest text-[#0088cc]">SAP</span>
            <span className="text-xl sm:text-2xl font-black text-red-600 tracking-tighter">ORACLE</span>
            <span className="text-xl sm:text-2xl font-semibold text-blue-500">salesforce</span>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-green-700">servicenow</span>
          </div>
        </motion.div>

        {/* RIGHT SIDE TEXT */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-gray-600 text-[15px] sm:text-base leading-[1.8] relative z-10"
        >
          <p>
            A. FineLabs, partnerships are a strategic cornerstone. Our ability to deliver 
            comprehensive API, cross platform we move central over a 
            <span className="font-semibold text-black"> domain that is 
            carefully sourced ecosystem of technology alliances.</span>
          </p>

          <p>
            Our core formalized partners pals in <span className="font-semibold text-black">Amazon Web Services (AWS)</span> and 
            <span className="font-semibold text-black"> Microsoft</span>, backed by programs, competencies, emply an forcey deeply restore 
            and select on - specific actions that <span className="font-semibold text-black">validate our depth across both platforms.</span>
          </p>

          <p>
            Our core ecosystem spans hyper-scale cloud providers, enterprice SaaS 
            platforms, noted <span className="font-semibold text-black">SAP, Oracle, ServiceNow,</span> and <span className="font-semibold text-black">Salesforce</span>, 
            and the leading cyber security versions — ensuring clients benefit from an integrated, 
            in ut-weekly-perspective rather than siloed point solutions.
          </p>
        </motion.div>
      </div>

    </section>
  );
}