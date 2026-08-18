import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Cpu, Globe, Smartphone, Database, Cloud, Shield, Brain, Layers } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { services } from "../data/services";

export const Services: React.FC = () => {
  const getIcon = (num: string) => {
    switch (num) {
      case "01": return <Cpu className="w-5 h-5 text-accent" />;
      case "02": return <Globe className="w-5 h-5 text-accent" />;
      case "03": return <Smartphone className="w-5 h-5 text-accent" />;
      case "04": return <Database className="w-5 h-5 text-accent" />;
      case "05": return <Cloud className="w-5 h-5 text-accent" />;
      case "06": return <Shield className="w-5 h-5 text-accent" />;
      case "07": return <Brain className="w-5 h-5 text-accent" />;
      case "08":
      default:
        return <Layers className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-background border-b border-border-subtle select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <ScrollReveal direction="down">
            <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
              04 // WHAT WE BUILD
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight text-reveal-gradient">
              WHAT WE BUILD.
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              From business requirements to production-ready systems. We design, build, and deploy custom technology solutions.
            </p>
          </ScrollReveal>
        </div>

        {/* Premium Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.number}
              direction="up"
              delay={0.05 * index}
              className="group relative card-premium p-6 rounded-2xl flex flex-col justify-between min-h-[350px]"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-8 select-none">
                  <div className="p-2.5 bg-background border border-border-subtle rounded-xl">
                    {getIcon(service.number)}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-text-secondary">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-text-primary mb-3 tracking-tight text-left">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed mb-6 text-left">
                  {service.description}
                </p>
              </div>

              {/* Capabilities and Arrow */}
              <div>
                <ul className="flex flex-wrap gap-1.5 mb-6">
                  {service.capabilities.slice(0, 3).map((capability) => (
                    <li
                      key={capability}
                      className="text-[8px] font-mono tracking-wider uppercase bg-background border border-border-subtle text-text-secondary px-2 py-0.5 rounded"
                    >
                      {capability}
                    </li>
                  ))}
                </ul>

                {/* Learn More link */}
                <Link to="/services" className="flex items-center justify-between pt-4 border-t border-border-subtle/50 text-[10px] font-mono uppercase tracking-widest text-text-secondary group-hover:text-accent transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
