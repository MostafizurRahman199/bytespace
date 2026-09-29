import React from "react";

export default function AmbientGlows() {
  return (
    <>
      {/* 
        Exact Figma Ambient Glow Blobs:
        - Top-Center/Left: Lime glow (#D4FB20)
        - Mid-Left: Blue glow (#003BE2)
        - Bottom-Left: Lime glow (#D4FB20)
        - Bottom-Right: Blue glow (#003BE2)
        - Top-Right: Soft blue tint (#003BE2)
      */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-[28%] -translate-x-1/2 w-[550px] h-[450px] bg-[#D4FB20]/30 rounded-full blur-[120px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-[46%] -left-[120px] w-[520px] h-[520px] bg-[#003BE2]/16 rounded-full blur-[130px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-[-40px] -left-[100px] w-[500px] h-[480px] bg-[#D4FB20]/35 rounded-full blur-[120px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-[-60px] -right-[80px] w-[550px] h-[520px] bg-[#003BE2]/20 rounded-full blur-[130px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-0 -right-[80px] w-[420px] h-[360px] bg-[#003BE2]/10 rounded-full blur-[110px] pointer-events-none" 
      />
    </>
  );
}
