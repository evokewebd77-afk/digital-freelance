"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { reviewsData } from "@/lib/data";
import { Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ClientReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reviewCardRef = useRef<HTMLDivElement>(null);

  const changeReview = (idx: number) => {
    if (idx === activeIndex || !reviewCardRef.current) {
      setActiveIndex(idx);
      return;
    }
    gsap.to(reviewCardRef.current, {
      opacity: 0,
      y: -16,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setActiveIndex(idx);
        gsap.fromTo(
          reviewCardRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
        );
      },
    });
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading
      gsap.from("[data-cr='heading']", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-cr='heading']",
          start: "top 88%",
        },
      });

      // Review card scale+fade in
      gsap.from("[data-cr='card']", {
        y: 50,
        opacity: 0,
        scale: 0.96,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-cr='card']",
          start: "top 88%",
        },
      });

      // Tab logo buttons stagger
      gsap.from("[data-cr='tab']", {
        y: 30,
        opacity: 0,
        scale: 0.88,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: "[data-cr='tabs']",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeReview = reviewsData[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#f9f9f9] border-t border-black/10 relative"
    >
      <Container>
        {/* Title */}
        <div data-cr="heading" className="text-center mb-16 flex flex-col items-center">
          <SectionHeading
            title="Client Reviews"
            subtitle="Feedback"
            theme="center-black"
          />
        </div>

        {/* Active Review Showcase Card */}
        <div
          ref={reviewCardRef}
          data-cr="card"
          className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 border border-black/10 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Review Text & Info */}
            <div className="md:col-span-8 flex flex-col justify-between space-y-6">
              {/* Stars */}
              <div className="flex items-center gap-1.5">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-[#f97316] text-[#f97316]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-2xl font-bold text-black leading-relaxed">
                {activeReview.quote}
              </p>

              {/* Author Details */}
              <div className="pt-4 border-t border-dashed border-black/15">
                <h4 className="text-base font-bold uppercase tracking-tight text-black m-0">
                  {activeReview.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#575757] m-0 mt-0.5">
                  {activeReview.role} • {activeReview.company}
                </p>
              </div>
            </div>

            {/* Reviewer Photo */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg bg-gray-100 border-4 border-white">
                <Image
                  src={activeReview.avatar}
                  alt={activeReview.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logos Selector Tabs */}
        <div
          data-cr="tabs"
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {reviewsData.map((review, idx) => (
            <button
              key={review.id}
              data-cr="tab"
              onClick={() => changeReview(idx)}
              aria-label={`View review from ${review.name}`}
              className={`p-3 sm:px-6 sm:py-4 rounded-xl border transition-all duration-300 flex items-center justify-center ${
                idx === activeIndex
                  ? "bg-white border-[#f97316] shadow-md scale-105"
                  : "bg-white/60 border-black/10 hover:border-black/30 opacity-70 hover:opacity-100 hover:scale-105"
              }`}
            >
              <Image
                src={review.brandLogo}
                alt={review.company}
                width={90}
                height={28}
                className="max-h-6 sm:max-h-7 w-auto object-contain"
              />
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
