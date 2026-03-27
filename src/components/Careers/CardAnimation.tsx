"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function CardAnimation() {
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
    <section className="relative w-full bg-white pt-16 pb-10 md:pt-1 border-none border-gray-100 overflow-hidden">

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 relative z-10">
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className={cn(
                "group border-none rounded-none shadow-none relative transition-all duration-300 hover:bg-gray-50",
                isVisible
                  ? "animate-in fade-in slide-in-from-left-20 slide-in-from-bottom-20 duration-1000 fill-mode-both"
                  : "opacity-0"
              )}
              style={{
                animationDelay: isVisible ? `${idx * 100}ms` : '0ms'
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