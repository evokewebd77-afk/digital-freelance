"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import Button from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainNavItems = [
  { num: "01", label: "Home", href: "/" },
  { num: "02", label: "About Us", href: "/about" },
  { num: "03", label: "Services", href: "/services" },
  { num: "04", label: "Pricing", href: "/prices" },
  { num: "05", label: "Contact", href: "/contact-us" },
];

const morePages = [
  { label: "Team", href: "/about#team" },
  { label: "Team details", href: "/about#team" },
  { label: "Blogs", href: "/blogs" },
  { label: "Blog details", href: "/blogs" },
  { label: "Portfolio", href: "/projects" },
  { label: "Portfolio details", href: "/projects" },
  { label: "Services details", href: "/services" },
];

const utilities = [
  { label: "Style Guide", href: "/about" },
  { label: "Licenses", href: "/about" },
  { label: "Changelog", href: "/about" },
  { label: "Instructions", href: "/about" },
  { label: "404 Not Found", href: "/404" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white rounded-xl shadow-2xl p-6 sm:p-10 md:p-14 border border-black/10">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-5 right-5 sm:top-8 sm:right-8 w-11 h-11 bg-black text-white rounded-lg flex items-center justify-center hover:bg-[#f97316] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-4">
          {/* Left Column: Numbered Main Nav */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {mainNavItems.map((item) => (
              <Link
                key={item.num}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between pb-3 border-b border-dashed border-black/20 hover:border-black transition-colors"
              >
                <div className="flex items-center gap-6 sm:gap-8">
                  <span className="text-sm font-semibold tracking-wider text-black/50 group-hover:text-[#f97316] transition-colors">
                    {item.num}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black group-hover:text-[#f97316] transition-colors">
                    {item.label}
                  </span>
                </div>
                <div className="w-8 h-8 rounded flex items-center justify-center text-black/40 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>

          {/* Right Column: More Pages & Utilities */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:space-y-0 pt-2 border-t lg:border-t-0 lg:border-l border-black/10 lg:pl-10">
            <div className="grid grid-cols-2 gap-8">
              {/* More Pages */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-4">
                  More Pages
                </h4>
                <ul className="space-y-2.5 p-0 m-0 list-none">
                  {morePages.map((item, idx) => (
                    <li key={idx} className="p-0 m-0">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-sm text-[#575757] hover:text-[#f97316] transition-colors block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Utilities */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-4">
                  Utilities
                </h4>
                <ul className="space-y-2.5 p-0 m-0 list-none">
                  {utilities.map((item, idx) => (
                    <li key={idx} className="p-0 m-0">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-sm text-[#575757] hover:text-[#f97316] transition-colors block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom CTA in menu */}
            <div className="pt-6 border-t border-black/10 flex items-center justify-between">
              <Button href="/contact-us" variant="secondary" onClick={onClose}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

