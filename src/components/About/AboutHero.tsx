"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-background px-6 pt-24 pb-12 overflow-hidden transition-colors duration-300">

      {/* Dynamic Background Wavy Pattern (seen in Image 2) */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-10 pointer-events-none">
        <Image
          src="/images/circuit_lines.png"
          alt="background lines"
          fill
          className="object-cover object-top opacity-50 dark:invert dark:brightness-200"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs font-semibold tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-4 uppercase"
        >
          — OUR STORY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight text-foreground transition-colors"
        >
          Built for enterprise.
          <br />
          <span className="text-blue-500 dark:text-blue-400 font-extrabold">
            Designed for outcomes.
          </span>
        </motion.h1>

        <div className="border-t border-border mt-24 sm:mt-32" />
      </div>
    </section>
  );
}