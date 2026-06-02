"use client";

import { ChevronDown, Gift, Menu, Search, ShoppingBag } from "lucide-react";

type HeaderProps = {
  onDemoAction: (label: string) => void;
};

export default function Header({ onDemoAction }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#ead8ba] bg-white/95 backdrop-blur">
      <div className="border-b border-[#f0dfc2] bg-[#fff7e8] px-4 py-2 text-center text-xs font-bold text-[#6f4b24]">
        demo.gift/page/code/life_safety · 학교 과제용 비공식 커머스 목업
      </div>
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6">
        <a
          href="#main"
          className="flex shrink-0 items-center gap-2 text-2xl font-black tracking-tight text-didim-ink"
          aria-label="선물샵 데모 홈으로 이동"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#fee500] text-base">
            선
          </span>
          선물하기 데모
        </a>

        <nav className="hidden items-center gap-7 text-sm font-extrabold text-didim-ink lg:flex">
          {["홈", "추천", "선물함", "카테고리"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onDemoAction(`${item} 메뉴`)}
              className="transition hover:text-didim-amber"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => onDemoAction("검색")}
            aria-label="검색"
            className="grid h-10 w-10 place-items-center rounded-lg text-didim-ink transition hover:bg-didim-cream"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onDemoAction("장바구니")}
            aria-label="장바구니"
            className="grid h-10 w-10 place-items-center rounded-lg text-didim-ink transition hover:bg-didim-cream"
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onDemoAction("배송지 선택")}
            className="hidden items-center gap-1 rounded-lg px-3 py-2 text-sm font-bold text-didim-brown transition hover:bg-didim-cream md:flex"
          >
            배송지
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onDemoAction("기업용 선물하기")}
            className="hidden items-center gap-2 rounded-lg bg-[#f0f5ff] px-4 py-2 text-sm font-black text-[#2658b5] transition hover:bg-[#e3edff] md:flex"
          >
            <Gift className="h-4 w-4" aria-hidden="true" />
            기업용 선물하기
          </button>
          <button
            type="button"
            onClick={() => onDemoAction("모바일 메뉴")}
            aria-label="메뉴"
            className="grid h-10 w-10 place-items-center rounded-lg text-didim-ink transition hover:bg-didim-cream lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="mx-auto hidden max-w-7xl items-center gap-7 px-4 pb-4 text-sm font-extrabold text-didim-brown sm:px-6 lg:flex">
        {["MF", "랭킹", "생활안전", "부모님선물", "GiftX", "AI선물탐험", "체험단"].map(
          (item) => (
            <button
              key={item}
              type="button"
              onClick={() => onDemoAction(`${item} 하위 메뉴`)}
              className="transition hover:text-didim-amber"
            >
              {item}
            </button>
          )
        )}
      </div>
    </header>
  );
}
