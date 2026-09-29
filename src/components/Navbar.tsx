"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavLinkItem {
  label: string;
  href: string;
}

interface AuthLinkItem {
  label: string;
  href: string;
  variant?: "link" | "button";
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const AUTH_LINKS: AuthLinkItem[] = [
  { label: "Sign In", href: "/signin", variant: "link" },
  { label: "Join Us", href: "/register", variant: "button" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[#F5F5F6] hover:text-[#D4FB20] font-satoshi text-[16px] transition-colors ${
                isActive
                  ? "font-medium leading-[1.2]"
                  : "font-normal leading-[1.6]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Right Action Items */}
      <div className="hidden md:flex items-center gap-6">
        {AUTH_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[#F5F5F6] hover:text-[#D4FB20] font-satoshi font-normal text-[16px] leading-[1.5] transition-colors"
          >
            {link.label}
          </Link>
        ))}
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
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base py-1 transition-colors hover:text-[#D4FB20] ${
                  isActive ? "text-white font-medium" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="h-[1px] bg-white/10 my-1" />
          <div className="flex items-center justify-between pt-1">
            {AUTH_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={
                  link.variant === "button"
                    ? "bg-[#D4FB20] text-[#242528] font-semibold px-5 py-2 rounded-full text-sm hover:bg-[#c2eb0d] transition-colors"
                    : "text-white hover:text-[#D4FB20] text-base"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
