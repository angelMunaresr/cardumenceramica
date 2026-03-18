import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function LoadingProducto() {
  return (
    <main className="min-h-screen bg-brandBackground overflow-x-hidden pt-20">
      <Navbar />

      <section className="px-6 md:px-16 py-10 md:py-16 max-w-7xl mx-auto w-full">
        <div className="h-5 w-28 bg-gray-200 rounded animate-pulse mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="aspect-[4/5] w-full rounded-[30%_70%_70%_30%/50%_60%_40%_50%] bg-gray-200 animate-pulse" />
          <div>
            <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="mt-3 h-10 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="mt-5 h-7 w-40 bg-gray-200 rounded animate-pulse" />
            <div className="mt-8 space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-10/12 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

