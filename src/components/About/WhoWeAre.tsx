"use client";

import { motion } from "framer-motion";
import { TrendingUp, GitMerge, FileBarChart2 } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white px-6 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-start">

        {/* LEFT SIDE: Title & Flowing Body Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 mb-4">
            — WHO WE ARE
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-[1.1] mb-10 text-slate-900 tracking-tight">
            Purpose-built for <br className="hidden sm:block" />
            enterprise digital <br className="hidden sm:block" />
            transformation
          </h2>

          <div className="space-y-6 text-gray-600 text-[15px] sm:text-base leading-[1.8] max-w-lg">
            <p>
              Precaster is a <span className="font-semibold text-black">Digital transformation specified focus</span> — 
              sapae fex PTk. lit., fret High-value Customer across Cloud, Cyber-Sweeping Experience Platforms S 
              Entervise S27X. Product Propject, Hg lclf & Sepo of it. In Pypoe in, in notion, and Data 3.34.
            </p>

            <p>
              <span className="font-semibold text-black">Experience Engineering</span> and designes iss assegs on guest as 
              w in LLT., ciless to multiple complex business and technology are langers — 
              <span className="font-semibold text-black"> turning a empiler into opportunity</span> in conviallimation is 3 year.
            </p>
            
            {/* Added real fine labs text below the mockup placeholder filler text for a coherent hybrid */}
            <p>
              Agile by nature and deeply consultative by design, we partner with enterprises to navigate complex challenges, 
              turning disruption into competitive advantage.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Massive Graph Graphic Placeholder (Mimicking Image 2 Arrow vector) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[400px] sm:h-[500px] bg-blue-50/30 rounded-3xl border border-blue-100/50 flex flex-col items-center justify-center p-8 overflow-hidden group"
        >
          {/* Decorative Vector Elements Simulating the Image 2 Layout */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-80" />
          
          <div className="relative z-10 w-full h-full flex flex-col justify-end">
            <div className="absolute right-10 top-10 flex gap-4 opacity-70">
              <div className="p-4 bg-white shadow-xl rounded-full border border-blue-100"><GitMerge className="w-8 h-8 text-blue-500" strokeWidth={1.5} /></div>
              <div className="p-4 bg-white shadow-xl rounded-full border border-blue-100"><FileBarChart2 className="w-8 h-8 text-blue-400" strokeWidth={1.5} /></div>
            </div>
            
            {/* The giant trending up arrow */}
            <div className="relative w-full flex justify-end">
              <TrendingUp className="w-64 h-64 text-blue-500 drop-shadow-2xl translate-x-4 translate-y-4 group-hover:-translate-y-2 transition-transform duration-700" strokeWidth={0.5} />
            </div>
            
            {/* Vertical Bar chart pillars */}
            <div className="absolute bottom-0 left-10 flex items-end gap-6 w-full opacity-30">
              <div className="w-16 bg-blue-200 h-24 rounded-t-sm" />
              <div className="w-16 bg-blue-300 h-40 rounded-t-sm" />
              <div className="w-16 bg-blue-400 h-64 rounded-t-sm" />
              <div className="w-16 bg-blue-500 h-48 rounded-t-sm" />
            </div>
          </div>
        </motion.div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 sm:mt-32 border-t border-[#e9e9e9]" />
    </section>
  );
}