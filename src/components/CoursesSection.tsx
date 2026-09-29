"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CATEGORY_ROWS,
  getCoursesForCategory,
  Course,
} from "@/data/coursesData";

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const EXTRA_CATEGORIES = [
    "AI & Machine Learning",
    "Cybersecurity",
    "Game Design",
    "Mobile Apps",
  ];

  const courses: Course[] = getCoursesForCategory(activeCategory);

  return (
    <section className="w-full bg-white pt-20 pb-16 sm:pt-28 sm:pb-24 px-4 sm:px-6 xl:px-8 select-none">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header - Exact Figma Satoshi 700 48px */}
        <div className="text-center max-w-[917px] mx-auto">
          <h2 className="font-satoshi text-[#141517] text-[34px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.18] tracking-[-0.02em]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="font-satoshi text-[#82868E] text-[16px] sm:text-[18px] leading-[1.6] mt-5 max-w-[820px] mx-auto font-normal">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Filter Pills - Exact Figma 43px height pills */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3.5">
          {CATEGORY_ROWS.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3"
            >
              {row.map((category) => {
                const isMore = category === "+ More";
                const isActive = activeCategory === category;

                if (isMore) {
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setShowMoreCategories((prev) => !prev)}
                      className="font-satoshi text-[#003BE2] hover:text-[#002bb0] font-medium text-[15px] px-3.5 py-2 transition-colors cursor-pointer flex items-center gap-1"
                    >
                      {showMoreCategories ? "- Less" : "+ More"}
                    </button>
                  );
                }

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`font-satoshi text-[15px] h-[43px] px-5 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#D4FB20] text-[#242528] font-medium shadow-sm"
                        : "bg-[#F5F5F6] hover:bg-[#EAEBED] text-[#4B4C53] font-normal"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          ))}

          {/* Expandable Extra Categories */}
          {showMoreCategories && (
            <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 pt-1 transition-all duration-300 animate-in fade-in">
              {EXTRA_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`font-satoshi text-[15px] h-[43px] px-5 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#D4FB20] text-[#242528] font-medium shadow-sm"
                        : "bg-[#F5F5F6] hover:bg-[#EAEBED] text-[#4B4C53] font-normal"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Courses Grid - 3 Columns with responsive gap matching Figma 1199px x 808px */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-[1140px]:gap-7 xl:gap-10">
          {courses.map((course) => (
            <div
              key={`${activeCategory}-${course.id}`}
              className="bg-white rounded-[24px] border border-[#E5E6E8] p-3.5 xl:p-4 flex flex-col justify-between hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer animate-in fade-in duration-300"
            >
              {/* Thumbnail Container (341x196) */}
              <div>
                <div className="relative w-full aspect-[341/196] rounded-[16px] overflow-hidden bg-[#F5F5F6]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 373px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={activeCategory === "Featured"}
                  />

                  {/* 3 Frosted Glass Chips Floating Over the Bottom of the Image (Exact Figma) */}
                  <div className="absolute bottom-2.5 sm:bottom-3 inset-x-1.5 sm:inset-x-2 xl:inset-x-2.5 flex items-center justify-between gap-1 z-10 pointer-events-none">
                    <span className="text-center py-1 sm:py-1.5 px-1.5 sm:px-2 xl:px-2.5 rounded-full bg-white/75 backdrop-blur-md text-[#242528] font-satoshi text-[10px] min-[1120px]:text-[11px] xl:text-[12px] font-medium whitespace-nowrap shadow-sm">
                      {course.lessons} Lessons
                    </span>
                    <span className="text-center py-1 sm:py-1.5 px-1.5 sm:px-2 xl:px-2.5 rounded-full bg-white/75 backdrop-blur-md text-[#242528] font-satoshi text-[10px] min-[1120px]:text-[11px] xl:text-[12px] font-medium whitespace-nowrap shadow-sm">
                      {course.duration}
                    </span>
                    <span className="text-center py-1 sm:py-1.5 px-1.5 sm:px-2 xl:px-2.5 rounded-full bg-white/75 backdrop-blur-md text-[#242528] font-satoshi text-[10px] min-[1120px]:text-[11px] xl:text-[12px] font-medium whitespace-nowrap shadow-sm">
                      {course.comments} Comments
                    </span>
                  </div>
                </div>

                {/* Course Info */}
                <div className="pt-5 px-1">
                  {/* Title and Rating - Exact Figma Satoshi 20px / 18px */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-satoshi font-bold text-[#000000] text-[20px] leading-[1.25] tracking-[-0.01em] line-clamp-1 group-hover:text-[#003BE2] transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                      <span className="font-satoshi text-[18px] font-normal text-[#4F4F4F] leading-none">
                        {course.rating}
                      </span>
                      <svg
                        className="w-5 h-5 fill-[#CED0D3] text-[#CED0D3] shrink-0"
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
                      {course.author}
                    </span>
                  </p>

                  {/* Level & Avatars Row */}
                  <div className="mt-4 flex items-center gap-3">
                    {/* Level Pill - Exact Figma Satoshi 500 13px */}
                    <div className="inline-flex items-center gap-2 bg-[#F5F5F6] text-[#5A5D63] px-3.5 py-1.5 rounded-full font-satoshi text-[13px] font-medium shrink-0">
                      {/* Signal 3-bar icon */}
                      <svg className="w-3.5 h-3.5 fill-[#5A5D63]" viewBox="0 0 16 16">
                        <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                        <rect x="6.5" y="6.5" width="2.5" height="7.5" rx="0.5" />
                        <rect x="11" y="2.5" width="2.5" height="11.5" rx="0.5" />
                      </svg>
                      <span>{course.level}</span>
                    </div>

                    {/* Students Avatars Stack */}
                    <div className="relative w-[115px] h-[30px] shrink-0">
                      <Image
                        src="/images/landingpage/courses/avatars_group.png"
                        alt="Enrolled Students"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Row - Exact Figma: no space between $price and /lifetime */}
              <div className="pt-4 mt-1 px-1 flex items-baseline">
                <span className="font-satoshi font-bold text-[#003BE2] text-[24px] sm:text-[26px] leading-none tracking-tight">
                  ${course.price}
                </span><span className="font-satoshi font-normal text-[#4F4F4F] text-[14px] leading-none">/lifetime</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

