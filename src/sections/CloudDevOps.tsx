import React, { useState, useEffect } from "react";
import { Server, ArrowRight } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

export const CloudDevOps: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>("LOAD BALANCER");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "[SYSTEM] Initializing cluster boundaries...",
    "[AWS] ECS container provisioning node-08...",
    "[CI/CD] Deployment pipeline exit 0."
  ]);

  const pipeline = [
    { name: "LOAD BALANCER", details: "AWS ALB distributing connections across multiple ECS tasks." },
    { name: "APPLICATION", details: "Dockerized Node/React environment instances." },
    { name: "API ROUTER", details: "Reverse proxy handling secure endpoints." },
    { name: "DATABASE", details: "Replicated PostgreSQL nodes with transactional mirrors." },
    { name: "STORAGE", details: "S3 Object boundaries with IAM bucket policies." },
    { name: "MONITORING", details: "Prometheus & Grafana dashboard health auditing." }
  ];

  // Rotate simulation logs
  useEffect(() => {
    const timer = setInterval(() => {
      const msgs = [
        `[AWS-ALB] Healthy checks routing to cluster node-${Math.floor(Math.random() * 5 + 1)}`,
        `[PROMETHEUS] System memory status ok: ${(Math.random() * 10 + 40).toFixed(1)}%`,
        `[POSTGRES] Replicating binary write-log transaction #${Math.floor(Math.random() * 1000 + 4000)}`,
        "[CI/CD] Scanning vulnerability boundaries... 0 warnings."
      ];
      const newMsg = msgs[Math.floor(Math.random() * msgs.length)];
      setConsoleLogs((prev) => [...prev.slice(1), newMsg]);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background border-b border-border-subtle select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start text-left">
          <div className="lg:col-span-6">
            <ScrollReveal direction="down">
              <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
                05 // CLOUD & DEVOPS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-reveal-gradient leading-[1.1] mb-6">
                ENGINEERED FOR <br />
                PRODUCTION.
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6">
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
                We orchestrate cloud infrastructure built on resilience, observability, and scale. Using Docker, Terraform, and automated CI/CD deployment architectures to keep platforms online.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Console / Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Node Pipeline (Left Column) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-surface border border-border-subtle p-8 rounded-3xl text-left">
            <div>
              <span className="text-[9px] font-mono tracking-[0.25em] text-text-secondary uppercase mb-6 block">
                Cluster Architecture Path
              </span>
              
              <div className="flex flex-col gap-4">
                {pipeline.map((step) => (
                  <div
                    key={step.name}
                    onClick={() => setActiveStep(step.name)}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                      activeStep === step.name
                        ? "border-accent bg-background/50 text-text-primary"
                        : "border-border-subtle bg-transparent text-text-secondary hover:border-text-primary/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Server className={`w-4 h-4 ${activeStep === step.name ? "text-accent" : "text-text-secondary"}`} />
                      <span className="text-xs font-mono font-bold tracking-widest">{step.name}</span>
                    </div>
                    {activeStep === step.name && (
                      <ArrowRight className="w-3.5 h-3.5 text-accent animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Detail Explanation */}
            <div className="mt-8 pt-6 border-t border-border-subtle min-h-[70px]">
              <span className="text-[9px] font-mono tracking-widest text-accent uppercase block mb-1">
                Node Specification
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                {pipeline.find((p) => p.name === activeStep)?.details}
              </p>
            </div>
          </div>

          {/* Infrastructure Metrics Console (Right Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-surface border border-border-subtle p-8 rounded-3xl text-left">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[9px] font-mono tracking-[0.25em] text-text-secondary uppercase">
                  Telemetry Console
                </span>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[9px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
              </div>

              {/* simulated metric cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border border-border-subtle bg-background/50 p-4 rounded-xl">
                  <span className="text-[9px] font-mono text-text-secondary block mb-1">AWS CPU load</span>
                  <span className="text-xl font-mono font-bold text-text-primary">12.5%</span>
                </div>
                <div className="border border-border-subtle bg-background/50 p-4 rounded-xl">
                  <span className="text-[9px] font-mono text-text-secondary block mb-1">API Latency</span>
                  <span className="text-xl font-mono font-bold text-text-primary">94ms</span>
                </div>
              </div>

              {/* Console Logs Terminal */}
              <div className="bg-background/80 border border-border-subtle p-4 rounded-xl font-mono text-[10px] text-emerald-400 flex flex-col gap-2 min-h-[140px]">
                {consoleLogs.map((log, index) => (
                  <div key={index} className="truncate">
                    <span className="text-text-secondary select-none">{"$ "}</span>
                    {log}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-text-secondary mt-6 pt-4 border-t border-border-subtle">
              <span>Docker Containers: OK</span>
              <span>CI/CD: SUCCESS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
