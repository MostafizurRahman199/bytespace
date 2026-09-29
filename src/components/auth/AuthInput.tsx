import React, { InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export default function AuthInput({
  label,
  id,
  type = "text",
  placeholder,
  className = "",
  ...props
}: AuthInputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block font-satoshi font-medium text-[14px] text-[#242528] mb-2 leading-tight"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full h-[52px] rounded-[10px] border border-[#D5D7DA] px-4 text-[15px] font-satoshi text-[#141517] placeholder:text-[#82868E] bg-white focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-all duration-200 ${className}`}
        {...props}
      />
    </div>
  );
}
