"use client";

import React from "react";
import {
  BarChart2,
  Brain,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Library,
  RadioTower,
} from "lucide-react";

export default function DataAndAnalytics() {
  return (
    <div className="w-full bg-white text-[#121926]">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <div className="bg-orange-500 rounded-md p-1 border border-orange-400">
              <BarChart2 className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase pl-1">
              Data & Analytics Practice
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Data{" "}
            <span className="bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] bg-clip-text text-transparent">
              Platforms
            </span>
            <br />& Intelligence
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            Turn data into competitive advantage with AI Ops, workflow
            automation, Generative AI, RAG, Agentic AI, data platforms, and
            control towers.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] text-white font-medium rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Unlock Your Data
            </button>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES (6 CARDS GRID) */}
      <section className="bg-gray-50 py-24 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 border border-pink-100">
                <Brain className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI Ops</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Operationalize AI at scale with MLOps pipelines, model
                monitoring, and automated retraining workflows.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
                <RefreshCcw className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Workflow Automation
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Hyper-automation connecting data flows across enterprise systems,
                reducing manual effort and accelerating cycle times.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 border border-slate-200">
                <ShieldCheck className="w-7 h-7 text-slate-700" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">DevSecOps</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Security-integrated development pipelines ensuring data assets are
                protected throughout the SDLC.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 border border-amber-100">
                <Sparkles className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Generative AI
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Enterprise-grade GenAI solutions built on leading foundation
                models, fine-tuned for your domain and data.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 border border-emerald-100">
                <Library className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                RAG & Agentic AI
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Retrieval-Augmented Generation and autonomous agent frameworks for
                contextually accurate, action-oriented AI.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 border border-red-100">
                <RadioTower className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Control Towers
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                End-to-end data visibility platforms giving executives real-time
                operational intelligence and decision support.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
