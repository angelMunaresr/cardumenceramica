"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { cardumenBrandClassNames } from "./cardumenBrandStyles";

export function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formPanelId = useId();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Consulta de ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\n\n${message}`
    );

    window.location.href = `mailto:cardumenceramica@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-14 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-[50%_0_50%_50%] -rotate-45 blur-3xl -z-10 animate-pulse" />

      {/* ── MOBILE LAYOUT (hidden on md+) ── */}
      <div className="md:hidden px-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <span className="text-secondary font-medium tracking-wider uppercase mb-2 text-xs inline-block">
            Creamos Juntos
          </span>

          {/* Title */}
          <h2 className="font-serif text-4xl text-gray-900 leading-tight mb-6">
            Lleva una pieza única a tu hogar
          </h2>

          {/* Hero image – full width organic shape */}
          <div className="w-full h-64 rounded-[40%_20%_40%_20%/20%_40%_20%_40%] overflow-hidden shadow-xl mb-6">
            <img
              src="/img/sintitulo2.png"
              alt="Pieza de cerámica de Cardumen"
              className="w-full h-full object-cover"
            />
          </div>

          {/* First paragraph */}
          <p className="text-base text-gray-600 mb-6 font-light leading-relaxed">
            Si estás interesado en adquirir una pieza, hacer un pedido especial, o tienes alguna consulta sobre los talleres, no dudes en escribirme.
          </p>

          {/* Two accent photos side by side */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="h-40 rounded-[50%_10%_50%_10%/10%_50%_10%_50%] overflow-hidden shadow-md translate-y-2">
              <img
                src="/img/sintitulo3.png"
                alt="Cerámica artesanal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 rounded-[10%_50%_10%_50%/50%_10%_50%_10%] overflow-hidden shadow-md -translate-y-2">
              <img
                src="/img/sintitulo4.png"
                alt="Esmaltes y texturas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact form card */}
          <div className="bg-brandBackground p-5 rounded-[2rem_2rem_0_2rem] shadow-sm border border-gray-100">
            <button
              type="button"
              onClick={() => setIsFormOpen((v) => !v)}
              aria-expanded={isFormOpen}
              aria-controls={formPanelId}
              className="w-full organic-shape-2 bg-white/70 backdrop-blur-sm border border-gray-200/70 shadow-sm hover:shadow-md hover:border-primary/20 transition-all px-6 py-5 flex items-center justify-between text-gray-800"
            >
              <span className="text-base font-medium tracking-tight">Enviar un mensaje</span>
              <motion.span
                animate={{ rotate: isFormOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-primary"
                aria-hidden="true"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isFormOpen && (
                <motion.div
                  id={formPanelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="pt-6">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="name-mobile" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          id="name-mobile"
                          name="name"
                          required
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="Tu nombre..."
                        />
                      </div>
                      <div>
                        <label htmlFor="email-mobile" className="block text-sm font-medium text-gray-700 mb-2">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          id="email-mobile"
                          name="email"
                          required
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="ejemplo@correo.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="message-mobile" className="block text-sm font-medium text-gray-700 mb-2">
                          Mensaje
                        </label>
                        <textarea
                          id="message-mobile"
                          name="message"
                          rows={4}
                          required
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                          placeholder="¿En qué te puedo ayudar?"
                        ></textarea>
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full ${cardumenBrandClassNames.primaryButton}`}
                      >
                        Enviar Mensaje
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* ── DESKTOP LAYOUT (hidden below md) ── */}
      <div className="hidden md:flex min-h-dvh items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start lg:items-center">
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
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brandBackground p-6 sm:p-8 md:p-12 rounded-[2rem_2rem_0_2rem] shadow-sm border border-gray-100"
          >
            <button
              type="button"
              onClick={() => setIsFormOpen((v) => !v)}
              aria-expanded={isFormOpen}
              aria-controls={formPanelId}
              className="w-full organic-shape-2 bg-white/70 backdrop-blur-sm border border-gray-200/70 shadow-sm hover:shadow-md hover:border-primary/20 transition-all px-6 py-5 flex items-center justify-between text-gray-800"
            >
              <span className="text-base sm:text-lg font-medium tracking-tight">Enviar un mensaje</span>
              <motion.span
                animate={{ rotate: isFormOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-primary"
                aria-hidden="true"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isFormOpen && (
                <motion.div
                  id={formPanelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="pt-6">
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
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
                          name="email"
                          required
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
                          name="message"
                          rows={4}
                          required
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                          placeholder="¿En qué te puedo ayudar?"
                        ></textarea>
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full ${cardumenBrandClassNames.primaryButton}`}
                      >
                        Enviar Mensaje
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
