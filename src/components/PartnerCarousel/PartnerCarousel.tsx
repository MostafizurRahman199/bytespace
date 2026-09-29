"use client";

import React from "react";
import CarouselGradientMasks from "./CarouselGradientMasks";
import PartnerMarqueeTrack from "./PartnerMarqueeTrack";
import { PartnerLogo, PARTNER_LOGOS } from "./types";

export interface PartnerCarouselProps {
  logos?: PartnerLogo[];
  ariaLabel?: string;
  pauseOnHover?: boolean;
  showGradientMasks?: boolean;
  repeatCount?: number;
  onLogoClick?: (logo: PartnerLogo) => void;
  className?: string;
  trackClassName?: string;
  renderItem?: (
    logo: PartnerLogo,
    index: number,
    isDuplicateTrack: boolean
  ) => React.ReactNode;
}

export default function PartnerCarousel({
  logos = PARTNER_LOGOS,
  ariaLabel = "Partner Logos",
  pauseOnHover = true,
  showGradientMasks = true,
  repeatCount = 2,
  onLogoClick,
  className = "",
  trackClassName = "",
  renderItem,
}: PartnerCarouselProps) {
  return (
    <section
      aria-label={ariaLabel}
      className={`relative w-full bg-[#F5F5F6] py-10 sm:py-14 lg:h-[202px] flex items-center overflow-hidden group select-none ${className}`}
    >
      {/* Edge gradient fade masks */}
      {showGradientMasks && <CarouselGradientMasks />}

      {/* Infinite Marquee Track */}
      <PartnerMarqueeTrack
        logos={logos}
        repeatCount={repeatCount}
        pauseOnHover={pauseOnHover}
        onLogoClick={onLogoClick}
        trackClassName={trackClassName}
        renderItem={renderItem}
      />
    </section>
  );
}
