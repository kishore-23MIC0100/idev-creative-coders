import React, { useEffect } from "react";
import { ScrollReveal } from "../components/ScrollReveal";
import { AboutSection } from "../sections/AboutSection";
import { WhyIDEV } from "../sections/WhyIDEV";
import { CTASection } from "../sections/CTASection";

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | IDEV Creative Coders";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-32">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-left">
        <ScrollReveal direction="down">
          <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
            STUDIO PROFILE
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8">
            We merge creative design <br />
            with engineering discipline.
          </h1>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-3xl">
            IDEV Creative Coders was founded on the belief that digital solutions should perform beautifully. We build bespoke software architectures, AI platforms, responsive applications, and technical interfaces designed from scratch to deliver real results.
          </p>
        </ScrollReveal>
      </div>

      {/* Main split sections */}
      <AboutSection />
      <WhyIDEV />
      <CTASection />
    </div>
  );
};
