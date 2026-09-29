"use client";

import React, { useState } from "react";
import Link from "next/link";
import AuthInput from "./AuthInput";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handles registration submission
    console.log("Register submitted:", { fullName, email });
  };

  return (
    <div className="w-full max-w-[580px] min-h-[784px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-7 sm:px-[72px] py-9 sm:py-[64px] flex flex-col justify-between select-none">
      <div>
        {/* Top Tag */}
        <span className="font-satoshi font-medium text-[16px] text-[#003BE2] leading-none block mb-2">
          Create an Account
        </span>

        {/* Title */}
        <h2 className="font-poppins font-bold text-[36px] sm:text-[40px] text-[#141517] leading-[1.15] tracking-tight mb-8">
          Welcome to
          <br />
          ByteSpace
        </h2>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <AuthInput
            id="register-fullname"
            label="Full Name"
            type="text"
            placeholder="Jamie Davis"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <AuthInput
            id="register-email"
            label="Email"
            type="email"
            placeholder="designer@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <AuthInput
            id="register-password"
            label="Password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Right-aligned Continue Button */}
          <div className="flex justify-end pt-3">
            <button
              type="submit"
              className="h-[46px] px-8 rounded-full bg-[#D4FB20] hover:bg-[#C2EB12] active:scale-[0.98] text-[#141517] font-satoshi font-medium text-[15px] flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              Continue
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Link */}
      <div className="text-center pt-8">
        <p className="font-satoshi text-[14px] text-[#4B4C53]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#003BE2] hover:underline font-medium transition-colors"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
