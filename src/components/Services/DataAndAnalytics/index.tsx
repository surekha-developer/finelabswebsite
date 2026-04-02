"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart2, 
  Brain, 
  RefreshCcw, 
  ShieldCheck, 
  Sparkles, 
  Library, 
  RadioTower, 
  TrendingUp, 
  Activity, 
  ArrowRight,
  Globe,
  PieChart
} from "lucide-react";

// ----------------------------------------------------------------------------
// DATA & ANALYTICS ENRICHMENT COMPONENTS
// ----------------------------------------------------------------------------

/**
 * "Insight Grid" Background
 * Subtle moving data packets along grid lines.
 */
const InsightGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="data-grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#2dd4bf" strokeWidth="0.5" strokeOpacity="0.1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#data-grid)" />
      
      {/* Moving Packets along grid lines */}
      {[...Array(6)].map((_, i) => (
        <motion.circle
          key={i}
          r="1.5"
          fill="#0d9488"
          animate={{ 
            cx: ["0%", "100%"], 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: 8 + i * 2, 
            repeat: Infinity, 
            delay: i * 1.5, 
            ease: "linear" 
          }}
          style={{ cy: `${15 + i * 15}%` }}
        />
      ))}
    </svg>
  </div>
);

/**
 * Prismatic Light Reveal for Hero
 */
const PrismaticReveal = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {!active && (
      <motion.div 
        className="absolute inset-0 z-50 bg-white flex items-center justify-center pointer-events-none"
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <motion.div 
           className="w-full h-full flex justify-between"
           initial={{ opacity: 1 }}
           animate={{ opacity: 1 }}
        >
           {['#3b82f6', '#f59e0b', '#10b981', '#6366f1', '#ec4899'].map((color, i) => (
             <motion.div 
               key={i}
               style={{ backgroundColor: color }}
               className="h-full w-full opacity-20"
               initial={{ y: "-100%" }}
               animate={{ y: "100%" }}
               transition={{ 
                  duration: 1.5, 
                  delay: i * 0.1, 
                  ease: "easeInOut",
                  repeat: 0
               }}
             />
           ))}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/**
 * Simulated Global Analytics Dashboard
 */
const ControlTowerVisual = () => {
  return (
    <div className="relative bg-[#0f172a] rounded-[2.5rem] p-10 sm:p-16 border border-slate-800 shadow-2xl overflow-hidden">
       {/* Background Noise/Grid */}
       <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
             <pattern id="tower-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" stroke="#fff" strokeWidth="0.5" />
             </pattern>
             <rect width="100%" height="100%" fill="url(#tower-grid)" />
          </svg>
       </div>

       <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 border border-teal-500/30">
                   <Globe className="w-5 h-5 animate-spin-slow" />
                </div>
                <span className="text-xs font-bold text-teal-400 tracking-[0.3em] uppercase italic">System Operational</span>
             </div>
             <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Enterprise Control Tower</h3>
             <p className="text-slate-400 text-lg leading-relaxed mb-8">
               Our visual intelligence platforms consolidate fragmented data 
               into a unified command center, providing executives with 
               real-time visibility across the entire value chain.
             </p>
             <div className="flex gap-4">
               <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                  <div className="text-teal-400 font-bold mb-1">94%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Accuracy</div>
               </div>
               <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                  <div className="text-indigo-400 font-bold mb-1">12ms</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Latency</div>
               </div>
             </div>
          </div>

          {/* Interactive Stat Visual */}
          <div className="relative h-[300px] flex items-center justify-center">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="w-full h-full border border-teal-500/10 rounded-full flex items-center justify-center"
             >
                <div className="w-3/4 h-3/4 border border-teal-500/20 rounded-full flex items-center justify-center">
                   <div className="w-1/2 h-1/2 bg-teal-500/10 rounded-full flex items-center justify-center blur-xl" />
                </div>
             </motion.div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                   <Activity className="w-12 h-12 text-teal-400 mx-auto mb-4 animate-pulse" />
                   <h4 className="text-white font-mono text-xl">PULSE_DETECTION</h4>
                </div>
             </div>
             
             {/* Floating Markers */}
             {[...Array(5)].map((_, i) => (
                <motion.div 
                   key={i}
                   className="absolute w-2 h-2 bg-teal-400 rounded-full"
                   animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.5, 0.5]
                   }}
                   transition={{ 
                      duration: 3 + i, 
                      repeat: Infinity, 
                      delay: i * 0.8 
                   }}
                   style={{ 
                      top: `${Math.random() * 100}%`, 
                      left: `${Math.random() * 100}%` 
                   }}
                />
             ))}
          </div>
       </div>
    </div>
  );
};

// ----------------------------------------------------------------------------
// PRIMARY COMPONENT
// ----------------------------------------------------------------------------

