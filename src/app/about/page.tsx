import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About Us – Leverage Digital Agency",
  description: "Learn more about Leverage digital agency, our history, core values, and creative team.",
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Ethan Brooks",
      role: "Strategy Director",
      image: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a49eb9aea04f502e03fc5a2_Blog_Author_12.jpg",
    },
    {
      name: "Claire Morgan",
      role: "Head of Marketing",
      image: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a49eb68d0e0f799d7ae57ab_Blog_Author_11.jpg",
    },
    {
      name: "Nathan Walker",
      role: "Creative Director",
      image: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/6a4ba358c0f664cd3da16f13_Project_Author_02.jpg",
    },
    {
      name: "Olivia Turner",
      role: "Lead Performance Designer",
      image: "https://cdn.prod.website-files.com/69e362f3ced6e65f05bdec7d/69e9eee9df7f2e453d190b27_Blog_Author_01.jpg",
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <Container>
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f97316] mb-3 block">
            About Our Agency
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-tight mb-6">
            We Build Brands That Outperform
          </h1>
          <p className="text-base sm:text-lg text-[#575757] leading-relaxed">
            Leverage combines data intelligence, high-converting creative, and omnichannel execution to engineer sustainable growth for ambitious brands worldwide.
          </p>
        </div>

        {/* Hero Visual Banner */}
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-xl mb-24 bg-gray-100">
          <Image
            src="https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69e9ad6b045ff7fa3bedf9e8_f1ffb9438b76424b1c8db4e39fe5c170_Cta_Banner.avif"
            alt="Agency Team"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Mission & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <SectionHeading title="Our Mission" subtitle="Purpose" theme="black" />
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black mt-6 mb-4">
              Empowering Market Leaders Through Measurable Performance
            </h3>
            <p className="text-sm sm:text-base text-[#575757] leading-relaxed mb-6">
              Founded with the conviction that creative execution must deliver direct revenue outcomes, Leverage helps companies transform market interest into compounding brand equity.
            </p>
            <Button href="/contact-us" variant="black">
              Work With Us
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-black/10 shadow-sm">
              <span className="text-4xl font-black text-[#f97316] block mb-2">99%</span>
              <h4 className="text-sm font-bold uppercase text-black mb-2">Client Retention</h4>
              <p className="text-xs text-[#575757] leading-relaxed">
                Long-term partnerships built on transparency and compounding performance metrics.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-black/10 shadow-sm">
              <span className="text-4xl font-black text-black block mb-2">500+</span>
              <h4 className="text-sm font-bold uppercase text-black mb-2">Global Clients</h4>
              <p className="text-xs text-[#575757] leading-relaxed">
                Trusted by venture-backed startups and Fortune 500 enterprises internationally.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div id="team" className="pt-12 border-t border-dashed border-black/15">
          <div className="text-center mb-16">
            <SectionHeading title="Leadership Team" subtitle="The Minds Behind Leverage" theme="center-black" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 border border-black/10 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-base font-bold uppercase text-black m-0">{member.name}</h4>
                <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wider mt-1 m-0">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

