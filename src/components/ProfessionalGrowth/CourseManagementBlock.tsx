"use client";

import React from "react";
import Image from "next/image";
import FeatureChecklist from "./FeatureChecklist";
import { useScrollReveal } from "./useScrollReveal";

export interface CourseManagementBlockProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  features?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function CourseManagementBlock({
  title,
  description,
  features,
  imageSrc = "/images/landingpage/professional_growth/woman_leftside_image.png",
  imageAlt = "Course creator managing students and revenue",
}: CourseManagementBlockProps) {
  const { ref: imageRef, isVisible } = useScrollReveal(0.2);

  return (
    <div className="mt-14 sm:mt-20 lg:mt-12 xl:mt-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-8">
      {/* Left Column: Woman Graphic Composition (587x719) with Smooth Scroll Entrance Animation */}
      <div
        ref={imageRef}
        className={`relative w-full lg:w-[48%] xl:w-[48%] 2xl:w-[587px] flex justify-center lg:justify-start min-w-0 transition-all duration-1000 ease-out will-change-[transform,opacity] ${
          isVisible
            ? "opacity-100 translate-y-0 lg:translate-x-0 scale-100"
            : "opacity-0 translate-y-8 lg:translate-y-0 lg:-translate-x-12 scale-[0.97]"
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={587}
          height={719}
          className="w-full h-auto max-w-[420px] lg:max-w-full xl:max-w-[587px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:scale-[1.01] transition-transform duration-500"
        />
      </div>

      {/* Right Column: Heading, Subtitle & Feature Checklist */}
      <div className="w-full lg:w-[52%] xl:w-[52%] 2xl:w-[520px] min-w-0">
        {/* Title - Exact Figma Poppins SemiBold 44px, line-height 120%, letter-spacing -1%, #242528 */}
        <h2 className="font-poppins text-[#242528] text-[28px] sm:text-[34px] md:text-[38px] xl:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em]">
          {title || (
            <>
              Create & Manage
              <br className="hidden sm:inline" />{" "}
              Courses Easily.
            </>
          )}
        </h2>

        {/* Description - Satoshi font-regular 18px #4B4C53 with bold ByteSpace */}
        <p className="font-satoshi text-[#4B4C53] text-[15px] sm:text-[16px] xl:text-[18px] leading-[1.6] mt-5 sm:mt-6 max-w-[490px] font-normal">
          {description || (
            <>
              <strong className="font-semibold text-[#141517]">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and administration of educational courses.
            </>
          )}
        </p>

        {/* Features Checklist */}
        <FeatureChecklist features={features} className="mt-8 sm:mt-10" />
      </div>
    </div>
  );
}