export default function DataAndAnalytics() {
  const [isAnalyzed, setIsAnalyzed] = useState(false);

  useEffect(() => {
    // Cinematic delay aligned with the data-sourcing theme
    const timer = setTimeout(() => setIsAnalyzed(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white text-[#121926] overflow-hidden selection:bg-teal-50">
      
      {/* 1. HERO SECTION: THE FLOW OF INTELLIGENCE */}
      <section className="relative w-full px-6 pt-32 pb-16 sm:pt-40 sm:pb-32 min-h-[90vh] flex items-center overflow-hidden">
        
        {/* Soft Teal-Glow Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, #f0fdfa 0%, #ffffff 100%)" }}
        />
        
        <InsightGrid />
        <PrismaticReveal active={isAnalyzed} />

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center sm:text-left">
          <div className="max-w-4xl mx-auto sm:mx-0">
            
            {/* Pill */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={isAnalyzed ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-teal-100 mb-8 shadow-sm"
            >
              <Activity className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold text-teal-600 tracking-[0.2em] uppercase">
                Intelligence Flow // v3.0
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
              animate={isAnalyzed ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-5xl sm:text-6xl md:text-[95px] font-extrabold tracking-tight mb-10 leading-[1.0] text-slate-900"
            >
              Data{" "}
              <span className="text-teal-600 drop-shadow-sm">
                Platforms
              </span>
              <br />& Intelligence
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isAnalyzed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl font-medium tracking-tight"
            >
              Transforming raw complexity into coherent competitive advantage. 
              We engineer <span className="text-teal-600 font-bold">intelligent data ecosystems</span> 
              designed to fuel real-time enterprise decisions.
            </motion.p>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isAnalyzed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-4"
            >
              <button className="px-10 py-5 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-teal-200/50">
                 Explore Intelligence
              </button>
              <button className="px-10 py-5 bg-white text-slate-900 font-bold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm">
                View Platforms
              </button>
            </motion.div>
          </div>
        </div>

        {/* Soft bottom transition line */}
        <div className="max-w-7xl mx-auto absolute bottom-0 left-6 right-6 border-t border-gray-100 z-10" />
      </section>

      {/* 2. INTELLIGENCE ECOSYSTEM Grid */}
      <section className="bg-white py-24 sm:py-32 relative border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="mb-20 text-center sm:text-left">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] text-teal-600 mb-4 uppercase"
            >
              — ECOSYSTEM_CAPABILITIES.v4
            </motion.p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Full-Spectrum Data <br /> Engineering & Insight
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-px bg-slate-100 border border-slate-100 rounded-[2rem] overflow-hidden">
             {[
               { title: "AI Ops & MLOps", icon: <Brain className="w-8 h-8"/>, desc: "Operationalizing AI at scale with automated retraining and MLOps pipelines." },
               { title: "Workflow Automation", icon: <RefreshCcw className="w-8 h-8"/>, desc: "Hyper-automation connecting fragmented data flows across enterprise systems." },
               { title: "DevSecOps", icon: <ShieldCheck className="w-8 h-8"/>, desc: "Security-integrated pipelines ensuring data assets are protected through SDLC." },
               { title: "Generative AI", icon: <Sparkles className="w-8 h-8"/>, desc: "Enterprise-grade GenAI fine-tuned for specialized domains and data." },
               { title: "Agentic AI", icon: <Library className="w-8 h-8"/>, desc: "Retrieval-Augmented Generation (RAG) and autonomous agent frameworks." },
               { title: "Decision Intelligence", icon: <TrendingUp className="w-8 h-8"/>, desc: "End-to-end visibility platforms for real-time operational decision support." }
             ].map((module, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="p-10 sm:p-14 bg-white hover:bg-teal-50/50 transition-all group"
               >
                 <div className="text-teal-600 mb-8 group-hover:scale-110 group-hover:text-teal-700 transition-all duration-500">
                    {module.icon}
                 </div>
                 <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-teal-700 transition-colors">
                   {module.title}
                 </h3>
                 <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                   {module.desc}
                 </p>
                 <div className="flex items-center gap-2 text-xs font-bold text-teal-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Detail</span>
                    <ArrowRight className="w-3 h-3" />
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. CONTROL TOWER SECTION */}
      <section className="bg-white py-24 sm:py-32">
         <div className="max-w-7xl mx-auto px-6">
            <ControlTowerVisual />
         </div>
      </section>

      {/* 4. PARTNERSHIP BAND */}
      <section className="bg-gray-50/50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <p className="text-[10px] font-bold text-gray-400 tracking-[0.5em] uppercase mb-4">Mastering the Modern Data Stack</p>
           </div>
           <div className="flex flex-wrap items-center justify-around gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {['Snowflake', 'Databricks', 'Informatica', 'PowerBI', 'Tableau'].map((partner) => (
                <div key={partner} className="text-xl font-bold tracking-tighter text-slate-400 hover:text-teal-600 transition-colors cursor-default uppercase italic">
                  {partner}
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}
