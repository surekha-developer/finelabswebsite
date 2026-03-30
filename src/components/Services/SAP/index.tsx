"use client";

import React from "react";
import { Briefcase } from "lucide-react";

export default function SAP() {
  return (
    <div className="w-full bg-white text-[#121926]">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <div className="bg-blue-500 rounded-md p-1 border border-blue-400">
              <Briefcase className="w-3 h-3 text-amber-100 fill-amber-700" />
            </div>
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase pl-1">
              SAP Practice
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            SAP{" "}
            <span className="bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] bg-clip-text text-transparent">
              Modernization
            </span>
            <br />& Transformation
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            FineLabs partners with organizations to modernize, migrate, and
            maximize their SAP landscapes — delivering measurable business
            outcomes across cloud, core ERP, and line-of-business solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] text-white font-medium rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Explore SAP Services
            </button>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID SECTION */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Strategy & Advisory
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                SAP digital transformation strategies, consulting roadmaps, and
                investment plans — validated through landscape assessments, audits,
                value discovery exercises, and Proofs of Concept.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Implement, Migrate & Transform
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                End-to-end SAP implementations and global rollouts, S/4HANA migrations
                from ECC, SOH, and Cloud, HANA Cloud Platform development, OS/DB
                migrations, and cloud migrations to AWS, Azure, and GCP.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Deep SAP Expertise
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-bold text-gray-800">Functional:</span> FI/CO, MM, SD, SCM, HCM, SRM, CRM, BPC.
                <br />
                <span className="font-bold text-gray-800 mt-1 block">Technical:</span> ABAP, BASIS, NetWeaver, SAP EP.
                <br />
                <span className="font-bold text-gray-800 mt-1 block">UX:</span> Fiori, UI5, SAP Mobile Platform.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Cloud, Analytics & Innovation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                SAP Cloud migration and optimization; SAP BO/BI, Lumira, and embedded
                analytics; Analytics as a Service with UI5 frameworks; custom application
                development and offshore delivery.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Line-of-Business Solutions
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                HCM via SAP SuccessFactors, Procurement via SAP Ariba, and Customer
                Experience via SAP C4C across Sales, Service, and Marketing for
                omnichannel engagement.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Run & Optimize
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Managed Services, application support post-implementation, continuous
                improvement, and a Hire-Train-Deploy (HTD) model to build internal SAP
                capability for long-term self-sufficiency.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
