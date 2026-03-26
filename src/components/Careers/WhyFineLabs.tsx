"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function WhyFineLabs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🧪",
      title: "Lab Culture",
      desc: "We operate with startup speed and enterprise wisdom. Every team member has the autonomy to experiment, learn, and build solutions that matter at scale.",
    },
    {
      icon: "🌐",
      title: "Global Impact",
      desc: "Work with Fortune 500 clients across the US and India. Your contributions directly shape digital transformation journeys at the highest level.",
    },
    {
      icon: "🤖",
      title: "AI-First Mindset",
      desc: "We don't just talk about AI — we build with it. Join teams working on cutting-edge Generative AI, RAG, and Agentic AI solutions for real enterprise challenges.",
    },
    {
      icon: "📈",
      title: "Growth Accelerated",
      desc: "Accelerated career paths, access to the latest certifications (AWS, Microsoft, Salesforce, SAP), and continuous learning built into how we work.",
    },
    {
      icon: "🤝",
      title: "Collaborative by Design",
      desc: "Cross-functional teams with deep domain experts. Consulting-led culture where your perspective is valued and your voice shapes outcomes.",
    },
    {
      icon: "⚖️",
      title: "Balanced & Flexible",
      desc: "Hybrid work culture that trusts you to deliver. We focus on outcomes, not hours — giving you the flexibility to do your best work.",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white pt-16 pb-10 md:pt-20 border-none border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 mb-6 uppercase">
          — WHY FINE LABS
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-35">
          Where{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            innovation
          </span>
z          <br />
          meets impact.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-none border-gray-200 rounded-3xl overflow-hidden">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className={cn(
                "group border border-transparent rounded-none shadow-none relative transition-all duration-100 hover:border-gray-200 hover:bg-gray-100",
                isVisible
                  ? "animate-in fade-in slide-in-from-left-8 slide-in-from-bottom-8 duration-700 fill-mode-both"
                  : "opacity-0"
              )}
              style={{
                animationDelay: isVisible ? `${idx * 150}ms` : '0ms'
              }}
            >
              <CardContent className="p-10">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}