"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white pt-16 md:pt-20 pb-8 md:pb-10 overflow-hidden relative">
      {/* Decorative Brand Scribble */}
       <img
        src="data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23339999' d='M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.2C90.8,-33.3,96.8,-16.7,96.2,-0.4C95.5,15.9,88.2,31.8,77.6,44.9C67,58,53.2,68.4,38.2,74.9C23.2,81.4,7.1,84.1,-8.5,82.4C-24.1,80.7,-39.2,74.6,-53.4,65.6C-67.6,56.6,-80.9,44.7,-88.4,29.7C-95.9,14.7,-97.6,-3.4,-92.8,-19.9C-88,-36.4,-76.7,-51.3,-62.4,-58.5C-48.1,-65.7,-30.9,-65.3,-15.6,-61.8C-0.3,-58.3,13,-51.7,28.4,-53.2C43.8,-54.7,61.3,-64.3,44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E"
        alt="Decorative shape"
        className="absolute -bottom-32 -right-32 w-96 h-96 opacity-5 pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-16 mb-12 md:mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 group">
               <div className="w-10 h-10 bg-primary/20 rounded-[50%_50%_0_50%] rotate-45 flex items-center justify-center text-primary font-bold font-serif text-xl border-2 border-primary/30 group-hover:bg-primary/30 transition-colors">
                <span className="-rotate-45">C</span>
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="font-serif font-black text-2xl tracking-wider text-secondary leading-none uppercase">
                  Cardumen
                </span>
                <span className="font-sans font-semibold text-[0.70rem] tracking-[0.2em] text-white uppercase mt-1">
                  Cerámica
                </span>
              </div>
            </a>
            <p className="text-gray-400 font-light max-w-sm text-lg leading-relaxed mb-8">
              Arte orgánico para tu hogar contemporáneo. Cerámica artesanal creada con pasión en Mar del Plata, Argentina.
            </p>
          </div>

          {/* Links Column */}
          <div className="col-span-1">
             <h4 className="text-lg font-serif font-medium mb-4 md:mb-6 uppercase tracking-wider text-gray-500">Navegación</h4>
             <ul className="space-y-1 md:space-y-4">
                <li><a href="#" className="block py-2 md:py-0 text-gray-300 hover:text-primary transition-colors font-light">Inicio</a></li>
                <li><a href="#about" className="block py-2 md:py-0 text-gray-300 hover:text-primary transition-colors font-light">Sobre Mí</a></li>
                <li><a href="#gallery" className="block py-2 md:py-0 text-gray-300 hover:text-primary transition-colors font-light">Galería</a></li>
                <li><a href="#contact" className="block py-2 md:py-0 text-gray-300 hover:text-primary transition-colors font-light">Contacto</a></li>
             </ul>
          </div>

          {/* Social Column */}
          <div className="col-span-1">
             <h4 className="text-lg font-serif font-medium mb-4 md:mb-6 uppercase tracking-wider text-gray-500">Social</h4>
             <ul className="space-y-1 md:space-y-4">
                <li><a href="#" className="block py-2 md:py-0 text-gray-300 hover:text-secondary transition-colors font-light">Instagram</a></li>
                <li><a href="#" className="block py-2 md:py-0 text-gray-300 hover:text-secondary transition-colors font-light">Facebook</a></li>
                <li><a href="#" className="block py-2 md:py-0 text-gray-300 hover:text-secondary transition-colors font-light">Pinterest</a></li>
             </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-light text-center md:text-left">
             © {currentYear} Cardumen Cerámica. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
             <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-light">
                Diseñado con pasión
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
