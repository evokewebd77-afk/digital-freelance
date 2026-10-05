"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const homeServices = [
  {
    id: "1",
    title: "Web Development",
    description:
      "Modern, responsive and SEO-friendly websites designed to represent your brand and convert visitors into customers.",
    tags: ["Responsive Websites", "SEO-Friendly", "Conversion Focused"],
    image:
      "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54cbe744e8daf778bfadd5_Service_08.avif",
  },
  {
    id: "2",
    title: "SEO",
    description:
      "Improve your search visibility, rankings and organic traffic with technical SEO, on-page optimization, content strategy and link building.",
    tags: ["Technical SEO", "On-Page SEO", "Link Building"],
    image:
      "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54cbd0b2d9486b37488a64_Service_07.avif",
  },
  {
    id: "3",
    title: "Google Ads & PPC",
    description:
      "Target the right audience with data-driven Google Ads campaigns focused on qualified traffic, leads and measurable conversions.",
    tags: ["Google Ads", "PPC Campaigns", "Measurable Results"],
    image:
      "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a5484ba4c8fb6e8690b1872_Service_06.avif",
  },
  {
    id: "4",
    title: "Social Media Marketing",
    description:
      "Build your brand presence with strategic content, creative campaigns, audience engagement and performance-focused social media management.",
    tags: ["Content Strategy", "Creative Campaigns", "Audience Growth"],
    image:
      "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54cbe744e8daf778bfadd5_Service_08.avif",
  },
  {
    id: "5",
    title: "Content Writing",
    description:
      "Create SEO-friendly website content, blogs, landing pages and marketing copy that communicates your value and supports organic growth.",
    tags: ["Website Copy", "Blog Writing", "Landing Pages"],
    image:
      "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54cbd0b2d9486b37488a64_Service_07.avif",
  },
  {
    id: "6",
    title: "Graphic Designing",
    description:
      "Professional social media creatives, advertising graphics, website visuals and branded marketing materials designed for your business.",
    tags: ["Social Creatives", "Ad Graphics", "Brand Visuals"],
    image:
      "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a5484ba4c8fb6e8690b1872_Service_06.avif",
  },
  {
    id: "7",
    title: "Lead Generation",
    description:
      "Generate qualified enquiries through landing pages, paid campaigns, lead forms, conversion optimization and targeted digital strategies.",
    tags: ["Landing Pages", "Lead Forms", "Conversion Optimization"],
    image:
      "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54cbe744e8daf778bfadd5_Service_08.avif",
  },
  {
    id: "8",
    title: "Digital Marketing Audit",
    description:
      "Get a complete review of your website, SEO, social media, paid advertising and online presence with actionable recommendations.",
    tags: ["Website Review", "SEO Review", "Action Plan"],
    image:
      "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54cbd0b2d9486b37488a64_Service_07.avif",
  },
];

const capabilities = homeServices.map((service) => service.title);

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuredServices = homeServices;

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
      gsap.utils.toArray("[data-wwd='card']").forEach((card) => {
        gsap.from(card as HTMLElement, {
          y: 80,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card as HTMLElement,
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
            title="Services"
            subtitle="Digital Growth Solutions"
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
                    <span className="text-xl sm:text-2xl text-black/40">
                      {featuredServices.length}
                    </span>
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
                    <Button href="/contact-us" variant="black">
                      Enquire About This Service
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
            Explore All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
