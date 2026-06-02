"use client";

import { SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Product, products, sortOptions } from "@/data/products";

type ProductGridProps = {
  selectedSort: string;
  onSort: (sort: string) => void;
  onOpenDetail: (product: Product) => void;
  onDemoAction: (label: string) => void;
};

export default function ProductGrid({
  selectedSort,
  onSort,
  onOpenDetail,
  onDemoAction
}: ProductGridProps) {
  return (
    <section aria-labelledby="product-grid-title">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold text-didim-amber">선물하기 좋은 생활 안전용품</p>
          <h2 id="product-grid-title" className="mt-1 text-xl font-black text-didim-ink">
            총 28개 상품
          </h2>
        </div>
        <div className="scrollbar-none flex items-center gap-1 overflow-x-auto" aria-label="정렬 옵션">
          <SlidersHorizontal className="mr-1 hidden h-4 w-4 text-didim-brown sm:block" />
          {sortOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onSort(option)}
              className={`shrink-0 rounded-lg px-3 py-2 text-sm font-bold transition ${
                selectedSort === option
                  ? "bg-didim-ink text-white"
                  : "bg-white text-didim-brown hover:bg-didim-cream"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            featured={index === 0}
            onOpenDetail={onOpenDetail}
            onGift={onDemoAction}
          />
        ))}
      </div>
    </section>
  );
}
