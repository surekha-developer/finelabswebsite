"use client";

import React from "react";
import { Cloud, ArrowRight } from "lucide-react";

export default function CloudService() {
  return (
    <div className="w-full bg-white text-[#121926]">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <Cloud className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
              Cloud Practice
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Cloud{" "}
            <span className="bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] bg-clip-text text-transparent">
              Strategy &<br /> Transformation
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            FineLabs&apos; Cloud practice supports organizations at every stage of
            their cloud journey — from strategy and migration through to
            optimization, security, and financial governance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] text-white font-medium rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white text-[#121926] font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
              About finelabs
            </button>
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO SECTION */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100/50 mb-6">
              <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Six Interconnected Capability Areas
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold mb-6">
                01
              </div>
              <h3 className="text-xl font-bold mb-4">
                Consulting, Advisory & Strategy
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cloud First Business Strategy, Cloud Maturity and Readiness
                Assessments, end-to-end Cloud Transformation initiatives, and
                governance frameworks for sustained Cloud Security and Management
                at scale.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold mb-6">
                02
              </div>
              <h3 className="text-xl font-bold mb-4">
                Infrastructure Modernization
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cloud Foundation design, Infrastructure as Code (IaC),
                enterprise-wide Automation, Platform Migrations, robust Cloud
                Operations, Continuous Monitoring, and Site Reliability Engineering.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold mb-6">
                03
              </div>
              <h3 className="text-xl font-bold mb-4">
                Application Transformation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Application Modernization, Agile Scrum-led Development, Application
                Migration, and Cloud IoT — enabling organizations to move faster,
                reduce technical debt, and build cloud-native applications.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold mb-6">
                04
              </div>
              <h3 className="text-xl font-bold mb-4">API Empowerment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                API First Strategy, Maturity Assessments, full-lifecycle API
                Architecture, Design and Development, API Optimization,
                Standardisation, and iPaaS Integration.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold mb-6">
                05
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Multi-Cloud Posture Assessments, Defensible Cloud Architectures,
                Cloud-Native Application Protection, and Cloud SecDevOps — embedding
                security throughout the development lifecycle.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold mb-6">
                06
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud FinOps</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                FinOps Consulting & Advisory, Cloud Usage & Cost Assessment, Cost
                Monitoring & Optimization, Budgeting and Forecasting, and Cloud
                Financial Governance frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PARTNERSHIPS SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
                Partnerships
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Cloud Partnerships & Specializations
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AWS Card */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600 mb-8">
                Amazon Web Services
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    AWS Programs
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Immersion Day, Public Sector Solution Provider, Well-Architected
                    Partner Program, Advanced Tier Services, and Managed Services
                    Provider.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    AWS Competencies
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    DevOps Services, Microsoft Workloads, Digital Workplace
                    Services, Migration & Modernization, and Generative AI Services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    AWS Service Delivery
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Config, CloudFormation, API Gateway, Glue, Systems Manager,
                    Redshift, CloudFront, EC2, QuickSight, Lambda, OpenSearch, RDS,
                    MSK, WAF, and DMS.
                  </p>
                </div>
              </div>
            </div>

            {/* Azure Card */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
              <h3 className="text-2xl font-bold text-blue-600 mb-8">
                Microsoft Azure
              </h3>

              <div className="space-y-6 flex-1">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Solutions Partner Specializations
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Infrastructure Migration (Linux & Open Source Databases; Windows
                    Server & SQL Server); Digital & App Innovation with Kubernetes
                    on Azure; Data & AI with Microsoft Fabric, ML, and Metadata
                    Management.
                  </p>
                </div>
              </div>

              {/* Quote box */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100 italic text-sm text-gray-700 leading-relaxed">
                &quot;Together, these partnerships position FineLabs as a trusted,
                credentialed delivery partner for enterprises modernizing on AWS or
                Microsoft Azure — with the technical depth and proven track record
                to do so at scale.&quot;
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
