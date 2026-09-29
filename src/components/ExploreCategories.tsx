"use client";

import React from "react";
import Image from "next/image";

export interface CategoryPath {
  id: string;
  name: string;
  icon: string;
}

const CATEGORIES_DATA: CategoryPath[] = [
  {
    id: "cat-design",
    name: "Design",
    icon: "/images/landingpage/categories/icon_design.png",
  },
  {
    id: "cat-development",
    name: "Development",
    icon: "/images/landingpage/categories/icon_development.png",
  },
  {
    id: "cat-it-software",
    name: "IT & Software",
    icon: "/images/landingpage/categories/icon_it_software.png",
  },
  {
    id: "cat-business",
    name: "Business",
    icon: "/images/landingpage/categories/icon_business.png",
  },
  {
    id: "cat-marketing",
    name: "Marketing",
    icon: "/images/landingpage/categories/icon_marketing.png",
  },
  {
    id: "cat-photography",
    name: "Photography",
    icon: "/images/landingpage/categories/icon_photography.png",
  },
];

export default function ExploreCategories() {
  return (
    <section className="w-full bg-white pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-[1202px] mx-auto">
        {/* Section Header - Exact Figma Satoshi 700 48px */}
        <div className="text-center max-w-[917px] mx-auto">
          <h2 className="font-satoshi text-[#141517] text-[32px] sm:text-[40px] lg:text-[36px] font-semibold leading-[1.18] tracking-[-0.02em]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-satoshi text-[#82868E] text-[16px] sm:text-[18px] leading-[1.6] mt-5 max-w-[820px] mx-auto font-normal">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories Grid - Exact Figma 167px x 167px Cards (6 Columns on Desktop) */}
        <div className="mt-14 sm:mt-18 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {CATEGORIES_DATA.map((category) => (
            <div
              key={category.id}
              className="w-full h-[167px] bg-white rounded-[24px] border border-[#E5E6E8] flex flex-col items-center justify-center gap-3.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
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
          ))}
        </div>
      </div>
    </section>
  );
}
