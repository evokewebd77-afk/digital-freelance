"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { Star, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const trustedAvatars = [
    "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69df8b3fd1541aadb6e49271_Trusted-01.avif",
    "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69df8b3f55cc8bdf1977a97b_Trusted-02.avif",
    "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69df8b3f26ef012247434c8b_Trusted-03.avif",
    "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69df8b3faf5c49f620101d1b_Trusted-04.avif",
  ];

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

  const categories = [
    "SEO Optimization",
    "Content Marketing",
    "Brand Strategy",
    "Web Development",
    "Lead Generation",
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Main Entrance Timeline
      const tl = gsap.timeline({ delay: 0.1 });

      // 1. Trusted pill + Top Social Links + "DIGI" headline on Left
      tl.from("[data-hero='trusted']", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          "[data-hero='social']",
          { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          "[data-hero='title-one']",
          { y: 50, opacity: 0, duration: 0.9, ease: "power4.out" },
          "-=0.4"
        )

        // 2. Sequential Image Stack in the Centre:
        // First Image lands on the base
        .fromTo(
          "[data-hero='card-1']",
          { y: 80, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        )
        // Second Image lands on top of the first image
        .fromTo(
          "[data-hero='card-2']",
          { y: 90, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.35"
        )
        // Third Image lands on top of the second image
        .fromTo(
          "[data-hero='card-3']",
          { y: 90, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.35"
        )

        // 3. Category badges pop in
        .from(
          "[data-hero='badge']",
          {
            y: 20,
            opacity: 0,
            scale: 0.85,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.4)",
          },
          "-=0.4"
        )

        // 4. Bottom bar: button + subtext + "WORKS" headline on Right
        .from(
          "[data-hero='bottom']",
          { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          "[data-hero='title-two']",
          { y: 50, opacity: 0, duration: 0.9, ease: "power4.out" },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-6 sm:pt-10 pb-14 sm:pb-20 overflow-hidden bg-[#f9f9f9] relative"
    >
      <Container>
        {/* Hero Top Bar */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-4 sm:mb-6">
          {/* Trusted by Clients */}
          <div data-hero="trusted" className="flex items-center gap-3 sm:gap-5">
            <div className="flex -space-x-2.5 sm:-space-x-3">
              {trustedAvatars.map((url, index) => (
                <div
                  key={index}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                >
                  <Image
                    src={url}
                    alt={`Client ${index + 1}`}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#f97316] text-[#f97316]"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#575757] mt-0.5">
                Delivered 200+ projects
              </span>
            </div>
          </div>

          {/* Social Links Column — icon swap on hover */}
          <div
            data-hero="social"
            className="flex flex-wrap md:flex-col gap-1 md:gap-0 md:w-52"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-swap-group group flex items-center justify-between py-1.5 px-2.5 border-y border-black/10 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black/80 hover:text-[#f97316] hover:border-[#f97316] transition-colors"
              >
                <span>{social.name}</span>
                <div className="icon-swap-box w-4 h-4">
                  <span className="icon-swap-one">
                    <ArrowUpRight className="w-3.5 h-3.5 text-black/50 group-hover:text-[#f97316]" />
                  </span>
                  <span className="icon-swap-two">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#f97316]" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Big Headline Part 1: "DIGITAL FREELANCE" on Left Side */}
        <div data-hero="title-one" className="w-full text-left my-2 sm:my-3">
          <h1 className="text-[8.5vw] sm:text-[7.5vw] lg:text-[76px] xl:text-[92px] font-black uppercase tracking-tight text-black leading-none m-0 select-none">
            Digital Freelance
          </h1>
        </div>

        {/* Hero Middle Showcase: Center Cards & Category Badges with balanced spacing */}
        <div className="relative my-6 sm:my-8 md:my-10 py-2 flex flex-col md:flex-row items-center justify-center">
          {/* Subtle Dashed Center Guide Lines */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-b border-dashed border-black/10 pointer-events-none hidden md:block"></div>
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-r border-dashed border-black/10 pointer-events-none hidden md:block"></div>

          {/* Overlapping Cards Stack (Centre) */}
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[390px] aspect-[4/3] flex items-center justify-center">
            {/* Card 1: Left Tilt (First layer on bottom) */}
            <div
              data-hero="card-1"
              className="absolute inset-0 z-10"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl transform -rotate-6 transition-transform duration-500 hover:-rotate-8">
                <Image
                  src="https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69f9cb0c65f247af45301af1_f353dc578454c0f415094efad5118477_Hero-Banner-3.avif"
                  alt="Digital Marketing 1"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 2: Straight (Second layer on top of first) */}
            <div
              data-hero="card-2"
              className="absolute inset-0 z-20"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.03]">
                <Image
                  src="https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69f9cb0c894c44ad93a95195_b264246ec3cc800e66a89a07caca7498_Hero-Banner-2.avif"
                  alt="Digital Marketing 2"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 3: Right Tilt (Third layer on top of second) */}
            <div
              data-hero="card-3"
              className="absolute inset-0 z-30"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg transform rotate-6 transition-transform duration-500 hover:rotate-8">
                <Image
                  src="https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e0a1d07c3d770c53c48618_4a7a78f54aaf7d75f8e36ceb0c44bc5b_Hero-Banner-1.avif"
                  alt="Digital Marketing 3"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Floating Category Badges (Right of Centre Images) */}
          <div className="mt-5 md:mt-0 md:absolute md:left-[calc(50%+215px)] md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col gap-2.5 sm:gap-3 flex-wrap justify-center z-30">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                data-hero="badge"
                className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-black/10 shadow-sm whitespace-nowrap hover:border-[#f97316]/40 transition-colors"
              >
                <div className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e0a9ba22f1707c85f0bf1f_Simplification.svg"
                    alt="Icon"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-black">
                  {cat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Bottom Bar: Button + Subtext on Left, "STUDIO" on Right */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 sm:gap-6">
          <div
            data-hero="bottom"
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 max-w-lg mb-2 sm:mb-4"
          >
            <Button href="/services" variant="black">
              Explore Services
            </Button>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-black leading-relaxed m-0">
              Turn data into results. We combine insights to grow your brand.
            </p>
          </div>

          {/* Big Headline Part 2: "STUDIO" on Right Side */}
          <div data-hero="title-two" className="text-right w-full md:w-auto">
            <h2 className="text-[10vw] sm:text-[8.5vw] lg:text-[90px] xl:text-[110px] font-black uppercase tracking-tight text-black leading-none m-0 select-none">
              Studio
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
