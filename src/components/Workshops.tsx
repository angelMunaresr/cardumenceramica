"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Users } from "lucide-react";

const workshops = [
  {
    id: "torno",
    title: "Taller de Torno",
    subtitle: "Primera pieza en arcilla desde cero",
    image: "/img/Cardumen2.jpg",
    meta: [
      { icon: Clock, label: "2h 30m" },
      { icon: Users, label: "Cupos: 6" },
      { icon: MapPin, label: "Mar del Plata" },
    ],
    bullets: [
      "Introducción al torno y centrado",
      "Levantado de paredes y formas básicas",
      "Esmaltado guiado (pieza se retira luego de la cocción)",
    ],
  },
  {
    id: "modelado",
    title: "Taller de Modelado a Mano",
    subtitle: "Texturas orgánicas y formas costeras",
    image: "/img/Cardumen1.jpg",
    meta: [
      { icon: Clock, label: "2h" },
      { icon: Users, label: "Cupos: 8" },
      { icon: MapPin, label: "Mar del Plata" },
    ],
    bullets: [
      "Técnicas: pellizco, planchas y churros",
      "Texturas con herramientas y elementos naturales",
      "Terminaciones y preparación para horneado",
    ],
  },
];

export function Workshops() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-brandBackground relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/15 organic-shape-1 blur-3xl -z-10" />
      <div className="absolute -bottom-28 -left-24 w-96 h-96 bg-secondary/10 organic-shape-3 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-secondary font-medium tracking-wider uppercase mb-2 md:mb-4 text-xs md:text-sm inline-block">
              Talleres
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Viví la experiencia del barro y el fuego
            </h2>
          </motion.div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-primary font-medium border-b-2 border-primary/30 hover:border-primary pb-1 transition-all"
          >
            Consultar fechas y cupos <ArrowRight size={18} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {workshops.map((w, idx) => (
            <motion.article
              key={w.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group bg-white/70 backdrop-blur-sm border border-gray-200/70 shadow-sm hover:shadow-xl transition-all organic-shape-2 overflow-hidden"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="font-serif text-3xl text-white leading-tight">{w.title}</h3>
                  <p className="text-white/90 font-light mt-2 max-w-xl">{w.subtitle}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-3 mb-6">
                  {w.meta.map((m) => (
                    <span
                      key={m.label}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-700 bg-brandBackground border border-gray-200 px-4 py-2 organic-shape-1"
                    >
                      <m.icon size={14} className="text-primary" />
                      {m.label}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 text-gray-700 font-light">
                  {w.bullets.map((b) => (
                    <li key={b} className="flex gap-3 items-start">
                      <span className="mt-2 w-2 h-2 bg-primary/60 organic-shape-1 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="flex-1 px-6 py-4 bg-gray-900 text-white font-medium hover:bg-primary transition-colors shadow-lg shadow-black/10 organic-shape-2 text-center"
                  >
                    Reservar mi lugar
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 px-6 py-4 border border-gray-200 text-gray-800 font-medium hover:border-gray-900 hover:bg-gray-50 transition-all organic-shape-2 text-center"
                  >
                    Preguntas frecuentes
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

