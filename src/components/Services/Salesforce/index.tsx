"use client";

import React from "react";
import { Cloud } from "lucide-react";

export default function Salesforce() {
  return (
    <div className="w-full bg-white text-[#121926]">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <div className="bg-blue-600 rounded-md p-1 border border-blue-500">
              <Cloud className="w-3 h-3 text-white fill-current" />
            </div>
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase pl-1">
              Salesforce Practice
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Salesforce{" "}
            <span className="bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] bg-clip-text text-transparent">
              Excellence
            </span>
            <br />
            Delivered
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            FineLabs brings a strong, proven Salesforce practice with a track
            record of successful end-to-end implementations across organizations
            of all sizes.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] text-white font-medium rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Start Your Salesforce Journey
            </button>
          </div>
        </div>
      </section>

      {/* 2. CORE PLATFORM CAPABILITIES SECTION */}
      <section className="bg-gray-50 py-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100/50 mb-6">
              <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
                Platform Domains
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              Core Platform Capabilities
              <div className="absolute -bottom-4 left-0 w-1/4 h-1 bg-gradient-to-r from-[#2b6eff] to-[#8c35ff]" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Revenue Cloud (CPQ)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Streamline configure-price-quote processes, accelerating deal
                velocity and improving pricing accuracy across the sales cycle.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Service Cloud
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Transform customer service operations with the tools and
                intelligence support teams need to resolve issues faster and
                deliver exceptional experiences.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Data Cloud & AI
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Unify customer data, build a single source of truth, and leverage
                AI-driven insights to personalize engagement at scale.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Marketing Cloud
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Multi-channel marketing automation to attract, engage, and retain
                customers more effectively.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Non-Profit Cloud
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Purpose-built capabilities for constituent management, fundraising,
                and program delivery in mission-driven organizations.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Analytics & Integrations
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Real-time dashboards, AI-powered insights, and seamless connectivity
                across the enterprise technology landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW WE ENGAGE SECTION */}
      <section className="bg-gray-50 pb-24 pt-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100/50 mb-6">
              <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
                End-To-End Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How We Engage
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Step 1 */}
            <div className="bg-white px-5 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
                01
              </div>
              <span className="font-semibold text-sm text-gray-900">
                Assessment
              </span>
            </div>

            {/* Step 2 */}
            <div className="bg-white px-5 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
                02
              </div>
              <span className="font-semibold text-sm text-gray-900">
                Consulting
              </span>
            </div>

            {/* Step 3 */}
            <div className="bg-white px-5 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
                03
              </div>
              <span className="font-semibold text-sm text-gray-900">
                Implementation
              </span>
            </div>

            {/* Step 4 */}
            <div className="bg-white px-5 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
                04
              </div>
              <span className="font-semibold text-sm text-gray-900">
                Integration
              </span>
            </div>

            {/* Step 5 */}
            <div className="bg-white px-5 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
                05
              </div>
              <span className="font-semibold text-sm text-gray-900">
                Migration
              </span>
            </div>

            {/* Step 6 */}
            <div className="bg-white px-5 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
                06
              </div>
              <span className="font-semibold text-sm text-gray-900">
                Support
              </span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
