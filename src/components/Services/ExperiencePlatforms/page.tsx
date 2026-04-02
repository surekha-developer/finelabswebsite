"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Target, 
  Wrench, 
  CheckSquare, 
  Layers, 
  Cpu, 
  Smartphone, 
  Settings, 
  ArrowRight,
  Database,
  Users,
  Repeat
} from "lucide-react";

// ----------------------------------------------------------------------------
// EXPERIENCE PLATFORMS ENRICHMENT COMPONENTS
// ----------------------------------------------------------------------------

/**
 * "Connection Mesh" Background
 * Interconnected drifting nodes representing platform connectivity.
 */
const ConnectionMesh = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Drifting Connection Lines */}
      {[...Array(12)].map((_, i) => (
        <motion.line
          key={`line-${i}`}
          x1={`${Math.random() * 100}%`}
          y1={`${Math.random() * 100}%`}
          x2={`${Math.random() * 100}%`}
          y2={`${Math.random() * 100}%`}
          stroke="#2563eb"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: i * 2 }}
        />
      ))}

      {/* Floating Nodes */}
      {[...Array(20)].map((_, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={`${Math.random() * 100}%`}
          cy={`${Math.random() * 100}%`}
          r="1.5"
          fill="#2563eb"
          initial={{ opacity: 0.1 }}
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity, 
            delay: Math.random() * 5 
          }}
        />
      ))}
    </svg>
  </div>
);

/**
 * Glassy Interface Synthesis Reveal for Hero
 */
