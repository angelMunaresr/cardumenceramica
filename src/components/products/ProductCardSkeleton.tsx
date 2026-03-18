export function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-200/60 bg-white/70 shadow-sm overflow-hidden animate-pulse">
      <div className="aspect-[4/3] w-full bg-gray-200" />
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 w-full">
            <div className="h-3 w-24 bg-gray-200 rounded" />
            <div className="mt-2 h-5 w-3/4 bg-gray-200 rounded" />
          </div>
          <div className="h-4 w-16 bg-gray-200 rounded" />
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}

