"use client";

import React from "react";
import { useScrollReveal } from "./useScrollReveal";

export const FEATURES_DATA: string[] = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export interface FeatureChecklistProps {
  features?: string[];
  className?: string;
}

export default function FeatureChecklist({
  features = FEATURES_DATA,
  className = "",
}: FeatureChecklistProps) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div ref={ref} className={`flex flex-col gap-4 sm:gap-5 ${className}`}>
      {features.map((feature, idx) => (
        <div
          key={feature}
          style={{
            transitionDelay: `${idx * 140}ms`,
          }}
          className={`flex items-center gap-3.5 transition-all duration-700 ease-out will-change-[transform,opacity] ${
            isVisible
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 -translate-x-5 translate-y-2"
          }`}
        >
          {/* Blue Checkmark Badge with spring scale-in */}
          <div
            style={{
              transitionDelay: `${idx * 140 + 80}ms`,
            }}
            className={`w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-500 ease-out ${
              isVisible ? "scale-100" : "scale-75"
            }`}
          >
            <svg
              className="w-3 h-3 text-white"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="2.5 6 4.75 8.5 9.5 3.5" />
            </svg>
          </div>
          <span className="font-satoshi font-medium text-[#141517] text-[16px] sm:text-[17px] leading-tight">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
}
