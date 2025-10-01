import "@/styles/globals.css";
import type { Metadata } from "next";
// Pretendard는 글로벌 CSS에서 선언하여 사용합니다

export const metadata: Metadata = {
  title: "runnging-app",
  description: "런닝대회조회앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-pretendard`}>
        {children}
      </body>
    </html>
  );
}
