"use client";

import {
  ArrowUp,
  Briefcase,
  ChevronDown,
  Download,
  Heart,
  Info,
  Menu,
  Search,
  Share2,
  ShoppingBag
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import DemoModal from "@/components/DemoModal";
import SafeImage from "@/components/SafeImage";
import Toast from "@/components/Toast";
import { Product, didimProduct } from "@/data/products";

type GridProduct = Product & {
  brand: string;
  discount?: number;
  giftNote?: string;
  likes: string;
  exclusive?: boolean;
};

const bestItems = [
  {
    image: "/images/didim-package-front.png",
    name: "디딤 선물세트 투명 미끄럼 방지 야광 패드 12개입",
    price: "49,000원",
    discount: ""
  },
  {
    image: "/images/didim-package-open.png",
    name: "디딤 홈케어 선물 패키지 오픈형 12 Pads",
    price: "49,000원",
    discount: ""
  },
  {
    image: "/images/didim-night.png",
    name: "디딤 야간안전 욕실·복도 패드 세트",
    price: "39,900원",
    discount: "10%"
  },
  {
    image: "/images/didim-day.png",
    name: "디딤 투명 홈 인테리어 안전 패드",
    price: "32,000원",
    discount: "2%"
  },
  {
    image: "/images/didim-closeup.png",
    name: "디딤 소프트 앰버 글로우 미끄럼 방지 패드",
    price: "45,000원",
    discount: "6%"
  }
];

const gridProducts: GridProduct[] = [
  {
    ...didimProduct,
    brand: "디딤",
    discount: 0,
    giftNote: "🎁 선물포장 가능 · 부모님 집 야간 이동 케어",
    likes: "3.5만",
    exclusive: true
  },
  {
    id: "didim-open",
    brand: "디딤",
    name: "디딤 투명 미끄럼 방지 야광 패드 오픈 패키지",
    price: 49000,
    image: "/images/didim-package-open.png",
    imageAlt: "디딤 야광 패드 오픈 패키지",
    tags: ["야간안전"],
    rating: 4.8,
    reviews: 98,
    delivery: "무료배송",
    description: "낮에는 투명하게, 밤에는 길이 되다",
    giftNote: "🎁 증정 패키지 카드 포함",
    likes: "2.5만",
    exclusive: true
  },
  {
    id: "didim-night-set",
    brand: "디딤",
    name: "디딤 밤길안심 욕실·복도 야광 패드 세트",
    price: 45000,
    image: "/images/didim-night.png",
    imageAlt: "밤에 빛나는 디딤 야광 패드 사용 장면",
    tags: ["야간안전"],
    rating: 4.7,
    reviews: 76,
    delivery: "무료배송",
    discount: 10,
    description: "어두운 공간에서 발 위치를 은은하게 안내",
    giftNote: "🎁 야간안전 추천 선물",
    likes: "7,528",
    exclusive: true
  },
  {
    id: "didim-day-set",
    brand: "디딤",
    name: "디딤 낮투명 홈 인테리어 미끄럼 방지 패드",
    price: 41000,
    image: "/images/didim-day.png",
    imageAlt: "낮에 투명하게 보이는 디딤 패드",
    tags: ["생활안전"],
    rating: 4.6,
    reviews: 84,
    delivery: "무료배송",
    discount: 8,
    description: "인테리어를 해치지 않는 투명 디자인",
    giftNote: "🎁 부모님 선물 추천",
    likes: "1.3만",
    exclusive: true
  },
  {
    id: "didim-closeup",
    brand: "디딤(LuX)",
    name: "디딤 앰버 글로우 클로즈업 패드 12개입",
    price: 54000,
    image: "/images/didim-closeup.png",
    imageAlt: "디딤 앰버 야광 라인 근접 이미지",
    tags: ["미끄럼방지"],
    rating: 4.7,
    reviews: 61,
    delivery: "무료배송",
    discount: 15,
    description: "미끄럼 방지와 야간 안내를 동시에",
    giftNote: "🎁 은은한 야광 라인 구성",
    likes: "2,771",
    exclusive: true
  },
  {
    id: "didim-top",
    brand: "디딤",
    name: "디딤 플라워 실루엣 투명 논슬립 패드",
    price: 57000,
    image: "/images/didim-top.png",
    imageAlt: "디딤 플라워 실루엣 상단 이미지",
    tags: ["홈케어"],
    rating: 4.8,
    reviews: 69,
    delivery: "무료배송",
    discount: 2,
    description: "발밑에서 조용히 지켜주는 안전",
    giftNote: "최대혜택가 52,000원",
    likes: "1.4만",
    exclusive: true
  },
  {
    id: "didim-soft",
    brand: "디딤",
    name: "디딤 소프트 홈케어 패드 세트 10개입",
    price: 80500,
    image: "/images/didim-main.png",
    imageAlt: "디딤 투명 패드 메인 이미지",
    tags: ["부모님 선물"],
    rating: 4.5,
    reviews: 44,
    delivery: "무료배송",
    description: "선물하기 좋은 생활 안전용품",
    likes: "2,172"
  },
  {
    id: "didim-premium",
    brand: "디딤(LuX)",
    name: "디딤 프리미엄 글로우 패드 3X 선물세트",
    price: 110000,
    image: "/images/didim-package-front.png",
    imageAlt: "디딤 프리미엄 선물 패키지",
    tags: ["선물세트"],
    rating: 4.9,
    reviews: 31,
    delivery: "무료배송",
    description: "Invisible by Day, Guiding by Night",
    likes: "2,745",
    exclusive: true
  },
  {
    id: "care-light",
    brand: "온잠",
    name: "온잠 침실 동선 무드 센서등",
    price: 18900,
    imageAlt: "무드 센서등 상품 이미지",
    tags: ["센서등"],
    rating: 4.4,
    reviews: 38,
    delivery: "무료배송",
    description: "밤중 이동을 위한 소형 센서등",
    likes: "8,902",
    gradient: "from-[#c7e7e2] via-[#ffffff] to-[#f0c55d]"
  },
  {
    id: "bath-bar",
    brand: "안심손잡이",
    name: "욕실 보조바 흡착형 홈케어 세트",
    price: 45000,
    imageAlt: "욕실 보조바 상품 이미지",
    tags: ["욕실안전"],
    rating: 4.3,
    reviews: 52,
    delivery: "무료배송",
    description: "욕실에서 손을 짚기 좋은 보조바",
    likes: "6,430",
    gradient: "from-[#dde1e4] via-[#ffffff] to-[#c7b299]"
  },
  {
    id: "mat-care",
    brand: "슬립케어",
    name: "생활안전 욕실 미끄럼 방지 매트",
    price: 32000,
    imageAlt: "욕실 미끄럼 방지 매트 이미지",
    tags: ["욕실용품"],
    rating: 4.2,
    reviews: 46,
    delivery: "무료배송",
    description: "물기 많은 바닥을 위한 안정 매트",
    likes: "3,112",
    gradient: "from-[#e9f3ef] via-[#ffffff] to-[#b9d1c5]"
  },
  {
    id: "corner",
    brand: "홈세이프",
    name: "투명 모서리 보호대 실속형 세트",
    price: 15900,
    imageAlt: "투명 모서리 보호대 이미지",
    tags: ["생활안전"],
    rating: 4.1,
    reviews: 29,
    delivery: "무료배송",
    description: "집 안 가구 모서리를 부드럽게 보호",
    likes: "1,908",
    gradient: "from-[#f1e2dd] via-[#ffffff] to-[#d3b68f]"
  }
];

function Header({
  onDemo,
  onHome
}: {
  onDemo: (label: string) => void;
  onHome: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#eeeeee] bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1560px] items-center px-4 md:h-[92px] md:px-8">
        <button
          type="button"
          onClick={onHome}
          className="mr-5 text-[25px] font-black tracking-[-0.03em] text-black md:mr-14 md:text-[31px]"
        >
          선물하기
        </button>
        <nav className="hidden items-center gap-9 text-[17px] font-black text-black md:flex">
          <button type="button" onClick={onHome}>
            홈
          </button>
          <button type="button" onClick={() => onDemo("위시")}>
            위시
          </button>
          <button type="button" onClick={() => onDemo("선물함")} className="relative">
            선물함
            <span className="absolute -right-2 -top-1 h-1.5 w-1.5 rounded-full bg-[#ff3b30]" />
          </button>
          <span className="h-5 w-px bg-[#dddddd]" />
          <button type="button" onClick={() => onDemo("카테고리")} className="flex items-center gap-4">
            <Menu className="h-7 w-7" aria-hidden="true" />
            카테고리
          </button>
        </nav>
        <div className="ml-auto flex items-center gap-4 md:gap-7">
          <button type="button" onClick={() => onDemo("검색")} aria-label="검색">
            <Search className="h-7 w-7 stroke-[2.2]" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => onDemo("장바구니")} aria-label="장바구니">
            <ShoppingBag className="h-7 w-7 stroke-[2.2]" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onDemo("배송지")}
            className="hidden items-center gap-1 text-[15px] font-medium text-black sm:flex"
          >
            배준상
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onDemo("기업용 선물하기")}
            className="hidden rounded-full bg-[#f5f7fc] px-6 py-3 text-[16px] font-black text-[#2862cf] md:block"
          >
            기업용 선물하기 ›
          </button>
        </div>
      </div>
    </header>
  );
}

