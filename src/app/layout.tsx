import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "プログラミング技術記事総合まとめサイト",
  description: "TypeScript・React・Java・C#・Ruby・PHPの学習に役立つ技術記事を初級から上級まで幅広く厳選してお届けするまとめサイトです。",
  keywords: ["TypeScript", "React", "Java", "C#", "Ruby", "PHP", "技術記事", "プログラミング", "学習", "開発"],
  authors: [{ name: "Tech Articles Site" }],
  openGraph: {
    title: "プログラミング技術記事総合まとめサイト",
    description: "TypeScript・React・Java・C#・Ruby・PHPの学習に役立つ技術記事を初級から上級まで幅広く厳選してお届けします",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
