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
    <div className="w-full bg-background text-foreground overflow-hidden selection:bg-teal-500/20 transition-colors duration-500">

      {/* 1. HERO SECTION: THE INTELLIGENT EDGE */}
      <section className="relative w-full px-4 sm:px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-32 min-h-[70vh] sm:min-h-[90vh] flex items-center overflow-hidden">

        {/* Foundation Gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-100 transition-opacity"
          style={{ 
            background: "radial-gradient(circle at 50% -20%, var(--teal-500-10, rgba(13, 148, 136, 0.1)), var(--bg) 80%)"
          }}
        />

        <EdgeMesh />
        <SignalPulse active={isRevealed} />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-4xl text-center sm:text-left">

            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/50 mb-8 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 fill-teal-100/50" />
              <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 tracking-[0.3em] uppercase">
                Edge Intelligence // Status: Synchronized
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isRevealed ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] xl:text-[110px] font-extrabold tracking-tight mb-8 sm:mb-10 leading-[0.95] text-foreground transition-colors"
            >
              The <span className="text-teal-600 dark:text-teal-500 italic">Intelligent</span>
              <br />
              Connected Edge
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 sm:mb-12 leading-relaxed max-w-2xl font-medium tracking-tight mx-auto sm:mx-0 transition-colors"
            >
              Transforming physical operations into real-time digital intelligence.
              We leverage <span className="text-teal-600 dark:text-teal-400 font-bold underline decoration-teal-500/20 underline-offset-4">advanced IoT architecture</span> to deliver
              unprecedented visibility and resilience from the edge.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isRevealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-6"
            >
              <button className="px-10 py-5 bg-teal-600 dark:bg-teal-500 text-white font-bold rounded-full hover:bg-teal-700 dark:hover:bg-teal-600 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-1 transition-all duration-300">
                Activate Your Edge
              </button>
              <button className="px-10 py-5 bg-card text-foreground font-bold rounded-full border border-border hover:bg-muted transition-all duration-300 shadow-sm transition-colors">
                Case Studies
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground/30 pointer-events-none"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* 2. CORE CAPABILITIES: INTELLIGENCE MODULES */}
      <section className="bg-background py-24 sm:py-32 relative border-t border-border transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 transition-colors h-auto">
              Empowering the Distributed Enterprise
            </h2>
            <p className="text-muted-foreground font-medium transition-colors">FineLabs delivers a unified fabric of connectivity spanning plants, warehouses, and logistics nodes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Asset & Network Visibility",
                desc: "Real-time digital twins of sensors and assets surfaced through a unified dashboard for uptime and exception monitoring.",
                icon: <Globe className="w-8 h-8" />,
                tag: "Visibility"
              },
              {
                title: "Predictive Intelligence",
                desc: "AI models continuously analyze operational data to forecast demand, predict downtime, and flag emerging supply risks.",
                icon: <Cpu className="w-8 h-8" />,
                tag: "AI/ML"
              },
              {
                title: "Workflow Automation",
                desc: "Event-driven cycles trigger replenishment or maintenance automatically based on real-time IoT thresholds and ERP integration.",
                icon: <Settings className="w-8 h-8" />,
                tag: "Sync"
              }
            ].map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-card/40 border border-border rounded-[2.5rem] hover:bg-card hover:shadow-2xl hover:border-teal-500/50 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-secondary border border-border rounded-2xl flex items-center justify-center mb-8 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-all duration-500 shadow-sm h-auto">
                  {cap.icon}
                </div>
                <div className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-3 transition-colors">{cap.tag}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors h-auto">{cap.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 h-auto transition-colors">{cap.desc}</p>
                <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-xs uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-all">
                  Explore Capability <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TANGIBLE ROI: THE IMPACT HUB */}
      <section className="bg-teal-600 dark:bg-teal-700 py-32 relative overflow-hidden transition-colors duration-500">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full -mr-64 -mt-64 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400 opacity-10 rounded-full -ml-64 -mb-64 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight h-auto">Tangible ROI & Impact</h2>
            <p className="text-teal-100 font-medium transition-colors">Quantifiable efficiencies driven by real-time edge awareness.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "15%", label: "Reduction in Downtime", sub: "Predictive maintenance intervention", icon: <Activity className="w-6 h-6" /> },
              { value: "20%", label: "Asset Utilization", sub: "Driven by real-time visibility", icon: <Layers className="w-6 h-6" /> },
              { value: "24/7", label: "Autonomous Monitoring", sub: "Connected operations 24/7", icon: <ShieldCheck className="w-6 h-6" /> }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-[3.5rem] text-center text-white hover:bg-white/20 transition-all duration-500 shadow-2xl"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-8">
                  {stat.icon}
                </div>
                <div className="text-6xl sm:text-7xl font-black mb-4 tracking-tighter h-auto">{stat.value}</div>
                <h4 className="text-xl sm:text-2xl font-bold mb-2 tracking-tight h-auto">{stat.label}</h4>
                <p className="text-teal-100/70 text-sm font-medium transition-colors">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
