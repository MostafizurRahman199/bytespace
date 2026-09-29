import React from "react";

export interface ExploreCategoriesHeaderProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export default function ExploreCategoriesHeader({
  title = "Explore Diverse Learning Paths at Bytespace",
  subtitle = "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
  className = "",
}: ExploreCategoriesHeaderProps) {
  return (
    <div className={`text-center max-w-[917px] mx-auto ${className}`}>
      <h2 className="font-satoshi text-[#141517] text-[32px] sm:text-[40px] lg:text-[36px] font-semibold leading-[1.18] tracking-[-0.02em]">
        {title}
      </h2>
      <p className="font-satoshi text-[#82868E] text-[16px] sm:text-[18px] leading-[1.6] mt-5 max-w-[820px] mx-auto font-normal">
        {subtitle}
      </p>
    </div>
  );
}
