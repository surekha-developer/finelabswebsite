"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Search, 
  Activity, 
  Database, 
  Network, 
  Terminal, 
  ArrowRight,
  ShieldAlert,
  Cpu,
  Fingerprint,
  Zap
} from "lucide-react";

// ----------------------------------------------------------------------------
// CYBER-SECURITY ENRICHMENT COMPONENTS
// ----------------------------------------------------------------------------

/**
 * Tactical "Cyber Shield" Graphic
 * A large, pulsing hexagonal core for the Hero section.
 */
const CyberShield = () => (
  <div className="absolute right-[-4%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-40">
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
      <defs>
        <radialGradient id="shieldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Background Glow */}
      <circle cx="100" cy="100" r="80" fill="url(#shieldGlow)" />
      
      {/* Pulsing Hexagons */}
      {[...Array(3)].map((_, i) => (
        <motion.path
          key={i}
          d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="0.5"
          initial={{ scale: 0.8 + i * 0.1, opacity: 0.2 }}
          animate={{ 
            scale: [0.8 + i * 0.1, 1 + i * 0.1, 0.8 + i * 0.1],
            opacity: [0.1, 0.4, 0.1],
            rotate: i % 2 === 0 ? [0, 5, 0] : [0, -5, 0]
          }}
          transition={{ 
            duration: 5 + i * 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      ))}

      {/* Internal "Circuit" Lines */}
      <motion.path 
        d="M60 100 L140 100 M100 60 L100 140"
        stroke="#3b82f6"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        animate={{ strokeDashoffset: [0, 8] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </div>
);

/**
 * Threat Intelligence Terminal Log (Simulated)
 */
const ThreatLog = () => {
  const [logs, setLogs] = useState<string[]>([
    "[10:34:21] Protocol Shield Initialized...",
    "[10:34:22] scanning network nodes_v4",
    "[10:34:25] Zero Trust Authentication Active"
  ]);

  useEffect(() => {
    const messages = [
      "Blocking inbound packet_77x",
      "Analyzing suspicious vector_ID:882",
      "SSL Fingerprint Verified",
      "Latency optimized: 12ms",
      "Endpoint protection synced",
      "Firewall heartbeat: pulse_ok"
    ];

    const timer = setInterval(() => {
      setLogs(prev => {
        const nextLog = `[${new Date().toLocaleTimeString()}] ${messages[Math.floor(Math.random() * messages.length)]}`;
        return [nextLog, ...prev.slice(0, 5)];
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-900 rounded-2xl p-6 font-mono text-xs text-blue-400 border border-slate-800 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50" />
      <div className="flex justify-between items-center mb-4 text-[10px] text-slate-500">
        <span>SECURITY_CONSOLE.v2</span>
        <span className="text-emerald-500 animate-pulse">● LIVE_FEED</span>
      </div>
      <div className="space-y-2">
        {logs.map((log, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -5 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="flex gap-2"
          >
            <span className="opacity-40">{i+1}</span>
            <span>{log}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------------
// PRIMARY COMPONENT
// ----------------------------------------------------------------------------

const NetworkPulse = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="light-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#light-grid)" />
        
        {/* Pulsing Nodes - Light Blue */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r="1.5"
            fill="#3b82f6"
            initial={{ opacity: 0.1, scale: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 4 + Math.random() * 6, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
          />
        ))}
      </svg>
    </div>
);

const ScanningBeam = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {!active && (
      <motion.div 
        className="absolute inset-x-0 top-0 h-[3px] bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.6)] z-50 pointer-events-none"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
    )}
  </AnimatePresence>
);

export default function CyberSecurity() {
  const [isScanned, setIsScanned] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsScanned(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white text-[#121926] overflow-hidden selection:bg-blue-100">
      
      {/* 1. HERO SECTION: CINEMATIC SECURITY REVEAL */}
      <section className="relative w-full px-6 pt-32 pb-16 sm:pt-40 sm:pb-32 min-h-[90vh] flex items-center overflow-hidden">
        
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)" }}
        />
        
        <NetworkPulse />
        <CyberShield />
        <ScanningBeam active={isScanned} />

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center sm:text-left">
          <div className="max-w-4xl mx-auto sm:mx-0">
            
            {/* Pill */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={isScanned ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-blue-100 mb-8 shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-blue-600 tracking-[0.2em] uppercase">
                Cyber Security v2.0
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
              animate={isScanned ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-5xl sm:text-6xl md:text-[85px] font-extrabold tracking-tight mb-10 leading-[1.0] text-slate-900"
            >
              Secure The{" "}
              <span className="text-blue-600 drop-shadow-sm">
                Enterprise Edge
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isScanned ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl font-medium tracking-tight"
            >
              Protecting global operations against relentless threats. 
              We build <span className="text-blue-600 font-bold">multi-layered defense</span> systems 
              that evolve at the relative speed of risk.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isScanned ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-4"
            >
              <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-200/50">
                 Identify Risks
              </button>
              <button className="px-10 py-5 bg-white text-slate-900 font-bold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm">
                View Protocol
              </button>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto absolute bottom-0 left-6 right-6 border-t border-gray-100 z-10" />
      </section>

      {/* 2. CAPABILITIES GRID */}
      <section className="bg-white py-24 sm:py-32 relative border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="mb-20">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] text-blue-600 mb-4 uppercase"
            >
              — PORTFOLIO / SECURITY
            </motion.p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Defensible Architecture <br /> & Managed Defense
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
             {[
               { title: "Cloud Infrastructure", icon: <Lock className="w-8 h-8"/>, desc: "CSPM, CWPP, and DSPM protection across multi-cloud environments." },
               { title: "Asset Management", icon: <Database className="w-8 h-8"/>, desc: "SIEM & SOAR orchestration for centralized threat visibility." },
               { title: "OT Security", icon: <Terminal className="w-8 h-8"/>, desc: "Specialized defense for critical operational infrastructures." },
               { title: "Threat Intel", icon: <Search className="w-8 h-8"/>, desc: "MITRE ATT&CK mapping and breach path prediction modeling." },
               { title: "Vulnerability Mgmt", icon: <ShieldAlert className="w-8 h-8"/>, desc: "SAST, DAST, and ethical penetration testing services." },
               { title: "Risk Management", icon: <Activity className="w-8 h-8"/>, desc: "SBOM development and continuous compliance auditing." }
             ].map((capability, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="group p-10 bg-white border border-gray-100 rounded-3xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
               >
                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                    {capability.icon}
                 </div>
                 <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                   {capability.title}
                 </h3>
                 <p className="text-gray-600 text-[15px] leading-relaxed">
                   {capability.desc}
                 </p>
                 <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Protocol Details</span>
                    <ArrowRight className="w-3 h-3" />
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. NEW ENRICHMENT: LAYERED ARMOR & THREAT FEED */}
      <section className="bg-gray-50 py-24 sm:py-32 overflow-hidden border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual: Layered Defense Stack */}
            <div className="space-y-4">
               {[
                 { layer: "Data Layer", icon: <Database className="w-5 h-5"/>, color: "blue" },
                 { layer: "Cloud Infrastructure", icon: <Network className="w-5 h-5"/>, color: "indigo" },
                 { layer: "Network Protection", icon: <Terminal className="w-5 h-5"/>, color: "blue" },
                 { layer: "Endpoint Security", icon: <Fingerprint className="w-5 h-5"/>, color: "indigo" }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.2 }}
                   className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-between hover:border-blue-300 transition-all hover:translate-x-2"
                 >
                    <div className="flex items-center gap-4">
                       <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                          {item.icon}
                       </div>
                       <span className="font-bold text-slate-800">{item.layer}</span>
                    </div>
                    <div className="flex gap-1">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-200" />
                    </div>
                 </motion.div>
               ))}
            </div>

            {/* Content: Mission Critical Posture */}
            <div>
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="mb-10"
               >
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">The Armor of FineLabs</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    We don&apos;t just monitor threats; we build defensive ecosystems. 
                    Our methodology stacks specialized security layers to ensure no single 
                    point of failure can compromise your data.
                  </p>
                  <ThreatLog />
               </motion.div>
            </div>
         </div>
      </section>

      {/* 4. PARTNERSHIP BAND */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <p className="text-[10px] font-bold text-gray-400 tracking-[0.5em] uppercase mb-4">Strategic Security Partners</p>
           </div>
           <div className="flex flex-wrap items-center justify-around gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {['paloalto', 'CrowdStrike', 'NIST', 'Okta', 'Zscaler'].map((partner) => (
                <div key={partner} className="text-xl font-bold tracking-tighter text-slate-400 hover:text-blue-600 transition-colors cursor-default uppercase italic">
                  {partner}
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}
