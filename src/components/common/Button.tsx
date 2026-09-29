import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  // Base styling matching the user's preferred design from LoginForm
  const baseStyles =
    "font-satoshi font-medium rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm select-none active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100";

  const variantStyles = {
    primary: "bg-[#D4FB20] hover:bg-[#C2EB12] text-[#141517]",
    secondary: "bg-white hover:bg-[#F9FAFB] text-[#141517] border border-[#E5E6E8]",
  };

  const sizeStyles = {
    sm: "h-[40px] px-6 text-[15px] sm:text-[16px]",
    md: "h-[46px] px-8 text-[18px]",
    lg: "h-[52px] px-9 text-[18px]",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
