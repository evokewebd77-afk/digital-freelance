import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectsData } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Portfolio – Leverage Digital Agency",
  description: "Browse our case studies and successful client campaigns across digital marketing and paid strategy.",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f97316] mb-3 block">
            Featured Case Studies
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-tight mb-6">
            Work That Moves The Needle
          </h1>
          <p className="text-base sm:text-lg text-[#575757] leading-relaxed">
            Detailed breakdowns of how our data-guided campaigns drove measurable customer acquisition and brand growth.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-black/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={project.banner}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#f97316]">
                      {project.timeline}
                    </span>
                    <span className="text-xs font-bold text-black bg-black/5 px-2.5 py-1 rounded-full">
                      {project.satisfaction}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-black group-hover:text-[#f97316] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#575757] leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-dashed border-black/10 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative">
                    <Image
                      src={project.author.avatar}
                      alt={project.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold uppercase text-black">
                    {project.author.name}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center group-hover:bg-[#f97316] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

