"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Scale-in the entire banner box — matching .cta-banner-box animation
      gsap.from(bannerRef.current, {
        scale: 0.88,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 88%",
        },
      });

      // Background image subtle parallax/scale
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        }
      );

      // Content stagger reveal — matching .cta-banner-content-wrap
      gsap.from("[data-cta='content'] > *", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 82%",
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
        {/* Banner Card Container */}
        <div
          ref={bannerRef}
          className="cta-banner-scale relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[460px] md:min-h-[520px] flex items-center shadow-2xl"
        >
          {/* Background Image */}
          <div ref={bgRef} className="absolute inset-0">
            <Image
              src="https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e9ad6b045ff7fa3bedf9e8_f1ffb9438b76424b1c8db4e39fe5c170_Cta_Banner.avif"
              alt="Let's Build Together"
              fill
              className="object-cover"
            />
          </div>

          {/* Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

          {/* Foreground Content */}
          <div
            data-cta="content"
            className="relative z-10 w-full p-8 sm:p-14 md:p-20 flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                Let&apos;s Build Together
              </h2>
              <p className="text-sm sm:text-base text-white/80 mt-4 leading-relaxed max-w-md">
                Partner with our digital experts to create measurable marketing
                impact and scale your brand to the next level.
              </p>
            </div>

            <div>
              <Button href="/contact-us" variant="white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
