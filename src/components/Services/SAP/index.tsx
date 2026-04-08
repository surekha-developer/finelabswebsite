"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ChevronRight,
  Cpu,
  Database,
  ShieldCheck,
  Cloud,
  BarChart3,
  Users,
  Hexagon,
  ArrowRight,
  Layers
} from "lucide-react";

// ----------------------------------------------------------------------------
// SAP ENRICHMENT COMPONENTS
// ----------------------------------------------------------------------------

/**
 * "Crystal Lattice" Background
 * Stable geometric structures representing the SAP core.
 */
const CrystalLattice = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <pattern id="lattice" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 20 10 L 10 20 L 0 10 Z" fill="none" stroke="#005dbd" strokeWidth="0.1" />
          <circle cx="10" cy="10" r="0.5" fill="#005dbd" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lattice)" />

      {/* Drifting Sapphire Points */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={i}
          cx={`${10 + i * 12}%`}
          cy={`${20 + (i % 3) * 25}%`}
          r="0.4"
          fill="#005dbd"
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i }}
        />
      ))}
    </svg>
  </div>
);

/**
 * Core Synthesis Hero Reveal
 * Hexagonal panels locking together to form the core.
 */
const CoreSynthesis = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {!active && (
      <motion.div
        className="absolute inset-0 z-50 bg-[#f8fafc] flex items-center justify-center pointer-events-none"
        exit={{ opacity: 0, transition: { duration: 1.2 } }}
      >
        <div className="relative w-[300px] h-[300px] flex items-center justify-center">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ x: (i % 2 === 0 ? -200 : 200), opacity: 0, rotate: i * 60 }}
              animate={{ x: 0, opacity: 0.3 }}
              transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
            >
              <Hexagon className="w-24 h-24 text-[#005dbd]" />
            </motion.div>
          ))}
          <div className="relative z-10 w-16 h-16 bg-[#005dbd] rounded-xl flex items-center justify-center shadow-2xl">
            <Database className="w-8 h-8 text-white" />
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ----------------------------------------------------------------------------
// PRIMARY COMPONENT
// ----------------------------------------------------------------------------

