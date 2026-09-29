import React from "react";
import { Metadata } from "next";
import { AuthLayout, RegisterForm } from "@/components/auth";

export const metadata: Metadata = {
  title: "Create an Account - ByteSpace",
  description: "Join ByteSpace today and unlock your potential with our wide range of courses.",
};

export default function RegisterPage() {
  return (
    <AuthLayout mode="register">
      <RegisterForm />
    </AuthLayout>
  );
}
