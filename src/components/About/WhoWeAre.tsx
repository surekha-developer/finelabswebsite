"use client";

import { motion } from "framer-motion";
import { TrendingUp, GitMerge, FileBarChart2 } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-background px-6 py-12 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-start">

        {/* LEFT SIDE: Title & Flowing Body Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-4 uppercase">
            — WHO WE ARE
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-10 text-foreground tracking-tight transition-colors">
            Purpose-built for <br className="hidden sm:block" />
            enterprise digital <br className="hidden sm:block" />
            transformation
          </h2>

          <div className="space-y-6 text-muted-foreground text-[15px] sm:text-base leading-[1.8] max-w-lg transition-colors">
            <p>
              <span className="font-semibold text-foreground">FineLabs is a Digital transformation specialist</span> —
              focused on delivering high-value outcomes across Cloud, Cyber Security, Experience Platforms,
              Enterprise Strategy, Product Engineering, and Data & AI.
            </p>

            <p>
              Our <span className="font-semibold text-foreground">Experience Engineering</span> approach ensures
              seamless integration across multiple complex business and technology layers —
              <span className="font-semibold text-foreground"> turning complexity into opportunity</span> for our global clients.
            </p>

            <p>
              Agile by nature and deeply consultative by design, we partner with enterprises to navigate complex challenges,
              turning disruption into competitive advantage.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Massive Graph Graphic Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[280px] sm:h-[380px] md:h-[520px] bg-secondary/30 dark:bg-card/40 rounded-3xl border border-border flex flex-col items-center justify-center p-6 sm:p-10 overflow-hidden group transition-all"
        >
          {/* Decorative Vector Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-80" />

          <div className="relative z-10 w-full h-full flex flex-col justify-end">
            <div className="absolute right-6 sm:right-10 top-6 sm:top-10 flex gap-3 sm:gap-4 opacity-80">
              <div className="p-4 bg-card shadow-2xl rounded-2xl border border-border transition-colors"><GitMerge className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" strokeWidth={1.5} /></div>
              <div className="p-4 bg-card shadow-2xl rounded-2xl border border-border transition-colors"><FileBarChart2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" strokeWidth={1.5} /></div>
            </div>

            {/* The giant trending up arrow */}
            <div className="relative w-full flex justify-end">
              <TrendingUp className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 text-blue-500 dark:text-blue-400 drop-shadow-2xl translate-x-4 translate-y-4 group-hover:-translate-y-4 transition-transform duration-1000" strokeWidth={0.5} />
            </div>

            {/* Vertical Bar chart pillars */}
            <div className="absolute bottom-0 left-6 sm:left-10 flex items-end gap-3 sm:gap-6 w-full opacity-40 dark:opacity-20">
              <div className="w-10 sm:w-16 bg-blue-200 dark:bg-blue-800 h-16 sm:h-24 rounded-t-lg transition-all" />
              <div className="w-10 sm:w-16 bg-blue-300 dark:bg-blue-700 h-28 sm:h-40 rounded-t-lg transition-all" />
              <div className="w-10 sm:w-16 bg-blue-400 dark:bg-blue-600 h-44 sm:h-64 rounded-t-lg transition-all" />
              <div className="w-10 sm:w-16 bg-blue-500 dark:bg-blue-500 h-32 sm:h-48 rounded-t-lg transition-all" />
            </div>
          </div>
        </motion.div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 sm:mt-32 border-t border-border transition-colors" />
    </section>
  );
}