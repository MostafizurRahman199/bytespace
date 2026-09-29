"use client";

import React from "react";
import PartnerLogoItem from "./PartnerLogoItem";
import { PartnerLogo, PARTNER_LOGOS } from "./types";

export interface PartnerMarqueeTrackProps {
  logos?: PartnerLogo[];
  repeatCount?: number;
  pauseOnHover?: boolean;
  onLogoClick?: (logo: PartnerLogo) => void;
  className?: string;
  trackClassName?: string;
  renderItem?: (
    logo: PartnerLogo,
    index: number,
    isDuplicateTrack: boolean
  ) => React.ReactNode;
}

export default function PartnerMarqueeTrack({
  logos = PARTNER_LOGOS,
  repeatCount = 2,
  pauseOnHover = true,
  onLogoClick,
  className = "",
  trackClassName = "",
  renderItem,
}: PartnerMarqueeTrackProps) {
  // Multiply the logo set to ensure smooth looping and proper track width
  const itemsToRender =
    repeatCount > 1
      ? Array.from({ length: repeatCount }).flatMap(() => logos)
      : logos;

  const defaultTrackStyle =
    "flex items-center gap-10 sm:gap-14 lg:gap-[72px] shrink-0 pr-10 sm:pr-14 lg:pr-[72px]";

  return (
    <div
      className={`flex w-max animate-marquee ${
        pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
      } ${className}`}
    >
      {/* Track 1 - Screen Reader Accessible */}
      <div className={`${defaultTrackStyle} ${trackClassName}`}>
        {itemsToRender.map((logo, index) =>
          renderItem ? (
            renderItem(logo, index, false)
          ) : (
            <PartnerLogoItem
              key={`primary-${logo.id}-${index}`}
              logo={logo}
              priority
              onClick={onLogoClick}
            />
          )
        )}
      </div>

      {/* Track 2 - Seamless Duplicate for Continuous Infinite Loop */}
      <div
        aria-hidden="true"
        className={`${defaultTrackStyle} ${trackClassName}`}
      >
        {itemsToRender.map((logo, index) =>
          renderItem ? (
            renderItem(logo, index, true)
          ) : (
            <PartnerLogoItem
              key={`duplicate-${logo.id}-${index}`}
              logo={logo}
              priority={false}
              onClick={onLogoClick}
            />
          )
        )}
      </div>
    </div>
  );
}
