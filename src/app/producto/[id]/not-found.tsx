import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ProductoNotFound() {
  return (
    <main className="min-h-screen bg-brandBackground overflow-x-hidden pt-20">
      <Navbar />

      <section className="px-6 md:px-16 py-24 max-w-3xl mx-auto w-full text-center">
        <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-10">
          <h1 className="font-serif text-3xl text-gray-900">
            Producto no encontrado
          </h1>
          <p className="mt-3 text-gray-600">
            El producto que buscas no existe o ya no está disponible.
          </p>
          <Link
            href="/galeria"
            className="mt-7 inline-flex items-center h-10 px-5 rounded-full bg-gray-900 text-white hover:bg-primary transition-colors"
          >
            Volver a la galería
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

