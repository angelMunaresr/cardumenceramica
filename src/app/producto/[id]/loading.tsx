import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function LoadingProducto() {
  return (
    <main className="min-h-screen bg-brandBackground overflow-x-hidden pt-20">
      <Navbar />

      <section className="px-6 md:px-16 py-10 md:py-14 max-w-7xl mx-auto w-full">
        <div className="h-5 w-28 bg-gray-200 rounded animate-pulse mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <div className="aspect-[4/5] w-full rounded-[30%_70%_70%_30%/50%_60%_40%_50%] bg-gray-200 animate-pulse" />
          </div>
          <div className="lg:col-span-5">
            <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="mt-3 h-11 w-4/5 bg-gray-200 rounded animate-pulse" />
            <div className="mt-5 h-8 w-40 bg-gray-200 rounded animate-pulse" />
            <div className="mt-8 space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-10/12 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="mt-10 flex gap-3">
              <div className="h-11 w-48 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-11 w-40 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-14 md:pb-20 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl border border-gray-200/60 bg-white/70 backdrop-blur-sm shadow-sm p-7 sm:p-10">
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="mt-4 h-10 w-72 bg-gray-200 rounded animate-pulse" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200/60 bg-white/60 p-5"
              >
                <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="mt-3 h-5 w-5/6 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
