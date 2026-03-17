"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CardumenLogo } from "./CardumenLogo";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-20 px-6 sm:px-12 flex flex-col justify-center bg-brandBackground overflow-hidden">
      {/* Abstract Background Shapes mimicking logo drops */}
      <div className="absolute top-10 md:top-20 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-[50%_50%_0_50%] rotate-45 -z-10 mix-blend-multiply blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-0 md:left-10 w-64 md:w-80 h-64 md:h-80 bg-primary/10 rounded-[50%_0_50%_50%] -rotate-45 -z-10 mix-blend-multiply blur-3xl" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24 w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative lg:w-[42%] xl:w-[45%] flex flex-col items-start lg:pr-16 max-w-[620px]"
        >
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 organic-shape-2 blur-3xl -z-10" />
          <span className="text-secondary font-medium tracking-wider uppercase mb-4 text-xs md:text-sm bg-secondary/10 px-4 py-1.5 rounded-full inline-block">
            Cerámica Artesanal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-7xl tracking-tight text-gray-800 leading-[1.1] mb-6 md:mb-8">
            Arte orgánico para tu hogar contemporáneo
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-xl font-light leading-relaxed">
            Piezas únicas moldeadas a mano en Mar del Plata. Explora la belleza de lo imperfecto y trae calidez a tus espacios.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#gallery"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20 organic-shape-2"
            >
              Ver Colección
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-1/2 relative flex justify-center w-full mt-8 lg:mt-0"
        >
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            <CardumenLogo className="w-full h-full drop-shadow-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
