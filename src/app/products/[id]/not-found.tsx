import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cardumenBrandClassNames } from "@/components/cardumenBrandStyles";

export default function ProductNotFound() {
  return (
    <main className="min-h-screen bg-brandBackground overflow-x-hidden pt-20">
      <Navbar />

      <section className="px-6 md:px-16 py-24 max-w-3xl mx-auto w-full text-center">
        <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-10">
          <h1 className="font-serif text-3xl text-gray-900">
            Product not found
          </h1>
          <p className="mt-3 text-gray-600">
            The product you are looking for does not exist or is no longer
            available.
          </p>
          <Link
            href="/galeria"
            className={`mt-7 inline-flex w-full sm:w-auto ${cardumenBrandClassNames.primaryButton}`}
          >
            Back to gallery
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
