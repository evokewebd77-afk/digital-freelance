import React from "react";
import Image from "next/image";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  theme?: "black" | "white" | "center-black" | "center-white";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  theme = "black",
  className = "",
}: SectionHeadingProps) {
  const isWhite = theme === "white" || theme === "center-white";
  const isCenter = theme === "center-black" || theme === "center-white";

  return (
    <div className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start"} ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 flex items-center justify-center">
          <Image
            src="https://cdn.prod.website-files.com/69dcb5467199b638883f4588/69df1b12ab982823fe363814_Simplification.svg"
            alt="Icon"
            width={18}
            height={18}
            className="w-4 h-4 object-contain"
          />
        </div>
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight ${
            isWhite ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <span
          className={`text-xs sm:text-sm font-medium uppercase tracking-wider ${
            isWhite ? "text-[#f97316]" : "text-[#575757]"
          }`}
        >
          {subtitle}
        </span>
      )}
    </div>
  );
}

