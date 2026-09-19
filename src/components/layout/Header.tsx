"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";
import { Plus } from "lucide-react";
import { gsap } from "gsap";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slide-down entrance on mount with clearProps so sticky works flawlessly
  useEffect(() => {
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "transform,opacity",
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-[100] w-full transition-colors duration-300 py-3.5 sm:py-4 border-b border-black/10 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-[#f9f9f9]/95 backdrop-blur-sm"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Left Nav Group */}
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              {/* Menu Plus/Hamburger Button */}
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                className="group w-10 h-10 rounded-[8px] bg-black text-white flex items-center justify-center hover:bg-[#f97316] transition-colors duration-300 shadow-sm flex-shrink-0 cursor-pointer"
              >
                <Plus className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
              </button>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center gap-5 lg:gap-7">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-link-animated text-[14px] font-semibold text-black/85 hover:text-[#f97316] transition-colors"
                  >
                    {link.label}
                    <span className="nav-link-border" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Center: DigiWorks Brand Logo */}
            <Link href="/" className="flex items-center justify-center py-1 group">
              <Image
                src="/Logo Img (1).png"
                alt="DigiWorks"
                width={200}
                height={200}
                className="h-11 sm:h-14 w-auto object-contain"
              />
            </Link>

            {/* Right: CTA Button */}
            <div className="flex items-center">
              <Button href="/contact-us" variant="secondary">
                Get Started
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile / Fullscreen Drawer Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
