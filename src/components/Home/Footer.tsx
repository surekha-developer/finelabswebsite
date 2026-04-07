import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary/30 border-t border-border px-4 sm:px-6 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LEFT TEXT */}
          <div>
            <Link href="/" className="flex items-center gap-1 group">
              {/* Logo for Light Mode */}
              <Image
                src="/images/finelabslogolight-removebg.png"
                alt="Finelabs"
                width={60}
                height={50}
                className="object-contain block dark:hidden transition-all duration-300"
              />

              {/* Logo for Dark Mode */}
              <Image
                src="/images/dark-logo-final.png"
                alt="Finelabs"
                width={60}
                height={50}
                className="object-contain hidden dark:block transition-all duration-300"
              />

              <span className="text-2xl font-bold tracking-tighter flex items-center transition-colors">
                {/* The adapting "fine" text */}
                <span className="text-foreground">fine</span>

                {/* The gradient "labs" text */}
                <span className="bg-gradient-to-r from-[#2b6eff] to-[#8c35ff] bg-clip-text text-transparent">
                  labs
                </span>
              </span>
            </Link>

            <p className="mt-6 text-muted-foreground text-sm leading-relaxed max-w-sm">
              Enterprise Experience. Lab Agility. AI Advantage. Global IT
              Services & Consulting across Digital Transformation, AI &
              Experience Engineering.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-muted-foreground mb-6 uppercase">
              COMPANY
            </h4>

            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors block">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors block">About</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors block">Careers</Link>
              </li>
              <li>
                <Link href="/careers#contact-form" className="hover:text-foreground transition-colors block">Contact</Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-muted-foreground mb-6 uppercase">
              SERVICES
            </h4>

            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/services/cloud" className="hover:text-foreground transition-colors block">Cloud</Link>
              </li>
              <li>
                <Link href="/services/cyber-security" className="hover:text-foreground transition-colors block">Cyber Security</Link>
              </li>
              <li>
                <Link href="/services/experience-platforms" className="hover:text-foreground transition-colors block">Experience Platforms</Link>
              </li>
              <li>
                <Link href="/services/product-engineering" className="hover:text-foreground transition-colors block">Product Engineering</Link>
              </li>
              <li>
                <Link href="/services/data-and-analytics" className="hover:text-foreground transition-colors block">Data & AI</Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-muted-foreground mb-6 uppercase">
              CONTACT
            </h4>

            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@finelabsai.com" className="hover:text-foreground transition-colors block">info@finelabsai.com</a>
              </li>
              <li>
                <a href="https://finelabsai.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors block">finelabsai.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-16 border-t border-border pt-8 flex flex-col sm:flex-row justify-between text-sm text-muted-foreground">
          <p>© 2025 fine labs. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}