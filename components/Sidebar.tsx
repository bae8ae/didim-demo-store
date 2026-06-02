"use client";

import { Copy, Mail, MessageCircle, Share2 } from "lucide-react";
import { products } from "@/data/products";
import SafeImage from "@/components/SafeImage";

type SidebarProps = {
  onShare: () => void;
};

const topFive = [
  products[0],
  products.find((product) => product.id === "sensor-light")!,
  products.find((product) => product.id === "bath-mat")!,
  products.find((product) => product.id === "indoor-shoes")!,
  products.find((product) => product.id === "bath-handle")!
];

const shareItems = [
  { label: "메시지", icon: MessageCircle, className: "bg-[#ffe600] text-didim-ink" },
  { label: "SNS", icon: Share2, className: "bg-[#3975e8] text-white" },
  { label: "링크", icon: Copy, className: "bg-[#a9a9a9] text-white" },
  { label: "이메일", icon: Mail, className: "bg-[#d84a4a] text-white" }
];

export default function Sidebar({ onShare }: SidebarProps) {
  return (
    <aside className="space-y-8 lg:sticky lg:top-[148px]" aria-label="사이드바">
      <section className="rounded-lg border border-[#ead8ba] bg-white p-5">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-black text-didim-ink">베스트셀러</h2>
          <span className="rounded-lg bg-[#ffe9e2] px-2 py-1 text-xs font-black text-[#ef5c48]">
            TOP 5
          </span>
        </div>
        <ol className="mt-5 space-y-4">
          {topFive.map((product, index) => (
            <li key={product.id} className="flex gap-3">
              <span className="mt-1 w-4 shrink-0 text-sm font-black text-didim-amber">
                {index + 1}
              </span>
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-didim-cream">
                {product.image ? (
                  <SafeImage
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover"
                    fallbackLabel="DIDIM"
                  />
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${product.gradient}`} />
                )}
              </div>
              <div className="min-w-0">
                <p className="line-clamp-2 text-sm font-bold leading-5 text-didim-brown">
                  {product.name}
                </p>
                <p className="mt-1 text-sm font-black text-didim-ink">
                  {product.price.toLocaleString("ko-KR")}원
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-lg border border-[#ead8ba] bg-white p-5">
        <h2 className="text-xl font-black text-didim-ink">공유하기</h2>
        <div className="mt-5 flex gap-3">
          {shareItems.map(({ label, icon: Icon, className }) => (
            <button
              key={label}
              type="button"
              onClick={onShare}
              aria-label={`${label} 공유 데모`}
              className={`grid h-12 w-12 place-items-center rounded-full text-sm font-black transition hover:scale-105 ${className}`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </button>
          ))}
        </div>
      </section>
    </aside>
  );
}