export default function SAP() {
  const [isSynthesized, setIsSynthesized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsSynthesized(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-background text-foreground overflow-hidden selection:bg-blue-500/20 transition-colors duration-500">

      {/* 1. HERO SECTION: THE INTELLIGENT CORE */}
      <section className="relative w-full px-4 sm:px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-32 min-h-[70vh] sm:min-h-[90vh] flex items-center overflow-hidden">

        {/* Foundation Gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-100 transition-opacity"
          style={{ 
            background: "radial-gradient(circle at 50% -20%, var(--blue-500-10, rgba(0, 93, 189, 0.1)), var(--bg) 80%)"
          }}
        />

        <CrystalLattice />
        <CoreSynthesis active={isSynthesized} />

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center sm:text-left">
          <div className="max-w-4xl mx-auto sm:mx-0">

            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isSynthesized ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/50 mb-8 shadow-sm"
            >
              <div className="w-2 h-2 bg-[#005dbd] dark:bg-blue-400 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-muted-foreground tracking-[0.3em] uppercase transition-colors">
                SAP Practice Excellence // S/4HANA Ready
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isSynthesized ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] xl:text-[110px] font-extrabold tracking-tight mb-8 sm:mb-10 leading-[0.95] text-foreground transition-colors"
            >
              The <span className="text-[#005dbd] dark:text-blue-500">Intelligent</span>
              <br />
              Enterprise Core
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isSynthesized ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 sm:mb-12 leading-relaxed max-w-2xl font-medium tracking-tight mx-auto sm:mx-0 transition-colors"
            >
              Modernizing the heartbeat of your business. FineLabs delivers
              <span className="text-[#005dbd] dark:text-blue-400 font-bold italic"> high-performance SAP transformations</span>
              that unify data, cloud, and line-of-business operations into a single, agile core.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isSynthesized ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-6"
            >
              <button className="px-10 py-5 bg-[#005dbd] dark:bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
                Explore S/4HANA Path
              </button>
              <button className="px-10 py-5 bg-card text-foreground font-bold rounded-full border border-border hover:bg-muted transition-all duration-300 shadow-sm transition-colors">
                Strategy & Advisory
              </button>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto absolute bottom-0 left-6 right-6 border-t border-border transition-colors z-10" />
      </section>

      {/* 2. CORE MODULES GRID */}
      <section className="bg-background py-24 sm:py-32 relative border-t border-border transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="mb-20 text-center sm:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground transition-colors mb-6 h-auto">
              Comprehensive SAP <br /> Service Landscape
            </h2>
            <p className="text-muted-foreground font-medium transition-colors">End-to-end expertise across the SAP lifecycle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Strategy & Advisory", icon: <Briefcase />, desc: "Digital roadmaps, landscape assessments, and Proofs of Concept to validate your SAP investment." },
              { title: "S/4HANA Migration", icon: <Cpu />, desc: "End-to-end migrations from ECC to S/4HANA, global rollouts, and multi-cloud transformation." },
              { title: "UX & Innovation", icon: <Layers className="w-6 h-6" />, desc: "Fiori, UI5, and mobile enablement to deliver consumer-grade experiences on top of your core SAP data." },
              { title: "Cloud & Analytics", icon: <Cloud />, desc: "HANA Cloud Platform development and advanced analytics to turn SAP data into actionable intelligence." },
              { title: "Line-of-Business", icon: <Users />, desc: "SuccessFactors, Ariba, and C4C integration to modernize HR, Procurement, and Customer Experience." },
              { title: "Run & Optimize", icon: <BarChart3 />, desc: "Managed support, continuous improvement, and the HTD model for long-term internal capability building." }
            ].map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-card/40 border border-border rounded-[2.5rem] hover:bg-card hover:shadow-2xl hover:border-blue-500/50 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-secondary border border-border rounded-2xl flex items-center justify-center text-[#005dbd] dark:text-blue-400 mb-8 group-hover:scale-110 transition-all duration-500 shadow-sm h-auto">
                  {module.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-[#005dbd] dark:group-hover:text-blue-400 transition-colors h-auto">{module.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 h-auto transition-colors">{module.desc}</p>
                <div className="flex items-center gap-2 text-[#005dbd] dark:text-blue-400 font-bold text-xs uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-all">
                  Detailed Services <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODERNIZATION PATH: ECC TO S/4HANA */}
      <section className="bg-background py-24 sm:py-32 overflow-hidden border-t border-border transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 text-center sm:text-left">
              <h3 className="text-xs font-bold tracking-[0.5em] text-[#005dbd] dark:text-blue-400 mb-4 uppercase transition-colors">The Modernization Path</h3>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 transition-colors h-auto">From Legacy ECC <br /> to Intelligent S/4HANA</h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-10 leading-relaxed transition-colors">
                FineLabs simplifies the complexity of SAP modernization. Our proven framework ensures a risk-mitigated transition that unlocks the full potential of in-memory computing and real-time analytics.
              </p>
              <ul className="space-y-4">
                {["Brownfield & Greenfield conversion expert", "Selective Data Transition", "Cloud Assessment & Clean Core Strategy"].map((item, i) => (
                  <li key={i} className="flex items-center justify-center sm:justify-start gap-4 text-foreground font-bold transition-colors">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-muted/50 rounded-[3.5rem] p-12 relative overflow-hidden transition-colors">
                <div className="flex flex-col gap-6 relative z-10">
                  <div className="p-6 bg-card rounded-2xl shadow-sm border border-border transition-colors">
                    <div className="text-[10px] font-bold text-muted-foreground/50 mb-2 uppercase transition-colors">Legacy Baseline</div>
                    <div className="text-xl font-bold text-foreground transition-colors">SAP ECC / Business Suite</div>
                  </div>
                  <div className="flex justify-center">
                    <ChevronRight className="w-8 h-8 text-blue-500 rotate-90 opacity-50" />
                  </div>
                  <div className="p-8 bg-[#005dbd] dark:bg-blue-600 rounded-[2.5rem] shadow-2xl text-white transform hover:scale-105 transition-all duration-500">
                    <div className="text-[10px] font-bold text-blue-200/50 mb-2 uppercase">Cloud / On-Prem</div>
                    <div className="text-2xl font-black">SAP S/4HANA</div>
                    <div className="mt-4 flex gap-2">
                      <span className="px-2 py-1 bg-white/10 rounded text-[10px]">Real-time</span>
                      <span className="px-2 py-1 bg-white/10 rounded text-[10px]">AI-Driven</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
