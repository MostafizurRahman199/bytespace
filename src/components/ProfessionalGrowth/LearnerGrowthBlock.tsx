import React from "react";
import Image from "next/image";
import GrowthStats, { StatItem } from "./GrowthStats";

export interface LearnerGrowthBlockProps {
  title?: React.ReactNode;
  description?: string;
  stats?: StatItem[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function LearnerGrowthBlock({
  title,
  description,
  stats,
  imageSrc = "/images/landingpage/professional_growth/man_rigthside_image.png",
  imageAlt = "Student with laptop learning online course",
}: LearnerGrowthBlockProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-8">
      {/* Left Column: Heading, Subtitle & Stats */}
      <div className="w-full lg:w-[50%] xl:w-[48%] 2xl:w-[577px] shrink-0 lg:shrink">
        {/* Title - Exact Figma Poppins SemiBold 44px, line-height 120%, letter-spacing -1%, #242528 */}
        <h2 className="font-poppins text-[#242528] text-[28px] sm:text-[34px] md:text-[38px] xl:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em]">
          {title || (
            <>
              Your Path to Professional
              <br className="hidden sm:inline" />{" "}
              Growth Starts Here!
            </>
          )}
        </h2>

        {/* Description - Satoshi font-regular 18px #4B4C53 */}
        <p className="font-satoshi text-[#4B4C53] text-[15px] sm:text-[16px] xl:text-[18px] leading-[1.6] mt-5 sm:mt-7 max-w-[490px] font-normal">
          {description ||
            "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."}
        </p>

        {/* Stats Row - Poppins medium 36px value, Satoshi font-regular 18px #4B4C53 label */}
        <GrowthStats stats={stats} className="mt-8 sm:mt-12" />
      </div>

      {/* Right Column: Man Graphic Composition (703x697) */}
      <div className="relative w-full lg:w-[50%] xl:w-[52%] 2xl:w-[703px] 2xl:-mr-[120px] flex justify-center lg:justify-end min-w-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={703}
          height={697}
          priority
          className="w-full h-auto max-w-[480px] lg:max-w-full xl:max-w-[703px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:scale-[1.01] transition-transform duration-500"
        />
      </div>
    </div>
  );
}
