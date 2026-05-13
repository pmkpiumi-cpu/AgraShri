"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  const ringX = useSpring(0, { stiffness: 100, damping: 20 });
  const ringY = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!hasMoved) setHasMoved(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, ringX, ringY, hasMoved]);

  if (!mounted || !hasMoved) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Small dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="w-2 h-2 bg-green-600 rounded-full"
      />
      
      {/* Large ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="w-10 h-10 border-2 border-yellow-400/50 rounded-full"
      />
    </div>
  );
}
