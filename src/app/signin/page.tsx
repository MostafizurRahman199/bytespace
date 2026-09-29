import React from "react";
import { Metadata } from "next";
import LoginPage from "../login/page";

export const metadata: Metadata = {
  title: "Sign In - ByteSpace",
  description: "Sign in to your ByteSpace account and continue learning.",
};

export default function SignInPage() {
  return <LoginPage />;
}
