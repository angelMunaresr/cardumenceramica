import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
    >
      <div className="aspect-[4/3] w-full bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-secondary text-xs uppercase tracking-widest font-medium">
              {product.category}
            </p>
            <h3 className="mt-1 font-serif text-lg text-gray-900 truncate">
              {product.title}
            </h3>
          </div>
          <p className="shrink-0 text-gray-900 font-medium">{product.priceLabel}</p>
        </div>

        <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </div>
    </Link>
  );
}

