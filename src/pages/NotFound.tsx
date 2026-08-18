import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../components/Button";
import { ScrollReveal } from "../components/ScrollReveal";

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "404 - Page Off Grid | IDEV Creative Coders";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 select-none">
      <div className="max-w-md mx-auto text-center flex flex-col items-center gap-6">
        <ScrollReveal direction="down">
          <span className="text-[10px] font-mono tracking-[0.3em] text-accent uppercase block">
            ERROR 404
          </span>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-reveal-gradient leading-[1.2]">
            Looks like this page went off the grid.
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} className="max-w-xs">
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            The link you followed may be broken, or the page has been moved into another developer deployment.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <Button to="/" variant="primary">
            Back Home <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </ScrollReveal>
      </div>
    </div>
  );
};
