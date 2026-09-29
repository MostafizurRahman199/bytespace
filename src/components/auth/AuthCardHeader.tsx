import React from "react";

interface AuthCardHeaderProps {
  tag: string;
  title: React.ReactNode;
  className?: string;
}

export default function AuthCardHeader({
  tag,
  title,
  className = "",
}: AuthCardHeaderProps) {
  return (
    <div className={className}>
      {/* Top Category Tag */}
      <span className="font-satoshi font-normal text-[16px] text-[#003BE2] leading-none block mb-2">
        {tag}
      </span>

      {/* Main Title */}
      <h2 className="font-poppins font-semibold text-[30px] sm:text-[36px] lg:text-[40px] text-[#242528] leading-[1.15] tracking-tight mb-5 sm:mb-8">
        {title}
      </h2>
    </div>
  );
}
