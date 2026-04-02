"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Radio, 
  ArrowDown, 
  Settings, 
  Cpu, 
  Globe, 
  Activity, 
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight
} from "lucide-react";

// ----------------------------------------------------------------------------
// IOT & EDGE ENRICHMENT COMPONENTS
// ----------------------------------------------------------------------------

/**
 * "Edge Mesh" Background
 * Interconnected pulsing nodes representing edge device connectivity.
 */
const EdgeMesh = () => {
  const nodes = [...Array(12)].map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size / 10}
              fill="#0d9488"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, delay: node.delay }}
            />
            {nodes.slice(i + 1, i + 3).map((target, j) => (
              <motion.line
                key={j}
                x1={node.x}
                y1={node.y}
                x2={target.x}
                y2={target.y}
                stroke="#0d9488"
                strokeWidth="0.05"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 0], opacity: [0, 0.3, 0] }}
                transition={{ duration: 8, repeat: Infinity, delay: node.delay }}
              />
            ))}
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

/**
 * Signal Pulse Hero Reveal
 * Expanding waves emanating from the center.
 */
const SignalPulse = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {!active && (
      <motion.div 
        className="absolute inset-0 z-50 bg-[#f8fafc] flex items-center justify-center pointer-events-none"
        exit={{ opacity: 0, transition: { duration: 1.2 } }}
      >
        <div className="relative">
           {[...Array(3)].map((_, i) => (
             <motion.div 
               key={i}
               className="absolute inset-0 border-2 border-teal-500/30 rounded-full"
               style={{ width: 100, height: 100, left: -50, top: -50 }}
               animate={{ scale: [1, 4], opacity: [0.5, 0] }}
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
             />
           ))}
           <Radio className="w-12 h-12 text-teal-600 animate-pulse relative z-10" />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ----------------------------------------------------------------------------
// PRIMARY COMPONENT
// ----------------------------------------------------------------------------

export default function IoTAndEdge() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-[#f8fafc] text-[#121926] overflow-hidden selection:bg-teal-50">
      
      {/* 1. HERO SECTION: THE INTELLIGENT EDGE */}
      <section className="relative w-full px-6 pt-32 pb-20 sm:pt-40 sm:pb-32 min-h-[90vh] flex items-center overflow-hidden">
        
        <EdgeMesh />
        <SignalPulse active={isRevealed} />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-4xl text-center sm:text-left">
            
            {/* Pill */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={isRevealed ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-teal-100 mb-8 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 text-teal-600 fill-teal-100" />
              <span className="text-[10px] font-bold text-teal-600 tracking-[0.3em] uppercase">
                Edge Intelligence // Status: Synchronized
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isRevealed ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-7xl md:text-[100px] font-extrabold tracking-tight mb-10 leading-[0.95] text-[#121926]"
            >
              The <span className="text-teal-600 italic">Intelligent</span>
              <br />
              Connected Edge
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl font-medium tracking-tight mx-auto sm:mx-0"
            >
              Transforming physical operations into real-time digital intelligence. 
              We leverage <span className="text-teal-600 font-bold underline decoration-teal-200 underline-offset-4">advanced IoT architecture</span> to deliver 
              unprecedented visibility and resilience from the edge.
            </motion.p>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-4"
            >
              <button className="px-10 py-5 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-teal-200/50">
                 Activate Your Edge
              </button>
              <button className="px-10 py-5 bg-white text-[#121926] font-bold rounded-full border border-gray-200 hover:border-teal-200 transition-all duration-300 shadow-sm">
                Case Studies
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-300 pointer-events-none"
        >
           <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* 2. CORE CAPABILITIES: INTELLIGENCE MODULES */}
      <section className="bg-white py-24 sm:py-32 relative border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121926] mb-6">
              Empowering the Distributed Enterprise
            </h2>
            <p className="text-gray-500 font-medium">FineLabs delivers a unified fabric of connectivity spanning plants, warehouses, and logistics nodes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               {
                 title: "Asset & Network Visibility",
                 desc: "Real-time digital twins of sensors and assets surfaced through a unified dashboard for uptime and exception monitoring.",
                 icon: <Globe className="w-8 h-8 text-teal-600" />,
                 tag: "Visibility"
               },
               {
                 title: "Predictive Intelligence",
                 desc: "AI models continuously analyze operational data to forecast demand, predict downtime, and flag emerging supply risks.",
                 icon: <Cpu className="w-8 h-8 text-teal-600" />,
                 tag: "AI/ML"
               },
               {
                 title: "Workflow Automation",
                 desc: "Event-driven cycles trigger replenishment or maintenance automatically based on real-time IoT thresholds and ERP integration.",
                 icon: <Settings className="w-8 h-8 text-teal-600" />,
                 tag: "Sync"
               }
             ].map((cap, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="group p-10 bg-gray-50/50 border border-gray-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:border-teal-100 transition-all duration-500"
               >
                 <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    {cap.icon}
                 </div>
                 <div className="text-[10px] font-bold text-teal-600 uppercase tracking-widest mb-3">{cap.tag}</div>
                 <h3 className="text-xl font-bold text-[#121926] mb-4 group-hover:text-teal-600 transition-colors">{cap.title}</h3>
                 <p className="text-gray-500 text-sm leading-relaxed mb-8">{cap.desc}</p>
                 <div className="flex items-center gap-2 text-teal-600 font-bold text-sm tracking-tight pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Capability <ArrowRight className="w-4 h-4" />
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. TANGIBLE ROI: THE IMPACT HUB */}
      <section className="bg-teal-600 py-32 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full -mr-64 -mt-64 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400 opacity-10 rounded-full -ml-64 -mb-64 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">Tangible ROI & Impact</h2>
            <p className="text-teal-100 font-medium">Quantifiable efficiencies driven by real-time edge awareness.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { value: "15%", label: "Reduction in Downtime", sub: "Predictive maintenance intervention", icon: <Activity className="w-6 h-6"/> },
               { value: "20%", label: "Asset Utilization", sub: "Driven by real-time visibility", icon: <Layers className="w-6 h-6"/> },
               { value: "24/7", label: "Autonomous Monitoring", sub: "Connected operations 24/7", icon: <ShieldCheck className="w-6 h-6"/> }
             ].map((stat, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-[3rem] text-center text-white hover:bg-white/20 transition-all duration-500 shadow-2xl"
               >
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-8">
                    {stat.icon}
                 </div>
                 <div className="text-6xl font-black mb-4 tracking-tighter">{stat.value}</div>
                 <h4 className="text-xl font-bold mb-2 tracking-tight">{stat.label}</h4>
                 <p className="text-teal-100/70 text-sm font-medium">{stat.sub}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}
