import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { ContactForm } from "../components/ContactForm";

export const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-background select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <ScrollReveal direction="down">
              <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase block mb-4">
                08 // INQUIRY
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-reveal-gradient leading-[1.1] mb-6 font-sans">
                LET'S CREATE <br />
                SOMETHING <br />
                GREAT.
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-sm">
                Have an idea, product, or business challenge? Let's turn it into a digital experience.
              </p>
            </ScrollReveal>

            {/* Information List */}
            <div className="flex flex-col gap-6 pt-8 border-t border-border-subtle mt-4">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">
                    STUDIO
                  </span>
                  <span className="text-sm font-medium text-text-primary">
                    IDEV Creative Coders
                  </span>
                </div>
              </ScrollReveal>

              {/* Email link with custom 200-300ms transition and slide */}
              <ScrollReveal direction="up" delay={0.2}>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">
                    EMAIL
                  </span>
                  <a
                    href="mailto:idevccv@gmail.com"
                    className="group inline-flex items-center gap-1 text-sm font-medium text-text-primary hover:text-accent hover:translate-x-1 transition-all duration-300 w-max"
                  >
                    idevccv@gmail.com
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </a>
                </div>
              </ScrollReveal>

              {/* Phone */}
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">
                    PHONE
                  </span>
                  <a
                    href="tel:+918610582676"
                    className="inline-flex items-center text-sm font-medium text-text-primary hover:text-accent hover:translate-x-1 transition-all duration-300 w-max"
                  >
                    +91 86105 82676
                  </a>
                </div>
              </ScrollReveal>

              {/* Web URL */}
              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">
                    WEBSITE
                  </span>
                  <a
                    href="https://idevpro.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm font-medium text-text-primary hover:text-accent hover:translate-x-1 transition-all duration-300 w-max"
                  >
                    idevpro.in
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.2}>
              <ContactForm />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
