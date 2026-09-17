import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IBUKI NAGASE — Software Engineer",
  description:
    "長瀬唯楓のポートフォリオ。Go・Rustを中心に、人の感情にプラスを与える体験を仕組みから支える。開発実績と設計の考え方を紹介。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
