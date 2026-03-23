import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 px-4 sm:px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* LEFT TEXT */}
          <div>
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

            <p className="mt-6 text-gray-600 text-sm leading-relaxed max-w-sm">
              Enterprise Experience. Lab Agility. AI Advantage. Global IT
              Services & Consulting across Digital Transformation, AI &
              Experience Engineering.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-gray-400 mb-6">
              COMPANY
            </h4>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Careers</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-gray-400 mb-6">
              SERVICES
            </h4>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer">Cloud</li>
              <li className="hover:text-black cursor-pointer">Cyber Security</li>
              <li className="hover:text-black cursor-pointer">
                Experience Platforms
              </li>
              <li className="hover:text-black cursor-pointer">
                Product Engineering
              </li>
              <li className="hover:text-black cursor-pointer">Data & AI</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-gray-400 mb-6">
              CONTACT
            </h4>

            <ul className="space-y-4 text-sm text-gray-600">
              <li>info@finelabsai.com</li>
              <li>finelabsai.com</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-16 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-500">
          <p>© 2025 fine labs. All rights reserved.</p>
          <p className="mt-3 sm:mt-0">www.finelabsai.com</p>
        </div>
      </div>
    </footer>
  );
}