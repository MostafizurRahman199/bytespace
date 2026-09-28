import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#003be2] bytespace-grid-bg relative overflow-x-hidden selection:bg-[#D4FB20] selection:text-black">
      <Navbar />
      <Hero />
    </main>
  );
}
