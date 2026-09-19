import React from "react";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhyUs from "@/components/sections/WhyUs";
import FeaturedWork from "@/components/sections/FeaturedWork";
import PricingSection from "@/components/sections/PricingSection";
import CtaBanner from "@/components/sections/CtaBanner";
import ClientReviews from "@/components/sections/ClientReviews";

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Who We Are */}
      <WhoWeAre />

      {/* 3. What We Do (Capabilities & Marquee) */}
      <WhatWeDo />

      {/* 4. Why Us (Strategy & Testimonials) */}
      <WhyUs />

      {/* 5. Featured Work (Showcase) */}
      <FeaturedWork />

      {/* 6. Pricing Plans (Packages) */}
      <PricingSection />

      {/* 7. Let's Build Together (CTA Visual Banner) */}
      <CtaBanner />

      {/* 8. Client Reviews (Feedback) */}
      <ClientReviews />
    </>
  );
}
