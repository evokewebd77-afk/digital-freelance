"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CCEpL3MRC/?mibextid=wwXIfr",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/digitalfreelancestudio?stkn=YmtuNGVibHl4ZHNk",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/digital-freelance-studio/",
  },
];

const navCol1 = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
  { label: "Contact", href: "/contact-us" },
  { label: "Pricing", href: "/prices" },
];

const navCol2 = [
  { label: "Team", href: "/about#team" },
  { label: "Team details", href: "/about#team" },
  { label: "Blog", href: "/blogs" },
  { label: "Blog details", href: "/blogs" },
  { label: "Service details", href: "/services" },
  { label: "Portfolio details", href: "/projects" },
];

const navCol3 = [
  { label: "Style Guide", href: "/about" },
  { label: "Instructions", href: "/about" },
  { label: "Licenses", href: "/about" },
  { label: "Changelog", href: "/about" },
  { label: "404 Not Found", href: "/404" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Top grid fade in
      gsap.from("[data-ft='top']", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-ft='top']",
          start: "top 92%",
        },
      });

      // Social links stagger
      gsap.from("[data-ft='social']", {
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: "[data-ft='social-row']",
          start: "top 92%",
        },
      });

      // Giant LEVERAGE wordmark — slides up from below
      gsap.from(wordmarkRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: wordmarkRef.current,
          start: "top 98%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#101010] text-white pt-20 sm:pt-28 overflow-hidden relative border-t border-white/10"
    >
      <Container>
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 relative">
          {/* Left Column: Mission Statement & Form */}
          <div data-ft="top" className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white max-w-xl leading-snug">
              Creative digital solutions for modern business growth and lasting
              brand success online.
            </h2>

            {/* Newsletter Input Form */}
            <div className="w-full max-w-md">
              {submitted ? (
                <div className="p-4 bg-[#f97316] text-black font-semibold rounded-lg text-sm">
                  Thank you! Your submission has been received!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    required
                    className="w-full bg-white/10 text-white placeholder-white/50 px-5 py-4 pr-16 rounded-lg text-sm border border-transparent focus:border-[#f97316] outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 top-1.5 bottom-1.5 w-12 bg-white text-black rounded-md flex items-center justify-center hover:bg-[#f97316] transition-colors group"
                  >
                    <div className="icon-swap-box w-5 h-5 icon-swap-group">
                      <span className="icon-swap-one flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-black" />
                      </span>
                      <span className="icon-swap-two flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-black" />
                      </span>
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: 3 Link Lists */}
          <div data-ft="top" className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <ul className="space-y-3 p-0 m-0 list-none">
                {navCol1.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="nav-link-animated text-base text-white hover:text-[#f97316] transition-colors font-medium"
                    >
                      {item.label}
                      <span className="nav-link-border" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3 p-0 m-0 list-none">
                {navCol2.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="nav-link-animated text-base text-white hover:text-[#f97316] transition-colors font-medium"
                    >
                      {item.label}
                      <span className="nav-link-border" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-3 p-0 m-0 list-none">
                {navCol3.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="nav-link-animated text-base text-white hover:text-[#f97316] transition-colors font-medium"
                    >
                      {item.label}
                      <span className="nav-link-border" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Middle: Social Links & Copyright */}
        <div
          data-ft="social-row"
          className="border-t border-dashed border-white/15 py-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                data-ft="social"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-swap-group inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-[#f97316] hover:text-black text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors duration-300"
              >
                <span>{social.name}</span>
                <div className="icon-swap-box w-3.5 h-3.5">
                  <span className="icon-swap-one flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="icon-swap-two flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <p className="text-xs text-[#c5c5c5] m-0">
            © Copyright 2026 | Design & Developed By Flowbrik | Powered By Next.js
          </p>
        </div>

        {/* Bottom Giant Brand Wordmark — fits 100% cleanly without clipping */}
        <div
          ref={wordmarkRef}
          className="w-full text-center py-6 sm:py-8 select-none"
        >
          <span className="block text-[#f97316] font-black uppercase tracking-tight leading-none text-[5vw] sm:text-[5.5vw] md:text-[5.8vw] select-none pointer-events-none whitespace-nowrap">
            Digital Freelance Studio
          </span>
        </div>
      </Container>
    </footer>
  );
}
