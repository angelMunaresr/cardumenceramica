import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getProductById } from "@/data/products";
import { cardumenBrandClassNames } from "@/components/cardumenBrandStyles";

export default async function ProductDetailPage({
  params,
}: {
  params: unknown;
}) {
  const resolvedParams = (await Promise.resolve(params)) as {
    id?: string | string[];
  };
  const id = Array.isArray(resolvedParams.id)
    ? resolvedParams.id[0]
    : resolvedParams.id;

  if (!id) {
    notFound();
  }

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const specs = [
    { label: "Tamaño", value: product.specs.size },
    { label: "Acabado", value: product.specs.finish },
    { label: "Técnica", value: product.specs.technique },
    { label: "Cocción", value: product.specs.firing },
    { label: "Cuidados", value: product.specs.care },
  ];

  return (
    <main className="min-h-screen bg-brandBackground overflow-x-hidden pt-20">
      <Navbar />

      <div className="relative flex flex-col w-full">
        {/* Decorative background blobs */}
        <div className="absolute top-[-120px] right-[-220px] w-[640px] h-[640px] bg-primary/15 organic-shape-1 blur-[90px] opacity-60 pointer-events-none -z-10" />
        <div className="absolute top-[40%] left-[-180px] w-[560px] h-[560px] bg-secondary/10 organic-shape-3 blur-[90px] opacity-60 pointer-events-none -z-10" />
        <div className="absolute bottom-[-160px] right-[5%] w-[520px] h-[520px] bg-sand blur-[90px] opacity-30 pointer-events-none -z-10" />

        {/* Product hero section */}
        <section className="px-6 md:px-16 py-10 md:py-14 max-w-7xl mx-auto w-full">
          {/* Breadcrumb + back link */}
          <div className="flex items-center justify-between gap-4 mb-10">
            <Link
              href="/galeria"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-primary transition-colors font-medium"
            >
              <ArrowLeft size={18} />
              Volver
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500">
              <Link href="/galeria" className="hover:text-primary transition-colors">
                Colección
              </Link>
              <span>/</span>
              <span className="text-gray-900">{product.title}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Product image */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 organic-shape-1 blur-2xl -z-10" />
                <div className="aspect-[4/5] w-full rounded-[30%_70%_70%_30%/50%_60%_40%_50%] overflow-hidden bg-white/60 backdrop-blur-sm shadow-md border border-gray-200/60">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 hover:scale-[1.02] transition-all duration-700"
                  />
                </div>

                {/* Badges */}
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  <span className="inline-flex items-center h-8 px-4 rounded-full bg-brandBackground/80 backdrop-blur-sm border border-gray-200/60 shadow-sm text-xs uppercase tracking-widest text-gray-800">
                    Artesanal
                  </span>
                  <span className="inline-flex items-center h-8 px-4 rounded-full bg-primary/90 shadow-sm text-xs uppercase tracking-widest text-white">
                    Pieza única
                  </span>
                </div>
              </div>
            </div>

            {/* Product info */}
            <div className="lg:col-span-5">
              <span className="text-secondary font-medium tracking-widest uppercase text-xs mb-3 block">
                {product.category}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 tracking-tight leading-[1.05]">
                {product.title}
              </h1>
              <p className="mt-5 text-2xl sm:text-3xl font-light text-gray-800">
                {product.priceLabel}
              </p>

              <div className="mt-8 text-gray-600 font-light leading-relaxed max-w-prose">
                <p>{product.description}</p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className={`w-full sm:w-auto ${cardumenBrandClassNames.primaryButton}`}
                >
                  Consultar disponibilidad
                </Link>
                <Link
                  href="/galeria"
                  className={`w-full sm:w-auto ${cardumenBrandClassNames.secondaryButton}`}
                >
                  Ver más piezas
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical specs section */}
        <section className="px-6 md:px-16 pb-14 md:pb-20 max-w-7xl mx-auto w-full">
          <div className="rounded-3xl border border-gray-200/60 bg-white/70 backdrop-blur-sm shadow-sm p-7 sm:p-10">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <span className="text-secondary font-medium tracking-widest uppercase text-xs block">
                  Ficha técnica
                </span>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-gray-900">
                  Detalles de la pieza
                </h2>
              </div>
              <div className="hidden md:block text-sm text-gray-500">
                Cerámica con esmalte natural y variaciones de horneado.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-2xl border border-gray-200/60 bg-white/60 p-5 hover:shadow-md transition-shadow"
                >
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                    {spec.label}
                  </p>
                  <p className="mt-2 text-gray-900 font-medium leading-snug">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Accordion for additional details */}
            {product.details && product.details.length > 0 ? (
              <div className="mt-10 border-t border-gray-200/70 pt-8">
                <h3 className="font-serif text-2xl text-gray-900">
                  Información adicional
                </h3>
                <div className="mt-5 space-y-3">
                  {product.details.map((detail) => (
                    <details
                      key={detail.id}
                      className="group rounded-2xl border border-gray-200/60 bg-white/60 px-5 py-4"
                    >
                      <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                        <span className="font-serif text-lg text-gray-900 group-hover:text-primary transition-colors">
                          {detail.title}
                        </span>
                        <span className="text-gray-400 group-open:text-primary transition-colors">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-gray-600 font-light leading-relaxed max-w-prose">
                        {detail.content}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
