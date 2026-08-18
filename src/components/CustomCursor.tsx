import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<"default" | "view" | "open">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect mobile/touch devices
    const checkDevice = () => {
      const mobile = 
        window.matchMedia("(max-width: 768px)").matches || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Track hovered elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find closest element with custom cursor attribute
      const interactiveEl = target.closest("[data-cursor]");
      if (interactiveEl) {
        const type = interactiveEl.getAttribute("data-cursor") as "view" | "open";
        setCursorType(type || "view");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, isVisible]);

  if (isMobile || !isVisible) return null;

  const isInteractive = cursorType === "view" || cursorType === "open";

  return (
    <motion.div
      style={{
        x: cursorSpringX,
        y: cursorSpringY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center font-sans font-semibold text-[10px] tracking-widest uppercase transition-all duration-300 ${
        isInteractive
          ? "w-16 h-16 bg-white text-background scale-100 mix-blend-normal"
          : "w-3 h-3 bg-accent scale-100 mix-blend-difference"
      }`}
      animate={{
        scale: isInteractive ? 1 : 1,
      }}
    >
      {cursorType === "view" && <span className="text-background select-none">VIEW</span>}
      {cursorType === "open" && <span className="text-background select-none">OPEN</span>}
    </motion.div>
  );
};
