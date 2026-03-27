"use client";

import React from "react";

export default function OpenOpportunities() {
  return (
    <section className="w-full bg-white pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#2d4356] mb-12">
          Careers
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col">
              <label className="text-[#3b5266] font-semibold text-[15px] mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="e.g. John"
                className="w-full px-4 py-2 border border-[#b2c2d1] rounded-[3px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="text-[#3b5266] font-semibold text-[15px] mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="e.g. Doe"
                className="w-full px-4 py-2 border border-[#b2c2d1] rounded-[3px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[#3b5266] font-semibold text-[15px] mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="e.g. johndoe987@gmail.com"
                className="w-full px-4 py-2 border border-[#b2c2d1] rounded-[3px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-[#3b5266] font-semibold text-[15px] mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="e.g. (108) 543121"
                className="w-full px-4 py-2 border border-[#b2c2d1] rounded-[3px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Zip Code */}
            <div className="flex flex-col">
              <label className="text-[#3b5266] font-semibold text-[15px] mb-2">
                Zip Code
              </label>
              <input
                type="text"
                placeholder="e.g. 456123"
                className="w-full px-4 py-2 border border-[#b2c2d1] rounded-[3px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Resume */}
            <div className="flex flex-col">
              <label className="text-[#3b5266] font-semibold text-[15px] mb-2">
                Resume
              </label>
              <div className="flex items-center w-full min-h-[42px]">
                <input
                  type="file"
                  className="w-full text-[15px] text-gray-800 file:mr-2 file:py-1 file:px-3 file:border file:border-gray-400 file:rounded-[3px] file:text-[14px] file:bg-gray-100 hover:file:bg-gray-200 file:cursor-pointer cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label className="text-[#3b5266] font-semibold text-[15px] mb-2">
              Address
            </label>
            <input
              type="text"
              placeholder="e.g: 521654, Mega-Street-3, 615453, Texas"
              className="w-full px-4 py-2 border border-[#b2c2d1] rounded-[3px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-8 py-3 w-full bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] text-white font-bold rounded-[3px] cursor-pointer transition-all duration-300 hover:from-[#1f5ae0] hover:to-[#6d28d9] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}