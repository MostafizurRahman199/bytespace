import React from "react";

export interface CarouselGradientMasksProps {
  fromColor?: string;
  className?: string;
  leftMaskClassName?: string;
  rightMaskClassName?: string;
}

export default function CarouselGradientMasks({
  className = "",
  leftMaskClassName = "",
  rightMaskClassName = "",
}: CarouselGradientMasksProps) {
  return (
    <>
      {/* Left subtle gradient fade mask */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-r from-[#F5F5F6] to-transparent z-10 pointer-events-none ${leftMaskClassName} ${className}`}
      />

      {/* Right subtle gradient fade mask */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-l from-[#F5F5F6] to-transparent z-10 pointer-events-none ${rightMaskClassName} ${className}`}
      />
    </>
  );
}
