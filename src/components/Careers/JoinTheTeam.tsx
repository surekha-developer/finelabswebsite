"use client";

import Image from "next/image";

export default function JoinTheTeam() {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* HERO */}
      <div className="relative h-[300px] py-50 lg:h-[300px]">

        {/* RIGHT FULL-BLEED IMAGE */}
        <div className="absolute inset-y-0 right-0 w-[65%]">
          <Image
            src="/images/image.png"
            alt="Team"
            fill
            priority
            className="object-cover object-center"
          />

          {/* SMOOTH FADE */}
          <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">

          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 mb-6 uppercase">
              — JOIN THE TEAM
            </p>

            <h1 className="text-[30px] md:text-[42px] lg:text-[50px] font-bold leading-[1.05]">
              Build the future <br />
              of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                enterprise tech.
              </span>
            </h1>

            <p className="mt-6 text-gray-600">
              We're looking for curious, driven people who want to solve complex problems at enterprise scale.
            </p>
          </div>

        </div>

      </div>

      {/* SECOND SECTION (UNCHANGED BUT SLIGHTLY POLISHED) */}
      <div className="relative z-20 max-w-10xl mx-auto  py-32 -mt-24 lg:-mt-32 grid lg:grid-cols-2 items-center">

        {/* LEFT IMAGE */}
        <div className="relative h-[200px] lg:h-[350px] w-full">
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />
          
          <Image
            src="/images/image copy.png"
            alt="Innovation"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="lg:px-15 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 mb-7 uppercase">
            — WHY FINE LABS
          </p>

          <h2 className="text-[30px] md:text-[42px] lg:text-[50px] font-bold leading-[1.1]">
            Where innovation{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              meets impact.
            </span>{" "}    
          </h2>
        </div>

      </div>

    </section>
  );
}