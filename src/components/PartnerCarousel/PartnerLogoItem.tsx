"use client";

import React from "react";
import Image from "next/image";
import { PartnerLogo } from "./types";

export interface PartnerLogoItemProps {
  logo: PartnerLogo;
  priority?: boolean;
  onClick?: (logo: PartnerLogo) => void;
  className?: string;
  imageClassName?: string;
}

export default function PartnerLogoItem({
  logo,
  priority = false,
  onClick,
  className = "",
  imageClassName = "",
}: PartnerLogoItemProps) {
  const content = (
    <Image
      src={logo.src}
      alt={logo.name}
      width={logo.width}
      height={logo.height}
      className={`h-7 sm:h-8 lg:h-[41px] w-auto object-contain ${imageClassName}`}
      priority={priority}
    />
  );

  const containerClasses = `flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer ${className}`;

  if (logo.href) {
    return (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => onClick?.(logo)}
        className={containerClasses}
        aria-label={logo.name}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      onClick={() => onClick?.(logo)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.(logo);
        }
      }}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={containerClasses}
    >
      {content}
    </div>
  );
}
