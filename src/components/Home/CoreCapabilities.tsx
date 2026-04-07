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
    <section className="w-full relative py-12 sm:py-16 px-4 sm:px-6 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 overflow-hidden bg-background px-4 sm:px-6">

      {/* GRADIENT BACKGROUND */}
      <div
        className="absolute top-0 left-0 w-full h-[800px] z-0 pointer-events-none"
        style={{
          background: 'var(--section-gradient)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-14 sm:mb-20 lg:mb-32 gap-6 lg:gap-0">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400 mb-4 uppercase drop-shadow-lg">
              CORE CAPABILITIES
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground drop-shadow-lg">
              What we{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                deliver.
              </span>
            </h2>
          </div>

          <button className="mt-8 lg:mt-0 border border-border bg-secondary/50 backdrop-blur-sm text-foreground rounded-full px-8 py-4 text-sm font-medium hover:bg-secondary transition shadow-lg">
            All services →
          </button>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 bg-card/40 backdrop-blur-xl border border-border shadow-2xl overflow-hidden rounded-[2rem]">
          {services.map((item, index) => (
            <Card
              key={index}
              className="group border-r border-b border-border/50 bg-card/80 dark:bg-card/30 rounded-none shadow-none relative transition-all duration-300 hover:bg-card/100 dark:hover:bg-card/50 hover:shadow-xl hover:-translate-y-1"
            >
              {/* BLUE LOADER LINE */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-full" />

              <CardContent className="p-8">
                {/* ICON */}
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-xl mb-6">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>

                {/* LINK */}
                <span className="text-sm font-medium text-muted-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition flex items-center gap-1">
                  Explore <span className="translate-y-px">↗</span>
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}