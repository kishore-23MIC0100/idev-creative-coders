import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { projects } from "../data/projects";

export const SelectedWork: React.FC = () => {
  // Render dynamic abstract preview matching the project context
  const renderProjectPreview = (id: string) => {
    switch (id) {
      case "smart-traffic":
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 to-slate-900/60 flex items-center justify-center p-8 overflow-hidden select-none">
            {/* Abstract Traffic Grid overlay */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] bg-[size:16px_16px]" />
            <div className="relative w-full h-full flex flex-col justify-between border border-emerald-500/20 rounded-xl p-6 bg-surface-secondary/40 backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400">DETECTING: VEHICLE</span>
                <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">LIVE FEEDS</span>
              </div>
              {/* SVG traffic simulation mockup */}
              <svg viewBox="0 0 200 80" className="w-full h-1/2 opacity-70 my-2">
                <line x1="10" y1="40" x2="190" y2="40" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="30" y="30" width="20" height="12" rx="2" fill="#10b981" fillOpacity="0.4" stroke="#10b981" strokeWidth="1" />
                <rect x="90" y="38" width="25" height="12" rx="2" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
                <circle cx="160" cy="40" r="4" fill="#ef4444" className="animate-pulse" />
              </svg>
              <div className="flex justify-between text-[10px] font-mono text-text-secondary border-t border-border-subtle pt-3">
                <span>FPS: 60</span>
                <span>FLOW RATE: 24/MIN</span>
              </div>
            </div>
          </div>
        );
      case "receipt-processing":
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/40 to-neutral-900/60 flex items-center justify-center p-8 overflow-hidden select-none">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="relative w-full h-full flex flex-col justify-between border border-violet-500/20 rounded-xl p-6 bg-surface-secondary/40 backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono tracking-widest text-violet-400">AWS TEXTRACT PIPELINE</span>
                <span className="text-[10px] font-mono text-violet-500 bg-violet-500/10 px-2 py-0.5 rounded">COMPLETED</span>
              </div>
              {/* Receipt schema abstract mock */}
              <div className="flex flex-col gap-2 my-2 w-full opacity-60">
                <div className="h-2 bg-violet-500/20 rounded w-1/3" />
                <div className="h-1.5 bg-text-secondary/20 rounded w-full" />
                <div className="h-1.5 bg-text-secondary/20 rounded w-5/6" />
                <div className="h-1.5 bg-text-secondary/20 rounded w-4/5" />
                <div className="h-3 bg-violet-500/25 rounded w-1/4 self-end mt-2" />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-text-secondary border-t border-border-subtle pt-3">
                <span>MATCHING: 99.1%</span>
                <span>STATUS: JSON_OK</span>
              </div>
            </div>
          </div>
        );
      case "internal-developer-platform":
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 to-slate-900/60 flex items-center justify-center p-8 overflow-hidden select-none">
            <div className="relative w-full h-full flex flex-col justify-between border border-blue-500/20 rounded-xl p-6 bg-surface-secondary/40 backdrop-blur-sm font-mono text-[9px] text-blue-400">
              <div className="flex justify-between items-center border-b border-border-subtle pb-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <span className="text-text-secondary">dev-portal-v2</span>
              </div>
              <div className="flex flex-col gap-1.5 my-2">
                <span>$ npm run deploy --prod</span>
                <span className="text-emerald-400">&gt; Building container layers... [Done]</span>
                <span className="text-text-secondary">&gt; Injecting environment variables... [Ok]</span>
                <span className="text-blue-500">&gt; Routing active SSL certificates...</span>
              </div>
              <div className="flex justify-between text-text-secondary border-t border-border-subtle pt-2">
                <span>DOCKER STATUS: UP</span>
                <span>CPU: 4.8%</span>
              </div>
            </div>
          </div>
        );
      case "iot-monitoring":
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/40 to-slate-900/60 flex items-center justify-center p-8 overflow-hidden select-none">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="relative w-full h-full flex flex-col justify-between border border-cyan-500/20 rounded-xl p-6 bg-surface-secondary/40 backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono tracking-widest text-cyan-400">SENSOR: ESP32_GRID_04</span>
                <span className="text-[10px] font-mono text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded">CONNECTED</span>
              </div>
              {/* Dynamic waveform mock */}
              <svg viewBox="0 0 200 60" className="w-full h-1/2 opacity-70 my-2">
                <path d="M 0,30 Q 15,10 30,30 T 60,30 T 90,30 T 120,45 T 150,15 T 180,30 T 200,30" fill="none" stroke="#06b6d4" strokeWidth="2.5" className="animate-pulse" />
              </svg>
              <div className="flex justify-between text-[10px] font-mono text-text-secondary border-t border-border-subtle pt-3">
                <span>TEMP: 42.5°C</span>
                <span>VIB: NORMAL</span>
              </div>
            </div>
          </div>
        );
      case "ss-agencies":
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/40 to-slate-900/60 flex items-center justify-center p-8 overflow-hidden select-none">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="relative w-full h-full flex flex-col justify-between border border-indigo-500/20 rounded-xl p-6 bg-surface-secondary/40 backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono tracking-widest text-indigo-400">BILLING APPLICATION</span>
                <span className="text-[10px] font-mono text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded">VERCEL LIVE</span>
              </div>
              {/* Abstract Payment Card representation */}
              <div className="w-56 h-28 border border-indigo-500/30 rounded-xl p-4 self-center bg-gradient-to-br from-indigo-900/20 to-slate-900/40 backdrop-blur flex flex-col justify-between text-left">
                <div className="flex justify-between items-start">
                  <div className="w-8 h-6 bg-indigo-500/20 rounded" />
                  <span className="text-[8px] font-mono text-indigo-400 font-bold">SS PLATFORM</span>
                </div>
                <div className="text-sm font-mono tracking-[0.1em] text-white">•••• •••• •••• 8840</div>
                <div className="flex justify-between text-[8px] font-mono text-text-secondary">
                  <span>VAL: 12/28</span>
                  <span>PCI SECURE</span>
                </div>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-text-secondary border-t border-border-subtle pt-3">
                <span>VOL: ₹12.4Cr</span>
                <span>LATENCY: 120MS</span>
              </div>
            </div>
          </div>
        );
      case "direct-market-access":
      default:
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/40 to-neutral-900/60 flex items-center justify-center p-8 overflow-hidden select-none">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:100%_12px]" />
            <div className="relative w-full h-full flex flex-col justify-between border border-orange-500/20 rounded-xl p-6 bg-surface-secondary/40 backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono tracking-widest text-orange-400">PROGRESSIVE WEB APP</span>
                <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded">OFFLINE ENABLED</span>
              </div>
              {/* Agriculture market layout abstract */}
              <div className="grid grid-cols-2 gap-3 my-2 w-full">
                <div className="border border-border-subtle p-2 rounded flex flex-col gap-1 bg-background/50">
                  <div className="w-6 h-6 rounded bg-orange-500/20" />
                  <div className="h-1.5 bg-text-secondary/20 rounded w-4/5" />
                  <div className="h-2 bg-orange-500/30 rounded w-1/2" />
                </div>
                <div className="border border-border-subtle p-2 rounded flex flex-col gap-1 bg-background/50">
                  <div className="w-6 h-6 rounded bg-emerald-500/20" />
                  <div className="h-1.5 bg-text-secondary/20 rounded w-4/5" />
                  <div className="h-2 bg-emerald-500/30 rounded w-1/2" />
                </div>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-text-secondary border-t border-border-subtle pt-3">
                <span>LATENCY: 85MS</span>
                <span>SYNC: OK</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="work" className="py-24 bg-background border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <ScrollReveal direction="down">
              <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
                03 // PORTFOLIO
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
                    {renderProjectPreview(project.id)}
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
