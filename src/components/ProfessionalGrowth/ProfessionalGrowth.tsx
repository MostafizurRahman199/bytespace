"use client";

import React from "react";
import AmbientGlows from "./AmbientGlows";
import LearnerGrowthBlock, { LearnerGrowthBlockProps } from "./LearnerGrowthBlock";
import CourseManagementBlock, { CourseManagementBlockProps } from "./CourseManagementBlock";

export interface ProfessionalGrowthProps {
  learnerBlockProps?: LearnerGrowthBlockProps;
  courseManagementBlockProps?: CourseManagementBlockProps;
  className?: string;
}

export default function ProfessionalGrowth({
  learnerBlockProps,
  courseManagementBlockProps,
  className = "",
}: ProfessionalGrowthProps) {
  return (
    <section className={`relative w-full bg-[#FAFAFA] overflow-hidden pt-12 sm:pt-20 lg:pt-[100px] pb-16 sm:pb-24 lg:pb-[110px] select-none ${className}`}>
      {/* Exact Figma Ambient Glow Blobs */}
      <AmbientGlows />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px]">
        {/* TOP BLOCK: Your Path to Professional Growth Starts Here! */}
        <LearnerGrowthBlock {...learnerBlockProps} />

        {/* BOTTOM BLOCK: Create & Manage Courses Easily. */}
        <CourseManagementBlock {...courseManagementBlockProps} />
      </div>
    </section>
  );
}
