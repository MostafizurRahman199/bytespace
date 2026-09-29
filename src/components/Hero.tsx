"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-between min-h-[calc(100vh-120px)] lg:min-h-[904px] pt-4 md:pt-8 select-none">
      {/* 
        Full-Viewport Screen-Edge Elements:
        - left_spriral is ALWAYS leftmost (pinned to viewport left edge)
        - right_Cone is ALWAYS rightmost (pinned to viewport right edge)
      */}
      {/* 1. Left Neon Yellow Coiled Spring - Always Leftmost */}
      <div className="absolute left-[-45px] sm:left-[-30px] lg:left-[-40px] top-[240px] lg:top-[260px] w-[180px] sm:w-[220px] lg:w-[267px] h-auto pointer-events-none z-20 animate-float-slow">
        <Image
          src="/images/landingpage/hero/left_spriral.png"
          alt="Yellow 3D Spiral"
          width={267}
          height={387}
          className="object-contain w-full h-auto drop-shadow-xl"
          priority
        />
      </div>

      {/* 4. Right Neon Yellow Cone - Always Rightmost */}
      <div className="absolute right-[-45px] sm:right-[-30px] lg:right-[-35px] top-[140px] lg:top-[160px] w-[140px] sm:w-[180px] lg:w-[213px] h-auto pointer-events-none z-20 animate-float-slow">
        <Image
          src="/images/landingpage/hero/right_Cone.png"
          alt="Yellow 3D Cone"
          width={213}
          height={372}
          className="object-contain w-full h-auto drop-shadow-xl"
          priority
        />
      </div>

      {/* 
        Unified 1440px Artboard Container:
        Keeps the man, the 3 cards (UI/UX, Learning Progress, Happy Students), 
        and the 4 white 3D shapes (torus, white squiggle, pyramid, white spiral)
        locked together with the man on 1440px and wider screens (1920px, 2560px, etc.).
      */}
      <div className="relative w-full max-w-[1440px] mx-auto flex flex-col items-center justify-between flex-1">
        {/* Hero Header Content */}
        <div className="relative z-30 w-full px-4 text-center">
          {/* Main Title - Poppins 600 */}
          <h1 className="font-poppins text-white text-center font-semibold tracking-[-0.01em] text-[26px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.25] sm:leading-[1.2] max-w-[935px] mx-auto">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          {/* Subtitle - Satoshi font-regular 18px */}
          <p className="font-satoshi text-[#E5E6E8] text-center text-[16px] sm:text-[18px] font-normal leading-[1.6] max-w-[819px] mx-auto mt-8 px-4">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar - Stacked on mobile, side-by-side on desktop */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-[581px] mx-auto px-4">
            {/* Input pill */}
            <div className="relative w-full sm:flex-1 flex items-center bg-white rounded-full h-[52px] px-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] focus-within:ring-2 focus-within:ring-[#D4FB20] transition-all">
              <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/landingpage/hero/search_icon.svg"
                  alt="Search Icon"
                  width={24}
                  height={24}
                />
              </div>
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="font-satoshi w-full bg-transparent pl-2.5 pr-2 text-[15px] sm:text-[16px] lg:text-[18px] text-[#242528] placeholder-[#82868E] outline-none"
              />
            </div>

            {/* Search Button */}
            <button
              type="button"
              className="font-satoshi bg-[#D4FB20] hover:bg-[#c2eb0d] active:scale-95 text-[#242528] font-medium text-[15px] sm:text-[16px] lg:text-[18px] h-[46px] px-8 sm:px-6 rounded-full transition-all duration-200 shadow-md cursor-pointer shrink-0 flex items-center justify-center w-auto"
            >
              Search
            </button>
          </div>
        </div>

        {/* Decorative White 3D Shapes - Kept locked with the man inside the 1440px canvas */}
        {/* 2. Left White 3D Squiggle */}
        <div className="hidden sm:block absolute left-[10%] lg:left-[180px] top-[350px] lg:top-[370px] w-[90px] sm:w-[120px] lg:w-[170px] h-auto pointer-events-none z-20 animate-float-reverse">
          <Image
            src="/images/landingpage/hero/left_white_sprial.png"
            alt="White 3D Squiggle"
            width={176}
            height={176}
            className="object-contain w-full h-auto drop-shadow-xl"
            priority
          />
        </div>

        {/* 3. Left Bottom White Torus / Donut - Little bit left and bigger */}
        <div className="absolute left-[-20px] sm:left-[15px] lg:left-[35px] bottom-[-20px] sm:bottom-[15px] lg:bottom-[35px] w-[190px] sm:w-[260px] lg:w-[320px] h-auto pointer-events-none z-20 animate-float-slow">
          <Image
            src="/images/landingpage/hero/left_below_oval.png"
            alt="White 3D Torus"
            width={346}
            height={343}
            className="object-contain w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* 5. Right White 3D Pyramid */}
        <div className="hidden sm:block absolute right-[8%] lg:right-[150px] top-[320px] lg:top-[340px] w-[110px] sm:w-[140px] lg:w-[188px] h-auto pointer-events-none z-20 animate-float-reverse">
          <Image
            src="/images/landingpage/hero/right_white_piramid.png"
            alt="White 3D Pyramid"
            width={189}
            height={189}
            className="object-contain w-full h-auto drop-shadow-xl"
            priority
          />
        </div>

        {/* 6. Right Bottom White 3D Spiral - Little bit right (not too much) */}
        <div className="absolute right-[-20px] sm:right-[5px] lg:right-[0px] bottom-[-20px] sm:bottom-[5px] lg:bottom-[15px] w-[170px] sm:w-[230px] lg:w-[315px] h-auto pointer-events-none z-20 animate-float-slow">
          <Image
            src="/images/landingpage/hero/right_white_spiral.png"
            alt="White 3D Spiral"
            width={317}
            height={332}
            className="object-contain w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Central Visual Composition with Man, Arc, and Floating Cards */}
        <div className="relative w-full h-[480px] sm:h-[530px] lg:h-[555px] flex justify-center items-end mt-4 sm:mt-6 overflow-visible">
          {/* Giant Neon Arc (1149x442) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[680px] sm:w-[920px] lg:w-[1149px] pointer-events-none z-10">
            <Image
              src="/images/landingpage/hero/man_back_side_Ellipse.png"
              alt="Neon Arc"
              width={1149}
              height={442}
              className="w-full h-auto object-contain select-none"
              priority
            />
          </div>

          {/* Central Person holding laptop with headphones */}
          <div className="relative bottom-0 z-20 w-[420px] sm:w-[580px] lg:w-[722px] pointer-events-none select-none">
            <Image
              src="/images/landingpage/hero/central_man.png"
              alt="Student with laptop"
              width={722}
              height={515}
              className="w-full h-auto object-contain select-none"
              priority
            />
          </div>

          {/* Card 1: UI/UX Design - Positioned more left and below on desktop (>= 1440px) */}
          <div className="absolute left-3 sm:left-[16%] lg:left-[24.5%] top-7 sm:top-[20%] lg:top-[29%] hero-ui-card-1024 z-30 pointer-events-auto">
            <div className="bg-white rounded-[14px] sm:rounded-[16px] p-3 sm:p-4 shadow-[0_10px_28px_rgba(0,0,0,0.12)] text-left min-w-[150px] sm:min-w-[195px] lg:min-w-[208px] hover:scale-105 transition-all duration-300 cursor-default">
              <h3 className="font-satoshi text-[#242528] font-semibold sm:font-medium text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.2] tracking-normal">
                UI/UX Design
              </h3>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-2">
                <span className="font-satoshi text-[#82868E] text-[10px] sm:text-[12px] font-normal leading-tight whitespace-nowrap">
                  200 Courses
                </span>
                <span className="font-satoshi text-[#82868E] text-[8px] sm:text-[10px] leading-tight">&bull;</span>
                <span className="font-satoshi text-[#82868E] text-[10px] sm:text-[12px] font-normal leading-tight whitespace-nowrap">
                  1000+ Students
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Learning Progress - Positioned slightly below and left on desktop (>= 1440px) */}
          <div className="absolute right-3 sm:right-[15%] lg:right-[28.5%] top-[26%] sm:top-[22%] lg:top-[30%] hero-learning-card-1024 z-30 pointer-events-auto">
            <div className="bg-white rounded-[14px] sm:rounded-[16px] p-3 sm:p-4 shadow-[0_10px_28px_rgba(0,0,0,0.12)] text-left min-w-[145px] sm:min-w-[200px] lg:min-w-[232px] hover:scale-105 transition-all duration-300 cursor-default">
              <p className="font-satoshi text-[#242528] text-[11px] sm:text-[13px] lg:text-[14px] font-medium leading-[1.2]">
                Learning Progress
              </p>
              <div className="font-poppins text-[28px] sm:text-[36px] lg:text-[48px] font-semibold text-[#242528] leading-none my-1 sm:my-2 tracking-[-0.01em]">
                55%
              </div>
              {/* Progress Bar */}
              <div className="w-full h-1.5 sm:h-2 bg-[#F6F6F6] rounded-full overflow-hidden">
                <div className="h-full bg-[#D4FB20] rounded-full w-[56%]" />
              </div>
            </div>
          </div>

          {/* Card 3: Happy Students - Exact Figma left-[22.8%] bottom-[66px] on 1440px+ */}
          <div className="absolute left-3 sm:left-[12%] lg:left-[22.8%] bottom-3 sm:bottom-[60px] lg:bottom-[66px] z-30 pointer-events-auto">
            <div className="bg-white rounded-[14px] sm:rounded-[16px] p-3 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.14)] text-left min-w-[185px] sm:min-w-[230px] lg:min-w-[258px] hover:scale-105 transition-all duration-300 cursor-default">
              <h3 className="font-satoshi text-[#242528] font-semibold sm:font-medium text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.2]">
                Happy Students
              </h3>
              <div className="flex items-center gap-1.5 mt-1 mb-1.5 sm:mb-2.5 text-[11px] sm:text-[12px]">
                <span className="font-satoshi text-[#82868E] font-normal">
                  4.5 (240)
                </span>
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#D4FB20] text-[#D4FB20]"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              {/* Avatars Strip */}
              <div className="relative w-[165px] sm:w-[210px] lg:w-[232px] h-[30px] sm:h-[38px] lg:h-[43px]">
                <Image
                  src="/images/landingpage/hero/students_avatars.png"
                  alt="Happy Students Avatars"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
