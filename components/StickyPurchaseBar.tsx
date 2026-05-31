"use client";

type StickyPurchaseBarProps = {
  onBuy: (actionLabel: string) => void;
};

export default function StickyPurchaseBar({ onBuy }: StickyPurchaseBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#ead8ba] bg-white/95 px-4 py-3 shadow-[0_-10px_30px_rgba(33,26,22,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-didim-brown/70">디딤 12개입</p>
          <p className="text-lg font-black text-didim-ink">49,000원</p>
        </div>
        <button
          type="button"
          onClick={() => onBuy("모바일 구매하기")}
          aria-label="모바일 구매하기 데모 모달 열기"
          className="min-w-32 rounded-lg bg-didim-ink px-5 py-3 text-sm font-black text-white transition hover:bg-didim-brown"
        >
          구매하기
        </button>
      </div>
    </div>
  );
}
