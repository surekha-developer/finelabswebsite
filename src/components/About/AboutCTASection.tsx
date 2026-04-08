"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

export default function AboutCTASection() {
  return (
    <section className="relative w-full bg-background px-6 py-24 sm:py-32 text-center overflow-hidden transition-colors duration-300">

      {/* MASSIVE BACKGROUND HANDSHAKE GRAPHIC */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.03] dark:opacity-[0.08] flex justify-center items-center transition-opacity">
        <Handshake className="w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] text-blue-900 dark:text-blue-400" strokeWidth={1} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* HEADING */}
        <h2 className="text-4xl sm:text-5xl md:text-[80px] font-bold leading-[1.05] tracking-tight text-foreground transition-colors">
          Ready to partner <br className="hidden sm:block" />
          with fine labs?
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-8 text-muted-foreground text-sm sm:text-base md:text-lg max-w-lg mx-auto leading-relaxed transition-colors">
          We&apos;d love to understand your challenges and explore how we can help you
          transform your enterprise.
        </p>

        {/* BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">

          <Button className="rounded-full px-10 py-7 text-base font-bold bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 text-white border border-transparent scale-105 active:scale-95">
            Work with us
          </Button>

          <Button
            variant="outline"
            className="rounded-full px-10 py-7 text-base font-bold border-border text-foreground hover:bg-muted bg-transparent shadow-sm transition-all active:scale-95"
          >
            Other roles
          </Button>

        </div>
      </motion.div>
    </section>
  );
}