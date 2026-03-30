"use client";

import React from "react";
import { Zap, Target, Wrench, CheckSquare } from "lucide-react";

export default function ExperiencePlatforms() {
  return (
    <div className="w-full bg-white text-[#121926]">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <div className="bg-orange-500 rounded-full p-1 border border-orange-400">
              <Zap className="w-3 h-3 text-white fill-current" />
            </div>
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase pl-1">
              Experience Platforms
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            <span className="bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] bg-clip-text text-transparent">
              Experience Platforms
            </span>
            <br />
            & Enterprise SaaS
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            FineLabs redefines business efficiency through tailored, platform-led
            solutions that drive growth, operational excellence, and lasting
            competitive advantage.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] text-white font-medium rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Explore Platforms
            </button>
          </div>
        </div>
      </section>

      {/* 2. THREE PILLARS / CORE CAPABILITIES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 mb-6 text-rose-500 flex items-center justify-center">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital Transformation</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                Advisory, Implementation, Migration, and Enhancements across all
                platform domains — ensuring outcomes align to business strategy
                from day one.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 mb-6 text-gray-500 flex items-center justify-center">
                <Wrench className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Application Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                Production Support, Maintenance, Performance Optimization,
                Integration, and Bug Fixes — reducing operational risk and ensuring
                continuous platform value delivery.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-12 h-12 mb-6 text-green-500 flex items-center justify-center">
                <CheckSquare className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                Functional Testing, Test Automation, and Performance Engineering —
                embedding quality at every stage from pre-go-live through each
                release cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM DOMAINS SECTION */}
      <section className="bg-gray-50 pb-24 pt-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100/50 mb-6">
              <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
                Platform Domains
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              Six Platform Domains
              <div className="absolute -bottom-4 left-0 w-1/4 h-1 bg-gradient-to-r from-[#2b6eff] to-[#8c35ff]" />
            </h2>
          </div>

          {/* Grid (2 columns as seen in the design) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Domain 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3">
                Enterprise Resource Planning (ERP)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                End-to-end ERP transformation and support across SAP, Oracle,
                ServiceNow, Microsoft Dynamics, and Zoho.
              </p>
            </div>

            {/* Domain 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3">
                Supply Chain Management (SCM)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deep implementation and advisory expertise across SAP, Blue Yonder,
                O9 Solutions, Manhattan Associates, Anaplan, and Kinaxis.
              </p>
            </div>

            {/* Domain 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3">
                Customer Relationship Management (CRM)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Capabilities spanning Salesforce, Freshsales, Microsoft Dynamics
                365, Oracle NetSuite, ServiceNow, and Zoho CRM.
              </p>
            </div>

            {/* Domain 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3">
                Human Capital Management (HCM)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                HR modernization through SAP SuccessFactors, Oracle HCM Cloud, and
                Workday.
              </p>
            </div>

            {/* Domain 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3">
                Workflow & Business Process Automation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ServiceNow, Blackline for accounting automation, and Icertis for
                contract lifecycle management.
              </p>
            </div>

            {/* Domain 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3">
                Mobile Experience Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Intuitive, high-performance mobile interfaces that extend enterprise
                capabilities to any device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
