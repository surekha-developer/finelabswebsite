"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function JoinTheTeam() {
  return (
    <section className="relative w-full bg-background overflow-hidden transition-colors duration-300">

      {/* HERO */}
      <div className="relative flex flex-col lg:block min-h-min lg:h-[350px] pt-12 pb-16 lg:py-0">

        {/* RIGHT FULL-BLEED IMAGE */}
        <div className="relative lg:absolute inset-y-0 right-0 w-full lg:w-[50%] h-[250px] sm:h-[300px] lg:h-[345px] transition-opacity order-first lg:order-none mb-8 lg:mb-0">
          <Image
            src="/images/image11.png"
            alt="Team"
            fill
            priority
            className="object-contain lg:object-cover object-center lg:object-right transition-all block dark:hidden"
          />
          <Image
            src="/images/careers-infographic-dark.png"
            alt="Team Dark"
            fill
            priority
            className="object-contain lg:object-cover object-center lg:object-right transition-all hidden dark:block"
          />

          {/* SMOOTH FADE */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/90 to-transparent transition-colors duration-300" />
        </div>

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center lg:pb-0">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 uppercase">
              — JOIN THE TEAM
            </p>

            <h1 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[50px] font-bold leading-[1.1] text-foreground transition-colors">
              Build the future <br className="hidden sm:block" />
              of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                enterprise tech.
              </span>
            </h1>

            <p className="mt-6 lg:mt-8 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed transition-colors">
              We're looking for curious, driven people who want to solve complex problems at enterprise scale.
            </p>
          </motion.div>

        </div>

      </div>

      {/* SECOND SECTION */}
      <div className="relative z-20 w-full lg:overflow-visible overflow-hidden py-32 -mt-24 lg:-mt-32">
        {/* RIGHT BACKGROUND IMAGE touching screen edge */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[25vw] h-[270px] hidden lg:block z-0 pointer-events-none transition-opacity">
          <Image
            src="/images/image99.png"
            alt="Circuit"
            fill
            className="object-cover object-left dark:invert dark:brightness-150 opacity-40 dark:opacity-20"
          />
        </div>

        <div className="max-w-[1536px] mx-auto w-full relative z-10 px-6 lg:px-0">
          <div className="grid lg:grid-cols-2 items-center w-full gap-8 lg:gap-0">
            {/* LEFT IMAGE */}
            <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] w-full order-last lg:order-first">
              <div className="hidden lg:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none transition-colors" />

              <Image
                src="/images/image copy 2.png"
                alt="Innovation"
                fill
                className="object-contain object-center lg:object-left transition-all block dark:hidden"
              />
              <Image
                src="/images/careers-hero-dark.png"
                alt="Innovation Dark"
                fill
                className="object-contain object-center lg:object-left transition-all hidden dark:block"
              />
            </div>

            {/* RIGHT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:px-30 max-w-2xl relative z-20 lg:-translate-y-8 lg:-translate-x-12 text-center lg:text-left mx-auto lg:mx-0"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-5 lg:mb-7 uppercase">
                — WHY FINE LABS
              </p>

              <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[50px] font-bold leading-[1.1] text-foreground transition-colors">
                Where{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  innovation
                </span>{" "}
                meets impact.
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}