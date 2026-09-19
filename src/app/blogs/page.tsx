import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPostsData } from "@/lib/data";
import { Calendar, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Blogs & Insights – Leverage Digital Agency",
  description: "Read the latest thoughts on SEO, paid ad tactics, conversion rate optimization, and brand scaling.",
};

export default function BlogsPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f97316] mb-3 block">
            Articles & Case Notes
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-tight mb-6">
            Latest Digital Insights
          </h1>
          <p className="text-base sm:text-lg text-[#575757] leading-relaxed">
            Actionable strategies and case studies on how leading brands acquire and retain high-value customers.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-black/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {post.category && (
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-black text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#575757] uppercase tracking-wider mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[#f97316]" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-black group-hover:text-[#f97316] transition-colors mb-3">
                    {post.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-dashed border-black/10 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold uppercase text-black">
                    {post.author.name}
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

