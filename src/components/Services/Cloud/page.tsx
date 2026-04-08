"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Cloud, 
  ArrowRight, 
  Hexagon, 
  Activity, 
  Network, 
  Laptop, 
  Lock, 
  PieChart,
  CheckCircle2
} from "lucide-react";


// ----------------------------------------------------------------------------
// CINEMATIC CLOUD FILTER COMPONENT
// ----------------------------------------------------------------------------
const CloudFilter = () => (
  <svg className="hidden">
    <defs>
      <filter id="cloudy-noise" x="-50%" y="-50%" width="200%" height="200%">
        {/* Fractal Noise creates the cloud "stuffing" */}
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.012" 
          numOctaves="8" 
          seed="25" 
          result="noise" 
        />
        {/* Displacement distorts the edges significantly for a "ragged" look */}
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="90" xChannelSelector="R" yChannelSelector="G" />
        {/* Softens just enough to look like vapor, not pixels */}
        <feGaussianBlur stdDeviation="3" />
        {/* Refines the alpha to create sharper "puff" edges and softer centers */}
        <feComponentTransfer>
          <feFuncA type="table" tableValues="0 0.1 0.4 0.9 1" />
        </feComponentTransfer>
      </filter>
      
      {/* Internal volume gradient for 3D feel - Now Theme Aware */}
      <radialGradient id="cloudGradient" cx="50%" cy="40%" r="50%">
        <stop offset="0%" style={{ stopColor: 'var(--cloud-start)' }} />
        <stop offset="60%" style={{ stopColor: 'var(--cloud-mid)' }} />
        <stop offset="100%" style={{ stopColor: 'var(--cloud-end)' }} />
      </radialGradient>
    </defs>
  </svg>
);

// A realistic cloud component using the turbulent filter
const RealisticCloud = ({ 
  className = "", 
  scale = 1, 
  rotate = 0, 
  delay = 0, 
  duration = 18, 
  opacity = 1, 
  animateOpacity = null 
}: { 
  className?: string, 
  scale?: number, 
  rotate?: number, 
  delay?: number, 
  duration?: number, 
  opacity?: number,
  animateOpacity?: any
}) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    initial={{ scale: scale * 0.8, rotate, opacity: 0 }}
    animate={{ 
      scale: [scale * 0.95, scale * 1.05, scale * 0.95],
      rotate: [rotate, rotate + 4, rotate],
      opacity: animateOpacity !== null ? animateOpacity : 0.9
    }}
    transition={{ 
      duration: duration, 
      repeat: animateOpacity !== null ? 0 : Infinity, 
      delay: delay, 
      ease: "easeInOut" 
    }}
  >
    <svg 
      viewBox="0 0 300 180" 
      xmlns="http://www.w3.org/2000/svg" 
      style={{ filter: "url(#cloudy-noise)", overflow: 'visible' }}
    >
      {/* Clustered shapes to create an organic mass */}
      <circle cx="150" cy="90" r="50" fill="url(#cloudGradient)" />
      <circle cx="110" cy="75" r="40" fill="url(#cloudGradient)" />
      <circle cx="190" cy="70" r="45" fill="url(#cloudGradient)" />
      <circle cx="210" cy="100" r="40" fill="url(#cloudGradient)" />
      <circle cx="90" cy="105" r="35" fill="url(#cloudGradient)" />
      <circle cx="150" cy="60" r="42" fill="url(#cloudGradient)" />
    </svg>
  </motion.div>
);