function BrandHero() {
  return (
    <section className="pt-9">
      <div className="h-[120px] rounded-[14px] bg-[#dfbdb5] md:h-[180px]" />
      <div className="-mt-[50px] text-center md:-mt-[58px]">
        <div className="mx-auto grid h-[100px] w-[100px] place-items-center rounded-full border border-[#e6dedb] bg-white shadow-sm md:h-[118px] md:w-[118px]">
          <SafeImage
            src="/images/didim-main.png"
            alt="디딤 브랜드 대표 이미지"
            className="h-[76px] w-[76px] rounded-full object-cover md:h-[88px] md:w-[88px]"
            fallbackClassName="rounded-full"
            fallbackLabel="디딤"
          />
        </div>
        <h1 className="mt-3 text-[26px] font-black tracking-[-0.04em] text-black md:text-[28px]">디딤</h1>
      </div>
      <div className="mt-3 aspect-[16/9] w-full overflow-hidden bg-[#111]">
        <SafeImage
          src="/images/didim-night.png"
          alt="디딤 야광 패드 브랜드 메인 이미지"
          className="h-full w-full object-cover"
          fallbackLabel="DIDIM"
        />
      </div>
    </section>
  );
}

function SortBar() {
  return (
    <div className="mt-8 flex justify-end gap-3 text-[15px] font-medium text-[#888] md:mt-12">
      <button type="button">↕ MD 추천순</button>
      <button type="button">▽ 가격</button>
    </div>
  );
}

