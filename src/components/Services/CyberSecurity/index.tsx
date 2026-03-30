"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function CyberSecurity() {
  return (
    <div className="w-full bg-white text-[#121926]">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
              Cyber Security Practice
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            End-to-End{" "}
            <span className="bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] bg-clip-text text-transparent">
              Cyber Security
            </span>
            <br />
            Excellence
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            In an era of relentless cyber threats, FineLabs delivers a comprehensive,
            multi-layered Cyber Security practice designed to protect enterprises
            across every dimension.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] text-white font-medium rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Start Security Assessment
            </button>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES SECTION */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100/50 mb-6">
              <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
                Capabilities
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              Comprehensive Security Coverage
              <div className="absolute -bottom-4 left-0 w-1/4 h-1 bg-gradient-to-r from-[#2b6eff] to-[#8c35ff]" />
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 via-orange-400 to-yellow-400 opacity-70" />
              <h3 className="text-lg font-bold mb-4">Cloud Infrastructure Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                CSPM, CWPP, DSPM, and API Security — protecting cloud environments
                comprehensively from misconfigurations, workload threats, data exposure,
                and interface vulnerabilities.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-amber-400 opacity-70" />
              <h3 className="text-lg font-bold mb-4">Security Architecture & Orchestration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Security frameworks built into the enterprise from the ground up — ensuring
                controls, workflows, and tooling are coherently integrated for coordinated
                and scalable defense.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-200 opacity-70" />
              <h3 className="text-lg font-bold mb-4">Managed Security Services</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Continuous monitoring, detection, and response capabilities delivered by
                experienced security professionals who act as an extension of your team
                around the clock.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-emerald-400 opacity-70" />
              <h3 className="text-lg font-bold mb-4">OT Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specialized OT Security services protecting critical operational infrastructure
                — ensuring the systems running physical operations are as secure as
                surrounding digital environments.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2b6eff] to-blue-300 opacity-70" />
              <h3 className="text-lg font-bold mb-4">Threat Intelligence & Monitoring</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                MITRE ATT&CK Framework mapping, Breach Path Prediction, and rigorous Red
                Teaming exercises to stress-test defenses under real-world conditions.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8c35ff] to-purple-300 opacity-70" />
              <h3 className="text-lg font-bold mb-4">Asset Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                SIEM for centralized threat visibility, SOAR to accelerate response, and
                EDR/XDR to detect, investigate, and contain threats at the endpoint level.
              </p>
            </div>

            {/* Card 7 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-pink-300 opacity-70" />
              <h3 className="text-lg font-bold mb-4">Risk Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                SBOM development, Risk Management Framework design, and Compliance & Regulatory
                risk management — helping organizations understand and govern security risk.
              </p>
            </div>

            {/* Card 8 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-400 opacity-70" />
              <h3 className="text-lg font-bold mb-4">Vulnerability Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                SAST, DAST, Penetration Testing, Ethical Hacking, and Workload Protection —
                a clear, prioritized view of exposure and a concrete path to remediation.
              </p>
            </div>

            {/* Card 9 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-500 to-gray-300 opacity-70" />
              <h3 className="text-lg font-bold mb-4">Compliance Audits</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full-spectrum coverage of PCI DSS, ISO 27001/2, NIST, SOX, and FedRAMP —
                maintaining audit-readiness as a continuous state rather than a point-in-time
                exercise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
