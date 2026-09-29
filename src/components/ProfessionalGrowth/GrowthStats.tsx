import React from "react";

export interface StatItem {
  value: string;
  label: string;
}

export const STATS_DATA: StatItem[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export interface GrowthStatsProps {
  stats?: StatItem[];
  className?: string;
}

export default function GrowthStats({
  stats = STATS_DATA,
  className = "",
}: GrowthStatsProps) {
  return (
    <div className={`flex items-center gap-6 sm:gap-10 lg:gap-8 xl:gap-14 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col">
          <span className="font-poppins font-medium text-[#003BE2] text-[26px] sm:text-[30px] xl:text-[36px] leading-none tracking-tight">
            {stat.value}
          </span>
          <span className="font-satoshi text-[#4B4C53] text-[14px] sm:text-[16px] xl:text-[18px] mt-2 font-normal">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
