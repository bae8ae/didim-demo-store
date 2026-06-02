"use client";

import SafeImage from "@/components/SafeImage";

type HeroBannerProps = {
  onViewProduct: () => void;
};

export default function HeroBanner({ onViewProduct }: HeroBannerProps) {
  return (
    <section className="overflow-hidden rounded-lg bg-didim-ink shadow-soft">
      <div className="relative min-h-[390px]">
        <SafeImage
          src="/images/didim-night.png"
          alt="어두운 욕실 바닥에서 디딤 야광 패드가 발걸음을 안내하는 모습"
          className="absolute inset-0 h-full w-full object-cover"
          fallbackLabel="DIDIM Night Glow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/34 to-transparent" />
        <div className="relative z-10 flex min-h-[390px] max-w-xl flex-col justify-end px-6 py-8 sm:px-9">
          <span className="w-fit rounded-lg bg-white/92 px-4 py-2 text-sm font-black text-didim-brown">
            생활안전 · 부모님 선물
          </span>
          <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-6xl">
            밤중 한 걸음까지
            <br />
            안심을 선물하세요
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/86 sm:text-base">
            투명 미끄럼 방지 패드와 은은한 야광 라인으로 어두운 공간의 발걸음을
            안내합니다.
          </p>
          <button
            type="button"
            onClick={onViewProduct}
            className="mt-7 w-fit rounded-lg bg-[#f6b74b] px-5 py-3 text-sm font-black text-didim-ink shadow-glow transition hover:bg-[#ffd27a]"
          >
            디딤 패드 보기
          </button>
        </div>
      </div>
    </section>
  );
}
