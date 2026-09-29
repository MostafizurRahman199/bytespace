"use client";

import React from "react";
import ExploreCategoriesHeader from "./ExploreCategoriesHeader";
import CategoriesGrid from "./CategoriesGrid";
import { CategoryPath, CATEGORIES_DATA } from "./types";

export interface ExploreCategoriesProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  categories?: CategoryPath[];
  onCategoryClick?: (category: CategoryPath) => void;
  className?: string;
  containerClassName?: string;
}

export default function ExploreCategories({
  title,
  subtitle,
  categories = CATEGORIES_DATA,
  onCategoryClick,
  className = "",
  containerClassName = "",
}: ExploreCategoriesProps) {
  return (
    <section
      className={`w-full bg-white pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 select-none ${className}`}
    >
      <div className={`max-w-[1202px] mx-auto ${containerClassName}`}>
        <ExploreCategoriesHeader title={title} subtitle={subtitle} />
        <CategoriesGrid
          categories={categories}
          onCategoryClick={onCategoryClick}
        />
      </div>
    </section>
  );
}
