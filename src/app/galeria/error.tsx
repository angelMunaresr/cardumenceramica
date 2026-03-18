"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GaleriaError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    void error;
  }, [error]);

  return (
    <main className="min-h-screen bg-brandBackground overflow-x-hidden pt-20">
      <Navbar />

      <section className="px-6 md:px-16 py-24 max-w-3xl mx-auto w-full">
        <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-8">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
              <AlertTriangle size={20} />
            </div>
            <div className="flex-1">
              <h1 className="font-serif text-2xl text-gray-900">
                No pudimos cargar la galería
              </h1>
              <p className="mt-2 text-gray-600">
                Intenta de nuevo. Si el problema persiste, vuelve más tarde.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-6 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-gray-900 text-white hover:bg-primary transition-colors"
              >
                <RotateCcw size={16} />
                Reintentar
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

