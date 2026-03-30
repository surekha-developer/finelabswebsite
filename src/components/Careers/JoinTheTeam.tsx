"use client";

import Image from "next/image";

export default function JoinTheTeam() {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* HERO */}
      <div className="relative h-[300px] py-50 lg:h-[300px]">

        {/* RIGHT FULL-BLEED IMAGE */}
        <div className="absolute inset-y-0 right-0 w-[48%] h-[345px]">
          <Image
            src="/images/image11.png"
            alt="Team"
            fill
            priority
            className="object-contain object-center"
          />

          {/* SMOOTH FADE */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/50 to-transparent" />
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

      {/* SECOND SECTION */}
      <div className="relative z-20 w-full lg:overflow-visible overflow-hidden py-32 -mt-24 lg:-mt-32">
        {/* RIGHT BACKGROUND IMAGE touching screen edge */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[25vw] h-[270px] hidden lg:block z-0 pointer-events-none">
          <Image
            src="/images/image99.png"
            alt="Circuit"
            fill
            className="object-cover object-left"
          />
        </div>

        <div className="max-w-[1536px] mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 items-center w-full">
            {/* LEFT IMAGE */}
            <div className="relative h-[200px] lg:h-[350px] w-full">
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

              <Image
                src="/images/image copy 2.png"
                alt="Innovation"
                fill
                className="object-contain object-left"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="lg:px-30 max-w-2xl relative z-20 lg:-translate-y-8 lg:-translate-x-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 mb-7 uppercase">
                — WHY FINE LABS
              </p>

              <h2 className="text-[30px] md:text-[42px] lg:text-[50px] font-bold leading-[1.1]">
                Where{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  innovation
                </span>{" "}
                meets impact.
              </h2>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}