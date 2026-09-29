"use client";

import React, { useState } from "react";
import { CATEGORY_ROWS } from "@/data/coursesData";

export interface CategoryFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  rows?: string[][];
  extraCategories?: string[];
  className?: string;
}

const DEFAULT_EXTRA_CATEGORIES = [
  "AI & Machine Learning",
  "Cybersecurity",
  "Game Design",
  "Mobile Apps",
];

export default function CategoryFilter({
  activeCategory,
  onSelectCategory,
  rows = CATEGORY_ROWS,
  extraCategories = DEFAULT_EXTRA_CATEGORIES,
  className = "",
}: CategoryFilterProps) {
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  return (
    <div className={`mt-10 sm:mt-12 flex flex-col items-center gap-3.5 ${className}`}>
      {rows.map((row, rowIndex) => (
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
                onClick={() => onSelectCategory(category)}
                className={`font-satoshi text-[15px] font-medium h-[43px] px-5 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#D4FB20] text-[#242528] shadow-sm"
                    : "bg-[#F5F5F6] hover:bg-[#EAEBED] text-[#4B4C53]"
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
          {extraCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onSelectCategory(category)}
                className={`font-satoshi text-[15px] font-medium h-[43px] px-5 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#D4FB20] text-[#242528] shadow-sm"
                    : "bg-[#F5F5F6] hover:bg-[#EAEBED] text-[#4B4C53]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
