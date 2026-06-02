"use client";

import { Gift, Star } from "lucide-react";
import { Product } from "@/data/products";
import SafeImage from "@/components/SafeImage";

type ProductCardProps = {
  product: Product;
  featured?: boolean;
  onOpenDetail: (product: Product) => void;
  onGift: (label: string) => void;
};

export default function ProductCard({
  product,
  featured = false,
  onOpenDetail,
  onGift
}: ProductCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-lg border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft ${
        featured ? "border-[#d79b3a]" : "border-[#ead8ba]"
      }`}
    >
      <button
        type="button"
        onClick={() => onOpenDetail(product)}
        className="block w-full text-left"
        aria-label={`${product.name} 상세 보기`}
      >
        <div className="relative aspect-square overflow-hidden bg-didim-cream">
          {product.image ? (
            <SafeImage
              src={product.image}
              alt={product.imageAlt}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              fallbackLabel="DIDIM Package"
            />
          ) : (
            <div
              role="img"
              aria-label={product.imageAlt}
              className={`flex h-full w-full items-end bg-gradient-to-br ${product.gradient} p-4`}
            >
              <div className="h-20 w-full rounded-lg border border-white/65 bg-white/45 backdrop-blur-sm" />
            </div>
          )}
          {product.badge ? (
            <span className="absolute right-3 top-3 rounded-lg bg-didim-ink px-3 py-1 text-xs font-black text-[#ffd676]">
              {product.badge}
            </span>
          ) : null}
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-1.5">
            {product.tags.slice(0, featured ? 4 : 2).map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-[#fff3dd] px-2 py-1 text-[11px] font-bold text-[#8a5b1f]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mt-3 line-clamp-2 min-h-[44px] text-sm font-black leading-5 text-didim-ink">
            {product.name}
          </h3>
          {featured ? (
            <p className="mt-2 line-clamp-2 text-xs leading-5 text-didim-brown/72">
              {product.description} · 발밑에서 조용히 지켜주는 안전
            </p>
          ) : null}
          <p className="mt-3 text-lg font-black text-didim-ink">
            {product.price.toLocaleString("ko-KR")}원
          </p>
          <div className="mt-2 flex items-center gap-2 text-xs font-bold text-didim-brown/72">
            <span className="flex items-center gap-1 text-[#b9781e]">
              <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              {product.rating}
            </span>
            <span>리뷰 {product.reviews}</span>
            <span>{product.delivery}</span>
          </div>
        </div>
      </button>
      <div className="px-4 pb-4">
        <button
          type="button"
          onClick={() => onGift("선물하기")}
          className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-black transition ${
            featured
              ? "bg-[#f6b74b] text-didim-ink hover:bg-[#ffd27a]"
              : "bg-didim-ink text-white hover:bg-didim-brown"
          }`}
        >
          <Gift className="h-4 w-4" aria-hidden="true" />
          선물하기
        </button>
      </div>
    </article>
  );
}
