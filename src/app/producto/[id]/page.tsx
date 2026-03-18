import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getProductById } from "@/data/products";

export default async function ProductoDetallePage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brandBackground overflow-x-hidden pt-20">
      <Navbar />

      <section className="px-6 md:px-16 py-10 md:py-16 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-primary transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            Volver
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 organic-shape-1 blur-2xl -z-10" />
            <div className="aspect-[4/5] w-full rounded-[30%_70%_70%_30%/50%_60%_40%_50%] overflow-hidden bg-primary/5 shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div>
            <span className="text-secondary font-medium tracking-widest uppercase text-xs mb-3 block">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight leading-tight">
              {product.title}
            </h1>
            <p className="mt-4 text-2xl font-light text-gray-800">{product.priceLabel}</p>

            <div className="mt-8 text-gray-600 font-light leading-relaxed max-w-prose">
              <p>{product.description}</p>
            </div>

            {product.details && product.details.length > 0 ? (
              <div className="mt-10 border-t border-gray-200">
                {product.details.map((detail) => (
                  <div key={detail.id} className="border-b border-gray-200 py-5">
                    <h2 className="font-serif text-lg text-gray-900">{detail.title}</h2>
                    <p className="mt-2 text-gray-600 font-light leading-relaxed">
                      {detail.content}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

