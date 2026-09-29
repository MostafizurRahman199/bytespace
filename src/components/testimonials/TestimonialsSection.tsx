"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS_DATA } from "./testimonialsData";

export default function TestimonialsSection() {
  const totalItems = TESTIMONIALS_DATA.length; // 9 items

  // Infinite circular clone track: 3 sets of 9 items
  const extendedData = [
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA,
  ];

  // Start at middle set (index 9) for smooth bidirectional infinite loop
  const [currentIndex, setCurrentIndex] = useState(totalItems);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const dragStartX = useRef<number | null>(null);
  const dragCurrentX = useRef<number | null>(null);

  // Responsive cards per view (1 on mobile, 2 on tablet, 3 on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Circular forward
  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Circular backward
  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Seamless infinite reset when entering clones
  const handleTransitionEnd = () => {
    if (currentIndex >= totalItems * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - totalItems);
    } else if (currentIndex < totalItems) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + totalItems);
    }
  };

  // Re-enable transition after seamless instant jump
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Auto-rotate every 3.8s, pause when hovered or dragged
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Touch and Drag handlers for intuitive swipe interaction
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    dragStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    dragCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (dragStartX.current !== null && dragCurrentX.current !== null) {
      const diff = dragStartX.current - dragCurrentX.current;
      if (diff > 45) {
        nextSlide();
      } else if (diff < -45) {
        prevSlide();
      }
    }
    dragStartX.current = null;
    dragCurrentX.current = null;
    setIsPaused(false);
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden pt-14 sm:pt-20 lg:pt-[84px] pb-16 sm:pb-24 lg:pb-[96px] select-none">
      {/* 
        Exact Figma Ambient Glow Blobs:
        1. Top-Center/Middle: Vibrant lime glow (#D4FB20) between heading and subtitle & spreading upwards (peak at 51% width)
        2. Far-Right Edge: Soft lime glow (#D4FB20) on the right edge & behind Card 3
        3. Bottom-Left: Soft periwinkle/blue glow (#003BE2) in bottom-left corner
      */}
      <div
        aria-hidden="true"
        className="absolute top-[10px] left-[52%] -translate-x-1/2 w-[520px] h-[400px] bg-[#D4FB20]/45 rounded-full blur-[110px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-[80px] -right-[120px] w-[500px] h-[520px] bg-[#D4FB20]/35 rounded-full blur-[130px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-[90px] -left-[100px] w-[520px] h-[520px] bg-[#003BE2]/16 rounded-full blur-[130px] pointer-events-none"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px]">
        {/* =========================================================================
            HEADER: 2-Column Layout matching Figma Screenshot 100%
            - Left: 2-line Poppins SemiBold 44px heading in #242528
            - Right: Exact 5-line Satoshi Thin 18px subtitle in #4B4C53 (max-w-[585px])
            - Vertically aligned along baseline/bottom above the cards
        ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">
          {/* Left Column: Heading */}
          <div className="w-full lg:max-w-[480px] shrink-0">
            <h2 className="font-poppins text-[#242528] text-[28px] sm:text-[34px] md:text-[38px] xl:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em]">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          {/* Right Column: Subtitle (Exact 5 lines matching Figma) - font-regular */}
          <div className="w-full lg:max-w-[570px] xl:max-w-[585px]">
            <p className="font-satoshi text-[#4B4C53] text-[15px] sm:text-[16px] xl:text-[18px] leading-[1.6] font-normal">
              At ByteSpace, our vibrant community of learners and creators is at the{" "}
              heart of what we do. Hear directly from those who have experienced the{" "}
              transformative journey of learning and creating on our platform. Explore{" "}
              testimonials that reflect the diverse perspectives of enthusiastic learners{" "}
              and accomplished creators.
            </p>
          </div>
        </div>

        {/* =========================================================================
            CAROUSEL: Infinite Auto-Rotating Cards Track matching Figma 100%
        ========================================================================= */}
        <div
          className="mt-10 sm:mt-12 lg:mt-[56px] relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Viewport Container */}
          <div className="overflow-hidden w-full">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-600 ease-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedData.map((testimonial, idx) => (
                <div
                  key={`${testimonial.id}-${idx}`}
                  className="shrink-0 px-2.5 sm:px-3 lg:px-[15px] flex"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* 
            Subtle Hover-Only Navigation Arrows:
            Hidden by default so the layout is 100% visually identical to Figma.
            Fade in gracefully on hover for desktop power users.
          */}
          <button
            type="button"
            aria-label="Previous Testimonial"
            onClick={prevSlide}
            className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 border border-[#E5E6E8] flex items-center justify-center text-[#141517] hover:bg-white hover:text-[#003BE2] hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer opacity-0 group-hover:opacity-100 duration-200 z-20 hidden lg:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next Testimonial"
            onClick={nextSlide}
            className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 border border-[#E5E6E8] flex items-center justify-center text-[#141517] hover:bg-white hover:text-[#003BE2] hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer opacity-0 group-hover:opacity-100 duration-200 z-20 hidden lg:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
