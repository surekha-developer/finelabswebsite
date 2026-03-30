"use client";

import React from "react";
import { Bot } from "lucide-react";

export default function AIAndAutomation() {
  return (
    <div className="w-full bg-white text-[#121926]">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <div className="bg-pink-500 rounded-md p-1 border border-pink-400">
              <Bot className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase pl-1">
              AI & Automation Practice
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            AI{" "}
            <span className="bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] bg-clip-text text-transparent">
              Capabilities
            </span>
            <br />& Use Cases
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            Grounded in deep contextual knowledge of Fortune 500 clients,
            FineLabs has built a growing portfolio of AI capabilities —
            purpose-built solutions designed to deliver measurable outcomes.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] text-white font-medium rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Explore AI Solutions
            </button>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES ROW (4 CARDS) */}
      <section className="bg-gray-50 py-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100/50 mb-6">
                <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase">
                  Knowledge & Search
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Enterprise Knowledge Discovery
              </h3>

              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">
                    Enterprise Knowledge Intelligence
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Natural language-based search across corporate data sources
                    delivering 80-90% accurate contextual answers.
                  </p>
                </div>
                <div className="pb-6 border-b border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">
                    RAG Frameworks
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Custom LLM-powered search for regulated industries such as
                    pharma and real estate.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">
                    Recommendation Engines
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Contextual intelligent systems for regulatory, legal, and
                    commercial applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100/50 mb-6">
                <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase">
                  Conversational AI
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Generative AI Solutions
              </h3>

              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">
                    Smart Claims Automation
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AI-driven conversational bots streamlining HR and financial
                    claims processes.
                  </p>
                </div>
                <div className="pb-6 border-b border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">
                    Contact Center Conversational AI
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Multilingual text and voice assistants for call deflection,
                    transcription, and query automation.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">
                    Employee Self-Service Automation
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AI helpdesk and automated support improving response times
                    and reducing support team load.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100/50 mb-6">
                <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase">
                  Sales Enablement
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                AI for Sales Acceleration
              </h3>

              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">
                    RAG-Based Sales Intelligence
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AI engine cataloging and retrieving solution artifacts, BOMs,
                    and technical documentation for sales teams.
                  </p>
                </div>
                <div className="pb-6 border-b border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">
                    Sales Inquiry Automation
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Generative AI to streamline proposal generation and product
                    configuration.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">
                    Hyper-Personalized Targeting
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Behavior-based outreach calibrated precisely to individual
                    buyer signals.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100/50 mb-6">
                <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase">
                  Document & Workflow
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Intelligent Document Management
              </h3>

              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">
                    AI-Powered Classification & Routing
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Generative AI and NLP to analyze documents, classify intent,
                    and route workflows across L2O, O2C, T2R, HR, and Finance.
                  </p>
                </div>
                <div className="pb-6 border-b border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">
                    Intelligent Invoice Processing
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    End-to-end accounts payable workflow automation.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">
                    Compliance & Regulatory Assistant
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AI-powered guidance and documentation support for complex
                    regulatory requirements.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
