"use client";

import { Gift, Minus, Plus, ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";

type ProductInfoProps = {
  onBuy: (actionLabel: string) => void;
  onAddCart: () => void;
};

const basePrice = 49000;
const giftWrapPrice = 3000;

const options = [
  {
    id: "basic",
    title: "기본 12개입 패키지",
    description: "투명 야광 패드 12개, 사용 안내 카드 포함",
    extraPrice: 0
  },
  {
    id: "gift",
    title: "선물 포장 추가",
    description: "부모님 선물용 패키지 슬리브와 메시지 카드",
    extraPrice: giftWrapPrice
  }
] as const;

type OptionId = (typeof options)[number]["id"];

export default function ProductInfo({ onBuy, onAddCart }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<OptionId>("basic");

  const option = options.find((item) => item.id === selectedOption) ?? options[0];
  const totalPrice = useMemo(
    () => (basePrice + option.extraPrice) * quantity,
    [option.extraPrice, quantity]
  );

  const formatPrice = (price: number) => `${price.toLocaleString("ko-KR")}원`;

  return (
    <section className="rounded-lg border border-[#ead8ba] bg-white/90 p-5 shadow-soft sm:p-6">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-didim-ink px-3 py-1 text-xs font-bold text-white">
          공식 데모 스토어
        </span>
        <span className="rounded-full bg-didim-ivory px-3 py-1 text-xs font-bold text-didim-brown">
          실제 결제 불가
        </span>
      </div>

      <div className="mt-5">
        <p className="text-sm font-semibold text-didim-moss">
          Invisible by Day, Guiding by Night
        </p>
        <h1 className="mt-2 text-2xl font-black leading-tight text-didim-ink sm:text-3xl">
          디딤 투명 미끄럼 방지 야광 패드 12개입
        </h1>
        <p className="mt-2 text-sm text-didim-brown/80">
          Transparent Anti-Slip Glow Pads
        </p>
      </div>

      <div className="mt-5 flex items-end justify-between gap-4 border-y border-[#ead8ba] py-4">
        <div>
          <p className="text-xs font-semibold text-didim-brown/70">판매가</p>
          <p className="mt-1 text-3xl font-black text-didim-ink">
            {formatPrice(basePrice)}
          </p>
        </div>
        <div className="text-right text-sm font-semibold text-didim-brown">
          <p>평점 4.8 / 5.0</p>
          <p className="text-didim-brown/70">데모 리뷰 128개</p>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-[5.5rem_1fr] gap-y-3 text-sm">
        <dt className="font-bold text-didim-brown">구성</dt>
        <dd className="text-didim-ink">12 Pads / 15 x 15 cm</dd>
        <dt className="font-bold text-didim-brown">배송</dt>
        <dd className="text-didim-ink">무료배송</dd>
        <dt className="font-bold text-didim-brown">구매 혜택</dt>
        <dd className="text-didim-ink">첫 구매 3,000원 할인, 선물 포장 가능</dd>
      </dl>

      <fieldset className="mt-6">
        <legend className="text-sm font-bold text-didim-ink">옵션 선택</legend>
        <div className="mt-3 grid gap-2">
          {options.map((item) => {
            const checked = item.id === selectedOption;

            return (
              <label
                key={item.id}
                className={`block cursor-pointer rounded-lg border p-4 transition ${
                  checked
                    ? "border-didim-amber bg-[#fff4dd]"
                    : "border-[#ead8ba] bg-white hover:border-didim-moss"
                }`}
              >
                <input
                  type="radio"
                  name="package-option"
                  value={item.id}
                  checked={checked}
                  onChange={() => setSelectedOption(item.id)}
                  className="sr-only"
                />
                <span className="flex items-start justify-between gap-3">
                  <span>
                    <span className="block text-sm font-bold text-didim-ink">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-didim-brown/75">
                      {item.description}
                    </span>
                  </span>
                  <span className="shrink-0 text-sm font-bold text-didim-brown">
                    {item.extraPrice > 0 ? `+${formatPrice(item.extraPrice)}` : "포함"}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-didim-cream p-3">
        <span className="text-sm font-bold text-didim-ink">수량</span>
        <div className="flex items-center rounded-lg border border-[#dfc9aa] bg-white">
          <button
            type="button"
            aria-label="수량 줄이기"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            className="p-3 text-didim-brown transition hover:bg-didim-ivory"
          >
            <Minus className="h-4 w-4" aria-hidden="true" />
          </button>
          <output
            aria-live="polite"
            className="min-w-10 text-center text-sm font-black text-didim-ink"
          >
            {quantity}
          </output>
          <button
            type="button"
            aria-label="수량 늘리기"
            onClick={() => setQuantity((value) => Math.min(9, value + 1))}
            className="p-3 text-didim-brown transition hover:bg-didim-ivory"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm">
        <span className="font-bold text-didim-brown">예상 합계</span>
        <span className="text-xl font-black text-didim-ink">{formatPrice(totalPrice)}</span>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => onBuy("바로 구매하기")}
          aria-label="바로 구매하기 데모 모달 열기"
          className="rounded-lg bg-didim-ink px-4 py-4 text-sm font-black text-white transition hover:bg-didim-brown sm:col-span-3 lg:col-span-1"
        >
          바로 구매하기
        </button>
        <button
          type="button"
          onClick={onAddCart}
          aria-label="장바구니 담기 데모 토스트 표시"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-didim-brown bg-white px-4 py-4 text-sm font-black text-didim-brown transition hover:bg-didim-ivory"
        >
          <ShoppingBag className="h-4 w-4" aria-hidden="true" />
          장바구니 담기
        </button>
        <button
          type="button"
          onClick={() => onBuy("선물하기")}
          aria-label="선물하기 데모 모달 열기"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-didim-amber bg-[#fff4dd] px-4 py-4 text-sm font-black text-didim-brown transition hover:bg-didim-ivory"
        >
          <Gift className="h-4 w-4" aria-hidden="true" />
          선물하기
        </button>
      </div>
    </section>
  );
}
