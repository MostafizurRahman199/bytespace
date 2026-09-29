"use client";

import React from "react";
import Image from "next/image";
import { CategoryPath } from "./types";

export interface CategoryCardProps {
  category: CategoryPath;
  onClick?: (category: CategoryPath) => void;
  className?: string;
}

export default function CategoryCard({
  category,
  onClick,
  className = "",
}: CategoryCardProps) {
  return (
    <div
      onClick={() => onClick?.(category)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.(category);
        }
      }}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`w-full h-[167px] bg-white rounded-[24px] border border-[#E5E6E8] flex flex-col items-center justify-center gap-3.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer ${className}`}
    >
      {/* Category Icon Circle (60x60) */}
      <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={category.icon}
          alt={category.name}
          width={60}
          height={60}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Category Title - Exact Figma Satoshi 500 20px */}
      <span className="font-satoshi font-medium text-[#141517] text-[18px] sm:text-[20px] text-center leading-tight tracking-tight group-hover:text-[#003BE2] transition-colors">
        {category.name}
      </span>
    </div>
  );
}
