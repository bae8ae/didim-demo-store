import { Gift, Home, MapPin, MoonStar, Ruler, ShieldCheck } from "lucide-react";
import ImageFrame from "./ImageFrame";

type DetailSectionProps = {
  onDemoAction: (actionLabel: string) => void;
};

const scenes = [
  {
    title: "욕실 앞",
    description: "물기가 남는 문턱 주변의 첫 걸음을 더 안정적으로.",
    image: "/images/didim-night-use.png",
    alt: "밤에 욕실 앞 바닥에 부착된 디딤 야광 패드",
    icon: ShieldCheck
  },
  {
    title: "침대에서 화장실까지",
    description: "불을 켜지 않아도 이어지는 동선을 은은하게 안내.",
    image: "/images/didim-glow-closeup.png",
    alt: "어두운 실내에서 은은하게 빛나는 디딤 패드",
    icon: MoonStar
  },
  {
    title: "현관",
    description: "신발을 벗고 들어오는 짧은 구간에 미끄럼 방지 포인트.",
    image: "/images/didim-day-use.png",
    alt: "현관 바닥에 자연스럽게 어우러진 투명 디딤 패드",
    icon: Home
  },
  {
    title: "복도",
    description: "부모님 집, 펜션, 긴 복도에 반복 배치하기 좋은 12개 구성.",
    image: "/images/didim-detail-top.png",
    alt: "복도 동선에 배치된 디딤 패드 상세 이미지",
    icon: MapPin
  },
  {
    title: "아이 방",
    description: "아이의 야간 이동 동선에 낮은 두께의 안전 표시.",
    image: "/images/didim-product-main.png",
    alt: "아이 방 바닥에 사용할 수 있는 디딤 패드",
    icon: Ruler
  },
  {
    title: "부모님 집 선물",
    description: "크게 드러나지 않지만 매일 발밑에서 지켜주는 선물.",
    image: "/images/didim-package-front.png",
    alt: "부모님 선물용 디딤 패키지 전면",
    icon: Gift
  }
];

const specRows = [
  ["제품명", "디딤 투명 미끄럼 방지 야광 패드"],
  ["구성", "12개입"],
  ["크기", "15 x 15 cm"],
  ["두께", "가장자리 1mm 미만, 중앙부 약 3mm"],
  ["색상", "투명 / 소프트 앰버 글로우"],
  ["용도", "욕실, 복도, 현관, 침실, 부모님 집"],
  ["기능", "미끄럼 방지, 야간 동선 안내, 인테리어 친화 디자인"],
  ["주의사항", "물기와 먼지를 제거한 뒤 부착 권장"]
];

