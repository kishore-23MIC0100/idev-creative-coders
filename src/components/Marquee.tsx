import React from "react";

interface MarqueeProps {
  items: string[];
  speed?: "slow" | "medium" | "fast";
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  speed = "medium",
  className = "",
}) => {
  const getSpeedClass = () => {
    switch (speed) {
      case "slow":
        return "animation-duration-[40s]";
      case "fast":
        return "animation-duration-[15s]";
      case "medium":
      default:
        return "animation-duration-[25s]";
    }
  };

  // Duplicate items array a few times to fill screen widths
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`marquee-container relative w-full overflow-hidden py-4 border-y border-border-subtle bg-surface/30 backdrop-blur-sm ${className}`}>
      <div className={`animate-marquee-scroll flex gap-8 items-center ${getSpeedClass()}`}>
        {marqueeItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 text-xs font-mono font-medium uppercase tracking-widest text-text-secondary whitespace-nowrap"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
        ))}
      </div>
    </div>
  );
};
