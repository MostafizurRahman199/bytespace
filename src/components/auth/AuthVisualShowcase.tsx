import React from "react";
import Image from "next/image";

interface AuthVisualShowcaseProps {
  mode: "login" | "register";
}

export default function AuthVisualShowcase({ mode }: AuthVisualShowcaseProps) {
  const isLogin = mode === "login";

  return (
    <div className="w-full max-w-[500px] select-none">
      {/* Top Header Text */}
      <div className="mb-8">
        <h1 className="font-satoshi font-bold text-white text-[24px] sm:text-[26px] leading-[1.2] tracking-tight">
          {isLogin ? "Sign in with ease" : "Sign up and come in"}
        </h1>
        <p className="font-satoshi font-normal text-[#E5E6E8] text-[15px] leading-[1.6] mt-3 max-w-[430px]">
          {isLogin
            ? "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
            : "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"}
        </p>
      </div>

      {/* Layered Showcase Composition */}
      <div className="relative w-full max-w-[495px] h-[580px] pointer-events-none">
        {/* 1. Back Course Card ('Build Digital Asset') */}
        <div className="absolute left-0 top-[95px] w-[345px] bg-white rounded-[24px] border border-[#E5E6E8] p-3.5 shadow-md opacity-95 z-10">
          <div className="relative w-full aspect-[341/196] rounded-[16px] overflow-hidden bg-[#F5F5F6]">
            <Image
              src="/images/landingpage/courses/Build_digital_asset_course_2.png"
              alt="Build Digital Asset"
              fill
              className="object-cover"
              priority
            />
            {/* 1 Frosted chip visible on the left side of the back card */}
            <div className="absolute bottom-2.5 left-2 z-10">
              <span className="py-1 px-2.5 rounded-full bg-white/75 backdrop-blur-md text-[#242528] font-satoshi text-[11px] font-medium whitespace-nowrap shadow-sm">
                17 Lessons
              </span>
            </div>
          </div>

          <div className="pt-4 px-1">
            <h3 className="font-satoshi font-bold text-[#000000] text-[20px] leading-[1.25] tracking-[-0.01em] line-clamp-1">
              Build Digital Asset
            </h3>
            <p className="font-satoshi text-[14px] text-[#4F4F4F] mt-1.5 font-normal">
              by <span className="text-[#003BE2] font-normal">purepearl studio</span>
            </p>

            <div className="mt-3.5 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-[#F5F5F6] text-[#5A5D63] px-3 py-1 rounded-full font-satoshi text-[12px] font-medium">
                <svg className="w-3.5 h-3.5 fill-[#5A5D63]" viewBox="0 0 16 16">
                  <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                  <rect x="6.5" y="6.5" width="2.5" height="7.5" rx="0.5" />
                  <rect x="11" y="2.5" width="2.5" height="11.5" rx="0.5" />
                </svg>
                <span>Beginner</span>
              </div>
            </div>

            <div className="pt-3 flex items-baseline">
              <span className="font-satoshi font-bold text-[#003BE2] text-[24px] leading-none">
                $25
              </span>
              <span className="font-satoshi font-normal text-[#4F4F4F] text-[14px] leading-none">
                /lifetime
              </span>
            </div>
          </div>
        </div>

        {/* 2. Top-Left 3D Lime Oval */}
        <div className="absolute left-[49px] top-[40px] w-[105px] h-[104px] z-30 transition-transform duration-700 hover:scale-105">
          <Image
            src="/images/auth/card_top_left_lime_oval.png"
            alt="Lime Oval 3D Shape"
            width={105}
            height={104}
            className="w-full h-auto object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* 3. Main Foreground Course Card ('the Power of Big Data') */}
        <div className="absolute left-[111px] top-0 w-[367px] bg-white rounded-[24px] border border-[#E5E6E8] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.14)] z-20 pointer-events-auto transition-transform duration-300 hover:-translate-y-1">
          {/* Thumbnail Container */}
          <div className="relative w-full aspect-[341/196] rounded-[16px] overflow-hidden bg-[#F5F5F6]">
            <Image
              src="/images/landingpage/courses/power_big_data_course_3.png"
              alt="the Power of Big Data"
              fill
              className="object-cover"
              priority
            />

            {/* 3 Frosted Glass Chips */}
            <div className="absolute bottom-2.5 inset-x-2 flex items-center justify-between gap-1 z-10 pointer-events-none">
              <span className="py-1 px-2 rounded-full bg-white/75 backdrop-blur-md text-[#242528] font-satoshi text-[11px] font-medium whitespace-nowrap shadow-sm">
                17 Lessons
              </span>
              <span className="py-1 px-2 rounded-full bg-white/75 backdrop-blur-md text-[#242528] font-satoshi text-[11px] font-medium whitespace-nowrap shadow-sm">
                2 hours 16 mins
              </span>
              <span className="py-1 px-2 rounded-full bg-white/75 backdrop-blur-md text-[#242528] font-satoshi text-[11px] font-medium whitespace-nowrap shadow-sm">
                59 Comments
              </span>
            </div>
          </div>

          {/* Course Info */}
          <div className="pt-4 px-1">
            {/* Title & Rating */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-satoshi font-bold text-[#000000] text-[20px] leading-[1.25] tracking-[-0.01em] line-clamp-1">
                the Power of Big Data
              </h3>
              <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                <span className="font-satoshi text-[18px] font-normal text-[#4F4F4F] leading-none">
                  4.5
                </span>
                <svg
                  className="w-5 h-5 fill-[#D4FB20] text-[#D4FB20] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>

            {/* Author */}
            <p className="font-satoshi text-[14px] text-[#4F4F4F] mt-1 font-normal">
              by <span className="text-[#003BE2] font-normal">purepearl studio</span>
            </p>

            {/* Level & Avatars Row */}
            <div className="mt-3.5 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-[#F5F5F6] text-[#5A5D63] px-3 py-1.5 rounded-full font-satoshi text-[12px] font-medium shrink-0">
                <svg className="w-3.5 h-3.5 fill-[#5A5D63]" viewBox="0 0 16 16">
                  <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                  <rect x="6.5" y="6.5" width="2.5" height="7.5" rx="0.5" />
                  <rect x="11" y="2.5" width="2.5" height="11.5" rx="0.5" />
                </svg>
                <span>Beginner</span>
              </div>

              <div className="relative w-[115px] h-[30px] shrink-0">
                <Image
                  src="/images/landingpage/courses/avatars_group.png"
                  alt="Enrolled Students"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Price Row */}
            <div className="pt-3.5 mt-1 flex items-baseline">
              <span className="font-satoshi font-bold text-[#003BE2] text-[25px] leading-none tracking-tight">
                $25
              </span>
              <span className="font-satoshi font-normal text-[#4F4F4F] text-[14px] leading-none">
                /lifetime
              </span>
            </div>
          </div>
        </div>

        {/* 4. Bottom-Left 3D Lime Cone */}
        <div className="absolute left-0 top-[418px] w-[128px] h-[127px] z-30 transition-transform duration-700 hover:scale-105">
          <Image
            src="/images/auth/card_bottom_left_lime_cone.png"
            alt="Lime Cone 3D Shape"
            width={128}
            height={127}
            className="w-full h-auto object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* 5. Lime 'Happy Students' Card */}
        <div className="absolute left-[225px] top-[434px] w-[258px] bg-[#D4FB20] rounded-[20px] p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.16)] z-30 pointer-events-auto">
          <h4 className="font-satoshi font-bold text-[#141517] text-[15px] leading-tight">
            Happy Students
          </h4>
          <div className="flex items-center gap-1.5 mt-1 mb-2 text-[12px]">
            <span className="font-satoshi font-normal text-[#141517]">
              4.5 (240)
            </span>
            <svg
              className="w-3.5 h-3.5 fill-[#003BE2] text-[#003BE2]"
              viewBox="0 0 24 24"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div className="relative w-[220px] h-[36px]">
            <Image
              src="/images/landingpage/hero/students_avatars.png"
              alt="Happy Students Avatars"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* 6. Right Bottom 3D White Spiral */}
        <div className="absolute left-[330px] top-[305px] w-[150px] h-[150px] z-40 pointer-events-none transition-transform duration-700 hover:scale-105">
          <Image
            src="/images/auth/card_right_bottom_white_spiral.png"
            alt="White Spiral 3D Shape"
            width={150}
            height={150}
            className="w-full h-auto object-contain drop-shadow-md"
            priority
          />
        </div>
      </div>
    </div>
  );
}
