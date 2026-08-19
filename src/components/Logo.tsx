import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Dynamic SVG Logo Icon - Matches User's Logo Shape */}
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 text-accent transition-colors duration-300 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Pointy-topped hexagon matching the company logo */}
        <polygon 
          points="50,6 88,28 88,72 50,94 12,72 12,28" 
          strokeWidth="6"
        />
        
        {/* HTML/Code brackets < / > inside the hexagon */}
        <path d="M 35,38 L 23,50 L 35,62" strokeWidth="5.5" />
        <line x1="45" y1="67" x2="55" y2="33" strokeWidth="6" />
        <path d="M 65,38 L 77,50 L 65,62" strokeWidth="5.5" />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none text-left">
          {/* Wordmark: "iDev" */}
          <span className="text-[26px] font-bold tracking-tight text-text-primary">
            <span className="text-accent font-medium">i</span>Dev
          </span>
          {/* Subtitle: "CREATIVE CODERS" */}
          <span className="text-[8px] font-mono tracking-[0.24em] uppercase text-text-secondary mt-1 font-semibold">
            Creative Coders
          </span>
        </div>
      )}
    </div>
  );
};
