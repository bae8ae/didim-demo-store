"use client";

import { Moon, Package, ShieldCheck, Sparkles, X } from "lucide-react";
import { Product, didimProduct } from "@/data/products";
import DemoModal from "@/components/DemoModal";
import SafeImage from "@/components/SafeImage";
import { useEffect, useState } from "react";

type ProductDetailModalProps = {
  product: Product | null;
  onClose: () => void;
};

const specs = [
  ["제품명", "디딤 투명 미끄럼 방지 야광 패드"],
  ["구성", "12개입"],
  ["크기", "15 x 15 cm"],
  ["두께", "가장자리 1mm 미만, 중앙부 약 3mm"],
  ["색상", "투명 / 소프트 앰버 글로우"],
  ["용도", "욕실, 현관, 복도, 침실, 부모님 집"],
  ["가격", "49,000원"]
];

const usps = [
  {
    title: "Anti-Slip Grip",
    body: "미끄러운 바닥에서 안정적인 접지감 제공",
    icon: ShieldCheck
  },
  {
    title: "Soft Amber Glow",
    body: "어두운 공간에서 발 위치를 은은하게 안내",
    icon: Moon
  },
  {
    title: "Clear Home Design",
    body: "인테리어를 해치지 않는 투명 디자인",
    icon: Sparkles
  }
];

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [demoOpen, setDemoOpen] = useState(false);
  const isOpen = Boolean(product);
  const isDidim = product?.id === didimProduct.id;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  if (!isDidim) {
    return (
      <>
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-didim-ink/55 px-4 py-4 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="simple-detail-title"
        >
          <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-didim-amber">카테고리 상품</p>
                <h2 id="simple-detail-title" className="mt-2 text-xl font-black text-didim-ink">
                  {product.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="상세 모달 닫기"
                className="rounded-lg border border-[#ead8ba] p-2 text-didim-brown hover:bg-didim-cream"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-didim-brown">{product.description}</p>
            <p className="mt-4 text-2xl font-black text-didim-ink">
              {product.price.toLocaleString("ko-KR")}원
            </p>
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="mt-5 w-full rounded-lg bg-didim-ink px-4 py-3 text-sm font-black text-white"
            >
              선물하기
            </button>
          </div>
        </div>
        <DemoModal open={demoOpen} actionLabel="선물하기" onClose={() => setDemoOpen(false)} />
      </>
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 overflow-y-auto bg-didim-ink/60 px-4 py-4 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
      >
        <div className="mx-auto max-w-5xl rounded-lg bg-white shadow-soft">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#ead8ba] bg-white/95 p-4 backdrop-blur">
            <div>
              <p className="text-xs font-bold text-didim-amber">Invisible by Day, Guiding by Night</p>
              <h2 id="detail-modal-title" className="text-lg font-black text-didim-ink">
                디딤 상품 상세
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="상품 상세 모달 닫기"
              className="rounded-lg border border-[#ead8ba] p-2 text-didim-brown hover:bg-didim-cream"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="grid gap-7 p-5 lg:grid-cols-[1fr_0.95fr] lg:p-7">
            <div className="space-y-4">
              <SafeImage
                src="/images/didim-package-open.png"
                alt="디딤 투명 미끄럼 방지 야광 패드 12개입 패키지 오픈 구성"
                className="aspect-[4/3] w-full rounded-lg object-cover"
                fallbackLabel="DIDIM Open Package"
              />
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["/images/didim-day.png", "낮에 투명하게 보이는 디딤 패드"],
                  ["/images/didim-night.png", "밤에 야광 라인이 보이는 디딤 패드"],
                  ["/images/didim-closeup.png", "디딤 패드 야광 라인 근접 이미지"]
                ].map(([src, alt]) => (
                  <SafeImage
                    key={src}
                    src={src}
                    alt={alt}
                    className="aspect-square rounded-lg object-cover"
                    fallbackLabel="DIDIM"
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="flex items-center gap-2 text-sm font-black text-didim-amber">
                <Package className="h-4 w-4" aria-hidden="true" />
                12 Pads / 15 x 15 cm
              </p>
              <h3 className="mt-3 text-3xl font-black leading-tight text-didim-ink">
                디딤 투명 미끄럼 방지 야광 패드 12개입
              </h3>
              <p className="mt-3 text-2xl font-black text-didim-ink">49,000원</p>
              <p className="mt-5 text-xl font-black text-[#a36a1d]">
                낮에는 투명하게, 밤에는 길이 되다
              </p>
              <p className="mt-3 text-sm leading-7 text-didim-brown/82">
                디딤은 투명한 플라워 실루엣과 은은한 앰버 야광 라인을 결합한 미끄럼
                방지 패드입니다. 낮에는 바닥과 자연스럽게 어우러지고, 밤에는 부드러운
                빛으로 발걸음을 안내합니다. 욕실, 현관, 복도, 침실 등 야간 이동이 많은
                공간에 적합합니다.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {usps.map(({ title, body, icon: Icon }) => (
                  <div key={title} className="rounded-lg border border-[#ead8ba] bg-[#fffaf1] p-4">
                    <Icon className="h-5 w-5 text-didim-amber" aria-hidden="true" />
                    <h4 className="mt-3 text-sm font-black text-didim-ink">{title}</h4>
                    <p className="mt-2 text-xs leading-5 text-didim-brown/76">{body}</p>
                  </div>
                ))}
              </div>

              <dl className="mt-6 divide-y divide-[#ead8ba] rounded-lg border border-[#ead8ba]">
                {specs.map(([term, value]) => (
                  <div key={term} className="grid grid-cols-[110px_1fr] gap-3 px-4 py-3 text-sm">
                    <dt className="font-black text-didim-ink">{term}</dt>
                    <dd className="text-didim-brown">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="rounded-lg bg-[#f6b74b] px-5 py-3 text-sm font-black text-didim-ink hover:bg-[#ffd27a]"
                >
                  선물하기
                </button>
                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="rounded-lg bg-didim-ink px-5 py-3 text-sm font-black text-white hover:bg-didim-brown"
                >
                  장바구니 담기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DemoModal open={demoOpen} actionLabel="데모 안내" onClose={() => setDemoOpen(false)} />
    </>
  );
}
