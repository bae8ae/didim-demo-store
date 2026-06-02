import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "선물샵 데모 | 디딤 생활안전 카테고리 목업",
  description:
    "디딤 투명 미끄럼 방지 야광 패드가 선물하기형 커머스에 입점했을 때를 보여주는 발표용 카테고리 목업입니다."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff8ec"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
