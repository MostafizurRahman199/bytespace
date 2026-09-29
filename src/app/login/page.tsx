import React from "react";
import { Metadata } from "next";
import { AuthLayout, LoginForm } from "@/components/auth";

export const metadata: Metadata = {
  title: "Sign In - ByteSpace",
  description: "Sign in to your ByteSpace account and continue learning.",
};

export default function LoginPage() {
  return (
    <AuthLayout mode="login">
      <LoginForm />
    </AuthLayout>
  );
}
