"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

export default function AboutCTASection() {
  return (
    <section className="relative w-full bg-white px-6 py-24 sm:py-32 text-center overflow-hidden">
      
      {/* MASSIVE BACKGROUND HANDSHAKE GRAPHIC */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.03] sm:opacity-5 flex justify-center items-center">
        <Handshake className="w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] text-blue-900" strokeWidth={1} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* HEADING */}
        <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold leading-[1.05] tracking-tight text-slate-900">
          Ready to partner <br className="hidden sm:block" />
          with fine labs?
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-8 text-gray-600 text-[15px] sm:text-base max-w-lg mx-auto leading-relaxed">
          We'd love to understand your challenges and devices,  how we can help you
          transform.
        </p>

        {/* BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Button className="rounded-full px-8 py-6 text-[15px] font-semibold bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20 text-white border border-transparent">
            Work with us
          </Button>

          <Button
            variant="outline"
            className="rounded-full px-8 py-6 text-[15px] font-semibold border-gray-300 text-gray-700 hover:bg-gray-50 bg-white shadow-sm"
          >
            Other roles
          </Button>

        </div>
      </motion.div>
    </section>
  );
}