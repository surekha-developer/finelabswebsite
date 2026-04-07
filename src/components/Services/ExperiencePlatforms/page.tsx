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
    <div className="w-full bg-background text-foreground overflow-hidden selection:bg-blue-500/20 transition-colors duration-500">

      {/* 1. HERO SECTION: INTERFACE SYNTHESIS */}
      <section className="relative w-full px-6 pt-32 pb-16 sm:pt-40 sm:pb-24 min-h-[90vh] flex items-center overflow-hidden">

        {/* Foundation Gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-100 transition-opacity"
          style={{ 
            background: "radial-gradient(circle at 50% -20%, var(--blue-500-10, rgba(37, 99, 235, 0.1)), var(--bg) 80%)"
          }}
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
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/50 mb-8 shadow-sm"
            >
              <Repeat className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-spin-slow" />
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-[0.2em] uppercase">
                Seamless Connectivity // v1.0
              </span>
            </motion.div>

            {/* Headline with Glass Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={isSynthesized ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-5xl sm:text-6xl md:text-[100px] font-extrabold tracking-tight mb-10 leading-[1.0] text-foreground transition-colors"
            >
              Tailored{" "}
              <span className="text-blue-600 dark:text-blue-500 underline decoration-blue-500/20 underline-offset-8">
                Platform
              </span>
              <br />Efficiency
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isSynthesized ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl font-medium tracking-tight transition-colors"
            >
              FineLabs redefines business intelligence through tailored,
              platform-led solutions that drive growth, operational
              excellence, and <span className="text-blue-600 dark:text-blue-400 font-bold italic">lasting advantage</span>.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isSynthesized ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-6"
            >
              <button className="px-10 py-5 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                Explore Platforms
              </button>
              <button className="px-10 py-5 bg-card text-foreground font-bold rounded-full border border-border hover:bg-muted transition-all duration-300 shadow-sm transition-colors">
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
          style={{ background: 'radial-gradient(circle, var(--blue-500) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />

        <div className="max-w-7xl mx-auto absolute bottom-0 left-6 right-6 border-t border-border transition-colors z-10" />
      </section>

      {/* 2. THREE PILLARS: COGNITIVE SUPPORT */}
      <section className="bg-background py-24 sm:py-32 relative border-t border-border transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="mb-20 text-center sm:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-4 uppercase"
            >
              — PLATFORM_PILLARS.v1
            </motion.p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground transition-colors mb-6 h-auto">
              Strategic Capability <br /> Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Digital Transformation", icon: <Target className="w-10 h-10" />, desc: "Implementation, Advisory, Migration, and Enhancements across all platform domains." },
              { title: "Application Support", icon: <Settings className="w-10 h-10" />, desc: "Production Support, Maintenance, Performance Optimization, and Integration." },
              { title: "Quality Assurance", icon: <CheckSquare className="w-10 h-10" />, desc: "Functional Testing, Test Automation, and Performance Engineering cycles." }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-card/40 border border-border rounded-[2.5rem] hover:bg-card hover:shadow-2xl hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-secondary border border-border rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 group-hover:-translate-y-2 transition-all duration-500">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors h-auto">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 h-auto transition-colors">
                  {pillar.desc}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  <span>Explore Pillar</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PLATFORM DOMAINS: THE ECOSYSTEM WHEEL */}
      <section className="bg-muted/30 py-24 sm:py-32 relative overflow-hidden border-y border-border transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="max-w-2xl mb-20 text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground transition-colors mb-6 h-auto">Six Platform Domains</h3>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed transition-colors">
              Seamless implementation and advisory expertise across the world&apos;s leading
              enterprise platforms, ensure outcomes align with strategy from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { domain: "ERP Systems", brands: ["SAP", "Oracle", "ServiceNow", "MS Dynamics"], icon: <Database className="w-5 h-5" /> },
              { domain: "Supply Chain (SCM)", brands: ["SAP", "Blue Yonder", "O9", "Kinaxis"], icon: <Layers className="w-5 h-5" /> },
              { domain: "CRM Excellence", brands: ["Salesforce", "Freshsales", "MS Dynamics"], icon: <Users className="w-5 h-5" /> },
              { domain: "Human Capital (HCM)", brands: ["SuccessFactors", "Oracle Cloud", "Workday"], icon: <Zap className="w-5 h-5" /> },
              { domain: "Workflow Automation", brands: ["ServiceNow", "Blackline", "Icertis"], icon: <Repeat className="w-5 h-5" /> },
              { domain: "Mobile Experience", brands: ["iOS/Android", "Flutter", "React Native"], icon: <Smartphone className="w-5 h-5" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card border border-border rounded-[2rem] hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary text-blue-600 dark:text-blue-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-bold text-foreground transition-colors">{item.domain}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.brands.map(b => (
                    <span key={b} className="px-3 py-1 bg-secondary border border-border rounded-full text-[10px] font-bold text-muted-foreground tracking-tight transition-colors">
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
      <section className="bg-background py-24 sm:py-32 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Mockup Visual */}
          <div className="relative p-1 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-[3rem]">
            <div className="bg-card rounded-[2.8rem] p-12 aspect-[4/3] flex items-center justify-center relative overflow-hidden group transition-colors">
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 text-center">
                <Smartphone className="w-24 h-24 text-blue-600 dark:text-blue-400 mx-auto mb-6 animate-pulse" />
                <h4 className="text-foreground font-bold text-2xl mb-2 italic uppercase transition-colors">Enterprise Mobile</h4>
                <p className="text-blue-500/80 text-sm font-mono tracking-tighter">Extend. Optimize. Deliver.</p>
              </div>
              {/* Floating Action Bars */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                  className="absolute w-32 h-2 bg-foreground/5 rounded-full"
                  style={{ bottom: 40 + i * 16, right: 40 }}
                />
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-xs font-bold tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-4 uppercase transition-colors">— MOBILE_SYNTHESIS</p>
            <h3 className="text-4xl font-bold text-foreground mb-8 transition-colors h-auto">Empowered Experiences Anywhere</h3>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-10 transition-colors">
              Bridging the gap between enterprise complexity and user simplicity.
              We extend platform capabilities through intuitive, high-performance
              mobile interfaces that keep teams productive on any device.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 transition-colors">0ms</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest transition-colors">Interface Latency</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 transition-colors">100%</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest transition-colors">Cloud Sync</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
