import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { Button } from "../components/Button";
import { projects } from "../data/projects";

export const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Case Study`;
    }
    window.scrollTo(0, 0);
  }, [project, id]);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-text-secondary mb-8">The project case you are looking for does not exist or has been relocated.</p>
        <Button to="/work" variant="primary">Back to Work ↗</Button>
      </div>
    );
  }

  // Find next project in array circular loop
  const nextProjectIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <div className="w-full pt-32 pb-24 text-left select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <ScrollReveal direction="down" className="mb-12">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
        </ScrollReveal>

        {/* Hero Title */}
        <ScrollReveal direction="down" delay={0.1} className="max-w-4xl border-b border-border-subtle pb-12 mb-16">
          <div className="flex items-center gap-3 text-xs font-mono mb-4">
            <span className="text-accent">PROJECT {project.number}</span>
            <span className="text-text-secondary">/</span>
            <span className="uppercase tracking-wider text-text-secondary">{project.category}</span>
            <span className={`text-[8px] uppercase tracking-wider px-2 py-0.5 rounded ml-2 ${
              project.status === "Ongoing" 
                ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" 
                : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
            }`}>
              {project.status}
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-reveal-gradient leading-[1.1] mb-6">
            {project.title}
          </h1>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed mt-4 max-w-2xl">
            {project.description}
          </p>

          {/* Core Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border-subtle/50">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-bold text-accent font-sans">
                    {metric.value}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary mt-1">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </ScrollReveal>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Brief details */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Overview */}
            <ScrollReveal direction="up">
              <h3 className="text-xs font-mono uppercase tracking-widest text-text-primary mb-4 border-b border-border-subtle pb-2">
                01 // Overview
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {project.content.overview}
              </p>
            </ScrollReveal>

            {/* Problem & Objective */}
            <ScrollReveal direction="up" className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-text-primary mb-4 border-b border-border-subtle pb-2">
                  02 // The Problem
                </h4>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {project.content.problem}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-text-primary mb-4 border-b border-border-subtle pb-2">
                  03 // Objective
                </h4>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {project.content.objective}
                </p>
              </div>
            </ScrollReveal>

            {/* Solution & Architecture */}
            <ScrollReveal direction="up">
              <h3 className="text-xs font-mono uppercase tracking-widest text-text-primary mb-4 border-b border-border-subtle pb-2">
                04 // Engineering Solution
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                {project.content.solution}
              </p>
              <div className="bg-surface border border-border-subtle p-6 rounded-2xl">
                <span className="text-[10px] font-mono tracking-widest text-text-primary uppercase mb-3 block">
                  Systems Architecture
                </span>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {project.content.architecture}
                </p>
              </div>
            </ScrollReveal>

            {/* Development Process */}
            <ScrollReveal direction="up">
              <h3 className="text-xs font-mono uppercase tracking-widest text-text-primary mb-4 border-b border-border-subtle pb-2">
                05 // Development Process
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {project.content.process}
              </p>
            </ScrollReveal>

            {/* Results */}
            <ScrollReveal direction="up">
              <h3 className="text-xs font-mono uppercase tracking-widest text-text-primary mb-4 border-b border-border-subtle pb-2">
                06 // Business Outcome
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {project.content.results}
              </p>
            </ScrollReveal>

          </div>

          {/* Right Column: Sidebar metadata specs */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-8 bg-surface border border-border-subtle p-8 rounded-2xl">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-text-primary uppercase block mb-3">
                Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-text-secondary bg-background border border-border-subtle px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border-subtle/50 pt-6">
              <span className="text-[10px] font-mono tracking-widest text-text-primary uppercase block mb-3">
                Key Features
              </span>
              <ul className="flex flex-col gap-2.5">
                {project.content.features.map((feature, i) => (
                  <li key={i} className="text-xs text-text-secondary flex gap-2 items-start">
                    <span className="text-accent font-semibold font-mono">0{i+1}.</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border-subtle/50 pt-6">
              <span className="text-[10px] font-mono tracking-widest text-text-primary uppercase block mb-2">
                Client Attribution
              </span>
              <span className="text-[11px] text-text-secondary leading-relaxed italic">
                Proprietary architecture code and data systems developed by IDEV Creative Coders. Case statistics verified at pilot test environments.
              </span>
            </div>
          </div>

        </div>

        {/* Dynamic Next Project Navigation footer links */}
        <div className="border-t border-border-subtle mt-24 pt-12 flex items-center justify-between">
          <Link
            to="/work"
            className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Work
          </Link>
          <Link
            to={`/work/${nextProject.id}`}
            className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-text-primary hover:text-accent transition-colors duration-300"
          >
            Next Project
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
};
