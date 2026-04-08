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
    <section className="w-full bg-background px-6 py-12 pt-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-2 uppercase">
          — WHAT WE DO
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-2 text-foreground transition-colors">
          Outcome Driven.{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            AI-Powered.
          </span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mt-6 mb-12 text-sm sm:text-base md:text-lg leading-relaxed transition-colors">
          Everything we deliver is Outcome Driven, Experience Engineering Enabled,
          and Underpinned by AI-Powered Innovation.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 border border-border rounded-3xl overflow-hidden shadow-2xl">
          {services.map((item, index) => (
            <Card
              key={index}
              className="group border-0 rounded-none shadow-none bg-card hover:bg-muted/50 transition-all duration-500 relative"
            >
              <CardContent className="p-10 sm:p-14">

                {/* NUMBER */}
                <div className="text-5xl sm:text-6xl font-black text-blue-600/10 dark:text-blue-400/10 mb-8 transition-colors group-hover:text-blue-500/20 group-hover:scale-110 origin-left duration-500">
                  {item.id}
                </div>

                {/* TITLE */}
                <h3 className="text-xl sm:text-2xl font-bold mb-5 text-foreground transition-colors">{item.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed transition-colors">{item.desc}</p>

              </CardContent>

              {/* BORDER DIVIDERS (CSS-only for grid lines) */}
              <div className="absolute top-0 right-0 w-px h-full bg-border hidden md:block" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-border" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}