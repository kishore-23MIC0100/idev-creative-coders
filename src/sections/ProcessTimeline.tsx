import React from "react";
import { ScrollReveal } from "../components/ScrollReveal";

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Understand the problem and define real business requirements.",
    },
    {
      num: "02",
      title: "ARCHITECT",
      desc: "Design the software, APIs, database, and cloud infrastructure structures.",
    },
    {
      num: "03",
      title: "DEVELOP",
      desc: "Build the application code with modular React/Next.js/TypeScript layouts.",
    },
    {
      num: "04",
      title: "SECURE",
      desc: "Protect the application layer, authentication gates, and host containers.",
    },
    {
      num: "05",
      title: "DEPLOY",
      desc: "Move the system into AWS containers via automated CI/CD pipelines.",
    },
    {
      num: "06",
      title: "IMPROVE",
      desc: "Maintain, optimize core metrics, and evolve system functionalities.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-background border-b border-border-subtle select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16 text-left">
          <ScrollReveal direction="down">
            <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
              03 // HOW WE BUILD
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight text-reveal-gradient">
              Our Process.
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We translate abstract concepts into production-grade systems using a clear, highly collaborative methodology.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline Grid: Desktop (Horizontal), Mobile (Vertical) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[18px] left-[5%] right-[5%] h-[1px] bg-border-subtle z-0" />

          {steps.map((step, idx) => (
            <ScrollReveal
              key={step.num}
              direction="up"
              delay={0.1 * idx}
              className="flex flex-col gap-4 relative z-10 bg-background/50 backdrop-blur-sm lg:bg-transparent text-left"
            >
              {/* Step Circle & Connector */}
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-4">
                <div className="w-10 h-10 rounded-full bg-surface border border-border-subtle hover:border-accent hover:text-white flex items-center justify-center font-mono text-xs text-text-secondary transition-all duration-300">
                  {step.num}
                </div>
                
                {/* Mobile vertical line connector */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute left-[19px] top-10 bottom-[-24px] w-[1px] bg-border-subtle" />
                )}

                <h3 className="text-lg font-bold text-text-primary lg:mt-2 tracking-tight">
                  {step.title}
                </h3>
              </div>

              {/* Step Desc */}
              <p className="text-text-secondary text-xs leading-relaxed pl-14 lg:pl-0 lg:max-w-xs">
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
