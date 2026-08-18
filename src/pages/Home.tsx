import React, { useEffect } from "react";
import { Hero } from "../sections/Hero";
import { IntroStrip } from "../sections/IntroStrip";
import { AboutSection } from "../sections/AboutSection";
import { Services } from "../sections/Services";
import { SelectedWork } from "../sections/SelectedWork";
import { ProcessTimeline } from "../sections/ProcessTimeline";
import { SecuritySection } from "../sections/SecuritySection";
import { CloudDevOps } from "../sections/CloudDevOps";
import { TechnologyConstellation } from "../sections/TechnologyConstellation";
import { WhyIDEV } from "../sections/WhyIDEV";
import { CTASection } from "../sections/CTASection";
import { ContactSection } from "../sections/ContactSection";

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "IDEV Creative Coders | Creative Technology & Software Development";
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <IntroStrip />
      <AboutSection />
      <Services />
      <ProcessTimeline />
      <SecuritySection />
      <CloudDevOps />
      <TechnologyConstellation />
      <SelectedWork />
      <WhyIDEV />
      <CTASection />
      <ContactSection />
    </div>
  );
};
