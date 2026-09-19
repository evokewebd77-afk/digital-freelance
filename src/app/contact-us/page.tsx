"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const APP_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxl5xdnloTds2GwJOUJeHOAxYKbbVB2n9jTioCf8gh_GFHRzSvUaP0-fozLksq27rFe/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());

    await fetch(APP_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
    });
    setSubmitted(true);
  };

  return (
    <div className="py-16 sm:py-24">
      <Container>
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f97316] mb-3 block">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-tight mb-6">
            Let’s Discuss Your Growth Goals
          </h1>
          <p className="text-base sm:text-lg text-[#575757] leading-relaxed">
            Ready to accelerate customer acquisition? Connect with our strategists to discuss an audit or campaign roadmap.
          </p>
        </div>

        {/* Contact Form & Information Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-black/10 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-black mb-3">
                Agency Headquarters
              </h3>
              <p className="text-sm text-[#575757] leading-relaxed">
                Available Monday through Friday for consultations, strategy reviews, and partner sessions.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-dashed border-black/15">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f97316]/10 text-[#f97316] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#575757] block">Email Us</span>
                  <span className="text-sm font-semibold text-black">contact.digistudiox@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f97316]/10 text-[#f97316] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#575757] block">Call Us</span>
                  <span className="text-sm font-semibold text-black">+91 883 750 9696</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-black/10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#f97316] text-white rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-black">Message Sent!</h3>
                <p className="text-sm text-[#575757] max-w-sm mx-auto">
                  Thank you for reaching out. A growth partner will review your inquiry and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-black block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-[#f9f9f9] border border-black/10 rounded-xl px-4 py-3 text-sm text-black outline-none focus:border-[#f97316] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-black block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full bg-[#f9f9f9] border border-black/10 rounded-xl px-4 py-3 text-sm text-black outline-none focus:border-[#f97316] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-black block mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Acme Inc."
                      className="w-full bg-[#f9f9f9] border border-black/10 rounded-xl px-4 py-3 text-sm text-black outline-none focus:border-[#f97316] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-black block mb-2">
                      Estimated Monthly Budget
                    </label>
                    <select
                      name="budget"
                      className="w-full bg-[#f9f9f9] border border-black/10 rounded-xl px-4 py-3 text-sm text-black outline-none focus:border-[#f97316] transition-colors"
                    >
                      <option>$3,000 - $10,000 / mo</option>
                      <option>$10,000 - $30,000 / mo</option>
                      <option>$30,000+ / mo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-black block mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your brand, current challenges, and targets..."
                    className="w-full bg-[#f9f9f9] border border-black/10 rounded-xl px-4 py-3 text-sm text-black outline-none focus:border-[#f97316] transition-colors resize-none"
                  ></textarea>
                </div>

                <div>
                  <Button type="submit" variant="black">
                    Submit Inquiry
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

