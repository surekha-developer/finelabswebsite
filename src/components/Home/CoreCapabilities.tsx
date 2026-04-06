"use client";

import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Cloud",
    desc: "End-to-end cloud strategy, infrastructure modernization, and FinOps across AWS and Azure.",
    icon: "☁️",
  },
  {
    title: "Cyber Security",
    desc: "Multi-layered enterprise security spanning cloud, OT, threat intelligence, and compliance.",
    icon: "🔐",
  },
  {
    title: "Experience Platforms",
    desc: "ERP, SCM, CRM, HCM transformation through advisory, implementation, and managed support.",
    icon: "⚡",
  },
  {
    title: "Product Engineering",
    desc: "Full-lifecycle product capabilities from ideation through modernization and sustenance.",
    icon: "🧪",
  },
  {
    title: "Data, AI & Automation",
    desc: "Generative AI, RAG, Agentic AI, data platforms, and hyper-automation turning data into advantage.",
    icon: "🤖",
  },
  {
    title: "IoT & Supply Chain",
    desc: "Edge-driven visibility, predictive intelligence, and connected operations for complex supply chains.",
    icon: "🔗",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="w-full relative py-20 px-4 sm:px-0 pt-0 pb-0 overflow-hidden bg-white">

      {/* GRADIENT BACKGROUND */}
      <div
        className="absolute top-0 left-0 w-full h-[800px] z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 160% 120% at 50% -10%, #ffffffff 39%, #8c35ff 58%, #2b6eff 65%, #ffffff 80%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-4 lg:mb-4 gap-0 md:gap-2 pt-10">
          <div className="flex flex-col items-start">
            <p className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-blue-600 mb-2 mt-10 md:mb-4 uppercase">
              CORE CAPABILITIES
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black leading-tight">
              What we{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                deliver.
              </span>
            </h2>
          </div>

          <button className="w-fit flex-shrink-0 border border-black/50 bg-black/5 backdrop-blur-sm text-black rounded-full px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium hover:bg-black/10 hover:border-black transition whitespace-nowrap mb-1">
            All services →
          </button>
        </div>

        {/* GRID */}
        <div className="grid my-10 md:grid-cols-2 lg:grid-cols-3 bg-white/40 backdrop-blur-xl border-none rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-gray-200/50">
          {services.map((item, index) => (
            <Card
              key={index}
              className="group border-r border-b border-gray-100/30 bg-white/90 rounded-none shadow-none relative transition-all duration-500 hover:bg-white"
            >
              {/* BLUE LOADER LINE */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 ease-out group-hover:w-full" />

              <CardContent className="p-6">
                {/* ICON */}
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl mb-6">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* LINK */}
                <span className="text-sm text-gray-400 group-hover:text-blue-500 transition">
                  Explore ↗
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}