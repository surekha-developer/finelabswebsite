"use client";

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full bg-background py-24 sm:py-32 px-4 sm:px-6 text-center transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* SMALL LABEL */}
        <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400 mb-6 uppercase">
          READY TO TRANSFORM
        </p>

        {/* HEADING */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-foreground transition-colors">
          Let's build your <br />
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            digital future.
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-8 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Partner with FineLabs to turn disruption into opportunity and ambition
          into resilience.
        </p>

        {/* BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button className="rounded-full px-8 py-7 text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
            Start a conversation →
          </Button>

          <Button
            variant="outline"
            className="rounded-full px-8 py-7 text-base font-semibold border-border hover:bg-muted text-foreground transition-all shadow-sm active:scale-95"
          >
            View services
          </Button>
        </div>
      </div>
    </section>
  );
}