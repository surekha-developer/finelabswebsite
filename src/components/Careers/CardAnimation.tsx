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
    <section className="relative w-full bg-background pt-16 pb-10 md:pt-1 border-none border-border overflow-hidden transition-colors duration-300">

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 relative z-10">
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className={cn(
                "group border-0 border-r border-b border-border/50 rounded-none shadow-none relative transition-all duration-500 hover:bg-muted/50 overflow-hidden bg-card/50 dark:bg-card/20",
                // Remove right border for the last column on different breakpoints
                "lg:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(2n)]:border-r-0 max-md:border-r-0",
                // Remove bottom border for the last row on different breakpoints
                "lg:[&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 max-md:last:border-b-0",
                isVisible
                  ? "animate-in fade-in slide-in-from-left-20 slide-in-from-bottom-20 duration-1000 fill-mode-both"
                  : "opacity-0"
              )}
              style={{
                animationDelay: isVisible ? `${idx * 150}ms` : '0ms'
              }}
            >
              <CardContent className="p-10 sm:p-14 relative z-30 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-2xl mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {feature.desc}
                </p>
              </CardContent>

              {/* Hover Image Overlay */}
              <div
                className="absolute inset-0 z-20 opacity-0 scale-0 -rotate-45 origin-bottom-left transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 flex items-center justify-center p-6 pointer-events-none"
              >
                {/* Theme-aware overlay to ensure text remains highly readable */}
                <div className="absolute inset-0 bg-background/90 dark:bg-black/95 z-10" />
                <div className="relative w-full h-full z-20 opacity-40 dark:opacity-20 flex items-center justify-center">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain p-8 z-0 grayscale"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}