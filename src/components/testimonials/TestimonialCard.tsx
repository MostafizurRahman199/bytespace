"use client";

import React from "react";
import Image from "next/image";
import { Testimonial } from "./testimonialsData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="w-full h-full bg-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-7 xl:p-[28px] flex flex-col justify-start border border-[#F0F1F3]/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
      {/* User Avatar - Exact Figma 72px Circular Avatar without ring */}
      <div className="relative w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full overflow-hidden shrink-0">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={72}
          height={72}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* User Name - Exact Satoshi Bold 18-20px #141517 */}
      <h3 className="font-satoshi font-bold text-[#141517] text-[18px] sm:text-[20px] leading-tight mt-5 sm:mt-6">
        {testimonial.name}
      </h3>

      {/* User Role - Exact Satoshi Regular 15-16px #003BE2 */}
      <p className="font-satoshi font-normal text-[#003BE2] text-[15px] sm:text-[16px] leading-tight mt-1.5">
        {testimonial.role}
      </p>

      {/* Quote Content - Exact Satoshi 15-16px leading-[1.65] #4B4C53 */}
      <p className="font-satoshi font-normal text-[#4B4C53] text-[14px] sm:text-[15px] xl:text-[16px] leading-[1.65] mt-5 sm:mt-6">
        {testimonial.quote}
      </p>
    </div>
  );
}
