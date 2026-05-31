import { EyeOff, Moon, ShieldCheck } from "lucide-react";

const uspItems = [
  {
    title: "낮에는 투명하게",
    description: "바닥 인테리어를 해치지 않는 클리어 디자인",
    icon: EyeOff
  },
  {
    title: "밤에는 은은하게",
    description: "어두운 공간에서 발걸음을 안내하는 소프트 앰버 글로우",
    icon: Moon
  },
  {
    title: "미끄럼은 단단하게",
    description: "욕실, 현관, 복도에서 낙상 위험을 줄이는 논슬립 구조",
    icon: ShieldCheck
  }
];

export default function USPSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16" aria-labelledby="usp-title">
      <div className="max-w-2xl">
        <p className="text-sm font-bold text-didim-amber">미끄럼 방지와 야간 안내를 동시에</p>
        <h2 id="usp-title" className="mt-2 text-2xl font-black text-didim-ink sm:text-3xl">
          발밑에서 조용히 지켜주는 안전
        </h2>
      </div>
      <div className="mt-7 grid gap-3 md:grid-cols-3">
        {uspItems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-lg border border-[#ead8ba] bg-white p-5 shadow-soft"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-didim-ink text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-black text-didim-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-didim-brown/80">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
