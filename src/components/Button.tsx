import React from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyle =
    "relative inline-flex items-center justify-center font-sans text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden";

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "px-7 py-3.5 bg-text-primary text-background border border-text-primary hover:bg-transparent hover:text-text-primary";
      case "secondary":
        return "px-7 py-3.5 bg-transparent text-text-primary border border-border-subtle hover:border-text-primary";
      case "text":
        return "px-0 py-2 bg-transparent text-text-primary hover:text-accent border-b border-transparent hover:border-accent rounded-none";
      default:
        return "";
    }
  };

  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-2 select-none"
    >
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyle} ${getVariantStyles()} ${className}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`${baseStyle} ${getVariantStyles()} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${getVariantStyles()} ${className}`}
    >
      {content}
    </button>
  );
};
