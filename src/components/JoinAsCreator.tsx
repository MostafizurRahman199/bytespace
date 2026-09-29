"use client";

import React from "react";
import Image from "next/image";

export default function JoinAsCreator() {
  return (
    <section className="relative w-full bg-[#003be2] bytespace-grid-bg overflow-hidden py-16 sm:py-20 lg:py-[94px] select-none">
      {/* 
        Decorative 3D Shapes (7 Elements from Figma):
        - Left Side:
          1. left_top_lime_spiral
          2. left_top_white_spiral
          3. left_middle_white_Cone
          4. left_bottom_lime_oval
        - Right Side:
          5. right_top_lime_piramid
          6. right_most_whhite_cone
          7. right_bottom_lime_spiral
      */}

      {/* 1. Left Top Lime Spiral */}
      <div className="absolute left-[-20px] sm:left-0 top-[-25px] sm:top-0 w-[110px] sm:w-[180px] lg:w-[267px] pointer-events-none z-10 animate-float-slow">
        <Image
          src="/images/landingpage/join-as-creator/left_top_lime_spiral.png"
          alt="Lime 3D Spiral"
          width={267}
          height={225}
          className="w-full h-auto object-contain drop-shadow-xl"
          priority
        />
      </div>

      {/* 2. Left Top White Squiggle / Spiral - Displayed on xl+ (1280px/1440px) to prevent overlap at 1024px */}
      <div className="hidden xl:block absolute xl:left-[207px] xl:top-[73px] w-[177px] pointer-events-none z-10 animate-float-reverse">
        <Image
          src="/images/landingpage/join-as-creator/left_top_white_spiral.png"
          alt="White 3D Squiggle"
          width={177}
          height={176}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* 3. Left Middle White Cone - Hidden on mobile view, visible on sm+ */}
      <div className="hidden sm:block absolute left-0 top-[190px] lg:top-[225px] w-[80px] sm:w-[105px] lg:w-[140px] pointer-events-none z-10 animate-float-slow">
        <Image
          src="/images/landingpage/join-as-creator/left_middle_white_Cone.png"
          alt="White 3D Cone"
          width={140}
          height={189}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* 4. Left Bottom Lime Torus / Ring */}
      <div className="absolute left-[-15px] sm:left-[20px] lg:left-[43px] bottom-[-30px] sm:bottom-[-20px] lg:bottom-[-20px] w-[150px] sm:w-[240px] lg:w-[346px] pointer-events-none z-10 animate-float-reverse">
        <Image
          src="/images/landingpage/join-as-creator/left_bottom_lime_oval.png"
          alt="Lime 3D Ring"
          width={346}
          height={190}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 5. Right Top Lime Pyramid - Displayed on xl+ (1280px/1440px) to prevent overlap at 1024px */}
      <div className="hidden xl:block absolute xl:right-[230px] xl:top-[21px] w-[190px] pointer-events-none z-10 animate-float-slow">
        <Image
          src="/images/landingpage/join-as-creator/right_top_lime_piramid.png"
          alt="Lime 3D Pyramid"
          width={190}
          height={189}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* 6. Right Most White Cylinder / Cone - Hidden on mobile view, visible on sm+ */}
      <div className="hidden sm:block absolute right-[-20px] sm:right-0 top-[25px] lg:top-[40px] w-[120px] sm:w-[165px] lg:w-[218px] pointer-events-none z-10 animate-float-reverse">
        <Image
          src="/images/landingpage/join-as-creator/right_most_whhite_cone.png"
          alt="White 3D Shape"
          width={218}
          height={372}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 7. Right Bottom Lime Spiral */}
      <div className="absolute right-[-15px] sm:right-[15px] lg:right-[35px] bottom-[-25px] sm:bottom-[-15px] lg:bottom-[-10px] w-[140px] sm:w-[220px] lg:w-[334px] pointer-events-none z-10 animate-float-slow">
        <Image
          src="/images/landingpage/join-as-creator/right_bottom_lime_spiral.png"
          alt="Lime 3D Spiral Coil"
          width={334}
          height={199}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Central Content Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px] flex flex-col items-center text-center">
        {/* Title - Poppins SemiBold 44px, line-height 120%, letter-spacing -1%, White */}
        <h2 className="font-poppins text-white text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] max-w-[620px] mx-auto">
          Unlock Your Potential as a
          <br className="hidden sm:inline" />{" "}
          Creator with ByteSpace
        </h2>

        {/* Subtitle - Satoshi font-thin (font-weight: 100) 18px #E5E6E8 */}
        <p className="font-satoshi text-[#E5E6E8] text-[15px] sm:text-[16px] xl:text-[18px] font-thin leading-[1.6] max-w-[880px] mx-auto mt-5 sm:mt-6 px-2">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* Action Button - Exact Figma 46px height pill button */}
        <div className="mt-7 sm:mt-8">
          <button
            type="button"
            className="font-satoshi bg-[#D4FB20] hover:bg-[#c2eb0d] active:scale-95 text-[#242528] font-medium text-[15px] sm:text-[16px] h-[46px] px-8 rounded-full transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}
