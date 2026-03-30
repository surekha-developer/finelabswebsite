"use client";

import React from "react";
import { Link2 } from "lucide-react";

export default function SupplyChain() {
  return (
    <div className="w-full bg-white text-[#121926]">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <div className="bg-emerald-500 rounded-md p-1 border border-emerald-400">
              <Link2 className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase pl-1">
              Supply Chain Practice
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Supply Chain{" "}
            <span className="bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] bg-clip-text text-transparent">
              Management
            </span>
            <br />& Optimization
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            Comprehensive end-to-end Supply Chain capabilities integrating strategic
            consulting, advanced planning, and AI-driven operational intelligence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] text-white font-medium rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Optimize Your Supply Chain
            </button>
          </div>
        </div>
      </section>

      {/* 2. SPLIT SECTION: PARTNERSHIPS & CAPABILITIES */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* LEFT COLUMN: TECHNOLOGY PARTNERS */}
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100/50 mb-6">
                <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
                  Technology Partners
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-10">
                Strategic Technology Partnerships
              </h2>

              <div className="flex flex-col gap-4">
                {/* Partner Card 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Blue Yonder
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Cognitive Planning and TMS/WMS integration for end-to-end SCM solutions.
                    </p>
                  </div>
                </div>

                {/* Partner Card 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      o9 Solutions
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Demand and supply planning with scenario-based optimization capabilities.
                    </p>
                  </div>
                </div>

                {/* Partner Card 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Kinaxis, RELEX & Anaplan
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Planning and optimization across multiple industry verticals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: CAPABILITIES */}
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100/50 mb-6">
                <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
                  Capabilities
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-10">
                Core Consulting & Optimization
              </h2>

              <div className="flex flex-col gap-8">
                {/* Capability 1 */}
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-900 mb-1">
                      Network Optimization
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Designing and optimizing supply chain networks to reduce cost and improve service levels.
                    </p>
                  </div>
                </div>

                {/* Capability 2 */}
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-900 mb-1">
                      AI-Driven Root Cause Analysis (ChatSCM)
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Proprietary intelligent agent using the LPOPT solver engine to diagnose planning failures.
                    </p>
                  </div>
                </div>

                {/* Capability 3 */}
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-900 mb-1">
                      Predictive & Prescriptive Intelligence
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      AI/ML forecasting for demand variability and equipment downtime.
                    </p>
                  </div>
                </div>

                {/* Capability 4 */}
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-900 mb-1">
                      Connected Operations & Workflow Automation
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Event-driven workflows integrated with ERP, MES, and WMS systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
