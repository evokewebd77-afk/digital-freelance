"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { blogPostsData } from "@/lib/data";
import { Calendar, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LatestArticles() {
  const sectionRef = useRef<HTMLElement>(null);
  const posts = blogPostsData;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading
      gsap.from("[data-la='heading']", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-la='heading']",
          start: "top 88%",
        },
      });

      // Blog article cards stagger
      gsap.from("[data-la='card']", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-la='grid']",
          start: "top 87%",
        },
      });

      // Featured right card
      gsap.from("[data-la='featured']", {
        y: 70,
        opacity: 0,
        scale: 0.96,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-la='grid']",
          start: "top 87%",
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
        {/* Section Header */}
        <div
          data-la="heading"
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <SectionHeading
            title="Latest Articles"
            subtitle="Insights"
            theme="black"
          />
          <Button href="/blogs" variant="black">
            More Articles
          </Button>
        </div>

        {/* 3 Articles Grid */}
        <div data-la="grid" className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: 2 Standard Cards */}
          <div className="md:col-span-6 flex flex-col space-y-6">
            {posts.slice(0, 2).map((post) => (
              <div
                key={post.id}
                data-la="card"
                className="bg-white rounded-2xl p-6 sm:p-8 border border-black/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#575757] uppercase tracking-wider mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[#f97316]" />
                    <span>{post.date}</span>
                  </div>
                  <Link href={`/post/${post.slug}`}>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-black group-hover:text-[#f97316] transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-dashed border-black/15">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden relative bg-gray-200">
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

                  {/* Blog link arrow — icon-swap-group matching .home-blogs-post-link-icon */}
                  <Link
                    href={`/post/${post.slug}`}
                    aria-label={`Read ${post.title}`}
                    className="icon-swap-group w-9 h-9 rounded-lg bg-black/5 group-hover:bg-[#f97316] group-hover:text-white text-black flex items-center justify-center transition-colors"
                  >
                    <div className="icon-swap-box w-4 h-4">
                      <span className="icon-swap-one flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                      <span className="icon-swap-two flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: 1 Featured Large Image Card */}
          {posts[2] && (
            <div data-la="featured" className="md:col-span-6">
              <Link
                href={`/post/${posts[2].slug}`}
                className="relative block w-full h-full min-h-[380px] rounded-2xl overflow-hidden shadow-sm group border border-black/10"
              >
                {/* Background Photo */}
                <Image
                  src={posts[2].image}
                  alt={posts[2].title}
                  fill
                  className="object-cover transition-transform duration-700 scale-[1.05] group-hover:scale-[1.1]"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content at Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col justify-end space-y-4">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5 text-[#f97316]" />
                      <span>{posts[2].date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden relative">
                        <Image
                          src={posts[2].author.avatar}
                          alt={posts[2].author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs font-bold text-white uppercase">
                        {posts[2].author.name}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-[#f97316] transition-colors">
                    {posts[2].title}
                  </h3>
                </div>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
