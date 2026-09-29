import React from "react";
import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="w-full border-t border-[#E5E6E8] pt-6 sm:pt-7 lg:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
      {/* Copyright text matching Figma verbatim: @ 2023 ByteSpace. All rights reserved. - 12px font */}
      <p className="font-satoshi font-normal text-[#4B4C53] text-[12px] leading-normal">
        @ 2023 ByteSpace. All rights reserved.
      </p>

      {/* Legal & policy links - 12px font */}
      <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center sm:justify-end">
        <Link
          href="/privacy"
          className="font-satoshi font-normal text-[#4B4C53] hover:text-[#003BE2] text-[12px] transition-colors duration-150"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="font-satoshi font-normal text-[#4B4C53] hover:text-[#003BE2] text-[12px] transition-colors duration-150"
        >
          Terms of Service
        </Link>
        <Link
          href="#cookies"
          className="font-satoshi font-normal text-[#4B4C53] hover:text-[#003BE2] text-[12px] transition-colors duration-150"
        >
          Cookies Settings
        </Link>
      </div>
    </div>
  );
}
