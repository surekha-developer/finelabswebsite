"use client";

import React from "react";
import { Radio, ArrowDown } from "lucide-react";

export default function IoTAndEdge() {
  return (
    <div className="w-full bg-white text-[#121926]">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <div className="bg-teal-600 rounded-md p-1 border border-teal-500">
              <Radio className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase pl-1">
              IoT & Edge Practice
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            IoT{" "}
            <span className="bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] bg-clip-text text-transparent">
              Edge-Driven
            </span>
            <br />
            Supply Chain
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            FineLabs leverages deep IoT and Supply Chain expertise to transform
            supply chain visibility, resilience, and operational efficiency from
            the edge.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] text-white font-medium rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Connect Your Operations
            </button>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES (3 CARDS ROW) */}
      <section className="bg-gray-50 py-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                End-to-End Asset & Network Visibility
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Real-time digital twins of equipment, sensors, and logistics assets
                across plants, warehouses, and transit nodes — surfaced through a
                unified dashboard delivering uptime monitoring and exception alerts.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Predictive & Prescriptive Intelligence
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                AI and ML models continuously analyze IoT and operational data to
                forecast demand variability, predict equipment downtime, and flag
                emerging supply risks for proactive decision-making.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Connected Operations & Workflow Automation
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Event-driven workflow automation triggers replenishment, maintenance,
                or logistics dispatch automatically based on real-time IoT thresholds
                — integrating with ERP, MES, WMS, and SCM platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TANGIBLE ROI SECTION */}
      <section className="bg-gray-50 pb-24 pt-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100/50 mb-6">
              <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
                Business Impact
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tangible ROI
            </h2>
          </div>

          {/* ROI Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ROI Card 1 */}
            <div className="bg-gradient-to-br from-[#7755ff] to-[#9a66ff] p-10 rounded-2xl shadow-lg text-white text-center flex flex-col justify-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-sm">
                15%
              </div>
              <h3 className="text-lg font-bold mb-2">Reduction in Downtime</h3>
              <p className="text-sm text-white/80 leading-relaxed max-w-[200px] mx-auto">
                Through predictive monitoring and proactive intervention
              </p>
            </div>

            {/* ROI Card 2 */}
            <div className="bg-gradient-to-br from-[#4b7aef] to-[#8055ff] p-10 rounded-2xl shadow-lg text-white text-center flex flex-col justify-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-sm">
                20%
              </div>
              <h3 className="text-lg font-bold mb-2">
                Asset Utilization Improvement
              </h3>
              <p className="text-sm text-white/80 leading-relaxed max-w-[200px] mx-auto">
                Driven by real-time visibility and optimization
              </p>
            </div>

            {/* ROI Card 3 */}
            <div className="bg-gradient-to-br from-[#3b82f6] to-[#7c5ce6] p-10 rounded-2xl shadow-lg text-white text-center flex flex-col justify-center items-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-sm flex items-center justify-center">
                <ArrowDown className="w-12 h-12 stroke-[3]" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                Inventory Carrying Costs
              </h3>
              <p className="text-sm text-white/80 leading-relaxed max-w-[200px] mx-auto">
                Through predictive demand-supply balancing
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
