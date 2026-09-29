"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../common/Button";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="w-full max-w-[500px]">
      {/* Newsletter Input + Lime Search Button Form */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
        {/* Email Input Field - Rounded-full with clean border */}
        <div className="relative flex-1">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full h-[46px] sm:h-[48px] px-6 rounded-full bg-white border border-[#D5D7DA] text-[#141517] placeholder:text-[#71737A] placeholder:font-satoshi placeholder:font-normal text-[15px] sm:text-[16px] font-satoshi focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-all"
          />
        </div>

        {/* Lime Pill Search Button */}
        <Button
          type="submit"
          className="shrink-0"
        >
          {subscribed ? "Joined!" : "Search"}
        </Button>
      </form>

      {/* Subtitle / Consent disclaimer text - Exact 12px */}
      <p className="font-satoshi font-normal text-[#4B4C53] text-[12px] leading-[1.6] mt-3.5 sm:mt-4 max-w-[460px]">
        By subscribing, you agree to our{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-2 text-[#4B4C53] hover:text-[#003BE2] transition-colors"
        >
          Privacy Policy
        </Link>{" "}
        and consent to receive updates from our company.
      </p>
    </div>
  );
}
