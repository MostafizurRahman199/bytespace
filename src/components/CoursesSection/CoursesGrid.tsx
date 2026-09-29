import React from "react";
import CourseCard from "./CourseCard";
import { Course } from "@/data/coursesData";

export interface CoursesGridProps {
  courses: Course[];
  activeCategory?: string;
  className?: string;
  onCourseClick?: (course: Course) => void;
}

export default function CoursesGrid({
  courses,
  activeCategory = "Featured",
  className = "",
  onCourseClick,
}: CoursesGridProps) {
  return (
    <div
      className={`mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-[1140px]:gap-7 xl:gap-10 ${className}`}
    >
      {courses.map((course, index) => (
        <CourseCard
          key={`${activeCategory}-${course.id}`}
          course={course}
          index={index}
          priority={activeCategory === "Featured"}
          onClick={() => onCourseClick?.(course)}
        />
      ))}
    </div>
  );
}
