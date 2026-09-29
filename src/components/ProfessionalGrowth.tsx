"use client";

import React from "react";
import Image from "next/image";

const STATS_DATA = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const FEATURES_DATA = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function ProfessionalGrowth() {
  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden pt-12 sm:pt-20 lg:pt-[100px] pb-16 sm:pb-24 lg:pb-[110px] select-none">
      {/* 
        Exact Figma Ambient Glow Blobs:
        - Top-Center/Left: Lime glow (#D4FB20)
        - Mid-Left: Blue glow (#003BE2)
        - Bottom-Left: Lime glow (#D4FB20)
        - Bottom-Right: Blue glow (#003BE2)
        - Top-Right: Soft blue tint (#003BE2)
      */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-[28%] -translate-x-1/2 w-[550px] h-[450px] bg-[#D4FB20]/30 rounded-full blur-[120px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-[46%] -left-[120px] w-[520px] h-[520px] bg-[#003BE2]/16 rounded-full blur-[130px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-[-40px] -left-[100px] w-[500px] h-[480px] bg-[#D4FB20]/35 rounded-full blur-[120px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-[-60px] -right-[80px] w-[550px] h-[520px] bg-[#003BE2]/20 rounded-full blur-[130px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-0 -right-[80px] w-[420px] h-[360px] bg-[#003BE2]/10 rounded-full blur-[110px] pointer-events-none" 
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px]">
        {/* =========================================================================
            TOP BLOCK: Your Path to Professional Growth Starts Here!
        ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-8">
          {/* Left Column: Heading, Subtitle & Stats */}
          <div className="w-full lg:w-[50%] xl:w-[48%] 2xl:w-[577px] shrink-0 lg:shrink">
            {/* Title - Exact Figma Poppins SemiBold 44px, line-height 120%, letter-spacing -1%, #242528 */}
            <h2 className="font-poppins text-[#242528] text-[28px] sm:text-[34px] md:text-[38px] xl:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em]">
              Your Path to Professional
              <br className="hidden sm:inline" />{" "}
              Growth Starts Here!
            </h2>

            {/* Description - Satoshi font-thin (font-weight: 100) 18px #4B4C53 */}
            <p className="font-satoshi text-[#4B4C53] text-[15px] sm:text-[16px] xl:text-[18px] leading-[1.6] mt-5 sm:mt-7 max-w-[490px] font-thin">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Row - Poppins medium 36px value, Satoshi font-thin 18px #4B4C53 label */}
            <div className="mt-8 sm:mt-12 flex items-center gap-6 sm:gap-10 lg:gap-8 xl:gap-14">
              {STATS_DATA.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-poppins font-medium text-[#003BE2] text-[26px] sm:text-[30px] xl:text-[36px] leading-none tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-satoshi text-[#4B4C53] text-[14px] sm:text-[16px] xl:text-[18px] mt-2 font-thin">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Man Graphic Composition (703x697) */}
          <div className="relative w-full lg:w-[50%] xl:w-[52%] 2xl:w-[703px] 2xl:-mr-[120px] flex justify-center lg:justify-end min-w-0">
            <Image
              src="/images/landingpage/professional_growth/man_rigthside_image.png"
              alt="Student with laptop learning online course"
              width={703}
              height={697}
              priority
              className="w-full h-auto max-w-[480px] lg:max-w-full xl:max-w-[703px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>

        {/* =========================================================================
            BOTTOM BLOCK: Create & Manage Courses Easily.
        ========================================================================= */}
        <div className="mt-14 sm:mt-20 lg:mt-12 xl:mt-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-8">
          {/* Left Column: Woman Graphic Composition (587x719) */}
          <div className="relative w-full lg:w-[48%] xl:w-[48%] 2xl:w-[587px] flex justify-center lg:justify-start min-w-0">
            <Image
              src="/images/landingpage/professional_growth/woman_leftside_image.png"
              alt="Course creator managing students and revenue"
              width={587}
              height={719}
              className="w-full h-auto max-w-[420px] lg:max-w-full xl:max-w-[587px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          {/* Right Column: Heading, Subtitle & Feature Checklist */}
          <div className="w-full lg:w-[52%] xl:w-[52%] 2xl:w-[520px] min-w-0">
            {/* Title - Exact Figma Poppins SemiBold 44px, line-height 120%, letter-spacing -1%, #242528 */}
            <h2 className="font-poppins text-[#242528] text-[28px] sm:text-[34px] md:text-[38px] xl:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em]">
              Create & Manage
              <br className="hidden sm:inline" />{" "}
              Courses Easily.
            </h2>

            {/* Description - Satoshi font-thin (font-weight: 100) 18px #4B4C53 with bold ByteSpace */}
            <p className="font-satoshi text-[#4B4C53] text-[15px] sm:text-[16px] xl:text-[18px] leading-[1.6] mt-5 sm:mt-6 max-w-[490px] font-thin">
              <strong className="font-semibold text-[#141517]">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Features Checklist */}
            <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:gap-5">
              {FEATURES_DATA.map((feature) => (
                <div key={feature} className="flex items-center gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 shadow-sm">
                    <svg
                      className="w-3 h-3 text-white"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2.5 6 4.75 8.5 9.5 3.5" />
                    </svg>
                  </div>
                  <span className="font-satoshi font-medium text-[#141517] text-[16px] sm:text-[17px] leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
