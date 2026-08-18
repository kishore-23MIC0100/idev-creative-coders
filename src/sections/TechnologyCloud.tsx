import React from "react";
import { ScrollReveal } from "../components/ScrollReveal";

export const TechnologyCloud: React.FC = () => {
  const techs = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "Flask",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "GitHub",
    "OpenCV",
    "YOLO",
    "Machine Learning",
    "AI",
    "Figma"
  ];

  return (
    <section className="py-24 bg-background border-b border-border-subtle select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto mb-16">
          <ScrollReveal direction="down">
            <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
              04 // STACK
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">
              Built With Modern Technology.
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We leverage reliable modern tools, libraries, platforms, and intelligent frameworks to deliver high-quality production applications.
            </p>
          </ScrollReveal>
        </div>

        {/* Technical Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techs.map((tech, index) => (
            <ScrollReveal
              key={tech}
              direction="up"
              delay={0.03 * index}
              className="group bg-surface border border-border-subtle hover:border-accent/40 px-6 py-4 rounded-xl flex items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(108,99,255,0.05)] cursor-default"
            >
              <span className="text-sm font-mono tracking-wide text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                {tech}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
