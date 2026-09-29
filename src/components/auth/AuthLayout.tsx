"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthVisualShowcase from "./AuthVisualShowcase";

interface AuthLayoutProps {
  mode: "login" | "register";
  children: React.ReactNode;
}

export default function AuthLayout({ mode, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[#003be2] bytespace-grid-bg relative overflow-x-hidden selection:bg-[#D4FB20] selection:text-black flex flex-col justify-between">
      {/* Top Left Brand Logo - Exact Figma position: x=120px, y=35px */}
      <header className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-[120px] pt-8 sm:pt-[35px] z-50">
        <Link
          href="/"
          className="inline-flex items-center group transition-transform duration-200 hover:scale-105"
          aria-label="Back to ByteSpace Home"
        >
          <div className="relative w-[28px] h-[31px]">
            <Image
              src="/images/landingpage/hero/logo_mark.svg"
              alt="ByteSpace Logo"
              width={28}
              height={31}
              priority
              className="object-contain"
            />
          </div>
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 xl:px-[120px] py-10 lg:py-14 xl:py-[55px] flex-1 flex items-center justify-center lg:justify-between gap-8 lg:gap-12 relative z-10">
        {/* Left Side Visual Showcase - Desktop only (>= 1024px) */}
        <div className="hidden lg:flex flex-col justify-center items-start shrink-0">
          <AuthVisualShowcase mode={mode} />
        </div>

        {/* Right Side White Auth Card */}
        <div className="w-full max-w-[580px] flex justify-center lg:justify-end">
          {children}
        </div>
      </main>

      {/* Empty bottom spacer to ensure balance */}
      <div className="h-6 sm:h-8" />
    </div>
  );
}
