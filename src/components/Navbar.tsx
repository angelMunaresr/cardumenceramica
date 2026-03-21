"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardumenBrandIcon } from "./CardumenBrandIcon";
import { CardumenDrops } from "./CardumenDrops";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const bodyOverflowRef = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    if (bodyOverflowRef.current === null) {
      bodyOverflowRef.current = document.body.style.overflow;
    }
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = bodyOverflowRef.current ?? "";
      bodyOverflowRef.current = null;
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Mí", href: "/#about" },
    { name: "Colección", href: "/galeria" },
    { name: "Contacto", href: "/#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent ${isScrolled ? "md:glass-nav md:shadow-sm md:border-b md:border-gray-200" : ""
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand/Logo */}
          <Link href="/" aria-label="Cardumen" className="flex items-center gap-2 relative z-10 group">
            <CardumenBrandIcon />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors font-medium text-sm tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            type="button"
            className="md:hidden relative z-50 w-12 h-12 organic-shape-1 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            <span className="sr-only">{mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
              {/* Top line */}
              <motion.line
                x1="0" y1="1" x2="20" y2="1"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                animate={mobileMenuOpen
                  ? { x1: 2, y1: 2, x2: 18, y2: 14, opacity: 1 }
                  : { x1: 0, y1: 1, x2: 20, y2: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 26 }}
              />
              {/* Middle line */}
              <motion.line
                x1="0" y1="8" x2="20" y2="8"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                style={{ transformOrigin: "10px 8px" }}
              />
              {/* Bottom line */}
              <motion.line
                x1="0" y1="15" x2="20" y2="15"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                animate={mobileMenuOpen
                  ? { x1: 2, y1: 14, x2: 18, y2: 2, opacity: 1 }
                  : { x1: 0, y1: 15, x2: 20, y2: 15, opacity: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 26 }}
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                className="md:hidden fixed inset-0 z-40 bg-brandBackground min-h-dvh"
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/15 organic-shape-1 blur-3xl" />
                <div className="absolute bottom-[-120px] left-[-120px] w-96 h-96 bg-secondary/10 organic-shape-3 blur-3xl" />

                <div className="h-20 px-6 flex items-center justify-between">
                  <Link
                    href="/"
                    aria-label="Cardumen"
                    className="flex items-center gap-2 group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <CardumenBrandIcon />
                  </Link>

                  <div className="w-12 h-12" />
                </div>

                <div className="px-6 pt-10 pb-12 min-h-[calc(100dvh-80px)] flex flex-col justify-between">
                  <div className="space-y-3">
                    {navLinks.map((link, idx) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * idx, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block w-full px-6 py-5 text-3xl font-serif text-gray-900 tracking-tight organic-shape-2 bg-white/70 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:shadow-md hover:border-primary/20 hover:text-primary transition-all"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-10 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-gray-500">
                    <span>Cardumen</span>
                    <span className="text-primary">Cerámica</span>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating quick-nav button – bottom right */}
      <motion.button
        type="button"
        aria-label="Volver al inicio"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.8, pointerEvents: isScrolled ? "auto" : "none" }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 organic-shape-1 bg-primary/10 border border-primary/20 shadow-lg flex items-center justify-center text-primary hover:bg-primary/20 hover:scale-110 transition-colors group"
      >
        <motion.svg
          width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, -4, 0, 4, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.button>
    </>
  );
}
