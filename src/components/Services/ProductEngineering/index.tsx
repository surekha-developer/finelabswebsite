"use client";

import React from "react";
import { Settings, Lightbulb, Code, RefreshCw, PenTool, ArrowRight } from "lucide-react";

export default function ProductEngineering() {
  return (
    <div className="w-full bg-white text-[#121926]">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <div className="bg-indigo-600 rounded-md p-1 border border-indigo-500">
              <Settings className="w-3 h-3 text-white fill-current" />
            </div>
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase pl-1">
              Product Engineering Practice
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Product{" "}
            <span className="bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] bg-clip-text text-transparent">
              Engineering
            </span>
            <br />
            Full Lifecycle
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            FineLabs&apos; Product Engineering practice partners with
            organizations across the entire product lifecycle — from ideation and
            strategy through engineering, modernization, and long-term sustenance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] text-white font-medium rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Build With Us
            </button>
          </div>
        </div>
      </section>

      {/* 2. GRID SECTION (4 CARDS) */}
      <section className="bg-gray-50 py-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-yellow-300 fill-yellow-200" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Product & Platform Strategy
              </h3>
              <ul className="space-y-4">
                {[
                  "Design Thinking and Incubation",
                  "Agile Transformation and Organizational Change Management",
                  "Innovation Labs for rapid experimentation",
                  "Co-Innovation Ecosystem spanning academia, startups, customers",
                  "New Product Introduction (NPI) with commercial readiness",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-gray-100" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Product & Platform Engineering
              </h3>
              <ul className="space-y-4">
                {[
                  "Agile Product Development",
                  "Modern Engineering Delivery with DevSecOps",
                  "Quality Engineering embedded throughout",
                  "Integrated Cyber Security by design",
                  "Site Reliability Engineering (SRE)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Modernization
              </h3>
              <ul className="space-y-4">
                {[
                  "Legacy Modernization (including mainframes)",
                  "Re-platforming & Application Portfolio Rationalization",
                  "Cloud Assessment and Migration",
                  "APIification using Microservices",
                  "Container Enablement",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Sustenance & Support
              </h3>
              <ul className="space-y-4">
                {[
                  "Sustenance Engineering & Product Support",
                  "Porting and Certification",
                  "End of Life Services",
                  "Re-engineering Stacks",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
