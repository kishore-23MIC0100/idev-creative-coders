import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  const currentYear = 2026; // Static copyright year as requested

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "GitHub", url: "https://github.com" },
  ];

  const quickLinks = [
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-surface border-t border-border-subtle pt-16 pb-8 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center group max-w-fit">
              <Logo />
            </Link>
            <p className="text-text-secondary text-sm max-w-sm mt-2 leading-relaxed text-left">
              IDEV Creative Coders combines design, development, and emerging technology to create websites, applications, and digital products that are built to perform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-[10px] font-mono tracking-widest text-text-primary uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-text-primary text-xs uppercase tracking-wider transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Socials */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="text-[10px] font-mono tracking-widest text-text-primary uppercase">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-2 text-xs text-text-secondary leading-relaxed">
              <a
                href="mailto:idevccv@gmail.com"
                className="hover:text-accent transition-colors duration-300 flex items-center gap-1 group w-max"
              >
                idevccv@gmail.com
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="tel:+918610582676"
                className="hover:text-accent transition-colors duration-300 w-max"
              >
                +91 86105 82676
              </a>
              <a
                href="https://idevpro.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300 flex items-center gap-1 group w-max"
              >
                idevpro.in
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Social Grid */}
            <div className="flex items-center gap-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-text-secondary">
            &copy; {currentYear} IDEV Creative Coders. All Rights Reserved.
          </p>
          <p className="text-[10px] font-mono text-text-secondary flex items-center gap-1">
            Creative Technology. Digital Experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};
