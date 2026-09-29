"use client";

import React, { useState } from "react";
import CoursesSectionHeader, { CoursesSectionHeaderProps } from "./CoursesSectionHeader";
import CategoryFilter from "./CategoryFilter";
import CoursesGrid from "./CoursesGrid";
import {
  getCoursesForCategory,
  Course,
} from "@/data/coursesData";

export interface CoursesSectionProps {
  headerProps?: CoursesSectionHeaderProps;
  defaultCategory?: string;
  className?: string;
  onCourseClick?: (course: Course) => void;
}

export default function CoursesSection({
  headerProps,
  defaultCategory = "Featured",
  className = "",
  onCourseClick,
}: CoursesSectionProps) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelectCategory = (category: string) => {
    if (category === activeCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false);
    }, 120);
  };

  const courses: Course[] = getCoursesForCategory(activeCategory);

  return (
    <section className={`w-full bg-white pt-20 pb-16 sm:pt-28 sm:pb-24 px-4 sm:px-6 xl:px-8 select-none ${className}`}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <CoursesSectionHeader {...headerProps} />

        {/* Filter Pills */}
        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Courses Grid with Smooth Crossfade */}
        <div
          className={`transition-opacity duration-200 ease-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <CoursesGrid
            courses={courses}
            activeCategory={activeCategory}
            onCourseClick={onCourseClick}
          />
        </div>
      </div>
    </section>
  );
}
