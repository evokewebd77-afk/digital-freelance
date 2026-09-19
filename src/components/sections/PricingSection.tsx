"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const price1Ref = useRef<HTMLSpanElement>(null);
  const price2Ref = useRef<HTMLSpanElement>(null);

  // Animate price change on toggle
  const handleToggle = (yearly: boolean) => {
    if (!price1Ref.current || !price2Ref.current) {
      setIsYearly(yearly);
      return;
    }
    gsap.to([price1Ref.current, price2Ref.current], {
      y: -10,
      opacity: 0,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => {
        setIsYearly(yearly);
        gsap.fromTo(
          [price1Ref.current, price2Ref.current],
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.28, ease: "power2.out" }
        );
      },
    });
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading
      gsap.from("[data-ps='heading']", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-ps='heading']",
          start: "top 88%",
        },
      });

      // Toggle fade in
      gsap.from("[data-ps='toggle']", {
        opacity: 0,
        scale: 0.92,
        duration: 0.7,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: "[data-ps='toggle']",
          start: "top 90%",
        },
      });

      // Cards stagger
      gsap.from("[data-ps='card']", {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-ps='cards']",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const starterFeatures = [
    "Manage 2 Social Platforms",
    "Monthly Performance Reports",
    "Basic SEO Optimization",
    "Email Support",
    "Content Planning",
    "Basic Branding Kit",
    "Audience Growth Strategy",
  ];

  const advancedFeatures = [
    "Manage unlimited social platforms",
    "Daily analytics & strategy insights",
    "Dedicated account manager",
    "Full branding & design suite",
    "Multiple campaign designs monthly",
    "Monthly campaign design updates",
    "Website & UI/UX support",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#f9f9f9] border-t border-black/10 relative"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div data-ps="heading">
            <SectionHeading title="Pricing Plans" subtitle="Packages" theme="black" />
          </div>

          {/* Monthly / Yearly Toggle Switch */}
          <div
            data-ps="toggle"
            className="relative inline-flex items-center p-1 bg-white rounded-full border border-black/10 shadow-sm"
          >
            <button
              onClick={() => handleToggle(false)}
              className={`relative z-10 px-6 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-colors duration-300 ${
                !isYearly ? "text-white" : "text-black/60 hover:text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleToggle(true)}
              className={`relative z-10 px-6 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-colors duration-300 ${
                isYearly ? "text-white" : "text-black/60 hover:text-black"
              }`}
            >
              Yearly
            </button>
            {/* Sliding Pill Indicator */}
            <span
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-black rounded-full transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                isYearly ? "translate-x-[calc(100%+8px)]" : "translate-x-0"
              }`}
            />
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div data-ps="cards" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Starter Plan */}
          <div
            data-ps="card"
            className="bg-white rounded-2xl p-6 sm:p-10 border border-black/10 shadow-sm flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-dashed border-black/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#f97316]/10 flex items-center justify-center">
                    <Image
                      src="https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e86e6f135aef7ee6e9b88a_Pricing_Icon_01.svg"
                      alt="Starter Icon"
                      width={22}
                      height={22}
                    />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black">
                    Starter Plan
                  </h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-black/5 rounded-full text-black/70 uppercase">
                  Basic
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span
                    ref={price1Ref}
                    className="text-4xl sm:text-5xl font-black text-black"
                  >
                    {isYearly ? "$2299" : "$299"}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider text-[#575757]">
                    / {isYearly ? "Year" : "month"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#575757] mt-2">
                  Built for growing brands and startups seeking consistent growth.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-dashed border-black/10">
                <span className="text-xs font-bold uppercase tracking-wider text-black block mb-4">
                  Included in Plan:
                </span>
                {starterFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#575757]">
                    <div className="w-4 h-4 rounded-full bg-[#f97316]/15 flex items-center justify-center text-[#f97316] flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-black/10">
              <Button href="/contact-us" variant="black" className="w-full">
                Choose Plan
              </Button>
            </div>
          </div>

          {/* Card 2: Advanced Plan (Dark) */}
          <div
            data-ps="card"
            className="bg-[#101010] text-white rounded-2xl p-6 sm:p-10 border border-white/10 shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden hover:border-white/20 transition-colors duration-300"
          >
            <div className="absolute top-6 right-6">
              <span className="text-xs font-bold px-3.5 py-1 bg-[#f97316] text-black rounded-full uppercase tracking-wider">
                Popular
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-dashed border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
                    <Image
                      src="https://cdn.prod.website-files.com/69dcb5467199b638883f4588/6a36850e414bee54bdf7e4b7_Card_Icon.svg"
                      alt="Advanced Icon"
                      width={22}
                      height={22}
                      className="brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                    Advanced Plan
                  </h3>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span
                    ref={price2Ref}
                    className="text-4xl sm:text-5xl font-black text-white"
                  >
                    {isYearly ? "$5599" : "$599"}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider text-[#c5c5c5]">
                    / {isYearly ? "Year" : "month"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#c5c5c5] mt-2">
                  Built for growing companies seeking stronger brands and sustainable scaling.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-dashed border-white/15">
                <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">
                  Included in Plan:
                </span>
                {advancedFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#c5c5c5]">
                    <div className="w-4 h-4 rounded-full bg-[#f97316] flex items-center justify-center text-black flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Button href="/contact-us" variant="white" className="w-full">
                Choose Plan
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