function ProductTile({
  product,
  onOpen,
  onDemo
}: {
  product: GridProduct;
  onOpen: (product: GridProduct) => void;
  onDemo: (label: string) => void;
}) {
  return (
    <article className="min-w-0">
      <button
        type="button"
        onClick={() => onOpen(product)}
        className="block w-full text-left"
        aria-label={`${product.name} 상세 보기`}
      >
        <div className="relative aspect-square overflow-hidden rounded-[10px] bg-[#f3f3f3]">
          {product.image ? (
            <SafeImage
              src={product.image}
              alt={product.imageAlt}
              className="h-full w-full object-cover"
              fallbackLabel={product.brand}
            />
          ) : (
            <div className={`h-full w-full bg-gradient-to-br ${product.gradient}`} />
          )}
          {product.exclusive ? (
            <span className="absolute right-2 top-2 rounded-[4px] bg-black px-2 py-1 text-[13px] font-black text-[#ffe300]">
              단독
            </span>
          ) : null}
        </div>
        <p className="mt-4 text-[16px] font-black leading-5 text-[#222]">{product.brand} ›</p>
        <h2 className="mt-1 line-clamp-2 min-h-[48px] text-[18px] font-medium leading-6 tracking-[-0.03em] text-[#333]">
          {product.name}
        </h2>
        <p className="mt-1 text-[19px] font-black tracking-[-0.02em] text-black">
          {product.discount ? (
            <span className="mr-1 text-[#ff3b30]">{product.discount}%</span>
          ) : null}
          {product.price.toLocaleString("ko-KR")}원
        </p>
        {product.giftNote ? (
          <p
            className={`mt-2 line-clamp-1 text-[14px] font-medium ${
              product.giftNote.includes("최대") ? "text-[#ff3b30]" : "text-[#777]"
            }`}
          >
            {product.giftNote}
          </p>
        ) : (
          <p className="mt-2 h-[21px]" />
        )}
      </button>
      <div className="mt-7 flex items-center gap-6 text-[#9b9b9b]">
        <button type="button" onClick={() => onDemo("장바구니")} aria-label="장바구니 담기">
          <Briefcase className="h-[22px] w-[22px]" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => onDemo("위시")}
          className="flex items-center gap-1 text-[15px]"
          aria-label="위시 담기"
        >
          <Heart className="h-[22px] w-[22px]" aria-hidden="true" />
          {product.likes}
        </button>
      </div>
    </article>
  );
}

