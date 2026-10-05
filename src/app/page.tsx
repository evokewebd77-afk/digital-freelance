import React from "react";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhatWeDo from "@/components/sections/WhatWeDo";
import FeaturedWork from "@/components/sections/FeaturedWork";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Who We Are */}
      <WhoWeAre />

      {/* 3. What We Do (Capabilities & Marquee) */}
      <WhatWeDo />

      {/* 4. Featured Work (Showcase) */}
      <FeaturedWork />

      {/* 5. Let's Build Together (CTA Visual Banner) */}
      <CtaBanner />
    </>
  );
}
