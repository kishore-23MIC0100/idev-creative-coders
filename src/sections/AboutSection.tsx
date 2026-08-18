import React from "react";
import { ScrollReveal } from "../components/ScrollReveal";

export const AboutSection: React.FC = () => {
  const stats = [
    { label: "Projects & Experiments", value: "25+" },
    { label: "Core Technologies", value: "10+" },
    { label: "Commitment", value: "100%" },
  ];

  return (
    <section id="about" className="py-24 bg-background border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal direction="down">
          <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
            01 // WHO WE ARE
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-16 tracking-tight">
            We are IDEV Creative Coders.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Block */}
          <div className="lg:col-span-5 border-l border-accent/20 pl-6 md:pl-8">
            <ScrollReveal direction="right">
              <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-reveal-gradient leading-[1.1] font-sans">
                CREATIVE <br />
                THINKING × <br />
                SOLID <br />
                ENGINEERING
              </h3>
            </ScrollReveal>
          </div>

          {/* Right Block */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                We are a creative technology team focused on turning ambitious ideas into useful digital products. From websites and business applications to AI-powered platforms and cloud solutions, we combine creative thinking with engineering discipline.
              </p>
            </ScrollReveal>

            {/* Stat Counters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border-subtle">
              {stats.map((stat, index) => (
                <ScrollReveal
                  key={stat.label}
                  direction="up"
                  delay={0.1 * index}
                  className="flex flex-col gap-2"
                >
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-text-secondary">
                    {stat.label}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
