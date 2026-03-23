"use client";

export default function AboutHero() {
  return (
    <section className="w-full bg-white px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">

        <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 mb-2">
          — OUR STORY
        </p>

       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
          Built for enterprise.
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Designed for outcomes.
          </span>
        </h1>

        <div className="border-t border-[#e9e9e9] mt-24" />
      </div>
    </section>
  );
}