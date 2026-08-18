import React, { useEffect } from "react";
import { ScrollReveal } from "../components/ScrollReveal";
import { Services } from "../sections/Services";
import { ProcessTimeline } from "../sections/ProcessTimeline";
import { CTASection } from "../sections/CTASection";

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Our Services | IDEV Creative Coders";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-32">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-left">
        <ScrollReveal direction="down">
          <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
            WHAT WE DO
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8">
            Digital solutions designed <br />
            around business workflows.
          </h1>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-3xl">
            We provide full-lifecycle technical and creative services. From custom cloud configurations and automation pipelines to intelligent NLP systems and responsive layouts, our solutions are built to support growth.
          </p>
        </ScrollReveal>
      </div>

      <Services />
      <ProcessTimeline />
      <CTASection />
    </div>
  );
};
