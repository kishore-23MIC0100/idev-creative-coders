import React from "react";
import { ScrollReveal } from "../components/ScrollReveal";

export const CapabilitiesSection: React.FC = () => {
  const words = [
    "WEB",
    "SOFTWARE",
    "AI",
    "CLOUD",
    "MOBILE",
    "IoT",
    "UI / UX"
  ];

  return (
    <section className="py-28 bg-surface border-b border-border-subtle overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <ScrollReveal direction="down">
          <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-12">
            07 // FOCUS AREAS
          </span>
        </ScrollReveal>

        {/* Large Typography grid */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 max-w-5xl">
          {words.map((word, idx) => (
            <ScrollReveal
              key={word}
              direction="up"
              delay={0.06 * idx}
              className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-text-secondary hover:text-text-primary transition-colors duration-300 select-none font-sans"
            >
              <span className="hover:text-accent-secondary transition-colors duration-300">
                {word}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
