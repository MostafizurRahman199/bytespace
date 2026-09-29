import React from "react";
import { Metadata } from "next";
import RegisterPage from "../register/page";

export const metadata: Metadata = {
  title: "Create an Account - ByteSpace",
  description: "Join ByteSpace today and unlock your potential with our wide range of courses.",
};

export default function SignUpPage() {
  return <RegisterPage />;
}
