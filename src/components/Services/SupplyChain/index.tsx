"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Link2, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  Activity, 
  BarChart3, 
  Cpu, 
  Layers, 
  Network,
  Globe,
  ArrowRight,
  MessageCircle,
  Truck
} from "lucide-react";

// ----------------------------------------------------------------------------
// SUPPLY CHAIN ENRICHMENT COMPONENTS
// ----------------------------------------------------------------------------

/**
 * "Route Mesh" Background
 * Global map with moving cargo particles.
 */
const RouteMesh = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-emerald-200/50" />
    
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
       <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stopColor="#059669" stopOpacity="0" />
             <stop offset="50%" stopColor="#059669" stopOpacity="0.5" />
             <stop offset="100%" stopColor="#059669" stopOpacity="0" />
          </linearGradient>
       </defs>
       
       {[...Array(8)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${10 + i * 10} ${20 + (i%2)*40} Q ${30 + i * 5} ${50} ${90} ${80 - i * 5}`}
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.4, 0] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, delay: i * 1.5 }}
          />
       ))}

       {/* Cargo Particles */}
       {[...Array(12)].map((_, i) => (
         <motion.circle
           key={`cargo-${i}`}
           r="0.3"
           fill="#059669"
           animate={{ 
             cx: ["0%", "100%"],
             cy: [`${20 + i * 5}%`, `${80 - i * 5}%`],
             opacity: [0, 1, 0]
           }}
           transition={{ duration: 15 + i * 2, repeat: Infinity, delay: i * 1, ease: "linear" }}
         />
       ))}
    </svg>
  </div>
);

/**
 * ChatSCM AI Agent Visual
 * Floating UI representing the proprietary intelligent agent.
 */
const ChatSCMAgent = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8, x: 20 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 1, delay: 2 }}
    className="bg-white/90 backdrop-blur-md border border-emerald-100 p-6 rounded-3xl shadow-2xl shadow-emerald-200/20 max-w-[280px]"
  >
     <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
           <MessageCircle className="w-6 h-6" />
        </div>
        <div>
           <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">ChatSCM Agent</div>
           <div className="text-xs font-bold text-gray-400 italic font-mono">LPOPT Solver Active</div>
        </div>
     </div>
     <div className="space-y-3">
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
           <motion.div 
             className="h-full bg-emerald-500" 
             animate={{ width: ["0%", "85%", "40%", "92%"] }}
             transition={{ duration: 10, repeat: Infinity }}
           />
        </div>
        <div className="text-[11px] font-medium text-gray-500">Diagnosing planning failures across Node-74...</div>
     </div>
  </motion.div>
);

/**
 * Flow Reveal Hero
 * Lines converging into a central dashboard.
 */
const FlowReveal = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {!active && (
      <motion.div 
        className="absolute inset-0 z-50 bg-[#f8fafc] flex items-center justify-center pointer-events-none"
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <div className="relative w-[300px] h-[300px] flex items-center justify-center">
           {[...Array(4)].map((_, i) => (
             <motion.div 
               key={i}
               className="absolute inset-0 border border-emerald-500/20 rounded-full"
               initial={{ scale: 0, opacity: 1 }}
               animate={{ scale: 3, opacity: 0 }}
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
             />
           ))}
           <Activity className="w-12 h-12 text-emerald-600 animate-pulse relative z-10" />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ----------------------------------------------------------------------------
// PRIMARY COMPONENT
// ----------------------------------------------------------------------------

export default function SupplyChain() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-background text-foreground overflow-hidden selection:bg-emerald-500/20 transition-colors duration-500">
      
      {/* 1. HERO SECTION: THE RESILIENT FLOW */}
      <section className="relative w-full px-6 pt-32 pb-20 sm:pt-40 sm:pb-32 min-h-[90vh] flex items-center overflow-hidden">
        
        {/* Foundation Gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-100 transition-opacity"
          style={{ 
            background: "radial-gradient(circle at 50% -20%, var(--emerald-500-10, rgba(16, 185, 129, 0.1)), var(--bg) 80%)"
          }}
        />

        <RouteMesh />
        <FlowReveal active={isRevealed} />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center sm:text-left">
              
              {/* Pill */}
              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={isRevealed ? { opacity: 1, x: 0 } : {}}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/50 mb-8 shadow-sm"
              >
                 <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 fill-emerald-100/50" />
                 <span className="text-[10px] font-bold text-muted-foreground tracking-[0.3em] uppercase transition-colors">
                  Global Supply Chain // Status: Optimized
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isRevealed ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-7xl md:text-[105px] font-extrabold tracking-tight mb-10 leading-[0.95] text-foreground transition-colors"
              >
                The <span className="text-emerald-600 dark:text-emerald-500 transition-colors">Resilient</span>
                <br /> 
                Autonomous Flow
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isRevealed ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1 }}
                className="text-lg md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl font-medium tracking-tight mx-auto sm:mx-0 transition-colors"
              >
                Orchestrating complexity into competitive advantage. FineLabs delivers 
                <span className="text-emerald-600 dark:text-emerald-400 font-bold underline decoration-emerald-500/20 underline-offset-4 decoration-4"> end-to-end operational intelligence</span> 
                spanning networks, planning, and execution.
              </motion.p>

              {/* CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isRevealed ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
                className="flex flex-wrap items-center justify-center sm:justify-start gap-6"
              >
                <button className="px-10 py-5 bg-emerald-600 dark:bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-700 dark:hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300">
                   Analyze Your Network
                </button>
                <button className="px-10 py-5 bg-card text-foreground font-bold rounded-full border border-border hover:bg-muted transition-all duration-300 shadow-sm transition-colors">
                  Strategy Guide
                </button>
              </motion.div>
            </div>

            <div className="flex-1 hidden lg:block">
               <ChatSCMAgent />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES: OPTIMIZATION MODULES */}
      <section className="bg-background py-24 sm:py-32 relative border-t border-border transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="mb-20 text-center sm:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground transition-colors mb-6 h-auto">
              Core Consulting & <br /> Optimization Modules
            </h2>
            <p className="text-muted-foreground font-medium transition-colors">Data-driven frameworks to design the next-generation supply network.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { title: "Network Optimization", icon: <Network/>, desc: "Designing and simulating global supply networks to minimize logistics costs and carbon footprint while improving local service levels." },
               { title: "Strategic Planning (S&OP/IBP)", icon: <BarChart3/>, desc: "Unifying commercial goals with operational reality through advanced scenario-based demand and supply planning." },
               { title: "AI-Driven Root Cause", icon: <Cpu/>, desc: "Leveraging our LPOPT solver engine to diagnose systemic planning failures and automate exception management." },
               { title: "Connected Operations", icon: <Layers className="w-6 h-6"/>, desc: "Synchronizing WMS, TMS, and ERP systems for real-time visibility and autonomous workflow execution." }
             ].map((cap, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="p-8 sm:p-10 bg-card/40 border border-border rounded-[2.5rem] hover:bg-card hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-500 group flex flex-col sm:flex-row sm:gap-8"
               >
                 {/* Mobile Icon + Title Row */}
                 <div className="flex items-center sm:hidden gap-5 mb-5">
                   <div className="w-16 h-16 bg-secondary border border-border rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-all duration-500 shadow-sm h-auto">
                      {cap.icon}
                   </div>
                   <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors uppercase tracking-tight h-auto">{cap.title}</h3>
                 </div>

                 {/* Desktop Icon */}
                 <div className="hidden sm:flex w-16 h-16 bg-secondary border border-border rounded-2xl items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-all duration-500 shadow-sm h-auto">
                    {cap.icon}
                 </div>

                 {/* Content Div */}
                 <div>
                    {/* Desktop Title */}
                    <h3 className="hidden sm:block text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors uppercase tracking-tight h-auto">{cap.title}</h3>
                    
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 h-auto transition-colors">{cap.desc}</p>
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-all">
                        Configure Module <ArrowRight className="w-4 h-4" />
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY ECOSYSTEM: PARTNER PILLARS */}
      <section className="bg-emerald-950 dark:bg-emerald-950/40 py-24 sm:py-32 relative overflow-hidden transition-colors duration-500">
         <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10 pointer-events-none">
            <div className="absolute top-[10%] right-[20%] w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px]" />
         </div>

         <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
            <div className="text-center mb-20 max-w-2xl mx-auto">
               <h3 className="text-sm font-bold tracking-[0.4em] text-emerald-400 mb-6 uppercase transition-colors">Unified Ecosystem</h3>
               <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 h-auto">Strategic Technology <br /> Partnerships</h2>
               <p className="text-emerald-100/70 transition-colors">Seamlessly integrating the world&apos;s leading SCM planning and execution platforms.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { name: "Blue Yonder", accent: "#059669", tags: ["Cognitive Planning", "TMS/WMS"], icon: <Truck/> },
                 { name: "o9 Solutions", accent: "#10b981", tags: ["Scenario S&OP", "Supply Plan"], icon: <ChevronRight/> },
                 { name: "Kinaxis / Anaplan", accent: "#34d399", tags: ["Concurrent Planning", "Verticals"], icon: <Link2/> }
               ].map((partner, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -10 }}
                   className="p-10 rounded-[3.5rem] bg-white/5 backdrop-blur-xl border border-white/10 group cursor-default transition-all duration-500 shadow-2xl"
                 >
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-emerald-400 h-auto">
                       {partner.icon}
                    </div>
                    <h4 className="text-2xl font-black mb-4 tracking-tight uppercase italic h-auto transition-colors">{partner.name}</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                       {partner.tags.map((tag, j) => (
                         <span key={j} className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-[9px] font-bold tracking-widest text-emerald-300 uppercase transition-colors">
                            {tag}
                         </span>
                       ))}
                    </div>
                    <div className="flex items-center gap-2 text-white/40 font-bold text-xs tracking-widest group-hover:text-emerald-400 transition-colors uppercase">
                       PARTNER STATUS: INTEGRATED <ShieldCheck className="w-4 h-4" />
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
}
