"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
         {/* Decorative elements */}
         <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-[50%_0_50%_50%] -rotate-45 blur-3xl -z-10 animate-pulse" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-medium tracking-wider uppercase mb-2 md:mb-4 text-xs md:text-sm inline-block">
            Creamos Juntos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-4 md:mb-6">
            Lleva una pieza única a tu hogar
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-10 font-light max-w-lg">
            Si estás interesado en adquirir una pieza, hacer un pedido especial, o tienes alguna consulta sobre los talleres, no dudes en escribirme.
          </p>

          <div className="space-y-6">
            <a href="mailto:hola@cardumenceramica.com" className="flex items-center gap-4 text-gray-800 hover:text-primary transition-colors group">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Mail size={20} />
              </div>
              <span className="text-lg font-light">hola@cardumenceramica.com</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-gray-800 hover:text-secondary transition-colors group">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                <Instagram size={20} />
              </div>
              <span className="text-lg font-light">@cardumen_ceramica</span>
            </a>
             <div className="flex items-center gap-4 text-gray-800 group">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <span className="text-lg font-light">Mar del Plata, Argentina</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-brandBackground p-6 sm:p-8 md:p-12 rounded-[2rem_2rem_0_2rem] shadow-sm border border-gray-100"
        >
          <form className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="Tu nombre..."
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="ejemplo@correo.com"
              />
            </div>
            <div>
               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="¿En qué te puedo ayudar?"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
