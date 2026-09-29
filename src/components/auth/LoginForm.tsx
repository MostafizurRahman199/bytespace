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

        {/* Social Buttons with exact Figma rounded-[20px] borders and downloaded logos */}
        <div className="flex items-center justify-center gap-4">
          {/* Facebook */}
          <button
            type="button"
            aria-label="Sign in with Facebook"
            className="w-[72px] h-[72px] rounded-[20px] border border-[#E5E6E8] hover:border-[#CED0D3] hover:bg-[#F9FAFB] active:scale-95 flex items-center justify-center transition-all cursor-pointer group shadow-sm bg-white"
          >
            <img
              src="/images/auth/facebook_logo.png"
              alt="Facebook"
              width={36}
              height={36}
              className="w-[36px] h-[36px] object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Google */}
          <button
            type="button"
            aria-label="Sign in with Google"
            className="w-[72px] h-[72px] rounded-[20px] border border-[#E5E6E8] hover:border-[#CED0D3] hover:bg-[#F9FAFB] active:scale-95 flex items-center justify-center transition-all cursor-pointer group shadow-sm bg-white"
          >
            <img
              src="/images/auth/google_logo.png"
              alt="Google"
              width={36}
              height={36}
              className="w-[36px] h-[36px] object-contain transition-transform group-hover:scale-105"
            />
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
