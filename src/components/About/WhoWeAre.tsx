"use client";

import { Badge } from "@/components/ui/badge";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white px-6 py-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 mb-2">
            — WHO WE ARE
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] mb-10">
  Purpose-built for <br /> enterprise
 
  digital  <br /> transformation
</h2>

          <div className="flex flex-wrap gap-4">
            <Badge
              variant="outline"
              className="rounded-full px-4 py-2 text-sm text-gray-600"
            >
              ● Fortune 500 Clients
            </Badge>

            <Badge
              variant="outline"
              className="rounded-full px-4 py-2 text-sm text-gray-600"
            >
              ● US & India
            </Badge>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            FineLabs is a <span className="font-semibold text-black">
            digital transformation specialist team</span>, purpose-built to deliver
            high-value outcomes across Cloud, Cybersecurity, Experience Platforms
            & Enterprise SaaS, Product Engineering, IoT & Supply Chain,
            Hyper-Automation, and Data & AI.
          </p>

          <p>
            <span className="font-semibold text-black">
              Experience Engineering and AI
            </span> are not just capabilities we offer — they are the lens
            through which we approach every engagement. This focus empowers our
            clients to innovate boldly, scale with confidence, and remain secure
            in a digital landscape that never stands still.
          </p>

          <p>
            Agile by nature and deeply consultative by design, we partner with
            enterprises to navigate complex business and technology challenges —
            <span className="font-semibold text-black">
              {" "}turning disruption into opportunity
            </span>{" "}
            and ambition into resilience.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 border-t border-[#e9e9e9]" />
    </section>
  );
}