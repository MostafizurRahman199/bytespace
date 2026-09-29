import React from "react";
import Image from "next/image";

interface AuthVisualShowcaseProps {
  mode: "login" | "register";
}

// 7 diverse high-resolution student portrait avatars from Unsplash for Happy Students card
const HAPPY_STUDENT_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
];

// 4 Unsplash student avatars for course card
const COURSE_ENROLLED_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
];

export default function AuthVisualShowcase({ mode }: AuthVisualShowcaseProps) {
  const isLogin = mode === "login";

  return (
    <div className="w-full max-w-[500px] select-none">
      {/* Top Header Text */}
      <div className="mb-8">
        <h1 className="font-satoshi font-bold text-white text-[20px] sm:text-[20px] leading-[1.2] tracking-tight">
          {isLogin ? "Sign in with ease" : "Sign up and come in"}
        </h1>
        <p className="font-satoshi font-normal text-[#E5E6E8] text-[18px] leading-[1.6] mt-3 max-w-[475px]">
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
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80"
              alt="Build Digital Asset"
              fill
              sizes="345px"
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

            <div className="mt-4 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-[#F5F5F6] text-[#5A5D63] px-3.5 py-1.5 rounded-full font-satoshi text-[13px] font-medium shrink-0">
                <svg className="w-3.5 h-3.5 fill-[#5A5D63]" viewBox="0 0 16 16">
                  <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                  <rect x="6.5" y="6.5" width="2.5" height="7.5" rx="0.5" />
                  <rect x="11" y="2.5" width="2.5" height="11.5" rx="0.5" />
                </svg>
                <span>Beginner</span>
              </div>
            </div>

            <div className="pt-4 mt-1 px-1 flex items-baseline">
              <span className="font-satoshi font-bold text-[#003BE2] text-[24px] sm:text-[26px] leading-none tracking-tight">
                $25
              </span><span className="font-satoshi font-normal text-[#4F4F4F] text-[14px] leading-none">/lifetime</span>
            </div>
          </div>
        </div>

        {/* 2. Top-Left 3D Lime Oval */}
        <div className="absolute left-[38px] top-[30px] w-[130px] h-[129px] z-30 transition-transform duration-500 hover:scale-110 cursor-pointer pointer-events-auto">
          <Image
            src="/images/auth/card_top_left_lime_oval.png"
            alt="Lime Oval 3D Shape"
            width={130}
            height={129}
            className="w-full h-auto object-contain drop-shadow-lg animate-float-shape-1"
            priority
          />
        </div>

        {/* 3. Main Foreground Course Card ('the Power of Big Data') - 100% Exact Figma & CoursesSection */}
        <div className="absolute left-[111px] top-0 w-[367px] bg-white rounded-[24px] border border-[#E5E6E8] p-3.5 xl:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_42px_rgba(0,0,0,0.16)] transition-all duration-300 group z-20 pointer-events-auto">
          {/* Thumbnail Container (341x196) with Unsplash Analytics Dashboard */}
          <div>
            <div className="relative w-full aspect-[341/196] rounded-[16px] overflow-hidden bg-[#F5F5F6]">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80"
                alt="the Power of Big Data"
                fill
                sizes="367px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* 3 Frosted Glass Chips Floating Over the Bottom of the Image (Exact Figma) */}
              <div className="absolute bottom-2.5 sm:bottom-3 inset-x-1.5 sm:inset-x-2 xl:inset-x-2.5 flex items-center justify-between gap-1 z-10 pointer-events-none">
                <span className="text-center py-1 sm:py-1.5 px-1.5 sm:px-2 xl:px-2.5 rounded-full bg-white/75 backdrop-blur-md text-[#242528] font-satoshi text-[10px] min-[1120px]:text-[11px] xl:text-[12px] font-medium whitespace-nowrap shadow-sm">
                  17 Lessons
                </span>
                <span className="text-center py-1 sm:py-1.5 px-1.5 sm:px-2 xl:px-2.5 rounded-full bg-white/75 backdrop-blur-md text-[#242528] font-satoshi text-[10px] min-[1120px]:text-[11px] xl:text-[12px] font-medium whitespace-nowrap shadow-sm">
                  2 hours 16 mins
                </span>
                <span className="text-center py-1 sm:py-1.5 px-1.5 sm:px-2 xl:px-2.5 rounded-full bg-white/75 backdrop-blur-md text-[#242528] font-satoshi text-[10px] min-[1120px]:text-[11px] xl:text-[12px] font-medium whitespace-nowrap shadow-sm">
                  59 Comments
                </span>
              </div>
            </div>

            {/* Course Info */}
            <div className="pt-5 px-1">
              {/* Title and Rating - Exact Figma Satoshi 20px / 18px */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-satoshi font-bold text-[#000000] text-[20px] leading-[1.25] tracking-[-0.01em] line-clamp-1 group-hover:text-[#003BE2] transition-colors">
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

              {/* Author - Exact Figma Satoshi 14px */}
              <p className="font-satoshi text-[14px] text-[#4F4F4F] mt-1.5 font-normal">
                by{" "}
                <span className="text-[#003BE2] font-normal">
                  purepearl studio
                </span>
              </p>

              {/* Level & Avatars Row - Exact Figma & CoursesSection size: w-[115px] h-[30px] */}
              <div className="mt-4 flex items-center gap-3">
                {/* Level Pill */}
                <div className="inline-flex items-center gap-2 bg-[#F5F5F6] text-[#5A5D63] px-3.5 py-1.5 rounded-full font-satoshi text-[13px] font-medium shrink-0">
                  <svg className="w-3.5 h-3.5 fill-[#5A5D63]" viewBox="0 0 16 16">
                    <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                    <rect x="6.5" y="6.5" width="2.5" height="7.5" rx="0.5" />
                    <rect x="11" y="2.5" width="2.5" height="11.5" rx="0.5" />
                  </svg>
                  <span>Beginner</span>
                </div>

                {/* Students Avatars Stack - 4 Unsplash avatars (w 32, h 32) + 26+ */}
                <div className="flex items-center shrink-0">
                  {COURSE_ENROLLED_AVATARS.map((avatar, idx) => (
                    <div
                      key={`course-avatar-${idx}`}
                      className="relative w-[32px] h-[32px] rounded-full border-2 border-white overflow-hidden -ml-2 first:ml-0 shrink-0 shadow-xs"
                      style={{ zIndex: idx + 1 }}
                    >
                      <Image
                        src={avatar}
                        alt={`Enrolled student ${idx + 1}`}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  {/* 26+ Counter Badge */}
                  <div
                    className="relative w-[32px] h-[32px] rounded-full bg-[#141517] text-white font-satoshi text-[11px] font-bold flex items-center justify-center border-2 border-white -ml-2 shrink-0 z-10 shadow-xs"
                  >
                    26+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Row - Exact Figma: no space between $price and /lifetime */}
          <div className="pt-4 mt-1 px-1 flex items-baseline">
            <span className="font-satoshi font-bold text-[#003BE2] text-[24px] sm:text-[26px] leading-none tracking-tight">
              $25
            </span><span className="font-satoshi font-normal text-[#4F4F4F] text-[14px] leading-none">/lifetime</span>
          </div>
        </div>

        {/* 4. Bottom-Left 3D Lime Cone */}
        <div className="absolute -left-2.8 top-[400px] w-[180px] h-[180px] z-30 transition-transform duration-500 hover:scale-110 cursor-pointer pointer-events-auto">
          <Image
            src="/images/auth/card_bottom_left_lime_cone.png"
            alt="Lime Cone 3D Shape"
            width={180}
            height={180}
            className="w-full h-auto object-contain drop-shadow-lg animate-float-shape-2"
            priority
          />
        </div>

        {/* 5. Lime 'Happy Students' Card - Exact Figma width 258px, 7 avatars + 2K+ badge spanning 232px width */}
        <div className="absolute left-[225px] top-[434px] w-[258px] bg-[#D4FB20] rounded-[20px] p-4 shadow-[0_12px_32px_rgba(0,0,0,0.16)] z-30 pointer-events-auto">
          <h4 className="font-satoshi font-bold text-[#141517] text-[15px] leading-tight">
            Happy Students
          </h4>
          <div className="flex items-center gap-1.5 mt-1 mb-2.5 text-[12px]">
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

          {/* Real Avatar Stack using Unsplash avatars */}
          <div className="flex items-center w-full">
            {HAPPY_STUDENT_AVATARS.map((avatar, idx) => (
              <div
                key={`happy-student-avatar-${idx}`}
                className="relative w-[43px] h-[43px] rounded-full overflow-hidden -ml-3 first:ml-0 shrink-0 shadow-xs"
                style={{ zIndex: idx + 1 }}
              >
                <Image
                  src={avatar}
                  alt={`Student ${idx + 1}`}
                  fill
                  sizes="43px"
                  className="object-cover"
                />
              </div>
            ))}
            {/* 2K+ Counter Badge matching avatar circle size */}
            <div
              className="relative w-[43px] h-[43px] rounded-full bg-[#141517] text-white font-satoshi text-[11px] font-bold flex items-center justify-center -ml-3 shrink-0 z-10 shadow-xs"
            >
              2K+
            </div>
          </div>
        </div>

        {/* 6. Right Bottom 3D White Spiral */}
        <div className="absolute left-[335px] top-[315px] w-[185px] h-[184px] z-40 transition-transform duration-500 hover:scale-110 cursor-pointer pointer-events-auto">
          <Image
            src="/images/auth/card_right_bottom_white_spiral.png"
            alt="White Spiral 3D Shape"
            width={185}
            height={184}
            className="w-full h-auto object-contain drop-shadow-md animate-float-shape-3"
            priority
          />
        </div>
      </div>
    </div>
  );
}
