import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { projects } from "../data/projects";
import { ProjectPreview } from "../components/ProjectPreview";

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-background border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <ScrollReveal direction="down">
              <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
                07 // PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">
                Selected Work.
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                A selection of digital products, applications, and experiments built by IDEV Creative Coders.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="left" className="flex-shrink-0">
            <Link
              to="/work"
              className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              All Projects
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Editorial Alternating Portfolio Layout */}
        <div className="flex flex-col gap-24">
          {projects.slice(0, 3).map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <ScrollReveal
                key={project.id}
                direction={isEven ? "right" : "left"}
                delay={0.1}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
              >
                {/* Visual Preview */}
                <div
                  className={`lg:col-span-7 h-[320px] sm:h-[450px] relative rounded-3xl overflow-hidden border border-border-subtle bg-surface/30 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                  data-cursor="view"
                >
                  <Link to={`/work/${project.id}`} className="absolute inset-0 block group">
                    <ProjectPreview id={project.id} />
                    {/* Dark mask overlay on card hover */}
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-all duration-300 pointer-events-none" />
                  </Link>
                </div>

                {/* Case Info Details */}
                <div
                  className={`lg:col-span-5 flex flex-col gap-6 text-left ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-accent font-semibold">
                      {project.number}
                    </span>
                    <span className="w-8 h-[1px] bg-border-subtle" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary">
                      {project.category}
                    </span>
                    <span className={`text-[8px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ml-1.5 ${
                      project.status === "Ongoing" 
                        ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" 
                        : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                    <Link to={`/work/${project.id}`} className="hover:text-accent transition-colors duration-300">
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology tag badges */}
                  <div className="flex flex-wrap gap-2 py-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-text-secondary bg-surface border border-border-subtle px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Link
                      to={`/work/${project.id}`}
                      className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-text-primary hover:text-accent transition-colors duration-300 mt-2"
                    >
                      View Case Study
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
