"use client";

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* SMALL LABEL */}
        <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 mb-6">
          READY TO TRANSFORM
        </p>

        {/* HEADING */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Let's build your <br />
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            digital future.
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Partner with FineLabs to turn disruption into opportunity and ambition
          into resilience.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="rounded-full px-6 py-6 text-sm bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90">
            Start a conversation →
          </Button>

          <Button
            variant="outline"
            className="rounded-full px-6 py-6 text-sm border-gray-300"
          >
            View services
          </Button>
        </div>
      </div>
    </section>
  );
}