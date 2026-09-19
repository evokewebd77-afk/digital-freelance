"use client";

import React, { useState, useEffect } from "react";
import { Mail, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 select-none">
      {/* 1. WhatsApp Button */}
      <a
        href="https://wa.me/918837509696?text=Hello%20Digital%20Freelance%20Studio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-[#25D366]/40"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.781-.878-2.057-.978-.276-.1-.477-.15-.678.15-.201.301-.778.978-.954 1.179-.176.2-.351.226-.652.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.15-.176.201-.301.301-.502.1-.2.05-.376-.025-.527s-.678-1.631-.929-2.233c-.244-.587-.493-.507-.678-.517-.176-.01-.376-.01-.577-.01s-.527.075-.803.376c-.276.301-1.054 1.029-1.054 2.509s1.079 2.91 1.229 3.111c.15.201 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.898.12.578-.087 1.781-.727 2.032-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351zM12.042 21.848a9.83 9.83 0 0 1-5.01-1.371l-.359-.213-3.725.977.994-3.631-.233-.372a9.837 9.837 0 0 1-1.508-5.213C2.201 6.6 6.616 2.185 12.042 2.185c2.628 0 5.099 1.024 6.958 2.883a9.798 9.798 0 0 1 2.882 6.958c0 5.426-4.415 9.822-9.84 9.822zM12.042 0C5.402 0 .01 5.393.01 12.033c0 2.12.553 4.19 1.605 6.012L0 24l6.136-1.61a12.008 12.008 0 0 0 5.906 1.543h.005c6.64 0 12.032-5.393 12.032-12.033C24.079 5.393 18.682 0 12.042 0z" />
        </svg>
        <span className="absolute right-14 bg-black/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
          WhatsApp
        </span>
      </a>

      {/* 2. Mail Button */}
      <a
        href="mailto:contact@digitalfreelancestudio.com"
        aria-label="Send an Email"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#101010] text-white border border-white/15 shadow-xl hover:bg-[#f97316] hover:border-[#f97316] hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-[#f97316]/30"
      >
        <Mail className="w-5 h-5" />
        <span className="absolute right-14 bg-black/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
          Email Us
        </span>
      </a>

      {/* 3. Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/95 backdrop-blur-md text-black border border-black/10 shadow-xl hover:bg-[#f97316] hover:text-white hover:border-[#f97316] hover:scale-110 active:scale-95 transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
        <span className="absolute right-14 bg-black/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
          Back to Top
        </span>
      </button>
    </div>
  );
}