const InterfaceSynthesis = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {!active && (
      <motion.div 
        className="absolute inset-0 z-50 pointer-events-none"
        exit={{ opacity: 0 }}
      >
        <div className="flex w-full h-full">
           {[...Array(4)].map((_, i) => (
             <motion.div 
               key={i}
               initial={{ x: i % 2 === 0 ? "-100%" : "100%" }}
               animate={{ x: "0%" }}
               exit={{ x: i % 2 === 0 ? "-100%" : "100%" }}
               transition={{ duration: 1, delay: i * 0.1, ease: [0.65, 0, 0.35, 1] }}
               className="h-full w-1/4 bg-white/40 backdrop-blur-3xl border-r border-white/20"
             />
           ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ----------------------------------------------------------------------------
// PRIMARY COMPONENT
// ----------------------------------------------------------------------------

export default function ExperiencePlatforms() {
  const [isSynthesized, setIsSynthesized] = useState(false);

  useEffect(() => {
    // Reveal timing aligned with Platform-led transformation standards
    const timer = setTimeout(() => setIsSynthesized(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white text-[#121926] overflow-hidden selection:bg-blue-50">
      
      {/* 1. HERO SECTION: INTERFACE SYNTHESIS */}
      <section className="relative w-full px-6 pt-32 pb-16 sm:pt-40 sm:pb-24 min-h-[90vh] flex items-center overflow-hidden">
        
        {/* Foundation Gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}
        />
        
        <ConnectionMesh />
        <InterfaceSynthesis active={isSynthesized} />

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center sm:text-left">
          <div className="max-w-4xl mx-auto sm:mx-0">
            
            {/* Pill */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={isSynthesized ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-blue-100 mb-8 shadow-sm"
            >
              <Repeat className="w-4 h-4 text-blue-600 animate-spin-slow" />
              <span className="text-xs font-bold text-blue-600 tracking-[0.2em] uppercase">
                Seamless Connectivity // v1.0
              </span>
            </motion.div>

            {/* Headline with Glass Reveal */}
            <motion.h1 
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={isSynthesized ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-5xl sm:text-6xl md:text-[90px] font-extrabold tracking-tight mb-10 leading-[1.0] text-[#121926]"
            >
              Tailored{" "}
              <span className="text-[#2b6eff] underline decoration-blue-100 underline-offset-8">
                Platform
              </span>
              <br />Efficiency
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isSynthesized ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl font-medium tracking-tight"
            >
              FineLabs redefines business intelligence through tailored, 
              platform-led solutions that drive growth, operational 
              excellence, and <span className="text-[#2b6eff] font-bold">lasting advantage</span>.
            </motion.p>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isSynthesized ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-4"
            >
              <button className="px-10 py-5 bg-[#2b6eff] text-white font-bold rounded-full hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-200/50">
                 Explore Platforms
              </button>
              <button className="px-10 py-5 bg-white text-[#121926] font-bold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm">
                View Domains
              </button>
            </motion.div>
          </div>
        </div>

        {/* Ambient "Platform Ecosystem" Glow */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={isSynthesized ? { opacity: 0.3, scale: 1.2 } : {}}
           transition={{ duration: 3 }}
           className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20"
           style={{ background: 'radial-gradient(circle, #2b6eff 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        
        <div className="max-w-7xl mx-auto absolute bottom-0 left-6 right-6 border-t border-gray-100 z-10" />
      </section>

      {/* 2. THREE PILLARS: COGNITIVE SUPPORT */}
      <section className="bg-white py-24 sm:py-32 relative border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="mb-20 text-center sm:text-left">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] text-[#2b6eff] mb-4 uppercase"
            >
              — PLATFORM_PILLARS.v1
            </motion.p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#121926] mb-6">
              Strategic Capability <br /> Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "Digital Transformation", icon: <Target className="w-10 h-10"/>, desc: "Implementation, Advisory, Migration, and Enhancements across all platform domains." },
               { title: "Application Support", icon: <Settings className="w-10 h-10"/>, desc: "Production Support, Maintenance, Performance Optimization, and Integration." },
               { title: "Quality Assurance", icon: <CheckSquare className="w-10 h-10"/>, desc: "Functional Testing, Test Automation, and Performance Engineering cycles." }
             ].map((pillar, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="group p-10 bg-gray-50/50 border border-gray-100 rounded-3xl hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all duration-500"
               >
                 <div className="w-20 h-20 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-[#2b6eff] mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                    {pillar.icon}
                 </div>
                 <h3 className="text-2xl font-bold mb-4 text-[#121926] group-hover:text-[#2b6eff] transition-colors">
                   {pillar.title}
                 </h3>
                 <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                   {pillar.desc}
                 </p>
                 <div className="flex items-center gap-2 text-xs font-bold text-[#2b6eff] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore Pillar</span>
                    <ArrowRight className="w-3 h-3" />
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. PLATFORM DOMAINS: THE ECOSYSTEM WHEEL */}
      <section className="bg-[#f8fafc] py-24 sm:py-32 relative overflow-hidden border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            <div className="max-w-2xl mb-20">
               <h3 className="text-3xl sm:text-4xl font-bold text-[#121926] mb-6">Six Platform Domains</h3>
               <p className="text-gray-600 text-lg leading-relaxed">
                 Seamless implementation and advisory expertise across the world&apos;s leading 
                 enterprise platforms, ensure outcomes align with strategy from day one.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 { domain: "ERP Systems", brands: ["SAP", "Oracle", "ServiceNow", "MS Dynamics"], icon: <Database className="w-5 h-5"/> },
                 { domain: "Supply Chain (SCM)", brands: ["SAP", "Blue Yonder", "O9", "Kinaxis"], icon: <Layers className="w-5 h-5"/> },
                 { domain: "CRM Excellence", brands: ["Salesforce", "Freshsales", "MS Dynamics"], icon: <Users className="w-5 h-5"/> },
                 { domain: "Human Capital (HCM)", brands: ["SuccessFactors", "Oracle Cloud", "Workday"], icon: <Zap className="w-5 h-5"/> },
                 { domain: "Workflow Automation", brands: ["ServiceNow", "Blackline", "Icertis"], icon: <Repeat className="w-5 h-5"/> },
                 { domain: "Mobile Experience", brands: ["iOS/Android", "Flutter", "React Native"], icon: <Smartphone className="w-5 h-5"/> }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                 >
                    <div className="flex items-center gap-3 mb-6">
                       <div className="p-3 bg-blue-50 text-[#2b6eff] rounded-xl group-hover:bg-[#2b6eff] group-hover:text-white transition-colors">
                          {item.icon}
                       </div>
                       <span className="font-bold text-[#121926]">{item.domain}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                       {item.brands.map(b => (
                         <span key={b} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-bold text-gray-500 tracking-tight">
                           {b}
                         </span>
                       ))}
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. MOBILE PERSPECTIVE CALLOUT */}
      <section className="bg-white py-24 sm:py-32">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Mockup Visual */}
            <div className="relative p-1 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-[3rem]">
               <div className="bg-[#121926] rounded-[2.8rem] p-12 aspect-[4/3] flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 text-center">
                     <Smartphone className="w-24 h-24 text-[#2b6eff] mx-auto mb-6 animate-pulse" />
                     <h4 className="text-white font-bold text-2xl mb-2 italic uppercase">Enterprise Mobile</h4>
                     <p className="text-blue-300 text-sm font-mono tracking-tighter">Extend. Optimize. Deliver.</p>
                  </div>
                  {/* Floating Action Bars */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                      className="absolute w-32 h-2 bg-white/5 rounded-full" 
                      style={{ bottom: 40 + i * 16, right: 40 }}
                    />
                  ))}
               </div>
            </div>

            <div>
               <p className="text-xs font-bold tracking-[0.4em] text-[#2b6eff] mb-4 uppercase">— MOBILE_SYNTHESIS</p>
               <h3 className="text-4xl font-bold text-[#121926] mb-8">Empowered Experiences Anywhere</h3>
               <p className="text-gray-600 text-lg leading-relaxed mb-8">
                 Bridging the gap between enterprise complexity and user simplicity. 
                 We extend platform capabilities through intuitive, high-performance 
                 mobile interfaces that keep teams productive on any device.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  <div>
                     <div className="text-2xl font-bold text-[#121926] mb-1">0ms</div>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Interface Latency</div>
                  </div>
                  <div>
                     <div className="text-2xl font-bold text-[#121926] mb-1">100%</div>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Cloud Sync</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
