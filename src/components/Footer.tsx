import Link from "next/link";
import { Facebook, Instagram, Pin } from "lucide-react";
import { CardumenBrandIcon } from "./CardumenBrandIcon";
import { cardumenBrandClassNames } from "./cardumenBrandStyles";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gray-200/70 bg-brandBackground">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div aria-hidden="true" className="absolute -top-24 -left-24 w-80 h-80 bg-primary/10 organic-shape-1 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-28 -right-28 w-96 h-96 bg-secondary/10 organic-shape-3 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-10 left-10 w-36 h-36 bg-primary/10 rounded-[50%_50%_0_50%] rotate-45 blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="py-14 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-7">
            <Link href="/" aria-label="Cardumen" className="inline-flex items-center gap-3 group">
              <CardumenBrandIcon />
              <div className="flex flex-col items-start justify-center">
                <span className={cardumenBrandClassNames.wordmark}>Cardumen</span>
                <span className={cardumenBrandClassNames.submark}>Cerámica</span>
              </div>
            </Link>

            <p className="mt-6 text-gray-600 font-light max-w-md text-base md:text-lg leading-relaxed">
              Arte orgánico para tu hogar contemporáneo. Cerámica artesanal creada con pasión en Mar del Plata, Argentina.
            </p>
          </div>

          <div className="md:col-span-5 md:justify-self-end">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-gray-500">Social</h4>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="group inline-flex items-center justify-center w-14 h-14 organic-shape-2 bg-white/70 backdrop-blur-sm border border-gray-200/70 shadow-sm hover:shadow-md hover:border-primary/20 hover:text-primary transition-all text-gray-700"
                aria-label="Instagram de Cardumen"
              >
                <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="group inline-flex items-center justify-center w-14 h-14 organic-shape-2 bg-white/70 backdrop-blur-sm border border-gray-200/70 shadow-sm hover:shadow-md hover:border-primary/20 hover:text-primary transition-all text-gray-700"
                aria-label="Facebook de Cardumen"
              >
                <Facebook className="w-5 h-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="group inline-flex items-center justify-center w-14 h-14 organic-shape-2 bg-white/70 backdrop-blur-sm border border-gray-200/70 shadow-sm hover:shadow-md hover:border-primary/20 hover:text-primary transition-all text-gray-700"
                aria-label="Pinterest de Cardumen"
              >
                <Pin className="w-5 h-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                <span className="sr-only">Pinterest</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200/70 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-medium text-center md:text-left">
            © {currentYear} Cardumen Cerámica. Todos los derechos reservados.
          </p>
          <span className="text-gray-500 text-sm font-medium">Diseñado con pasión</span>
        </div>
      </div>
    </footer>
  );
}
