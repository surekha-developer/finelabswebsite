"use client";

import { Button } from "@/components/ui/button";

export default function AboutCTASection() {
  return (
    <section className="w-full bg-white px-6  pt-0 py-24 text-center">
      <div className="max-w-4xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
          Ready to partner <br />
          with fine labs?
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-600 max-w-xl mx-auto leading-relaxed">
          We'd love to understand your challenges and explore how we can help
          you transform.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Button className="rounded-full px-6 py-6 text-sm bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90">
            Get in touch →
          </Button>

          <Button
            variant="outline"
            className="rounded-full px-6 py-6 text-sm border-gray-300"
          >
            Our services
          </Button>

        </div>
      </div>
    </section>
  );
}