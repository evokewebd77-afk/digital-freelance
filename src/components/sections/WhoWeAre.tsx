"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { Sparkles, Code2, TrendingUp, Layers, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);

  const pillars = [
    {
      num: "01",
      icon: Code2,
      title: "Full-Stack Web Engineering",
      desc: "Blazing-fast, responsive web apps and bespoke landing pages built on modern Next.js & React frameworks.",
    },
    {
      num: "02",
      icon: TrendingUp,
      title: "Strategic Growth & Lead Gen",
      desc: "Performance marketing, conversion-rate optimization, and targeted campaigns that yield real business revenue.",
    },
    {
      num: "03",
      icon: Layers,
      title: "Creative Direction & Branding",
      desc: "Distinctive digital identities, seamless UX/UI, and compelling storytelling tailored for ambitious brands.",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading & Banner Fade-ins
      gsap.from("[data-wwa='heading']", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-wwa='heading']",
          start: "top 88%",
        },
      });

      gsap.from("[data-wwa='banner']", {
        y: 50,
        opacity: 0,
        scale: 0.96,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-wwa='banner']",
          start: "top 88%",
        },
      });

      // Content narrative fade
      gsap.from("[data-wwa='content']", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-wwa='content']",
          start: "top 88%",
        },
      });

      // Feature pillars stagger
      gsap.from("[data-wwa='pillar']", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-wwa='pillars-grid']",
          start: "top 88%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#101010] text-white border-t border-white/10 relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#f97316]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <Container>
        {/* Top Split: Left Visual & Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left Column: Title & Showcase Banner */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div data-wwa="heading">
              <SectionHeading title="Who We Are" theme="white" />
            </div>

            <div
              data-wwa="banner"
              className="relative w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 aspect-[4/3] shadow-2xl group"
            >
              <Image
                src="https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e323747fd94b5db66abbb9_5bcf8b6523168162b7893d8148c3e581_Clock.avif"
                alt="Digital Studio Clock"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Floating Studio Status Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse"></span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">
                    Digital Freelance Studio
                  </span>
                </div>
                <span className="text-[11px] font-medium text-white/60">
                  Global Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Text & Primary Pitch */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pt-4">
            <div data-wwa="content" className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#f97316]">
                <Sparkles className="w-3.5 h-3.5 text-[#f97316]" />
                <span>Crafting Digital Excellence</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                _Empowering ambitious brands with cutting-edge design, code & growth.
              </h3>

              <p className="text-base sm:text-lg text-[#c5c5c5] leading-relaxed max-w-2xl">
                We operate as an agile digital freelance studio, blending bespoke web
                development, strategic lead generation, and high-impact creative
                direction to turn your vision into market-defining digital results.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/about" variant="white">
                  Learn More
                </Button>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-[#f97316] transition-colors py-2 px-3"
                >
                  <span>Our Capabilities</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Studio Pillars Cards Grid */}
        <div
          data-wwa="pillars-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-dashed border-white/15"
        >
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.num}
                data-wwa="pillar"
                className="group relative p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#f97316]/40 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#f97316] tracking-tight">
                    {pillar.num}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-black transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-[#f97316] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
