import React, { useState } from "react";
import { ScrollReveal } from "../components/ScrollReveal";

interface TechNode {
  name: string;
  category: "frontend" | "backend" | "cloud" | "security" | "ai" | "core";
  x: number; // percentage coordinate
  y: number; // percentage coordinate
}

export const TechnologyConstellation: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const nodes: TechNode[] = [
    // Core Central
    { name: "IDEV CORE", category: "core", x: 50, y: 50 },

    // Frontend Nodes
    { name: "React / Next.js", category: "frontend", x: 30, y: 35 },
    { name: "TypeScript", category: "frontend", x: 20, y: 40 },
    { name: "Tailwind CSS", category: "frontend", x: 25, y: 25 },

    // Backend / Data Nodes
    { name: "Node.js", category: "backend", x: 65, y: 30 },
    { name: "Java / Spring", category: "backend", x: 75, y: 35 },
    { name: "PostgreSQL", category: "backend", x: 70, y: 20 },
    { name: "Redis Cache", category: "backend", x: 60, y: 15 },

    // Cloud / DevOps Nodes
    { name: "AWS ECS/EKS", category: "cloud", x: 68, y: 65 },
    { name: "Docker", category: "cloud", x: 78, y: 60 },
    { name: "CI / CD Pipelines", category: "cloud", x: 75, y: 75 },

    // Security Nodes
    { name: "OAuth2 / IAM", category: "security", x: 35, y: 68 },
    { name: "API Security", category: "security", x: 25, y: 72 },
    { name: "Secured Boundaries", category: "security", x: 22, y: 60 },

    // AI Nodes
    { name: "Python / PyTorch", category: "ai", x: 48, y: 22 },
    { name: "OpenAI / LLM API", category: "ai", x: 52, y: 12 },
  ];

  // Draw lines from core node to category child nodes
  const categories = [
    { name: "Frontend", id: "frontend", color: "#6c63ff" },
    { name: "Backend & Data", id: "backend", color: "#8b5cf6" },
    { name: "Cloud & Infrastructure", id: "cloud", color: "#06b6d4" },
    { name: "Identity & Security", id: "security", color: "#ec4899" },
    { name: "AI Integration", id: "ai", color: "#f59e0b" },
  ];

  return (
    <section className="py-24 bg-background border-b border-border-subtle select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl text-left mb-16">
          <ScrollReveal direction="down">
            <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
              06 // TECHNOLOGY STEERAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-reveal-gradient">
              Technology Constellation.
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We focus on a highly robust stack built around modern standards. Rather than adopting every trend, we master the tools that power stable systems.
            </p>
          </ScrollReveal>
        </div>

        {/* Constellation Canvas Block */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="relative border border-border-subtle rounded-3xl bg-surface p-6 md:p-12 overflow-hidden min-h-[500px] flex items-center justify-center">
            
            {/* SVG Connecting lines layers */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {nodes.map((node) => {
                if (node.category === "core") return null;
                // Core coordinates is always 50% / 50%
                return (
                  <line
                    key={node.name}
                    x1="50%"
                    y1="50%"
                    x2={`${node.x}%`}
                    y2={`${node.y}%`}
                    stroke="var(--accent)"
                    strokeWidth={activeCategory === node.category ? "2" : "1"}
                    strokeDasharray={activeCategory === node.category ? "0" : "3 3"}
                    className="transition-all duration-300"
                    opacity={activeCategory === node.category ? "0.9" : "0.3"}
                  />
                );
              })}
            </svg>

            {/* Interactive category toggles (floating desktop HUD) */}
            <div className="absolute top-4 left-4 right-4 md:right-auto md:bottom-4 md:top-auto z-10 flex flex-wrap gap-2 justify-start max-w-lg">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className={`px-3 py-1.5 rounded-lg border text-[9px] font-mono tracking-widest uppercase transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "border-accent bg-accent/10 text-text-primary"
                      : "border-border-subtle bg-background/50 text-text-secondary"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Nodes Coordinates Plot */}
            <div className="absolute inset-0 w-full h-full z-10">
              {nodes.map((node) => {
                const isCore = node.category === "core";
                const isMatchingCategory = activeCategory === node.category;
                
                return (
                  <div
                    key={node.name}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 group transition-all duration-300 ${
                      isCore ? "scale-110" : ""
                    }`}
                  >
                    {/* Node Dot */}
                    <div
                      className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                        isCore
                          ? "bg-accent border-text-primary scale-125"
                          : isMatchingCategory
                          ? "bg-accent border-accent scale-110 shadow-[0_0_10px_rgb(108,99,255,0.8)]"
                          : "bg-surface border-text-secondary group-hover:border-accent"
                      }`}
                    />
                    
                    {/* Node Text label */}
                    <span
                      className={`text-[10px] font-mono tracking-wider font-bold transition-all duration-300 px-1.5 py-0.5 rounded ${
                        isCore
                          ? "bg-accent/10 border border-accent/20 text-accent uppercase font-bold"
                          : isMatchingCategory
                          ? "bg-surface border border-accent/30 text-text-primary"
                          : "text-text-secondary group-hover:text-text-primary bg-background/50 border border-transparent"
                      }`}
                    >
                      {node.name}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
