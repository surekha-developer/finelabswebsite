

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { 
  Cloud, 
  ShieldCheck, 
  Layers, 
  Share2, 
  Database, 
  Briefcase, 
  MonitorSmartphone, 
  Cpu, 
  Bot, 
  BarChart3 
} from "lucide-react";

const servicesData = [
  {
    name: "Cloud",
    slug: "cloud",
    icon: Cloud,
    image: "/images/services/cloud.jpg",
    desc: "Infrastructure & Strategy",
  },
  {
    name: "Cyber Security",
    slug: "cyber-security",
    icon: ShieldCheck,
    image: "/images/services/cyber-security.jpg",
    desc: "End-to-end Protection",
  },
  {
    name: "Experience Platforms",
    slug: "experience-platforms",
    icon: Layers,
    image: "/images/services/experience-platforms.jpg",
    desc: "ERP, SCM, CRM, HCM",
  },
  {
    name: "Supply Chain",
    slug: "supply-chain",
    icon: Share2,
    image: "/images/services/supply-chain.jpg",
    desc: "AI-driven Optimization",
  },
  {
    name: "SAP",
    slug: "sap",
    icon: Database,
    image: "/images/services/sap.jpg",
    desc: "Implement & Transform",
  },
  {
    name: "Salesforce",
    slug: "salesforce",
    icon: Briefcase,
    image: "/images/services/salesforce.jpg",
    desc: "CRM Excellence",
  },
  {
    name: "Product Engineering",
    slug: "product-engineering",
    icon: MonitorSmartphone,
    image: "/images/services/product-engineering.jpg",
    desc: "Full Lifecycle Delivery",
  },
  {
    name: "IoT & Edge",
    slug: "iot-and-edge",
    icon: Cpu,
    image: "/images/services/iot.jpg",
    desc: "Supply Chain Intelligence",
  },
  {
    name: "AI & Automation",
    slug: "ai-and-automation",
    icon: Bot,
    image: "/images/services/ai.jpg",
    desc: "GenAI, RAG, Agentic AI",
  },
  {
    name: "Data & Analytics",
    slug: "data-and-analytics",
    icon: BarChart3,
    image: "/images/services/data.jpg",
    desc: "Platforms & Intelligence",
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
<Link href="/" className="flex items-center gap-1 group" onClick={() => setMobileOpen(false)}>
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

                      {/* COLUMN 1: Services 1-5 */}
                      <div className="border-r border-white/20 pr-6">
                        <h4 className="text-sm text-gray-400 mb-4 uppercase tracking-wider pl-4">
                          Services
                        </h4>

                        <div className="flex flex-col gap-1">
                          {servicesData.slice(0, 5).map((item, i) => (
                            <Link
                              href={`/services/${item.slug}`}
                              key={i}
                              onMouseEnter={() => setActiveService(item)}
                              onClick={() => setOpen(false)}
                              className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all duration-300 ${
                                activeService.name === item.name
                                  ? "bg-white/10 text-white translate-x-1"
                                  : "text-gray-400 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              <item.icon className={`w-5 h-5 transition-colors ${activeService.name === item.name ? "text-blue-400" : "text-gray-500"}`} />
                              <span className="font-medium">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* COLUMN 2: Services 6-10 */}
                      <div className="border-r border-white/20 px-6">
                        {/* Hidden title for alignment */}
                        <h4 className="text-sm text-transparent mb-4 uppercase tracking-wider select-none">
                          Services Cont.
                        </h4>

                        <div className="flex flex-col gap-1">
                          {servicesData.slice(5, 10).map((item, i) => (
                            <Link
                              href={`/services/${item.slug}`}
                              key={i}
                              onMouseEnter={() => setActiveService(item)}
                              onClick={() => setOpen(false)}
                              className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all duration-300 ${
                                activeService.name === item.name
                                  ? "bg-white/10 text-white translate-x-1"
                                  : "text-gray-400 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              <item.icon className={`w-5 h-5 transition-colors ${activeService.name === item.name ? "text-blue-400" : "text-gray-500"}`} />
                              <span className="font-medium">{item.name}</span>
                            </Link>
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
            <Link href="/careers#contact-form">
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
        <div className="lg:hidden bg-white border-t absolute top-20 left-0 right-0 shadow-lg pb-4">
          <div className="px-6 py-6 flex flex-col gap-4">

            <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>

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
                <div className="mt-3 flex flex-col gap-4 pl-4 border-l border-gray-100 py-2">
                  {servicesData.map((item, i) => (
                    <Link 
                      key={i} 
                      href={`/services/${item.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-600 hover:text-black"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/careers" onClick={() => setMobileOpen(false)}>Careers</Link>

            <Link href="/careers#contact-form" onClick={() => setMobileOpen(false)}>
              <button className="bg-black text-white px-6 py-3 rounded-full mt-4 w-full sm:w-auto">
                Get In Touch
              </button>
            </Link>

          </div>
        </div>
      )}

    </header>
  );
}
