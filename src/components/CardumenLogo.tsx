"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CardumenLogoProps {
  className?: string;
}

export function CardumenLogo({ className = "" }: CardumenLogoProps) {
  const [viewBox, setViewBox] = useState("0 0 1024 1024");
  const [dropPaths, setDropPaths] = useState<string[]>([]);
  const [redTextPaths, setRedTextPaths] = useState<string[]>([]);
  const [blackTextPaths, setBlackTextPaths] = useState<string[]>([]);

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
        if (isMounted) setDropPaths(ds.slice(0, 25));

        // Extrae paths para textos "CAR DU MEN" (rojo) y "CERÁMICA" (negro)
        // Heurística espacial basada en bounding boxes sobre el viewBox
        const [minX, minY, vbW, vbH] = (vb || "0 0 1024 1024").split(" ").map(Number);
        const width = vbW || 1024;
        const height = vbH || 1024;

        // Crea un SVG temporal fuera de pantalla para calcular bbox de cada path
        const ns = "http://www.w3.org/2000/svg";
        const tempSvg = document.createElementNS(ns, "svg");
        tempSvg.setAttribute("viewBox", vb || "0 0 1024 1024");
        tempSvg.style.position = "absolute";
        tempSvg.style.left = "-99999px";
        tempSvg.style.top = "-99999px";
        document.body.appendChild(tempSvg);

        const collectPaths = (selector: string) => {
          const arr: Array<{ d: string; x: number; y: number; w: number; h: number }> = [];
          const nodes = Array.from(doc.querySelectorAll(selector)) as SVGPathElement[];
          for (const n of nodes) {
            const d = n.getAttribute("d");
            if (!d) continue;
            const p = document.createElementNS(ns, "path");
            p.setAttribute("d", d);
            tempSvg.appendChild(p);
            try {
              const b = p.getBBox();
              arr.push({ d, x: b.x, y: b.y, w: b.width, h: b.height });
            } catch {
              // getBBox puede fallar en algunos casos; lo omitimos.
            }
            tempSvg.removeChild(p);
          }
          return arr;
        };

        // Rojo: tonos usados en el SVG para el texto
        // Eliminamos la validación estricta de mayúsculas/minúsculas y agregamos posibles variaciones
        const redAll = collectPaths(
          'path[fill^="#E"], path[fill^="#e"]' // Captura todos los rojos que empiezan con #E o #e
        ).filter(p => {
          // Filtramos solo los tonos que son realmente rojos del logo (para evitar capturar otros elementos)
          const fill = p.d.toLowerCase();
          // Asumimos que cualquier path capturado aquí es rojo debido al selector CSS
          return p.w > width * 0.005 && p.h > height * 0.005;
        });
        
        redAll.sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y));
        if (isMounted) setRedTextPaths(redAll.map((p) => p.d));

        // Negro: “CERÁMICA” usa tonos oscuros en el archivo
        const blackAll = collectPaths(
          'path[fill="#24231F"], path[fill="#272622"], path[fill="#24231f"], path[fill="#272622"], path[fill="#000000"], path[fill="#1a1a1a"]'
        ).filter(p => {
          return p.w > width * 0.003 && p.h > height * 0.003;
        });
        
        blackAll.sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));
        if (isMounted) setBlackTextPaths(blackAll.map((p) => p.d));

        document.body.removeChild(tempSvg);
      } catch {
        // ignore
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.02, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 150, damping: 15 } },
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox={viewBox} className="w-full h-full max-w-[600px] max-h-[600px]">
        {dropPaths.length > 0 ? (
          <motion.g variants={container} initial="hidden" animate="show">
            {dropPaths.map((d, i) => (
              <motion.path key={i} d={d} fill="currentColor" className="text-primary" variants={item} />
            ))}
          </motion.g>
        ) : (
          <image href="/img/Cardumen.svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
        )}

        {/* Texto negro "CERÁMICA" */}
        {blackTextPaths.length > 0 && (
          <motion.g
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.015, delayChildren: 0.35 } } }}
            initial="hidden"
            animate="show"
          >
            {blackTextPaths.map((d, i) => (
              <motion.path key={`b-${i}`} d={d} fill="currentColor" className="text-gray-900" variants={item} />
            ))}
          </motion.g>
        )}

        {/* Texto rojo "CAR DU MEN" */}
        {redTextPaths.length > 0 && (
          <motion.g
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.02, delayChildren: 0.2 } } }}
            initial="hidden"
            animate="show"
          >
            {redTextPaths.map((d, i) => (
              <motion.path key={`r-${i}`} d={d} fill="currentColor" className="text-secondary" variants={item} />
            ))}
          </motion.g>
        )}
      </svg>
    </div>
  );
}
