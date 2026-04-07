"use client";

import React from "react";

export default function OpenOpportunities() {
  return (
    <section id="contact-form" className="w-full relative pt-24 pb-32 bg-background overflow-hidden transition-colors duration-300">
      {/* GRADIENT BACKGROUND */}
      <div
        className="absolute top-0 left-0 w-full h-[800px] z-0 pointer-events-none"
        style={{
          background: 'var(--section-gradient)'
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl sm:text-6xl font-bold text-center text-foreground mb-12 drop-shadow-lg transition-colors">
          Contact Us
        </h2>

        <form className="space-y-8 bg-card/90 backdrop-blur-2xl p-8 sm:p-14 rounded-[2.5rem] shadow-2xl border border-border shadow-primary/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Name */}
            <div className="flex flex-col">
              <label className="text-muted-foreground font-semibold text-sm mb-3 uppercase tracking-wider">
                First Name
              </label>
              <input
                type="text"
                placeholder="e.g. John"
                className="w-full px-5 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="text-muted-foreground font-semibold text-sm mb-3 uppercase tracking-wider">
                Last Name
              </label>
              <input
                type="text"
                placeholder="e.g. Doe"
                className="w-full px-5 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-muted-foreground font-semibold text-sm mb-3 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                placeholder="e.g. johndoe987@gmail.com"
                className="w-full px-5 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-muted-foreground font-semibold text-sm mb-3 uppercase tracking-wider">
                Phone
              </label>
              <input
                type="tel"
                placeholder="e.g. (108) 543121"
                className="w-full px-5 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Zip Code */}
            <div className="flex flex-col">
              <label className="text-muted-foreground font-semibold text-sm mb-3 uppercase tracking-wider">
                Zip Code
              </label>
              <input
                type="text"
                placeholder="e.g. 456123"
                className="w-full px-5 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Resume */}
            <div className="flex flex-col">
              <label className="text-muted-foreground font-semibold text-sm mb-3 uppercase tracking-wider">
                Resume
              </label>
              <div className="flex items-center w-full">
                <input
                  type="file"
                  className="w-full text-sm text-foreground file:mr-4 file:py-2 file:px-4 file:border file:border-border file:rounded-xl file:text-xs file:font-bold file:bg-secondary file:text-foreground hover:file:bg-muted file:cursor-pointer cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label className="text-muted-foreground font-semibold text-sm mb-3 uppercase tracking-wider">
              Address
            </label>
            <input
              type="text"
              placeholder="e.g: 521654, Mega-Street-3, 615453, Texas"
              className="w-full px-5 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="px-8 py-5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl cursor-pointer transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-background"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}