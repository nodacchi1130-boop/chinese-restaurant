import type { Metadata } from "next";
import Link from "next/link";
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
  title: "中華料理 華福菜館 | 本格中華レストラン",
  description:
    "中華料理 華福菜館の公式サイト。横浜・新横浜で本格中華を楽しめる中華料理店。ご家族でのお食事やご宴会にぜひご利用ください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-50`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-red-500/30 bg-black">
            <div className="border-b border-red-900/60 bg-gradient-to-r from-black via-black to-red-950 px-4 py-2 text-xs text-amber-100">
              <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-1 sm:flex-row sm:items-center">
                <p>ご予約・お問い合わせはお電話にてお気軽にどうぞ</p>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-semibold tracking-[0.15em] text-amber-300">
                    045-577-9344
                  </p>
                  <p className="rounded-full border border-amber-400/60 bg-amber-500/10 px-3 py-1 text-[11px]">
                    電話受付時間 11:00〜15:00 / 17:00〜23:00
                  </p>
                </div>
              </div>
            </div>
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 backdrop-blur">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-red-600 via-amber-400 to-red-700 shadow-lg shadow-red-900/40" />
                <div>
                  <p className="text-sm text-amber-300 tracking-[0.25em]">
                    CHINESE DINING
                  </p>
                  <p className="text-lg font-semibold text-zinc-50">
                    中華料理 華福菜館
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/" className="hover:text-amber-200 transition">
                  トップ
                </Link>
                <Link href="/menu" className="hover:text-amber-200 transition">
                  メニュー
                </Link>
                <Link
                  href="/access"
                  className="hover:text-amber-200 transition"
                >
                  アクセス
                </Link>
                <Link
                  href="/reservation"
                  className="rounded-full border border-amber-400/60 bg-amber-400/10 px-4 py-1.5 text-amber-100 shadow-sm shadow-amber-500/30 hover:bg-amber-400/20 transition"
                >
                  予約フォーム
                </Link>
              </div>
            </nav>
          </header>
          <main className="mx-auto flex w-full max-w-5xl flex-1 px-4 py-10">
            {children}
          </main>
          <footer className="mt-8 border-t border-zinc-800/80 bg-black/80">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
              <p>
                〒222-0033 神奈川県横浜市港北区新横浜3-9-5 新横浜第3東昇ビルB1F
              </p>
              <p>
                TEL 045-577-9344 / 営業時間 11:00〜15:00・17:00〜23:00 / 定休日 なし
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
