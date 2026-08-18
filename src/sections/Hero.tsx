import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../components/Button";
import { ScrollReveal } from "../components/ScrollReveal";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 px-6 md:px-12 overflow-hidden select-none">
      {/* Background Visual representation of developers */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.28] select-none pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/branding/team_tech_background.jpg')",
          }}
        />
        {/* Balanced overlay to blend image into the page background without sacrificing legibility */}
        <div className="absolute inset-0 bg-background/50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)]" />
      </div>

      {/* Background Decorative Grid with centered radial mask fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-70" />
      
      {/* Dynamic backdrop mesh glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[380px] h-[380px] bg-accent/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 w-[380px] h-[380px] bg-accent-secondary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center z-10">
        {/* Availability Badge */}
        <ScrollReveal delay={0.1} direction="down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-subtle bg-surface/50 backdrop-blur-sm mb-8 text-[10px] font-mono tracking-widest text-text-secondary uppercase select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for selected projects
          </div>
        </ScrollReveal>

        {/* Hero Eyebrow */}
        <ScrollReveal delay={0.2}>
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-text-secondary mb-4 block">
            CREATIVE TECHNOLOGY STUDIO
          </span>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal delay={0.3} className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-reveal-gradient leading-[1.05] mb-6">
            We build digital <br className="hidden sm:block" />
            experiences that <br className="hidden sm:block" />
            <span className="accent-text-gradient">move businesses forward</span>.
          </h1>
        </ScrollReveal>

        {/* Supporting Copy */}
        <ScrollReveal delay={0.4} className="max-w-2xl">
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-10">
            IDEV Creative Coders combines design, development, and emerging technology to create websites, applications, and digital products that are built to perform.
          </p>
        </ScrollReveal>

        {/* Action Controls */}
        <ScrollReveal delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button variant="primary" to="/contact" className="w-full sm:w-auto">
              Start a Project <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                const target = document.getElementById("intro-strip");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto"
            >
              Explore Our Work
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Subtle Floating Technology Matrix particles in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute w-[2px] h-[2px] bg-accent/40 rounded-full"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};
