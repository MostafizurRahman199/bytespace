"use client";

import React, { useState } from "react";
import Link from "next/link";
import AuthInput from "./AuthInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handles submission
    console.log("Login submitted:", { email });
  };

  return (
    <div className="w-full max-w-[580px] min-h-[784px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-7 sm:px-[72px] py-9 sm:py-[64px] flex flex-col justify-between select-none">
      <div>
        {/* Top Tag */}
        <span className="font-satoshi font-medium text-[16px] text-[#003BE2] leading-none block mb-2">
          Sign In
        </span>

        {/* Title */}
        <h2 className="font-poppins font-bold text-[36px] sm:text-[40px] text-[#141517] leading-[1.15] tracking-tight mb-8">
          Welcome Back
        </h2>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <AuthInput
            id="login-email"
            label="Email"
            type="email"
            placeholder="designer@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <AuthInput
            id="login-password"
            label="Password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Right-aligned Sign In Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="h-[46px] px-8 rounded-full bg-[#D4FB20] hover:bg-[#C2EB12] active:scale-[0.98] text-[#141517] font-satoshi font-medium text-[15px] flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative my-7 sm:my-8 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E5E6E8]" />
          </div>
          <span className="relative bg-white px-3 font-satoshi text-[14px] text-[#82868E]">
            or
          </span>
        </div>

        {/* Social Buttons */}
        <div className="flex items-center justify-center gap-4">
          {/* Facebook */}
          <button
            type="button"
            aria-label="Sign in with Facebook"
            className="w-[72px] h-[72px] rounded-full border border-[#E5E6E8] hover:border-[#CED0D3] hover:bg-[#F9FAFB] active:scale-95 flex items-center justify-center transition-all cursor-pointer group shadow-sm"
          >
            <svg
              className="w-8 h-8 transition-transform group-hover:scale-105"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9904 5.86708 30.612 13.5 31.8123V20.625H9.4375V16H13.5V12.475C13.5 8.46875 15.8875 6.25 19.55 6.25C21.3031 6.25 23.1375 6.5625 23.1375 6.5625V10.5H21.1188C19.1344 10.5 18.5156 11.7313 18.5156 12.9938V16H22.9531L22.2438 20.625H18.5156V31.8123C26.1329 30.612 32 23.9904 32 16"
                fill="#141517"
              />
            </svg>
          </button>

          {/* Google */}
          <button
            type="button"
            aria-label="Sign in with Google"
            className="w-[72px] h-[72px] rounded-full border border-[#E5E6E8] hover:border-[#CED0D3] hover:bg-[#F9FAFB] active:scale-95 flex items-center justify-center transition-all cursor-pointer group shadow-sm"
          >
            <svg
              className="w-8 h-8 transition-transform group-hover:scale-105"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16.32 13.0667V18.9333H24.64C24.28 20.8933 23.1067 22.5467 21.44 23.6667C19.8533 24.7467 17.84 25.3333 15.4667 25.3333C10.7467 25.3333 6.93333 21.52 6.93333 16.8C6.93333 12.08 10.7467 8.26667 15.4667 8.26667C17.9733 8.26667 20.2267 9.17333 21.96 10.6667L26.1067 6.52C23.2933 3.90667 19.64 2.26667 15.4667 2.26667C7.48 2.26667 1 8.74667 1 16.7333C1 24.72 7.48 31.2 15.4667 31.2C23.36 31.2 28.6 25.6533 28.6 17.8933C28.6 16.32 28.44 14.8533 28.16 13.4133L16.32 13.0667Z"
                fill="#141517"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Link */}
      <div className="text-center pt-6">
        <p className="font-satoshi text-[14px] text-[#4B4C53]">
          New user?{" "}
          <Link
            href="/register"
            className="text-[#003BE2] hover:underline font-medium transition-colors"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
