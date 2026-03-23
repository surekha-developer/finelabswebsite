"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 mb-6">
            ENTERPRISE-GRADE TRANSFORMATION
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-black">
            Digital <br />
            futures <br />
            built with <br />
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              precision.
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed">
            Purpose-built for enterprise digital transformation. Where AI advantage meets
            lab-grade agility.
          </p>

          <div className="flex items-center gap-4 mt-10">
            <Button className="rounded-full px-6 py-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm">
              Explore Services →
            </Button>

            <Button
              variant="outline"
              className="rounded-full px-6 py-6 text-sm border-gray-300"
            >
              Our Story
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-12">scroll to explore</p>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="flex justify-center lg:justify-end">
          <Card className="w-full max-w-md rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl">
            <CardContent className="p-8">

              <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 mb-6">
                ENTERPRISE IMPACT
              </p>

              <h3 className="text-4xl font-bold text-blue-500 mb-2">Fortune 500</h3>

              <p className="text-gray-600 mb-8 text-sm">
                Clients served across US & India
              </p>

              <div className="grid grid-cols-2 gap-8 text-sm">

                <div className="border-r border-gray-300 pr-6">
                  <p className="text-2xl font-bold text-black">5</p>
                  <p className="text-gray-500">Practice areas</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-black">2</p>
                  <p className="text-gray-500">Global regions</p>
                </div>

                <div className="border-r border-gray-300 pr-6">
                  <p className="text-2xl font-bold text-black">AI</p>
                  <p className="text-gray-500">Native approach</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-black">∞</p>
                  <p className="text-gray-500">Scalability</p>
                </div>

              </div>

            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
