"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveBackground() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Motion values to track actual mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply a smooth spring physics to the movement so it slightly lags the cursor elegantly
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Start with the orb hidden or centered until the first mouse move
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // If hovering over interactive elements, we make the orb bigger and change its color
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-slate-50/30">
      <motion.div
        className="absolute rounded-full blur-[100px]"
        animate={{
          width: isHovering ? 800 : 500,
          height: isHovering ? 800 : 500,
          opacity: isHovering ? 0.8 : 0.4,
          background: isHovering 
            ? "radial-gradient(circle, rgba(0,194,255,0.4) 0%, rgba(0,98,155,0.1) 100%)" 
            : "radial-gradient(circle, rgba(0,98,155,0.3) 0%, rgba(0,194,255,0.05) 100%)"
        }}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}
