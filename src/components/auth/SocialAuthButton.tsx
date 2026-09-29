import React, { ButtonHTMLAttributes } from "react";

interface SocialAuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: string;
  iconSrc: string;
  iconAlt?: string;
  iconSize?: number;
}

export default function SocialAuthButton({
  provider,
  iconSrc,
  iconAlt,
  iconSize = 36,
  className = "",
  ...props
}: SocialAuthButtonProps) {
  return (
    <button
      type="button"
      aria-label={`Sign in with ${provider}`}
      className={`w-[72px] h-[72px] rounded-[20px] border border-[#E5E6E8] hover:border-[#CED0D3] hover:bg-[#F9FAFB] active:scale-95 flex items-center justify-center transition-all cursor-pointer group bg-white ${className}`}
      {...props}
    >
      <img
        src={iconSrc}
        alt={iconAlt || provider}
        width={iconSize}
        height={iconSize}
        className="w-[36px] h-[36px] object-contain transition-transform group-hover:scale-105"
      />
    </button>
  );
}
