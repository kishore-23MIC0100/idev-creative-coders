import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../components/Button";
import { ScrollReveal } from "../components/ScrollReveal";

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-background overflow-hidden border-b border-border-subtle select-none">
      
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center z-10">
        
        {/* Eye-brow tag */}
        <ScrollReveal direction="down" delay={0.1}>
          <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase mb-6 block">
            NEXT STEPS
          </span>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-reveal-gradient mb-6 leading-none">
            LET'S DEFINE <br />
            WHAT'S <span className="accent-text-gradient">NEXT</span>.
          </h2>
        </ScrollReveal>

        {/* Desc */}
        <ScrollReveal direction="up" delay={0.3} className="max-w-xl">
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-10">
            Have a software requirement, product idea or technical challenge? Let's discuss it.
          </p>
        </ScrollReveal>

        {/* Buttons */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button variant="primary" to="/contact">
              START A PROJECT <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="secondary" to="/work">
              VIEW PROJECTS
            </Button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
