"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function JoinTheTeam() {
  return (
    <section className="relative w-full bg-background overflow-hidden transition-colors duration-300">

      {/* HERO */}
      <div className="relative h-[300px] py-50 lg:h-[300px]">

        {/* RIGHT FULL-BLEED IMAGE */}
        <div className="absolute inset-y-0 right-0 w-[48%] h-[345px] transition-opacity">
          <Image
            src="/images/image11.png"
            alt="Team"
            fill
            priority
            className="object-contain object-center dark:brightness-90"
          />

          {/* SMOOTH FADE */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background via-background/50 to-transparent transition-colors duration-300" />
        </div>

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 uppercase">
              — JOIN THE TEAM
            </p>

            <h1 className="text-[30px] md:text-[42px] lg:text-[50px] font-bold leading-[1.05] text-foreground transition-colors">
              Build the future <br />
              of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                enterprise tech.
              </span>
            </h1>

            <p className="mt-8 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed transition-colors">
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

        <div className="max-w-[1536px] mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 items-center w-full">
            {/* LEFT IMAGE */}
            <div className="relative h-[200px] lg:h-[350px] w-full">
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none transition-colors" />

              <Image
                src="/images/image copy 2.png"
                alt="Innovation"
                fill
                className="object-contain object-left dark:brightness-90 transition-all"
              />
            </div>

            {/* RIGHT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:px-30 max-w-2xl relative z-20 lg:-translate-y-8 lg:-translate-x-12"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-7 uppercase">
                — WHY FINE LABS
              </p>

              <h2 className="text-[30px] md:text-[42px] lg:text-[50px] font-bold leading-[1.1] text-foreground transition-colors">
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