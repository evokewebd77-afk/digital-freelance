"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote:
        "Working with this amazing team has truly transformed our online presence. Their strategy and creativity helped us attract high-value clients consistently.",
      author: "Sarah Thompson",
      role: "CEO of BrightWave Agency",
      avatar:
        "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e5d2110e8d16e9f4ead3d2_Testimonial_01.avif",
    },
    {
      quote:
        "Professional, creative, and results-driven — exactly what our brand truly needed most to accelerate our growth.",
      author: "Daniel Carter",
      role: "Founder of BrightSide Co.",
      avatar:
        "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e5d211260c23d3c87cb04d_Testimonial_02.avif",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const animateSlideChange = (nextIndex: number) => {
    if (!quoteRef.current || !authorRef.current) return;
    gsap
      .timeline()
      .to([quoteRef.current, authorRef.current], {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setCurrentSlide(nextIndex),
      })
      .from([quoteRef.current, authorRef.current], {
        y: 20,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
  };

  const nextSlide = () =>
    animateSlideChange((currentSlide + 1) % testimonials.length);
  const prevSlide = () =>
    animateSlideChange(
      (currentSlide - 1 + testimonials.length) % testimonials.length
    );

  const clientAvatars = [
    "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e5d211260c23d3c87cb04d_Testimonial_02.avif",
    "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e5d21125d9e815e9218946_Testimonial_03.avif",
    "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e5d2123a629fd98f889658_Testimonial_04.avif",
    "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e5d2116a0a00c6c135d543_Testimonial_05.avif",
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading fade
      gsap.from("[data-wyu='heading']", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-wyu='heading']",
          start: "top 88%",
        },
      });

      // 3 cards stagger in
      gsap.from("[data-wyu='card']", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-wyu='grid']",
          start: "top 85%",
        },
      });

      // Mini strategy banners stagger
      gsap.from("[data-wyu='mini-img']", {
        scale: 0.85,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: "[data-wyu='mini-img']",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#f9f9f9] border-t border-black/10 relative"
    >
      <Container>
        {/* Title flex */}
        <div
          data-wyu="heading"
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <SectionHeading title="Why Us" theme="black" />
          <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-black/70 max-w-md m-0">
            Creativity and strategy delivering measurable brand growth.
          </p>
        </div>

        {/* 2-Column Grid Items */}
        <div data-wyu="grid" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Proven Strategy */}
          <div
            data-wyu="card"
            className="bg-white rounded-3xl p-8 sm:p-10 border border-black/10 flex flex-col justify-between space-y-8 shadow-sm"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black mb-3">
                Proven Strategy & Execution
              </h3>
              <p className="text-sm sm:text-base text-[#575757] leading-relaxed mb-6">
                Focused strategies, bespoke web development, and data-driven campaigns that support sustainable business growth and measurable success.
              </p>
              <Button href="/about" variant="black">
                Learn More
              </Button>
            </div>

            {/* Horizontal Mini Banner Previews */}
            <div className="grid grid-cols-4 gap-3 pt-4 border-t border-dashed border-black/10">
              {[
                "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e4cc1383c24f2769c731b3_Why_Us_Banner_1.avif",
                "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e4cc130cc97d2a9fb28a43_Why_Us_Banner_2.avif",
                "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e4cc13ea39d117887cf432_Why_Us_Banner_3.avif",
                "https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e4cc130adf7811781e0654_Why_Us_Banner_4.avif",
              ].map((img, i) => (
                <div
                  key={i}
                  data-wyu="mini-img"
                  className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 hover:scale-105 transition-transform duration-300 shadow-sm"
                >
                  <Image
                    src={img}
                    alt="Banner Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Testimonials & Client Review Slider */}
          <div
            data-wyu="card"
            className="bg-white rounded-3xl p-8 sm:p-10 border border-black/10 flex flex-col justify-between space-y-8 shadow-sm"
          >
            {/* Top Avatars & 5k+ Clients */}
            <div className="flex items-center justify-between pb-6 border-b border-dashed border-black/15">
              <div className="flex -space-x-2.5">
                {clientAvatars.map((url, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                  >
                    <Image
                      src={url}
                      alt="Client"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-right">
                <span className="text-xl sm:text-2xl font-black text-black block leading-none">
                  500+
                </span>
                <span className="text-xs uppercase font-bold text-[#575757]">
                  Satisfied Clients
                </span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="flex-1 flex flex-col justify-between space-y-6">
              <p
                ref={quoteRef}
                className="text-base sm:text-lg text-[#101010] font-medium italic leading-relaxed"
              >
                &ldquo;{testimonials[currentSlide].quote}&rdquo;
              </p>

              <div ref={authorRef} className="flex items-center justify-between pt-4 border-t border-black/5">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 relative flex-shrink-0 border border-black/10">
                    <Image
                      src={testimonials[currentSlide].avatar}
                      alt={testimonials[currentSlide].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase text-black m-0">
                      {testimonials[currentSlide].author}
                    </h4>
                    <p className="text-xs text-[#575757] m-0">
                      {testimonials[currentSlide].role}
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                    className="w-9 h-9 rounded-full bg-black/5 hover:bg-[#f97316] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                    className="w-9 h-9 rounded-full bg-black/5 hover:bg-[#f97316] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
