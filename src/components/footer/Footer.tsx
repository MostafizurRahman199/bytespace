import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import FooterNavLinks from "./FooterNavLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#E5E6E8]/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px] pt-14 sm:pt-16 lg:pt-[72px] pb-8 sm:pb-10 lg:pb-[48px]">
        {/* =========================================================================
            TOP SECTION: Brand/Newsletter on Left, 3 Navigation Columns on Right
        ========================================================================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 sm:gap-14 lg:gap-16 pb-14 sm:pb-16 lg:pb-[88px]">
          {/* Left Column: Brand Logo, Subtitle, and Newsletter Form */}
          <div className="w-full lg:max-w-[500px] shrink-0">
            {/* Brand Logo - Lime icon mark with dark Clash Display text */}
            <Link href="/" className="inline-flex items-center gap-[9px] group shrink-0">
              <div className="relative w-[28px] h-[30px] transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/images/landingpage/hero/logo_mark.svg"
                  alt="ByteSpace Logo Mark"
                  width={28}
                  height={30}
                  className="object-contain"
                />
              </div>
              <span
                style={{ fontFamily: "'Clash Display', sans-serif" }}
                className="font-clash text-[24px] font-bold tracking-normal text-[#242528] leading-[1.23]"
              >
                ByteSpace
              </span>
            </Link>

            {/* Subtitle under logo - Exact 14px font */}
            <p className="font-satoshi font-normal text-[#242528] text-[14px] leading-[1.5] mt-5 sm:mt-6 mb-6 sm:mb-7 max-w-[528px]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input + Lime Search Button Form */}
            <NewsletterForm />
          </div>

          {/* Right Column: 3 Link Columns */}
          <div className="w-full lg:w-auto pt-1 sm:pt-2">
            <FooterNavLinks />
          </div>
        </div>

        {/* =========================================================================
            BOTTOM SECTION: Divider Line, Copyright, and Legal Policy Links
        ========================================================================= */}
        <FooterBottom />
      </div>
    </footer>
  );
}
