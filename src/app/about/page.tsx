import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  ClipboardCheck,
  Code2,
  GraduationCap,
  Megaphone,
  MousePointerClick,
  Palette,
  PenLine,
  Search,
  Share2,
  Sparkles,
  Target,
} from "lucide-react";

export const metadata = {
  title: "About Us | Digital Marketing & Web Development Team",
  description:
    "Learn how our freelance digital team combines web development, marketing, SEO and creative strategy to drive business growth.",
};

export default function AboutPage() {
  const services = [
    { name: "Website Development", icon: Code2 },
    { name: "SEO", icon: Search },
    { name: "Google Ads", icon: Megaphone },
    { name: "Social Media Marketing", icon: Share2 },
    { name: "Lead Generation", icon: MousePointerClick },
    { name: "Content Writing", icon: PenLine },
    { name: "Graphic Design", icon: Palette },
    { name: "Digital Marketing Audits", icon: ClipboardCheck },
    { name: "Digital Marketing Training", icon: GraduationCap },
    { name: "AI-Powered Marketing Solutions", icon: Sparkles },
  ];

  const portrait = (id: string) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&crop=faces&w=800&q=80`;

  const teamMembers = [
    {
      name: "Vanshita",
      role: "Full Stack Developer",
      image: "/web%20dev.avif",
      icon: Code2,
      description:
        "Builds fast, responsive websites and web apps — from database design to deployment.",
      skills: ["React", "Next.js", "Node.js", "Astro"],
    },
    {
      name: "Deepinder",
      role: "Meta Ads Lead — Handling",
      image: portrait("photo-1500648767791-00dcc994a43e"),
      icon: Megaphone,
      description:
        "Plans, launches and optimises Facebook & Instagram campaigns that deliver qualified leads.",
      skills: ["Meta Ads", "Lead Generation", "A/B Testing"],
    },
    {
      name: "",
      role: "Content Writer",
      image: portrait("photo-1438761681033-6461ffad8d80"),
      icon: PenLine,
      description:
        "Writes clear, keyword-focused website copy, blogs and ad content that converts readers into buyers.",
      skills: ["SEO Writing", "Blogging", "Ad Copy"],
    },
    {
      name: "",
      role: "Graphic Designer",
      image: portrait("photo-1507003211169-0a1dd7228f2d"),
      icon: Palette,
      description:
        "Designs brand visuals, social creatives and landing page graphics that make your brand stand out.",
      skills: ["Photoshop", "Canva", "Branding"],
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f97316] mb-3 block">
            About Us
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-tight mb-6">
            We Help Businesses Turn Digital Ideas Into Growth.
          </h1>
          <p className="text-base sm:text-lg text-[#575757] leading-relaxed">
            A digital freelance team combining web development, marketing, SEO and
            creative strategy to help businesses build a stronger online presence.
          </p>
        </div>

        <section className="relative mb-24 overflow-hidden rounded-[32px] bg-[#101010] p-7 sm:p-10 lg:p-14 text-white shadow-2xl">
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-[#f97316]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#f97316]/5 blur-[90px]" />
          <div className="absolute top-0 right-0 w-48 h-48 border-l border-b border-white/10 rounded-bl-[48px]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                title="Who We Are"
                subtitle="Business-First Digital Expertise"
                theme="white"
              />

              <h2 className="mt-8 mb-7 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">
                Digital Expertise With a Business-First Approach
              </h2>

              <div className="space-y-5 text-sm sm:text-base leading-relaxed">
                <p className="text-lg sm:text-xl text-white font-medium">
                  We work with businesses that want more from their digital presence.
                </p>
                <p className="text-[#c5c5c5] max-w-3xl">
                  Instead of treating website development, SEO, advertising and
                  social media as separate activities, we look at the complete
                  digital journey — from the first search to the final enquiry.
                </p>
                <div className="border-l-2 border-[#f97316] pl-5 text-[#a3a3a3]">
                  Our goal is simple: build digital solutions that are useful for
                  your audience and valuable for your business.
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-9">
                {[
                  { icon: Search, label: "First Search" },
                  { icon: MousePointerClick, label: "Complete Journey" },
                  { icon: Target, label: "Final Enquiry" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:border-[#f97316]/50 hover:bg-white/[0.07] transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-[#f97316] mb-3" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/80">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-white/15 bg-white/5 shadow-2xl group">
                <Image
                  src="/about.png"
                  alt="Digital strategy and business growth"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/50 backdrop-blur-md p-4">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#f97316] mb-2">
                    Our Focus
                  </span>
                  <span className="block text-sm sm:text-base font-semibold text-white">
                    Complete digital journeys. Useful solutions. Business growth.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mb-24 overflow-hidden rounded-[32px] border border-black/10 bg-[#f9f9f9] p-6 sm:p-10 lg:p-14">
          <div className="absolute -right-10 -top-16 text-[180px] sm:text-[240px] font-black leading-none text-black/[0.025] select-none">
            10
          </div>
          <div className="absolute -bottom-20 -left-16 w-64 h-64 rounded-full bg-[#f97316]/10 blur-[90px]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <SectionHeading
                title="What We Do"
                subtitle="Digital Services"
                theme="black"
              />
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-sm sm:text-base text-[#575757] leading-relaxed">
                We help businesses with:
              </p>
              <span className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 text-xs font-bold uppercase tracking-wider text-[#c95708]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                10 focused services
              </span>
            </div>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
            {services.map(({ name, icon: Icon }, index) => (
              <div
                key={name}
                className="group relative min-h-[190px] bg-white rounded-3xl border border-black/10 p-5 flex flex-col justify-between overflow-hidden shadow-sm hover:-translate-y-1 hover:border-[#f97316]/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute right-0 top-0 w-20 h-20 rounded-bl-[48px] bg-[#f97316]/[0.06] transition-colors duration-300 group-hover:bg-[#f97316]/10" />
                <div className="relative flex items-start justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-black flex items-center justify-center group-hover:bg-[#f97316] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-black text-[#f97316]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="relative mt-8">
                  <h3 className="text-base sm:text-lg font-bold text-black leading-snug">
                    {name}
                  </h3>
                  <div className="mt-4 h-px w-full bg-black/10 overflow-hidden">
                    <div className="h-px w-full bg-[#f97316] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mb-20 overflow-hidden rounded-[32px] border border-black/10 bg-[#f9f9f9] p-6 sm:p-8 lg:p-10">
          <div className="absolute -right-8 -top-16 text-[110px] sm:text-[150px] font-black leading-none text-black/[0.025] select-none">
            TEAM
          </div>
          <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-[#f97316]/10 blur-[100px]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <SectionHeading
                title="Meet Our Team"
                subtitle="People Behind Your Growth"
                theme="black"
              />
              <h2 className="mt-5 text-2xl sm:text-3xl font-black uppercase tracking-tight text-black leading-tight">
                Different expertise. One growth partner.
              </h2>
            </div>

            <div className="lg:col-span-5 lg:text-right">
              <p className="text-sm text-[#575757] leading-relaxed max-w-md lg:ml-auto">
                We bring strategy, technology, marketing and creative thinking
                together so your business can move from idea to measurable growth.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 lg:justify-end">
                {["Freelance", "Collaborative", "Results-focused"].map((label) => (
                  <span
                    key={label}
                    className="px-3 py-1.5 rounded-full border border-black/10 bg-white text-[10px] font-bold uppercase tracking-wider text-black/70"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <Button href="/contact-us" variant="black">
                  Work With Us
                </Button>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">
            {teamMembers.map(({ name, role, image, icon: Icon, description, skills }) => (
              <article
                key={role}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-black/10 shadow-sm hover:-translate-y-1 hover:border-[#f97316]/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-black/5">
                  <Image
                    src={image}
                    alt={name ? `${name} — ${role}` : role}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black/70 backdrop-blur-md flex items-center justify-center group-hover:bg-[#f97316] transition-colors duration-300">
                    <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3">
                    <h3 className="text-[11px] sm:text-sm font-black uppercase tracking-tight text-white leading-snug">
                      {role}
                    </h3>
                    {name && (
                      <span className="block text-[10px] sm:text-xs font-semibold text-[#f97316]">
                        {name}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-3.5 sm:p-4">
                  <p className="text-[12px] sm:text-[13px] text-[#575757] leading-relaxed line-clamp-3">
                    {description}
                  </p>
                  <div className="mt-3.5 pt-3 border-t border-black/10 flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-full bg-black/[0.04] border border-black/10 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-black/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24 rounded-3xl bg-[#101010] text-white p-8 sm:p-12 lg:p-16">
          <SectionHeading
            title="Our Philosophy"
            subtitle="Purpose-Driven Digital Growth"
            theme="white"
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mt-8 mb-6">
            Build With Purpose. Market With Strategy. Improve With Data.
          </h2>
          <div className="space-y-5 text-sm sm:text-base text-[#c5c5c5] leading-relaxed max-w-4xl">
            <p>A beautiful website is only the beginning.</p>
            <p>
              A successful digital presence requires the right structure,
              messaging, visibility, audience targeting and continuous optimization.
            </p>
            <p>
              That&apos;s why we combine creative thinking with technical
              implementation and marketing strategy.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-black/10 bg-white p-8 sm:p-12 lg:p-16 text-center shadow-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black leading-tight mx-auto max-w-4xl">
            Let&apos;s Build Something That Moves Your Business Forward.
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact-us" variant="black">
              Start a Conversation
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
