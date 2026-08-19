import React, { useState } from "react";
import { Shield, Lock, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

interface SecurityNode {
  name: string;
  role: string;
  details: string;
}

export const SecuritySection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const securityNodes: SecurityNode[] = [
    { name: "USER", role: "Endpoint Client", details: "Secured via strict browser CORS policies, TLS encryption, and secure cookies." },
    { name: "IDENTITY", role: "Auth Gate (2FA / IAM)", details: "Validates JSON Web Tokens (JWT), verifies Session Sign-in logs, and manages RBAC." },
    { name: "APPLICATION", role: "App Layer Code", details: "Sanitizes input parameters, restricts CORS, protects against SQLi/XSS, and limits requests." },
    { name: "API", role: "Gateway & Routers", details: "Enforces rate-limits, checks client scopes, signs API payloads, and audits route metrics." },
    { name: "DATABASE", role: "Storage Ledger", details: "Encrypts transactional records at rest, locks access credentials, and writes signed binary logs." },
    { name: "CLOUD", role: "Cluster Boundary", details: "VPC isolation, firewalls, automated vulnerability scans, and security group rules." },
  ];

  const capabilities = [
    "Application Security",
    "API Security",
    "Authentication",
    "Authorization",
    "IAM (Identity Access)",
    "Secure Architecture",
    "Cloud Security",
    "DevSecOps Integration",
    "Security Testing",
    "Vulnerability Assessment"
  ];

  return (
    <section className="py-24 bg-background border-b border-border-subtle select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start text-left">
          <div className="lg:col-span-6">
            <ScrollReveal direction="down">
              <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
                04 // CYBERSECURITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-reveal-gradient leading-[1.1] mb-6">
                SECURITY IS PART OF <br className="hidden sm:block" />
                THE ARCHITECTURE.
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6">
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
                Security considerations are integrated across applications, APIs, identity, infrastructure and cloud environments. We design security boundaries directly into the initial blueprints.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Security Flow Diagram Block */}
        <ScrollReveal direction="up" delay={0.3} className="mb-20">
          <div className="bg-surface border border-border-subtle p-8 md:p-12 rounded-3xl text-center">
            <span className="text-[9px] font-mono tracking-[0.25em] text-text-secondary uppercase mb-8 block">
              Architectural Security Boundaries (Hover to Inspect)
            </span>

            {/* Nodes Row: Desktop (flex), Mobile (stacked) */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative max-w-4xl mx-auto">
              
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-[5%] right-[5%] h-[2px] border-t border-dashed border-border-subtle z-0 -translate-y-1/2" />

              {securityNodes.map((node, index) => (
                <div
                  key={node.name}
                  onMouseEnter={() => setActiveNode(node.name)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`relative z-10 w-full lg:w-28 py-4 px-3 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 bg-background/80 backdrop-blur cursor-pointer ${
                    activeNode === node.name
                      ? "border-accent shadow-lg shadow-accent/10 [html.light_&]:shadow-md [html.light_&]:shadow-accent/15 -translate-y-1"
                      : "border-border-subtle hover:border-text-primary/30"
                  }`}
                >
                  <Shield className={`w-5 h-5 mb-2 transition-colors duration-300 ${activeNode === node.name ? "text-accent" : "text-text-secondary"}`} />
                  <span className="text-xs font-mono font-bold tracking-wider text-text-primary">
                    {node.name}
                  </span>
                  
                  {/* Small Chevron pointing next */}
                  {index < securityNodes.length - 1 && (
                    <span className="lg:hidden text-text-secondary my-2">↓</span>
                  )}
                </div>
              ))}
            </div>

            {/* Dynamic Info Box */}
            <div className="min-h-[100px] mt-10 max-w-2xl mx-auto flex items-center justify-center">
              {activeNode ? (
                (() => {
                  const node = securityNodes.find((n) => n.name === activeNode);
                  return (
                    <div className="bg-background border border-accent/20 px-6 py-4 rounded-2xl text-left w-full animate-fade-in">
                      <span className="text-[10px] font-mono tracking-widest text-accent uppercase block mb-1">
                        Active Shield: {node?.role}
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {node?.details}
                      </p>
                    </div>
                  );
                })()
              ) : (
                <div className="text-text-secondary text-xs font-mono flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5" />
                  Hover over any node above to inspect its security mechanisms.
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Capabilities Grid */}
        <div className="border-t border-border-subtle pt-16">
          <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-8 text-left">
            SECURITY SPECIFICATIONS
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
            {capabilities.map((cap) => (
              <div key={cap} className="flex gap-2 items-center">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-xs font-mono tracking-wide text-text-secondary uppercase">
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
