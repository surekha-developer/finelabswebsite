"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Settings, 
  Lightbulb, 
  Code, 
  RefreshCw, 
  PenTool, 
  ArrowRight,
  Minimize2,
  Maximize2,
  Compass,
  CheckCircle2,
  GitBranch,
  Layers
} from "lucide-react";

// ----------------------------------------------------------------------------
// PRODUCT ENGINEERING ENRICHMENT COMPONENTS
// ----------------------------------------------------------------------------

/**
 * "Architectural Grid" Background
 * Technical coordinate grid with ruler ticks and scrolling markers.
 */
const ArchitecturalGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Base Grid */}
    <div className="absolute inset-0 opacity-[0.08]" 
         style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} 
    />
    
    {/* Ruler Ticks (Top & Left) */}
    <div className="absolute top-0 left-0 w-full h-8 flex justify-between px-4 border-b border-blue-100/50">
       {[...Array(20)].map((_, i) => (
         <div key={i} className={`h-full border-r border-blue-200/30 ${i % 5 === 0 ? 'w-px h-6' : 'w-px h-2'}`} />
       ))}
    </div>
    <div className="absolute top-0 left-0 h-full w-8 flex flex-col justify-between py-4 border-r border-blue-100/50">
       {[...Array(20)].map((_, i) => (
         <div key={i} className={`w-full border-b border-blue-200/30 ${i % 5 === 0 ? 'h-px w-6' : 'h-px w-2'}`} />
       ))}
    </div>

    {/* Moving Technical Markers */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute font-mono text-[9px] text-blue-500/40 uppercase tracking-tighter"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0], y: [0, 100, 0] }}
        transition={{ duration: 15 + i * 2, repeat: Infinity, delay: i * 3 }}
        style={{ left: `${10 + i * 15}%`, top: `${20 + i * 10}%` }}
      >
        [COORD_SYS_REF::{84.2 + i}] :: TICK_{i * 44}
      </motion.div>
    ))}
  </div>
);

/**
 * Complex Wireframe Gear visual for the background
 */
