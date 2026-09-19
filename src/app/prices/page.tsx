import React from "react";
import Container from "@/components/ui/Container";
import PricingSection from "@/components/sections/PricingSection";

export const metadata = {
  title: "Pricing – Leverage Digital Agency",
  description: "Transparent marketing plans and custom packages tailored for modern growth brands.",
};

export default function PricesPage() {
  const faqs = [
    {
      q: "Can I change or cancel my plan at any time?",
      a: "Yes, our retainer agreements can be adjusted or canceled with 30 days notice. We believe in earning our clients' trust every single month."
    },
    {
      q: "How quickly can we launch a new campaign?",
      a: "Once onboarding is complete (typically 3 to 5 business days), strategy alignment and creative development begin immediately, with initial ads launching within 10 days."
    },
    {
      q: "Do you offer custom enterprise packages?",
      a: "Absolutely. For high-growth organizations requiring custom multi-channel media buys or dedicated in-house embedded teams, we build bespoke packages."
    },
    {
      q: "What is included in the monthly performance reports?",
      a: "Every report covers CAC, ROAS, channel contribution, impression share, pipeline value, and next-sprint optimization recommendations."
    }
  ];

  return (
    <div className="py-12">
      {/* Main Pricing Cards Component */}
      <PricingSection />

      {/* FAQ Section */}
      <div className="py-20 bg-white border-t border-black/10">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-black text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#f9f9f9] border border-black/10">
                  <h3 className="text-base sm:text-lg font-bold uppercase text-black mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-[#575757] leading-relaxed m-0">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

