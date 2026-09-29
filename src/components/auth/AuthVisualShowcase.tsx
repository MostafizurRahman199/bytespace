"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { COURSES_BY_CATEGORY, Course } from "@/components/CoursesSection";

interface AuthVisualShowcaseProps {
  mode: "login" | "register";
}

// 7 diverse high-resolution student portrait avatars from Unsplash for Happy Students card
// Perfectly centered portraits with generous padding to prevent edge cropping
const HAPPY_STUDENT_AVATARS = [
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
];

// 4 Unsplash student avatars for course card enrolled list
// Perfectly centered portrait for first avatar so it never looks cropped on the left
const COURSE_ENROLLED_AVATARS = [
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
];

export default function AuthVisualShowcase({ mode }: AuthVisualShowcaseProps) {
  const isLogin = mode === "login";

  // Take courses data from CoursesSection
  const courses: Course[] = COURSES_BY_CATEGORY["Featured"] || [];
  const total = courses.length;

  // Start with index 2 ("the Power of Big Data" in front, "Balancing Productivity" in back)
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  // Swipe / Drag tracking
  const touchStartX = useRef<number | null>(null);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Smooth Auto-Rotate Timer (4 seconds, pauses on hover)
  useEffect(() => {
    if (isPaused || total <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext, total, activeIndex]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Compute 3D stacked deck transform & styles for each course card
  const getCardStyle = (offset: number): React.CSSProperties => {
    const isFront = offset === 0;
    const isBack = offset === 1;
    const isExited = offset === total - 1;
    const isPreEntry = offset === 2;

    if (isFront) {
      return {
        transform: "translate3d(111px, 0px, 0px) scale(1)",
        transformOrigin: "top left",
        zIndex: 20,
        opacity: 1,
        pointerEvents: "auto",
        boxShadow: "0 16px 36px rgba(0,0,0,0.12)",
        transition:
          "transform 700ms cubic-bezier(0.25, 1, 0.5, 1), opacity 650ms ease, box-shadow 500ms ease",
      };
    }

    if (isBack) {
      return {
        transform: "translate3d(0px, 95px, 0px) scale(0.94)",
        transformOrigin: "top left",
        zIndex: 10,
        opacity: 0.95,
        pointerEvents: "auto",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        transition:
          "transform 700ms cubic-bezier(0.25, 1, 0.5, 1), opacity 650ms ease, box-shadow 500ms ease",
      };
    }

    if (isExited) {
      return {
        transform: "translate3d(175px, -35px, 0px) rotate(4deg) scale(0.92)",
        transformOrigin: "top left",
        zIndex: 25,
        opacity: 0,
        pointerEvents: "none",
        transition:
          "transform 700ms cubic-bezier(0.25, 1, 0.5, 1), opacity 650ms ease",
      };
    }

    if (isPreEntry) {
      return {
        transform: "translate3d(-35px, 140px, 0px) scale(0.88)",
        transformOrigin: "top left",
        zIndex: 5,
        opacity: 0,
        pointerEvents: "none",
        transition:
          "transform 700ms cubic-bezier(0.25, 1, 0.5, 1), opacity 650ms ease",
      };
    }

    return {
      transform: "translate3d(-35px, 140px, 0px) scale(0.88)",
      transformOrigin: "top left",
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      visibility: "hidden",
      transition: "none",
    };
  };

  return (
    <div
      className="w-full max-w-[500px] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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
      <div className="relative w-full max-w-[495px] h-[580px]">
        {/* 1. Stacked Course Cards Slider (Auto-Rotating Deck) */}
        {courses.map((course, index) => {
          const offset = (index - activeIndex + total) % total;
          const isFront = offset === 0;
          const isBack = offset === 1;

          return (
            <div
              key={course.id}
              style={getCardStyle(offset)}
              onClick={() => {
                if (isBack) {
                  handleNext();
                }
              }}
              className={`absolute left-0 top-0 w-[367px] bg-white rounded-[24px] border border-[#E5E6E8] p-3.5 xl:p-4 select-none ${
                isFront
                  ? "group cursor-default"
                  : isBack
                  ? "group/back cursor-pointer hover:border-[#003BE2]/40"
                  : ""
              }`}
            >
              {/* Back Card "Click to view" Floating Pill */}
              {isBack && (
                <div className="absolute -top-2.5 right-6 z-20 opacity-0 group-hover/back:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <span className="py-1 px-3 rounded-full bg-[#003BE2] text-white font-satoshi text-[11px] font-medium shadow-md">
                    Next course →
                  </span>
                </div>
              )}

              {/* Thumbnail Container (341x196) */}
              <div>
                <div className="relative w-full aspect-[341/196] rounded-[16px] overflow-hidden bg-[#F5F5F6]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="367px"
                    className={`object-cover transition-transform duration-500 ${
                      isFront ? "group-hover:scale-105" : ""
                    }`}
                    priority={isFront || isBack}
                  />

                  {/* Frosted Glass Chips */}
                  <div className="absolute bottom-2.5 sm:bottom-3 inset-x-1.5 sm:inset-x-2 xl:inset-x-2.5 flex items-center justify-between gap-1 z-10 pointer-events-none">
                    {/* Chip 1: Lessons (always visible) */}
                    <span className="text-center py-1 sm:py-1.5 px-1.5 sm:px-2 xl:px-2.5 rounded-full bg-white/80 backdrop-blur-md text-[#242528] font-satoshi text-[10px] min-[1120px]:text-[11px] xl:text-[12px] font-medium whitespace-nowrap shadow-xs">
                      {course.lessons} Lessons
                    </span>

                    {/* Chip 2: Duration (gracefully transitions with card) */}
                    <span
                      className={`text-center py-1 sm:py-1.5 px-1.5 sm:px-2 xl:px-2.5 rounded-full bg-white/80 backdrop-blur-md text-[#242528] font-satoshi text-[10px] min-[1120px]:text-[11px] xl:text-[12px] font-medium whitespace-nowrap shadow-xs transition-opacity duration-300 ${
                        isFront ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {course.duration}
                    </span>

                    {/* Chip 3: Comments (gracefully transitions with card) */}
                    <span
                      className={`text-center py-1 sm:py-1.5 px-1.5 sm:px-2 xl:px-2.5 rounded-full bg-white/80 backdrop-blur-md text-[#242528] font-satoshi text-[10px] min-[1120px]:text-[11px] xl:text-[12px] font-medium whitespace-nowrap shadow-xs transition-opacity duration-300 ${
                        isFront ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {course.comments} Comments
                    </span>
                  </div>
                </div>

                {/* Course Info */}
                <div className="pt-5 px-1">
                  {/* Title and Rating - Exact Satoshi typography */}
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className={`font-satoshi font-bold text-[#000000] text-[20px] leading-[1.25] tracking-[-0.01em] line-clamp-1 transition-colors ${
                        isFront ? "group-hover:text-[#003BE2]" : ""
                      }`}
                    >
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                      <span className="font-satoshi text-[18px] font-normal text-[#4F4F4F] leading-none">
                        {course.rating}
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
                  <p className="font-satoshi text-[14px] text-[#4F4F4F] mt-1.5 font-normal">
                    by{" "}
                    <span className="text-[#003BE2] font-normal">
                      {course.author}
                    </span>
                  </p>

                  {/* Level & Avatars Row */}
                  <div className="mt-4 flex items-center gap-3">
                    {/* Level Pill */}
                    <div className="inline-flex items-center gap-2 bg-[#F5F5F6] text-[#5A5D63] px-3.5 py-1.5 rounded-full font-satoshi text-[13px] font-medium shrink-0">
                      <svg
                        className="w-3.5 h-3.5 fill-[#5A5D63]"
                        viewBox="0 0 16 16"
                      >
                        <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                        <rect
                          x="6.5"
                          y="6.5"
                          width="2.5"
                          height="7.5"
                          rx="0.5"
                        />
                        <rect
                          x="11"
                          y="2.5"
                          width="2.5"
                          height="11.5"
                          rx="0.5"
                        />
                      </svg>
                      <span>{course.level}</span>
                    </div>

                    {/* Students Avatars Stack - First avatar has ml-0 and centered image */}
                    <div className="flex items-center shrink-0">
                      {COURSE_ENROLLED_AVATARS.map((avatar, idx) => (
                        <div
                          key={`course-avatar-${course.id}-${idx}`}
                          className={`relative w-[32px] h-[32px] rounded-full border-2 border-white overflow-hidden shrink-0 shadow-xs ${
                            idx === 0 ? "ml-0" : "-ml-2"
                          }`}
                          style={{ zIndex: idx + 1 }}
                        >
                          <Image
                            src={avatar}
                            alt={`Enrolled student ${idx + 1}`}
                            fill
                            sizes="32px"
                            className="object-cover object-center"
                          />
                        </div>
                      ))}
                      {/* 26+ Counter Badge */}
                      <div className="relative w-[32px] h-[32px] rounded-full bg-[#141517] text-white font-satoshi text-[11px] font-bold flex items-center justify-center border-2 border-white -ml-2 shrink-0 z-10 shadow-xs">
                        26+
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Row */}
              <div className="pt-4 mt-1 px-1 flex items-baseline justify-between">
                <div>
                  <span className="font-satoshi font-bold text-[#003BE2] text-[24px] sm:text-[26px] leading-none tracking-tight">
                    ${course.price}
                  </span>
                  <span className="font-satoshi font-normal text-[#4F4F4F] text-[14px] leading-none">
                    /lifetime
                  </span>
                </div>
                <span className="font-satoshi text-[12px] font-medium text-[#7D8187] bg-[#F5F5F6] px-2.5 py-1 rounded-full">
                  {course.category}
                </span>
              </div>
            </div>
          );
        })}

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

        {/* 3. Bottom-Left 3D Lime Cone */}
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

        {/* 4. Lime 'Happy Students' Card - Exact Figma width 258px */}
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
                className={`relative w-[43px] h-[43px] rounded-full overflow-hidden shrink-0 shadow-xs ${
                  idx === 0 ? "ml-0" : "-ml-3"
                }`}
                style={{ zIndex: idx + 1 }}
              >
                <Image
                  src={avatar}
                  alt={`Student ${idx + 1}`}
                  fill
                  sizes="43px"
                  className="object-cover object-center"
                />
              </div>
            ))}
            {/* 2K+ Counter Badge matching avatar circle size */}
            <div className="relative w-[43px] h-[43px] rounded-full bg-[#141517] text-white font-satoshi text-[11px] font-bold flex items-center justify-center -ml-3 shrink-0 z-10 shadow-xs">
              2K+
            </div>
          </div>
        </div>

        {/* 5. Right Bottom 3D White Spiral */}
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
