"use client";

import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "01",
    title: "Cloud",
    desc: "Building, modernizing, and optimizing cloud estates across strategy, infrastructure, application, security, API, and FinOps domains.",
  },
  {
    id: "02",
    title: "Cyber Security",
    desc: "End-to-end security capabilities spanning cloud infrastructure, threat intelligence, architecture, OT security, vulnerability management, and compliance.",
  },
  {
    id: "03",
    title: "Experience Platforms & Enterprise SaaS",
    desc: "Digital transformation across ERP, SCM, CRM, HCM, workflow automation, and mobile — through advisory, implementation, and managed support.",
  },
  {
    id: "04",
    title: "Product Engineering & IoT",
    desc: "Full-lifecycle product capabilities from strategy and engineering through modernization and long-term sustenance, including edge-driven supply chain optimization.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white px-6 py-12 pt-8">
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 mb-2">
          — WHAT WE DO
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-2">
          Outcome Driven.{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            AI-Powered.
          </span>
        </h2>

        <p className="text-gray-500 max-w-2xl mb-10 leading-relaxed">
          Everything we deliver is Outcome Driven, Experience Engineering Enabled,
          and Underpinned by AI-Powered Innovation.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 border-none border-[#e9e9e9] rounded-3xl overflow-hidden">
          {services.map((item, index) => (
            <Card
              key={index}
              className="group border-0 rounded-none shadow-none bg-white transition-all duration-300 hover:bg-gray-100"
            >
              <CardContent className="p-8">

                {/* NUMBER */}
                <div className="text-5xl font-bold text-blue-300 mb-6">
                  {item.id}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>

              </CardContent>

              {/* DIVIDER LINES */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="border-r border-[#e9e9e9] h-full w-full" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}