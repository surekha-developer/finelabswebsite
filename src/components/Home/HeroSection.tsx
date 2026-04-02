"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const phrases = [
    "AI Native Approch",
    "5 Practice Areas",
    "2 Global Regions",
    "Scalability"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // 1 second after component mounts, animate the container's expansion
    const expandTimer = setTimeout(() => {
      setIsExpanded(true);
    }, 1000);
    return () => clearTimeout(expandTimer);
  }, []);

  useEffect(() => {
    if (!isExpanded) return;
    // Continuously loop between images every 3 seconds after expansion
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [isExpanded]);

  useEffect(() => {
    // Continuously loop the top-right phrase every 3 seconds
    const textInterval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setFade(true); // fade back in
      }, 500);
    }, 3000);
    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="w-full bg-[#f8f9fa] min-h-[83vh] pt-10 pb-0 flex flex-col justify-between overflow-hidden relative">

      {/* TOP: Enterprise Line & Animated Text */}
      <div className="w-full max-w-[1600px] mx-auto px-6 mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 animate-in fade-in slide-in-from-top-4 duration-700">
          ENTERPRISE-GRADE TRANSFORMATION
        </p>
        <p className={`text-lg md:text-2xl font-bold pr-40 text-slate-900 animate-in fade-in slide-in-from-top-4 duration-700 transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}>
          {phrases[phraseIndex]}
        </p>
      </div>

      {/* CENTER: The Animated Expanding "WILD" Layout */}
      <div className="w-full max-w-[1600px] mx-auto px-6 flex flex-col items-center justify-center flex-1 my-8 z-10">

        {/* DESKTOP INLINE LAYOUT (Matches reference image) */}
        <div className="hidden md:flex flex-row items-center justify-center w-full relative">
          <h1 className="text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] font-bold tracking-tighter text-slate-900 leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both">
            DIGITAL
          </h1>

          {/* Expanding Animated Centered Pill Container */}
          <div className="relative flex items-center justify-center">
            <div
              className={`transition-[width,margin,opacity] duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden relative shadow-2xl shadow-indigo-500/10 bg-white ring-1 ring-black/5 flex-shrink-0 h-[100px] lg:h-[140px] xl:h-[180px] rounded-[9999px] ${isExpanded ? "w-[30vw] max-w-[600px] mx-6 lg:mx-8 opacity-100" : "w-0 mx-0 opacity-0"
                }`}
            >
              {/* First Image */}
              <Image
                src="/images/landing 1.png"
                alt="Hero Scene 1"
                fill
                priority
                className={`object-cover transition-opacity duration-1000 ease-in-out ${currentImageIndex === 0 ? "opacity-100" : "opacity-0"
                  }`}
              />
              {/* Second Image */}
              <Image
                src="/images/landing 2.png"
                alt="Hero Scene 2"
                fill
                priority
                className={`object-cover transition-opacity duration-1000 ease-in-out ${currentImageIndex === 1 ? "opacity-100" : "opacity-0"
                  }`}
              />
              <div className="absolute inset-0 rounded-[9999px] ring-1 ring-inset ring-black/10 z-10 pointer-events-none" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] font-bold tracking-tighter text-slate-900 leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both">
            FUTURES
          </h1>
        </div>

        {/* MOBILE STACKED LAYOUT */}
        <div className="flex md:hidden flex-col items-center justify-center w-full">
          <h1 className="text-[13vw] font-bold tracking-tighter text-slate-900 leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both">
            DIGITAL
          </h1>

          <div
            className={`transition-[height,margin,opacity] duration-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)] w-[85vw] rounded-[9999px] overflow-hidden relative shadow-2xl shadow-indigo-500/10 bg-white ring-1 ring-black/5 flex-shrink-0 ${isExpanded ? "h-[120px] my-6 opacity-100" : "h-0 my-0 opacity-0"
              }`}
          >
            <Image
              src="/images/landing 1.png"
              alt="Hero Scene 1"
              fill
              priority
              className={`object-cover transition-opacity duration-1000 ease-in-out ${currentImageIndex === 0 ? "opacity-100" : "opacity-0"
                }`}
            />
            <Image
              src="/images/landing 2.png"
              alt="Hero Scene 2"
              fill
              priority
              className={`object-cover transition-opacity duration-1000 ease-in-out ${currentImageIndex === 1 ? "opacity-100" : "opacity-0"
                }`}
            />
            <div className="absolute inset-0 rounded-[9999px] ring-1 ring-inset ring-black/10 z-10 pointer-events-none" />
          </div>

          <h1 className="text-[13vw] font-bold tracking-tighter text-slate-900 leading-none animate-in fade-in slide-in-from-top-6 duration-1000 fill-mode-both">
            FUTURES
          </h1>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tight text-slate-900 mt-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
          built with <span className="text-blue-600">precision.</span>
        </h2>
      </div>

      {/* BOTTOM ACTION BAR: Text Left, Line Middle, Buttons Right */}
      <div className="w-full max-w-[1600px] mx-auto px-6 mb-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">

          {/* Bottom Left Text (Strictly 3 lines via width constraint) */}
          <div className="md:w-[35%] text-left">
            <p className="text-gray-500 text-[15px] leading-relaxed w-[280px] max-w-full animate-in fade-in slide-in-from-left-6 duration-700 delay-500 fill-mode-both">
              Purpose-built for enterprise digital transformation. Where AI advantage meets lab-grade agility.
            </p>
          </div>

          {/* Middle Line */}
          <div className="hidden md:block flex-1 mx-8 border-t border-gray-300 opacity-60 animate-in fade-in duration-1000 delay-700 fill-mode-both" />

          {/* Bottom Right Buttons */}
          <div className="flex items-center gap-4 mt-8 md:mt-0 md:w-auto animate-in fade-in slide-in-from-right-6 duration-700 delay-700 fill-mode-both">
            <Button className="rounded-full px-8 py-6 bg-slate-900 hover:bg-slate-800 text-white text-sm shadow-xl shadow-slate-900/20">
              Explore Services →
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-sm border-gray-300 hover:bg-gray-50 text-gray-900">
              Our Story
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
}