const WireframeVisual = ({ className = "" }: { className?: string }) => (
   <motion.div 
      initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
      animate={{ opacity: 0.15, rotate: 0, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={`pointer-events-none ${className}`}
   >
      <svg viewBox="0 0 400 400" className="w-full h-full text-blue-600">
         <motion.path 
            d="M 200 100 L 250 120 L 250 180 L 200 200 L 150 180 L 150 120 Z" 
            fill="none" stroke="currentColor" strokeWidth="0.5" 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
         />
         <circle cx="200" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="5 5" />
         <motion.path 
            d="M 100 150 L 300 150 M 200 50 L 200 250" 
            stroke="currentColor" strokeWidth="0.2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
         />
         {/* Intersecting technical lines */}
         {[...Array(12)].map((_, i) => (
            <line 
               key={i} 
               x1="200" y1="150" 
               x2={200 + Math.cos(i * 30 * Math.PI / 180) * 150} 
               y2={150 + Math.sin(i * 30 * Math.PI / 180) * 150} 
               stroke="currentColor" strokeWidth="0.1" 
            />
         ))}
      </svg>
   </motion.div>
);

/**
 * Drafting Reveal for Hero
 * Simulates a wireframe "drawing" onto the screen with a scanning light.
 */
const DraftingReveal = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {!active && (
      <motion.div 
        className="absolute inset-0 z-50 bg-[#f8fafc] flex flex-col items-center justify-center pointer-events-none"
        exit={{ opacity: 0, transition: { duration: 1.2 } }}
      >
        <div className="relative w-full h-[2px] bg-blue-600/20 overflow-hidden">
           <motion.div 
              className="absolute inset-0 bg-blue-500 shadow-[0_0_20px_#2563eb]"
              animate={{ left: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
           />
        </div>
        <div className="mt-12 flex flex-col items-center">
           <Compass className="w-12 h-12 text-blue-600 animate-spin-slow mb-4" />
           <p className="font-mono text-xs text-blue-600 tracking-[0.3em] uppercase animate-pulse">Initializing_Draft.v02</p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ----------------------------------------------------------------------------
// PRIMARY COMPONENT
// ----------------------------------------------------------------------------

export default function ProductEngineering() {
  const [isDrafted, setIsDrafted] = useState(false);

  useEffect(() => {
    // Faster reveal delay for snappier experience
    const timer = setTimeout(() => setIsDrafted(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-background text-foreground overflow-hidden selection:bg-blue-500/20 transition-colors duration-500">
      
      {/* 1. HERO SECTION: BLUEPRINT OF INNOVATION */}
      <section className="relative w-full px-6 pt-24 pb-16 sm:pt-28 sm:pb-32 min-h-[92vh] flex items-center overflow-hidden">
        
        <ArchitecturalGrid />
        
        {/* Wireframe Hexagons / Gears Clustering */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <WireframeVisual className="absolute right-[-12%] top-[35%] -translate-y-1/2 w-[650px] h-[650px] opacity-25" />
           
           {/* Even more drifting hexagons in different sizes and speeds */}
           {[...Array(6)].map((_, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.4 }}
               animate={{ opacity: [0, 0.18, 0], scale: [0.6, 1.2, 0.6], rotate: [0, 360] }}
               transition={{ duration: 20 + i * 8, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
               className="absolute"
               style={{ 
                  right: `${(i * 18) % 60}%`, 
                  top: `${(i * 25) % 80}%`,
                  width: `${80 + i * 60}px`,
                  height: `${80 + i * 60}px`
               }}
             >
                <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600 dark:text-blue-500 transition-colors">
                   <path d="M 50 10 L 85 30 L 85 70 L 50 90 L 15 70 L 15 30 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
                   <path d="M 50 25 L 75 40 L 75 60 L 50 75 L 25 60 L 25 40 Z" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" />
                   <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.4" />
                </svg>
             </motion.div>
           ))}

           {/* Floating technical axis markers */}
           {[...Array(4)].map((_, i) => (
              <motion.div 
                key={`axis-${i}`} 
                className="absolute border-l border-blue-200/50 dark:border-blue-500/20 h-32 w-px"
                style={{ left: `${20 + i * 20}%`, top: `${10 + i * 15}%` }}
                animate={{ height: [0, 128, 0], opacity: [0, 0.3, 0] }}
                transition={{ duration: 10, repeat: Infinity, delay: i * 2.5 }}
              />
           ))}
        </div>

        <DraftingReveal active={isDrafted} />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-4xl">
            
            {/* Pill */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={isDrafted ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/50 mb-10 shadow-sm"
            >
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-[0.3em] uppercase">
                Drafting Excellence // REF: ENG-2024
              </span>
            </motion.div>

            {/* Headline with technical "Blueprint" accent */}
            <motion.h1 
              initial={{ opacity: 0, y: 30, letterSpacing: "-0.05em" }}
              animate={isDrafted ? { opacity: 1, y: 0, letterSpacing: "-0.02em" } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl sm:text-7xl md:text-[105px] font-extrabold tracking-tight mb-12 leading-[0.9] text-foreground transition-colors"
            >
              Product{" "}
              <br />
              <span className="text-blue-600 dark:text-blue-500 relative inline-block transition-colors">
                Engineering
                <motion.div 
                   className="absolute -bottom-2 left-0 h-1.5 bg-blue-100/50 dark:bg-blue-500/10 -z-10" 
                   initial={{ width: 0 }}
                   animate={isDrafted ? { width: "105%" } : {}}
                   transition={{ duration: 1, delay: 1 }}
                />
              </span>
              <br />
              Full Lifecycle
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isDrafted ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-lg md:text-2xl text-muted-foreground mb-14 leading-relaxed max-w-2xl font-medium tracking-tight h-auto transition-colors"
            >
              Engineering the blueprints of industrial impact. We partner across the 
              entire software lifecycle — from <span className="text-blue-600 dark:text-blue-400 font-bold italic">ideation and architecture</span> 
              to mission-critical delivery at global scale.
            </motion.p>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isDrafted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-6"
            >
              <button className="px-10 py-5 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
                 Build Your Blueprint
              </button>
              <button className="px-10 py-5 bg-card text-foreground font-bold rounded-full border border-border hover:bg-muted transition-all duration-300 shadow-sm transition-colors">
                View Lifecycle
              </button>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto absolute bottom-0 left-6 right-6 border-t border-border transition-colors z-10" />
      </section>

      {/* 2. ENGINEERING BLOCKS GRID */}
      <section className="bg-background py-24 sm:py-32 relative border-t border-border transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="mb-20 text-center sm:text-left">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-4 uppercase"
            >
              — ENGINEERING_CORE.v4
            </motion.p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground transition-colors mb-6 h-auto">
              Precision Engineering <br /> for Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { 
                 title: "Product & Platform Strategy", 
                 icon: <Lightbulb className="w-10 h-10 text-amber-500"/>, 
                 items: ["Design Thinking & Incubation", "NPI with Commercial Readiness", "Innovation Labs", "Co-Innovation Ecosystems"]
               },
               { 
                 title: "Full-Cycle Engineering", 
                 icon: <Code className="w-10 h-10 text-indigo-600"/>, 
                 items: ["Agile Development Delivery", "Modern DevSecOps Pipelines", "Site Reliability (SRE)", "Integrated Cyber Security"]
               },
               { 
                 title: "Modernization Architecture", 
                 icon: <RefreshCw className="w-10 h-10 text-blue-600"/>, 
                 items: ["Legacy Rationalization", "Microservices & APIification", "Container Enablement", "Cloud Assessment & Migration"]
               },
               { 
                 title: "Sustenance & Support", 
                 icon: <PenTool className="w-10 h-10 text-purple-600"/>, 
                 items: ["Sustenance Engineering", "Porting & Certification", "End-of-Life Management", "Re-engineering Stacks"]
               }
             ].map((block, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="p-10 bg-card/40 border border-border rounded-[2.5rem] hover:bg-card hover:shadow-2xl hover:border-blue-500/50 transition-all duration-500 group"
               >
                 <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 bg-secondary border border-border rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 h-auto">
                       {block.icon}
                    </div>
                    <div>
                       <h3 className="text-2xl sm:text-3xl font-bold text-foreground transition-colors h-auto">{block.title}</h3>
                       <div className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mt-1 transition-colors">Status: Operational</div>
                    </div>
                 </div>
                 <div className="space-y-4">
                    {block.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <CheckCircle2 className="w-4 h-4 text-blue-500" />
                         <span className="text-muted-foreground text-sm sm:text-base font-medium tracking-tight transition-colors">{item}</span>
                      </div>
                    ))}
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT LIFECYCLE CYCLE */}
      <section className="bg-background py-24 sm:py-32 overflow-hidden border-t border-border transition-colors duration-500">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h3 className="text-xs font-bold tracking-[0.5em] text-blue-600 dark:text-blue-400 mb-4 uppercase transition-colors">Lifecycle Continuum</h3>
               <h2 className="text-4xl sm:text-5xl font-bold text-foreground transition-colors h-auto">Connected Product Excellence</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
               {/* Connecting Dotted Line (Desktop) */}
               <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px border-t border-dashed border-border z-0 transition-colors" />
               
               {[
                 { stage: "Ideation", icon: <Layers className="w-8 h-8"/>, desc: "Strategy & Incubation" },
                 { stage: "Construction", icon: <GitBranch className="w-8 h-8"/>, desc: "Engineering & Sprints" },
                 { stage: "Evolution", icon: <RefreshCw className="w-8 h-8"/>, desc: "Modernization & Pivot" },
                 { stage: "Sustenance", icon: <PenTool className="w-8 h-8"/>, desc: "Support & Transition" }
               ].map((step, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.2 }}
                   className="relative flex flex-col items-center group z-10"
                 >
                    <div className="w-24 h-24 bg-card border border-border rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm group-hover:shadow-2xl group-hover:border-blue-500/50 group-hover:-translate-y-2 transition-all duration-500 mb-6 h-auto transition-colors">
                       {step.icon}
                    </div>
                    <div className="text-center">
                       <h4 className="text-xl sm:text-2xl font-bold text-foreground transition-colors h-auto">{step.stage}</h4>
                       <p className="text-muted-foreground text-sm font-medium italic transition-colors">{step.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
}
