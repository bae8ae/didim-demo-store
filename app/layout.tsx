import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "디딤 DIDIM | 투명 미끄럼 방지 야광 패드 데모 스토어",
  description:
    "창업경진대회 발표용 디딤 DIDIM 투명 미끄럼 방지 야광 패드 상품 상세 데모 페이지입니다."
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
