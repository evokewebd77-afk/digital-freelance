"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioSolutions = [
  {
    id: "1",
    title: "Business Website",
    summary:
      "A modern, responsive and SEO-friendly website designed to represent your brand, improve the user experience and convert more visitors into enquiries.",
    timeline: "Strategy, design & development",
    satisfaction: "New and growing businesses",
    author: {
      name: "Web Development",
      role: "Responsive, mobile-first experiences",
      avatar:
        "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54cbe744e8daf778bfadd5_Service_08.avif",
    },
    banner:
      "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54c0ce0da076af38bfb544_Project_Banner_01.avif",
    logo:
      "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e476836b7ea62935c4bc92_Service-Icon.svg",
  },
  {
    id: "2",
    title: "SEO & Content Growth",
    summary:
      "Technical SEO, on-page optimization, useful content and link building designed to improve search visibility and attract relevant organic traffic.",
    timeline: "Search strategy & content",
    satisfaction: "Long-term organic growth",
    author: {
      name: "Search Growth",
      role: "SEO and content strategy",
      avatar:
        "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54cbd0b2d9486b37488a64_Service_07.avif",
    },
    banner:
      "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54c0e3e6d9004d4dc464ac_Project_Banner_02.avif",
    logo:
      "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e476836b7ea62935c4bc92_Service-Icon.svg",
  },
  {
    id: "3",
    title: "Lead Generation Campaign",
    summary:
      "Landing pages, paid campaigns and conversion-focused lead forms designed to turn targeted traffic into qualified business enquiries.",
    timeline: "Paid media & conversion",
    satisfaction: "Qualified leads and enquiries",
    author: {
      name: "Lead Generation",
      role: "Campaigns and conversion optimization",
      avatar:
        "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a5484ba4c8fb6e8690b1872_Service_06.avif",
    },
    banner:
      "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a54c0f53b2a0e4eb47dda6b_Project_Banner_03.avif",
    logo:
      "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e476836b7ea62935c4bc92_Service-Icon.svg",
  },
];

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header fade in
      gsap.from("[data-fw='header']", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-fw='header']",
          start: "top 88%",
        },
      });

      // Each project card slides up — home-project-banner-box style
      gsap.utils.toArray<HTMLElement>("[data-fw='card']").forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
        });
      });

      // Image parallax — subtle scrub on each card image
      gsap.utils.toArray<HTMLElement>("[data-fw='img']").forEach((img) => {
        gsap.to(img, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: img.closest("[data-fw='card']") || img,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#101010] text-white relative"
    >
      <Container>
        {/* Section Header */}
        <div
          data-fw="header"
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <SectionHeading
            title="Portfolio"
            subtitle="Solutions We Build"
            theme="white"
          />
          <Button href="/contact-us" variant="white">
            Discuss Your Project
          </Button>
        </div>

        {/* 3 Project Cards Stack */}
        <div className="space-y-12">
          {portfolioSolutions.map((project) => (
            <div
              key={project.id}
              data-fw="card"
              className="bg-[#171717] rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 shadow-xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Banner Photo */}
                <div className="lg:col-span-7">
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black/40">
                    <Image
                      data-fw="img"
                      src={project.banner}
                      alt={project.title}
                      fill
                      className="object-cover scale-[1.08] transition-transform duration-700 group-hover:scale-[1.12]"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:pl-0 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Project Logo Icon */}
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                      <Image
                        src={project.logo}
                        alt={project.title}
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain brightness-0 invert"
                      />
                    </div>

                    <Link href={"/contact-us"}>
                      <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-[#f97316] transition-colors mb-3">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-[#c5c5c5] leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-dashed border-white/15">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 block">
                        Service Focus
                      </span>
                      <span className="text-sm font-bold text-white mt-0.5 block">
                        {project.timeline}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 block">
                        Best For
                      </span>
                      <span className="text-sm font-bold text-[#f97316] mt-0.5 block">
                        {project.satisfaction}
                      </span>
                    </div>
                  </div>

                  {/* Author + Link Arrow */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative border border-white/20">
                        <Image
                          src={project.author.avatar}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block uppercase">
                          {project.author.name}
                        </span>
                        <span className="text-[11px] text-[#c5c5c5] block">
                          {project.author.role}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={"/contact-us"}
                      aria-label={`View ${project.title}`}
                      className="icon-swap-group w-10 h-10 rounded-lg bg-white/10 group-hover:bg-[#f97316] text-white group-hover:text-black flex items-center justify-center transition-all duration-300"
                    >
                      <div className="icon-swap-box w-5 h-5">
                        <span className="icon-swap-one flex items-center justify-center">
                          <ArrowUpRight className="w-5 h-5" />
                        </span>
                        <span className="icon-swap-two flex items-center justify-center">
                          <ArrowUpRight className="w-5 h-5" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
