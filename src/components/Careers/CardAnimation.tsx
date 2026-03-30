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
      image: "/images/Career 1.png",
    },
    {
      icon: "🌐",
      title: "Global Impact",
      desc: "Work with Fortune 500 clients across the US and India. Your contributions directly shape digital transformation journeys at the highest level.",
      image: "/images/Career 2.png",
    },
    {
      icon: "🤖",
      title: "AI-First Mindset",
      desc: "We don't just talk about AI — we build with it. Join teams working on cutting-edge Generative AI, RAG, and Agentic AI solutions for real enterprise challenges.",
      image: "/images/Career 3.png",
    },
    {
      icon: "📈",
      title: "Growth Accelerated",
      desc: "Accelerated career paths, access to the latest certifications (AWS, Microsoft, Salesforce, SAP), and continuous learning built into how we work.",
      image: "/images/Career 4.png",
    },
    {
      icon: "🤝",
      title: "Collaborative by Design",
      desc: "Cross-functional teams with deep domain experts. Consulting-led culture where your perspective is valued and your voice shapes outcomes.",
      image: "/images/CAreer 5.png",
    },
    {
      icon: "⚖️",
      title: "Balanced & Flexible",
      desc: "Hybrid work culture that trusts you to deliver. We focus on outcomes, not hours — giving you the flexibility to do your best work.",
      image: "/images/Career 6.png",
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
                "group border-none rounded-none shadow-none relative transition-all duration-300 hover:bg-gray-50 overflow-hidden",
                isVisible
                  ? "animate-in fade-in slide-in-from-left-20 slide-in-from-bottom-20 duration-1000 fill-mode-both"
                  : "opacity-0"
              )}
              style={{
                animationDelay: isVisible ? `${idx * 100}ms` : '0ms'
              }}
            >
              <CardContent className="p-10 relative z-30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-slate-900 group-hover:text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-900">
                  {feature.desc}
                </p>
              </CardContent>

              {/* Hover Image Overlay */}
              <div
                className="absolute inset-0 z-20 opacity-0 scale-0 -rotate-45 origin-bottom-left transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 flex items-center justify-center p-6 pointer-events-none"
              >
                {/* Soft overlay to ensure text remains highly readable */}
                <div className="absolute inset-0 bg-white/60 z-10" />
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain p-4 z-0"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}