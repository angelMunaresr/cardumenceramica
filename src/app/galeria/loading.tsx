import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCardSkeleton } from "@/components/products/ProductCardSkeleton";

export default function LoadingGaleria() {
  return (
    <main className="min-h-screen bg-brandBackground overflow-x-hidden pt-20">
      <Navbar />

      <section className="px-6 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <div className="mx-auto h-4 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="mx-auto mt-4 h-10 w-64 bg-gray-200 rounded animate-pulse" />
          <div className="mx-auto mt-4 h-5 w-[min(520px,90%)] bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

