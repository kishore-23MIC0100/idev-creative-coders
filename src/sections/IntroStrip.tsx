import React from "react";
import { Marquee } from "../components/Marquee";
import { ScrollReveal } from "../components/ScrollReveal";

export const IntroStrip: React.FC = () => {
  const technologies = [
    "React",
    "Node.js",
    "Python",
    "Java",
    "AWS",
    "AI",
    "Cloud Solutions",
    "UI / UX Design",
    "Next.js",
    "Docker",
    "Machine Learning",
    "REST APIs"
  ];

  return (
    <section id="intro-strip" className="py-20 bg-background overflow-hidden border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <ScrollReveal direction="right">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary uppercase font-sans">
                Designing.<br />
                Developing.<br />
                Deploying.
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
                We transform ideas into reliable digital products through thoughtful design, clean engineering, and modern technology.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Horizontally scrolling technology strip */}
      <ScrollReveal delay={0.2} direction="none">
        <Marquee items={technologies} speed="medium" />
      </ScrollReveal>
    </section>
  );
};
