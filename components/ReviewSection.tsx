import { Star } from "lucide-react";

const reviews = [
  {
    name: "데모 리뷰 01",
    text: "밤에 화장실 갈 때 바닥 위치가 보여서 훨씬 안심돼요."
  },
  {
    name: "데모 리뷰 02",
    text: "부모님 집 욕실 앞에 붙여드렸는데 디자인이 예뻐서 만족하셨어요."
  },
  {
    name: "데모 리뷰 03",
    text: "투명해서 낮에는 거의 티가 안 나고, 밤에는 은은하게 보여요."
  }
];

export default function ReviewSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16" aria-labelledby="review-title">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold text-didim-amber">Demo Reviews</p>
          <h2 id="review-title" className="mt-2 text-2xl font-black text-didim-ink sm:text-3xl">
            실제 구매 후기가 아닌 데모 리뷰입니다
          </h2>
        </div>
        <div className="inline-flex w-fit items-center gap-1 rounded-lg bg-white px-3 py-2 text-sm font-black text-didim-brown shadow-soft">
          <Star className="h-4 w-4 fill-didim-glow text-didim-glow" aria-hidden="true" />
          4.8 / 5.0 · 128개
        </div>
      </div>
      <div className="mt-7 grid gap-3 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-lg border border-[#ead8ba] bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-black text-didim-ink">{review.name}</p>
              <span className="rounded-full bg-didim-cream px-3 py-1 text-xs font-bold text-didim-brown">
                데모 리뷰
              </span>
            </div>
            <div className="mt-4 flex gap-1" aria-label="별점 5점 만점 중 5점">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-4 w-4 fill-didim-glow text-didim-glow"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-didim-brown/82">“{review.text}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}
