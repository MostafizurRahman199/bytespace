import React from "react";
import Image from "next/image";
import { Course } from "@/data/coursesData";

export interface CourseCardProps {
  course: Course;
  index?: number;
  priority?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function CourseCard({
  course,
  index = 0,
  priority = false,
  className = "",
  onClick,
}: CourseCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
      className={`bg-white rounded-[24px] border border-[#E5E6E8] p-3.5 xl:p-4 flex flex-col justify-between hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer animate-card-fade-in ${className}`}
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
            priority={priority}
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
        </span>
        <span className="font-satoshi font-normal text-[#4F4F4F] text-[14px] leading-none">
          /lifetime
        </span>
      </div>
    </div>
  );
}
