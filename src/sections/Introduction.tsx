import React from "react";
import { ScrollReveal } from "../components/ScrollReveal";

export const Introduction: React.FC = () => {
  return (
    <section className="py-24 bg-background border-b border-border-subtle select-none">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        <ScrollReveal direction="down">
          <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-8">
            02 // MISSION
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-reveal-gradient mb-8 font-sans">
            SOFTWARE IS MORE THAN CODE.
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} className="flex flex-col gap-6">
          <p className="text-text-primary text-lg sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            It is architecture, infrastructure, security, data and the systems that keep businesses moving.
          </p>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            IDEV Creative Coders brings these disciplines together to build digital products around real business requirements.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};
