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
    <div className="w-full bg-[#f8fafc] text-[#121926] overflow-hidden selection:bg-blue-50">

      {/* 1. HERO SECTION: THE INTELLIGENT CORE */}
      <section className="relative w-full px-4 sm:px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-32 min-h-[70vh] sm:min-h-[90vh] flex items-center overflow-hidden">

        <CrystalLattice />
        <CoreSynthesis active={isSynthesized} />

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center sm:text-left">
          <div className="max-w-4xl mx-auto sm:mx-0">

            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isSynthesized ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-blue-100 mb-8 shadow-sm"
            >
              <div className="w-2 h-2 bg-[#005dbd] rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-gray-500 tracking-[0.3em] uppercase">
                SAP Practice Excellence // S/4HANA Ready
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isSynthesized ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[95px] font-extrabold tracking-tight mb-8 sm:mb-10 leading-[0.95] text-[#121926]"
            >
              The <span className="text-[#005dbd]">Intelligent</span>
              <br />
              Enterprise Core
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isSynthesized ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 sm:mb-12 leading-relaxed max-w-2xl font-medium tracking-tight mx-auto sm:mx-0"
            >
              Modernizing the heartbeat of your business. FineLabs delivers
              <span className="text-[#005dbd] font-bold"> high-performance SAP transformations</span>
              that unify data, cloud, and line-of-business operations into a single, agile core.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isSynthesized ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-4"
            >
              <button className="px-10 py-5 bg-[#005dbd] text-white font-bold rounded-full hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-200/50">
                Explore S/4HANA Path
              </button>
              <button className="px-10 py-5 bg-white text-[#121926] font-bold rounded-full border border-gray-200 hover:border-blue-200 transition-all duration-300 shadow-sm">
                Strategy & Advisory
              </button>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto absolute bottom-0 left-6 right-6 border-t border-gray-200 z-10" />
      </section>

      {/* 2. CORE MODULES GRID */}
      <section className="bg-white py-24 sm:py-32 relative border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="mb-20 text-center sm:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#121926] mb-6">
              Comprehensive SAP <br /> Service Landscape
            </h2>
            <p className="text-gray-500 font-medium">End-to-end expertise across the SAP lifecycle.</p>
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
                className="p-10 bg-gray-50/50 border border-gray-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-[#005dbd] mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  {module.icon}
                </div>
                <h3 className="text-xl font-bold text-[#121926] mb-4 group-hover:text-[#005dbd] transition-colors">{module.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{module.desc}</p>
                <div className="flex items-center gap-2 text-[#005dbd] font-bold text-sm tracking-tight pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  Detailed Services <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODERNIZATION PATH: ECC TO S/4HANA */}
      <section className="bg-white py-24 sm:py-32 overflow-hidden border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2">
              <h3 className="text-xs font-bold tracking-[0.5em] text-[#005dbd] mb-4 uppercase">The Modernization Path</h3>
              <h2 className="text-4xl font-bold text-[#121926] mb-8">From Legacy ECC <br /> to Intelligent S/4HANA</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                FineLabs simplifies the complexity of SAP modernization. Our proven framework ensures a risk-mitigated transition that unlocks the full potential of in-memory computing and real-time analytics.
              </p>
              <ul className="space-y-4">
                {["Brownfield & Greenfield conversion expert", "Selective Data Transition", "Cloud Assessment & Clean Core Strategy"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#121926] font-bold">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-gray-100 rounded-[3rem] p-12 relative overflow-hidden">
                <div className="flex flex-col gap-6 relative z-10">
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                    <div className="text-[10px] font-bold text-gray-400 mb-2 uppercase">Legacy Baseline</div>
                    <div className="text-xl font-bold">SAP ECC / Business Suite</div>
                  </div>
                  <div className="flex justify-center">
                    <ChevronRight className="w-8 h-8 text-blue-300 rotate-90" />
                  </div>
                  <div className="p-8 bg-[#005dbd] rounded-[2rem] shadow-2xl text-white transform hover:scale-105 transition-transform">
                    <div className="text-[10px] font-bold text-blue-200 mb-2 uppercase">Cloud / On-Prem</div>
                    <div className="text-2xl font-black">SAP S/4HANA</div>
                    <div className="mt-4 flex gap-2">
                      <span className="px-2 py-1 bg-white/20 rounded text-[10px]">Real-time</span>
                      <span className="px-2 py-1 bg-white/20 rounded text-[10px]">AI-Driven</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full -mr-32 -mt-32 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
