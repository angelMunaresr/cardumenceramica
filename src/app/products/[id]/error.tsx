"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { cardumenBrandClassNames } from "@/components/cardumenBrandStyles";

export default function ProductDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service in the future
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
                Could not load the product
              </h1>
              <p className="mt-2 text-gray-600">
                Please try again or go back to the gallery.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={reset}
                  className={`w-full sm:w-auto ${cardumenBrandClassNames.primaryButton}`}
                >
                  <RotateCcw size={16} />
                  Try again
                </button>
                <Link
                  href="/galeria"
                  className={`w-full sm:w-auto ${cardumenBrandClassNames.secondaryButton}`}
                >
                  Back to gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
