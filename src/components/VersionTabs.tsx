"use client";

import { useState } from "react";

interface VersionTabsProps {
  children: React.ReactNode[];
  labels: string[];
  descriptions: string[];
}

export default function VersionTabs({
  children,
  labels,
  descriptions,
}: VersionTabsProps) {
  const [active, setActive] = useState(0);

  const tabColors = [
    {
      active: "bg-[#39FF14] text-[#0A0A0A]",
      ring: "ring-[#39FF14]",
      dot: "bg-[#39FF14]",
    },
    {
      active: "bg-[#D4AF37] text-[#1A1714]",
      ring: "ring-[#D4AF37]",
      dot: "bg-[#D4AF37]",
    },
    {
      active: "bg-[#7C3AED] text-white",
      ring: "ring-[#7C3AED]",
      dot: "bg-[#7C3AED]",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Sticky Tab Bar */}
      <div className="sticky top-0 z-[60] bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/60 text-xs font-medium tracking-wider uppercase">
              Choose a design direction
            </span>
            <span className="text-white/40 text-xs">
              {active + 1} of {labels.length}
            </span>
          </div>
          <div className="flex gap-2">
            {labels.map((label, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  active === i
                    ? tabColors[i].active
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70"
                }`}
              >
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{label.split(":")[0]?.trim() || label}</span>
              </button>
            ))}
          </div>
          <p className="text-white/40 text-xs mt-2 text-center">
            {descriptions[active]}
          </p>
        </div>
      </div>

      {/* Active Version */}
      <div>{children[active]}</div>
    </div>
  );
}
