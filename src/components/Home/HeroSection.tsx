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
    <section className="w-full bg-background min-h-[83vh] pt-10 pb-0 flex flex-col justify-between overflow-hidden relative">

      {/* TOP: Enterprise Line & Animated Text */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
        <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 animate-in fade-in slide-in-from-top-4 duration-700 dark:text-blue-400">
          ENTERPRISE-GRADE TRANSFORMATION
        </p>
        <p className={`text-base sm:text-lg md:text-2xl font-bold text-foreground animate-in fade-in slide-in-from-top-4 duration-700 transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}>
          {phrases[phraseIndex]}
        </p>
      </div>

      {/* CENTER: The Animated Expanding "WILD" Layout */}
      <div className="w-full max-w-[1600px] mx-auto px-6 flex flex-col items-center justify-center flex-1 my-8 z-10">

        {/* DESKTOP INLINE LAYOUT (Matches reference image) */}
        <div className="hidden md:flex flex-row items-center justify-center w-full relative overflow-x-hidden">
          <h1 className="text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] font-bold tracking-tighter text-foreground leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both">
            DIGITAL
          </h1>

          {/* Expanding Animated Centered Pill Container */}
          <div className="relative flex items-center justify-center">
            <div
              className={`transition-[width,margin,opacity] duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden relative shadow-2xl shadow-blue-500/10 bg-card ring-1 ring-border flex-shrink-0 h-[100px] lg:h-[140px] xl:h-[180px] rounded-[9999px] ${isExpanded ? "w-[30vw] max-w-[600px] mx-6 lg:mx-8 opacity-100" : "w-0 mx-0 opacity-0"
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
              <div className="absolute inset-0 rounded-[9999px] ring-1 ring-inset ring-foreground/10 z-10 pointer-events-none" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] font-bold tracking-tighter text-foreground leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both">
            FUTURES
          </h1>
        </div>

        {/* MOBILE STACKED LAYOUT */}
        <div className="flex md:hidden flex-col items-center justify-center w-full">
          <h1 className="text-[13vw] font-bold tracking-tighter text-foreground leading-none animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both">
            DIGITAL
          </h1>

          <div
            className={`transition-[height,margin,opacity] duration-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)] w-[85vw] rounded-[9999px] overflow-hidden relative shadow-2xl shadow-blue-500/10 bg-card ring-1 ring-border flex-shrink-0 ${isExpanded ? "h-[120px] my-6 opacity-100" : "h-0 my-0 opacity-0"
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
            <div className="absolute inset-0 rounded-[9999px] ring-1 ring-inset ring-foreground/10 z-10 pointer-events-none" />
          </div>

          <h1 className="text-[13vw] font-bold tracking-tighter text-foreground leading-none animate-in fade-in slide-in-from-top-6 duration-1000 fill-mode-both">
            FUTURES
          </h1>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tight text-foreground mt-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both text-center">
          built with <span className="text-blue-600 dark:text-blue-400">precision.</span>
        </h2>
      </div>

      {/* BOTTOM ACTION BAR: Text Left, Line Middle, Buttons Right */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 mb-6 sm:mb-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-0">

          {/* Bottom Left Text */}
          <div className="w-full md:w-[35%] text-center md:text-left">
            <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed max-w-[280px] mx-auto md:mx-0 animate-in fade-in slide-in-from-left-6 duration-700 delay-500 fill-mode-both">
              Purpose-built for enterprise digital transformation. Where AI advantage meets lab-grade agility.
            </p>
          </div>

          {/* Middle Line */}
          <div className="hidden md:block flex-1 mx-8 border-t border-border opacity-60 animate-in fade-in duration-1000 delay-700 fill-mode-both" />

          {/* Bottom Right Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 md:w-auto animate-in fade-in slide-in-from-right-6 duration-700 delay-700 fill-mode-both">
            <Button className="rounded-full px-6 sm:px-8 py-5 sm:py-6 bg-primary text-primary-foreground hover:bg-primary/90 text-sm shadow-xl shadow-primary/20">
              Explore Services →
            </Button>
            <Button variant="outline" className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm border-border hover:bg-muted text-foreground">
              Our Story
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
}
