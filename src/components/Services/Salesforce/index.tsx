"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  BarChart3,
  Users,
  Zap,
  ShieldCheck,
  Cpu,
  MessageSquare,
  PieChart,
  Search,
  ArrowRight,
  GitBranch
} from "lucide-react";

// ----------------------------------------------------------------------------
// SALESFORCE ENRICHMENT COMPONENTS
// ----------------------------------------------------------------------------

/**
 * "Cloud Nebula" Background
 * Soft drifting data points and pulsing gradients.
 */
const CloudNebula = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#00a1e0] opacity-10 blur-[100px] animate-pulse" />
    <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-blue-300 opacity-5 blur-[80px]" />

    <svg className="w-full h-full">
      {[...Array(20)].map((_, i) => (
        <motion.circle
          key={i}
          cx={`${Math.random() * 100}%`}
          cy={`${Math.random() * 100}%`}
          r={Math.random() * 1 + 0.5}
          fill="#00a1e0"
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </svg>
  </div>
);

/**
 * Connect Reveal Hero
 * Three data streams converging into a 360-degree ring.
 */
const ConnectReveal = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {!active && (
      <motion.div
        className="absolute inset-0 z-50 bg-[#f8fafc] flex items-center justify-center pointer-events-none"
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <div className="relative w-[300px] h-[300px] flex items-center justify-center">
          {/* Data Streams */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-[#00a1e0]/30 rounded-full"
              style={{ width: 60 + i * 40, height: 60 + i * 40 }}
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
            />
          ))}
          <Cloud className="w-12 h-12 text-[#00a1e0] animate-bounce" />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ----------------------------------------------------------------------------
// PRIMARY COMPONENT
// ----------------------------------------------------------------------------

export default function Salesforce() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsConnected(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-[#f8fafc] text-[#121926] overflow-hidden selection:bg-blue-50">

      {/* 1. HERO SECTION: UNIFIED CUSTOMER 360 */}
      <section className="relative w-full px-6 pt-32 pb-20 sm:pt-40 sm:pb-32 min-h-[90vh] flex items-center overflow-hidden">

        <CloudNebula />
        <ConnectReveal active={isConnected} />

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center sm:text-left">
          <div className="max-w-4xl mx-auto sm:mx-0">

            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isConnected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-blue-100 mb-8 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 text-[#00a1e0] fill-blue-50" />
              <span className="text-[10px] font-bold text-gray-500 tracking-[0.3em] uppercase">
                Customer 360 Mastery // Synchronized
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isConnected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-7xl md:text-[95px] font-extrabold tracking-tight mb-10 leading-[0.95] text-[#121926]"
            >
              Excellence <br />
              <span className="text-[#00a1e0]">Salesforce</span> Delivered
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isConnected ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl font-medium tracking-tight mx-auto sm:mx-0"
            >
              Unifying every touchpoint. FineLabs partners with enterprises to build
              <span className="text-[#00a1e0] font-bold"> high-impact Salesforce ecosystems</span>
              that turn customer data into actionable revenue cycles.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isConnected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-4"
            >
              <button className="px-10 py-5 bg-[#00a1e0] text-white font-bold rounded-full hover:bg-blue-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-200/50">
                Start Your Journey
              </button>
              <button className="px-10 py-5 bg-white text-[#121926] font-bold rounded-full border border-gray-200 hover:border-blue-200 transition-all duration-300 shadow-sm">
                Case Showcase
              </button>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto absolute bottom-0 left-6 right-6 border-t border-gray-200 z-10" />
      </section>

      {/* 2. CLOUD MODULES GRID */}
      <section className="bg-white py-24 sm:py-32 relative border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="mb-20 text-center sm:text-left">
            <div className="text-[10px] font-black text-[#00a1e0] tracking-[0.4em] uppercase mb-4">Platform Intelligence</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#121926] mb-6">
              Connected Cloud Capabilities
            </h2>
            <p className="text-gray-500 font-medium">End-to-end expertise across the world&apos;s #1 CRM.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Revenue Cloud (CPQ)", icon: <PieChart />, desc: "Streamline configure-price-quote processes to accelerate deal velocity and ensure pricing accuracy." },
              { title: "Service Cloud", icon: <MessageSquare />, desc: "Transform customer support with intelligent tools and unified data for faster resolution." },
              { title: "Data Cloud & AI", icon: <Search />, desc: "Leverage Einstein AI and Data Cloud to build a single source of truth and personalized insights." },
              { title: "Marketing Cloud", icon: <Zap />, desc: "Multi-channel automation to attract, engage, and retain customers through personalized journeys." },
              { title: "Non-Profit Cloud", icon: <Users />, desc: "Purpose-built capabilities for management, fundraising, and program delivery in organizations." },
              { title: "MuleSoft Integration", icon: <GitBranch className="w-6 h-6" />, desc: "Seamlessly connect your enterprise technology landscape with robust API-led connectivity." }
            ].map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 bg-gray-50/50 border border-gray-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-[#00a1e0] mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  {module.icon}
                </div>
                <h3 className="text-xl font-bold text-[#121926] mb-4 group-hover:text-[#00a1e0] transition-colors">{module.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{module.desc}</p>
                <div className="flex items-center gap-2 text-[#00a1e0] font-bold text-sm tracking-tight pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  View Solutions <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENGAGEMENT ROADMAP */}
      <section className="bg-[#f8fafc] py-24 sm:py-32 overflow-hidden border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-xs font-bold tracking-[0.5em] text-[#00a1e0] mb-4 uppercase">The Journey to Success</h3>
            <h2 className="text-4xl font-bold text-[#121926]">Strategic Engagement Roadmap</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: "01", label: "Assessment", icon: <BarChart3 /> },
              { step: "02", label: "Consulting", icon: <Users /> },
              { step: "03", label: "Implementation", icon: <Cpu /> },
              { step: "04", label: "Integration", icon: <GitBranch className="w-6 h-6" /> },
              { step: "05", label: "Migration", icon: <Cloud /> },
              { step: "06", label: "Support", icon: <ShieldCheck /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center group"
              >
                <div className="w-20 h-20 bg-white border border-gray-100 rounded-[1.5rem] flex items-center justify-center text-[#121926] group-hover:text-[#00a1e0] group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 mb-6">
                  {item.icon}
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-black text-[#00a1e0] mb-1">{item.step}</div>
                  <h4 className="text-sm font-bold text-[#121926]">{item.label}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
