import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "black" | "white" | "secondary" | "orange";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "black",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  if (variant === "secondary") {
    const content = (
      <span className={`secondary-btn text-xs sm:text-sm font-semibold tracking-wider text-black hover:text-[#f97316] transition-colors duration-300 ${className}`}>
        <span>{children}</span>
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    );

    if (href) {
      return (
        <Link href={href} className="group inline-flex items-center">
          {content}
        </Link>
      );
    }
    return (
      <button type={type} onClick={onClick} className="group inline-flex items-center">
        {content}
      </button>
    );
  }

  // Primary style (black, white, or orange)
  const isWhite = variant === "white";
  const isOrange = variant === "orange";

  const baseStyles = isWhite
    ? "bg-white text-black border border-white hover:bg-[#f97316] hover:text-white hover:border-[#f97316] shadow-sm"
    : isOrange
    ? "bg-[#f97316] text-white border border-[#f97316] hover:bg-black hover:border-black"
    : "bg-black text-white border border-black hover:bg-[#f97316] hover:border-[#f97316] hover:text-black";

  const iconBoxStyles = isWhite
    ? "bg-black text-white group-hover:bg-white group-hover:text-black"
    : "bg-white text-black group-hover:bg-black group-hover:text-[#f97316]";

  const buttonInner = (
    <div className={`btn-rolling group pl-5 sm:pl-6 pr-1 py-1 rounded-[8px] font-semibold text-xs sm:text-sm uppercase tracking-wider ${baseStyles} ${className}`}>
      <span className="btn-rolling-text-wrap mr-3 sm:mr-4">
        <span className="btn-text-primary">{children}</span>
        <span className="btn-text-hover">{children}</span>
      </span>
      <div className={`btn-rolling-icon-wrap w-10 h-10 sm:w-11 sm:h-11 rounded-[6px] ${iconBoxStyles}`}>
        <ArrowUpRight className="btn-icon-primary w-4 h-4 sm:w-5 sm:h-5" />
        <ArrowUpRight className="btn-icon-hover w-4 h-4 sm:w-5 sm:h-5" />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonInner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {buttonInner}
    </button>
  );
}

