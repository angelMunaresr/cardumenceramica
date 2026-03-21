"use client";

import { motion } from "framer-motion";
import { CardumenLogo } from "./CardumenLogo";

export function Hero() {
  return (
    <section className="relative min-h-svh pt-20 pb-8 px-6 sm:px-12 md:pt-32 md:pb-20 flex flex-col justify-center bg-brandBackground overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-10 md:top-20 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-[50%_50%_0_50%] rotate-45 -z-10 mix-blend-multiply blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-0 md:left-10 w-48 md:w-80 h-48 md:h-80 bg-primary/10 rounded-[50%_0_50%_50%] -rotate-45 -z-10 mix-blend-multiply blur-3xl" />

      <div className="max-w-7xl mx-auto w-full">
        {/*
         * Mobile  (<lg): column — logo centered on top, text block centered below
         * Desktop (lg+): row   — text on the left, large logo on the right
         */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-24">

          {/* Logo — centered on mobile, right side on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex justify-center lg:order-2 lg:flex-shrink-0"
          >
            {/* Sizes: 280px mobile · 380px sm · 520px md · 650px lg+ */}
            <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[520px] md:h-[520px] lg:w-[650px] lg:h-[650px]">
              <CardumenLogo className="w-full h-full drop-shadow-2xl" />
            </div>
          </motion.div>

          {/* Text content — centered on mobile, left-aligned on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center text-center lg:items-start lg:text-left lg:order-1 lg:flex-1 lg:pr-16"
          >
            <div className="absolute -top-10 -left-10 w-48 h-48 md:w-64 md:h-64 bg-secondary/10 organic-shape-2 blur-3xl -z-10" />

            {/* Badge */}
            <span className="text-secondary font-medium tracking-wider uppercase mb-3 text-[0.65rem] sm:text-xs md:text-sm bg-secondary/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full inline-block">
              Cerámica Artesanal
            </span>

            {/* Headline — short on mobile, full on desktop */}
            <h1 className="font-serif tracking-tight text-gray-800 leading-[1.1] mb-2 md:mb-4">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl block">
                <span className="lg:hidden">Arte hecho<br />a mano</span>
                <span className="hidden lg:inline">Arte orgánico para<br />tu hogar contemporáneo</span>
              </span>
            </h1>

            {/* Short tagline — always visible, keeps it warm and personal */}
            <p className="text-xs sm:text-sm md:text-lg text-gray-500 mb-5 md:mb-8 font-light leading-relaxed max-w-xs md:max-w-xl">
              <span className="lg:hidden">Piezas únicas desde Mar del Plata.</span>
              <span className="hidden lg:inline">Piezas únicas moldeadas a mano en Mar del Plata. Explora la belleza de lo imperfecto y trae calidez a tus espacios.</span>
            </p>

            {/* CTA — ghost outline, stays out of the logo's way */}
            <motion.a
              whileHover={{ scale: 1.02, backgroundColor: "rgba(43,185,170,0.06)" }}
              whileTap={{ scale: 0.98 }}
              href="/galeria"
              className="organic-shape-2 text-primary border border-primary/40 font-medium uppercase tracking-[0.2em] text-[0.65rem] md:text-[0.7rem] px-8 py-3 md:px-10 md:py-3.5 transition-all"
            >
              Ver Colección
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