export default function DetailSection({ onDemoAction }: DetailSectionProps) {
  return (
    <>
      <section className="bg-didim-ink py-14 text-white" aria-labelledby="problem-title">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold text-didim-glow">Safety Insight</p>
            <h2 id="problem-title" className="mt-3 text-2xl font-black leading-tight sm:text-4xl">
              밤중 한 걸음이 가장 위험할 때가 있습니다
            </h2>
          </div>
          <p className="text-base leading-8 text-white/82">
            고령자, 아이, 반려동물, 야간 화장실 이용자는 어두운 공간에서 방향을
            잃거나 미끄러운 바닥에서 넘어질 위험이 있습니다. 기존 미끄럼 방지
            매트는 두껍고 눈에 띄며, 인테리어를 해치는 경우가 많습니다. 디딤은
            낮에는 보이지 않고, 밤에는 은은하게 길을 안내하는 새로운 안전
            패드입니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16" aria-labelledby="scene-title">
        <div className="max-w-2xl">
          <p className="text-sm font-bold text-didim-amber">Use Cases</p>
          <h2 id="scene-title" className="mt-2 text-2xl font-black text-didim-ink sm:text-3xl">
            생활 동선마다 자연스럽게 붙이는 클리어 홈 세이프티
          </h2>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scenes.map((scene) => {
            const Icon = scene.icon;

            return (
              <article key={scene.title} className="overflow-hidden rounded-lg border border-[#ead8ba] bg-white shadow-soft">
                <ImageFrame
                  src={scene.image}
                  alt={scene.alt}
                  label={scene.title}
                  ratio="aspect-[4/3]"
                  className="rounded-none border-0 shadow-none"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-didim-amber" aria-hidden="true" />
                    <h3 className="font-black text-didim-ink">{scene.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-didim-brown/78">
                    {scene.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16" aria-labelledby="detail-title">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <ImageFrame
            src="/images/didim-detail-top.png"
            alt="투명한 플라워 실루엣과 앰버 야광 라인이 보이는 디딤 상세 이미지"
            label="인테리어를 해치지 않는 클리어 홈 세이프티 디자인"
            ratio="aspect-[4/5] sm:aspect-[5/4]"
            className="shadow-soft"
          />
          <div>
            <p className="text-sm font-bold text-didim-amber">낮에는 투명하게, 밤에는 길이 되다</p>
            <h2 id="detail-title" className="mt-3 text-3xl font-black leading-tight text-didim-ink sm:text-4xl">
              Invisible by Day, Guiding by Night
            </h2>
            <p className="mt-5 text-base leading-8 text-didim-brown/82">
              디딤은 투명한 플라워 실루엣과 은은한 야광 라인을 결합한 미끄럼
              방지 패드입니다. 낮에는 바닥과 자연스럽게 어우러지고, 밤에는
              부드러운 빛으로 다음 발걸음을 알려줍니다. 안전용품이지만 생활
              공간의 분위기를 해치지 않도록 디자인했습니다.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-didim-cream p-4">
                <p className="text-sm font-black text-didim-ink">클리어 디자인</p>
                <p className="mt-1 text-sm leading-6 text-didim-brown/78">
                  낮에는 바닥 질감과 자연스럽게 어우러지는 투명 패드.
                </p>
              </div>
              <div className="rounded-lg bg-[#fff4dd] p-4">
                <p className="text-sm font-black text-didim-ink">소프트 앰버 글로우</p>
                <p className="mt-1 text-sm leading-6 text-didim-brown/78">
                  밤에는 눈부시지 않은 빛으로 다음 발걸음을 안내.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16" aria-labelledby="spec-title">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold text-didim-amber">Product Spec</p>
            <h2 id="spec-title" className="mt-2 text-2xl font-black text-didim-ink sm:text-3xl">
              상세 스펙
            </h2>
            <p className="mt-3 text-sm leading-6 text-didim-brown/78">
              발표용 검증 페이지 기준의 제품 정보입니다. 실제 양산 사양은 변경될 수
              있습니다.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-[#ead8ba] bg-white shadow-soft">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {specRows.map(([label, value]) => (
                  <tr key={label} className="border-b border-[#ead8ba] last:border-b-0">
                    <th scope="row" className="w-28 bg-didim-cream px-4 py-4 font-black text-didim-brown sm:w-40">
                      {label}
                    </th>
                    <td className="px-4 py-4 leading-6 text-didim-ink">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-didim-cream py-12 lg:py-16" aria-labelledby="gift-title">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold text-didim-amber">Gift Suggestion</p>
            <h2 id="gift-title" className="mt-2 text-3xl font-black leading-tight text-didim-ink sm:text-4xl">
              부모님께 드리는 가장 조용한 안전 선물
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-didim-brown/82">
              크게 드러나지 않지만 매일 발밑에서 지켜주는 선물. 디딤은 안전과
              감성을 함께 담은 생활 안전용품입니다.
            </p>
            <button
              type="button"
              onClick={() => onDemoAction("선물용 패키지 보기")}
              aria-label="선물용 패키지 보기 데모 모달 열기"
              className="mt-6 inline-flex rounded-lg bg-didim-ink px-5 py-3 text-sm font-black text-white transition hover:bg-didim-brown"
            >
              선물용 패키지 보기
            </button>
          </div>
          <ImageFrame
            src="/images/didim-package-open.png"
            alt="선물용 패키지가 열린 디딤 제품 이미지"
            label="Gift-ready package"
            ratio="aspect-[4/3]"
            className="shadow-soft"
          />
        </div>
      </section>
    </>
  );
}
