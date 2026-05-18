"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorSpotlight() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Soft spring config for fluid liquid-like movement
  const springConfig = { damping: 50, stiffness: 250, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Centers the 300px glow circle on the cursor tip
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        x: glowX,
        y: glowY,
        background: "radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, rgba(250, 204, 21, 0.04) 60%, rgba(0, 0, 0, 0) 100%)",
      }}
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full blur-2xl z-30 hidden md:block"
    />
  );
}
