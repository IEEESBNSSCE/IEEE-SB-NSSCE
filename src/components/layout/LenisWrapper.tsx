"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";

export default function LenisWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Sync Lenis with GSAP's requestAnimationFrame
    gsap.ticker.add((time) => {
      // Lenis ticker is handled by Lenis react wrapper, 
      // but we can ensure GSAP is synced if needed.
    });

    return () => {
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
