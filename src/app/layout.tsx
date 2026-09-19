import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import FloatingActions from "@/components/ui/FloatingActions";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Digital Freelance Studio",
    template: "%s | Digital Freelance Studio",
  },
  description:
    "Strategic digital marketing agency combining insights and creativity to grow your brand. SEO, content marketing, paid ads, and email campaigns.",
  openGraph: {
    title: "Digital Freelance Studio",
    description:
      "Strategic digital marketing agency combining insights and creativity to grow your brand. SEO, content marketing, paid ads, and email campaigns.",
  },
  icons: {
    icon: [
      { url: "/Logo Img (1).png" },
      { url: "/favicon.png" },
    ],
    apple: "/Logo Img (1).png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#101010]">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
            <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}

