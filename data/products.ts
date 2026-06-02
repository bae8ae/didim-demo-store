export type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
  imageAlt: string;
  tags: string[];
  rating: number;
  reviews: number;
  delivery: string;
  badge?: string;
  description: string;
  gradient?: string;
};

export const didimProduct: Product = {
  id: "didim-glow-pad",
  name: "디딤 투명 미끄럼 방지 야광 패드 12개입",
  price: 49000,
  image: "/images/didim-package-front.png",
  imageAlt: "디딤 투명 미끄럼 방지 야광 패드 선물 패키지 전면",
  tags: ["부모님 선물", "야간 안전", "미끄럼 방지", "선물포장 가능"],
  rating: 4.8,
  reviews: 128,
  delivery: "무료배송",
  badge: "추천",
  description: "낮에는 투명하게, 밤에는 길이 되다"
};

export const products: Product[] = [
  didimProduct,
  {
    id: "warm-sleep-pad",
    name: "온잠 수면 온열패드",
    price: 39000,
    imageAlt: "온잠 수면 온열패드 추상 상품 이미지",
    tags: ["숙면", "홈케어"],
    rating: 4.6,
    reviews: 86,
    delivery: "무료배송",
    description: "잠들기 전 편안한 온기를 더하는 생활 케어 패드",
    gradient: "from-[#f6d9aa] via-[#f9eee1] to-[#d9b37d]"
  },
  {
    id: "wrist-cushion",
    name: "마음온 손목 보호 쿠션",
    price: 24900,
    imageAlt: "마음온 손목 보호 쿠션 추상 상품 이미지",
    tags: ["생활건강", "선물추천"],
    rating: 4.7,
    reviews: 74,
    delivery: "무료배송",
    description: "손목 부담을 덜어주는 부드러운 데스크 쿠션",
    gradient: "from-[#cfd8c2] via-[#fff7ea] to-[#e0c39a]"
  },
  {
    id: "bath-mat",
    name: "슬립케어 욕실 매트",
    price: 32000,
    imageAlt: "슬립케어 욕실 매트 추상 상품 이미지",
    tags: ["욕실용품", "미끄럼방지"],
    rating: 4.5,
    reviews: 103,
    delivery: "무료배송",
    description: "물기 많은 욕실 바닥을 안정적으로 받쳐주는 매트",
    gradient: "from-[#d7e1de] via-[#ffffff] to-[#b9c9bd]"
  },
  {
    id: "sensor-light",
    name: "라이트홈 무드 센서등",
    price: 18900,
    imageAlt: "라이트홈 무드 센서등 추상 상품 이미지",
    tags: ["야간안전", "센서등"],
    rating: 4.9,
    reviews: 210,
    delivery: "오늘출발",
    description: "복도와 침대 옆을 은은하게 밝히는 자동 센서등",
    gradient: "from-[#2f271f] via-[#a86e27] to-[#f8ca75]"
  },
  {
    id: "indoor-shoes",
    name: "편안보행 실내화",
    price: 29000,
    imageAlt: "편안보행 실내화 추상 상품 이미지",
    tags: ["부모님 선물", "홈케어"],
    rating: 4.4,
    reviews: 62,
    delivery: "무료배송",
    description: "실내 이동에 안정감을 더하는 쿠션 실내화",
    gradient: "from-[#efe0c8] via-[#ffffff] to-[#c9ab83]"
  },
  {
    id: "corner-guard",
    name: "홈세이프 모서리 보호대",
    price: 15900,
    imageAlt: "홈세이프 모서리 보호대 추상 상품 이미지",
    tags: ["생활안전", "홈케어"],
    rating: 4.3,
    reviews: 49,
    delivery: "무료배송",
    description: "가구 모서리 충격을 줄여주는 투명 보호대",
    gradient: "from-[#eeeeea] via-[#fffaf2] to-[#bfa36f]"
  },
  {
    id: "bath-handle",
    name: "안심손잡이 욕실 보조바",
    price: 45000,
    imageAlt: "안심손잡이 욕실 보조바 추상 상품 이미지",
    tags: ["욕실안전", "부모님 선물"],
    rating: 4.6,
    reviews: 97,
    delivery: "무료배송",
    description: "욕실 출입과 기립을 도와주는 생활 안전 손잡이",
    gradient: "from-[#d4c7b5] via-[#fff8ed] to-[#8f7657]"
  },
  {
    id: "step-marker",
    name: "발끝안심 계단 야광 스티커",
    price: 12900,
    imageAlt: "발끝안심 계단 야광 스티커 추상 상품 이미지",
    tags: ["야간안전", "미끄럼방지"],
    rating: 4.5,
    reviews: 55,
    delivery: "무료배송",
    description: "어두운 계단 끝선을 부드럽게 표시하는 야광 스티커",
    gradient: "from-[#41352c] via-[#d49b3a] to-[#fff1b8]"
  },
  {
    id: "knee-care",
    name: "숨편한 무릎 보호 쿠션",
    price: 21900,
    imageAlt: "숨편한 무릎 보호 쿠션 추상 상품 이미지",
    tags: ["생활건강", "홈케어"],
    rating: 4.2,
    reviews: 41,
    delivery: "오늘출발",
    description: "집안일 중 무릎 부담을 줄여주는 쿠션형 패드",
    gradient: "from-[#e6d7bd] via-[#fafafa] to-[#a4b79d]"
  },
  {
    id: "door-safety",
    name: "도어케어 문틈 안전 가드",
    price: 9900,
    imageAlt: "도어케어 문틈 안전 가드 추상 상품 이미지",
    tags: ["생활안전", "인테리어"],
    rating: 4.1,
    reviews: 36,
    delivery: "무료배송",
    description: "문틈 끼임을 줄이는 부드러운 투명 가드",
    gradient: "from-[#f4eadb] via-[#ffffff] to-[#c7d4cf]"
  },
  {
    id: "night-path",
    name: "밤길안심 현관 라이트",
    price: 26900,
    imageAlt: "밤길안심 현관 라이트 추상 상품 이미지",
    tags: ["야간안전", "센서등"],
    rating: 4.7,
    reviews: 88,
    delivery: "무료배송",
    description: "현관과 복도 동선을 밝히는 충전식 라이트",
    gradient: "from-[#302823] via-[#7e6a4c] to-[#f5bd58]"
  }
];

export const categories = [
  "전체",
  "부모님 선물",
  "생활안전",
  "욕실용품",
  "미끄럼방지",
  "야간안전",
  "홈케어",
  "인테리어 생활용품"
];

export const sortOptions = ["추천순", "인기순", "가격순", "리뷰순"];
