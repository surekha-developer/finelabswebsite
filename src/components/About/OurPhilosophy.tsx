"use client";

import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

export default function OurPhilosophy() {
  return (
    <section className="w-full bg-background px-6 py-12 lg:py-24 overflow-hidden transition-colors duration-300">

      {/* TOP DIVIDER */}
      <div className="max-w-7xl mx-auto border-t border-border mb-14 transition-colors" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 relative">

        {/* BACKGROUND HEXAGON NETWORK — clipped so it doesn't overflow on mobile */}
        <div className="absolute top-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] opacity-10 dark:opacity-20 pointer-events-none overflow-hidden transition-opacity">
          <div className="relative w-full h-full">
            <Hexagon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full stroke-blue-500 dark:stroke-blue-400" strokeWidth={0.5} />
            <Hexagon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 stroke-blue-500 dark:stroke-blue-400 rotate-12" strokeWidth={0.5} />
            <Hexagon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 stroke-blue-500 dark:stroke-blue-400 rotate-45" strokeWidth={0.5} />
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
          <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-4 uppercase">
            — OUR PHILOSOPHY
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-16 text-foreground transition-colors">
            Consulting-led.
            <br />
            Delivery-proven.
          </h2>

          {/* PARTNER LOGOS GRID (Text-based mockup simulating the partner logos) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-x-12 sm:gap-y-10 items-center justify-items-center sm:justify-items-start opacity-70 dark:opacity-90 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl sm:text-2xl font-bold tracking-tighter text-foreground">amazon</span>
            <span className="text-xl sm:text-2xl font-semibold text-muted-foreground">Microsoft</span>
            <span className="text-2xl sm:text-3xl font-extrabold tracking-widest text-[#0088cc] dark:text-[#33aaff]">SAP</span>
            <span className="text-xl sm:text-2xl font-black text-red-600 dark:text-red-500 tracking-tighter">ORACLE</span>
            <span className="text-xl sm:text-2xl font-semibold text-blue-500 dark:text-blue-400">salesforce</span>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-green-700 dark:text-green-500">servicenow</span>
          </div>
        </motion.div>

        {/* RIGHT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-muted-foreground text-sm sm:text-base md:text-lg leading-[1.8] relative z-10 transition-colors"
        >
          <p>
            At FineLabs, partnerships are a strategic cornerstone. Our ability to deliver
            comprehensive solutions across the enterprise move central over a
            <span className="font-semibold text-foreground italic"> carefully sourced ecosystem of technology alliances.</span>
          </p>

          <p>
            Our core formalized partnerships include <span className="font-semibold text-foreground">Amazon Web Services (AWS)</span> and
            <span className="font-semibold text-foreground"> Microsoft</span>, backed by programs, competencies, and specialization paths that
            <span className="font-semibold text-foreground"> validate our depth across both platforms.</span>
          </p>

          <p>
            Our core ecosystem spans hyper-scale cloud providers, enterprise SaaS
            platforms including <span className="font-semibold text-foreground">SAP, Oracle, ServiceNow,</span> and <span className="font-semibold text-foreground">Salesforce</span>,
            and the leading cybersecurity vendors — ensuring clients benefit from an integrated,
            holistic perspective rather than siloed point solutions.
          </p>
        </motion.div>
      </div>

    </section>
  );
}