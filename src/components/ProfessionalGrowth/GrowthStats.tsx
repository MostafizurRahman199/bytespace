"use client";

import React, { useState, useEffect, useRef } from "react";

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

function parseValue(val: string) {
  const match = val.match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) {
    return { prefix: "", num: 0, suffix: val, isNumber: false };
  }
  return {
    prefix: match[1],
    num: parseFloat(match[2]),
    suffix: match[3],
    isNumber: true,
  };
}

function StatCountItem({
  value,
  label,
  isVisible,
}: {
  value: string;
  label: string;
  isVisible: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(value);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || hasStartedRef.current) return;
    hasStartedRef.current = true;

    const { prefix, num, suffix, isNumber } = parseValue(value);
    if (!isNumber) return;

    setDisplayValue(`${prefix}0${suffix}`);

    const duration = 1600; // ms
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(easedProgress * num);

      if (progress < 1) {
        setDisplayValue(`${prefix}${current}${suffix}`);
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, value]);

  return (
    <div className="flex flex-col">
      <span className="font-poppins font-medium text-[#003BE2] text-[26px] sm:text-[30px] xl:text-[36px] leading-none tracking-tight">
        {displayValue}
      </span>
      <span className="font-satoshi text-[#4B4C53] text-[14px] sm:text-[16px] xl:text-[18px] mt-2 font-normal">
        {label}
      </span>
    </div>
  );
}

export default function GrowthStats({
  stats = STATS_DATA,
  className = "",
}: GrowthStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex items-center gap-6 sm:gap-10 lg:gap-8 xl:gap-14 ${className}`}
    >
      {stats.map((stat) => (
        <StatCountItem
          key={stat.label}
          value={stat.value}
          label={stat.label}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
}
