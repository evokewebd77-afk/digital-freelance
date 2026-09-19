"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { servicesData, capabilities } from "@/lib/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuredServices = servicesData.slice(0, 3);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section heading reveal
      gsap.from("[data-wwd='heading']", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-wwd='heading']",
          start: "top 88%",
        },
      });
      // Cards reveal animation
      gsap.utils.toArray("[data-wwd='card']").forEach((card, i) => {
        gsap.from(card as HTMLElement, {
          y: 80,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#f9f9f9] border-t border-black/10 relative"
    >
      <Container>
        {/* Section Title */}
        <div
          data-wwd="heading"
          className="mb-12 md:mb-16 text-center flex flex-col items-center"
        >
          <SectionHeading
            title="What We Do"
            subtitle="Capabilities"
            theme="center-black"
          />
        </div>

        {/* Sticky Stacking Cards Container: As you scroll, each card smoothly stacks in the same position */}
        <div className="relative space-y-8 md:space-y-12 pb-8">
          {featuredServices.map((service, index) => (
            <div data-wwd='card'
              key={service.id}
              style={{
                top: `${90 + index * 12}px`,
                zIndex: 10 + index,
              }}
              className="sticky bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-black/10 shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Number + Info */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  {/* Number Indicator: 1 / 3 */}
                  <div className="flex items-baseline gap-1 text-black font-extrabold">
                    <span className="text-4xl sm:text-5xl font-black text-black">
                      {index + 1}
                    </span>
                    <span className="text-2xl sm:text-3xl text-[#f97316] font-bold">
                      /
                    </span>
                    <span className="text-xl sm:text-2xl text-black/40">3</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#575757] leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#f9f9f9] border border-black/10 text-black/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button href={`/services#${service.slug}`} variant="black">
                      View details
                    </Button>
                  </div>
                </div>

                {/* Right Column: Visual Photo Card */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-inner bg-gray-100 group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 scale-[1.05] group-hover:scale-[1.1]"
                    />
                    {/* Floating Service Icon Badges */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/20">
                      <div className="w-6 h-6 rounded-lg bg-[#f97316] flex items-center justify-center">
                        <Image
                          src="https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e476836b7ea62935c4bc92_Service-Icon.svg"
                          alt="Icon"
                          width={14}
                          height={14}
                        />
                      </div>
                      <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center">
                        <Image
                          src="https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e476836b7ea62935c4bc92_Service-Icon.svg"
                          alt="Icon"
                          width={14}
                          height={14}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Infinite Capabilities Marquee */}
      <div className="my-16 py-6 border-y border-dashed border-black/15 bg-white/50 overflow-hidden">
        <div className="animate-marquee flex items-center gap-10">
          {[...capabilities, ...capabilities, ...capabilities, ...capabilities].map(
            (cap, i) => (
              <div key={i} className="flex items-center gap-4 flex-shrink-0">
                <span className="text-lg sm:text-2xl font-black uppercase tracking-tight text-black">
                  {cap}
                </span>
                <Image
                  src="https://cdn.prod.website-files.com/69dcb5467199b638883f4588/6a3b7697581b3065f5d3389a_Simplification.svg"
                  alt="Icon"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain flex-shrink-0"
                />
              </div>
            )
          )}
        </div>
      </div>

      <Container>
        <div className="text-center">
          <Button href="/services" variant="secondary">
            Explore Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
