"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const galleryItems = [
  {
    id: 1,
    image: "/img/sintitulo1.png",
    title: "Sirena",
    colSpan: "col-span-12 md:col-span-8",
    height: "h-64 sm:h-96",
  },
  {
    id: 2,
    image: "/img/sintitulo2.png",
    title: "Origen",
    colSpan: "col-span-12 md:col-span-4",
    height: "h-64 sm:h-96",
  },
  {
    id: 3,
    image: "/img/sintitulo3.png",
    title: "Eco",
    colSpan: "col-span-12 md:col-span-6",
    height: "h-80 sm:h-[400px]",
  },
  {
    id: 4,
    image: "/img/sintitulo4.png",
    title: "Lava",
    colSpan: "col-span-12 md:col-span-6",
    height: "h-80 sm:h-[400px]",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-brandBackground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <span className="text-secondary font-medium tracking-wider uppercase mb-2 md:mb-4 text-xs md:text-sm inline-block">
              Colecciones
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Diseños que invitan a pausar y contemplar
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-primary font-medium border-b-2 border-primary/30 hover:border-primary pb-1 transition-all"
          >
            <Link href="/galeria" className="flex items-center gap-2">
              Ver toda la Tienda
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${item.colSpan} ${item.height} relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow`}
            >
              <Link href={`/products/${item.id}`} className="block w-full h-full">
                {/* Overlay: Always present with gradient on mobile for readability, transitions to standard hover behavior on larger screens */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gray-900/10 lg:bg-none lg:group-hover:bg-gray-900/40 transition-colors z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Text content: Visible by default on mobile, animated on hover for desktop */}
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 z-20 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                  <h3 className="text-xl sm:text-2xl font-serif text-white mb-1 sm:mb-2">{item.title}</h3>
                  <span className="text-white/90 lg:text-white/80 font-light text-xs sm:text-sm tracking-wide uppercase">Cardumen Cerámica</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
