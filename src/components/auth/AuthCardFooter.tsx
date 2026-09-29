import React from "react";
import Link from "next/link";

interface AuthCardFooterProps {
  text: string;
  linkText: string;
  linkHref: string;
  className?: string;
}

export default function AuthCardFooter({
  text,
  linkText,
  linkHref,
  className = "pt-6 sm:pt-8",
}: AuthCardFooterProps) {
  return (
    <div className={`text-center ${className}`}>
      <p className="font-satoshi text-[16px] text-[#888888]">
        {text}{" "}
        <Link
          href={linkHref}
          className="text-[#003BE2] hover:underline font-normal transition-colors"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
}