export default function CloudService() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Cinematic delay: text emerges from the storm
    const timer = setTimeout(() => setRevealed(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-background text-foreground overflow-hidden transition-colors duration-500">
      <CloudFilter />
      
      {/* 1. HERO SECTION: CINEMATIC CLOUD BREAKTHROUGH */}
      <section className="relative w-full px-4 sm:px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 overflow-hidden min-h-[70vh] sm:min-h-[85vh] flex items-center">

        {/* Dynamic Sky Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none transition-colors duration-700"
          style={{
            background: "var(--sky-gradient)",
          }}
        />

        {/* SUBTLE GLOW/SUNLIGHT BEHIND CLOUDS */}
        <motion.div 
           className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 h-[400px] pointer-events-none"
           initial={{ opacity: 0, scale: 0.8 }}
           animate={revealed ? { opacity: 0.8, scale: 1.2 } : {}}
           transition={{ duration: 3 }}
           style={{
             background: 'radial-gradient(circle at center, var(--cloud-start) 0%, var(--cloud-mid) 20%, transparent 60%)',
             filter: 'blur(50px)'
           }}
        />

        {/* HERO TEXT CONTENT — emerging with zoom & cinematic weight */}
        <div className="max-w-7xl mx-auto relative z-10 w-full text-center sm:text-left">
          <div className="max-w-4xl mx-auto sm:mx-0">
            {/* Pill */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8, y: 10 }}
               animate={revealed ? { opacity: 1, scale: 1, y: 0 } : {}}
               transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 backdrop-blur-md border border-border/50 mb-8 shadow-sm"
            >
              <Cloud className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-[0.2em] uppercase">
                Cloud Practice
              </span>
            </motion.div>

            {/* Headline with scale and clear (Breaking through) */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)", letterSpacing: "-0.05em" }}
              animate={revealed ? { opacity: 1, scale: 1, filter: "blur(0px)", letterSpacing: "normal" } : {}}
              transition={{ duration: 2.2, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[95px] font-extrabold tracking-tight mb-8 sm:mb-10 leading-[1.0] text-foreground drop-shadow-sm"
            >
              Cloud{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Strategy &amp;<br /> Transformation
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={revealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 sm:mb-12 leading-relaxed max-w-2xl font-medium tracking-tight"
            >
              FineLabs&apos; Cloud practice supports organizations at every stage of
              their cloud journey — from strategy and migration through to
              optimization, security, and financial governance.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={revealed ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 2 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-4"
            >
              <button className="px-10 py-5 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                Work with us
              </button>
              <button className="px-10 py-5 bg-card text-foreground font-bold rounded-full border border-border hover:border-blue-500/50 hover:bg-muted transition-all duration-300 shadow-sm">
                Learn more
              </button>
            </motion.div>
          </div>
        </div>

        {/* DENSE CINEMATIC CLOUD LAYERS */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute inset-0">
             <div className="absolute top-[5%] left-[-15%] w-[70%] h-[80%] opacity-95">
                <RealisticCloud scale={1.8} animateOpacity={revealed ? 0 : 1} duration={8} />
             </div>
             <div className="absolute top-[20%] right-[-10%] w-[65%] h-[70%] opacity-90">
                <RealisticCloud scale={1.6} animateOpacity={revealed ? 0 : 0.95} delay={0.4} duration={10} />
             </div>
             <div className="absolute bottom-[-10%] left-[10%] w-[80%] h-[40%] opacity-80">
                <RealisticCloud scale={1.4} animateOpacity={revealed ? 0 : 0.9} delay={0.6} duration={12} />
             </div>
          </div>
        </div>

        {/* Soft bottom transition line */}
        <div className="max-w-7xl mx-auto absolute bottom-0 left-6 right-6 border-t border-border/50 z-10" />
      </section>

      {/* 2. PORTFOLIO SECTION: Capability Areas */}
      <section className="bg-background py-20 sm:py-32 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-4 uppercase">
              — PORTFOLIO
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Six Interconnected <br /> Capability Areas
            </h2>
          </motion.div>

          {/* Capability Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative border-t border-border"
          >
            {[
              { id: "01", title: "Consulting, Advisory & Strategy", desc: "Cloud First Business Strategy, Maturity Assessments, end-to-end Transformation initiatives, and governance frameworks.", icon: <Activity className="w-12 h-12 stroke-[1px]" /> },
              { id: "02", title: "Infrastructure Modernization", desc: "Cloud Foundation design, IaC, enterprise-wide Automation, Platform Migrations, and Site Reliability Engineering.", icon: <Network className="w-12 h-12 stroke-[1px]" /> },
              { id: "03", title: "Application Transformation", desc: "Modernization, Agile Scrum Development, App Migration, and Cloud IoT — enabling organizations to move faster.", icon: <Laptop className="w-12 h-12 stroke-[1px]" /> },
              { id: "04", title: "API Empowerment", desc: "API First Strategy, full-lifecycle API Architecture, Design, Development, Optimization, and iPaaS Integration.", icon: <ArrowRight className="w-12 h-12 stroke-[1px]" /> },
              { id: "05", title: "Cloud Security", desc: "Posture Assessments, Defensible Architectures, Native Protection, and SecDevOps — security throughout the lifecycle.", icon: <Lock className="w-12 h-12 stroke-[1px]" /> },
              { id: "06", title: "Cloud FinOps", desc: "FinOps Consulting, Cost Assessment, Monitoring & Optimization, Budgeting, and Financial Governance frameworks.", icon: <PieChart className="w-12 h-12 stroke-[1px]" /> },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className={`group relative p-10 sm:p-14 hover:bg-muted/50 transition-all z-10 border-b border-r border-border/50`}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="text-5xl font-black text-blue-600/10 dark:text-blue-400/10 group-hover:text-blue-500/20 transition-colors">{item.id}</div>
                  <div className="text-blue-500 dark:text-blue-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">{item.icon}</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-5 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed group-hover:text-foreground transition-colors">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. PARTNERSHIPS SECTION: Modern Cloud Cards */}
      <section className="bg-background py-20 sm:py-32 relative overflow-hidden border-t border-border transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.7 }}
             className="mb-20"
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-4 uppercase">
              — PARTNERSHIPS
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Credentialed Delivery <br /> for Modern Enterprises
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* AWS CARD */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="p-8 sm:p-12 bg-card border border-border rounded-[2.5rem] shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="p-4 bg-orange-500/10 rounded-2xl">
                   <Activity className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground transition-colors">AWS Partner</h3>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-6">AWS Programs</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-muted-foreground transition-colors">
                    {["Immersion Day", "Well-Architected", "Public Sector", "Advanced Tier", "MSP Provider"].map(p => (
                      <li key={p} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-500/60" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-6">AWS Competencies</h4>
                  <div className="flex flex-wrap gap-3">
                    {["DevOps", "Microsoft Workload", "Digital Workplace", "Migration", "Gen AI"].map(c => (
                      <span key={c} className="px-4 py-2 bg-secondary border border-border rounded-full text-xs font-bold text-foreground hover:bg-orange-500 hover:text-white transition-all cursor-default">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AZURE CARD */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="p-8 sm:p-12 bg-card border border-border rounded-[2.5rem] shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="p-4 bg-blue-500/10 rounded-2xl">
                   <Cloud className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground transition-colors">Microsoft Azure</h3>
              </div>

              <div className="space-y-10 h-full flex flex-col">
                <div>
                  <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6">Solutions Specializations</h4>
                  <div className="bg-blue-500/5 dark:bg-blue-400/5 p-8 rounded-3xl border border-blue-500/10 dark:border-blue-400/10 text-sm sm:text-base text-muted-foreground leading-relaxed transition-colors italic">
                    Infrastructure Migration (Linux, Windows, SQL); Kubernetes on Azure; Data &amp; AI with Microsoft Fabric and ML.
                  </div>
                </div>
                
                <div className="mt-auto pt-8 italic text-sm text-muted-foreground border-t border-border transition-colors">
                  &quot;Together, these partnerships position FineLabs as a trusted delivery partner for global enterprises.&quot;
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>

  );
}
