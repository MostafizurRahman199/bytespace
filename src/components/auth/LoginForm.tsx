"use client";

import React, { useState } from "react";
import AuthInput from "./AuthInput";
import SocialAuthButton from "./SocialAuthButton";
import AuthCardHeader from "./AuthCardHeader";
import AuthCardFooter from "./AuthCardFooter";

const SOCIAL_PROVIDERS = [
  { provider: "Facebook", iconSrc: "/images/auth/facebook_logo.png" },
  { provider: "Google", iconSrc: "/images/auth/google_logo.png" },
];

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handles submission
    console.log("Login submitted:", { email });
  };

  return (
    <div className="w-full max-w-[580px] min-h-0 lg:min-h-[784px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-6 sm:px-12 lg:px-[72px] py-7 sm:py-10 lg:py-[64px] flex flex-col justify-between select-none">
      <div>
        {/* Card Header */}
        <AuthCardHeader tag="Sign In" title="Welcome Back" />

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
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
              className="h-[46px] px-8 rounded-full bg-[#D4FB20] hover:bg-[#C2EB12] active:scale-[0.98] text-[#141517] font-satoshi font-medium text-[18px] flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative my-5 sm:my-8 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E5E6E8]" />
          </div>
          <span className="relative bg-white px-3 font-satoshi text-[14px] text-[#82868E]">
            or
          </span>
        </div>

        {/* Social Buttons */}
        <div className="flex items-center justify-center gap-4">
          {SOCIAL_PROVIDERS.map((item) => (
            <SocialAuthButton
              key={item.provider}
              provider={item.provider}
              iconSrc={item.iconSrc}
            />
          ))}
        </div>
      </div>

      {/* Bottom Link */}
      <AuthCardFooter
        text="New user?"
        linkText="Create an account"
        linkHref="/register"
        className="pt-6"
      />
    </div>
  );
}
