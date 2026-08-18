import React from "react";
import { Target, Layers, Shield, Cpu } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

export const WhyIDEV: React.FC = () => {
  const points = [
    {
      num: "01",
      icon: <Target className="w-5 h-5 text-accent" />,
      title: "BUSINESS-FIRST",
      desc: "Engineering starts with understanding the actual requirement. We align technical choices with commercial outcomes.",
    },
    {
      num: "02",
      icon: <Layers className="w-5 h-5 text-accent" />,
      title: "CUSTOM",
      desc: "Solutions are designed around the client's workflow. We build proprietary assets rather than wrapping generic SaaS scripts.",
    },
    {
      num: "03",
      icon: <Shield className="w-5 h-5 text-accent" />,
      title: "SECURE",
      desc: "Security is considered throughout architecture and development. We design security boundaries into every layer of our code.",
    },
    {
      num: "04",
      icon: <Cpu className="w-5 h-5 text-accent" />,
      title: "SCALABLE",
      desc: "Systems are designed with maintainability and future growth in mind. We build architectures that grow with your user base.",
    },
  ];

  return (
    <section className="py-24 bg-background border-b border-border-subtle select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <ScrollReveal direction="down">
            <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
              09 // WHY IDEV CREATIVE CODERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight text-reveal-gradient">
              WHY IDEV CREATIVE CODERS.
            </h2>
          </ScrollReveal>
        </div>

        {/* Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, idx) => (
            <ScrollReveal
              key={point.title}
              direction="up"
              delay={0.1 * idx}
              className="card-premium p-8 rounded-3xl flex gap-6 items-start"
            >
              <div className="p-3 bg-background border border-border-subtle rounded-xl flex-shrink-0">
                {point.icon}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-accent font-bold">{point.num}</span>
                  <h3 className="text-base font-bold text-text-primary tracking-wider font-mono">
                    {point.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
