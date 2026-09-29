"use client";

import React from "react";
import CategoryCard from "./CategoryCard";
import { CategoryPath, CATEGORIES_DATA } from "./types";

export interface CategoriesGridProps {
  categories?: CategoryPath[];
  onCategoryClick?: (category: CategoryPath) => void;
  className?: string;
  renderCard?: (category: CategoryPath) => React.ReactNode;
}

export default function CategoriesGrid({
  categories = CATEGORIES_DATA,
  onCategoryClick,
  className = "",
  renderCard,
}: CategoriesGridProps) {
  return (
    <div
      className={`mt-14 sm:mt-18 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 ${className}`}
    >
      {categories.map((category) =>
        renderCard ? (
          renderCard(category)
        ) : (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={onCategoryClick}
          />
        )
      )}
    </div>
  );
}
