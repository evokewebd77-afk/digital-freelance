import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { servicesData } from "@/lib/data";
import { Check } from "lucide-react";

export const metadata = {
  title: "Services – Leverage Digital Marketing Agency",
  description: "Explore our full suite of digital marketing services: SEO, Paid Ads, Content Marketing, and Brand Strategy.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f97316] mb-3 block">
            Our Capabilities
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-tight mb-6">
            Services Built For Rapid Growth
          </h1>
          <p className="text-base sm:text-lg text-[#575757] leading-relaxed">
            From search visibility to revenue-optimized ad funnels, our core competencies are designed to generate predictable customer acquisition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.slug}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-sm scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Visual */}
                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-inner bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-6 flex flex-col justify-between space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-[#f97316]">{service.number}</span>
                    <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black m-0">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-base text-[#575757] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  {service.features && (
                    <div className="space-y-2.5 pt-2">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-medium text-black">
                          <div className="w-5 h-5 rounded-full bg-[#f97316]/15 flex items-center justify-center text-[#f97316]">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#f9f9f9] border border-black/10 text-black/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button href="/contact-us" variant="black">
                      Inquire About This Service
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

