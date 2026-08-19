import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../components/ScrollReveal";
import { projects } from "../data/projects";
import { ProjectPreview } from "../components/ProjectPreview";

export const WorkPage: React.FC = () => {
  useEffect(() => {
    document.title = "Our Work | IDEV Creative Coders";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-32 pb-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-left">
        <ScrollReveal direction="down">
          <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
            OUR PORTFOLIO
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8">
            Products built <br />
            to perform.
          </h1>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-3xl">
            Explore our engineering works, AI automation solutions, custom platforms, and digital product designs. Each case study details our strategy, system architecture, and outcomes.
          </p>
        </ScrollReveal>
      </div>

      {/* Grid List */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={0.05 * index}
              className="group flex flex-col gap-6 text-left"
            >
              <div
                className="h-[300px] sm:h-[380px] relative rounded-3xl overflow-hidden border border-border-subtle bg-surface/30"
                data-cursor="view"
              >
                <Link to={`/work/${project.id}`} className="absolute inset-0 block">
                  <ProjectPreview id={project.id} />
                  <div className="absolute inset-0 bg-background/25 group-hover:bg-background/0 transition-all duration-300 pointer-events-none" />
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-accent font-semibold">{project.number}</span>
                  <span className="text-text-secondary uppercase tracking-wider text-[10px]">
                    {project.category}
                  </span>
                  <span className={`text-[8px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                    project.status === "Ongoing" 
                      ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" 
                      : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                  <Link to={`/work/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono text-text-secondary bg-surface border border-border-subtle px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
