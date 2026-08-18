import React from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = "",
}) => {
  const getDirections = () => {
    switch (direction) {
      case "up":
        return { hidden: { y: distance, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case "down":
        return { hidden: { y: -distance, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case "left":
        return { hidden: { x: distance, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case "right":
        return { hidden: { x: -distance, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case "none":
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  const variants = getDirections();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // premium custom cubic-bezier
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
