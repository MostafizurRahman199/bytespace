import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerCarousel from "@/components/PartnerCarousel";
import CoursesSection from "@/components/CoursesSection";
import ExploreCategories from "@/components/ExploreCategories";
import ProfessionalGrowth from "@/components/ProfessionalGrowth";
import JoinAsCreator from "@/components/JoinAsCreator";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#003be2] bytespace-grid-bg relative overflow-x-hidden selection:bg-[#D4FB20] selection:text-black">
      <Navbar />
      <Hero />
      <PartnerCarousel />
      <CoursesSection />
      <ExploreCategories />
      <ProfessionalGrowth />
      <JoinAsCreator />
    </main>
  );
}
