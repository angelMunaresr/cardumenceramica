"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CardumenDropsProps {
  className?: string;
}

export function CardumenDrops({ className = "" }: CardumenDropsProps) {
  const [viewBox, setViewBox] = useState("0 0 1024 1024");
  const [dropPaths, setDropPaths] = useState<string[]>([]);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const res = await fetch("/img/Cardumen.svg");
        const text = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "image/svg+xml");
        const vb = doc.documentElement.getAttribute("viewBox");
        if (vb && isMounted) setViewBox(vb);

        const dropCandidates = Array.from(
          doc.querySelectorAll('path[fill^="#2A"], path[fill^="#2B"], path[fill^="#2D"]')
        ) as SVGPathElement[];
        const ds = dropCandidates
          .map((p) => p.getAttribute("d") || "")
          .filter((d) => d && d.length > 0);

        if (isMounted) setDropPaths(ds.slice(0, 22));
      } catch {
        if (isMounted) setDropPaths([]);
      }
    };

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.015, delayChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 220, damping: 18 } },
  };

  return (
    <svg viewBox={viewBox} className={className} aria-hidden="true" focusable="false">
      {dropPaths.length > 0 ? (
        <motion.g variants={container} initial="hidden" animate="show">
          {dropPaths.map((d, i) => {
            const amplitude = 14;
            const phase = i * 0.12;
            const duration = 3.8;
            return (
              <motion.path
                key={i}
                d={d}
                fill="currentColor"
                variants={item}
                animate={{
                  y: [0, -amplitude, 0, amplitude, 0],
                  rotate: [0, 1.5, 0, -1.5, 0],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: phase,
                }}
                style={{ transformOrigin: "50% 50%" }}
              />
            );
          })}
        </motion.g>
      ) : null}
    </svg>
  );
}

