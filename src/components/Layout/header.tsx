

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const servicesData = [
  {
    name: "Digital Solutions",
    slug: "digital-solutions",
    image: "/images/services/digital.jpg",
    desc: "Modern web & app development",
    subServices: [
      "Web Development",
      "Mobile Apps",
      "UI/UX Design",
      "E-commerce",
    ],
  },
  {
    name: "Cloud",
    slug: "cloud",
    image: "/images/services/cloud.jpg",
    desc: "Scalable cloud infrastructure",
    subServices: [
      "AWS Setup",
      "Cloud Migration",
      "DevOps",
      "Server Management",
    ],
  },
  {
    name: "Security",
    slug: "security",
    image: "/images/services/security.jpg",
    desc: "Protect your systems",
    subServices: [
      "Cyber Security",
      "Penetration Testing",
      "Data Protection",
    ],
  },
  {
    name: "Communication",
    slug: "communication",
    image: "/images/services/communication.jpg",
    desc: "Better connectivity tools",
    subServices: [
      "Bulk SMS",
      "Email Services",
      "Chat Solutions",
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeService, setActiveService] = useState(servicesData[0]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">



{/* LOGO + TEXT */}
{/* <Link href="/" className="flex items-center gap-0">
  <Image
    src="/images/finelabslogolight-removebg-preview.png"
    alt="Finelabs"
    width={200}
    height={42}
    className="object-contain"
  />

  <span className="text-lg font-semibold tracking-tight">
    Finelabs
  </span>
</Link> */}

{/* LOGO + TEXT */}
<Link href="/" className="flex items-center gap-1 group">
  <Image
    src="/images/finelabslogolight-removebg.png"
    alt="Finelabs"
    width={60} // Reduced width to show only the icon part of the image
    height={50}
    className="object-contain"
  />

  <span className="text-2xl font-bold tracking-tighter flex items-center">
  {/* The dark "fine" text */}
  <span className="text-[#121926]">fine</span>
  
  {/* The gradient "labs" text */}
  <span className="bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] bg-clip-text text-transparent">
    labs
  </span>
</span>
</Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">

            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/about" className="hover:text-primary">About</Link>

            {/* SERVICES MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-primary">
                Services
                <FaChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
              </button>

              {/* FULL WIDTH MENU */}
              <div
                className={`fixed left-0 top-[80px] w-full z-50 transition-all duration-300 ${
                  open
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                }`}
              >
                <div className="w-full bg-black text-white">
                  <div className="max-w-7xl mx-auto px-6 py-10">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                      {/* LEFT */}
                      <div className="border-r border-white/20 pr-6">
                        <h4 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
                          Services
                        </h4>

                        <div className="flex flex-col gap-2">
                          {servicesData.map((item, i) => (
                            <div
                              key={i}
                              onMouseEnter={() => setActiveService(item)}
                              className={`px-4 py-3 rounded-md cursor-pointer transition ${
                                activeService.name === item.name
                                  ? "bg-white/10 text-white"
                                  : "text-gray-400 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              {item.name}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* MIDDLE */}
                      <div className="border-r border-white/20 pr-6">
                        <h4 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
                          Solutions
                        </h4>

                        <div className="flex flex-col gap-2">
                          {activeService.subServices.map((sub, i) => (
                            <div
                              key={i}
                              className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-md cursor-pointer transition"
                            >
                              {sub}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div>
                        <h4 className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
                          Featured
                        </h4>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                          <Image
                            src={activeService.image}
                            alt={activeService.name}
                            width={400}
                            height={220}
                            className="rounded-lg mb-4 object-cover w-full h-48"
                          />

                          <h4 className="text-lg font-semibold">
                            {activeService.name}
                          </h4>

                          <p className="text-sm text-gray-400 mt-2">
                            {activeService.desc}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/careers" className="hover:text-primary">
              Careers
            </Link>

          </div>

          {/* RIGHT BUTTON DESKTOP */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="bg-black text-white px-6 py-2 rounded-full">
                Get In Touch
              </button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-6 py-6 flex flex-col gap-4">

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>

            {/* MOBILE SERVICES */}
            <div>
              <button
                onClick={() => setMobileServices(!mobileServices)}
                className="flex items-center justify-between w-full"
              >
                Services
                <FaChevronDown
                  className={`transition ${mobileServices ? "rotate-180" : ""}`}
                />
              </button>

              {mobileServices && (
                <div className="mt-3 flex flex-col gap-2 pl-4">
                  {servicesData.map((item, i) => (
                    <Link key={i} href={`/services/${item.slug}`}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/careers">Careers</Link>

            <Link href="/contact">
              <button className="bg-black text-white px-6 py-3 rounded-full mt-4">
                Get In Touch
              </button>
            </Link>

          </div>
        </div>
      )}

    </header>
  );
}
