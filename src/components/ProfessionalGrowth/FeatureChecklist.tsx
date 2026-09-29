import React from "react";

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
  return (
    <div className={`flex flex-col gap-4 sm:gap-5 ${className}`}>
      {features.map((feature) => (
        <div key={feature} className="flex items-center gap-3.5">
          <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 shadow-sm">
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
