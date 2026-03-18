"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    { name: "Contacto", href: "/#contact" },
    { name: "Galería", href: "/galeria" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav shadow-sm border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand/Logo */}
        <Link href="/" aria-label="Cardumen" className="flex items-center gap-2 relative z-10 group">
          {/* Droplet inspired icon */}
          <div className="w-12 h-12 bg-primary/10 organic-shape-1 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
            <CardumenDrops className="w-9 h-9" />
          </div>
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
          className="md:hidden relative z-50 w-12 h-12 organic-shape-2 bg-brandBackground/80 backdrop-blur-md border border-primary/10 shadow-sm text-gray-700 hover:text-primary transition-colors flex items-center justify-center"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">{mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
          <div className="relative w-6 h-6">
            <motion.span
              className="absolute left-1/2 top-[6px] h-[2px] w-6 -translate-x-1/2 bg-current rounded-full"
              animate={mobileMenuOpen ? { top: "12px", rotate: 45 } : { top: "6px", rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              style={{ transformOrigin: "50% 50%" }}
            />
            <motion.span
              className="absolute left-1/2 top-[12px] h-[2px] w-6 -translate-x-1/2 bg-current rounded-full"
              animate={mobileMenuOpen ? { opacity: 0, scaleX: 0.6 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.18 }}
              style={{ transformOrigin: "50% 50%" }}
            />
            <motion.span
              className="absolute left-1/2 top-[18px] h-[2px] w-6 -translate-x-1/2 bg-current rounded-full"
              animate={mobileMenuOpen ? { top: "12px", rotate: -45 } : { top: "18px", rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              style={{ transformOrigin: "50% 50%" }}
            />
          </div>
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
                  <div className="w-12 h-12 bg-primary/10 organic-shape-1 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <CardumenDrops className="w-9 h-9" />
                  </div>
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
  );
}
