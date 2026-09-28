"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[120px] h-[100px] lg:h-[120px] flex items-center justify-between">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-[9px] group shrink-0">
        <div className="relative w-[29px] h-[32px] transition-transform duration-200 group-hover:scale-105">
          <Image
            src="/images/landingpage/hero/logo_mark.svg"
            alt="ByteSpace Logo Mark"
            width={29}
            height={32}
            priority
            className="object-contain"
          />
        </div>
        <span className="font-clash text-[24px] font-bold tracking-normal text-[#F5F5F6] leading-[1.23]">
          ByteSpace
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/"
          className="text-[#F5F5F6] hover:text-[#D4FB20] font-satoshi font-medium text-[16px] leading-[1.2] transition-colors"
        >
          Home
        </Link>
        <Link
          href="/courses"
          className="text-[#F5F5F6] hover:text-[#D4FB20] font-satoshi font-normal text-[16px] leading-[1.6] transition-colors"
        >
          Courses
        </Link>
        <Link
          href="/creators"
          className="text-[#F5F5F6] hover:text-[#D4FB20] font-satoshi font-normal text-[16px] leading-[1.6] transition-colors"
        >
          Creators
        </Link>
      </nav>

      {/* Right Action Items */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          href="/signin"
          className="text-[#F5F5F6] hover:text-[#D4FB20] font-satoshi font-normal text-[16px] leading-[1.5] transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/join"
          className="text-[#F5F5F6] hover:text-[#D4FB20] font-satoshi font-normal text-[16px] leading-[1.5] transition-colors"
        >
          Join Us
        </Link>
        <button
          type="button"
          aria-label="Shopping Cart"
          className="w-6 h-6 flex items-center justify-center text-[#F5F5F6] hover:opacity-80 active:scale-95 transition-all cursor-pointer"
        >
          <Image
            src="/images/landingpage/hero/shopping_bag.svg"
            alt="Shopping Bag"
            width={24}
            height={24}
            className="object-contain"
          />
        </button>
      </div>

      {/* Mobile Toggle Button */}
      <div className="flex md:hidden items-center gap-3">
        <button
          type="button"
          aria-label="Shopping Cart"
          className="w-6 h-6 flex items-center justify-center text-[#F5F5F6]"
        >
          <Image
            src="/images/landingpage/hero/shopping_bag.svg"
            alt="Shopping Bag"
            width={22}
            height={22}
            className="object-contain"
          />
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="text-white p-1 hover:text-[#D4FB20] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[85px] left-6 right-6 bg-[#0031be]/95 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-2xl flex flex-col gap-4 md:hidden z-50">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white font-medium hover:text-[#D4FB20] text-base py-1"
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 hover:text-[#D4FB20] text-base py-1"
          >
            Courses
          </Link>
          <Link
            href="/creators"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 hover:text-[#D4FB20] text-base py-1"
          >
            Creators
          </Link>
          <div className="h-[1px] bg-white/10 my-1" />
          <div className="flex items-center justify-between pt-1">
            <Link
              href="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#D4FB20] text-base"
            >
              Sign In
            </Link>
            <Link
              href="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#D4FB20] text-[#242528] font-semibold px-5 py-2 rounded-full text-sm hover:bg-[#c2eb0d] transition-colors"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
