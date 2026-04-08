"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Zap,
  MessageSquare,
  Search,
  Workflow,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Database
} from "lucide-react";

// ----------------------------------------------------------------------------
// AI & AUTOMATION ENRICHMENT COMPONENTS
// ----------------------------------------------------------------------------

/**
 * "Neural Network" Pulsing Background
 * Organic nodes that grow and connect in the background.
 */
const NeuralPulse = () => {
  const paths = React.useMemo(() => [...Array(8)].map((_, i) => ({
    d: `M ${20 + i * 10} 0 Q ${50 + i * 5} 50 ${Math.random() * 100} 100`,
    duration: 10 + Math.random() * 5
  })), []);

  const nodes = React.useMemo(() => [...Array(15)].map((_, i) => ({
    cx: `${Math.random() * 100}%`,
    cy: `${Math.random() * 100}%`,
    r: 1.5 + Math.random() * 2,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 5
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection paths */}
        {paths.map((path, i) => (
          <motion.path
            key={`path-${i}`}
            d={path.d}
            fill="none"
            stroke="#6366f1"
            strokeWidth="0.5"
            strokeOpacity="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: path.duration, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Pulsing Neural Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#4f46e5"
            initial={{ opacity: 0.1, scale: 0.8 }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [0.8, 1.4, 0.8],
              filter: ["none", "url(#glow)", "none"]
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              delay: node.delay
            }}
          />
        ))}
      </svg>
    </div>
  );
};

/**
 * Simulated Data Stream / Binary Reveal for Hero
 */
const DataReveal = ({ active }: { active: boolean }) => {
  const particles = React.useMemo(() => [...Array(200)].map((_, i) => ({
    duration: 2.5 + Math.random() * 2,
    delay: Math.random() * 2,
    value: Math.round(Math.random())
  })), []);

  return (
    <AnimatePresence>
      {!active && (
        <motion.div
          className="absolute inset-0 z-50 bg-background flex flex-wrap items-center justify-center gap-1 overflow-hidden pointer-events-none"
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: [0, 0.7, 0], y: [0, 150, 0] }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay
              }}
              className="text-[13px] font-mono text-indigo-600 dark:text-indigo-400 font-bold"
            >
              {particle.value}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function AIAndAutomation() {
  const [isSynthesized, setIsSynthesized] = useState(false);

  useEffect(() => {
    // Reveal timing aligned with Service Architecture standards
    const timer = setTimeout(() => setIsSynthesized(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-background text-foreground overflow-hidden selection:bg-indigo-500/20 transition-colors duration-500">

      {/* 1. HERO SECTION: THE COGNITIVE REVEAL */}
      <section className="relative w-full px-6 pt-32 pb-16 sm:pt-40 sm:pb-32 min-h-[90vh] flex items-center overflow-hidden">

        {/* Soft Indigo Gradient Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-100 transition-opacity"
          style={{ 
            background: "radial-gradient(circle at 50% -20%, var(--indigo-500-10, rgba(99, 102, 241, 0.1)), var(--bg) 80%)"
          }}
        />

        <NeuralPulse />
        <DataReveal active={isSynthesized} />

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center sm:text-left">
          <div className="max-w-4xl mx-auto sm:mx-0">

            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isSynthesized ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/60 backdrop-blur-md border border-border/50 mb-8 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" />
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase">
                Unified Intelligence // v3.0
              </span>
            </motion.div>

            {/* Headline with Staggered Synthesis */}
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={isSynthesized ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-5xl sm:text-6xl md:text-[105px] font-extrabold tracking-tight mb-10 leading-[1.0] text-foreground transition-colors"
            >
              Cognitive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-sm">
                Scale
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isSynthesized ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl font-medium tracking-tight transition-colors"
            >
              We craft specialized AI solutions that translate deep contextual
              knowledge into <span className="text-indigo-500 font-bold italic tracking-wider">measurable business impact</span>.
              Engineering intelligence that learns, adapts, and delivers.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isSynthesized ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-6"
            >
              <button className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300">
                Explore Use Cases
              </button>
              <button className="px-10 py-5 bg-card text-foreground font-bold rounded-full border border-border hover:bg-muted transition-all duration-300 shadow-sm transition-colors">
                Run Simulation
              </button>
            </motion.div>
          </div>
        </div>

        {/* Ambient "Neural Core" Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isSynthesized ? { opacity: 0.4, scale: 1.2 } : {}}
          transition={{ duration: 3 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, var(--indigo-500) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />

        <div className="max-w-7xl mx-auto absolute bottom-0 left-6 right-6 border-t border-border transition-colors z-10" />
      </section>

      {/* 2. COGNITIVE MODULES: CORE CAPABILITIES */}
      <section className="bg-background py-24 sm:py-32 relative border-t border-border transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="mb-20 text-center sm:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] text-indigo-500 mb-4 uppercase"
            >
              — COGNITIVE_MODULES.v4
            </motion.p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground transition-colors mb-6">
              Thinking Systems for <br /> Future Enterprises
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { title: "Knowledge Discovery", icon: <Search className="w-8 h-8" />, desc: "Contextual search across corporate data with 90%+ accuracy metrics.", details: ["RAG Frameworks", "Knowledge Graphs", "Semantic Search"] },
              { title: "Conversational AI", icon: <MessageSquare className="w-8 h-8" />, desc: "Multilingual agents that streamline claims and support workflows.", details: ["Omnichannel Voice", "Multilingual Support", "Call Deflection"] },
              { title: "Sales Acceleration", icon: <TrendingUp className="w-8 h-8" />, desc: "Hyper-personalized targeting and AI-powered proposal generation.", details: ["Predictive Analytics", "Personalized Outreach", "Proposal Generation"] },
              { title: "Workflow Automation", icon: <Workflow className="w-8 h-8" />, desc: "Intelligent document routing and end-to-end invoice processing.", details: ["O2C Automation", "L2O Workflows", "Document Classification"] },
            ].map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 sm:p-12 bg-card/40 border border-border rounded-[2.5rem] hover:bg-card hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                  <div className="w-16 h-16 bg-background border border-border rounded-2xl flex items-center justify-center text-indigo-500 group-hover:scale-110 group-hover:text-indigo-400 transition-all duration-500">
                    {module.icon}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {module.details.map(d => (
                      <span key={d} className="px-3 py-1 bg-secondary border border-border rounded-full text-[10px] font-bold text-muted-foreground uppercase tracking-tighter whitespace-nowrap">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground group-hover:text-indigo-500 transition-colors">
                  {module.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-sm">
                  {module.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-indigo-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore Module Details</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AUTOMATION FLOW VISUALIZATION */}
      <section className="bg-indigo-900 py-24 sm:py-32 relative overflow-hidden">
        {/* Procedural Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="hexagons" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M25 0 L50 12.5 L50 37.5 L25 50 L0 37.5 L0 12.5 Z" fill="none" stroke="#fff" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Autonomous Workflows</h3>
            <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
              We connect fragmented data into seamless automation flows that eliminate
              bottlenecks and drive productivity at every touchpoint.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "Data Sourcing", icon: <Database className="w-6 h-6" />, label: "Input" },
              { step: "Cognitive Synthesis", icon: <Brain className="w-6 h-6" />, label: "Processing" },
              { step: "Business Value", icon: <Zap className="w-6 h-6" />, label: "Outcome" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl relative"
              >
                {i < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-white opacity-40"
                    >
                      <ArrowRight className="w-8 h-8" />
                    </motion.div>
                  </div>
                )}
                <div className="w-14 h-14 bg-indigo-500/20 text-indigo-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <span className="block text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em] mb-2">{item.label}</span>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight italic">{item.step}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GEN-AI SPECIALIZATION: THE PROMPT ENGINE */}
      <section className="bg-background py-24 sm:py-32 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.4em] text-pink-500 mb-4 uppercase">— GEN-AI_FRONTIER</p>
            <h3 className="text-4xl font-bold text-foreground mb-8 transition-colors">Engineering with Generative AI & LLMs</h3>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-8 transition-colors">
              Mastering the complexity of Large Language Models to deliver
              grounded, context-aware Generative AI applications that bridge
              the gap between experimental and operational.
            </p>
            <div className="space-y-4">
              {["Secure RAG Architectures", "Prompt Engineering at Scale", "Custom Model Tuning"].map(f => (
                <div key={f} className="flex items-center gap-3 text-foreground font-bold transition-colors">
                  <Sparkles className="w-5 h-5 text-indigo-500" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Callout */}
          <div className="relative p-1 bg-gradient-to-tr from-indigo-500 via-pink-500 to-amber-500 rounded-[2.5rem]">
            <div className="bg-card rounded-[2.25rem] p-12 relative overflow-hidden transition-colors">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-50" />
              <div className="relative z-10 font-mono text-sm space-y-6">
                <div className="text-muted-foreground font-bold">PROMPT_ENGINEERING_REVEAL</div>
                <div className="p-6 bg-muted border border-border rounded-2xl text-indigo-500 italic">
                  &quot;Synthesize unified intelligence from cross-enterprise data silos...&quot;
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-pink-500"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground whitespace-nowrap italic">AI_POSTURE_85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
