import React from "react";

export interface CoursesSectionHeaderProps {
  title?: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function CoursesSectionHeader({
  title = (
    <>
      Discover Your Passion,
      <br />
      Build Your Skills
    </>
  ),
  subtitle = "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
  className = "",
}: CoursesSectionHeaderProps) {
  return (
    <div className={`text-center max-w-[917px] mx-auto ${className}`}>
      <h2 className="font-satoshi text-[#141517] text-[34px] sm:text-[42px] lg:text-[44px] font-semibold leading-[1.18] tracking-[-0.02em]">
        {title}
      </h2>
      <p className="font-satoshi text-[#82868E] text-[16px] sm:text-[18px] leading-[1.6] mt-5 max-w-[820px] mx-auto font-normal">
        {subtitle}
      </p>
    </div>
  );
}
