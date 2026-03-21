"use client";

import { motion } from "framer-motion";
import { Sparkles, Leaf, Wrench } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <img
        src="data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23339999' d='M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.2C90.8,-33.3,96.8,-16.7,96.2,-0.4C95.5,15.9,88.2,31.8,77.6,44.9C67,58,53.2,68.4,38.2,74.9C23.2,81.4,7.1,84.1,-8.5,82.4C-24.1,80.7,-39.2,74.6,-53.4,65.6C-67.6,56.6,-80.9,44.7,-88.4,29.7C-95.9,14.7,-97.6,-3.4,-92.8,-19.9C-88,-36.4,-76.7,-51.3,-62.4,-58.5C-48.1,-65.7,-30.9,-65.3,-15.6,-61.8C-0.3,-58.3,13,-51.7,28.4,-53.2C43.8,-54.7,61.3,-64.3,44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E"
        alt="Decorative shape"
        className="absolute -top-32 -left-32 w-96 h-96 opacity-10 pointer-events-none"
      />

      {/* ── MOBILE LAYOUT (hidden on md+) ── */}
      <div className="md:hidden px-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl text-gray-900 mb-6 leading-tight"
          >
            Hola, soy Celeste.
          </motion.h2>

          {/* Hero photo – full width */}
          <motion.div
            variants={itemVariants}
            className="w-full h-72 rounded-[40%_20%_40%_20%/20%_40%_20%_40%] overflow-hidden shadow-xl mb-6"
          >
            <img
              src="/img/Cardumen1.jpg"
              alt="Celeste Cañete trabajando en el taller"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* First paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base text-gray-600 mb-6 font-light leading-relaxed"
          >
            Cardumen Cerámica nace de la necesidad de reconectar con la tierra y el tiempo, en un
            viaje de experimentación y aprendizaje continuo desde mi taller en Mar del Plata.
          </motion.p>

          {/* Two photos side by side – offset feel */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-3 mb-6"
          >
            <div className="h-44 rounded-[50%_10%_50%_10%/10%_50%_10%_50%] overflow-hidden shadow-lg translate-y-3">
              <img
                src="/img/Cardumen2.jpg"
                alt="Torno alfarero"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-44 rounded-[10%_50%_10%_50%/50%_10%_50%_10%] overflow-hidden shadow-lg -translate-y-3">
              <img
                src="/img/Cardumen3.jpg"
                alt="Manos modelando arcilla"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Second paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base text-gray-600 mb-8 font-light leading-relaxed"
          >
            Cada pieza que creo es única, llevando consigo la huella de mis manos y la inspiración
            del entorno costero. Busco que mis creaciones no solo sean objetos, sino compañeras
            silentes en tus momentos diarios.
          </motion.p>

          {/* 4th photo – accent */}
          <motion.div
            variants={itemVariants}
            className="w-3/4 mx-auto h-48 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden shadow-md mb-8"
          >
            <img
              src="/img/sintitulo1.png"
              alt="Esmaltes"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Pillars */}
          <motion.div variants={itemVariants} className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Sparkles className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">Inspiración Única</h3>
                <p className="text-gray-600 font-light text-sm">Diseños que capturan la esencia del mar y la naturaleza en formas orgánicas.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                <Leaf className="text-secondary" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">Materiales Nobles</h3>
                <p className="text-gray-600 font-light text-sm">Pastas y esmaltes formulados cuidadosamente para asegurar belleza y durabilidad.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                <Wrench className="text-gray-600" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">Proceso Artesanal</h3>
                <p className="text-gray-600 font-light text-sm">Dedicación completa en cada etapa, desde el modelado hasta la cocción a alta temperatura.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── DESKTOP LAYOUT (hidden below md) ── */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Images grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4 translate-y-6 sm:translate-y-8">
                <div className="w-full h-40 sm:h-48 md:h-64 rounded-[50%_50%_0_50%] overflow-hidden shadow-lg border-2 border-brandBackground">
                  <img
                    src="/img/Cardumen1.jpg"
                    alt="Celeste Cañete trabajando en el taller"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-48 sm:h-64 md:h-80 rounded-[50%_50%_50%_0] overflow-hidden shadow-xl">
                  <img
                    src="/img/Cardumen2.jpg"
                    alt="Torno alfarero"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="w-full h-48 sm:h-64 md:h-80 rounded-[0_50%_50%_50%] overflow-hidden shadow-xl">
                  <img
                    src="/img/Cardumen3.jpg"
                    alt="Manos modelando arcilla"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-40 sm:h-48 md:h-64 rounded-[50%_0_50%_50%] overflow-hidden shadow-lg border-2 border-brandBackground">
                  <img
                    src="/img/sintitulo1.png"
                    alt="Esmaltes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 md:mb-6">
              Hola, soy Celeste.
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 mb-4 md:mb-6 font-light leading-relaxed">
              Cardumen Cerámica nace de la necesidad de reconectar con la tierra y el tiempo, en un viaje de experimentación y aprendizaje continuo desde mi taller en Mar del Plata.
            </motion.p>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 mb-8 md:mb-10 font-light leading-relaxed">
              Cada pieza que creo es única, llevando consigo la huella de mis manos y la inspiración del entorno costero. Busco que mis creaciones no solo sean objetos, sino compañeras silentes en tus momentos diarios.
            </motion.p>

            {/* Pillars */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">Inspiración Única</h3>
                  <p className="text-gray-600 font-light">Diseños que capturan la esencia del mar y la naturaleza en formas orgánicas.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                  <Leaf className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">Materiales Nobles</h3>
                  <p className="text-gray-600 font-light">Pastas y esmaltes formulados cuidadosamente para asegurar belleza y durabilidad.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                  <Wrench className="text-gray-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">Proceso Artesanal</h3>
                  <p className="text-gray-600 font-light">Dedicación completa en cada etapa, desde el modelado hasta la cocción a alta temperatura.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
