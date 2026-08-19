import React, { useEffect } from "react";
import { ScrollReveal } from "../components/ScrollReveal";
import { ProcessTimeline } from "../sections/ProcessTimeline";
import { CTASection } from "../sections/CTASection";

export const ProcessPage: React.FC = () => {
  useEffect(() => {
    document.title = "Our Process | IDEV Creative Coders";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-32">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-left">
        <ScrollReveal direction="down">
          <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
            ENGINEERING WORKFLOWS
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8">
            How we turn ideas <br />
            into production code.
          </h1>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-3xl">
            We follow a disciplined, transparent engineering methodology. From system architecture modeling and agile sprints to automated CI/CD staging and security auditing, we ensure your product is built to perform.
          </p>
        </ScrollReveal>
      </div>

      {/* Main Process Timeline */}
      <ProcessTimeline />

      {/* Footer CTA */}
      <CTASection />
    </div>
  );
};
