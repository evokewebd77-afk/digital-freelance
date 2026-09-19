import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-36 text-center">
      <Container>
        <div className="max-w-xl mx-auto space-y-6">
          <span className="text-8xl sm:text-9xl font-black text-[#f97316] tracking-tight block leading-none">
            404
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
            Page Not Found
          </h1>
          <p className="text-base text-[#575757] leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="pt-4">
            <Button href="/" variant="black">
              Return To Homepage
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