function ProductGrid({
  onOpen,
  onDemo
}: {
  onOpen: (product: GridProduct) => void;
  onDemo: (label: string) => void;
}) {
  return (
    <section className="mt-5 grid grid-cols-2 gap-x-4 gap-y-10 pb-24 md:grid-cols-3 md:gap-x-7 md:gap-y-14 xl:grid-cols-4">
      {gridProducts.map((product) => (
        <ProductTile key={product.id} product={product} onOpen={onOpen} onDemo={onDemo} />
      ))}
    </section>
  );
}

function Sidebar({ onShare }: { onShare: () => void }) {
  return (
    <aside className="border-t border-[#e5e5e5] bg-white px-0 py-8 lg:sticky lg:top-[92px] lg:h-[calc(100vh-92px)] lg:border-l lg:border-t-0 lg:px-9">
      <section>
        <div className="flex items-center gap-2">
          <h2 className="text-[24px] font-black tracking-[-0.04em] text-black">베스트셀러</h2>
          <span className="rounded-full bg-[#fff1ef] px-2 py-1 text-[14px] font-black text-[#ff6b5f]">
            TOP 5
          </span>
          <Info className="h-[18px] w-[18px] text-[#aaa]" aria-hidden="true" />
        </div>
        <ol className="mt-7 space-y-3">
          {bestItems.map((item) => (
            <li key={item.name} className="flex gap-3">
              <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[5px] bg-[#f2f2f2]">
                <SafeImage
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                  fallbackLabel="DIDIM"
                />
              </div>
              <div className="min-w-0 pt-1">
                <p className="line-clamp-1 text-[16px] font-medium tracking-[-0.03em] text-[#666]">
                  {item.name}
                </p>
                <p className="mt-1 text-[17px] font-black text-black">
                  {item.discount ? <span className="mr-1 text-[#ff3b30]">{item.discount}</span> : null}
                  {item.price}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-12">
        <h2 className="text-[24px] font-black tracking-[-0.04em] text-black">공유하기</h2>
        <div className="mt-5 flex gap-4">
          {[
            ["TALK", "bg-[#ffe500] text-black"],
            ["f", "bg-[#1877f2] text-white text-[34px]"],
            ["cafe", "bg-[#ef3f4f] text-white text-[12px]"],
            ["URL", "bg-[#bfbfbf] text-white"]
          ].map(([label, className]) => (
            <button
              key={label}
              type="button"
              onClick={onShare}
              className={`grid h-[48px] w-[48px] place-items-center rounded-full text-[13px] font-black ${className}`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>
    </aside>
  );
}

function DetailPurchasePanel({
  product,
  onDemo,
  onShare
}: {
  product: GridProduct;
  onDemo: (label: string) => void;
  onShare: () => void;
}) {
  return (
    <aside className="border-t border-[#e5e5e5] bg-white py-8 lg:sticky lg:top-[92px] lg:h-[calc(100vh-92px)] lg:border-l lg:border-t-0 lg:px-9">
      <div className="border border-[#e5e5e5] bg-white">
        <p className="border-b border-[#eeeeee] px-5 py-3 text-center text-[15px] font-bold text-[#3a87f5]">
          선물 받은 친구가 직접 옵션 변경 가능하니 안심하세요!
        </p>
        <div className="flex items-center justify-between border-b border-[#eeeeee] px-5 py-4">
          <span className="text-[16px] font-black">선택</span>
          <ChevronDown className="h-5 w-5 rotate-180 text-[#aaa]" aria-hidden="true" />
        </div>
        <button
          type="button"
          onClick={() => onDemo("옵션 선택")}
          className="flex w-full items-center justify-between px-5 py-4 text-left text-[15px] text-[#333]"
        >
          <span>{product.name.replace("디딤 ", "").slice(0, 24)}</span>
          <span className="h-6 w-6 rounded-full border border-[#dddddd]" />
        </button>
      </div>

      <div className="mt-6 rounded-[4px] bg-[#fafafa] p-5 lg:mt-[420px]">
        <div className="flex items-center justify-between">
          <span className="text-[16px] font-black">총 결제 금액</span>
          <strong className="text-[24px] font-black tracking-[-0.04em]">
            {product.price.toLocaleString("ko-KR")}원
          </strong>
        </div>
        <button
          type="button"
          onClick={() => onDemo("쿠폰 받기")}
          className="mt-4 flex w-full items-center justify-between rounded-[6px] bg-[#fff0ee] px-4 py-3 text-left text-[15px] font-bold text-[#ff4b3e]"
        >
          <span>
            36,900원으로
            <br />
            구매가능한 쿠폰이 있어요
          </span>
          <span className="flex items-center gap-1">
            <Download className="h-4 w-4" aria-hidden="true" />
            받기
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={() => onDemo("선물상자 담기")}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-[4px] border border-[#e1e1e1] py-4 text-[17px] font-bold text-[#bdbdbd]"
      >
        <ShoppingBag className="h-5 w-5" aria-hidden="true" />
        선물상자 담기
      </button>

      <div className="mt-6 grid grid-cols-[56px_56px_1fr_1fr] gap-2">
        <button type="button" onClick={() => onDemo("위시")} className="text-center text-[12px]">
          <Heart className="mx-auto h-7 w-7" aria-hidden="true" />
          3만+
        </button>
        <button type="button" onClick={onShare} className="text-center text-[12px]">
          <Share2 className="mx-auto h-7 w-7" aria-hidden="true" />
          공유
        </button>
        <button
          type="button"
          onClick={() => onDemo("나에게 선물")}
          className="rounded-[6px] bg-[#111] px-4 py-4 text-[18px] font-black text-white"
        >
          나에게 선물
        </button>
        <button
          type="button"
          onClick={() => onDemo("선물하기")}
          className="rounded-[6px] bg-[#ffe500] px-4 py-4 text-[18px] font-black text-black"
        >
          선물하기
        </button>
      </div>
    </aside>
  );
}

function ProductSummary({
  product,
  onDemo
}: {
  product: GridProduct;
  onDemo: (label: string) => void;
}) {
  const salePrice = Math.max(product.price - 3000, 0);

  return (
    <section className="grid gap-9 py-9 lg:grid-cols-[460px_1fr]">
      <div className="relative aspect-square overflow-hidden bg-[#f3f3f3]">
        {product.image ? (
          <SafeImage
            src={product.image}
            alt={product.imageAlt}
            className="h-full w-full object-cover"
            fallbackLabel={product.brand}
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${product.gradient}`} />
        )}
        {product.exclusive ? (
          <span className="absolute right-3 top-3 rounded-[4px] bg-black px-3 py-2 text-[16px] font-black text-[#ffe500]">
            단독
          </span>
        ) : null}
        <span className="absolute bottom-4 right-4 rounded-full bg-black/55 px-3 py-1 text-[14px] font-black text-white">
          1/4
        </span>
      </div>

      <div className="pt-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-[#e5e5e5] bg-white">
            <SafeImage
              src="/images/didim-main.png"
              alt="디딤 브랜드 아이콘"
              className="h-7 w-7 rounded-full object-cover"
              fallbackClassName="rounded-full"
              fallbackLabel="디"
            />
          </div>
          <span className="text-[18px] font-black">{product.brand} ›</span>
        </div>
        <p className="mt-5 text-[18px] font-medium text-[#2986ff]">생활안전선물</p>
        <h1 className="mt-3 max-w-xl text-[24px] font-medium leading-9 tracking-[-0.04em] text-black">
          {product.name}
          <br />
          낮에는 투명하게, 밤에는 길이 되다
        </h1>
        <p className="mt-3 text-[15px] text-[#777]">
          <span className="text-[#ffdb00]">★★★★★</span> 11,242건의 선물후기›
        </p>
        <p className="mt-7 text-[21px] font-black">{product.price.toLocaleString("ko-KR")}원</p>
        <p className="mt-1 text-[24px] font-black text-[#ff3b30]">
          최대혜택가 {salePrice.toLocaleString("ko-KR")}원⌄
        </p>

        <div className="mt-7 max-w-xl space-y-3">
          <div className="rounded-[6px] border border-[#bed7ff] bg-[#f2f7ff] px-4 py-3 text-[16px] font-bold text-[#555]">
            💙 나에게 선물 시 가장 저렴해요
          </div>
          <button
            type="button"
            onClick={() => onDemo("포인트 사용")}
            className="flex w-full items-center justify-between rounded-[6px] border border-[#e5e5e5] px-4 py-3 text-[16px] font-bold text-[#555]"
          >
            <span>🟡 포인트 사용 시 0원에 구매 가능해요</span>
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-7 border-t border-[#eeeeee] pt-6 text-center text-[16px] leading-8 text-[#777]">
          <p>
            배송정보 <strong className="mx-2 text-[#333]">배송비 포함</strong> 도서산간 추가 배송비 안내 ⓘ
          </p>
          <p className="text-[#333]">도서산간 배송 가능</p>
        </div>

        <button
          type="button"
          onClick={() => onDemo("기획전 보기")}
          className="mt-5 w-full max-w-xl rounded-[6px] bg-[#cceffa] py-4 text-[16px] font-black text-[#111]"
        >
          상반기 BEST 아이템 특가 보러가기
        </button>

        <div className="mt-9 max-w-xl border-t border-[#eeeeee] py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[23px] font-black tracking-[-0.04em]">선물코드 만들기</h2>
              <p className="mt-1 text-[16px] text-[#888]">카톡 친구가 아니어도 선물할 수 있어요!</p>
            </div>
            <button
              type="button"
              onClick={() => onDemo("선물코드")}
              className="grid h-12 w-12 place-items-center rounded-[6px] border border-[#e5e5e5] text-xl"
              aria-label="선물코드 만들기"
            >
              ⛶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandRecommendations({ onOpen }: { onOpen: (product: GridProduct) => void }) {
  return (
    <section className="border-t border-[#eeeeee] py-8">
      <h2 className="text-[24px] font-black tracking-[-0.04em]">이 브랜드의 추천 상품</h2>
      <div className="mt-4 flex gap-2">
        {["다른구성", "인기상품", "신상품"].map((tab, index) => (
          <button
            key={tab}
            type="button"
            className={`rounded-full border px-5 py-2 text-[15px] font-bold ${
              index === 0 ? "border-black bg-black text-white" : "border-[#e0e0e0] bg-white text-[#555]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-5">
        {gridProducts.slice(1, 4).map((item) => (
          <button key={item.id} type="button" onClick={() => onOpen(item)} className="text-left">
            <div className="aspect-square overflow-hidden rounded-[8px] bg-[#f3f3f3]">
              {item.image ? (
                <SafeImage
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover"
                  fallbackLabel={item.brand}
                />
              ) : (
                <div className={`h-full w-full bg-gradient-to-br ${item.gradient}`} />
              )}
            </div>
            <p className="mt-3 line-clamp-2 text-[15px] leading-5 text-[#333]">{item.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

function DetailTabsContent() {
  const rows = [
    ["제품명", "디딤 투명 미끄럼 방지 야광 패드"],
    ["구성", "12 Pads / 15 x 15 cm"],
    ["소재", "투명 논슬립 패드 / 소프트 앰버 야광 라인"],
    ["용도", "욕실, 현관, 복도, 침실, 부모님 집"],
    ["두께", "가장자리 1mm 미만, 중앙부 약 3mm"],
    ["제조연월", "상품상세설명 참조"],
    ["소비자 안전을 위한 주의사항", "물기와 먼지를 제거한 후 부착해 주세요"],
    ["품질보증기준", "상품상세설명 참조"]
  ];

  return (
    <section className="border-t border-[#eeeeee] pb-24">
      <nav className="sticky top-[92px] z-20 flex gap-8 border-b border-[#eeeeee] bg-white py-5 text-[20px] font-medium text-[#777]">
        <a href="#description" className="border-b-2 border-black pb-3 font-black text-black">
          상품설명
        </a>
        <a href="#reviews" className="pb-3">
          선물후기 9,999+
        </a>
        <a href="#info" className="pb-3">
          상세정보
        </a>
      </nav>

      <div id="description" className="py-16">
        <SafeImage
          src="/images/didim-package-open.png"
          alt="디딤 상품 상세 설명 대표 이미지"
          className="mx-auto w-full max-w-[1064px] object-cover"
          fallbackLabel="DIDIM Detail"
        />
      </div>

      <div id="reviews" className="py-12">
        <h2 className="text-[30px] font-black tracking-[-0.04em]">
          선물만족도 <span className="text-[#aaa]">ⓘ</span>
        </h2>
        <div className="mt-16 text-center text-[34px] font-black tracking-[-0.04em]">
          <span className="text-[#e2e2e2]">“</span> 이 선물을{" "}
          <mark className="bg-[#ffe500] px-1">98%가 만족했어요!</mark>{" "}
          <span className="text-[#e2e2e2]">”</span>
        </div>
        <div className="mx-auto mt-12 max-w-[760px] space-y-5 text-[25px] font-black">
          {[
            ["매우 만족해요", "★★★★", "94%", "w-[94%]"],
            ["만족해요", "★★★☆", "4%", "w-[4%]"],
            ["아쉬워요", "★★☆☆", "1%", "w-[1%]"],
            ["매우 아쉬워요", "★☆☆☆", "1%", "w-[1%]"]
          ].map(([label, stars, percent, width], index) => (
            <div key={label} className={`grid grid-cols-[170px_150px_1fr_70px] items-center gap-4 ${index ? "text-[#aaa]" : ""}`}>
              <span>{label}</span>
              <span className={index ? "text-[#d0d0d0]" : "text-[#ffdb00]"}>{stars}</span>
              <span className="h-4 rounded-full bg-[#f0f0f0]">
                <span className={`block h-full rounded-full bg-[#ffe500] ${width}`} />
              </span>
              <span>{percent}</span>
            </div>
          ))}
        </div>
        <p className="mt-14 rounded-[8px] bg-[#f7f7f7] px-6 py-4 text-[16px] text-[#888]">
          ⓘ 후기에 포함된 본 상품에 대한 내용은 타인의 주관적인 의견으로, 상품의 실제 기능 및 효과와는 다를 수 있습니다.
        </p>
      </div>

      <div id="info" className="py-12">
        <h2 className="mb-7 text-[22px] font-medium">상품고시정보</h2>
        <dl className="border-t border-[#eeeeee]">
          {rows.map(([term, value]) => (
            <div key={term} className="grid grid-cols-[330px_1fr] border-b border-[#eeeeee] text-[17px]">
              <dt className="bg-[#f5f6f7] px-8 py-5 leading-7 text-[#333]">{term}</dt>
              <dd className="px-8 py-5 leading-7 text-[#555]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function ProductDetailPage({
  product,
  onHome,
  onOpen,
  onDemo,
  onShare
}: {
  product: GridProduct;
  onHome: () => void;
  onOpen: (product: GridProduct) => void;
  onDemo: (label: string) => void;
  onShare: () => void;
}) {
  return (
    <main className="mx-auto grid max-w-[1560px] grid-cols-1 gap-0 px-4 md:px-8 lg:grid-cols-[minmax(0,1048px)_360px]">
      <div className="lg:pr-9">
        <div className="border-b border-[#eeeeee] py-4">
          <button
            type="button"
            onClick={onHome}
            className="text-[15px] font-bold text-[#777] transition hover:text-black"
          >
            ‹ 디딤 브랜드 홈으로 돌아가기
          </button>
        </div>
        <ProductSummary product={product} onDemo={onDemo} />
        <BrandRecommendations onOpen={onOpen} />
        <DetailTabsContent />
      </div>
      <DetailPurchasePanel product={product} onDemo={onDemo} onShare={onShare} />
    </main>
  );
}

export default function Home() {
  const [detailProduct, setDetailProduct] = useState<GridProduct | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoLabel, setDemoLabel] = useState("데모 안내");
  const [toast, setToast] = useState("");
  const toastTimer = useRef<number | null>(null);

  const openDemo = useCallback((label: string) => {
    setDemoLabel(label);
    setDemoOpen(true);
  }, []);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 2200);
  }, []);

  const syncProductFromUrl = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("product");
    const product = productId
      ? gridProducts.find((item) => item.id === productId) ?? null
      : null;

    setDetailProduct(product);
  }, []);

  const goHome = useCallback(() => {
    setDetailProduct(null);
    window.history.pushState({}, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openDetail = useCallback((product: GridProduct) => {
    setDetailProduct(product);
    const params = new URLSearchParams(window.location.search);
    params.set("product", product.id);
    window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    syncProductFromUrl();

    const handlePopState = () => syncProductFromUrl();
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, [syncProductFromUrl]);

  useEffect(() => {
    return () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header onDemo={openDemo} onHome={goHome} />
      {detailProduct ? (
        <ProductDetailPage
          product={detailProduct}
          onHome={goHome}
          onOpen={openDetail}
          onDemo={openDemo}
          onShare={() => showToast("공유 기능은 데모입니다.")}
        />
      ) : (
        <main className="mx-auto grid max-w-[1560px] grid-cols-1 gap-0 px-4 md:px-8 lg:grid-cols-[minmax(0,1048px)_360px]">
          <div className="lg:pr-9">
            <BrandHero />
            <SortBar />
            <ProductGrid onOpen={openDetail} onDemo={openDemo} />
          </div>
          <Sidebar onShare={() => showToast("공유 기능은 데모입니다.")} />
        </main>
      )}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-7 right-7 grid h-[48px] w-[48px] place-items-center border border-[#d8d8d8] bg-white text-[#777]"
        aria-label="맨 위로 이동"
      >
        <ArrowUp className="h-6 w-6" aria-hidden="true" />
      </button>
      <DemoModal open={demoOpen} actionLabel={demoLabel} onClose={() => setDemoOpen(false)} />
      <Toast message={toast} />
    </div>
  );
}
