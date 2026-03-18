import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { getProducts } from "@/data/products";

export default async function GaleriaPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const products = await getProducts({
    simulateEmpty: searchParams?.empty === "1",
    simulateError: searchParams?.fail === "1",
  });

  return (
    <main className="min-h-screen bg-brandBackground overflow-x-hidden pt-20">
      <Navbar />

      <div className="relative flex flex-col w-full">
        <div className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] bg-sand rounded-full blur-[80px] opacity-30 pointer-events-none -z-10" />
        <div className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[80px] opacity-30 pointer-events-none -z-10" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] opacity-30 pointer-events-none -z-10" />

        <section className="relative z-10 px-6 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-secondary font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 block">
              Colección
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 mb-5 leading-tight">
              Productos
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed font-light">
              Selecciona un producto para ver su detalle.
            </p>
          </div>

          {products.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-8 text-center">
              <h2 className="font-serif text-2xl text-gray-900">No hay productos disponibles</h2>
              <p className="mt-2 text-gray-600">
                Vuelve más tarde o contáctanos para un pedido personalizado.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}

