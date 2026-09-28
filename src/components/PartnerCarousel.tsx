"use client";

import React from "react";
import Image from "next/image";

interface PartnerLogo {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
}

const PARTNER_LOGOS: PartnerLogo[] = [
  {
    id: "logo-1",
    name: "Logoipsum Wave",
    src: "/images/landingpage/carousel/partner_logo_1.svg",
    width: 167,
    height: 41,
  },
  {
    id: "logo-2",
    name: "Logoipsum Sun",
    src: "/images/landingpage/carousel/partner_logo_2.svg",
    width: 168,
    height: 41,
  },
  {
    id: "logo-3",
    name: "Logoipsum Flash",
    src: "/images/landingpage/carousel/partner_logo_3.svg",
    width: 170,
    height: 41,
  },
  {
    id: "logo-4",
    name: "Logoipsum Clover",
    src: "/images/landingpage/carousel/partner_logo_4.svg",
    width: 170,
    height: 41,
  },
  {
    id: "logo-5",
    name: "Logoipsum Circles",
    src: "/images/landingpage/carousel/partner_logo_5.svg",
    width: 169,
    height: 42,
  },
];

export default function PartnerCarousel() {
  return (
    <section
      aria-label="Partner Logos"
      className="relative w-full bg-[#F5F5F6] py-10 sm:py-14 lg:h-[202px] flex items-center overflow-hidden group select-none"
    >
      {/* Left subtle gradient fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-r from-[#F5F5F6] to-transparent z-10 pointer-events-none" />

      {/* Right subtle gradient fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-40 bg-gradient-to-l from-[#F5F5F6] to-transparent z-10 pointer-events-none" />

      {/* Infinite Marquee Track (Right to Left) */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {/* Track 1 - Screen Reader Accessible */}
        <div className="flex items-center gap-10 sm:gap-14 lg:gap-[72px] shrink-0 pr-10 sm:pr-14 lg:pr-[72px]">
          {PARTNER_LOGOS.concat(PARTNER_LOGOS).map((logo, index) => (
            <div
              key={`primary-${logo.id}-${index}`}
              className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-7 sm:h-8 lg:h-[41px] w-auto object-contain"
                priority
              />
            </div>
          ))}
        </div>

        {/* Track 2 - Seamless Duplicate for Continuous Infinite Loop */}
        <div
          aria-hidden="true"
          className="flex items-center gap-10 sm:gap-14 lg:gap-[72px] shrink-0 pr-10 sm:pr-14 lg:pr-[72px]"
        >
          {PARTNER_LOGOS.concat(PARTNER_LOGOS).map((logo, index) => (
            <div
              key={`duplicate-${logo.id}-${index}`}
              className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-7 sm:h-8 lg:h-[41px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
