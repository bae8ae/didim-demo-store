"use client";

import { Menu, Search, ShoppingBag } from "lucide-react";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import DemoModal from "@/components/DemoModal";
import DetailSection from "@/components/DetailSection";
import ProductGallery, { ProductImage } from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ReviewSection from "@/components/ReviewSection";
import StickyPurchaseBar from "@/components/StickyPurchaseBar";
import USPSection from "@/components/USPSection";

const productImages: ProductImage[] = [
  {
    src: "/images/didim-product-main.png",
    alt: "디딤 투명 미끄럼 방지 야광 패드 대표 상품 이미지",
    label: "Main Product"
  },
  {
    src: "/images/didim-night-use.png",
    alt: "밤에 은은한 앰버빛으로 보이는 디딤 야광 패드 사용 장면",
    label: "Night Glow"
  },
  {
    src: "/images/didim-day-use.png",
    alt: "낮에 바닥과 자연스럽게 어우러진 투명 디딤 패드",
    label: "Day Clear"
  },
  {
    src: "/images/didim-detail-top.png",
    alt: "디딤 패드 상단 디테일과 논슬립 질감",
    label: "Detail"
  },
  {
    src: "/images/didim-package-front.png",
    alt: "디딤 선물용 패키지 전면 이미지",
    label: "Package"
  },
  {
    src: "/images/didim-package-open.png",
    alt: "디딤 패키지를 열었을 때의 구성품 이미지",
    label: "Open Box"
  },
  {
    src: "/images/didim-glow-closeup.png",
    alt: "디딤 야광 라인이 은은하게 빛나는 근접 이미지",
    label: "Glow Close-up"
  }
];

type HeaderProps = {
  onCartClick: () => void;
  onMenuClick: () => void;
  onSearch: () => void;
};

function Header({ onCartClick, onMenuClick, onSearch }: HeaderProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[#ead8ba] bg-white/92 backdrop-blur">
      <div className="bg-didim-ink px-4 py-1.5 text-center text-xs font-semibold text-white/88">
        공식 데모 스토어 · 실제 결제 불가
      </div>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <a
          href="#product"
          className="shrink-0 text-lg font-black leading-none text-didim-ink"
          aria-label="디딤 DIDIM 상품 영역으로 이동"
        >
          디딤
          <span className="ml-1 text-sm font-bold text-didim-amber">DIDIM</span>
        </a>

        <form onSubmit={handleSubmit} className="min-w-0 flex-1">
          <label className="sr-only" htmlFor="site-search">
            상품 검색
          </label>
          <div className="flex items-center rounded-lg border border-[#dfc9aa] bg-didim-cream px-3 py-2">
            <Search className="h-4 w-4 shrink-0 text-didim-brown/70" aria-hidden="true" />
            <input
              id="site-search"
              name="search"
              type="search"
              placeholder="욕실 안전용품 검색"
              className="min-w-0 flex-1 bg-transparent px-2 text-sm text-didim-ink placeholder:text-didim-brown/55 focus:outline-none"
            />
          </div>
        </form>

        <button
          type="button"
          onClick={onCartClick}
          aria-label="장바구니 데모 토스트 표시"
          className="rounded-lg border border-[#dfc9aa] bg-white p-2.5 text-didim-brown transition hover:bg-didim-ivory"
        >
          <ShoppingBag className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="메뉴 데모 토스트 표시"
          className="rounded-lg border border-[#dfc9aa] bg-white p-2.5 text-didim-brown transition hover:bg-didim-ivory"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState("데모 안내");
  const [toast, setToast] = useState("");
  const toastTimer = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 2600);
  }, []);

  const openDemoModal = useCallback((actionLabel: string) => {
    setModalAction(actionLabel);
    setModalOpen(true);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
    };
  }, []);

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Header
        onCartClick={() =>
          showToast("장바구니 기능은 데모입니다. 실제 저장이나 결제는 진행되지 않습니다.")
        }
        onMenuClick={() => showToast("메뉴 기능은 발표용 데모로 표시만 됩니다.")}
        onSearch={() => showToast("검색 기능은 발표용 데모입니다.")}
      />

      <main>
        <section id="product" className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:py-10">
          <div className="grid gap-3 pb-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-sm font-black text-didim-amber">
                낮에는 투명하게, 밤에는 길이 되다
              </p>
              <h2 className="mt-2 max-w-2xl text-3xl font-black leading-tight text-didim-ink sm:text-5xl">
                발밑에서 조용히 지켜주는 안전
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-didim-brown/82 lg:justify-self-end">
              디딤 DIDIM Transparent Anti-Slip Glow Pads는 욕실, 현관, 복도에서
              미끄럼 방지와 야간 안내를 동시에 제공하는 감성 안전용품입니다.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <ProductGallery images={productImages} />
            <ProductInfo
              onBuy={openDemoModal}
              onAddCart={() =>
                showToast("장바구니에 담았습니다. 본 페이지는 실제 결제가 없는 데모입니다.")
              }
            />
          </div>
        </section>

        <USPSection />
        <DetailSection onDemoAction={openDemoModal} />
        <ReviewSection />
      </main>

      <footer className="border-t border-[#ead8ba] bg-white px-4 py-8 text-center text-xs leading-6 text-didim-brown/72 sm:px-6">
        <p className="font-bold text-didim-ink">디딤 DIDIM Demo Store</p>
        <p className="mt-1">
          창업경진대회 발표 및 제품 검증을 위한 데모 페이지입니다. 실제 판매, 결제,
          배송은 제공하지 않습니다.
        </p>
      </footer>

      <StickyPurchaseBar onBuy={openDemoModal} />
      <DemoModal
        open={modalOpen}
        actionLabel={modalAction}
        onClose={() => setModalOpen(false)}
      />

      {toast ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-24 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-lg bg-didim-ink px-4 py-3 text-center text-sm font-bold text-white shadow-soft md:bottom-6"
        >
          {toast}
        </div>
      ) : null}
    </div>
  );
}
