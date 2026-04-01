"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function WhoWeAre() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let position = 0;
    let animationFrame: number;

    const smoothScroll = () => {
      position += 0.4;
      el.scrollLeft = position;

      if (position >= el.scrollWidth - el.clientWidth) {
        position = 0;
      }

      animationFrame = requestAnimationFrame(smoothScroll);
    };

    animationFrame = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="w-full bg-white">
      {/* ================= SCROLLING BULLET MENU ================= */}
      <div className="border-y border-gray-200 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-10 whitespace-nowrap px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-500 font-medium overflow-x-hidden"
        >
          <span>PLATFORMS</span>
          <span className="text-blue-500">•</span>
          <span>PRODUCT ENGINEERING</span>
          <span className="text-blue-500">•</span>
          <span>DATA & AI</span>
          <span className="text-blue-500">•</span>
          <span>SAP SOLUTIONS</span>
          <span className="text-blue-500">•</span>
          <span>SALESFORCE</span>
          <span className="text-blue-500">•</span>
          <span>IOT & SUPPLY CHAIN</span>
          <span className="text-blue-500">•</span>
          <span>HYPER-AUTOMATION</span>
          <span className="text-blue-500">•</span>
          <span>CLOUD INFRASTRUCTURE</span>

          {/* Duplicate for smooth infinite scroll */}
          <span>PLATFORMS</span>
          <span className="text-blue-500">•</span>
          <span>PRODUCT ENGINEERING</span>
          <span className="text-blue-500">•</span>
          <span>DATA & AI</span>
          <span className="text-blue-500">•</span>
          <span>SAP SOLUTIONS</span>
          <span className="text-blue-500">•</span>
          <span>SALESFORCE</span>
          <span className="text-blue-500">•</span>
          <span>IOT & SUPPLY CHAIN</span>
          <span className="text-blue-500">•</span>
          <span>HYPER-AUTOMATION</span>
          <span className="text-blue-500">•</span>
          <span>CLOUD INFRASTRUCTURE</span>
        </div>
      </div>

      {/* ================= WHO WE ARE SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="text-left">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-blue-600 mb-4 sm:mb-6">
            WHO WE ARE
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight text-black">
            Enterprise experience. <br />
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Lab agility.
            </span>
            {/* <br /> */}
            AI advantage.
          </h2>

          <p className="mt-6 sm:mt-8 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            FineLabs is a digital transformation specialist team, purpose-built
            to deliver high-value outcomes across the full enterprise technology
            stack.
          </p>

          <div className="mt-8 sm:mt-10 flex justify-start">
            <Button
              variant="outline"
              className="rounded-full px-5 sm:px-6 py-5 sm:py-6 border-gray-300 text-sm sm:text-base"
            >
              Learn more →
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE ANIMATION CIRCLE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] bg-gray-100 rounded-3xl flex items-center justify-center">

            {/* Center Circle */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500" />

            {/* Rings */}
            <div className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border border-blue-200" />
            <div className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border border-blue-200" />
            <div className="absolute w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border border-blue-200" />

            {/* Floating Dots */}
            <div className="absolute top-10 left-12 sm:top-14 sm:left-16 w-2 h-2 bg-blue-500 rounded-full" />
            <div className="absolute bottom-12 right-12 sm:bottom-16 sm:right-16 w-2 h-2 bg-blue-400 rounded-full" />
            <div className="absolute top-20 right-10 sm:top-28 sm:right-14 w-2 h-2 bg-indigo-500 rounded-full" />

          </div>
        </div>
      </div>
    </section>
  );
}